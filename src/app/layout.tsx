import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Jr.LTF",
  description: "Junior Leadership Task Force – Global Program & Recruitment",
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
      </body>
    </html>
  );
}
