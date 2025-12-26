import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-700 px-4 pt-10 pb-16">
    <div className="relative">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-sky-400/25 blur-3xl" />
      </div>

      <main className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-8 px-6 py-16 bg-white dark:bg-black sm:flex-row sm:items-start sm:justify-between sm:px-16 sm:py-24 rounded-3xl shadow-sm">
{/* bio bubble */}
<div className="flex flex-col text-center sm:text-left flex-1 pr-10">
  {/* narrow intro block */}
  <div className="max-w-xl">
    <h1 className="font-ptserif text-4xl sm:text-5xl leading-snug text-zinc-900 dark:text-zinc-50">
      Hi, I&apos;m{" "}
      <span className="font-homemade text-5xl sm:text-6xl inline-block ml-6 align-baseline">
        Shikha
      </span>
    </h1>
  </div>

  {/* wide extended content */}
  <div className="mt-8 text-left">
    <div className="border-t border-dashed border-zinc-200 my-6" />

    <h2 className="font-homemade text-3xl mb-3">
      Currently I’m:
    </h2>

    <div className="font-ptserif space-y-4 leading-relaxed text-zinc-800 text-lg">
      <p>
        Researching cotranslational protein folding at the Marqusee Lab. My work explores how specific
        proteins, like alpha-tryptophan synthase, interact with the ribosome during translation, pausing
        and reshaping in various kinetic traps until they settle on a final structure.
      </p>

      <p>
        I’m also building finite-element fluid dynamics models with COMSOL at the Krishnan Lab. The goal is to
        understand oxygen consumption and insulin secretion in pancreatic islet cells, while validating
        macroencapsulation devices that keep immune cells and antibodies out, while permitting glucose,
        oxygen, and insulin to flow through.
      </p>
    </div>

    {/* Other interests */}
    <h2 className="font-homemade text-3xl mt-6 mb-2">
      Some other things I’ve been interested in:
    </h2>

    <ul className="font-ptserif list-disc pl-6 space-y-2 leading-relaxed text-zinc-800 text-lg">
      <li>PCB design — I’ve been building a wearable heart-rate sensor and really like making schematics and designing layouts.</li>
      <li>Software for embedded systems — It’s fascinating to write code for a microcontroller and watch it interface data from the real world.</li>
      <li>Analog circuit design — I’ve loved learning about the Miller effect, cascode amplifier, and different circuit topologies for amplifying signals, increasing bandwidth, and reducing noise in a very messy, real world (especially for biological signals).</li>
      <li>Computer vision for surgical robotics — Reconstructing 3D views from 2D images using neural radiance fields. Robots learning by watching videos of themselves.</li>
      <li>RF for wearables – sowackycoolstuff.</li>
    </ul>

    {/* Past life */}
    <h2 className="font-homemade text-3xl mt-6 mb-2">
      In a past life, I was:
    </h2>

    <ul className="font-ptserif list-disc pl-6 space-y-2 leading-relaxed text-zinc-800 text-lg">
      <li>A competitive swimmer. The experience shaped my views on health, discipline, and consistency more than anything else I’ve done, and I’m eternally grateful to my previous coaches.</li>
      <li>A public forum debater.</li>
      <li>A science fair kid.</li>
    </ul>
  </div>
</div>


{/* Profile photo + speech bubble */}
<div className="flex-shrink-0 mb-8 sm:mb-0">
  {/* photo */}
  <div className="relative h-48 w-48 sm:h-64 sm:w-64 rounded-full overflow-hidden ring-4 ring-blue-300 ring-offset-2 ring-offset-white contrast-100 hover:shadow-xl">
    <Image
      src="/profile_pic.jpg"
      alt="Shikha profile photo"
      fill
      className="object-cover"
    />
  </div>

  {/* speech bubble */}
  <div className="relative mt-4 inline-block bubble-pop">
    <a
      href="mailto:shikha_kath@berkeley.edu"
      className="
        inline-block rounded-full
        border-2 border-black
        bg-slate-800
        px-6 py-3
        text-white
        shadow-md
        hover:shadow-lg
        transition-transform transition-shadow
        duration-200
        hover:-translate-y-0.5
      "
    >
      <span className="block text-sm sm:text-base text-center">
        say hi ✨
      </span>
      <span className="block text-xs sm:text-sm text-center font-mono">
        shikha_kath@berkeley.edu
      </span>
    </a>

    {/* tail */}
    <span
      className="
        pointer-events-none
        absolute -bottom-2 right-8
        h-4 w-4
        bg-slate-800
        border-b-2 border-r-2 border-black
        rotate-45
      "
      aria-hidden="true"
        />
      </div>
    </div>
      </main>
    </div>
    </div>
  );
}
