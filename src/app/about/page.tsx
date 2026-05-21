"use client";

import { motion } from "framer-motion";
import KineticText from "@/components/ui/KineticText";
import GlowCard from "@/components/ui/GlowCard";
import { Users2, Target, Heart } from "lucide-react";

export default function About() {
  const values = [
    { title: "Global Accessibility", desc: "Real estate should be borderless, allowing sovereign investment structures to be executed with institutional confidence." },
    { title: "Sovereign Compliance", desc: "At the core of every residency and migration pathway is absolute regulatory compliance and transparency." },
    { title: "Market Intelligence", desc: "We utilize real-time global yield indices and growth models, discarding speculative assumptions." },
    { title: "Bespoke Curation", desc: "We filter thousands of international projects to present only pre-audited high-yielding assets." },
    { title: "Borderless Mindset", desc: "Structuring diversified portfolios across jurisdictions to hedge risk and secure generational wealth." },
    { title: "Enduring Alignment", desc: "Connecting clients directly with retained developers and top-tier legal counsel worldwide." },
  ];

  const team = [
    { name: "Ridhima Sabharwal", role: "CEO & Founder", bio: "Ex-Private Wealth Advisor specializing in cross-border real estate acquisitions and golden visa frameworks." },
    { name: "Rohan Kukreja", role: "CTO", bio: "Systems architect implementing predictive analytics for real estate yield indexes and digital advisory channels." }
  ];

  return (
    <div className="w-full flex flex-col pt-44 min-h-screen bg-transparent text-white overflow-hidden relative z-10">
      
      {/* Decorative Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />

      {/* Header / Intro */}
      <section className="px-6 md:px-12 py-20 max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.02] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059] rounded-full mb-8"
        >
          <Target className="h-4.5 w-4.5 animate-pulse" />
          The Pangaea Mission
        </motion.div>
        
        <h1 className="text-balance text-4xl font-light leading-tight text-white md:text-7xl mb-12">
          Unified Markets, <span className="text-gold-gradient font-serif italic">Borderless Assets</span>
        </h1>

        <div className="space-y-8 text-lg md:text-2xl font-light text-white/60 leading-relaxed text-center relative z-10 max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            Inspired by the supercontinent Pangaea that once unified the Earth, we challenge the notion that high-end real estate must be limited by geographical borders.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }}>
            As cross-border mobility expands, real estate is no longer just shelter—it is a tool for security, mobility, and generational wealth generation.
          </motion.p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative px-6 md:px-12 py-32 border-y border-white/5 bg-[#050507]/40 backdrop-blur-md">
        <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="mb-24 text-center">
            <h2 className="text-4xl font-light text-white md:text-5xl">
              Our Core <span className="text-gold-gradient font-serif italic">Philosophy</span>
            </h2>
            <p className="mt-4 text-sm font-light text-white/40 uppercase tracking-widest">Guiding values for cross-border excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <GlowCard className="p-8 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                      <h3 className="text-lg font-light text-white tracking-wide">{val.title}</h3>
                    </div>
                    <p className="text-sm font-light leading-relaxed text-white/50">{val.desc}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Advisory Panel */}
      <section className="px-6 md:px-12 py-32 max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <Users2 className="h-5 w-5 text-[#C5A059]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Leadership Desk</span>
          </div>
          <h2 className="text-4xl font-light text-white md:text-5xl">
            Lead <span className="text-gold-gradient font-serif italic">Advisory Partners</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <GlowCard className="p-10 flex flex-col justify-between h-full">
                <div className="space-y-6">
                  {/* Portrait Placeholder with luxury vibe */}
                  <div className="w-full aspect-[16/10] bg-white/[0.02] border border-white/5 rounded-2xl relative overflow-hidden flex items-center justify-center border-gold-glow">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030405] via-transparent to-transparent z-10" />
                    <div className="absolute text-[10px] font-mono text-white/10 uppercase tracking-[0.4em] select-none">
                      Pangaea Board Member
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif text-white tracking-wide">{member.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold mt-1">{member.role}</p>
                  </div>
                  
                  <p className="text-sm font-light leading-relaxed text-white/50">{member.bio}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
