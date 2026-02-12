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

/* ---------------- Icons (inline SVG) ---------------- */

function IconVision(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
}

function IconMission(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2l7 7-7 13L5 9l7-7z" />
      <path d="M12 2v7" />
      <path d="M5 9h14" />
    </svg>
  );
}

function IconGoal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function IconDefinition(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* "umbrella" / overview feel: badge + document */}
      <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M9 7h6" />
      <path d="M8 11h8" />
      <path d="M8 15h6" />
    </svg>
  );
}

/* ---- small icons for characteristics bullets ---- */
function IconOwner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2l3 6 7 .9-5 4.6 1.5 7.1L12 17l-6.5 3.6L7 13.5 2 8.9 9 8z" />
    </svg>
  );
}

function IconFamilyGrowth(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 20v-6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6" />
      <path d="M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M15 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>
  );
}

function IconMerit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3l2.2 4.5L19 8.3l-3.5 3.4.8 4.9L12 14.8 7.7 16.6l.8-4.9L5 8.3l4.8-.8L12 3z" />
      <path d="M8 21h8" />
    </svg>
  );
}

function IconDiscipline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12l2 2 4-6" />
      <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z" />
    </svg>
  );
}

function IconDailyLife(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 7h16" />
      <path d="M7 4v6" />
      <path d="M17 4v6" />
      <path d="M6 11h12v9H6z" />
    </svg>
  );
}

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
              Raising true sons and daughters of Heavenly Father who take ownership in realizing
              God's dream— One Family under God, one family at a time.
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
        {/* 1) Program Definition FIRST (different look) */}
        <motion.div
          {...fadeUpView(0)}
          className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm"
        >
          <div className="flex items-start gap-4">
            <span className="mt-0.5 grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white">
              <IconDefinition className="h-6 w-6" />
            </span>
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
                Program Definition
              </p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                A yearly-based spiritual leadership training journey
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Jr.LTF is an ongoing, yearly-based spiritual leadership training program for middle
                and high school students. It begins with an international summer workshop (kick-off)
                and continues through structured growth in the home and local field.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2) Vision/Mission/Goal blocks KEEP SAME as before (cards) */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card title="Vision" icon={<IconVision className="h-5 w-5" />}>
            We envision a generation of true sons and daughters of God who embody and spread a
            culture of heart, taking ownership in realizing God’s dream of One God-centered Family,
            building a world filled with peace and true love.
          </Card>

          <Card title="Purpose / Mission" icon={<IconMission className="h-5 w-5" />}>
            Jr.LTF guides and raises young leaders (ages 12–17) to become role models for God’s
            Providence—young people who represent God’s Ideal and set the standard of true
            leadership.
          </Card>

          <Card title="Educational Goal" icon={<IconGoal className="h-5 w-5" />}>
            To enhance and deepen true leadership through a rigorous training program that
            challenges participants in all dimensions to become young leaders who are owners in
            fulfilling God’s dream.
          </Card>

          {/* 3) Program Characteristics moves into the 4th slot */}
          <motion.div
            {...fadeUpView(0)}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">Program Characteristics</h2>

            <ul className="mt-4 space-y-3 text-slate-700">
              <Bullet icon={<IconOwner className="h-4 w-4" />}>
                Becoming the Owner of God's Providence.
              </Bullet>
              <Bullet icon={<IconFamilyGrowth className="h-4 w-4" />}>
                Continuous commitment to spiritual growth in the Family.
              </Bullet>
              <Bullet icon={<IconMerit className="h-4 w-4" />}>
                Earn the merit based on their own commitment.
              </Bullet>
              <Bullet icon={<IconDiscipline className="h-4 w-4" />}>
                Rigorous training &amp; Self-discipline.
              </Bullet>
              <Bullet icon={<IconDailyLife className="h-4 w-4" />}>
                Integrate to “day-to-day” life.
              </Bullet>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      {...fadeUpView(0)}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 shadow-sm">
          {icon}
        </span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <p className="mt-3 text-slate-700">{children}</p>
    </motion.div>
  );
}

function Bullet({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900">
        {icon}
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}
