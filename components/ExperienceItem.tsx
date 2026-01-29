"use client";

import { useState } from "react";

type Project = {
  readonly name: string;
  readonly isLeadership?: boolean;
  readonly leadershipTag?: string;
  readonly leadershipNote?: string;
  readonly performanceBoost?: boolean;
  readonly performanceLabel?: string;
  readonly achievements: readonly string[];
};

type Experience = {
  readonly id: string;
  readonly company: string;
  readonly location: string;
  readonly title: string;
  readonly period: string;
  readonly isLeadership: boolean;
  readonly projects: readonly Project[];
  readonly shared: readonly string[];
};

export function ExperienceItem({ experience }: { experience: Experience }) {
  const [expanded, setExpanded] = useState(false);
  const hasProjects = experience.projects.length > 0;
  const hasShared = experience.shared.length > 0;
  const hasExpandable = hasProjects || hasShared;

  return (
    <section
      className={`group border-b border-zinc-200 py-6 first:pt-0 last:border-b-0 dark:border-zinc-800 ${hasExpandable ? "cursor-pointer" : ""}`}
      role={hasExpandable ? "button" : undefined}
      tabIndex={hasExpandable ? 0 : undefined}
      onClick={() => hasExpandable && setExpanded(!expanded)}
      onKeyDown={(e) =>
        hasExpandable && (e.key === "Enter" || e.key === " ") && setExpanded(!expanded)
      }
      aria-expanded={hasExpandable ? expanded : undefined}
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="font-sans text-base font-medium text-zinc-900 dark:text-zinc-100">
            {experience.title}
          </h3>
          <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
            {experience.company}
            <span className="text-zinc-400 dark:text-zinc-500"> · </span>
            {experience.location}
          </p>
        </div>
        <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500 sm:shrink-0">
          {experience.period}
        </p>
      </div>

      {hasExpandable && (
        <p className="mt-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          {expanded ? "− Collapse" : "+ Expand"} details
        </p>
      )}

      {expanded && (hasProjects || hasShared) && (
        <div className="mt-4 space-y-6 pl-0">
          {experience.projects.map((proj) => (
            <div key={proj.name} className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {proj.name}
                </span>
                {proj.isLeadership && proj.leadershipTag && (
                  <span className="inline-flex items-center rounded bg-zinc-900 px-2 py-0.5 font-mono text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
                    {proj.leadershipTag}
                  </span>
                )}
                {proj.performanceBoost && proj.performanceLabel && (
                  <span className="inline-flex items-center rounded border border-amber-500/50 bg-amber-500/10 px-2 py-0.5 font-mono text-xs font-medium text-amber-700 dark:border-amber-400/40 dark:bg-amber-400/10 dark:text-amber-300">
                    {proj.performanceLabel}
                  </span>
                )}
              </div>
              {proj.leadershipNote && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {proj.leadershipNote}
                </p>
              )}
              <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                {proj.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
          {hasShared && (
            <ul className="list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              {experience.shared.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
