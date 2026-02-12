// src/app/recruitment/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: EASE, delay },
});

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

type Step = {
  title: string;
  date: string;
  note?: string;
};

const TIMELINE: Step[] = [
  { title: "HQ announcement of Jr.LTF Program", date: "By end of Feb" },
  {
    title:
      "HQ introduces the program to families in each chapter with chapter leader/representative",
    date: "From March 1st to March 10th",
  },
  {
    title: "Chapter leader/representative meets with parents/families",
    date: "Mar 1–24",
  },
  {
    title: "Families submit the application form",
    date: "Before March 25",
    note: "Note: start saving and raising funds for summer program",
  },
  { title: "Deadline for the application form", date: "By March 25" },
  {
    title: "Start and complete the 70-day track",
    date: "Start before April 1st, end by June 9th",
  },
  {
    title: "Complete the **interview between days 60 and 70** of the track, with the Chapter Leader/Representative",
    date: "May",
    note: "Interview conducted based on Evaluation sheet",
  },
  {
    title:
      "Chapter leader/representative finalize the evaluation and select challengers",
    date: "By June 15th",
  },
  {
    title: "Jr. LTF’s International Challenger’s Course",
    date: "Tentative date July 27th – Aug 10th",
  },
  { title: "Selection of Jr.LTF members", date: "At the end of WS" },
];

export default function RecruitmentPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="max-w-3xl">
          <h1 className="text-4xl font-bold text-slate-900">
            Recruitment Process
          </h1>
          <p className="mt-4 text-slate-600">
            The recruitment process is designed to support candidates’ spiritual
            growth, clarify readiness, and confirm alignment with the program
            standards.
          </p>
        </motion.div>

        {/* Top cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <InfoCard
            title="Objectives"
            delay={0.05}
            icon={<TargetIcon />}
          >
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              <li>
                Select Jr.LTF members according to the fulfillment of the
                joining requirements
              </li>
              <li>
                Allow candidates to reflect on their readiness (not simply pass
                or fail them)
              </li>
            </ul>
          </InfoCard>

          <InfoCard
            title="Method"
            delay={0.08}
            icon={<ClipboardIcon />}
          >
            <p className="text-slate-700">
              Use two assessment steps to confirm whether candidates are
              qualified to join.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>1st assessment - Screening process</li>
              <li>
                2nd assessment - Summer WS, direct input on motivation and
                behavior
              </li>
            </ul>
          </InfoCard>
        </div>

        {/* Timeline */}
        <motion.div
          {...fadeUp(0.14)}
          className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Recruitment Steps
            </h2>
            <p className="mt-2 text-slate-600">
              Follow the steps in order. Each step builds on the previous one.
            </p>
          </div>

          <div className="mt-8">
            <VerticalTimeline steps={TIMELINE} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------------- UI Components ---------------- */

function InfoCard({
  title,
  delay,
  icon,
  children,
}: {
  title: string;
  delay: number;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      {...fadeUp(delay)}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
          {icon}
        </div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {title}
        </p>
      </div>

      <div className="mt-4">{children}</div>
    </motion.section>
  );
}

/* ---------------- Icons ---------------- */

function TargetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <rect x="5" y="5" width="14" height="16" rx="2" />
    </svg>
  );
}

/* ---------------- Timeline (unchanged) ---------------- */

function VerticalTimeline({ steps }: { steps: Step[] }) {
  return (
    <motion.ol
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative space-y-6"
    >
      <div className="absolute left-5 top-0 h-full w-px bg-slate-200" />

      {steps.map((s, i) => (
        <motion.li key={`${i}-${s.title}`} variants={item} className="relative">
          <div className="flex items-start gap-5">
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0.75 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <span className="text-sm font-semibold text-slate-700">
                  {i + 1}
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: EASE }}
              className="w-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                  {s.title}
                </h3>

                <span className="inline-flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-800 shadow-sm">
                  {s.date}
                </span>
              </div>

              {s.note ? (
                <p className="mt-3 text-sm text-slate-600">{s.note}</p>
              ) : null}
            </motion.div>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
