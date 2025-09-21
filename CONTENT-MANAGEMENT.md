# 内容管理说明

## 📋 新架构概述

我们已经重构了网站的内容管理系统，现在使用**统一的单页应用架构**：

### 🗂️ 文件结构

```
_data/
  team.yml          # 团队信息的统一数据源

_layouts/
  single-page.html  # 单页应用布局（使用team.yml数据）

index.md            # 主页（使用单页应用布局）
team.md             # 重定向页面（自动跳转到主页的团队部分）
about.md, research.md, contact.md  # 独立页面（导航链接指向主页对应部分）
```

## 🎯 用户访问路径

### 主要访问方式
1. **用户访问主页** → 点击顶部导航 → 在同一页面显示不同内容
2. **直接访问特定部分**：`gallexy.github.io/#team` → 直接显示团队部分
3. **从其他页面导航** → 点击面包屑导航 → 跳转到主页对应部分

### 兼容性处理
- **旧链接兼容**：访问 `/team` → 自动重定向到 `/#team`
- **搜索引擎友好**：保持URL结构，但统一内容源

## 🔄 导航逻辑

### 单页应用内导航
- 用户在主页内点击导航：JavaScript切换显示内容，无页面刷新
- URL更新为锚点形式：`/#home`、`/#about`、`/#team`等

### 跨页面导航
- 从独立页面（如 `about.md`）点击"团队介绍"：跳转到 `/#team`
- 从主页点击面包屑：切换到对应的独立页面

## ✏️ 如何修改内容

### 修改团队信息
1. 打开 `_data/team.yml`
2. 修改相应的内容
3. 保存文件
4. 推送到 GitHub

### 添加新团队成员
```yaml
# 在 _data/team.yml 的 members 部分添加：
- name: "新成员姓名"
  role: "职位"
  title: "专业描述"
  education: "教育背景"
  experience: "工作经验"
  specialization: "专业方向"
```

### 添加新顾问
```yaml
# 在 _data/team.yml 的 advisors 部分添加：
- name: "顾问姓名"
  affiliation: "所属机构"
```

### 添加新招聘职位
```yaml
# 在 _data/team.yml 的 recruitment.positions 部分添加：
- role: "职位名称"
  description: "职位描述"
```

## 🎯 优势

1. **内容一致性**：两个界面显示相同内容，避免不同步
2. **维护简单**：只需修改一个文件
3. **扩展性强**：可以轻松添加新的数据字段
4. **类型安全**：YAML格式便于验证和维护

## 🚀 扩展其他页面

您可以为其他页面（如研究项目、联系方式）创建类似的数据文件：

```
_data/
  team.yml
  research.yml      # 研究项目数据
  about.yml         # 关于我们数据
  contact.yml       # 联系方式数据
```

这样整个网站的内容都可以通过修改数据文件来统一管理。