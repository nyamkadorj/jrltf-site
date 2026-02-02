import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Junior.LTF",
  description: "Junior Leadership Task Force – Program & Recruitment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Vercel Web Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
