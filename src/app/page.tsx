"use client";

import HeroGlobe from "@/components/3d/HeroGlobe";
import KineticText from "@/components/ui/KineticText";
import MagneticButton from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";
import { MoveRight, Globe2, Network, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <HeroGlobe />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="font-cursive text-5xl md:text-8xl tracking-wider text-white drop-shadow-2xl">
              PANGAEA
            </h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto overflow-hidden pb-4">
            <KineticText 
              text="Integrating Global Residential Markets" 
              className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 justify-center"
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light mb-12"
          >
            Luxury global real estate intelligence and borderless investment platform.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <MagneticButton href="/services#advisory">
              Explore Advisory Tool
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="relative w-full py-32 px-6 md:px-12 bg-[#050505] z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <KineticText text="What We Do" className="text-sm uppercase tracking-widest text-white/50 font-bold mb-4" />
            <div className="w-full h-[1px] bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Discover", icon: Globe2 },
              { title: "Global Markets", icon: MoveRight },
              { title: "Verified Network", icon: ShieldCheck },
              { title: "Seamless", icon: Zap },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative h-[300px] border border-white/5 bg-white/[0.02] p-8 flex flex-col justify-between overflow-hidden rounded-2xl backdrop-blur-sm"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <item.icon className="w-8 h-8 text-white/30 group-hover:text-white transition-colors duration-500" />
                <h3 className="text-2xl font-light text-white relative z-10 group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Tool / Matches Section */}
      <section id="advisory" className="relative w-full py-32 px-6 md:px-12 bg-[#0a0a0a] z-10 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-cursive text-4xl md:text-6xl text-white mb-6">See your matches instantly</h2>
              <p className="text-white/50 text-lg font-light">Experience our advisory tool matching your unique profile to global real estate opportunities.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative perspective-[2000px]">
            {/* Card 1 */}
            <motion.div 
              className="relative group rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-12"
              whileHover={{ rotateX: 2, rotateY: -2, z: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute top-8 right-8 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-[10px] uppercase tracking-widest text-white">
                Residency Focus
              </div>
              <h3 className="text-3xl font-light mb-8 pt-4">Conservative EU Residency Family</h3>
              <ul className="space-y-4 mb-12 text-white/60 font-light">
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/30" />Budget &lt; $15 Crore</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/30" />Portugal &amp; Greece</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/30" />Golden Visa mandatory</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/30" />Family with children</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/30" />Conservative risk appetite</li>
              </ul>
              <div className="flex items-center gap-3 text-white cursor-pointer group-hover:gap-5 transition-all duration-300">
                <span className="uppercase tracking-widest text-xs font-bold">View Matches</span>
                <MoveRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="relative group rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-12 md:translate-y-12"
              whileHover={{ rotateX: 2, rotateY: 2, z: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute top-8 right-8 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-[10px] uppercase tracking-widest text-white">
                Yield Focus
              </div>
              <h3 className="text-3xl font-light mb-8 pt-4">Aggressive Thailand Yield Hunter</h3>
              <ul className="space-y-4 mb-12 text-white/60 font-light">
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/30" />Budget &lt; $15 Crore</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/30" />Thailand focus</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/30" />Pure yield &amp; cash flow</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/30" />Opportunistic risk</li>
                <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/30" />Immediate timeline</li>
              </ul>
              <div className="flex items-center gap-3 text-white cursor-pointer group-hover:gap-5 transition-all duration-300">
                <span className="uppercase tracking-widest text-xs font-bold">View Matches</span>
                <MoveRight className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-48 px-6 md:px-12 bg-black flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-60" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <KineticText 
            text="Ready to invest across borders?" 
            className="text-5xl md:text-8xl font-light tracking-tighter text-white mb-12 justify-center"
          />
          <MagneticButton href="/services#advisory">
            Explore Advisory Tool
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
