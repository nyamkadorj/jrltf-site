// src/app/recruitment/page.tsx
"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    date: "March 1 – March 10",
  },
  {
    title: "Chapter leader/representative meets with parents/families",
    date: "March 1 – March 24",
  },
  {
    title: "Families submit the application form",
    date: "Before March 25",
    note: "Start saving and raising funds",
  },
  { title: "Deadline for the application form", date: "By March 25" },
  {
    title: "Start and complete the 70-day track",
    date: "April 1 – June 9",
  },
  {
    title: "Complete interview with Chapter leader/representative",
    date: "May",
    note: "Interview conducted based on Evaluation sheet",
  },
  {
    title: "Finalize evaluation and select challengers",
    date: "By June 15",
  },
  {
    title: "Jr. LTF International Challenger’s Course",
    date: "July 27 – Aug 10 (Tentative)",
  },
  { title: "Selection of Jr.LTF members", date: "End of Workshop" },
];

export default function RecruitmentPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="max-w-3xl">
          <h1 className="text-4xl font-bold text-slate-900">Recruitment Process</h1>
          <p className="mt-4 text-slate-600">
            The recruitment process is designed to support candidates’ spiritual
            growth, clarify readiness, and confirm alignment with the program
            standards.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h2 className="text-xl font-semibold text-slate-900">
            Recruitment Steps
          </h2>
          <p className="mt-2 text-slate-600">
            Follow the steps in order. Each step builds on the previous one.
          </p>

          <div className="mt-10">
            <VerticalTimeline steps={TIMELINE} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------------- Timeline ---------------- */

function VerticalTimeline({ steps }: { steps: Step[] }) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  // Progress based on scrolling through the timeline container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.2"],
  });

  // Line height grows as you scroll
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      {/* Base line */}
      <div className="absolute left-[20px] top-0 h-full w-px bg-slate-200" />

      {/* Glowing progress line (animated) */}
      <motion.div
        style={{ scaleY: lineScaleY, transformOrigin: "top" }}
        className="absolute left-[20px] top-0 w-px bg-slate-900"
      />
      {/* Glow layer */}
      <motion.div
        style={{ scaleY: lineScaleY, transformOrigin: "top" }}
        className="absolute left-[20px] top-0 w-[3px] bg-slate-900/70 blur-[3px]"
      />

      {/* Soft moving glow “pulse” */}
      <motion.div
        className="absolute left-[16px] top-0 h-10 w-2 rounded-full bg-slate-900/30 blur-md"
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.ol
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative space-y-8"
      >
        {steps.map((s, i) => (
          <motion.li key={`${i}-${s.title}`} variants={item} className="relative">
            <div className="flex gap-6">
              {/* Step number */}
              <div className="relative z-10 mt-1 h-10 w-10 shrink-0">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-300 bg-white shadow-sm">
                  <span className="text-sm font-semibold text-slate-800">
                    {i + 1}
                  </span>
                </div>
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-500 hover:shadow-md"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>

                  {/* Emphasized Date */}
                  <div className="rounded-2xl bg-slate-900 px-5 py-2 text-base font-semibold text-white shadow-md">
                    {s.date}
                  </div>
                </div>

                {s.note && (
                  <p className="mt-4 text-sm text-slate-600">{s.note}</p>
                )}
              </motion.div>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
