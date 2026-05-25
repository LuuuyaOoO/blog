import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { format } from "date-fns";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-2">👋 欢迎来到我的博客</h1>
        <p className="text-muted">记录技术学习、分享有用资料。</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-6">最新文章</h2>
        {posts.length === 0 ? (
          <p className="text-muted">
            还没有文章，在{" "}
            <code className="bg-border px-2 py-0.5 rounded text-sm">
              content/posts/
            </code>{" "}
            目录添加 .md 文件即可。
          </p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/posts/${post.slug}`} className="block">
                  <h3 className="text-lg font-medium group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <time className="text-sm text-muted">
                    {post.date
                      ? format(new Date(post.date), "yyyy-MM-dd")
                      : ""}
                  </time>
                  {post.summary && (
                    <p className="mt-1 text-muted text-sm">{post.summary}</p>
                  )}
                  {post.tags.length > 0 && (
                    <div className="mt-2 flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-border text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
