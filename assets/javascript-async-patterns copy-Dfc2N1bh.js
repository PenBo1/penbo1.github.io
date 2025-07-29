const r=`---\r
title: JavaScript 异步编程模式\r
date: 2023-12-28\r
category: JavaScript\r
tags: [JavaScript, Async, Promise, Patterns]\r
excerpt: 深入理解JavaScript异步编程的各种模式和最佳实践。\r
readTime: 14 min read\r
---\r
\r
# JavaScript 异步编程模式\r
\r
异步编程是 JavaScript 的核心特性之一。本文将深入探讨各种异步编程模式和最佳实践。\r
\r
## 回调函数 (Callbacks)\r
\r
最传统的异步处理方式。\r
\r
\`\`\`javascript\r
// 基本回调\r
function fetchData(callback) {\r
  setTimeout(() => {\r
    callback(null, { data: 'Hello World' });\r
  }, 1000);\r
}\r
\r
fetchData((error, result) => {\r
  if (error) {\r
    console.error('Error:', error);\r
  } else {\r
    console.log('Data:', result.data);\r
  }\r
});\r
\`\`\`\r
\r
### 回调地狱问题\r
\r
\`\`\`javascript\r
// ❌ 回调地狱\r
getData(function(a) {\r
  getMoreData(a, function(b) {\r
    getMoreData(b, function(c) {\r
      getMoreData(c, function(d) {\r
        // 嵌套太深，难以维护\r
      });\r
    });\r
  });\r
});\r
\`\`\`\r
\r
## Promise\r
\r
Promise 提供了更优雅的异步处理方式。\r
\r
### 基本用法\r
\r
\`\`\`javascript\r
function fetchData() {\r
  return new Promise((resolve, reject) => {\r
    setTimeout(() => {\r
      const success = Math.random() > 0.5;\r
      if (success) {\r
        resolve({ data: 'Hello World' });\r
      } else {\r
        reject(new Error('Failed to fetch data'));\r
      }\r
    }, 1000);\r
  });\r
}\r
\r
// 使用 Promise\r
fetchData()\r
  .then(result => {\r
    console.log('Success:', result.data);\r
  })\r
  .catch(error => {\r
    console.error('Error:', error.message);\r
  });\r
\`\`\`\r
\r
### Promise 链式调用\r
\r
\`\`\`javascript\r
fetchUser(userId)\r
  .then(user => fetchPosts(user.id))\r
  .then(posts => fetchComments(posts[0].id))\r
  .then(comments => {\r
    console.log('Comments:', comments);\r
  })\r
  .catch(error => {\r
    console.error('Error in chain:', error);\r
  });\r
\`\`\`\r
\r
## Async/Await\r
\r
最现代的异步处理语法。\r
\r
### 基本用法\r
\r
\`\`\`javascript\r
async function fetchUserData(userId) {\r
  try {\r
    const user = await fetchUser(userId);\r
    const posts = await fetchPosts(user.id);\r
    const comments = await fetchComments(posts[0].id);\r
    \r
    return {\r
      user,\r
      posts,\r
      comments\r
    };\r
  } catch (error) {\r
    console.error('Error fetching user data:', error);\r
    throw error;\r
  }\r
}\r
\r
// 使用\r
fetchUserData(123)\r
  .then(data => console.log(data))\r
  .catch(error => console.error(error));\r
\`\`\`\r
\r
## 总结\r
\r
JavaScript 异步编程经历了从回调函数到 Promise 再到 async/await 的演进：\r
\r
1. **回调函数** - 最基础但容易产生回调地狱\r
2. **Promise** - 解决了回调地狱，提供了更好的错误处理\r
3. **Async/Await** - 让异步代码看起来像同步代码\r
\r
选择合适的异步模式，结合良好的错误处理和性能优化，能够构建出健壮高效的异步应用。`;export{r as default};
