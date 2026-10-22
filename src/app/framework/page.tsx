
"use client";

import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: EASE, delay },
});

const accordion = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      height: { duration: 0.95, ease: EASE },
      opacity: { duration: 0.7, ease: EASE, delay: 0.08 },
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      height: { duration: 0.85, ease: EASE },
      opacity: { duration: 0.35, ease: EASE },
    },
  },
};

const STANDARDS_LINKS = [
  { label: "1. Identity", href: "/standards#identity" },
  {
    label: "2. Right Motivation (driven by Filial Piety & True Love)",
    href: "/standards#right-motivation-driven-by-true-love-and-filial-piety",
  },
  {
    label: "3. Self-Discipline (Self-mastery; cultivation of gratitude, humility)",
    href: "/standards#self-discipline-self-mastery",
  },
  {
    label: "4. Growth through Challenge",
    href: "/standards#growth-through-challenge",
  },
  {
    label: "5. Role Model / Excellence",
    href: "/standards#role-model-excellence",
  },
  {
    label: "6. Parents’ Leadership role",
    href: "/standards#parents-leadership-role",
  },
];

type CoreValue = {
  label: string;
  bullets: string[];
};

const CORE_VALUES: CoreValue[] = [
  {
    label: "1. Living for the Greater Good",
    bullets: [
      "I Align myself to God’s Vision, Values and Goals",
      "I continuously Invest in others to develop their potential",
      "I Multiply the vision and value by taking creative action",
      "I Share best practices to many people",
    ],
  },
  {
    label: "2. Ownership",
    bullets: [
      "I am entrusted to take Responsibility for stated and expected goals given by the organization",
      "I am Accountable for the execution and outcomes of stated and expected goals.",
      "I take Initiative by being proactive and solving problem.",
      "I Strive for excellence with passion and commitment.",
      "I Execute the goals that I set out to achieve.",
    ],
  },
  {
    label: "3. Teamwork",
    bullets: [
      "I Mentor team members from God’s perspective to personally guide their growth and development.",
      "I keep Open-mindedness to give and receive feedback and new ideas.",
      "I Respect team member by trusting them and recognizing the merit they bring.",
      "I Energize team members with my conviction in the common vision and goals.",
    ],
  },
  {
    label: "4. Dream Big",
    bullets: [
      "I have absolute Conviction in the fulfillment of One Family under God.",
      "I Aspire to challenge limitations by looking for possibilities and seizing the opportunities.",
      "I am Result-oriented, learning from both victories and failures with the end goal in mind.",
      "I am Expertise-driven to be an effective part of realizing One Family under God.",
    ],
  },
];

export default function FrameworkPage() {
  const [openId, setOpenId] = React.useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 text-[#001530]">
      {/* Header */}
      <motion.div {...inView(0)} className="max-w-3xl">
        <div className="mb-4 h-1 w-12 rounded-full bg-[#D4AF37]" />

        <h1 className="text-4xl font-bold text-[#002040]">
          Framework
        </h1>

        <p className="mt-4 leading-relaxed text-[#40536A]">
          Purpose of having a clear Framework to clarify how Identity, Standards, and Core Values are
          meant to work together as an integrated framework for the Jr. LTF program.{" "}
          <b className="text-[#002040]">Integrated framework:</b>{" "}
          Identity → Culture Building → Standards → Core Values
        </p>
      </motion.div>

      <div className="mt-10 space-y-5">
        {/* 1. Identity */}
        <FrameworkCard
          id={1}
          openId={openId}
          setOpenId={setOpenId}
          title="1. Identity / Vertical Alignment"
          delay={0.04}
        >
          <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
            <DarkBlock title={`1. Identity / Vertical\nAlignment`} />

            <AccentBlock>
              <p className="leading-relaxed text-[#001530]">
                <b>At the foundation</b>, our youth should first understand <b>who they are</b> and
                actively cultivate their relationship with God. By understanding their identity as
                sons and daughters of God, they can then freely choose to participate in realizing
                God’s dream of One Family under God, one family at a time.
              </p>

              <p className="mt-4 font-semibold text-[#002040]">
                Identity is the starting point that gives meaning and direction to everything else.
              </p>
            </AccentBlock>
          </div>
        </FrameworkCard>

        {/* 2. Culture Building */}
        <FrameworkCard
          id={2}
          openId={openId}
          setOpenId={setOpenId}
          title="2. Culture Building (as leader)"
          delay={0.06}
        >
          <div className="grid gap-6 lg:grid-cols-[360px_1fr_1.25fr]">
            <DarkBlock title={`2. Culture Building\n(as leader)`} />

            <AccentBlock className="flex items-center justify-center text-center">
              <p className="text-base font-medium leading-relaxed text-[#002040]">
                As sons and daughters of God, we are actively{" "}
                <b>participating in creating a shift in culture.</b>
              </p>
            </AccentBlock>

            <div className="space-y-4">
              <WhitePill>
                <b>A culture</b> where God is at the center
              </WhitePill>

              <WhitePill>
                <b>A culture</b> where we are motivated to live for the sake of others{" "}
                <b>(culture of heart)</b> and a culture of excellence (the driver to do and be our
                best for heavenly father).
              </WhitePill>

              <WhitePill>
                <b>A culture</b> where we are living to embody God’s truth, righteousness, goodness
                and True Love in our everyday life.
              </WhitePill>
            </div>
          </div>
        </FrameworkCard>

        {/* 3. Standards */}
        <FrameworkCard
          id={3}
          openId={openId}
          setOpenId={setOpenId}
          title="3. Standards"
          delay={0.08}
        >
          <div className="grid gap-6 lg:grid-cols-[360px_1fr_1.1fr]">
            <DarkBlock title="3. Standards" />

            <AccentBlock className="text-center">
              <p className="leading-relaxed text-[#001530]">
                The Jr.LTF Program is <b>guided by clear standards</b> that support our youth in
                growing <b>as true sons and daughters of God.</b>
              </p>

              <p className="mt-4 leading-relaxed text-[#001530]">
                These standards help them take ownership of God’s will and develop as leaders who
                are prepared to bring positive transformation to society.
              </p>
            </AccentBlock>

            <div className="space-y-3">
              {STANDARDS_LINKS.map((s) => (
                <ClickableMiniPill key={s.href} href={s.href}>
                  {s.label}
                </ClickableMiniPill>
              ))}
            </div>
          </div>
        </FrameworkCard>

        {/* 4. Core Values Framework */}
        <FrameworkCard
          id={4}
          openId={openId}
          setOpenId={setOpenId}
          title="4. Core Values Framework"
          delay={0.1}
        >
          <div className="grid gap-6 lg:grid-cols-[360px_1fr_1.1fr]">
            <DarkBlock title={`4. Core Values\nFramework`} />

            <AccentBlock className="text-center">
              <p className="leading-relaxed text-[#001530]">
                <b>The Core Values framework is a simple yet profound way</b> to live out these
                standards on a daily basis.
              </p>

              <p className="mt-4 leading-relaxed text-[#001530]">
                The 4 core values—serve as the framework for both the education we provide
                (cognitive &amp; experiential) and the culture of heart we seek to build.
              </p>

              <p className="mt-4 leading-relaxed text-[#001530]">
                <b>Through practicing these values</b>, our youth learn to become change-makers and
                leaders who embody God’s ideal in their homes, schools, communities, and ultimately
                in society.
              </p>
            </AccentBlock>

            {/* Four evenly sized Core Value cards on desktop */}
            <div className="grid gap-2 lg:h-full lg:grid-rows-4">
              {CORE_VALUES.map((v) => (
                <CoreValueHoverCard
                  key={v.label}
                  label={v.label}
                  bullets={v.bullets}
                />
              ))}
            </div>
          </div>
        </FrameworkCard>
      </div>
    </div>
  );
}

/* ---------------- Expandable Framework Card ---------------- */

function FrameworkCard({
  id,
  openId,
  setOpenId,
  title,
  delay,
  children,
}: {
  id: number;
  openId: number;
  setOpenId: (n: number) => void;
  title: string;
  delay: number;
  children: React.ReactNode;
}) {
  const isOpen = openId === id;

  return (
    <motion.section
      {...inView(delay)}
      className={`rounded-3xl border bg-white p-6 shadow-sm transition-colors duration-300 ${
        isOpen
          ? "border-[#D4AF37]/50"
          : "border-[#DCE5ED] hover:border-[#D4AF37]/50"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpenId(isOpen ? 0 : id)}
        className="w-full text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-[#002040] md:text-xl">
            {title}
          </h2>

          <span
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl border transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen
                ? "border-[#D4AF37] bg-[#FFF8E7] text-[#A77D1E]"
                : "border-[#DCE5ED] bg-[#EFF5F9] text-[#002040]"
            }`}
          >
            <span
              className={[
                "text-xl leading-none transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen ? "rotate-45" : "",
              ].join(" ")}
            >
              +
            </span>
          </span>
        </div>

        <div className="mt-3 h-px w-full bg-[#DCE5ED]" />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={`content-${id}`}
            variants={accordion}
            initial="closed"
            animate="open"
            exit="closed"
            className="overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.65,
                  ease: EASE,
                  delay: 0.12,
                },
              }}
              exit={{
                opacity: 0,
                y: 8,
                transition: { duration: 0.25, ease: EASE },
              }}
              className="pt-6"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

/* ---------------- UI Blocks ---------------- */

function DarkBlock({ title }: { title: string }) {
  return (
    <motion.div
      {...inView(0)}
      className="flex min-h-[140px] items-center justify-center rounded-3xl bg-gradient-to-br from-[#001530] via-[#002040] to-[#003764] px-6 py-10 text-center text-2xl font-bold leading-snug text-white shadow-sm"
    >
      <span className="whitespace-pre-line">
        {title}
      </span>
    </motion.div>
  );
}

function AccentBlock({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      {...inView(0)}
      className={[
        "rounded-3xl border border-[#F4E5AE] bg-gradient-to-br from-[#FFF8E7] via-[#EFF5F9] to-white px-6 py-6 shadow-sm",
        className,
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
}

function WhitePill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      {...inView(0)}
      className={[
        "rounded-2xl border border-[#DCE5ED] bg-white px-6 py-4 text-sm leading-relaxed text-[#002040] shadow-sm transition-all duration-200 hover:border-[#D4AF37]/50 hover:shadow-md",
        className,
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
}

function ClickableMiniPill({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={[
        "group block rounded-2xl border border-[#DCE5ED] bg-white px-5 py-4 text-sm leading-relaxed text-[#002040] shadow-sm",
        "transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-[1px] hover:border-[#D4AF37] hover:bg-[#FFF8E7] hover:shadow-md",
        "active:translate-y-0 active:shadow-sm",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-center font-medium">
          {children}
        </span>

        <span className="shrink-0 text-[#A77D1E] transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </Link>
  );
}

/* ---------------- Core Value Cards ---------------- */

function CoreValueHoverCard({
  label,
  bullets,
}: {
  label: string;
  bullets: string[];
}) {
  return (
    <div className="group relative lg:h-full">
      <button
        type="button"
        className={[
          "w-full rounded-2xl border border-[#DCE5ED] bg-white lg:h-full",
          "px-4 py-3 md:px-5 md:py-3.5 lg:px-4 lg:py-3",
          "text-left shadow-sm",
          "transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "hover:-translate-y-[1px] hover:border-[#D4AF37] hover:bg-[#FFF8E7] hover:shadow-md",
          "active:translate-y-0 active:shadow-sm",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2",
        ].join(" ")}
        aria-label={label}
      >
        <div className="flex h-full items-center justify-between gap-3">
          <span className="text-[14px] font-semibold leading-snug text-[#002040] md:text-[15px]">
            {label}
          </span>

          <span className="shrink-0 text-[#A77D1E] transition-transform duration-200 group-hover:translate-x-0.5">
            ↗
          </span>
        </div>
      </button>

      {/* Desktop hover details */}
      <div
        className={[
          "pointer-events-none absolute right-0 top-1/2 z-20 hidden w-[520px] -translate-y-1/2 lg:block",
          "opacity-0 transition-opacity duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover:opacity-100 group-focus-within:opacity-100",
        ].join(" ")}
      >
        <div className="rounded-2xl border border-[#D4AF37]/40 bg-white p-5 shadow-xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A77D1E]">
            {label}
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#40536A]">
            {bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile details */}
      <div className="mt-3 rounded-2xl border border-[#F4E5AE] bg-[#FFF8E7] p-4 lg:hidden">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A77D1E]">
          {label}
        </p>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#40536A]">
          {bullets.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
