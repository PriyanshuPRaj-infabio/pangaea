import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import AtmosphericField from "@/components/3d/AtmosphericField";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pangaea Advisory | Homes & Investments Beyond Borders",
  description: "Luxury global real estate advisory, sovereign migration pathways, and wealth generation through international property investment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorantGaramond.variable} h-full antialiased bg-black text-white`}
    >
      <body className="min-h-full flex flex-col font-sans relative">
        <AtmosphericField />
        <SmoothScroll>
          <div className="noise-bg"></div>
          <CustomCursor />
          <Navbar />
          <main className="flex-1 flex flex-col relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
