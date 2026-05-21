"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";
import KineticText from "@/components/ui/KineticText";
import { BarChart3, TrendingUp, Info, HelpCircle, AlertTriangle, ShieldCheck } from "lucide-react";

interface CountryConfig {
  name: string;
  yieldRate: number;
  growthRate: number;
  minEntry: number;
  currency: string;
  residencyName: string;
}

const calculatorConfigs: Record<string, CountryConfig> = {
  Dubai: {
    name: "Dubai",
    yieldRate: 0.084,
    growthRate: 0.076,
    minEntry: 545000,
    currency: "USD",
    residencyName: "Dubai Golden Visa (10-Yr)",
  },
  Portugal: {
    name: "Portugal",
    yieldRate: 0.059,
    growthRate: 0.058,
    minEntry: 540000,
    currency: "USD",
    residencyName: "Portugal Golden Visa (EU Path)",
  },
  Greece: {
    name: "Greece",
    yieldRate: 0.067,
    growthRate: 0.082,
    minEntry: 270000,
    currency: "USD",
    residencyName: "Greek Permanent Residency",
  },
  Thailand: {
    name: "Thailand",
    yieldRate: 0.062,
    growthRate: 0.045,
    minEntry: 200000,
    currency: "USD",
    residencyName: "Thailand LTR Visa (10-Yr)",
  },
  Bali: {
    name: "Bali",
    yieldRate: 0.091,
    growthRate: 0.063,
    minEntry: 130000,
    currency: "USD",
    residencyName: "Indonesian Second Home Visa",
  },
  Cyprus: {
    name: "Cyprus",
    yieldRate: 0.068,
    growthRate: 0.048,
    minEntry: 325000,
    currency: "USD",
    residencyName: "Cyprus Permanent Residency",
  },
};

export default function InvestmentIntelligence() {
  const [budget, setBudget] = useState<number>(500000);
  const [selectedCountry, setSelectedCountry] = useState<string>("Dubai");
  const config = calculatorConfigs[selectedCountry];

  const calculations = useMemo(() => {
    const annualRental = budget * config.yieldRate;
    const totalRental5Yr = annualRental * 5;
    
    // Compounded appreciation over 5 years
    const futureValue = budget * Math.pow(1 + config.growthRate, 5);
    const appreciation5Yr = futureValue - budget;
    
    const totalReturn5Yr = totalRental5Yr + appreciation5Yr;
    const roiPercentage5Yr = (totalReturn5Yr / budget) * 100;
    
    const isEligible = budget >= config.minEntry;
    
    return {
      annualRental,
      totalRental5Yr,
      appreciation5Yr,
      futureValue,
      totalReturn5Yr,
      roiPercentage5Yr,
      isEligible,
    };
  }, [budget, config]);

  // Generate SVG path for a 5-year growth curve chart
  const chartPath = useMemo(() => {
    const width = 500;
    const height = 150;
    const points = [];
    const steps = 5;
    
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * width;
      // Compounded value at year i
      const val = budget * Math.pow(1 + config.growthRate, i);
      const rentalAccum = budget * config.yieldRate * i;
      const totalVal = val + rentalAccum;
      
      const maxVal = budget * Math.pow(1 + 0.1, 5) + (budget * 0.1 * 5); // reference max
      const minVal = budget * 0.8;
      
      const normY = (totalVal - minVal) / (maxVal - minVal);
      const y = height - (normY * (height - 30) + 15);
      points.push(`${x},${y}`);
    }
    return `M ${points.join(" L ")}`;
  }, [budget, config]);

  const tickerItems = [
    "DXB PRIME: +8.4% YIELD",
    "LIS RESIDENTIAL: +5.9% YIELD",
    "ATH COASTAL: +6.7% YIELD",
    "PHUKET POOL VILLA: +6.2% YIELD",
    "BALI ECO-RESORT: +9.1% YIELD",
    "CYPRUS MARINA VILLA: +6.8% YIELD",
    "PORTUGAL INVESTOR ROUTE: SOVEREIGN RISK LOW",
    "DUBAI OFF-PLAN VOLUME: NEW HEIGHTS REACHED",
  ];

  return (
    <section id="intelligence" className="relative z-10 bg-[#050606]/40 backdrop-blur-md py-28 md:py-40 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 mb-20">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="h-5 w-5 text-[#C5A059]" />
            <KineticText text="Portfolio Intelligence" className="text-xs font-bold uppercase tracking-widest text-[#C5A059]" />
          </div>
          <h2 className="text-balance text-4xl font-light leading-tight text-white md:text-6xl">
            Wealth Without <span className="text-gold-gradient font-serif italic">Geography</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-white/50">
            Verify investment yields, compound capital growth, and track residency eligibility parameters instantly using our glass-dashboard simulator.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          
          {/* Controls Column */}
          <GlowCard className="p-8 md:p-10">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-light text-white mb-6">Advisory Simulator</h3>
                
                {/* Select Country */}
                <div className="mb-10">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 block mb-3 font-semibold">Select Country</label>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.keys(calculatorConfigs).map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedCountry(c)}
                        className={`py-3 px-2 rounded-xl text-xs uppercase tracking-widest border transition-all duration-300 font-medium ${
                          selectedCountry === c
                            ? "border-[#C5A059]/60 bg-[#C5A059]/10 text-white"
                            : "border-white/5 bg-white/[0.01] text-white/60 hover:border-white/10 hover:text-white"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slider Budget */}
                <div className="mb-8">
                  <div className="flex justify-between items-end mb-4">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">Investment Budget</label>
                    <span className="text-2xl font-serif text-white font-light">
                      ${budget.toLocaleString()} <span className="text-xs font-sans text-white/40">USD</span>
                    </span>
                  </div>
                  
                  <input
                    type="range"
                    min="150000"
                    max="3000000"
                    step="25000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#C5A059] outline-none"
                  />
                  <div className="flex justify-between text-[9px] text-white/30 font-mono mt-2">
                    <span>$150,000</span>
                    <span>$1.5M</span>
                    <span>$3.0M</span>
                  </div>
                </div>
              </div>

              {/* Residency Compliance Indicator */}
              <div className={`mt-8 p-5 rounded-2xl border flex items-start gap-4 transition-all duration-300 ${
                calculations.isEligible
                  ? "border-emerald-500/20 bg-emerald-500/[0.02]"
                  : "border-amber-500/20 bg-amber-500/[0.02]"
              }`}>
                {calculations.isEligible ? (
                  <>
                    <ShieldCheck className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Residency Qualified</h4>
                      <p className="text-xs text-white/60 mt-1 leading-relaxed">
                        Your budget of ${budget.toLocaleString()} exceeds the threshold of ${config.minEntry.toLocaleString()} for the <strong className="text-white font-medium">{config.residencyName}</strong>.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-6 w-6 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Below Residency Threshold</h4>
                      <p className="text-xs text-white/60 mt-1 leading-relaxed">
                        Minimum threshold for the <strong className="text-white font-medium">{config.residencyName}</strong> is ${config.minEntry.toLocaleString()}. Increase budget or explore alternative markets.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </GlowCard>

          {/* Outputs Column */}
          <div className="flex flex-col justify-between gap-6">
            
            {/* Live Dashboard Card */}
            <GlowCard className="p-8 md:p-10 flex-1">
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-start border-b border-white/5 pb-5">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A059] block">Dynamic Return Forecast</span>
                    <h3 className="text-2xl font-light text-white mt-1">5-Year Growth Curve</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] uppercase tracking-widest text-white/40 block">Projected ROI</span>
                    <span className="text-3xl font-serif text-[#C5A059] block mt-1">+{calculations.roiPercentage5Yr.toFixed(1)}%</span>
                  </div>
                </div>

              {/* Dynamic SVG Sparkline */}
              <div className="py-8 relative h-40 w-full flex items-center justify-center">
                <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible">
                  {/* Grid Lines */}
                  <line x1="0" y1="15" x2="500" y2="15" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="135" x2="500" y2="135" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  
                  {/* Dynamic Growth Line */}
                  <motion.path
                    d={chartPath}
                    fill="none"
                    stroke="url(#chartGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                  />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#C5A059" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#FFEAB5" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  {/* Nodes */}
                  <circle cx="500" cy={chartPath.split("L")[5]?.split(",")[1]} r="5" fill="#FFEAB5" className="animate-ping" />
                  <circle cx="500" cy={chartPath.split("L")[5]?.split(",")[1]} r="3" fill="#C5A059" />
                </svg>
                
                <div className="absolute left-0 bottom-1.5 text-[8px] font-mono text-white/30 uppercase tracking-widest">Year 0</div>
                <div className="absolute right-0 bottom-1.5 text-[8px] font-mono text-white/30 uppercase tracking-widest text-right">Year 5</div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-6 border-t border-white/5 pt-6">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-0.5">Annual Rental Income</span>
                  <span className="text-xl font-serif text-white font-light">${calculations.annualRental.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-0.5">Capital Appreciation (5Yr)</span>
                  <span className="text-xl font-serif text-white font-light">${calculations.appreciation5Yr.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-0.5">Total Return Pool (5Yr)</span>
                  <span className="text-xl font-serif text-[#C5A059] font-light">${calculations.totalReturn5Yr.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-0.5">Appreciated Asset Value</span>
                  <span className="text-xl font-serif text-white font-light">${calculations.futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
              </div>

            </div>
          </GlowCard>
        </div>

        </div>

      </div>

      {/* Live Financial Ticker UI */}
      <div className="relative border-t border-b border-white/5 bg-black/40 py-6 overflow-hidden flex whitespace-nowrap select-none">
        <div className="flex animate-[marquee_35s_linear_infinite] gap-12 text-[10px] font-mono tracking-[0.25em] text-[#C5A059] uppercase">
          {tickerItems.concat(tickerItems).map((text, i) => (
            <span key={i} className="flex items-center gap-3">
              <TrendingUp className="h-3.5 w-3.5 text-white/30" />
              <span>{text}</span>
            </span>
          ))}
        </div>
        
        {/* Tailored inline marquee keyframe injection */}
        <style jsx global>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

    </section>
  );
}
