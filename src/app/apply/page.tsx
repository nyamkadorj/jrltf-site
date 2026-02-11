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
              process. Submitting the form does not affect assessment results—it simply
              initiates the process.
            </p>

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
          </motion.div>
        </div>
      </section>

      {/* APPLICATION CONTENT */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Application Info */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              What the Application Collects
            </h2>

            <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-700">
              <li>Birth information</li>
              <li>Blood type</li>
              <li>Health information (allergies)</li>
              <li>Academic information (impact before and after)</li>
              <li>Number of siblings</li>
              <li>Regular & emergency contacts</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-700">
                Submitting the form indicates the candidate and family’s intention
                to begin the Jr.LTF assessment process.
              </p>
            </div>
          </div>

          {/* Form Sections */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Sections Included
            </h2>

            <ul className="mt-6 space-y-3 text-slate-800">
              <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                Parents section
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                Family members section
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                Candidate’s section
              </li>
            </ul>
          </div>
        </div>

        {/* DARK CHAPTER LEADER SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-16 rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-xl"
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
              All official Jr.LTF updates, recruitment announcements, selection process
              guidelines, shared materials, related files, and important communications
              will be posted in the Announcement Room.
            </p>

            <p className="mt-4 leading-relaxed text-white/80">
              Chapter leaders are strongly encouraged to join to stay aligned
              with HQ direction and ensure proper communication with families.
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
