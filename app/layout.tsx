import "../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";

export const metadata: Metadata = {
  title: "DWI — Dignity Works Initiative",
  description:
    "Restore Dignity Through Honest Work. Hire trusted workers in Nigeria, or earn through honest work near you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <MobileBottomBar />
        <Footer />
      </body>
    </html>
  );
}
