"use client";

import Link from "next/link";

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">Apply Now</h1>
        <p className="mt-4 text-slate-600">
          The application is parent-led. Parents begin the application and invite each child
          candidate to complete their sections.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Parent-led Application</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>Parent creates the application.</li>
            <li>Parent invites one or more children (email link).</li>
            <li>Chapter reviews and interviews.</li>
            <li>HQ final assessment and announcement.</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              className="rounded-2xl bg-slate-900 px-6 py-3 font-medium text-white hover:opacity-90"
              type="button"
              onClick={() => alert("Portal coming soon. (Front-end only for now)")}
            >
              Start Parent Application
            </button>
            <Link
              href="/recruitment"
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-slate-800 hover:bg-slate-50"
            >
              Review Recruitment Steps
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold">Interest & Updates</h2>
          <p className="mt-3 text-slate-700">
            If the portal is not open yet, you can submit contact info so your chapter can
            follow up when applications open.
          </p>

          {/* Front-end only (no backend): simple mailto */}
          <a
            className="mt-6 inline-flex rounded-2xl border border-slate-200 bg-white px-6 py-3 text-slate-800 hover:bg-slate-50"
            href="mailto:jrltf@yourorg.org?subject=Jr.LTF%20Application%20Interest&body=Parent%20Name:%0AChapter:%0AEmail:%0AChild%20Name(s):%0A"
          >
            Email Interest Form
          </a>

          <p className="mt-3 text-xs text-slate-500">
            (Replace the email address with your official inbox.)
          </p>
        </div>
      </div>
    </div>
  );
}
