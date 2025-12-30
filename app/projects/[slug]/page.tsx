// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProject } from "../projectsData";

// params needs to be a promise for this next.js version
type Props = { params: Promise<{ slug: string }> };

// pre-generate static routes
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// component async and await params
export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-700 text-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 space-y-8">
        <Link
          href="/projects"
          className="text-xs font-medium text-slate-300 hover:text-white"
        >
          ← Back to projects
        </Link>

        <section
          className="
            rounded-3xl border border-white/10
            bg-gradient-to-br
            from-sky-200/20
            via-sky-200/40
            p-8 shadow-2xl space-y-6
          "
        >
          <header className="space-y-2">
            <p className="text-sm font-semibold text-purple-200">
              {project.timeline}
            </p>

            <h1 className="text-3xl font-semibold leading-tight">
              {project.title}
            </h1>

            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-purple-300/40 bg-purple-900/60 px-3 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {project.heroImage && (
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={project.heroImage}
                alt={project.title}
                width={1200}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {project.details && (
            <section className="space-y-4 text-sm leading-relaxed">
              {project.details.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </section>
          )}

          {/* pdf embed */}
          {project.documents && project.documents.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-sm font-semibold text-purple-100">
                Project Report
              </h2>

              <iframe
                src={project.documents[0].href}
                className="w-full"
                style={{ height: "90vh", border: "none" }}
              />
            </section>
          )}

          {project.links && project.links.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-sm font-semibold text-purple-100">
                Links &amp; Media
              </h2>

              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    className="rounded-full border border-white/20 bg-slate-900/60 px-3 py-2 text-xs font-medium hover:border-purple-200"
                  >
                    {link.label} ↗
                  </Link>
                ))}
              </div>
            </section>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-sm font-semibold text-purple-100">
                Gallery
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {project.gallery.map((src) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.videos && project.videos.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-sm font-semibold text-purple-100">
                Videos
              </h2>

              <div className="space-y-6">
                {project.videos.map((video) => (
                  <div key={video.src} className="space-y-2">
                    <p className="text-xs font-medium">{video.title}</p>

                    {video.kind === "embed" ? (
                      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black pt-[56.25%]">
                        <iframe
                          src={video.src}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 h-full w-full"
                        />
                      </div>
                    ) : (
                      <video
                        controls
                        className="w-full rounded-2xl border border-white/10 bg-black"
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </section>
      </div>
    </main>
  );
}
