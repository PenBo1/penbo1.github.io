const r=`---\r
title: 博客设计展示 - Markdown 完整功能测试\r
date: 2024-01-15\r
category: Design\r
tags: [Design, Markdown, Blog, Showcase]\r
excerpt: 这是一个展示博客文章设计和 Markdown 渲染功能的完整示例，包含了各种 Markdown 元素的使用。\r
readTime: 8 min read\r
---\r
\r
# 博客设计展示\r
\r
这篇文章展示了全新的博客设计和完整的 Markdown 渲染功能。让我们来看看各种元素是如何呈现的。\r
\r
## 标题层级展示\r
\r
### 三级标题\r
这是三级标题的样式展示。\r
\r
#### 四级标题\r
这是四级标题的样式。\r
\r
##### 五级标题\r
这是五级标题的样式。\r
\r
###### 六级标题\r
这是六级标题的样式。\r
\r
---\r
\r
## 文本样式\r
\r
这是一个普通段落。你可以使用 **粗体文本** 来强调重要内容，也可以使用 *斜体文本* 来表示强调。如果需要删除某些内容，可以使用 ~~删除线~~。\r
\r
当你需要引用代码时，可以使用 \`行内代码\` 来标记，比如 \`console.log('Hello World')\`。\r
\r
## 引用块\r
\r
> 这是一个引用块的示例。引用块通常用来引用他人的话语或者重要的信息。\r
> \r
> 引用块可以包含多个段落，并且支持其他 Markdown 语法，比如 **粗体** 和 *斜体*。\r
\r
## 列表\r
\r
### 无序列表\r
\r
- 第一个列表项\r
- 第二个列表项\r
  - 嵌套列表项\r
  - 另一个嵌套项\r
- 第三个列表项\r
\r
### 有序列表\r
\r
1. 第一步：准备工作\r
2. 第二步：开始实施\r
3. 第三步：测试验证\r
4. 第四步：部署上线\r
\r
## 代码块\r
\r
### JavaScript 代码示例\r
\r
\`\`\`javascript\r
// 异步函数示例\r
async function fetchUserData(userId) {\r
  try {\r
    const response = await fetch(\`/api/users/\${userId}\`);\r
    const userData = await response.json();\r
    \r
    console.log('用户数据:', userData);\r
    return userData;\r
  } catch (error) {\r
    console.error('获取用户数据失败:', error);\r
    throw error;\r
  }\r
}\r
\r
// 使用示例\r
fetchUserData(123)\r
  .then(user => {\r
    document.getElementById('username').textContent = user.name;\r
  })\r
  .catch(error => {\r
    alert('加载用户信息失败');\r
  });\r
\`\`\`\r
\r
### CSS 代码示例\r
\r
\`\`\`css\r
/* 现代 CSS 网格布局 */\r
.blog-grid {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r
  gap: 2rem;\r
  padding: 2rem;\r
}\r
\r
.blog-card {\r
  background: var(--surface-color);\r
  border-radius: 12px;\r
  padding: 1.5rem;\r
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r
  transition: transform 0.3s ease;\r
}\r
\r
.blog-card:hover {\r
  transform: translateY(-4px);\r
}\r
\`\`\`\r
\r
### Python 代码示例\r
\r
\`\`\`python\r
# Python 数据处理示例\r
import pandas as pd\r
import numpy as np\r
\r
def analyze_blog_data(data_file):\r
    """分析博客数据的函数"""\r
    # 读取数据\r
    df = pd.read_csv(data_file)\r
    \r
    # 数据清洗\r
    df = df.dropna()\r
    df['date'] = pd.to_datetime(df['date'])\r
    \r
    # 统计分析\r
    monthly_posts = df.groupby(df['date'].dt.month).size()\r
    popular_tags = df['tags'].value_counts().head(10)\r
    \r
    return {\r
        'total_posts': len(df),\r
        'monthly_distribution': monthly_posts,\r
        'popular_tags': popular_tags\r
    }\r
\r
# 使用示例\r
if __name__ == "__main__":\r
    results = analyze_blog_data('blog_data.csv')\r
    print(f"总文章数: {results['total_posts']}")\r
\`\`\`\r
\r
## 链接和图片\r
\r
这里有一个 [外部链接示例](https://example.com)，点击可以跳转到外部网站。\r
\r
你也可以插入图片（如果有的话）：\r
\r
![示例图片](https://via.placeholder.com/600x300/4a90e2/ffffff?text=Blog+Design+Showcase)\r
\r
## 表格\r
\r
| 功能特性 | 支持状态 | 说明 |\r
|---------|---------|------|\r
| 标题渲染 | ✅ 完全支持 | 支持 H1-H6 所有级别 |\r
| 代码高亮 | ✅ 完全支持 | 支持多种编程语言 |\r
| 表格渲染 | ✅ 完全支持 | 支持复杂表格结构 |\r
| 图片显示 | ✅ 完全支持 | 自适应响应式显示 |\r
| 链接跳转 | ✅ 完全支持 | 支持内外部链接 |\r
\r
## 水平分割线\r
\r
上面是一些内容。\r
\r
---\r
\r
下面是分割线后的内容。\r
\r
## 总结\r
\r
这个全新的博客设计具有以下特点：\r
\r
1. **现代化的视觉设计** - 采用了现代化的卡片式布局和渐变效果\r
2. **完整的 Markdown 支持** - 支持所有常用的 Markdown 语法\r
3. **语法高亮** - 为代码块提供了丰富的语法高亮\r
4. **响应式设计** - 在各种设备上都能良好显示\r
5. **交互式目录** - 提供了侧边栏目录导航\r
6. **优雅的排版** - 注重阅读体验和视觉层次\r
\r
这样的设计让博客文章更加美观、易读，为读者提供了更好的阅读体验。`;export{r as default};
