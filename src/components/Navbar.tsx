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

const LANGS = [
  { code: "en", flag: "globe", title: "English (Reset)" },
  { code: "ko", flag: "🇰🇷", title: "한국어 (Korean)" },
  { code: "ja", flag: "🇯🇵", title: "日本語 (Japanese)" },
  { code: "mn", flag: "🇲🇳", title: "Монгол (Mongolian)" },
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

/* Reset to original English */
function resetTranslateToEnglish() {
  document.cookie = "googtrans=/en/en;path=/";
  window.location.reload();
}

/* Trigger Google widget */
function setGoogleTranslateLanguage(lang: string) {
  const select =
    document.querySelector<HTMLSelectElement>("select.goog-te-combo");
  if (!select) return;

  select.value = lang;
  select.dispatchEvent(new Event("change"));
}

function FlagsRow({ size = "md" }: { size?: "md" | "lg" }) {
  const btnClass =
    size === "md"
      ? "grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-[16px] leading-none shadow-sm transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-slate-950 dark:hover:bg-white/5"
      : "grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-[18px] leading-none shadow-sm transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-slate-950 dark:hover:bg-white/5";

  return (
    <div className="flex items-center gap-2">
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          title={l.title}
          aria-label={
            l.code === "en"
              ? "Reset language to English"
              : `Translate this page to ${l.title}`
          }
          className={btnClass}
          onClick={() => {
            if (l.code === "en") {
              resetTranslateToEnglish();
            } else {
              setGoogleTranslateLanguage(l.code);
            }
          }}
        >
          {l.flag === "globe" ? (
            <GlobeIcon className="h-4 w-4" />
          ) : (
            <span aria-hidden="true">{l.flag}</span>
          )}
        </button>
      ))}
    </div>
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

                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-slate-900 dark:bg-white"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop Flags Row */}
          <div className="hidden md:flex items-center gap-2">
            <FlagsRow size="md" />
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
            <div className="p-3 pb-2 flex justify-end">
              <FlagsRow size="lg" />
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

      {/* Hidden Google mount */}
      <div id="google_translate_element" className="hidden" />

      <style jsx global>{`
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .goog-te-gadget,
        .goog-te-gadget * {
          display: none !important;
        }
      `}</style>
    </header>
  );
}
