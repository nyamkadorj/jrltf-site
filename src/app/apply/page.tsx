// src/app/apply/page.tsx
"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ApplyPage() {
  const APPLY_URL = "https://forms.gle/9A7uoG5BtCq4wFP6A";
  const ANNOUNCEMENT_URL = "#";

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
          className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
            For Parents / Candidates
          </p>

          <div className="mt-4 flex items-center gap-3">
            {/* Section Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 012-2z" />
            </svg>

            <h2 className="text-2xl font-bold">
              Sections Included in the Application Form
            </h2>
          </div>

          <p className="mt-4 text-white/80">
            Please review what is included before submitting the application.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">👨‍👩‍👧</span>
                <p className="text-sm font-semibold">Parents section</p>
              </div>
              <p className="mt-1 text-sm text-white/70">
                Parent information and contacts
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">🏠</span>
                <p className="text-sm font-semibold">Family members section</p>
              </div>
              <p className="mt-1 text-sm text-white/70">
                Basic family profile
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">🧑</span>
                <p className="text-sm font-semibold">Candidate’s section</p>
              </div>
              <p className="mt-1 text-sm text-white/70">
                Candidate background
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-10 py-5 text-base font-semibold text-slate-900 shadow-lg hover:bg-slate-100"
            >
              {/* Google Form Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 0a1 1 0 110 2 1 1 0 010-2zm5 16H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V9h10v2z" />
              </svg>

              Start Application Form →
            </motion.a>

            <Link
              href="/recruitment"
              className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-transparent px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Review Recruitment Timeline
            </Link>
          </div>

          {/* Notice */}
          <p className="mt-4 text-sm font-semibold text-red-300">
            Notice: Application form will be no longer available after March 25!
          </p>
        </motion.div>
      </section>

      {/* CHAPTER LEADER SECTION */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="rounded-3xl border border-slate-200 bg-white px-8 py-12 shadow-sm"
        >
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
              For Chapter Leaders/Representatives
            </p>

            <div className="mt-4 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-slate-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 11v2a2 2 0 002 2h2l4 4V5L7 9H5a2 2 0 00-2 2zM16 8v8m4-6v4" />
              </svg>

              <h2 className="text-3xl font-bold text-slate-900">
                Join the Jr.LTF Announcement Room
              </h2>
            </div>

            <p className="mt-6 leading-relaxed text-slate-600">
              All official Jr.LTF updates, recruitment announcements, selection process guidelines,
              shared materials, files, and important communications will be posted in the
              Announcement Room.
            </p>

            <motion.a
              href={ANNOUNCEMENT_URL}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="mt-8 inline-block rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90"
            >
              Leaders' Room
            </motion.a>
          </div>
        </motion.section>
      </section>
    </div>
  );
}