"use client";

import CinematicHero from "@/components/home/CinematicHero";
import TheProblem from "@/components/home/TheProblem";
import WorldExplorer from "@/components/home/WorldExplorer";
import ResidencyMigration from "@/components/home/ResidencyMigration";
import PangaeaMethod from "@/components/home/PangaeaMethod";
import InvestorStories from "@/components/home/InvestorStories";
import MarketInsights from "@/components/home/MarketInsights";

import GlowCard from "@/components/ui/GlowCard";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    budget: "$500k - $1M",
    country: "Dubai",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    // Cinematic vertical section reveals
    const sections = ["#problem", "#explorer", "#residency", "#stories", "#insights", "#contact-section"];
    
    sections.forEach((selector) => {
      const el = document.querySelector(selector);
      if (!el) return;

      gsap.fromTo(el, 
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: "",
        email: "",
        budget: "$500k - $1M",
        country: "Dubai",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="relative w-full overflow-hidden bg-transparent">
      
      {/* Cinematic Sidebar Indicator */}
      <div className="fixed left-5 top-1/2 z-30 hidden h-52 w-px -translate-y-1/2 bg-white/10 lg:block">
        <div className="absolute left-0 top-0 w-px bg-[#C5A059] h-1/3 animate-[pulse_3s_infinite]" />
      </div>

      {/* Section 1: Cinematic Hero */}
      <CinematicHero />

      {/* Section 2: The Problem */}
      <TheProblem />

      {/* Section 3: Global Opportunities (Interactive World Experience) */}
      <WorldExplorer />

      {/* Section 4: Residency by Investment (Buy Property. Unlock Global Freedom.) */}
      <ResidencyMigration />

      {/* Section 5: The Pangaea Method (McKinsey-style consult workflow) */}
      <PangaeaMethod />

      {/* Section 6: Social Proof (Investor Stories) */}
      <InvestorStories />

      {/* Section 7: Live Market Insights */}
      <MarketInsights />

      {/* Section 8: High-Conversion CTA (Book Your Global Wealth Strategy Session) */}
      <section id="contact-section" className="relative z-10 bg-transparent px-6 py-24 md:px-12 md:py-36 border-t border-white/5 overflow-hidden">
        
        {/* Background highlight */}
        <div className="absolute top-[30%] left-[20%] w-[600px] h-[600px] bg-[#C5A059]/2.5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
        <div className="story-grid absolute inset-0 z-0 opacity-15 pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            
            {/* Left Narrative */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059] block mb-4">Advisory Consultation</span>
              <h2 className="text-balance text-4xl font-light leading-none text-white md:text-6xl mb-6">
                Book Your <br />
                <span className="text-gold-gradient font-serif italic">Global Wealth Strategy Session</span>
              </h2>
              <p className="text-sm font-light leading-relaxed text-white/50 max-w-md mb-8">
                Speak directly with our senior country partners. We formulate cross-border structures, asset vehicles, and Golden Visa legal setups under attorney NDA.
              </p>
              
              <div className="space-y-4">
                {[
                  "Response time under 24 business hours",
                  "Direct access to retained legal & tax counsel",
                  "NDAs executed before financial disclosure",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-white/70">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A059] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Consultation Form */}
            <GlowCard className="overflow-hidden shadow-2xl bg-[#07111F]/20 backdrop-blur-2xl border border-white/10">
              <div className="p-8 md:p-10">
                <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-8 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <h3 className="text-xl font-light text-white mb-2 font-serif">Strategy Intake</h3>
                      <p className="text-[8px] uppercase tracking-widest text-[#C5A059] font-bold mb-6">All information remains strictly confidential under lawyer-client privilege</p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="form-name" className="text-[9px] uppercase tracking-widest text-white/40 font-semibold">Your Name</label>
                        <input
                          id="form-name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="e.g. Alexander Sterling"
                          className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C5A059]/60 focus:bg-white/[0.04] transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="form-email" className="text-[9px] uppercase tracking-widest text-white/40 font-semibold">Email Address</label>
                        <input
                          id="form-email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="e.g. alex@sterlingwealth.com"
                          className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C5A059]/60 focus:bg-white/[0.04] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="form-budget" className="text-[9px] uppercase tracking-widest text-white/40 font-semibold">Planned Allocation</label>
                        <select
                          id="form-budget"
                          value={formState.budget}
                          onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                          className="w-full bg-[#050816] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]/60 transition-all cursor-pointer"
                        >
                          <option>$150k - $500k</option>
                          <option>$500k - $1M</option>
                          <option>$1M - $3M</option>
                          <option>$3M+</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="form-country" className="text-[9px] uppercase tracking-widest text-white/40 font-semibold">Target Jurisdiction</label>
                        <select
                          id="form-country"
                          value={formState.country}
                          onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                          className="w-full bg-[#050816] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C5A059]/60 transition-all cursor-pointer"
                        >
                          <option>Dubai</option>
                          <option>Portugal</option>
                          <option>Greece</option>
                          <option>United Kingdom</option>
                          <option>Cyprus</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-message" className="text-[9px] uppercase tracking-widest text-white/40 font-semibold">Objectives & Inquiries</label>
                      <textarea
                        id="form-message"
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="e.g. Looking to establish permanent residency in the EU with low tax exposure..."
                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C5A059]/60 focus:bg-white/[0.04] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="interactive w-full flex items-center justify-center gap-3 bg-white text-black py-4 px-6 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-white/90 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)] focus:outline-none cursor-pointer"
                    >
                      <span>Submit Request</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="h-[460px] flex flex-col items-center justify-center text-center relative z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="w-16 h-16 rounded-full border border-emerald-500 bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-light text-white mb-3">Intake Logged</h3>
                    <p className="text-sm font-light text-white/50 max-w-sm leading-relaxed">
                      Your query has been securely transmitted. A partner from the <strong className="text-white font-medium">{formState.country} Desk</strong> will review your details and connect via secure channel.
                    </p>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>
            </GlowCard>

          </div>

        </div>
      </section>

    </div>
  );
}
