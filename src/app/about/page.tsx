"use client";

import { motion } from "framer-motion";
import KineticText from "@/components/ui/KineticText";

export default function About() {
  return (
    <div className="w-full flex flex-col pt-40 min-h-screen bg-[#020202] text-white overflow-hidden">
      
      {/* Our Mission */}
      <section className="px-6 md:px-12 py-32 max-w-6xl mx-auto text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        <KineticText text="Our Mission" splitBy="char" className="font-cursive text-7xl md:text-[10rem] mb-24 glow-text justify-center" />
        
        <div className="space-y-12 text-xl md:text-3xl font-light text-white/70 leading-relaxed text-left md:text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            Inspired by the supercontinent Pangaea that once unified the Earth, we challenge the notion that real estate must be limited by borders.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }}>
            As cross-border mobility expands and global wealth redistributes, the need for seamless, intelligent international property investment has never been greater.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: true }} className="text-white">
            Pangaea Realty offers the guidance, infrastructure, and intelligence to act decisively and strategically.
          </motion.p>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="relative px-6 md:px-12 py-40 bg-black border-y border-white/5">
        <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <KineticText text="Core Values" splitBy="char" className="font-cursive text-6xl md:text-8xl mb-32 text-center" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 text-white/60 font-light text-xl md:text-2xl">
            {[
              { title: "Global accessibility", desc: "Real estate should be borderless, allowing anyone to invest with confidence." },
              { title: "Trust and transparency", desc: "At the heart of everything we do, from due diligence to client communication." },
              { title: "Innovation", desc: "Streamlining the real estate experience, making it faster, simpler, and smarter." },
              { title: "Minimalist approach", desc: "Ensuring every detail is refined, every interaction purposeful." },
              { title: "Investor mindset", desc: "Crafting offerings that align with long-term goals across continents." },
              { title: "Sustainability", desc: "Choosing partners, properties, and practices that build enduring value." },
            ].map((value, i) => (
              <motion.div 
                key={i}
                className="space-y-6 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
                  <strong className="text-white font-normal uppercase tracking-widest text-sm">{value.title}</strong>
                </div>
                <p className="pl-12 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="px-6 md:px-12 py-40 max-w-7xl mx-auto w-full">
        <KineticText text="Meet the Team" splitBy="char" className="font-cursive text-6xl md:text-8xl mb-32 text-center" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 perspective-[2000px]">
          {[
            { name: "Ridhima Sabharwal", role: "CEO & Founder" },
            { name: "Rohan Kukreja", role: "CTO" }
          ].map((member, i) => (
            <motion.div
              key={i}
              className="group relative"
              whileHover={{ rotateY: i === 0 ? 5 : -5, rotateX: 2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Cinematic Portrait Card */}
              <div className="w-full aspect-[3/4] relative bg-white/[0.02] overflow-hidden rounded-2xl border border-white/5 filter grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,_50%)_var(--mouse-y,_50%),_rgba(255,255,255,0.15)_0%,_transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none mix-blend-overlay" />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 font-light tracking-[0.5em] uppercase text-xs rotate-90 whitespace-nowrap">
                  Cinematic Portrait
                </div>
              </div>
              
              <div className="absolute bottom-12 left-12 z-30" style={{ transform: "translateZ(50px)" }}>
                <h3 className="text-4xl font-light mb-3 text-white drop-shadow-lg">{member.name}</h3>
                <p className="text-white/70 uppercase tracking-[0.3em] text-xs font-bold drop-shadow-md">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
