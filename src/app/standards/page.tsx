// src/app/standards/page.tsx
import React from "react";

type StandardItem = {
  title: string;
  entranceTitle: string;
  entrance: string[];
  objectiveTitle: string;
  objectives: string[];
};

const STANDARDS: StandardItem[] = [
  // --- KEEP YOUR STANDARDS ARRAY EXACTLY AS YOU HAVE IT ---
  // (No change inside content)
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}

export default function StandardsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        {/* Same title size style as other pages */}
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Program Standards
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Entrance standards clarify who this program is for, and Objectives
          describe who members are expected to become and achieve through the
          program.
        </p>
      </section>

      {/* Accordion */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="space-y-5">
          {STANDARDS.map((s, idx) => (
            <details
              key={s.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              open={idx === 0}
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
                    {s.title}
                  </h2>

                  {/* + icon (smooth & slow) */}
                  <span className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-open:bg-white group-open:shadow-sm">
                    <span className="text-xl leading-none transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-open:rotate-45">
                      +
                    </span>
                  </span>
                </div>
              </summary>

              {/* Expansion (NOW same speed as + icon) */}
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-open:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="mt-6 grid translate-y-6 gap-6 opacity-0 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-open:translate-y-0 group-open:opacity-100 md:grid-cols-2">
                    {/* Entrance */}
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Entrance Standard
                      </p>
                      <h3 className="mt-2 text-base font-semibold text-slate-900">
                        {s.entranceTitle}
                      </h3>
                      <List items={s.entrance} />
                    </div>

                    {/* Objectives */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Objectives on Program Standard
                      </p>
                      <h3 className="mt-2 text-base font-semibold text-slate-900">
                        {s.objectiveTitle}
                      </h3>
                      <List items={s.objectives} />
                    </div>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
