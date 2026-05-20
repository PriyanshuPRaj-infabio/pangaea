"use client";

import { useRef, useEffect } from "react";
import HeroGlobe from "@/components/3d/HeroGlobe";
import KineticText from "@/components/ui/KineticText";
import MagneticButton from "@/components/ui/MagneticButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight, Globe2, ShieldCheck, Zap, Compass } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Handle card mouse move for spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="w-full flex flex-col" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
        {/* Glow ambient background with gold tint */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[180px] pointer-events-none mix-blend-screen z-0" />
        
        <HeroGlobe />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-16 w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", scale: 1.1 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="mb-6 md:mb-12 relative"
          >
            <div className="absolute inset-0 bg-[#C5A059]/10 opacity-30 blur-[120px] rounded-full pointer-events-none" />
            <h2 className="font-cursive text-7xl md:text-[12rem] leading-none tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-[#C5A059]/80 drop-shadow-[0_0_50px_rgba(197,160,89,0.35)] mix-blend-screen relative z-10">
              PANGAEA
            </h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto overflow-hidden pb-4">
            <KineticText 
              text="Integrating Global Residential Markets" 
              splitBy="char"
              className="text-3xl md:text-5xl font-light tracking-tight text-white/90 mb-8 justify-center"
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light mb-16"
          >
            Luxury global real estate intelligence and <span className="text-[#C5A059] font-normal">borderless investment</span> platform.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "backOut" }}
          >
            <MagneticButton href="/services#advisory" className="bg-white text-black hover:bg-white/90 border-transparent shadow-[0_0_40px_rgba(197,160,89,0.25)] hover:shadow-[0_0_50px_rgba(197,160,89,0.4)] transition-shadow duration-500">
              Explore Advisory Tool
            </MagneticButton>
          </motion.div>
        </div>

        {/* Cinematic Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A059]">Scroll to discover</span>
          <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden">
            <motion.div
              className="w-full h-1/2 bg-[#C5A059] absolute top-0"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "circInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="relative w-full py-40 px-6 md:px-12 bg-[#050505] z-10 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/25 to-transparent" />
        
        {/* Subtle accent glow */}
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[#C5A059]/2 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="mb-32 flex justify-between items-end">
            <div>
              <KineticText text="What We Do" className="text-sm uppercase tracking-widest text-[#C5A059] font-bold mb-6" />
              <KineticText text="Elevating Global" splitBy="char" className="font-cursive text-5xl md:text-7xl text-white" />
              <KineticText text="Real Estate" splitBy="char" delay={0.2} className="font-cursive text-5xl md:text-7xl text-[#C5A059]/80" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Discover", desc: "Curated markets with strategic livability.", icon: Globe2, num: "01" },
              { title: "Global Markets", desc: "Precision data on yields & growth.", icon: Compass, num: "02" },
              { title: "Verified Network", desc: "Trusted experts globally.", icon: ShieldCheck, num: "03" },
              { title: "Seamless", desc: "End-to-end execution & advisory.", icon: Zap, num: "04" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative h-[400px] rounded-3xl p-8 flex flex-col justify-between overflow-hidden border border-white/5 bg-white/[0.01] backdrop-blur-3xl transition-all duration-700 hover:border-[#C5A059]/30 hover:bg-[#C5A059]/5"
                whileHover={{ rotateY: i % 2 === 0 ? 4 : -4, rotateX: 4, y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
              >
                {/* Holographic Border & Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,_50%)_var(--mouse-y,_50%),_rgba(197,160,89,0.15)_0%,_transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Visual Accent Top Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#C5A059]/60 transition-all duration-700" />
                
                {/* Large Background Editorial Number */}
                <div className="absolute top-6 right-8 font-cursive text-8xl text-white/[0.02] group-hover:text-[#C5A059]/10 select-none transition-colors duration-700 pointer-events-none">
                  {item.num}
                </div>

                <item.icon className="w-10 h-10 text-white/30 group-hover:text-[#C5A059] transition-all duration-500 relative z-10" />
                
                <div className="relative z-10 flex flex-col" style={{ transform: "translateZ(30px)" }}>
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                    {item.desc}
                  </p>
                  
                  {/* Sliding learn more micro-interaction */}
                  <div className="flex items-center gap-3 mt-8 opacity-40 group-hover:opacity-100 group-hover:text-[#C5A059] transition-all duration-500">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Discover</span>
                    <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Tool / Matches Section */}
      <section id="advisory" className="relative w-full py-40 px-6 md:px-12 bg-[#0a0a0a] z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-screen-xl opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[150px] mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-32 max-w-3xl">
            <KineticText text="Advisory Tool" className="text-sm uppercase tracking-widest text-[#C5A059] font-bold mb-6" />
            <h2 className="font-cursive text-5xl md:text-8xl text-white mb-8">See your matches instantly</h2>
            <p className="text-white/60 text-xl font-light leading-relaxed">
              Experience our AI-powered advisory tool matching your unique profile to global real estate opportunities with unparalleled precision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative perspective-[2000px]">
            {/* Card 1 */}
            <motion.div 
              className="relative group rounded-[2.5rem] border border-white/10 bg-black/60 backdrop-blur-2xl p-10 md:p-14 overflow-hidden hover:border-[#C5A059]/30 transition-all duration-700"
              whileHover={{ rotateX: 2, rotateY: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,_50%)_var(--mouse-y,_50%),_rgba(197,160,89,0.1)_0%,_transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 text-[10px] uppercase tracking-widest text-[#C5A059] mb-10 backdrop-blur-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
                  Residency Focus
                </div>
                
                <h3 className="text-4xl font-light mb-10 leading-tight">Conservative EU<br/>Residency Family</h3>
                
                <ul className="space-y-5 mb-14 text-white/60 font-light text-lg">
                  <li className="flex items-center gap-5"><div className="w-8 h-px bg-white/20 group-hover:bg-[#C5A059]/60 transition-colors" />Budget &lt; $15 Crore</li>
                  <li className="flex items-center gap-5"><div className="w-8 h-px bg-white/20 group-hover:bg-[#C5A059]/60 transition-colors" />Portugal &amp; Greece</li>
                  <li className="flex items-center gap-5"><div className="w-8 h-px bg-white/20 group-hover:bg-[#C5A059]/60 transition-colors" />Golden Visa mandatory</li>
                  <li className="flex items-center gap-5"><div className="w-8 h-px bg-white/20 group-hover:bg-[#C5A059]/60 transition-colors" />Family with children</li>
                  <li className="flex items-center gap-5"><div className="w-8 h-px bg-white/20 group-hover:bg-[#C5A059]/60 transition-colors" />Conservative risk appetite</li>
                </ul>
                
                <div className="flex items-center gap-4 text-white cursor-pointer group-hover:gap-6 transition-all duration-300 border-t border-white/10 pt-8 mt-8">
                  <span className="uppercase tracking-[0.2em] text-xs font-bold group-hover:text-[#C5A059] transition-colors">View Matches</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-300">
                    <MoveRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="relative group rounded-[2.5rem] border border-white/10 bg-black/60 backdrop-blur-2xl p-10 md:p-14 overflow-hidden lg:mt-32 hover:border-[#C5A059]/30 transition-all duration-700"
              whileHover={{ rotateX: 2, rotateY: 3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,_50%)_var(--mouse-y,_50%),_rgba(197,160,89,0.1)_0%,_transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 text-[10px] uppercase tracking-widest text-[#C5A059] mb-10 backdrop-blur-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
                  Yield Focus
                </div>
                
                <h3 className="text-4xl font-light mb-10 leading-tight">Aggressive Thailand<br/>Yield Hunter</h3>
                
                <ul className="space-y-5 mb-14 text-white/60 font-light text-lg">
                  <li className="flex items-center gap-5"><div className="w-8 h-px bg-white/20 group-hover:bg-[#C5A059]/60 transition-colors" />Budget &lt; $15 Crore</li>
                  <li className="flex items-center gap-5"><div className="w-8 h-px bg-white/20 group-hover:bg-[#C5A059]/60 transition-colors" />Thailand focus</li>
                  <li className="flex items-center gap-5"><div className="w-8 h-px bg-white/20 group-hover:bg-[#C5A059]/60 transition-colors" />Pure yield &amp; cash flow</li>
                  <li className="flex items-center gap-5"><div className="w-8 h-px bg-white/20 group-hover:bg-[#C5A059]/60 transition-colors" />Opportunistic risk</li>
                  <li className="flex items-center gap-5"><div className="w-8 h-px bg-white/20 group-hover:bg-[#C5A059]/60 transition-colors" />Immediate timeline</li>
                </ul>
                
                <div className="flex items-center gap-4 text-white cursor-pointer group-hover:gap-6 transition-all duration-300 border-t border-white/10 pt-8 mt-8">
                  <span className="uppercase tracking-[0.2em] text-xs font-bold group-hover:text-[#C5A059] transition-colors">View Matches</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-300">
                    <MoveRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full min-h-screen py-40 px-6 md:px-12 bg-black flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Dynamic mesh gradient background */}
        <div className="absolute inset-0 mesh-gradient opacity-40 mix-blend-screen" />
        
        {/* Volumetric glow with gold tint */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#C5A059]/10 rounded-full blur-[150px] pointer-events-none" />
        
        <motion.div style={{ y: yParallax }} className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
          <KineticText 
            text="Ready to invest" 
            splitBy="char"
            className="text-6xl md:text-[8rem] font-light tracking-tighter text-white/90 leading-none justify-center mb-2"
          />
          <KineticText 
            text="across borders?" 
            splitBy="char"
            delay={0.2}
            className="text-6xl md:text-[8rem] font-cursive tracking-tighter text-[#C5A059] leading-none justify-center mb-16 glow-text"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <MagneticButton href="/services#advisory" className="bg-[#C5A059] text-black hover:bg-[#C5A059]/90 border-transparent shadow-[0_0_50px_rgba(197,160,89,0.3)] px-10 py-5 text-sm">
              Explore Advisory Tool
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
