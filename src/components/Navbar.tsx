
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

/* ---------------- Navigation ---------------- */

const navItems = [
  { label: "Why Jr.LTF", href: "/" },
  { label: "Framework", href: "/framework" },
  { label: "Standards", href: "/standards" },
  { label: "Recruitment", href: "/recruitment" },
  {
    label: "Merit Badge System",
    href: "/badges",
    highlight: true,
    badge: "New",
  },
];

/* ---------------- Languages ---------------- */

const LANGS = [
  { code: "en", flag: "globe", title: "English (Reset)" },
  { code: "ko", flag: "🇰🇷", title: "한국어 (Korean)" },
  { code: "ja", flag: "🇯🇵", title: "日本語 (Japanese)" },
  { code: "mn", flag: "🇲🇳", title: "Монгол (Mongolian)" },
];

/* ---------------- Icons ---------------- */

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

function MedalIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M8 3H4l4 8" />
      <path d="M16 3h4l-4 8" />
      <path d="M9 3h6" />
      <circle cx="12" cy="16" r="5" />
      <path d="m12 13.5.8 1.7 1.9.3-1.4 1.3.3 1.9-1.6-.9-1.6.9.3-1.9-1.4-1.3 1.9-.3z" />
    </svg>
  );
}

/* ---------------- Google Translate ---------------- */

function resetTranslateToEnglish() {
  document.cookie = "googtrans=/en/en;path=/";
  window.location.reload();
}

function setGoogleTranslateLanguage(lang: string) {
  const select =
    document.querySelector<HTMLSelectElement>(
      "select.goog-te-combo"
    );

  if (!select) return;

  select.value = lang;
  select.dispatchEvent(new Event("change"));
}

/* ---------------- Language Buttons ---------------- */

function FlagsRow({
  size = "md",
}: {
  size?: "md" | "lg";
}) {
  const btnClass =
    size === "md"
      ? "grid h-9 w-9 place-items-center rounded-xl border border-[#DCE5ED] bg-white text-[16px] leading-none text-[#002040] shadow-sm transition-all duration-200 hover:border-[#D4AF37] hover:bg-[#FFF8E7]"
      : "grid h-10 w-10 place-items-center rounded-xl border border-[#DCE5ED] bg-white text-[18px] leading-none text-[#002040] shadow-sm transition-all duration-200 hover:border-[#D4AF37] hover:bg-[#FFF8E7]";

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

/* ---------------- Navbar ---------------- */

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#DCE5ED] bg-white/95 shadow-sm backdrop-blur">

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">

        {/* Jr.LTF Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Jr.LTF Home"
        >
          <Image
            src="/jrltf-logo.png"
            alt="Jr.LTF - Junior Leadership Task Force"
            width={115}
            height={120}
            priority
            className="h-auto w-[65px] object-contain transition-opacity duration-200 hover:opacity-80 sm:w-[75px] lg:w-[85px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="relative hidden items-center gap-3 text-sm lg:flex xl:gap-5">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const isHighlighted = item.highlight;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap transition-all duration-200 ${
                  isHighlighted
                    ? "rounded-full border border-[#D4AF37] bg-[#FFF8E7] px-3 py-1.5 text-[#002040] hover:bg-[#F4E5AE]"
                    : "px-1 text-[#40536A] hover:text-[#A77D1E]"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {isHighlighted && (
                    <MedalIcon className="h-4 w-4 text-[#D4AF37]" />
                  )}

                  <span
                    className={
                      active || isHighlighted
                        ? "font-semibold text-[#002040]"
                        : ""
                    }
                  >
                    {item.label}
                  </span>

                  {item.badge && (
                    <span className="ml-1 rounded-full bg-[#002040] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                      {item.badge}
                    </span>
                  )}
                </span>

                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute -bottom-1 h-[2px] bg-[#D4AF37] ${
                      isHighlighted
                        ? "left-3 right-3"
                        : "left-0 w-full"
                    }`}
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

        {/* Right Controls */}
        <div className="flex shrink-0 items-center gap-3">

          {/* Desktop Language Buttons */}
          <div className="hidden items-center gap-2 lg:flex">
            <FlagsRow size="md" />
          </div>

          {/* Apply Button */}
          <Link
            href="/apply"
            className="rounded-xl bg-[#002040] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#003764] hover:shadow-md"
          >
            Apply
          </Link>

          {/* Mobile / Tablet Hamburger */}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-[#DCE5ED] bg-white text-[#002040] shadow-sm lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="jrltf-mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-[#002040] transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-[#002040] transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-[#002040] transition-transform duration-300 ${
                  open ? "translate-y-[-7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        id="jrltf-mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open
            ? "max-h-[560px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 pb-5">
          <div className="rounded-2xl border border-[#DCE5ED] bg-white shadow-md">

            {/* Mobile Language Buttons */}
            <div className="flex justify-end p-3 pb-2">
              <FlagsRow size="lg" />
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col p-2 pt-1">
              {navItems.map((item) => {
                const active = pathname === item.href;
                const isHighlighted = item.highlight;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                      isHighlighted
                        ? "border border-[#D4AF37] bg-[#FFF8E7] text-[#002040] hover:bg-[#F4E5AE]"
                        : "text-[#40536A] hover:bg-[#EFF5F9] hover:text-[#002040]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isHighlighted && (
                        <MedalIcon className="h-4 w-4 text-[#D4AF37]" />
                      )}

                      <span
                        className={
                          active || isHighlighted
                            ? "font-semibold text-[#002040]"
                            : ""
                        }
                      >
                        {item.label}
                      </span>

                      {item.badge && (
                        <span className="rounded-full bg-[#002040] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                          {item.badge}
                        </span>
                      )}
                    </span>

                    {active && (
                      <motion.span
                        layoutId="nav-underline-mobile"
                        className="absolute bottom-2 left-4 right-4 h-[2px] bg-[#D4AF37]"
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

              {/* Mobile Apply Button */}
              <Link
                href="/apply"
                className="mt-2 rounded-xl bg-[#002040] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#003764]"
              >
                Apply
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Hidden Google Translate Mount */}
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
