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

function IconVision(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconMission(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2l7 7-7 13L5 9l7-7z" />
    </svg>
  );
}

function IconGoal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
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

export default function HomePage() {
  return (
    <div>
      {/* HERO (unchanged) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-white" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-36 text-white">
          <motion.h1 {...fadeUp(0)} className="text-4xl font-bold md:text-6xl">
            Junior Leadership Task Force (Jr.LTF)
          </motion.h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* Program Definition FIRST */}
        <motion.div
          {...fadeUpView(0)}
          className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm"
        >
          <div className="flex items-center gap-3">
            <IconDefinition className="h-6 w-6" />
            <h2 className="text-xl font-semibold">
              Program Definition
            </h2>
          </div>

          <p className="mt-3 text-white/80">
            Jr.LTF is an ongoing, yearly-based spiritual leadership training program for middle and
            high school students. It begins with an international summer workshop (kick-off)
            and continues through structured growth in the home and local field.
          </p>
        </motion.div>

        {/* Vision / Mission / Goal */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card title="Vision" icon={<IconVision className="h-5 w-5" />}>
            We envision a generation of true sons and daughters of God who embody and spread a culture of heart.
          </Card>

          <Card title="Purpose / Mission" icon={<IconMission className="h-5 w-5" />}>
            Jr.LTF guides and raises young leaders to become role models for God’s Providence.
          </Card>

          <Card title="Educational Goal" icon={<IconGoal className="h-5 w-5" />}>
            To enhance and deepen true leadership through a rigorous training program.
          </Card>

          {/* Program Characteristics */}
          <motion.div
            {...fadeUpView(0)}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <IconCharacteristics className="h-5 w-5 text-slate-900" />
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

function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <IconBullet className="h-4 w-4 mt-1 text-slate-900" />
      <span>{children}</span>
    </li>
  );
}
