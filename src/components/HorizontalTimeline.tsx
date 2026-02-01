"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

export type HItem = {
  month: string;
  title: string;
  description: string;
};

export default function HorizontalTimeline({ items }: { items: HItem[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  const total = items.length;

  const scrollByCards = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(560, el.clientWidth * 0.85);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Detect which card is most centered
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const containerRect = el.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;

      let bestIdx = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        const r = card.getBoundingClientRect();
        const cardCenterX = r.left + r.width / 2;
        const dist = Math.abs(cardCenterX - containerCenterX);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      setActiveIdx(bestIdx);
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const progressPct = useMemo(() => {
    if (total <= 1) return 0;
    return (activeIdx / (total - 1)) * 100;
  }, [activeIdx, total]);

  return (
    <div className="relative">
      {/* Sticky header */}
      <div className="sticky top-[72px] z-10 mb-4 rounded-2xl border border-slate-200 bg-white/85 backdrop-blur px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Program Timeline
            </p>
            <p className="mt-1 text-sm text-slate-700">
              Step {activeIdx + 1} / {total}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollByCards("left")}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50"
              type="button"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scrollByCards("right")}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50"
              type="button"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100">
          <div
            className="h-1.5 rounded-full bg-slate-900 transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* track line behind cards */}
      <div className="absolute left-0 right-0 top-[144px] h-px bg-slate-200" />

      {/* horizontal scroller */}
      <div
        ref={scrollerRef}
        className="relative flex gap-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {/* Hide scrollbar (webkit) */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {items.map((item, idx) => {
          const isActive = idx === activeIdx;

          return (
            <motion.div
              key={`${item.month}-${idx}`}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              className="snap-start min-w-[320px] max-w-[460px] flex-shrink-0"
            >
              {/* dot + glow */}
              <div className="relative mb-4 h-10">
                <div className="absolute top-[22px] left-6 h-3 w-3 rounded-full bg-slate-900" />
                <div className="absolute top-[10px] left-[6px] h-12 w-12 rounded-full bg-slate-900/10 blur-xl" />
              </div>

              <div
                className={[
                  "rounded-3xl border bg-white p-6 shadow-sm transition",
                  isActive
                    ? "border-slate-300 shadow-md"
                    : "border-slate-200 hover:border-slate-300",
                ].join(" ")}
              >
                {/* MONTH (big) */}
                <div className="text-4xl md:text-3xl font-bold text-slate-900">
                  {item.month}
                </div>

                {/* PHASE TITLE */}
                <h3 className="mt-3 text-base font-medium text-slate-800">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-white/0" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-white/0" />
    </div>
  );
}
