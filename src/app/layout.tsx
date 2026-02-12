import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Script from "next/script";
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
        {/* Google Translate init (global) */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                {
                  pageLanguage: 'en',
                  includedLanguages: 'ko,ja,mn',
                  autoDisplay: false
                },
                'google_translate_element'
              );
            }
          `}
        </Script>

        {/* Google Translate library */}
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Vercel Web Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
