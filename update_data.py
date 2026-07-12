import json, datetime, os, sys, re

repo_path = sys.argv[1]
today_report = json.loads(sys.argv[2])
today = today_report["date"]

with open(os.path.join(repo_path, 'data.js'), 'r', encoding='utf-8') as f:
    content = f.read()

# ★ 去重检查
existing = re.findall(r'var TODAY=\{.*?\};\nif\(\!G\("' + re.escape(today) + r'"\)\) S\(TODAY\);\n', content, re.DOTALL)
if existing:
    count = len(existing)
    print(f"发现 {count} 个已有 {today} 的重复块，先移除")
    content = re.sub(
        r'var TODAY=\{.*?\};\nif\(\!G\("' + re.escape(today) + r'"\)\) S\(TODAY\);\n',
        '', content, re.DOTALL)

# 插入新 TODAY 块
idx = content.index('function G(k)')
before = content[:idx]
after = content[idx:]
new_section = '\nvar TODAY=' + json.dumps(today_report, ensure_ascii=False) + ';\nif(!G("' + today + '")) S(TODAY);\n\n'
content = before.rstrip() + new_section + after

# 清理所有历史重复块
dates_seen = set()
def dedup_today_blocks(match):
    d = match.group(1)
    if d in dates_seen:
        return ''
    dates_seen.add(d)
    return match.group(0)

content = re.sub(
    r'var TODAY=(\{.*?\});\nif\(\!G\("(\d{4}-\d{2}-\d{2})"\)\) S\(TODAY\);\n',
    dedup_today_blocks, content, re.DOTALL)

# ★ FIXED: 更新侧边栏"今日"按钮日期（匹配 </span>今日 格式）
today_date = datetime.date.today()
content = re.sub(
    r'data-date="\d{4}-\d{2}-\d{2}"><span class="date-dot"></span>今日 \d+/\d+',
    f'data-date="{today}"><span class="date-dot"></span>今日 {today_date.month}/{today_date.day}',
    content
)

# 更新默认显示日期
content = re.sub(
    r'var R=G\("\d{4}-\d{2}-\d{2}"\)\|\|SEED;',
    f'var R=G("{today}")||SEED;', content)

with open(os.path.join(repo_path, 'data.js'), 'w', encoding='utf-8') as f:
    f.write(content)
print(f"data.js updated for {today} — sidebar + default date synced")
