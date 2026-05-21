"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ShieldAlert, AlertTriangle, Activity } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

interface RiskDetail {
  id: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  description: string;
  riskRating: "CRITICAL" | "HIGH" | "MODERATE";
  impact: string;
}

export default function TheProblem() {
  const [selectedRegion, setSelectedRegion] = useState("India");
  const [exposureVal, setExposureVal] = useState(75); // % of wealth in single country

  const regionalStats: Record<string, { inflation: string; currencyDecay: string; volatility: string; score: number; comment: string }> = {
    India: { inflation: "5.8%", currencyDecay: "-22%", volatility: "High", score: 74, comment: "High exposure to domestic inflation and INR depreciation against USD." },
    UK: { inflation: "3.2%", currencyDecay: "-12%", volatility: "Medium", score: 52, comment: "Post-Brexit regulatory friction and high capital gains exposure." },
    Turkey: { inflation: "68.5%", currencyDecay: "-78%", volatility: "Extreme", score: 94, comment: "Severe purchasing power collapse; currency hedge critical." },
    SouthAfrica: { inflation: "5.4%", currencyDecay: "-31%", volatility: "High", score: 82, comment: "Infrastructure limits and sovereign tax pressure." },
    USA: { inflation: "3.1%", currencyDecay: "0% (Reserve)", volatility: "Low", score: 38, comment: "Defensive base, but highly exposed to domestic fiscal concentration." },
  };

  const currentRegion = regionalStats[selectedRegion] || regionalStats.India;
  
  // Calculate dynamic vulnerability score based on selection and slider
  const vulnerabilityScore = Math.min(100, Math.round(currentRegion.score * (exposureVal / 100) + 15));

  const risks: RiskDetail[] = [
    {
      id: "01",
      title: "Currency Depreciation",
      subtitle: "Capital erosion index",
      metric: "-24% Avg.",
      metricLabel: "Purchasing Power Loss vs USD",
      description: "Keeping all assets in local domestic currencies forces reliance on local central bank policies. Over the last decade, even robust currencies devalued steadily against defensive USD/EUR reserves.",
      riskRating: "HIGH",
      impact: "Depletes global purchasing power of generational capital.",
    },
    {
      id: "02",
      title: "Political & Capital Lockdowns",
      subtitle: "Legislative volatility index",
      metric: "82% Spike",
      metricLabel: "Global Regulatory Shifts",
      description: "Sudden fiscal reforms, wealth taxes, or currency controls can trap capital overnight. Without structured offshore accounts and assets, you risk complete compliance lockouts.",
      riskRating: "CRITICAL",
      impact: "Limits rapid liquidation and cross-border asset mobility.",
    },
    {
      id: "03",
      title: "Visa & Border Restrictions",
      subtitle: "Mobility access index",
      metric: "140+ Borders",
      metricLabel: "Restricted or Blocked Access",
      description: "A single passport limits spontaneous business travel and family relocation options. During political or economic crises, mobility restrictions act as a physical bottleneck.",
      riskRating: "CRITICAL",
      impact: "Creates immediate travel and security exposure for families.",
    },
    {
      id: "04",
      title: "Tax Concentration Shocks",
      subtitle: "Fiscal exposure index",
      metric: "Up to 55%",
      metricLabel: "Estate and Corporate Tax Load",
      description: "Relying on a single tax code exposes your estate, holdings, and inheritance structures to sudden state audits and rate hikes. Cross-border structuring mitigates tax concentration.",
      riskRating: "HIGH",
      impact: "Depletes generational inheritance values over time.",
    },
    {
      id: "05",
      title: "Sub-Inflation Domestic Yields",
      subtitle: "Net asset performance",
      metric: "2.8% Real",
      metricLabel: "Yield Net of True Inflation",
      description: "Domestic property yields in saturated metropolitan hubs regularly fall below real-world inflation rates, leading to net capital losses on supposedly 'safe' real estate.",
      riskRating: "MODERATE",
      impact: "Stagnates portfolio growth while locking up cashflow.",
    },
    {
      id: "06",
      title: "Identity Single Point of Failure",
      subtitle: "Sovereign redundancy index",
      metric: "1 State",
      metricLabel: "Total Dependence",
      description: "Complete reliance on one government identity leaves families vulnerable to local civil unrest, economic blockades, and systemic infrastructure collapses. Redundancy is defensive insurance.",
      riskRating: "CRITICAL",
      impact: "Leaves families with zero backup evacuation options.",
    },
  ];

  return (
    <section id="problem" className="relative z-10 bg-transparent px-6 py-24 md:px-12 md:py-36 border-t border-white/5 overflow-hidden">
      
      {/* Background patterns */}
      <div className="story-grid absolute inset-0 z-0 opacity-15 pointer-events-none" />
      <div className="absolute top-[20%] left-1/4 -translate-x-1/2 w-[700px] h-[700px] bg-red-950/5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Title */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 border border-red-500/10 bg-red-950/20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-red-400 mb-6 border-red-glow">
            <ShieldAlert className="h-3.5 w-3.5" />
            Systemic Vulnerability Analysis
          </div>
          <h2 className="text-balance text-4xl font-light leading-none text-white md:text-6xl lg:text-7xl">
            Why Smart Investors Are Leaving <br />
            <span className="text-silver-gradient font-serif italic">Single-Country Wealth</span> Behind
          </h2>
        </div>

        {/* Split Screen Advanced Layout */}
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
          
          {/* Left Column: Interactive Diagnostic Widget (Sticky) */}
          <div className="lg:sticky lg:top-28 space-y-8">
            <GlowCard className="p-8 border border-white/10 bg-[#07111F]/20 backdrop-blur-2xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-red-400 font-bold block">Advisory Tool</span>
                  <h3 className="text-xl font-light text-white mt-1">Sovereign Vulnerability Calculator</h3>
                </div>
                <Activity className="h-5 w-5 text-red-400 animate-pulse" />
              </div>

              <div className="space-y-6">
                {/* Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-widest text-white/40 font-semibold">Select Primary Asset Hub</label>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full bg-[#050816]/60 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-red-500/40 transition-all cursor-pointer"
                  >
                    <option value="India">India (INR)</option>
                    <option value="UK">United Kingdom (GBP)</option>
                    <option value="Turkey">Turkey (TRY)</option>
                    <option value="SouthAfrica">South Africa (ZAR)</option>
                    <option value="USA">United States (USD)</option>
                  </select>
                </div>

                {/* Slider */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-[9px] uppercase tracking-widest text-white/40 font-semibold">
                    <span>Wealth Concentration</span>
                    <span className="text-white font-mono">{exposureVal}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={exposureVal}
                    onChange={(e) => setExposureVal(Number(e.target.value))}
                    className="w-full accent-red-500 h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Dynamic Telemetry Results */}
                <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[8px] uppercase tracking-widest text-white/40 block">Inflation Rate</span>
                    <span className="text-white font-mono font-bold text-sm block mt-0.5">{currentRegion.inflation}</span>
                  </div>
                  <div>
                    <span className="text-[8px] uppercase tracking-widest text-white/40 block">10-Yr Currency Decay</span>
                    <span className="text-red-400 font-mono font-bold text-sm block mt-0.5">{currentRegion.currencyDecay}</span>
                  </div>
                </div>

                {/* Commentary */}
                <p className="text-[11px] font-light leading-relaxed text-white/40 italic">
                  * {currentRegion.comment}
                </p>

                {/* Gauge/Score Visualizer */}
                <div className="border-t border-white/5 pt-6 flex items-center justify-between gap-6">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-white/40 block">Calculated Risk Index</span>
                    <span className="text-3xl font-serif text-white tracking-tight mt-1 block">
                      {vulnerabilityScore}% <span className="text-xs text-red-500 font-sans uppercase font-bold tracking-widest ml-2">Vulnerable</span>
                    </span>
                  </div>

                  <div className="w-16 h-16 rounded-full border-4 border-red-950/40 flex items-center justify-center relative overflow-hidden">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      <path
                        className="text-white/5"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <motion.path
                        className="text-red-500"
                        strokeWidth="4"
                        strokeDasharray={`${vulnerabilityScore}, 100`}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        initial={{ strokeDasharray: "0, 100" }}
                        animate={{ strokeDasharray: `${vulnerabilityScore}, 100` }}
                        transition={{ duration: 0.8 }}
                      />
                    </svg>
                    <AlertTriangle className="absolute text-red-500 h-4.5 w-4.5 animate-pulse" />
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact-section"
                    className="interactive w-full flex items-center justify-center gap-2 border border-red-500/20 bg-red-950/20 hover:bg-red-950/40 text-red-400 font-bold uppercase tracking-widest text-[10px] py-4 px-6 rounded-xl transition-all shadow-md"
                  >
                    Request Sovereign Hedging Audit
                  </a>
                </div>
              </div>
            </GlowCard>
          </div>

          {/* Right Column: Detailed Feeds Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {risks.map((risk, index) => (
              <motion.div
                key={risk.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
              >
                <GlowCard className="p-8 border border-white/10 bg-[#07111F]/20 backdrop-blur-2xl shadow-2xl hover:border-red-500/20 transition-colors duration-500">
                  <div className="flex justify-between items-start border-b border-white/5 pb-4 mb-5">
                    <div>
                      <span className="text-[10px] font-mono text-red-400/80 font-bold uppercase">{risk.subtitle}</span>
                      <h3 className="text-xl font-light text-white mt-1 leading-tight">{risk.title}</h3>
                    </div>
                    
                    <span className={`px-2.5 py-0.5 rounded-full font-mono text-[8px] uppercase tracking-wider font-bold ${
                      risk.riskRating === "CRITICAL"
                        ? "bg-red-950/30 text-red-400 border border-red-500/20"
                        : "bg-amber-950/30 text-amber-400 border border-amber-500/20"
                    }`}>
                      {risk.riskRating}
                    </span>
                  </div>

                  <p className="text-xs font-light leading-relaxed text-white/50 mb-6">
                    {risk.description}
                  </p>

                  <div className="grid gap-6 sm:grid-cols-[1.2fr_0.8fr] pt-4 border-t border-white/5 text-[11px]">
                    <div>
                      <span className="text-[8px] uppercase tracking-widest text-white/40 block font-semibold">Generational Impact</span>
                      <span className="text-white/80 block mt-0.5">{risk.impact}</span>
                    </div>
                    <div>
                      <span className="text-[8px] uppercase tracking-widest text-white/40 block font-semibold">{risk.metricLabel}</span>
                      <span className="text-[#C5A059] font-serif font-bold text-sm block mt-0.5">{risk.metric}</span>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
