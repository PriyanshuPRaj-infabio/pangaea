"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users2, ArrowUpRight, ShieldCheck, Milestone } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

interface CaseStudy {
  tag: string;
  title: string;
  investorType: string;
  objective: string;
  action: string;
  result: string;
  metrics: {
    allocation: string;
    yield: string;
    appreciation: string;
    visaTimeline: string;
  };
  timeline: {
    step1: string;
    step2: string;
    step3: string;
  };
}

export default function InvestorStories() {
  const [activeIdx, setActiveIdx] = useState(0);

  const stories: CaseStudy[] = [
    {
      tag: "Dubai Golden Visa",
      title: "From Mumbai to Dubai",
      investorType: "Automotive Industrialist",
      objective: "Hedge domestic inflation, secure stable currency-backed cashflow, and establish a secondary regional headquarters.",
      action: "Acquired two premium branded residences in Downtown Dubai totaling AED 4,600,000 (~$1.25M) via direct advisory allocation.",
      result: "Secured tax-free rental returns paid in USD-pegged AED, coupled with direct eligibility and approval for the 10-Year Dubai Golden Visa.",
      metrics: {
        allocation: "$1,250,000 USD",
        yield: "8.4% Net",
        appreciation: "+14.8% (12 Months)",
        visaTimeline: "42 Days",
      },
      timeline: {
        step1: "Tax Structuring & Offshore Setup",
        step2: "Bespoke Off-Market Acquisition",
        step3: "Golden Visa Biometrics & Issuance",
      },
    },
    {
      tag: "EU Golden Visa",
      title: "London to Lisbon",
      investorType: "Tech Venture Partner",
      objective: "Regain borderless Schengen access for family post-Brexit while allocating capital to defensive European assets.",
      action: "Allocated €500,000 (~$540k) into a regulated Portuguese real estate private equity fund, structured for Golden Visa compliance.",
      result: "Full Schengen mobility unlocked for all family members, yielding stable capital appreciation with no physical residency requirement.",
      metrics: {
        allocation: "€500,000 EUR",
        yield: "5.9% Target",
        appreciation: "+11.2% (18 Months)",
        visaTimeline: "6 Months",
      },
      timeline: {
        step1: "Schengen Mobility Compliance Check",
        step2: "Fund Subscription & Legal Filing",
        step3: "Portuguese Residency Cards Dispatched",
      },
    },
    {
      tag: "Greek Permanent Residency",
      title: "New York to Santorini",
      investorType: "Private Equity Managing Director",
      objective: "Acquire a high-yield holiday estate asset with absolute euro-denominated diversification and permanent European access.",
      action: "Purchased two luxury villas in Santorini and the Athenian Riviera totaling €650,000 (~$705k) managed by boutique resort brands.",
      result: "Created a double-digit seasonal yield stream under hands-off management, backed by permanent Greece residency status.",
      metrics: {
        allocation: "€650,000 EUR",
        yield: "7.1% Net",
        appreciation: "+16.5% (Yearly)",
        visaTimeline: "75 Days",
      },
      timeline: {
        step1: "Greek Tax ID & Account Establishment",
        step2: "Villa Underwriting & Transaction",
        step3: "Permanent Residency Stamp Approval",
      },
    },
  ];

  const activeStory = stories[activeIdx];

  return (
    <section id="stories" className="relative z-10 bg-transparent px-6 py-24 md:px-12 md:py-36 border-t border-white/5 overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-[40%] right-10 w-[700px] h-[700px] bg-[#C5A059]/3 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.02] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/50 mb-6">
            <Users2 className="h-3.5 w-3.5 text-[#C5A059]" />
            Case Studies
          </div>
          <h2 className="text-balance text-4xl font-light leading-none text-white md:text-6xl lg:text-7xl">
            Sovereign <span className="text-gold-gradient font-serif italic">Investor Stories</span>
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-white/50 max-w-2xl">
            Read detailed breakdowns of how international families restructure their capital layers, acquire elite assets, and secure global mobility.
          </p>
        </div>

        {/* Tab Selector buttons */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-white/5 pb-8">
          {stories.map((story, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`px-6 py-4 rounded-xl text-xs uppercase tracking-widest border transition-all duration-300 font-medium cursor-pointer ${
                activeIdx === idx
                  ? "border-[#C5A059] bg-[#C5A059]/10 text-white"
                  : "border-white/5 bg-white/[0.01] text-white/40 hover:border-white/10 hover:text-white"
              }`}
            >
              <span className="block text-[8px] text-[#C5A059]/70 font-mono text-left tracking-widest mb-1">STORY 0{idx+1}</span>
              <span>{story.title}</span>
            </button>
          ))}
        </div>

        {/* Story Details Card */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
          
          {/* Narrative Content */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C5A059] border border-[#C5A059]/20 bg-[#C5A059]/5 px-3.5 py-1.5 rounded-full mb-4 inline-block">
                    {activeStory.tag}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-light text-white font-serif tracking-wide mt-2">
                    {activeStory.title}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-white/40 block mt-2">
                    Profile: {activeStory.investorType}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-semibold mb-2">The Objective</h4>
                    <p className="text-base font-light leading-relaxed text-white/80">
                      {activeStory.objective}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-semibold mb-2">The Action</h4>
                    <p className="text-sm font-light leading-relaxed text-white/70">
                      {activeStory.action}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-semibold mb-2">The Sovereign Result</h4>
                    <p className="text-sm font-light leading-relaxed text-white/70">
                      {activeStory.result}
                    </p>
                  </div>
                </div>

                {/* Sub-Timeline stages */}
                <div className="border-t border-white/5 pt-8">
                  <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-semibold mb-6 flex items-center gap-2">
                    <Milestone className="h-4 w-4 text-[#C5A059]" /> Execution Milestones
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      { step: "Phase 1", label: activeStory.timeline.step1 },
                      { step: "Phase 2", label: activeStory.timeline.step2 },
                      { step: "Phase 3", label: activeStory.timeline.step3 },
                    ].map((step, sIdx) => (
                      <div key={sIdx} className="bg-[#07111F]/20 border border-white/5 rounded-xl p-5 backdrop-blur-md">
                        <span className="text-[9px] font-mono text-[#C5A059] block uppercase tracking-widest mb-1.5">{step.step}</span>
                        <p className="text-xs font-light text-white/80 leading-relaxed">{step.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Hard metrics summary panel */}
          <div className="w-full lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
              >
                <GlowCard className="p-8 md:p-10 border border-white/10 bg-[#07111F]/20 backdrop-blur-2xl shadow-2xl">
                  <h3 className="text-lg font-light text-white border-b border-white/10 pb-4 mb-8">
                    Portfolio Snapshot
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-1">Capital Allocated</span>
                      <span className="text-3xl font-serif text-white tracking-tight">{activeStory.metrics.allocation}</span>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-1">Net Rental Income</span>
                      <span className="text-3xl font-serif text-[#C5A059] tracking-tight">{activeStory.metrics.yield}</span>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-1">Capital Appreciation</span>
                      <span className="text-2xl font-serif text-white/90 tracking-tight">{activeStory.metrics.appreciation}</span>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-1 flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Residency Approval speed
                      </span>
                      <span className="text-2xl font-serif text-emerald-400 tracking-tight">{activeStory.metrics.visaTimeline}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <a
                      href="#contact-section"
                      className="interactive w-full flex items-center justify-center gap-2 border border-white/10 bg-white text-black font-bold uppercase tracking-widest text-xs py-4 px-6 rounded-xl hover:bg-white/90 transition-colors shadow-lg animate-pulse"
                    >
                      <span>Analyze My Scenario</span>
                      <ArrowUpRight className="h-4.5 w-4.5" />
                    </a>
                  </div>
                </GlowCard>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
