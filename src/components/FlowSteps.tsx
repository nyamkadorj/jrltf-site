"use client";

import { motion } from "framer-motion";

export default function FlowSteps() {
  const steps = [
    { title: "Parent", text: "Starts the application and manages child invitations." },
    { title: "Child", text: "Completes candidate sections and submits required materials." },
    { title: "Chapter", text: "Reviews, interviews, and submits recommendation/evidence to HQ." },
    { title: "HQ", text: "Final assessment, selection, and announcement." },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">Recruitment → Apply Flow</h3>
        <span className="text-xs text-slate-500">Parent-led portal</span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="relative rounded-2xl border border-slate-200 bg-slate-50 p-4"
          >
            <div className="text-3xl font-bold text-slate-900">{i + 1}</div>
            <div className="mt-2 font-semibold">{s.title}</div>
            <div className="mt-2 text-sm text-slate-600">{s.text}</div>

            {i < steps.length - 1 ? (
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-300 text-2xl">
                →
              </div>
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
