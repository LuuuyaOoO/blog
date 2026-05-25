import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Blog",
  description: "个人博客 - 分享技术与资料",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <header className="border-b border-border">
          <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold hover:text-accent transition-colors">
              My Blog
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-accent transition-colors">文章</Link>
              <Link href="/files" className="hover:text-accent transition-colors">资料</Link>
              <Link href="/about" className="hover:text-accent transition-colors">关于</Link>
            </div>
          </nav>
        </header>
        <main className="flex-1 max-w-3xl mx-auto px-6 py-10 w-full">
          {children}
        </main>
        <footer className="border-t border-border">
          <div className="max-w-3xl mx-auto px-6 py-6 text-center text-sm text-muted">
            © {new Date().getFullYear()} My Blog. Built with Next.js.
          </div>
        </footer>
      </body>
    </html>
  );
}
