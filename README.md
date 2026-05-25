# My Blog

个人博客，使用 Next.js + Tailwind CSS 构建，部署在 GitHub Pages。

🔗 **在线地址**: https://luuuyaooo.github.io/blog

---

## 📝 写文章

在 `content/posts/` 目录下创建 `.md` 文件：

```markdown
---
title: "文章标题"
date: "2025-05-25"
summary: "一句话摘要"
tags: ["标签1", "标签2"]
---

正文内容，支持标准 Markdown 语法：
- **粗体**、*斜体*
- 代码块（带语法高亮）
- 图片、链接、列表
- 引用块
```

然后推送即可发布：

```bash
git add . && git commit -m "新文章：xxx" && git push
```

## 📁 上传资料/附件

```bash
# 1. 文件放到 public/files/（提供下载链接）
cp ~/Downloads/文档.pdf public/files/

# 2. 同时放一份到 content/files/（用于生成页面文件列表）
cp ~/Downloads/文档.pdf content/files/

# 3. 推送
git add . && git commit -m "上传资料：文档.pdf" && git push
```

上传后可在博客「资料」页面看到文件列表和下载链接。

## 🏗 项目结构

```
blog/
├── content/
│   ├── posts/          ← Markdown 文章
│   └── files/          ← 附件（生成列表用）
├── public/files/       ← 附件（实际下载路径）
├── src/
│   ├── app/
│   │   ├── page.tsx           ← 首页（文章列表）
│   │   ├── posts/[slug]/      ← 文章详情页
│   │   ├── files/             ← 资料下载页
│   │   ├── about/             ← 关于页
│   │   ├── layout.tsx         ← 全局布局
│   │   └── globals.css        ← 全局样式
│   └── lib/posts.ts           ← Markdown 解析逻辑
├── .github/workflows/deploy.yml  ← 自动部署
└── next.config.ts              ← Next.js 配置
```

## ✏️ 自定义修改

| 要改的内容 | 文件 |
|---|---|
| 博客名称 | `src/app/layout.tsx` 中的 "My Blog" |
| 关于页内容 | `src/app/about/page.tsx` |
| 首页欢迎语 | `src/app/page.tsx` |
| 站点标题/SEO | `src/app/layout.tsx` 中的 `metadata` |
| 样式/配色 | `src/app/globals.css` 中的 CSS 变量 |

## 🖥 本地预览

```bash
# 构建并预览
npm run build && npx serve out

# 打开 http://localhost:3000/blog
```

## 🚀 部署

已配置 GitHub Actions 自动部署：

1. `git push` 到 `main` 分支
2. Actions 自动构建
3. 部署到 GitHub Pages

**首次部署前需要**：仓库 Settings → Pages → Source 选择 "GitHub Actions"

## 🌐 自定义域名（可选）

如果以后想用自己的域名：

1. DNS 添加 CNAME 记录指向 `luuuyaooo.github.io`
2. 仓库 Settings → Pages → Custom domain 填入域名
3. 创建 `public/CNAME` 文件写入域名
4. 删除 `next.config.ts` 中的 `basePath: "/blog"`
5. 推送更新
