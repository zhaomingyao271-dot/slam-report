# 机器人SLAM晨报

基于 GitHub Pages 的每日科研情报网站。

## 工作原理

- 每天北京时间 09:00 自动搜索最新论文和开源项目
- 生成中文晨报并更新 index.html
- 过往报告自动归档，左侧边栏可切换

## 部署到 GitHub Pages

1. 在 GitHub 创建新仓库（例如 `slam-report`）
2. 将这个文件夹的所有文件推送到仓库
3. 在仓库 Settings → Pages → Source 选择 `main` 分支
4. 网站地址：`https://你的用户名.github.io/slam-report`

```bash
cd D:\desktop\早报
git init
git checkout -b main
git add index.html README.md
git commit -m "初始化机器人SLAM晨报网站"
git remote add origin https://github.com/你的用户名/slam-report.git
git push -u origin main
```

## 自定义

如需修改研究方向或监控来源，请通过 Claude 的定时任务设置调整。
