"use client";

import { motion } from "framer-motion";
import KineticText from "@/components/ui/KineticText";
import GlowCard from "@/components/ui/GlowCard";
import { Compass, ShieldCheck, TrendingUp, Search, Award, HelpCircle } from "lucide-react";

export default function BrandMission() {
  const corePhilosophy = [
    {
      title: "Tool for Mobility",
      desc: "Unlock global mobility and visa-free travel through strategic sovereign real estate structures.",
      icon: Compass,
    },
    {
      title: "Source of Security",
      desc: "Hedge against local inflation and political exposure by distributing asset custody internationally.",
      icon: ShieldCheck,
    },
    {
      title: "Vehicle for Wealth",
      desc: "Establish a legacy of multi-generational currency-backed rental streams across mature global hubs.",
      icon: TrendingUp,
    },
  ];

  const investorProfiles = [
    { name: "First-Time Global Investors", desc: "Acquiring their initial cross-border asset under structural guidance." },
    { name: "Experienced International Buyers", desc: "Expanding their portfolio into high-yield emerging sectors." },
    { name: "High-Net-Worth Individuals", desc: "Securing capital residency hedges and tax jurisdiction shelters." },
    { name: "Residency-Focused Investors", desc: "Directly linking property purchases to golden visas and citizenship." },
  ];

  const focusAreas = [
    "Cross-border investments",
    "Data-driven decisions",
    "International opportunities",
    "Strategic acquisitions",
  ];

  return (
    <section id="mission" className="relative z-10 bg-transparent px-6 py-28 md:px-12 md:py-40 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        
        {/* Core Mission Layout */}
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-start mb-32">
          
          {/* Left Column: Narrative */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059] block mb-4">About Pangaea</span>
            <h2 className="text-balance text-4xl font-light leading-tight text-white md:text-6xl mb-8">
              Our <span className="text-gold-gradient font-serif italic">Mission</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80 max-w-2xl mb-6">
              Inspired by the supercontinent Pangaea that once unified the Earth, we challenge the idea that real estate should be limited by borders.
            </p>
            <p className="text-sm font-light leading-relaxed text-white/50 max-w-xl">
              We position property as a fluid capital layer. By integrating international acquisition workflows with sovereign residency programs, we make global investing as seamless as domestic deployment.
            </p>

            {/* Focus areas tags */}
            <div className="mt-10 flex flex-wrap gap-3">
              {focusAreas.map((area, index) => (
                <div key={index} className="border border-white/10 bg-white/[0.02] px-4 py-2 rounded-full text-xs font-light text-white/80 hover:border-[#C5A059]/40 hover:text-white transition-all duration-300">
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Core Philosophy Cards */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40 mb-8 border-b border-white/10 pb-4">
              Property Reimagined
            </h3>
            
            {corePhilosophy.map((philosophy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlowCard className="p-6">
                  <div className="flex gap-5 items-start">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 group-hover:border-[#C5A059]/30 group-hover:bg-[#C5A059]/5 transition-all duration-500 shrink-0">
                      <philosophy.icon className="h-5 w-5 text-white/60 group-hover:text-[#C5A059] transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white group-hover:text-[#C5A059] transition-colors mb-2">
                        {philosophy.title}
                      </h4>
                      <p className="text-xs font-light leading-relaxed text-white/50">
                        {philosophy.desc}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Audience / Platform Coverage */}
        <div className="border-t border-white/10 pt-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059] block mb-3">Client Coverage</span>
              <h3 className="text-2xl font-light text-white">Who We Advise</h3>
              <p className="text-xs font-light leading-relaxed text-white/50 mt-4 max-w-sm">
                From entry-level portfolio diversification to institutional family office migration, our structure scales with your investment horizon.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {investorProfiles.map((profile, index) => (
                <div key={index}>
                  <GlowCard className="p-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C5A059] mb-2">{profile.name}</h4>
                    <p className="text-xs font-light leading-relaxed text-white/60">{profile.desc}</p>
                  </GlowCard>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
