type Project = {
  id: string;
  name: string;
  description: string;
  liveUrl: string | null;
  githubFrontend: string | null;
  githubBackend: string | null;
  highlights: string[];
  techStack: string[];
};

function LinkItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono text-xs text-zinc-500 underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-300"
    >
      {children}
    </a>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const hasBothRepos =
    Boolean(project.githubFrontend) && Boolean(project.githubBackend);

  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-5 transition-colors dark:border-zinc-800 dark:bg-zinc-950/50 hover:border-zinc-300 dark:hover:border-zinc-700">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-sans text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {project.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.liveUrl && (
              <LinkItem href={project.liveUrl}>Live</LinkItem>
            )}
            {hasBothRepos && project.githubFrontend && (
              <LinkItem href={project.githubFrontend}>Frontend</LinkItem>
            )}
            {hasBothRepos && project.githubBackend && (
              <LinkItem href={project.githubBackend}>Backend</LinkItem>
            )}
            {!hasBothRepos && project.githubFrontend && (
              <LinkItem href={project.githubFrontend}>GitHub</LinkItem>
            )}
          </div>
        </div>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
