"use client";

import Link from "next/link";
import React from "react";
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

/* ---------------- Icons ---------------- */

function IconDefinition(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M9 7h6" />
      <path d="M8 11h8" />
      <path d="M8 15h6" />
    </svg>
  );
}

function IconCharacteristics(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3l2.2 4.5L19 8.3l-3.5 3.4.8 4.9L12 14.8 7.7 16.6l.8-4.9L5 8.3l4.8-.8L12 3z" />
    </svg>
  );
}

function IconBullet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 12l2 2 4-6" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

/* ---------------- Page ---------------- */

export default function HomePage() {
  return (
    <div>
      {/* HERO (unchanged) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-white" />

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
              Raising true sons and daughters of Heavenly Father who take ownership in realizing God's dream—
              One Family under God, one family at a time.
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/recruitment"
                className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 hover:opacity-90"
              >
                Recruitment process
              </Link>
              <Link
                href="/apply"
                className="rounded-2xl border border-white/35 px-6 py-3 text-white hover:bg-white/10"
              >
                Fill application form
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTENT BLOCKS */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        {/* Program Definition (moved to top, text unchanged) */}
        <motion.div
          {...fadeUpView(0)}
          className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-2xl border border-white/20 bg-white/10">
              <IconDefinition className="h-5 w-5" />
            </span>
            <h2 className="text-xl font-semibold">
              Program Definition
            </h2>
          </div>

          <p className="mt-3 text-white/80">
            Jr.LTF is an ongoing, yearly-based spiritual leadership training program for middle and
            high school students. It begins with an international summer workshop (kick-off) and
            continues through structured growth in the home and local field.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Vision */}
          <Card title="Vision">
            We envision a generation of true sons and daughters of God who embody and spread a
            culture of heart, taking ownership in realizing God’s dream of One God-centered Family,
            building a world filled with peace and true love.
          </Card>

          {/* Mission */}
          <Card title="Purpose / Mission">
            Jr.LTF guides and raises young leaders (ages 12–17) to become role models for God’s
            Providence—young people who represent God’s Ideal and set the standard of true
            leadership.
          </Card>

          {/* Educational Goal */}
          <Card title="Educational Goal">
            To enhance and deepen true leadership through a rigorous training program that
            challenges participants in all dimensions to become young leaders who are owners in
            fulfilling God’s dream.
          </Card>

          {/* Program Characteristics (moved into grid, icon added) */}
          <motion.div
            {...fadeUpView(0)}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-2xl border border-slate-200 bg-slate-50">
                <IconCharacteristics className="h-5 w-5 text-slate-900" />
              </span>
              <h2 className="text-xl font-semibold">Program Characteristics</h2>
            </div>

            <ul className="mt-4 space-y-3 text-slate-700">
              <Bullet>Becoming the Owner of God's Providence.</Bullet>
              <Bullet>Continuous commitment to spiritual growth in the Family.</Bullet>
              <Bullet>Earn the merit based on their own commitment.</Bullet>
              <Bullet>Rigorous training & Self-discipline.</Bullet>
              <Bullet>Integrate to “day-to-day” life.</Bullet>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- Components ---------------- */

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <IconBullet className="h-4 w-4 mt-1 text-slate-900" />
      <span>{children}</span>
    </li>
  );
}
