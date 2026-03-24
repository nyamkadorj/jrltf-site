"use client";

import Link from "next/link";

const trackerLinks = [
  {
    lang: "EN",
    title: "70 Days Spiritual Life Habit Tracker",
    subtitle: "Guideline and Template",
    href: "#",
    icon: "📘",
  },
  {
    lang: "KR",
    title: "70 Days Spiritual Life Habit Tracker",
    subtitle: "Guideline and Template",
    href: "#",
    icon: "📗",
  },
  {
    lang: "JP",
    title: "70 Days Spiritual Life Habit Tracker",
    subtitle: "Guideline and Template",
    href: "#",
    icon: "📙",
  },
  {
    lang: "MN",
    title: "70 Days Spiritual Life Habit Tracker",
    subtitle: "Guideline and Template",
    href: "#",
    icon: "📕",
  },
];

function ResourceButton({
  href,
  lang,
  title,
  subtitle,
  icon,
}: {
  href: string;
  lang: string;
  title: string;
  subtitle: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full items-center justify-between rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
          <span>{icon}</span>
        </div>

        <div>
          <div className="mb-1 flex items-center gap-2">
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
              {lang}
            </span>
            <span className="text-xs text-slate-500">Open resource</span>
          </div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{subtitle}</p>
        </div>
      </div>

      <span className="text-xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-700">
        →
      </span>
    </Link>
  );
}

export default function FirstAssessmentPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="px-6 pb-16 pt-16 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
              <span>✨</span>
              Jr.LTF Assessment
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              1st Assessment
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              This assessment helps candidates build consistency in their
              spiritual life, reflect on their readiness with sincerity, and
              move forward with greater ownership and responsibility.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
                  <span>🎯</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Objective of 1st Assessment
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Purpose and timeline
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">
                    Objectives
                  </h3>
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="leading-7 text-slate-700">
                        Select Jr.LTF members according to the fulfillment of
                        the joining requirements.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="leading-7 text-slate-700">
                        Allow candidates to reflect on their readiness, not
                        simply pass or fail them.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900">
                    <span>🗓️</span>
                    Period
                  </h3>

                  <div className="space-y-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="leading-7 text-slate-700">
                        Start and complete the 70-day track{" "}
                        <span className="font-semibold">
                          [Start before April 1st, end by June 9th]
                        </span>
                        .
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="leading-7 text-slate-700">
                        On the 60th day, complete interview with Chapter
                        leader/representative{" "}
                        <span className="font-semibold">[May]</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <aside className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xl">
                  <span>📝</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Resources & Submission
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Open the files and submit reflections
                  </p>
                </div>
              </div>

              <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg">🌍</span>
                  <p className="text-sm leading-6 text-slate-600">
                    Guideline and template are available in four languages.
                    Choose the version most suitable for you.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {trackerLinks.map((item) => (
                  <ResourceButton
                    key={item.lang}
                    href={item.href}
                    lang={item.lang}
                    title={item.title}
                    subtitle={item.subtitle}
                    icon={item.icon}
                  />
                ))}
              </div>

              <div className="mt-5">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                      <span>📤</span>
                    </div>

                    <div>
                      <div className="mb-1 text-base font-semibold text-slate-900">
                        Upload “Daily Reflection Sheet”
                      </div>
                      <div className="text-sm text-slate-600">
                        Submit your completed daily reflection form
                      </div>
                    </div>
                  </div>

                  <span className="text-xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-700">
                    →
                  </span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}