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
  {
    label: "1st Assessment",
    href: "/1st-assessment",
    highlight: true,
    badge: "New",
  },
  { label: "Q&A", href: "/faq" },
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

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3.75l2.47 5 5.53.8-4 3.9.94 5.5L12 16.35 7.06 18.95 8 13.45 4 9.55l5.53-.8L12 3.75z" />
    </svg>
  );
}

function resetTranslateToEnglish() {
  document.cookie = "googtrans=/en/en;path=/";
  window.location.reload();
}

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
      ? "grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-[16px] leading-none shadow-sm transition-colors hover:bg-slate-50"
      : "grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-[18px] leading-none shadow-sm transition-colors hover:bg-slate-50";

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
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-semibold tracking-tight text-slate-900"
        >
          Jr.LTF
        </Link>

        <nav className="relative hidden gap-6 text-sm md:flex md:items-center">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const isHighlighted = item.highlight;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors duration-200 ${
                  isHighlighted
                    ? "rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-slate-900 hover:bg-slate-200"
                    : "px-1 text-slate-600 hover:text-slate-900"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {isHighlighted && (
                    <StarIcon className="h-3.5 w-3.5 text-slate-700" />
                  )}

                  <span
                    className={
                      active
                        ? "font-semibold text-slate-900"
                        : isHighlighted
                        ? "font-semibold text-slate-900"
                        : ""
                    }
                  >
                    {item.label}
                  </span>

                  {item.badge && (
                    <span className="ml-1 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                      {item.badge}
                    </span>
                  )}
                </span>

                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute h-[2px] bg-slate-900 ${
                      isHighlighted
                        ? "left-3 right-3 -bottom-1"
                        : "left-0 w-full -bottom-1"
                    }`}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <FlagsRow size="md" />
          </div>

          <Link
            href="/apply"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white transition-opacity duration-200 hover:opacity-90"
          >
            Apply
          </Link>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-slate-900 transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-slate-900 transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-slate-900 transition-transform duration-300 ${
                  open ? "translate-y-[-7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 pb-5">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex justify-end p-3 pb-2">
              <FlagsRow size="lg" />
            </div>

            <nav className="flex flex-col p-2 pt-1">
              {navItems.map((item) => {
                const active = pathname === item.href;
                const isHighlighted = item.highlight;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative rounded-xl px-4 py-3 text-sm transition-colors duration-200 ${
                      isHighlighted
                        ? "bg-slate-100 text-slate-900 hover:bg-slate-200"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isHighlighted && (
                        <StarIcon className="h-4 w-4 text-slate-700" />
                      )}

                      <span
                        className={
                          active || isHighlighted
                            ? "font-semibold text-slate-900"
                            : ""
                        }
                      >
                        {item.label}
                      </span>

                      {item.badge && (
                        <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                          {item.badge}
                        </span>
                      )}
                    </span>

                    {active && (
                      <motion.span
                        layoutId="nav-underline-mobile"
                        className="absolute bottom-2 left-4 right-4 h-[2px] bg-slate-900"
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
                className="mt-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Apply
              </Link>
            </nav>
          </div>
        </div>
      </div>

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