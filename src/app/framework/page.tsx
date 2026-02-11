"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, ease: EASE, delay },
});

export default function FrameworkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <motion.div {...inView(0)} className="max-w-3xl">
        <h1 className="text-4xl font-bold">Framework</h1>
        <p className="mt-4 text-slate-600">
          Integrated Framework: Identity → Culture Building → Standards → Core Values
        </p>
      </motion.div>

      {/* Sections */}
      <div className="mt-10 space-y-10">
        {/* 1. Identity / Vertical Alignment */}
        <motion.section {...inView(0.04)} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
            <BlueBlock title={`1. Identity / Vertical\nAlignment`} />

            <YellowBlock>
              <p className="leading-relaxed text-slate-900">
                <b>At the foundation</b>, our youth should first understand <b>who they are</b> and
                actively cultivate their relationship with God. By understanding their identity as
                sons and daughters of God, they can then freely choose to participate in realizing
                God’s dream of One Family under God, one family at a time.
              </p>
              <p className="mt-4 font-semibold text-slate-900">
                Identity is the starting point that gives meaning and direction to everything else.
              </p>
            </YellowBlock>
          </div>
        </motion.section>

        {/* 2. Culture Building */}
        <motion.section {...inView(0.06)} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[360px_1fr_1.25fr]">
            <BlueBlock title={`2. Culture Building\n(as leader)`} />

            <YellowBlock className="flex items-center justify-center text-center">
              <p className="text-base font-medium leading-relaxed text-slate-900">
                As sons and daughters of God, we are actively <b>participating in creating a shift in culture.</b>
              </p>
            </YellowBlock>

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
        </motion.section>

        {/* 3. Standards */}
        <motion.section {...inView(0.08)} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[360px_1fr_1.1fr]">
            <BlueBlock title="3. Standards" />

            <YellowBlock className="text-center">
              <p className="leading-relaxed text-slate-900">
                The Jr.LTF Program is <b>guided by clear standards</b> that support our youth in
                growing <b>as true sons and daughters of God.</b>
              </p>
              <p className="mt-4 leading-relaxed text-slate-900">
                These standards help them take ownership of God’s will and develop as leaders who
                are prepared to bring positive transformation to society.
              </p>
            </YellowBlock>

            <div className="space-y-3">
              <WhitePill className="text-center">1. Identity</WhitePill>
              <WhitePill className="text-center">
                2. Motivation (driven by Filial Piety <br />&amp; True Love)
              </WhitePill>
              <WhitePill className="text-center">
                3. Self-Discipline (Self-mastery; <br />
                cultivation of gratitude, humility)
              </WhitePill>
              <WhitePill className="text-center">4. Growth through Challenge</WhitePill>
              <WhitePill className="text-center">5. Role Model / Excellence</WhitePill>
              <WhitePill className="text-center">6. Parents’ Leadership role</WhitePill>
            </div>
          </div>
        </motion.section>

        {/* 4. Core Values Framework */}
        <motion.section {...inView(0.1)} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[360px_1fr_1.1fr]">
            <BlueBlock title={`4. Core Values\nFramework`} />

            <YellowBlock className="text-center">
              <p className="leading-relaxed text-slate-900">
                <b>The Core Values framework is a simple yet profound way</b> to live out these
                standards on a daily basis.
              </p>
              <p className="mt-4 leading-relaxed text-slate-900">
                The 4 core values—serve as the framework for both the education we provide
                (cognitive &amp; experiential) and the culture of heart we seek to build.
              </p>
              <p className="mt-4 leading-relaxed text-slate-900">
                <b>Through practicing these values</b>, our youth learn to become change-makers and
                leaders who embody God’s ideal in their homes, schools, communities, and ultimately
                in society.
              </p>
            </YellowBlock>

            <div className="space-y-3">
              <WhitePill className="text-center text-lg font-semibold">
                1. Living for the <br />
                Greater Good
              </WhitePill>
              <WhitePill className="text-center text-lg font-semibold">2. Ownership</WhitePill>
              <WhitePill className="text-center text-lg font-semibold">3. Teamwork</WhitePill>
              <WhitePill className="text-center text-lg font-semibold">4. Dream Big</WhitePill>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

/* ---------- UI blocks ---------- */

function BlueBlock({ title }: { title: string }) {
  return (
    <motion.div
      {...inView(0)}
      className="flex min-h-[140px] items-center justify-center rounded-3xl bg-blue-800 px-6 py-10 text-center text-2xl font-bold leading-snug text-white shadow-sm"
    >
      <span className="whitespace-pre-line">{title}</span>
    </motion.div>
  );
}

function YellowBlock({
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
        "rounded-3xl border border-amber-200 bg-amber-100/80 px-6 py-6 shadow-sm",
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
        "rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm leading-relaxed text-slate-900 shadow-sm",
        className,
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
}
