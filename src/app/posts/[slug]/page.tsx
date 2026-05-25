import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { format } from "date-fns";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article>
      <header className="mb-8">
        <Link
          href="/"
          className="text-sm text-muted hover:text-accent transition-colors"
        >
          ← 返回首页
        </Link>
        <h1 className="text-3xl font-bold mt-4 mb-2">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted">
          {post.date && (
            <time>{format(new Date(post.date), "yyyy-MM-dd")}</time>
          )}
          {post.tags.length > 0 && (
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full bg-border text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
