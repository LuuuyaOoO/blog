import fs from "fs";
import path from "path";
import Link from "next/link";

interface FileItem {
  name: string;
  size: string;
}

function getFiles(): FileItem[] {
  const filesDir = path.join(process.cwd(), "content/files");
  if (!fs.existsSync(filesDir)) return [];

  return fs
    .readdirSync(filesDir)
    .filter((name) => !name.startsWith("."))
    .map((name) => {
      const stat = fs.statSync(path.join(filesDir, name));
      const kb = stat.size / 1024;
      const size = kb > 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb.toFixed(0)} KB`;
      return { name, size };
    });
}

export default function FilesPage() {
  const files = getFiles();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">📁 资料下载</h1>
      <p className="text-muted mb-8">
        这里存放一些可供下载的资料和文件。
      </p>

      {files.length === 0 ? (
        <p className="text-muted">
          还没有文件，在{" "}
          <code className="bg-border px-2 py-0.5 rounded text-sm">
            content/files/
          </code>{" "}
          目录放入文件，并复制到{" "}
          <code className="bg-border px-2 py-0.5 rounded text-sm">
            public/files/
          </code>{" "}
          即可提供下载。
        </p>
      ) : (
        <div className="border border-border rounded-lg divide-y divide-border">
          {files.map((file) => (
            <div
              key={file.name}
              className="flex items-center justify-between px-4 py-3 hover:bg-border/30 transition-colors"
            >
              <span className="font-medium">{file.name}</span>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted">{file.size}</span>
                <Link
                  href={`/files/${file.name}`}
                  className="text-sm text-accent hover:underline"
                >
                  下载
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
