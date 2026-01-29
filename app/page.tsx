import { Header } from "@/components/Header";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectCard } from "@/components/ProjectCard";
import { CloudSection } from "@/components/CloudSection";
import { Skills } from "@/components/Skills";
import { resume } from "@/data/resume";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-8 sm:px-6">
        {/* Hero */}
        <section className="mb-16 sm:mb-20">
          <h1 className="font-sans text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            {resume.name}
          </h1>
          <p className="mt-1 font-mono text-sm text-zinc-500 dark:text-zinc-400">
            {resume.role}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <a
              href={`mailto:${resume.email}`}
              className="hover:text-zinc-900 dark:hover:text-zinc-200"
            >
              {resume.email}
            </a>
            <span aria-hidden>·</span>
            <a
              href={`tel:${resume.phone.replace(/\s/g, "")}`}
              className="hover:text-zinc-900 dark:hover:text-zinc-200"
            >
              {resume.phone}
            </a>
            <span aria-hidden>·</span>
            <a
              href={resume.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-200"
            >
              LinkedIn
            </a>
            <span aria-hidden>·</span>
            <a
              href={resume.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-200"
            >
              GitHub
            </a>
            <span aria-hidden>·</span>
            <a
              href={resume.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-200"
            >
              Leetcode
            </a>
          </div>
          <a
            href={resume.resumePdfUrl}
            download
            className="mt-6 inline-flex rounded-lg border border-zinc-900 bg-zinc-900 px-4 py-2 font-mono text-xs font-medium text-white transition-colors hover:bg-zinc-700 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Download Resume
          </a>
        </section>

        {/* About */}
        <section className="mb-16 sm:mb-20">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            About
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {resume.aboutHighlight}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-16 sm:mb-20">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Experience
          </h2>
          <div className="mt-6">
            {resume.experience.map((exp) => (
              <ExperienceItem key={exp.id} experience={exp} />
            ))}
          </div>
        </section>

        {/* Cloud & Infrastructure */}
        <section className="mb-16 sm:mb-20">
          <CloudSection />
        </section>

        {/* Projects */}
        <section className="mb-16 sm:mb-20">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Projects
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-1">
            {resume.projects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <Skills />
        </section>
      </main>
    </div>
  );
}
