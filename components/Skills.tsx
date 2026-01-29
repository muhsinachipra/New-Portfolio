import { resume } from "@/data/resume";

const groups: { label: string; keys: (keyof typeof resume.skills)[] }[] = [
  { label: "Languages", keys: ["languages"] },
  { label: "Frameworks & Libraries", keys: ["frameworks"] },
  { label: "Databases", keys: ["databases"] },
  { label: "Tools & Platforms", keys: ["tools"] },
  { label: "Concepts & Architecture", keys: ["concepts"] },
];

export function Skills() {
  return (
    <section className="space-y-6">
      <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        Technical Skills
      </h2>
      <div className="space-y-6">
        {groups.map(({ label, keys }) => (
          <div key={label} className="space-y-2">
            <h3 className="font-mono text-xs font-medium text-zinc-600 dark:text-zinc-500">
              {label}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {keys.flatMap((k) =>
                (resume.skills[k] as readonly string[]).map((s) => (
                  <span
                    key={s}
                    className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {s}
                  </span>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
