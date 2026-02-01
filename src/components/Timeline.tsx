"use client";

import { motion } from "framer-motion";

export type TimelineItem = {
  title: string;
  dateLabel: string;
  body: string;
  bullets?: string[];
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200" />

      <div className="space-y-8">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: idx * 0.03 }}
            className="relative pl-12"
          >
            {/* dot */}
            <div className="absolute left-[9px] top-2 h-3 w-3 rounded-full bg-slate-900" />
            {/* subtle glow */}
            <div className="absolute left-[1px] top-[-6px] h-8 w-8 rounded-full bg-slate-900/10 blur-xl" />

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {item.dateLabel}
                </span>
              </div>

              <p className="mt-3 text-slate-600">{item.body}</p>

              {item.bullets?.length ? (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
