"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { label: "Why Jr.LTF", href: "/" },
  { label: "Framework", href: "/framework" },
  { label: "Standards", href: "/standards" },
  { label: "Recruitment", href: "/recruitment" },
  { label: "FAQ", href: "/faq" },
];

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          Jr.LTF
        </Link>

        {/* Desktop Navigation */}
        <nav className="relative hidden md:flex gap-8 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-1 text-slate-600 transition-colors duration-200 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                <span
                  className={
                    active ? "font-semibold text-slate-900 dark:text-white" : ""
                  }
                >
                  {item.label}
                </span>

                {/* Sliding underline */}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-slate-900 dark:bg-white"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop Google Translate container (Step 2) */}
          <div className="hidden md:flex items-center gap-2">
            <span className="hidden lg:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
                <GlobeIcon className="h-4 w-4" />
              </span>
            </span>

            {/* Step 2: Add language switch container */}
            <div
              id="google_translate_element"
              className="origin-right scale-[0.92]"
            />
          </div>

          <Link
            href="/apply"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white transition-opacity duration-200 hover:opacity-90 dark:bg-white dark:text-slate-900"
          >
            Apply
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm dark:border-white/10 dark:bg-slate-950 dark:text-white"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-slate-900 transition-transform duration-300 dark:bg-white ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-slate-900 transition-opacity duration-200 dark:bg-white ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-slate-900 transition-transform duration-300 dark:bg-white ${
                  open ? "translate-y-[-7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 pb-5">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-950">
            <div className="p-3 pb-2">
              {/* Mobile translate row (Step 2) */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
                    <GlobeIcon className="h-4 w-4" />
                  </span>
                  <span className="font-medium">Translate</span>
                </div>

                {/* Step 2: Add language switch container */}
                <div
                  id="google_translate_element_mobile"
                  className="origin-right scale-[0.95]"
                />
              </div>
            </div>

            <nav className="flex flex-col p-2 pt-1">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative rounded-xl px-4 py-3 text-sm text-slate-700 transition-colors duration-200 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
                  >
                    <span
                      className={
                        active
                          ? "font-semibold text-slate-900 dark:text-white"
                          : ""
                      }
                    >
                      {item.label}
                    </span>

                    {active && (
                      <motion.span
                        layoutId="nav-underline-mobile"
                        className="absolute left-4 right-4 bottom-2 h-[2px] bg-slate-900 dark:bg-white"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}
                  </Link>
                );
              })}

              <Link
                href="/apply"
                className="mt-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-slate-900"
              >
                Apply
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Minimal styling overrides for the Google Translate dropdown */}
      <style jsx global>{`
        /* Hide the top banner space shifts as much as possible */
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }
        body {
          top: 0 !important;
        }

        /* Make the dropdown look minimal */
        #google_translate_element .goog-te-gadget,
        #google_translate_element_mobile .goog-te-gadget {
          font-family: inherit !important;
          color: transparent !important;
        }

        #google_translate_element select,
        #google_translate_element_mobile select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          border: 1px solid rgba(148, 163, 184, 0.55);
          background: rgba(255, 255, 255, 0.9);
          padding: 8px 10px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          color: rgb(30, 41, 59);
          outline: none;
          cursor: pointer;
        }

        .dark #google_translate_element select,
        .dark #google_translate_element_mobile select {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(2, 6, 23, 0.7);
          color: rgba(226, 232, 240, 0.95);
        }

        /* Hide the small Google branding text while keeping dropdown usable */
        #google_translate_element .goog-logo-link,
        #google_translate_element_mobile .goog-logo-link,
        #google_translate_element .goog-te-gadget span,
        #google_translate_element_mobile .goog-te-gadget span {
          display: none !important;
        }

        /* Keep widget inline */
        #google_translate_element,
        #google_translate_element_mobile {
          display: inline-flex;
          align-items: center;
        }
      `}</style>
    </header>
  );
}
