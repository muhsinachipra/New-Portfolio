import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { resume } from "@/data/resume";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-sans text-sm font-medium text-zinc-900 dark:text-zinc-100"
        >
          {resume.name}
        </Link>
        <nav className="flex items-center gap-3">
          <a
            href={resume.resumePdfUrl}
            download
            className="rounded-lg border border-zinc-900 bg-zinc-900 px-3 py-1.5 font-mono text-xs font-medium text-white transition-colors hover:bg-zinc-700 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Download Resume
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
