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
      <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
      <path d="M8 15h6" />
    </svg>
  );
}

function IconCharacteristics(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 3l1.8 5.5H19l-4.2 3 1.6 5.5L12 14.9 7.6 17l1.6-5.5L5 8.5h5.2L12 3z" />
      <path d="M6 21h12" />
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
        <div className="grid gap-6 md:grid-cols-2">
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

          <Card title="Program Definition" icon={<IconDefinition className="h-5 w-5" />}>
            Jr.LTF is an ongoing, yearly-based spiritual leadership training program for middle and
            high school students. It begins with an international summer workshop (kick-off) and
            continues through structured growth in the home and local field.
          </Card>
        </div>

        <motion.div
          {...fadeUpView(0)}
          className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm">
              <IconCharacteristics className="h-5 w-5" />
            </span>
            <h2 className="text-xl font-semibold">Program Characteristics</h2>
          </div>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>Becoming the Owner of God's Providence.</li>
            <li>Continuous commitment to spiritual growth in the Family.</li>
            <li>Earn the merit based on their own commitment.</li>
            <li>Rigorous training &amp; Self-discipline.</li>
            <li>Integrate to “day-to-day” life.</li>
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
