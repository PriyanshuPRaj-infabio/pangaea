"use client";

import { useRef, useEffect } from "react";
import KineticText from "@/components/ui/KineticText";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Network, Activity, Globe, Compass } from "lucide-react";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate pinned sections if needed
    // In a full implementation, we'd add horizontal scroll or more complex GSAP logic here
  }, []);

  return (
    <div className="w-full flex flex-col pt-32 min-h-screen bg-[#050505]" ref={containerRef}>
      
      {/* Intro */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-5xl">
        <KineticText 
          text="Seamless global home investment from discovery to ownership with trusted experts and intelligent market insights."
          className="text-3xl md:text-5xl font-light text-white leading-tight"
        />
      </section>

      {/* Section 1: Explore */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Compass className="w-6 h-6 text-white/50" />
            <span className="uppercase tracking-widest text-xs font-bold text-white/50">Explore</span>
          </div>
          <h2 className="font-cursive text-5xl md:text-7xl text-white mb-12">Global Opportunities</h2>
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
            Navigate the global landscape of residential real estate with a discerning eye—uncover markets distinguished by robust rental yields, long-term capital appreciation, and strategic livability. We aim to enable a sophisticated discovery of destination-specific advantages—including access to residency and citizenship programs, entry to global residential markets, evolving lifestyle hubs, and investment corridors—curated to align with your personal, financial, and mobility goals.
          </p>
        </div>
      </section>

      {/* Section 2: Analyze */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 border-t border-white/10 bg-[#0a0a0a]">
        <div className="max-w-4xl relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Activity className="w-6 h-6 text-white/50" />
            <span className="uppercase tracking-widest text-xs font-bold text-white/50">Analyze</span>
          </div>
          <h2 className="font-cursive text-5xl md:text-7xl text-white mb-12">Global Markets with Precision</h2>
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
            Make informed investment decisions with real-time data, localized insights, and strategic analysis tailored for international buyers. At Pangaea Realty, we empower you to evaluate markets and properties in alignment with your specific financial objectives and mobility goals. Our intelligence platform offers deep dives into both emerging and established markets, assessing factors such as rental yields, capital growth trajectories, political stability, tax regimes, and visa-linked incentives. Drawing from proprietary research and expert commentary, we provide the analytical tools to dissect legal frameworks, forecast returns, and navigate global real estate with clarity, confidence, and precision.
          </p>
        </div>
        
        {/* Abstract UI Element representing dashboard */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[500px] hidden lg:flex flex-col gap-4 opacity-30 perspective-[1000px] pointer-events-none pr-12">
          <motion.div 
            className="w-full h-32 border border-white/20 rounded-xl bg-white/5 backdrop-blur-md"
            animate={{ rotateX: [0, 5, 0], y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.div 
            className="w-3/4 h-48 border border-white/20 rounded-xl bg-white/5 backdrop-blur-md ml-auto"
            animate={{ rotateX: [0, -5, 0], y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="w-full h-32 border border-white/20 rounded-xl bg-white/5 backdrop-blur-md"
            animate={{ rotateX: [0, 5, 0], y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
          />
        </div>
      </section>

      {/* Section 3: Connect */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 border-t border-white/10 bg-[#050505]">
        <div className="max-w-4xl relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Network className="w-6 h-6 text-white/50" />
            <span className="uppercase tracking-widest text-xs font-bold text-white/50">Connect</span>
          </div>
          <h2 className="font-cursive text-5xl md:text-7xl text-white mb-12">With a Verified Global Network</h2>
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
            At Pangaea Realty, we believe that relationships drive results. That’s why we connect you with a trusted global network of real estate developers, brokers, legal experts, immigration advisors, and property managers—each vetted for credibility, local fluency, and professional integrity. Whether you're navigating a purchase in Portugal, structuring co-ownership in Thailand, or exploring visa-linked investments in the UAE, our partners provide on-ground precision and seamless execution. Engage with multilingual professionals who understand the complexities of international transactions and deliver end-to-end support—from due diligence and compliance to negotiation and closure. Wherever you're investing, we help you build the right relationships to move with speed, confidence, and clarity.
          </p>
        </div>
      </section>

      {/* Section 4: Invest */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-32 border-t border-white/10 bg-black text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-black to-black opacity-40 pointer-events-none" />
        <div className="max-w-5xl relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Globe className="w-6 h-6 text-white/50" />
            <span className="uppercase tracking-widest text-xs font-bold text-white/50">Invest</span>
          </div>
          <h2 className="font-cursive text-6xl md:text-8xl text-white mb-12">Beyond Borders</h2>
          <p className="text-lg md:text-2xl text-white/70 font-light leading-relaxed max-w-4xl mx-auto mb-16">
            Transcend geographic constraints and build a globally diversified real estate portfolio that aligns with your financial ambitions and lifestyle aspirations. At Pangaea Realty, we empower you to invest across borders with strategic intent—whether acquiring income-generating assets, securing long-term appreciation, or unlocking residency and citizenship pathways. Our platform demystifies cross-border investment by streamlining legal, regulatory, and logistical complexities, allowing you to confidently allocate capital in markets that support both wealth creation and global mobility. 
          </p>
          <div className="text-xl md:text-3xl text-white font-medium uppercase tracking-widest">
            Invest borderless, live globally—own the freedom to choose where you live, grow, and thrive.
          </div>
        </div>
      </section>

    </div>
  );
}
