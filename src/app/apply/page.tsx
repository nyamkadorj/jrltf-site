// src/app/apply/page.tsx
"use client";

import Link from "next/link";
import React from "react";

export default function ApplyPage() {
  // Later: replace this with your Google Forms URL
  const APPLY_URL = "#";

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-slate-900">Apply</h1>
          <p className="mt-4 text-slate-600">
            Sending the application form is a required step to start the recruitment process.
            Submitting the form does not affect the assessment result—it simply begins the process.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left: Info */}
          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Application Form (Does not affect assessment)
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              The application form helps your chapter create a basic profile for the candidate and
              family, and confirms your first act of will to join Jr.LTF and begin the assessment
              process.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Objective */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Objective
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                  <li>
                    To know candidate’s and family’s general information to make a profile
                  </li>
                  <li>
                    Birth, blood type, health (allergies), academic status (to measure impact
                    before and after), number of siblings
                  </li>
                  <li>To get regular and emergency contacts</li>
                  <li>
                    First act of will to join Jr.LTF Program to start the assessment process (if we
                    receive the application form, it indicates that the candidate and family want
                    to join)
                  </li>
                </ul>
              </div>

              {/* Included */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  What is included
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                  <li>Parents section</li>
                  <li>Family members section</li>
                  <li>Candidate’s section</li>
                </ul>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Important
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    This form is for profile + contact. Assessment happens later through the
                    recruitment steps.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={APPLY_URL}
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
              >
                Open Application Form
              </a>

              <Link
                href="/recruitment"
                className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-50"
              >
                Review Recruitment Timeline
              </Link>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              (Later you can replace <span className="font-mono">APPLY_URL</span> with your Google
              Forms link.)
            </p>
          </section>

          {/* Right: Quick steps */}
          <aside className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Quick Steps</h3>
            <ol className="mt-4 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-800">
                  1
                </span>
                <span>Submit the application form</span>
              </li>
              <li className="flex gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-800">
                  2
                </span>
                <span>Begin the assessment track (guided by your chapter)</span>
              </li>
              <li className="flex gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-800">
                  3
                </span>
                <span>Interview + selection steps follow</span>
              </li>
            </ol>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Need help?</p>
              <p className="mt-2 text-sm text-slate-700">
                Please contact your chapter leader/representative for support with submitting the
                application form.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
