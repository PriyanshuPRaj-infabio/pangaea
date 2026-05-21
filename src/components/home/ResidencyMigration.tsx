"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plane, Award, Sparkles, Navigation } from "lucide-react";

interface TimelineStep {
  title: string;
  desc: string;
  duration: string;
  badge: string;
  details: string[];
}

export default function ResidencyMigration() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: TimelineStep[] = [
    {
      title: "Choose Country",
      duration: "Weeks 1 - 2",
      badge: "Market Intel",
      desc: "Identify the sovereign jurisdiction aligning with your capital structure, tax goals, and family mobility needs.",
      details: ["Tax residency assessment", "Passport strength scoring", "Minimum entry analysis"],
    },
    {
      title: "Invest",
      duration: "Weeks 3 - 8",
      badge: "Allocation",
      desc: "Deploy capital into pre-vetted, legal-grade real estate assets or investment funds complying with local golden visa laws.",
      details: ["Institutional property underwriting", "Escrow account routing", "Legal title clearance"],
    },
    {
      title: "Residency Approval",
      duration: "Months 2 - 4",
      badge: "Government Track",
      desc: "Retained local legal desks compile documentation, file applications, schedule biometrics, and secure sovereign stamp approvals.",
      details: ["Biometrics sequencing", "Immigration desk tracking", "Expedited partner processing"],
    },
    {
      title: "Family Access",
      duration: "Immediate",
      badge: "Generational Lock",
      desc: "Extend residency cards, border-free travel permits, and legal protections to spouses, children, and dependent parents.",
      details: ["Dependents filing", "Schengen mobility permits", "Domestic school/healthcare setup"],
    },
    {
      title: "Long-Term Security",
      duration: "Generational",
      badge: "Legacy Secured",
      desc: "Establish permanent global hedges. Manage annual reporting compliance, structure property rentals, and scale passport pathways.",
      details: ["Golden visa renewals", "Rent-to-income recycling", "Citizenship track monitoring"],
    },
  ];

  return (
    <section id="residency" className="relative z-10 bg-transparent px-6 py-24 md:px-12 md:py-36 border-t border-white/5 overflow-hidden">
      
      {/* Cinematic grid backdrop */}
      <div className="story-grid absolute inset-0 z-[1] opacity-15 pointer-events-none" />

      {/* Ambient background image representing travel/aviation */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-airplane-taking-off-in-the-sunset-30230-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.02] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/50 mb-6">
            <Plane className="h-3.5 w-3.5 text-[#C5A059] shrink-0" />
            Global Mobility
          </div>
          <h2 className="text-balance text-4xl font-light leading-none text-white md:text-6xl lg:text-7xl">
            Buy Property. <br className="hidden sm:block" />
            <span className="text-gold-gradient font-serif italic">Unlock Global Freedom.</span>
          </h2>
          <p className="mt-6 text-sm md:text-base font-light leading-relaxed text-white/60">
            Secure permanent sovereign status, unlock visa-free borders, and establish defensive wealth hubs for your descendants through vetted international property acquisitions.
          </p>
        </div>

        {/* Interactive Timeline & Passport Display Layout */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
          
          {/* Left Column: Timeline Steps */}
          <div className="space-y-4">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full relative flex items-start gap-6 p-6 rounded-2xl border text-left transition-all duration-500 overflow-hidden cursor-pointer ${
                    isActive
                      ? "border-[#C5A059]/60 bg-gradient-to-r from-[#C5A059]/10 via-[#07111F]/20 to-transparent backdrop-blur-md"
                      : "border-white/5 bg-[#07111F]/10 hover:border-white/20 hover:bg-white/[0.02] backdrop-blur-sm"
                  }`}
                >
                  {/* Step Marker */}
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 text-xs font-mono transition-colors ${
                    isActive ? "border-[#C5A059] bg-[#C5A059] text-black font-bold" : "border-white/10 text-white/40"
                  }`}>
                    0{idx + 1}
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-light text-white">{step.title}</h3>
                      <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">({step.duration})</span>
                      <span className={`px-2 py-0.5 rounded-full font-mono text-[8px] uppercase tracking-wider font-bold ${
                        isActive ? "bg-[#C5A059]/20 text-[#C5A059]" : "bg-white/5 text-white/40"
                      }`}>{step.badge}</span>
                    </div>
                    
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <p className="text-sm font-light leading-relaxed text-white/60">
                          {step.desc}
                        </p>
                        <div className="grid gap-2 sm:grid-cols-3 pt-2">
                          {step.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-1.5 text-[10px] text-white/80">
                              <Sparkles className="h-3 w-3 text-[#C5A059] shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Connecting slider line */}
                  {isActive && (
                    <div className="absolute left-0 bottom-0 h-1 bg-[#C5A059] w-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic CSS Passport / Document Visualizer */}
          <div className="relative aspect-[4/5] w-full max-w-[380px] mx-auto flex items-center justify-center">
            
            <AnimatePresence mode="wait">
              {activeStep === 0 && (
                <motion.div
                  key="passport-telemetry"
                  initial={{ opacity: 0, y: 30, rotate: -3 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full border border-white/10 bg-[#07111F]/20 backdrop-blur-2xl rounded-3xl p-8 border-gold-glow flex flex-col justify-between shadow-2xl"
                >
                  <div className="flex justify-between items-start border-b border-white/10 pb-4">
                    <div>
                      <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-[#C5A059]">Telemetry Module</span>
                      <h4 className="text-xl font-light text-white mt-1">Jurisdiction Matching</h4>
                    </div>
                    <Navigation className="h-5 w-5 text-[#C5A059] animate-pulse" />
                  </div>

                  <div className="space-y-6 py-6">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">Schengen Access</span>
                      <span className="text-emerald-400 font-mono">27 Nations</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">Minimum Tax Exposure</span>
                      <span className="text-[#C5A059] font-mono">0% Capital Gains</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">Citizenship Route</span>
                      <span className="text-white/80 font-mono">5 - 7 Years</span>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 text-[9px] font-mono text-white/30 uppercase text-center">
                    Select step below to slide passport documents.
                  </div>
                </motion.div>
              )}

              {activeStep >= 1 && (
                <motion.div
                  key={`passport-${activeStep}`}
                  initial={{ opacity: 0, scale: 0.9, rotate: 12 }}
                  animate={{ opacity: 1, scale: 1, rotate: activeStep % 2 === 0 ? -5 : 5 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: -12 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {/* Sovereign Passport Visual */}
                  <div className="relative w-[280px] h-[390px] rounded-2xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.9)] bg-gradient-to-br from-[#450a14] to-[#26050b] border-2 border-[#C5A059]/40 flex flex-col justify-between p-6 select-none border-gold-glow">
                    {/* Inner gold border */}
                    <div className="absolute inset-2 border border-dashed border-[#C5A059]/20 rounded-lg pointer-events-none" />
                    
                    {/* Header */}
                    <div className="text-center relative z-10 mt-4">
                      <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#C5A059] block">EUROPEAN UNION</span>
                      <span className="text-xs font-serif font-medium text-white tracking-[0.1em] block mt-1">SOVEREIGN RESIDENCY</span>
                    </div>

                    {/* Passport Crest Visual */}
                    <div className="flex justify-center items-center py-8 relative z-10">
                      <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#C5A059]/30 flex items-center justify-center">
                        <Award className="h-12 w-12 text-[#C5A059] animate-pulse" />
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center relative z-10 mb-4">
                      <span className="text-lg font-serif italic text-white tracking-widest block font-light">PASSPORT</span>
                      <span className="text-[8px] font-mono text-[#C5A059]/80 block tracking-widest mt-1">GOLDEN RESIDENCY DEED</span>
                    </div>

                    {/* Stamp overlay */}
                    <div className="absolute top-[60%] left-6 -rotate-12 px-3 py-1 border border-emerald-500/30 text-emerald-400 bg-emerald-950/20 text-[7px] font-mono tracking-widest rounded-md">
                      VISA APPROVED
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>

        </div>

      </div>
    </section>
  );
}
