import Link from "next/link";
import { writings } from "./writingData";

export default function WritingPage() {
  return (
    <main className="bg-slate-700 text-slate-50">
      <div className=" max-w-6xl px-6 py-10 space-y-8">
        {/* page heading */}
        <header className="space-y-1">
          <p className="text-lg text-slate-300">
            A few essays, reflections, and stories I&apos;ve written. Each card
            links out to the full piece.
          </p>
        </header>

        {/* notebook card grids */}
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {writings.map((piece) => (
<article
  key={piece.slug}
  className="
    relative flex items-stretch
    rounded-3xl
  "
>
  {/* full-height notebook spine */}
  <img
    src="/notebook-spine.png"
    alt="notebook spiral binding"
    className="
      h-full
      w-18          /* a bit wider spine */
      object-cover
      select-none
      pointer-events-none
    "
  />

  {/* notebook page */}
  <div
    className="
      flex-1
      rounded-r-3xl
      bg-white
      px-8 py-8
      shadow-[4px_4px_0_rgba(15,23,42,0.9)]
      border-2 border-slate-900
    "
  >
    <h2
      className="text-xl mb-3 text-slate-900 leading-snug"
      style={{ fontFamily: '"PT Serif", cursive' }}
    >
      {piece.title}
    </h2>

    <p className="text-sm leading-relaxed text-slate-800 mb-6">
      {piece.blurb}
    </p>

    <Link
      href={piece.link}
      target="_blank"
      className="
        inline-flex items-center justify-center
        rounded-full
        bg-amber-400 px-4 py-2
        text-xs font-semibold tracking-wide text-slate-900
        shadow-[2px_2px_0_rgba(120,53,15,0.9)]
        hover:bg-amber-300
        transition
      "
    >
      Read More
    </Link>
  </div>
</article>
          ))}
        </div>
      </div>
    </main>
  );
}
