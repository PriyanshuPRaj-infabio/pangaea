"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroGlobe from "@/components/3d/HeroGlobe";
import KineticText from "@/components/ui/KineticText";
import MagneticButton from "@/components/ui/MagneticButton";
import { Sparkles, Globe2, TrendingUp, ShieldCheck, MapPin } from "lucide-react";

export default function CinematicHero() {
  const [coords, setCoords] = useState("25.2048° N, 55.2708° E"); // Dubai coords
  const coordList = [
    "25.2048° N, 55.2708° E (Dubai)",
    "38.7223° N, 9.1393° W (Lisbon)",
    "37.9838° N, 23.7275° E (Athens)",
    "7.8804° N, 98.3923° E (Phuket)",
    "8.4095° S, 115.1889° E (Bali)",
    "35.1856° N, 33.3823° E (Nicosia)",
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % coordList.length;
      setCoords(coordList[index]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const floatingStats = [
    {
      icon: Globe2,
      value: "8.4%",
      label: "Dubai Rental Yield",
      position: "top-[25%] left-4 2xl:left-12",
      delay: 0.6,
    },
    {
      icon: ShieldCheck,
      value: "60 Days",
      label: "Greece Residency",
      position: "bottom-[28%] left-10 2xl:left-24",
      delay: 0.8,
    },
    {
      icon: TrendingUp,
      value: "+17%",
      label: "Portugal Appreciation",
      position: "top-[35%] right-4 2xl:right-12",
      delay: 1.0,
    },
  ];

  const tickerItems = [
    "DXB PRIME: +8.4% YIELD",
    "LIS RESIDENTIAL: +5.9% YIELD",
    "ATH COASTAL: +6.7% YIELD",
    "PHUKET VILLA: +6.2% YIELD",
    "BALI ECO-RESORT: +9.1% YIELD",
    "CYPRUS PR: SOVEREIGN RISK LOW",
  ];

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-transparent">

      {/* Fullscreen Cinematic Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none opacity-60 select-none"
        >
          {/* Local high-quality hero video */}
          <source
            src="/hero_video.mp4"
            type="video/mp4"
          />
        </video>
        {/* Editorial Gradients Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-[1] pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 z-[1] pointer-events-none" />
      </div>

      {/* Grid overlay */}
      <div className="story-grid absolute inset-0 z-[2] opacity-20 pointer-events-none" />

      {/* Moving Location Coordinates (Top-Left) */}
      <div className="absolute left-6 top-28 md:left-12 z-20 hidden sm:flex items-center gap-2 text-[9px] font-mono tracking-widest text-[#C5A059] uppercase select-none">
        <MapPin className="h-3 w-3 animate-pulse text-[#C5A059]" />
        <span>{coords}</span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 pt-44 md:pt-52 pb-24 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mx-auto mb-8 inline-flex items-center gap-3 border border-[#C5A059]/25 bg-black/40 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059] backdrop-blur-xl rounded-full"
        >
          <Sparkles className="h-3.5 w-3.5 animate-pulse text-[#C5A059]" />
          Sovereign Capital & Assets
        </motion.div>

        {/* Headline */}
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
            className="text-balance text-4xl font-light leading-[1.15] sm:leading-[1.1] md:leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Your Wealth Deserves <br />
            More Than <span className="text-gold-gradient font-serif italic font-normal">One Country.</span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <div className="mx-auto mt-8 max-w-3xl">
          <KineticText
            text="Build global assets, residency pathways, and generational wealth through international real estate investments."
            splitBy="word"
            className="justify-center text-base font-light leading-relaxed text-white/70 md:text-xl"
            delay={0.5}
          />
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row z-30"
        >
          <MagneticButton
            href="#explorer"
            className="border-transparent bg-white text-white shadow-[0_0_50px_rgba(197,160,89,0.25)] hover:bg-silver/90 font-bold"
          >
            Explore Global Markets
          </MagneticButton>

          <MagneticButton
            href="#contact-section"
            className="border-white/10 bg-white/[0.03] text-white/85 hover:text-white"
          >
            Book Private Consultation
          </MagneticButton>

          <MagneticButton
            href="#insights"
            className="border-[#C5A059]/30 bg-[#C5A059]/5 text-[#C5A059] hover:bg-[#C5A059]/10"
          >
            Download Global Investment Report
          </MagneticButton>
        </motion.div>
      </div>

      {/* Floating Statistics (Aligned to centered content boundary) */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] z-10 pointer-events-none hidden xl:block px-6">
        {floatingStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: stat.delay, ease: "easeOut" }}
            className={`absolute ${stat.position} glass-panel w-fit max-w-[260px] px-6 py-4 rounded-2xl flex items-center gap-4 border-gold-glow pointer-events-auto shadow-2xl hover:scale-105 transition-transform duration-300`}
          >
            <div className="p-2.5 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/20">
              <stat.icon className="h-5 w-5 text-[#C5A059]" />
            </div>
            <div className="text-left">
              <p className="text-2xl font-light text-white leading-none font-serif">{stat.value}</p>
              <p className="text-[9px] font-semibold uppercase tracking-wider text-white/50 mt-1">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Live Market Ticker (Section bottom) */}
      <div className="absolute bottom-0 left-0 w-full z-20 border-t border-white/5 bg-black/20 py-4 overflow-hidden flex whitespace-nowrap select-none pointer-events-none">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-12 text-[9px] font-mono tracking-[0.25em] text-[#C5A059] uppercase">
          {tickerItems.concat(tickerItems).map((text, i) => (
            <span key={i} className="flex items-center gap-2.5">
              <TrendingUp className="h-3.5 w-3.5 text-white/30" />
              <span>{text}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Tailored inline marquee keyframe injection */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
