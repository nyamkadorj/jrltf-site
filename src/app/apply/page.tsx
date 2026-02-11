// src/app/apply/page.tsx
"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ApplyPage() {
  const APPLY_URL = "#"; // Replace with Google Forms
  const ANNOUNCEMENT_URL = "#"; // Replace with announcement room link

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-200/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE }}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
              Application
            </p>

            <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Start the Jr.LTF Recruitment Process
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Sending the application form is a required first step to begin the recruitment
              process. Submitting the form does not affect assessment results—it simply initiates
              the process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOR PARENTS / CANDIDATES */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
            For Parents / Candidates
          </p>

          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            Sections Included in the Application Form
          </h2>

          <p className="mt-4 text-slate-600">
            Please review what is included before submitting the application.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
              <p className="text-sm font-semibold text-slate-900">Parents section</p>
              <p className="mt-1 text-sm text-slate-600">
                Parent information and contacts
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
              <p className="text-sm font-semibold text-slate-900">Family members section</p>
              <p className="mt-1 text-sm text-slate-600">
                Basic family profile
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
              <p className="text-sm font-semibold text-slate-900">Candidate’s section</p>
              <p className="mt-1 text-sm text-slate-600">
                Candidate background
              </p>
            </div>
          </div>

          {/* Buttons (placed after reading sections) */}
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href={APPLY_URL}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              Start Application Form →
            </motion.a>

            <Link
              href="/recruitment"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Review Recruitment Timeline
            </Link>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            (Later you can replace <span className="font-mono">APPLY_URL</span> with your Google
            Forms link.)
          </p>
        </motion.div>
      </section>

      {/* DARK CHAPTER LEADER SECTION (keep as is) */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-xl"
        >
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
              For Chapter Leaders
            </p>

            <div className="mt-4 flex items-center gap-3">
              {/* Megaphone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 11v2a2 2 0 002 2h2l4 4V5L7 9H5a2 2 0 00-2 2zM16 8v8m4-6v4"
                />
              </svg>

              <h2 className="text-3xl font-bold">
                Join the Jr.LTF Announcement Room
              </h2>
            </div>

            <p className="mt-6 leading-relaxed text-white/80">
              All official Jr.LTF updates, recruitment announcements, selection process guidelines,
              shared materials, related files, and important communications will be posted in the
              Announcement Room.
            </p>

            <p className="mt-4 leading-relaxed text-white/80">
              Chapter leaders are strongly encouraged to join to stay aligned with HQ direction and
              ensure proper communication with families.
            </p>

            <motion.a
              href={ANNOUNCEMENT_URL}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="mt-8 inline-block rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md hover:bg-slate-100"
            >
              Join Announcement Room
            </motion.a>
          </div>
        </motion.section>
      </section>
    </div>
  );
}
