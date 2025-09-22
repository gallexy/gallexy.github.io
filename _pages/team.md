---
permalink: /team/
layout: single
title: "团队介绍"
author_profile: false
toc: true
toc_sticky: true
---

## 🎓 {{ site.data.team.team.description }}

---

## 研究团队

{% for member in site.data.team.team.members %}
### {{ member.role }}

**{{ member.name }}** - {{ member.title }}

- **教育背景**：{{ member.education }}
- **专业经验**：{{ member.experience }}  
- **研究专长**：{{ member.specialization }}

---

{% endfor %}

## 🤝 协作网络

### 学术顾问

我们有幸得到以下杰出学者的指导：

{% for advisor in site.data.team.team.advisors %}
- **{{ advisor.name }}** - {{ advisor.affiliation }}
{% endfor %}

### 国际合作伙伴

我们与多个国际研究机构保持密切合作：

{% for partner in site.data.team.team.partners %}
- {{ partner }}
{% endfor %}

## 📢 {{ site.data.team.team.recruitment.title }}

{{ site.data.team.team.recruitment.description }}

### 🎯 重点招募方向

我们正在寻找以下领域的专业人才：

{% for position in site.data.team.team.recruitment.positions %}
#### {{ position.role }}
{{ position.description }}

{% endfor %}

### 💫 我们提供

- **灵活的远程工作环境** - 支持全球分布式协作
- **跨学科合作机会** - 与不同领域专家共同工作
- **国际学术交流平台** - 参与国际会议和合作项目
- **开源项目参与机会** - 贡献开放科学社区

### 📝 如何加入

如果您对我们的工作感兴趣，欢迎通过以下方式联系我们：

1. **发送邮件**至 [contact@gallexy.org](mailto:contact@gallexy.org)
2. **提供简历**和研究兴趣说明
3. **分享相关作品**或研究成果（如有）

我们期待与志同道合的研究者一起，为可持续发展贡献力量！

---

*想了解更多关于我们的研究项目？请访问 [研究项目页面](/research/)。*