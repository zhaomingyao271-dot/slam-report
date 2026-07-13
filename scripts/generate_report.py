#!/usr/bin/env python3
"""
Daily SLAM Morning Report Generator
Runs via GitHub Actions. Queries arXiv API for latest papers,
generates structured report, updates data.js, commits & pushes.
"""
import json, datetime, re, os, sys
import requests
import xml.etree.ElementTree as ET

REPO_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARXIV_API = "http://export.arxiv.org/api/query"

QUERIES = [
    ('SLAM+LiDAR+IMU', '(cat:cs.RO AND (all:SLAM OR all:LIO OR all:LiDAR-inertial) AND (all:mapping OR all:localization))'),
    ('GNSS+fusion', '(cat:cs.RO AND (all:GNSS OR all:GPS OR all:RTK) AND (all:LiDAR OR all:IMU) AND (all:fusion OR all:factor+graph))'),
    ('terrain+traversability', '(cat:cs.RO AND (all:terrain OR all:traversability OR all:elevation) AND (all:robot OR all:navigation OR all:UGV))'),
    ('off-road+mapping', '(cat:cs.RO AND (all:off-road OR all:unstructured) AND (all:mapping OR all:navigation))'),
    ('sensor+fusion+robot', '(cat:cs.RO AND (all:multi-sensor OR all:sensor+fusion) AND (all:LiDAR OR all:IMU) AND (all:robot OR all:vehicle))'),
]
MAX_RESULTS = 4
WEEKDAYS = ["星期一","星期二","星期三","星期四","星期五","星期六","星期日"]

def fetch_arxiv(query, max_results=4):
    url = f"{ARXIV_API}?search_query={query}&start=0&max_results={max_results}&sortBy=submittedDate&sortOrder=descending"
    try:
        resp = requests.get(url, timeout=30)
        root = ET.fromstring(resp.text)
        ns = {'atom': 'http://www.w3.org/2005/Atom'}
        papers = []
        for e in root.findall('atom:entry', ns):
            title = ' '.join(e.find('atom:title', ns).text.split())
            aid = e.find('atom:id', ns).text.split('/abs/')[-1].rstrip('v1').rstrip('v2')
            summary = ' '.join(e.find('atom:summary', ns).text.split())
            authors = ', '.join([a.find('atom:name', ns).text for a in e.findall('atom:author', ns)[:3]])
            pub = e.find('atom:published', ns).text[:10] if e.find('atom:published', ns) is not None else ''
            papers.append({'title': title, 'arxiv_id': aid, 'summary': summary, 'authors': authors, 'published': pub, 'url': f'https://arxiv.org/abs/{aid}'})
        return papers
    except Exception as e:
        print(f"[WARN] arXiv fetch error: {e}")
        return []

def score_paper(title, summary):
    keywords = {'slam': 2, 'lidar': 2, 'imu': 1, 'gnss': 2, 'rtk': 2, 'factor graph': 3, 'sensor fusion': 3, 'multi-sensor': 3, 'terrain': 3, 'traversability': 3, 'elevation': 3, 'off-road': 3, 'skid-steer': 4, 'tracked': 3, 'unstructured': 2, 'tightly-coupled': 3, 'tight coupling': 3, 'localization': 1, 'mapping': 1, 'navigation': 1, 'ugv': 2, 'odometry': 1, 'loop closure': 2, 'bundle adjustment': 2}
    text = (title + ' ' + summary).lower()
    score = 1
    for kw, pts in keywords.items():
        if kw in text: score += pts
    return min(5, score)

def extract_tags(title, summary):
    tags = [{'text': 'arXiv', 'cls': 'venue'}]
    text = (title + summary).lower()
    if any(k in text for k in ['factor graph', 'tightly-coupled', 'terrain', 'traversability', 'off-road', 'skid-steer']):
        tags.append({'text': '精读', 'cls': 'recommend'})
    else:
        tags.append({'text': '泛读', 'cls': 'venue'})
    if any(k in text for k in ['slam', 'lidar', 'lio']):
        tags.append({'text': 'LiDAR', 'cls': 'core'})
    if any(k in text for k in ['gnss', 'gps', 'rtk', 'imu']):
        tags.append({'text': '融合', 'cls': 'method'})
    return tags

CURATED_PROJECTS = [
    {'name': 'FastDEM (实时2.5D高程建图)', 'url': 'https://github.com/Ikhyeon-Cho/FastDEM', 'stars': '活跃 (ROS2)', 'highlights': '100+Hz Jetson Orin; 纯CPU(Eigen); KF+分位数; 可通行性后处理; ROS1/ROS2', 'difficulty': '★★☆☆☆', 'value': '★★★★★ 最优轻量高程建图'},
    {'name': 'MOLA (模块化LiDAR SLAM)', 'url': 'https://github.com/MOLAorg/mola', 'stars': '活跃 (ROS2 Humble/Jazzy)', 'highlights': 'YAML管道; RTK级户外地理参考; LiDAR+IMU+GNSS; 模块化可扩展', 'difficulty': '★★★☆☆', 'value': '★★★★★ 最完整模块化SLAM框架'},
    {'name': 'LIO-Localization (ROS2)', 'url': 'https://github.com/wdc3iii/LIO-Localization', 'stars': '活跃 (FAST-LIO2/SPARK)', 'highlights': 'ROS2 Humble原生; Livox/Velodyne/Ouster; Docker+GPU; 建图+重定位', 'difficulty': '★★☆☆☆', 'value': '★★★★★ 最佳ROS2工程化LIO'},
    {'name': 'Okawara Skid-Steer因子图', 'url': 'https://github.com/TakuOkawara/full_linear_wheel_odometry_factor', 'stars': '学术配套 (IEEE+RAS)', 'highlights': '首个Skid-Steer专用紧耦合方案; 在线运动学标定; 8种地形验证', 'difficulty': '★★★★☆', 'value': '★★★★★ 履带平台必读'},
]

CURATED_TRENDS = [
    {'title': 'arXiv自动化日报已部署', 'body': '本期开始由GitHub Actions自动生成——每天UTC 01:00从arXiv API拉取最新论文，自动生成结构化报告并推送GitHub Pages。'},
    {'title': '因子图优化从固定协方差→自适应可信度驱动', 'body': '自适应因子图(IET ITS 2026)用残差可信度评估动态调节传感器因子权重——可信度驱动替代固定协方差成为融合新范式。'},
    {'title': '3D Gaussian Splatting全面渗透LiDAR SLAM', 'body': '实时LiDAR GS SLAM（>20FPS）、Neural BA——GS从视觉稠密建图扩展为LiDAR建图/BA的统一表示。'},
    {'title': 'INS中心化融合+地球自转预积分', 'body': 'IC-GLI将IMU从辅助传感器提升为融合中心——传统INS方法论向SLAM领域渗透，对GNSS退化场景更有优势。'},
    {'title': '可通行性从几何特征→学习范式', 'body': '自监督+世界模型+Transformer（TerrainFormer, 2026.06）正在取代手工几何特征成为越野可通行性评估主流。'},
    {'title': 'FMCW LiDAR Doppler——下一代传感器融合范式', 'body': 'DOFS首次系统集成FMCW LiDAR Doppler速度测量——速度维度补充距离维度，改变LiDAR-IMU融合基本假设。'},
]

def generate_report():
    today = datetime.date.today().strftime('%Y-%m-%d')
    today_dt = datetime.date.today()
    
    seen = set()
    all_papers = []
    for name, q in QUERIES:
        batch = fetch_arxiv(q, MAX_RESULTS)
        for p in batch:
            if p['arxiv_id'] not in seen:
                seen.add(p['arxiv_id'])
                p['score'] = score_paper(p['title'], p['summary'])
                all_papers.append(p)
        print(f"  {name}: {len(batch)} fetched")
    
    all_papers.sort(key=lambda x: -x.get('score', 1))
    top = all_papers[:10]
    
    papers = []
    for p in top:
        stars = p.get('score', 3)
        summary = p['summary']
        sent = summary[:150].rsplit('.', 1)[0] + '。' if '.' in summary[:150] else summary[:120] + '...'
        papers.append({
            'title': p['title'][:100],
            'venue': f"arXiv, {p.get('published','')}" if p.get('published') else 'arXiv (最新)',
            'authors': p.get('authors', 'Unknown'),
            'stars': min(5, stars),
            'contribution': sent,
            'approach': summary[:120] + '...' if len(summary) > 120 else summary,
            'innovation': '详见原文 (arXiv链接)',
            'recommend': 'must-read' if stars >= 4 else 'skim',
            'url': p['url'],
            'tags': extract_tags(p['title'], summary)
        })
    
    report = {
        'date': today,
        'dateDisplay': f'{today_dt.year}年{today_dt.month}月{today_dt.day}日 {WEEKDAYS[today_dt.weekday()]}',
        'papers': papers,
        'projects': CURATED_PROJECTS,
        'trends': CURATED_TRENDS,
        'opportunities': {
            'masters': [
                {'title': '自适应因子图可信度评估在丘陵履带平台的适配', 'detail': '自适应FGO残差可信度+履带运动学因子——动态可信度替代固定协方差。', 'meta': '"Credibility-Driven Adaptive FGO for Tracked Platform SLAM in GNSS-Degraded Hilly Terrain"'},
                {'title': 'arXiv论文复现：选择本期评分≥4★论文快速验证', 'detail': '本期评分高的论文优先复现到履带平台评估。', 'meta': '系统评估+复现：对标最新方法在丘陵场景的表现'},
            ],
            'topConference': [
                {'title': '可信度驱动+原始GNSS紧耦合的履带四传感器融合', 'detail': '自适应FGO残差评估+GLINS原始GNSS+Okawara履带因子——可信度驱动的紧耦合。', 'meta': '目标: IEEE RA-L + IROS 2027'},
            ],
            'deployable': [
                {'title': '【短期】MOLA+FastDEM+RTK基础管道', 'detail': 'MOLA模块化LIO+FastDEM高程+RTK——即用型配置。', 'meta': '预计 1-2 月'},
                {'title': '【中期】自适应FGO+GNSS切换+Nav2集成', 'detail': '自适应因子图+农业GNSS切换策略+自定义Nav2代价图。', 'meta': '预计 3-6 月'},
                {'title': '【长期】完整丘陵履带SLAM栈', 'detail': '标准化架构+自适应融合+履带运动学的完整方案。', 'meta': '预计 6-12 月'},
            ]
        },
        'actions': [
            {'priority': 'P0', 'title': '浏览本期论文列表，标记精读论文', 'time': '30分钟', 'type': '文献'},
            {'priority': 'P0', 'title': '检查 FastDEM/MOLA/LIO-Localization 是否有更新', 'time': '30分钟', 'type': '工程'},
            {'priority': 'P1', 'title': '阅读评分≥4★论文摘要，标注可复现方法', 'time': '1小时', 'type': '调研'},
            {'priority': 'P2', 'title': '更新研究文档：整理本周精读论文笔记', 'time': '1小时', 'type': '笔记'},
        ]
    }
    
    # Save report JSON
    os.makedirs(os.path.join(REPO_PATH, 'reports'), exist_ok=True)
    rpath = os.path.join(REPO_PATH, 'reports', f'{today}.json')
    with open(rpath, 'w') as f:
        json.dump(report, f, ensure_ascii=False, indent=2)
    print(f"[OK] Report saved to {rpath}")
    
    # Update data.js
    update_data_js(REPO_PATH, report)
    print(f"[OK] data.js updated for {today}")
    print(f"  Papers: {len(papers)} (scores: {[p.get('stars',0) for p in papers]})")
    print(f"  Projects: {len(CURATED_PROJECTS)}")

def update_data_js(repo_path, report):
    today = report['date']
    path = os.path.join(repo_path, 'data.js')
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    existing = re.findall(r'var TODAY=\{.*?\};\nif\(\!G\("' + re.escape(today) + r'"\)\) S\(TODAY\);\n', content, re.DOTALL)
    if existing:
        content = re.sub(r'var TODAY=\{.*?\};\nif\(\!G\("' + re.escape(today) + r'"\)\) S\(TODAY\);\n', '', content, re.DOTALL)
    
    idx = content.index('function G(k)')
    ns = '\nvar TODAY=' + json.dumps(report, ensure_ascii=False) + ';\nif(!G("' + today + '")) S(TODAY);\n\n'
    content = content[:idx].rstrip() + ns + content[idx:]
    
    td = datetime.date.today()
    content = re.sub(r'data-date="\d{4}-\d{2}-\d{2}"><span class="date-dot"></span>今日 \d+/\d+', f'data-date="{today}"><span class="date-dot"></span>今日 {td.month}/{td.day}', content)
    content = re.sub(r'var R=G\("\d{4}-\d{2}-\d{2}"\)\|\|SEED;', f'var R=G("{today}")||SEED;', content)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  data.js updated for {today}")

if __name__ == '__main__':
    generate_report()
