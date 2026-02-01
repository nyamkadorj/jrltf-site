"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: EASE, delay },
});

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, ease: EASE, delay },
});

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-white" />

        {/* subtle floating glow */}
        <motion.div
          aria-hidden
          className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-36">
          <div className="max-w-3xl text-white">
            <motion.p
              {...fadeUp(0)}
              className="text-xs uppercase tracking-[0.25em] text-white/70"
            >
              Spiritual Growth • Leadership • Ownership
            </motion.p>

            <motion.h1
              {...fadeUp(0.08)}
              className="mt-4 text-4xl font-bold leading-tight md:text-6xl"
            >
              Junior Leadership Task Force (Jr.LTF)
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="mt-5 text-lg text-white/80 md:text-xl"
            >
              Raising role-model sons and daughters who take ownership in realizing God’s dream—
              One God-centered Family.
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/recruitment"
                className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 hover:opacity-90"
              >
                View Recruitment
              </Link>
              <Link
                href="/apply"
                className="rounded-2xl border border-white/35 px-6 py-3 text-white hover:bg-white/10"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTENT BLOCKS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Vision">
            We envision a generation of true sons and daughters of God who embody and spread a
            culture of heart, taking ownership in realizing God’s dream of One God-centered Family,
            building a world filled with peace and true love.
          </Card>

          <Card title="Purpose / Mission">
            Jr.LTF guides and raises young leaders (ages 12–17) to become role models for God’s
            Providence—young people who represent God’s Ideal and set the standard of true
            leadership.
          </Card>

          <Card title="Educational Goal">
            To enhance and deepen true leadership through a rigorous training program that
            challenges participants in all dimensions to become young leaders who are owners in
            fulfilling God’s dream.
          </Card>

          <Card title="Program Definition">
            Jr.LTF is an ongoing, yearly-based spiritual leadership training program for middle and
            high school students. It begins with an international summer workshop (kick-off) and
            continues through structured growth in the home and local field.
          </Card>
        </div>

        <motion.div
          {...fadeUpView(0)}
          className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6"
        >
          <h2 className="text-xl font-semibold">Program Characteristics</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>Year-based training anchored in spiritual life and growth.</li>
            <li>Parents as primary educators; growth is strengthened in the home.</li>
            <li>Clear standards: readiness for entrance and visible growth outcomes.</li>
            <li>Growth-through-challenge: discipline, responsibility, and service.</li>
            <li>Field-based continuation after kick-off with ongoing evaluation and guidance.</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm hover:bg-slate-50"
              href="/program"
            >
              See Program Flow
            </Link>
            <Link
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm hover:bg-slate-50"
              href="/standards"
            >
              See Standards
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      {...fadeUpView(0)}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-slate-700">{children}</p>
    </motion.div>
  );
}
