// app/projects/page.tsx
import Link from "next/link";
import { projects } from "./projectsData";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-700 text-slate-50">
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10">
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative block overflow-hidden rounded-3xl
                         border border-zinc-200/70 dark:border-zinc-700/70
                         bg-slate-900/90 px-6 py-5 text-left shadow-sm
                         transition-transform transition-shadow duration-200
                         hover:-translate-y-1
                         hover:shadow-sky-500/30 hover:shadow-2xl
                         hover:border-sky-400
                         hover:bg-gradient-to-br hover:to-sky-900"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_55%)] opacity-70" />

              <div className="relative space-y-3">
                {project.featured && (
                  <span className="inline-flex items-center rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900">
                    Featured project
                  </span>
                )}

                <h2 className="font-ptserif text-2xl sm:text-3xl text-amber-100 group-hover:text-white">
                  {project.title}
                </h2>

                {project.subtitle && (
                  <p className="text-sm text-sky-200">{project.subtitle}</p>
                )}

                <p className="text-sm font-medium text-rose-200">
                  {project.timeline}
                </p>

                {project.highlight && (
                  <div className="rounded-2xl border border-amber-400/60 bg-slate-900/70 px-4 py-3 text-sm text-amber-100">
                    {project.highlight}
                  </div>
                )}

                <div className="text-sm leading-relaxed text-slate-100/90">
                  {project.summary.map((p, i) => (
                    <p key={i} className="mb-3">
                      {p}
                    </p>
                  ))}
                </div>

                {/* tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-100 group-hover:bg-slate-700/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-300/80 group-hover:text-cyan-200">
                  Click to see details &amp; media →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
