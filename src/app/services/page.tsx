"use client";

import { motion } from "framer-motion";
import KineticText from "@/components/ui/KineticText";
import GlowCard from "@/components/ui/GlowCard";
import { Compass, Activity, Network, Globe, MapPin, Landmark, Award } from "lucide-react";

export default function Services() {
  const serviceCards = [
    {
      step: "01",
      icon: Compass,
      category: "Discovery",
      title: "Global Property Sourcing",
      desc: "Comprehensive filtering of international developments matching golden visa minimum thresholds and high-yield real estate benchmarks.",
      bullets: ["Pre-vetted legal status", "Direct developer pricing", "Multi-country comparisons"],
    },
    {
      step: "02",
      icon: Activity,
      category: "Intelligence",
      title: "Yield & Growth Analytics",
      desc: "Localized market index modeling, historical ROI progression tracks, and currency hedging advisory for cross-border capital safety.",
      bullets: ["Real-time rent yields", "Capital gains forecasting", "Tax structure planning"],
    },
    {
      step: "03",
      icon: Network,
      category: "Fulfillment",
      title: "Sovereign Path Counsel",
      desc: "End-to-end legal and administrative sequencing to tie property transactions directly with international citizenship or residency goals.",
      bullets: ["Expedited biometrics tracks", "Power of Attorney drafting", "Compliant bank onboarding"],
    },
  ];

  return (
    <div className="w-full flex flex-col pt-44 min-h-screen bg-transparent text-white overflow-hidden relative z-10">
      
      {/* Decorative Aura */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[180px] pointer-events-none mix-blend-screen -translate-y-1/3 translate-x-1/3" />

      {/* Main Intro */}
      <section className="px-6 md:px-12 py-20 max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.02] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059] rounded-full mb-8"
        >
          <Award className="h-4.5 w-4.5 animate-pulse" />
          Our Scope of Expertise
        </motion.div>

        <h1 className="text-balance text-4xl font-light leading-tight text-white md:text-7xl mb-12">
          Precision Advisory, <span className="text-gold-gradient font-serif italic">Seamless Ownership</span>
        </h1>

        <div className="mx-auto max-w-3xl">
          <KineticText 
            text="Comprehensive global property acquisition and residency pathways engineered for the modern international investor."
            splitBy="word"
            className="justify-center text-lg md:text-2xl font-light leading-relaxed text-white/60"
            delay={0.3}
          />
        </div>
      </section>

      {/* Main Service Pillars */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <GlowCard className="p-10 flex flex-col justify-between h-full group">
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="p-3 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-xl">
                      <service.icon className="h-6 w-6 text-[#C5A059]" />
                    </div>
                    <span className="text-xs font-mono text-white/20 font-bold">{service.step}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">{service.category}</span>
                    <h3 className="text-2xl font-light text-white mt-2 mb-4 group-hover:text-[#C5A059] transition-colors">{service.title}</h3>
                    <p className="text-sm font-light leading-relaxed text-white/50">{service.desc}</p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 space-y-3">
                  {service.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#C5A059]/60" />
                      <span className="text-xs font-light text-white/60">{bullet}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Secondary Features Grid */}
      <section className="relative px-6 md:px-12 py-32 border-t border-white/5 bg-[#050507]/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-light text-white md:text-5xl">
              Strategic <span className="text-gold-gradient font-serif italic">Operational Desks</span>
            </h2>
            <p className="mt-4 text-sm font-light text-white/40 uppercase tracking-widest">Ensuring legal parity and transaction security</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlowCard className="p-8">
                <div className="flex gap-6">
                  <div className="p-3 bg-white/[0.02] border border-white/10 rounded-xl h-fit">
                    <Landmark className="h-6 w-6 text-[#C5A059]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">Legal & Escrow Compliance</h3>
                    <p className="text-sm font-light leading-relaxed text-white/50">
                      Structuring verified escrow sequences and validating sovereign deed compliance across multiple international jurisdictions.
                    </p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlowCard className="p-8">
                <div className="flex gap-6">
                  <div className="p-3 bg-white/[0.02] border border-white/10 rounded-xl h-fit">
                    <MapPin className="h-6 w-6 text-[#C5A059]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-2">Local Project Representation</h3>
                    <p className="text-sm font-light leading-relaxed text-white/50">
                      Direct physical oversight and localized advisory representation for real estate transactions, biometrics, and tax filings.
                    </p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global CTA Banner */}
      <section className="relative px-6 md:px-12 py-32 bg-transparent text-center overflow-hidden">
        <div className="absolute inset-0 bg-[#C5A059]/[0.02] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <Globe className="h-10 w-10 text-[#C5A059] mb-8 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
            Ready to Begin Your <span className="text-gold-gradient font-serif italic">Global Chapter</span>?
          </h2>
          <p className="text-base font-light text-white/50 leading-relaxed mb-10 max-w-xl">
            Leverage our cross-border models and trusted advisory network to secure assets and pathways worldwide.
          </p>
          <a
            href="/contact"
            className="px-8 py-3.5 bg-white text-black font-semibold text-sm rounded-full tracking-wider hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Connect with a Partner
          </a>
        </div>
      </section>

    </div>
  );
}
