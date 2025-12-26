export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-700 text-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-12 space-y-8">

        <h1 className="text-3xl font-semibold">📚 Courses</h1>

        <div className="space-y-4">

          {/* Spring 2026 */}
          <section className="rounded-3xl bg-purple-100 border border-purple-300/40 px-6 py-5 shadow-sm">
            <h2 className="text-xl font-semibold text-violet-800">
              🌸 Spring 2026 (Registered Courses)
            </h2>

            <ul className="mt-2 list-disc pl-6 space-y-1 text-black">
              <li>CS 189 – Machine Learning</li>
              <li>EECS 151 – Introduction to Digital Design and Integrated Circuits</li>
              <li>EECS 151LA – Application Specific Integrated Circuits (ASIC) Laboratory</li>
              <li>EE 140 – Linear Integrated Circuits</li>
              <li>Decal (Hopefully!!) – Advanced PCB Engineering</li>
            </ul>
          </section>

          {/*Fall 2025 */}
          <section className="rounded-3xl bg-purple-100 border border-purple-300/40 px-6 py-5 shadow-sm">
            <h2 className="text-xl font-semibold text-violet-800">
              🍂 Fall 2025
            </h2>

            <ul className="mt-2 list-disc pl-6 space-y-1 text-black">
              <li>CS 61C – Computer Architecture</li>
              <li>EE 105 – Microelectronic Devices and Circuits</li>
              <li>BioE 121 – BioMEMS, Microfabrication, and Medical Devices</li>
              <li>EE 198 – Hands-On PCB Engineering DeCal</li>
              <li>PBHLTH 116 – Seminar on Social, Political, and Ethical Issues in Health and Medicine</li>
              <li>MCB 199 – Marqusee Lab Research Units</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
