---
title: "Hello World - 我的第一篇博客"
date: "2025-05-25"
summary: "博客搭建完成，记录一下使用方法。"
tags: ["博客", "Next.js"]
---

## 博客搭建完成 🎉

这是我的个人博客，使用 **Next.js** + **Tailwind CSS** 构建，部署在 GitHub Pages 上。

### 如何写文章

在 `content/posts/` 目录下创建 `.md` 文件，文件头部使用 YAML frontmatter：

```markdown
---
title: "文章标题"
date: "2025-05-25"
summary: "一句话概述"
tags: ["标签1", "标签2"]
---

正文内容写在这里...
```

### 如何上传资料

1. 将文件放入 `public/files/` 目录
2. 同时在 `content/files/` 放一份（用于生成文件列表）
3. 推送到 GitHub 后即可通过「资料」页面下载

### 代码示例

```typescript
const greeting = "Hello, Blog!";
console.log(greeting);
```

### 支持的功能

- ✅ Markdown 文章
- ✅ 代码高亮
- ✅ 文件附件下载
- ✅ 标签分类
- ✅ 响应式设计
- ✅ 暗色模式
- ✅ GitHub Pages 自动部署
