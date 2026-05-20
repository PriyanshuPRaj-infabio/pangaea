"use client";

import KineticText from "@/components/ui/KineticText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Network, Activity, Globe, Compass } from "lucide-react";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div className="w-full flex flex-col pt-32 min-h-screen bg-[#020202] overflow-hidden" ref={containerRef}>
      
      {/* Intro */}
      <section className="relative px-6 md:px-12 py-32 md:py-48 max-w-6xl mx-auto min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none" />
        <KineticText 
          text="Seamless global home investment from discovery to ownership with trusted experts and intelligent market insights."
          splitBy="word"
          className="text-4xl md:text-7xl font-light text-white leading-[1.1]"
        />
      </section>

      {/* Section 1: Explore */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-32 border-t border-white/5">
        <div className="absolute top-0 right-0 w-full h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2 mix-blend-screen" />
        
        <div className="max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <Compass className="w-8 h-8 text-white/40" />
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-white/40">Explore</span>
          </motion.div>
          
          <KineticText text="Global Opportunities" splitBy="char" className="font-cursive text-6xl md:text-8xl text-white mb-16 drop-shadow-2xl" />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl text-white/60 font-light leading-relaxed max-w-4xl"
          >
            Navigate the global landscape of residential real estate with a discerning eye—uncover markets distinguished by robust rental yields, long-term capital appreciation, and strategic livability.
          </motion.p>
        </div>
      </section>

      {/* Section 2: Analyze */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-32 border-t border-white/5 bg-[#050505]">
        <div className="max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <Activity className="w-8 h-8 text-white/40" />
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-white/40">Analyze</span>
          </motion.div>
          
          <KineticText text="Global Markets with Precision" splitBy="char" className="font-cursive text-6xl md:text-8xl text-white mb-16 drop-shadow-2xl" />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl text-white/60 font-light leading-relaxed max-w-4xl"
          >
            Make informed investment decisions with real-time data, localized insights, and strategic analysis tailored for international buyers.
          </motion.p>
        </div>
        
        {/* Cinematic Dashboard UI Abstraction */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[700px] hidden lg:flex flex-col gap-6 opacity-40 perspective-[2000px] pointer-events-none pr-12">
          <motion.div 
            className="w-full h-40 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-3xl shadow-[0_0_50px_rgba(255,255,255,0.05)]"
            animate={{ rotateX: [10, 15, 10], rotateY: [-20, -25, -20], z: [0, 50, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          />
          <motion.div 
            className="w-3/4 h-64 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-3xl ml-auto shadow-[0_0_50px_rgba(255,255,255,0.05)]"
            animate={{ rotateX: [15, 20, 15], rotateY: [-25, -30, -25], z: [50, 100, 50] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            style={{ transformStyle: "preserve-3d" }}
          />
        </div>
      </section>

      {/* Section 3: Connect */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-32 border-t border-white/5">
        <div className="absolute top-1/2 left-0 w-full h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 mix-blend-screen" />
        <div className="max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <Network className="w-8 h-8 text-white/40" />
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-white/40">Connect</span>
          </motion.div>
          
          <KineticText text="Verified Global Network" splitBy="char" className="font-cursive text-6xl md:text-8xl text-white mb-16 drop-shadow-2xl" />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl text-white/60 font-light leading-relaxed max-w-4xl"
          >
            Engage with multilingual professionals who understand the complexities of international transactions and deliver end-to-end support—from due diligence to closure.
          </motion.p>
        </div>
      </section>

      {/* Section 4: Invest */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-40 border-t border-white/5 bg-black text-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30 mix-blend-screen pointer-events-none" />
        
        <div className="max-w-6xl relative z-10 flex flex-col items-center">
          <Globe className="w-12 h-12 text-white/20 mb-12" />
          
          <KineticText text="Beyond Borders" splitBy="char" className="font-cursive text-7xl md:text-[10rem] text-white mb-16 glow-text" />
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl text-white/70 font-light leading-relaxed max-w-5xl mx-auto mb-20"
          >
            Invest borderless, live globally—own the freedom to choose where you live, grow, and thrive.
          </motion.p>
        </div>
      </section>

    </div>
  );
}
