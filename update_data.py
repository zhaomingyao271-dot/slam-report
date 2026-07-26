import json, datetime, os, sys, re

repo_path = sys.argv[1]
today_report = json.loads(sys.argv[2])
today = today_report["date"]

with open(os.path.join(repo_path, 'data.js'), 'r', encoding='utf-8') as f:
    content = f.read()

# === 阶段1：同日期去重（移除已有的同日期块） ===
existing = re.findall(r'var TODAY=\{.*?\};\nif\(\!G\("' + re.escape(today) + r'"\)\) S\(TODAY\);\n', content, re.DOTALL)
if existing:
    count = len(existing)
    print(f"发现 {count} 个已有 {today} 的重复块，先移除")
    content = re.sub(
        r'var TODAY=\{.*?\};\nif\(\!G\("' + re.escape(today) + r'"\)\) S\(TODAY\);\n',
        '', content, re.DOTALL)

# === 阶段2：扫描所有历史块，收集已出现的URL ===
today_pattern = re.compile(r'var TODAY=(\{.*?\});\nif\(!G\("(\d{4}-\d{2}-\d{2})"\)\) S\(TODAY\);\n', re.DOTALL)
seen_paper_urls = set()
seen_project_urls = set()

for block_json, date_str in re.findall(today_pattern, content):
    try:
        data = json.loads(block_json)
    except:
        continue
    for paper in data.get('papers', []):
        url = paper.get('url', '').split('?')[0].rstrip('/')
        if url:
            seen_paper_urls.add(url)
    for proj in data.get('projects', []):
        url = proj.get('url', '').split('?')[0].rstrip('/')
        if url:
            seen_project_urls.add(url)

print(f"历史去重库: {len(seen_paper_urls)} 篇论文, {len(seen_project_urls)} 个项目")

# === 阶段3：从新报告中移除已出现在历史中的论文/项目 ===
new_papers = []
dedup_paper_count = 0
for paper in today_report.get('papers', []):
    url = paper.get('url', '').split('?')[0].rstrip('/')
    if url and url in seen_paper_urls:
        print(f"  ★ 跨日期去重论文: {paper.get('title','')[:50]}...")
        dedup_paper_count += 1
    else:
        new_papers.append(paper)

new_projects = []
dedup_proj_count = 0
for proj in today_report.get('projects', []):
    url = proj.get('url', '').split('?')[0].rstrip('/')
    if url and url in seen_project_urls:
        print(f"  ★ 跨日期去重项目: {proj.get('name','')}")
        dedup_proj_count += 1
    else:
        new_projects.append(proj)

print(f"跨日期去重: 论文 {dedup_paper_count} 篇, 项目 {dedup_proj_count} 个")

today_report['papers'] = new_papers
today_report['projects'] = new_projects

# === 阶段4：插入新 TODAY 块 ===
idx = content.index('function G(k)')
before = content[:idx]
after = content[idx:]
new_section = '\nvar TODAY=' + json.dumps(today_report, ensure_ascii=False) + ';\nif(!G("' + today + '")) S(TODAY);\n\n'
content = before.rstrip() + new_section + after

# === 阶段5：清理所有历史同日期重复块 ===
dates_seen = set()
def dedup_today_blocks(match):
    d = match.group(2)
    if d in dates_seen:
        return ''
    dates_seen.add(d)
    return match.group(0)

content = re.sub(
    r'var TODAY=(\{.*?\});\nif\(\!G\("(\d{4}-\d{2}-\d{2})"\)\) S\(TODAY\);\n',
    dedup_today_blocks, content, re.DOTALL)

# === 阶段6：更新侧边栏"今日"按钮日期 ===
today_date = datetime.date.today()
content = re.sub(
    r'data-date="\d{4}-\d{2}-\d{2}"><span class="date-dot"></span>今日 \d+/\d+',
    f'data-date="{today}"><span class="date-dot"></span>今日 {today_date.month}/{today_date.day}',
    content
)

# === 阶段7：更新默认显示日期 ===
content = re.sub(
    r'var R=G\("\d{4}-\d{2}-\d{2}"\)\|\|SEED;',
    f'var R=G("{today}")||SEED;', content)

with open(os.path.join(repo_path, 'data.js'), 'w', encoding='utf-8') as f:
    f.write(content)
print(f"data.js updated for {today} — sidebar + default date synced")