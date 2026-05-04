import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dignity Works — Honest work, real opportunity",
  description:
    "Hire trusted helpers in Nigeria, or earn through honest work near you. Calm, simple, dignified.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FBF8F3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-dvh bg-sand-50 text-ink-900 font-sans antialiased">
        <Navbar />
        <main className="pb-24 md:pb-0">{children}</main>
        <MobileBottomBar />
        <Footer />
      </body>
    </html>
  );
}
