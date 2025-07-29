const r=`---\r
title: CSS Grid 与 Flexbox 布局指南\r
date: 2024-01-01\r
category: CSS\r
tags: [CSS, Grid, Flexbox, Layout, Frontend]\r
excerpt: 全面对比CSS Grid和Flexbox，掌握现代CSS布局技术。\r
readTime: 10 min read\r
---\r
\r
# CSS Grid 与 Flexbox 布局指南\r
\r
CSS Grid 和 Flexbox 是现代 CSS 布局的两大利器。本文将详细介绍它们的特点、用法和最佳实践。\r
\r
## Flexbox 基础\r
\r
Flexbox 是一维布局方法，用于在容器中排列项目。\r
\r
### 基本概念\r
\r
\`\`\`css\r
.container {\r
  display: flex;\r
  flex-direction: row; /* 主轴方向 */\r
  justify-content: center; /* 主轴对齐 */\r
  align-items: center; /* 交叉轴对齐 */\r
  flex-wrap: wrap; /* 换行 */\r
}\r
\r
.item {\r
  flex: 1; /* 弹性增长 */\r
  flex-basis: 200px; /* 基础尺寸 */\r
}\r
\`\`\`\r
\r
### 常用布局模式\r
\r
#### 水平居中\r
\r
\`\`\`css\r
.center-horizontal {\r
  display: flex;\r
  justify-content: center;\r
}\r
\`\`\`\r
\r
#### 垂直居中\r
\r
\`\`\`css\r
.center-vertical {\r
  display: flex;\r
  align-items: center;\r
  min-height: 100vh;\r
}\r
\`\`\`\r
\r
#### 完全居中\r
\r
\`\`\`css\r
.center-both {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  min-height: 100vh;\r
}\r
\`\`\`\r
\r
## CSS Grid 基础\r
\r
CSS Grid 是二维布局系统，可以同时处理行和列。\r
\r
### 基本概念\r
\r
\`\`\`css\r
.grid-container {\r
  display: grid;\r
  grid-template-columns: 1fr 2fr 1fr; /* 列定义 */\r
  grid-template-rows: auto 1fr auto; /* 行定义 */\r
  gap: 20px; /* 间距 */\r
  grid-template-areas: \r
    "header header header"\r
    "sidebar main aside"\r
    "footer footer footer";\r
}\r
\r
.header { grid-area: header; }\r
.sidebar { grid-area: sidebar; }\r
.main { grid-area: main; }\r
.aside { grid-area: aside; }\r
.footer { grid-area: footer; }\r
\`\`\`\r
\r
### 响应式网格\r
\r
\`\`\`css\r
.responsive-grid {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r
  gap: 20px;\r
}\r
\`\`\`\r
\r
## 选择指南\r
\r
### 何时使用 Flexbox\r
\r
- 一维布局（行或列）\r
- 组件内部布局\r
- 导航栏、按钮组\r
- 居中对齐\r
- 等高列\r
\r
### 何时使用 Grid\r
\r
- 二维布局（行和列）\r
- 页面整体布局\r
- 复杂的网格系统\r
- 重叠元素\r
- 不规则布局\r
\r
## 总结\r
\r
- **Flexbox** 适合一维布局和组件内部排列\r
- **Grid** 适合二维布局和页面整体结构\r
- 两者可以完美结合使用\r
- 选择合适的工具能让布局更简单、更灵活\r
\r
掌握这两种布局方法，能够应对绝大多数现代网页布局需求。`;export{r as default};
