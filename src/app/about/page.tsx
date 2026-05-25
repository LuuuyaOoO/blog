export default function AboutPage() {
  return (
    <div className="prose">
      <h1>关于我</h1>
      <p>
        欢迎来到我的个人博客！这里主要记录我的技术学习心得，
        以及分享一些有用的资料和工具。
      </p>

      <h2>联系方式</h2>
      <ul>
        <li>GitHub: <a href="https://github.com">@your-username</a></li>
        <li>Email: your-email@example.com</li>
      </ul>

      <h2>关于本站</h2>
      <p>
        本站使用 Next.js 构建，部署在 GitHub Pages 上。
        文章使用 Markdown 编写，支持代码高亮和附件下载。
      </p>
    </div>
  );
}
