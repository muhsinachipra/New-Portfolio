import { resume } from "@/data/resume";

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const icons: Record<string, React.ReactNode> = {
  AWS: <CloudIcon />,
  EC2: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 10h20M8 4v4M16 4v4" />
    </svg>
  ),
  S3: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  ),
  Route53: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  NGINX: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="6" width="8" height="5" rx="1" />
      <rect x="12" y="6" width="8" height="5" rx="1" />
      <rect x="2" y="13" width="8" height="5" rx="1" />
      <rect x="12" y="13" width="8" height="5" rx="1" />
    </svg>
  ),
  PM2: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
};

export function CloudSection() {
  return (
    <section className="space-y-4">
      <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        Cloud & Infrastructure
      </h2>
      <div className="flex flex-wrap gap-3">
        {resume.cloudAndInfra.map(({ name, label }) => (
          <div
            key={name}
            className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 dark:border-zinc-800 dark:bg-zinc-950/50"
          >
            <span className="text-zinc-500 dark:text-zinc-400">
              {icons[name] ?? <CloudIcon />}
            </span>
            <span className="font-mono text-sm font-medium text-zinc-800 dark:text-zinc-200">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
