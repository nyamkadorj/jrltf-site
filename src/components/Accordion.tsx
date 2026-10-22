"use client";

import { useId, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const buttonId = `${id}-button`;
  const contentId = `${id}-content`;

  return (
    <div
      className={`rounded-3xl border bg-white shadow-sm transition-colors duration-300 ${
        open
          ? "border-[#D4AF37]/60"
          : "border-[#DCE5ED] hover:border-[#D4AF37]/60"
      }`}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 rounded-3xl px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4"
      >
        <span className="text-lg font-semibold text-[#002040]">
          {title}
        </span>

        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xl transition-colors duration-300 ${
            open
              ? "border-[#D4AF37] bg-[#FFF8E7] text-[#A77D1E]"
              : "border-[#DCE5ED] bg-[#EFF5F9] text-[#002040]"
          }`}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <div id={contentId} role="region" aria-labelledby={buttonId}>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 leading-relaxed text-[#40536A]">
                <div className="mb-5 h-px bg-[#D4AF37]/30" />
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}