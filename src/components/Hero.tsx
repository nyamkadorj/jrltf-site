"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-white" />

      {/* Animated glow */}
      <motion.div
        className="absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
        animate={{ y: [0, 28, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-white"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/70">
            Spiritual Growth • Leadership • Ownership
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Junior Leadership Task Force (Jr.LTF)
          </h1>

          <p className="mt-5 text-lg text-white/80 md:text-xl">
            A year-based spiritual leadership training program for middle and high school students, raising role-model sons and
            daughters who take ownership in realizing God’s dream—One Family under God, One family at a time.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/recruitment"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 hover:opacity-90"
            >
              View Recruitment Process
            </Link>
            <Link
              href="/apply"
              className="rounded-2xl border border-white/35 px-6 py-3 text-white hover:bg-white/10"
            >
              Apply now (Parent-led)
            </Link>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Becoming owner of God's Providence",
              text: "Grow character and love in daily life—at home and in the community.",
            },
            {
              title: "Ownership",
              text: "Take responsibility for God’s dream, not just personal success.",
            },
            {
              title: "Growth Through Challenge",
              text: "Build discipline and courage through meaningful challenges.",
            },
          ].map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm"
            >
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
