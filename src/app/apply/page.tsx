// src/app/apply/page.tsx
"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ApplyPage() {
  // Later: replace this with your Google Forms URL
  const APPLY_URL = "#";

  return (
    <div className="bg-white">
      {/* Hero CTA */}
      <section className="relative overflow-hidden">
        {/* subtle background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-200/50 blur-3xl" />
          <div className="absolute -bottom-48 left-12 h-[520px] w-[520px] rounded-full bg-slate-100 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE }}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
              Application Form
            </p>

            <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Start the Jr.LTF Recruitment Process
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Sending the application form is a required first step to begin the recruitment
              process. Submitting the form does not affect assessment results—it simply starts the
              process and allows your chapter to create a basic profile.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                href={APPLY_URL}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm ring-1 ring-slate-900/10 hover:opacity-95"
              >
                Start Application Form
                <motion.span
                  aria-hidden="true"
                  className="ml-2 inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </motion.a>

              <Link
                href="/recruitment"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition-colors duration-200 hover:bg-slate-50"
              >
                Review Recruitment Timeline
              </Link>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              (Soon <span className="font-mono">APPLY_URL</span> will be activated)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Minimal content section */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* What we collect */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              What the application collects
            </h2>
            <p className="mt-3 text-slate-600">
              This information helps your chapter create a basic profile and ensure appropriate
              contact in both regular and emergency situations.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Birth information",
                "Blood type",
                "Health information (allergies)",
                "Academic information (before/after impact)",
                "Number of siblings",
                "Regular & emergency contacts",
              ].map((t) => (
                <li
                  key={t}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800"
                >
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sections included */}
          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              Sections in the form
            </h2>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                <p className="text-sm font-semibold text-slate-900">Parents section</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                <p className="text-sm font-semibold text-slate-900">Family members section</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                <p className="text-sm font-semibold text-slate-900">Candidate’s section</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-700">
                Submitting this form indicates that the candidate and family desire to begin the
                Jr.LTF recruitment process.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}
