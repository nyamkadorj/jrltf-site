"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Framework", href: "/framework" },
  { label: "Program", href: "/program" },
  { label: "Standards", href: "/standards" },
  { label: "Recruitment", href: "/recruitment" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Jr.LTF
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:opacity-70 ${
                  active ? "font-semibold text-slate-900" : "text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/apply"
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:opacity-90"
        >
          Apply
        </Link>
      </div>
    </header>
  );
}
