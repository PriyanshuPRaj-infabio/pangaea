"use client";

import { useState } from "react";
import { Landmark, ArrowUpRight, CheckCircle2, Compass } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

interface CountryIntel {
  city: string;
  country: string;
  yield: string;
  growth: string;
  appreciationRating: string;
  pathway: string;
  taxAdvantage: string;
  roi5Yr: string;
  minInvestment: string;
  description: string;
  highlights: string[];
  x: number; // 1000x1000 coordinate
  y: number; // 1000x1000 coordinate
}

const countries: CountryIntel[] = [
  {
    city: "Dubai",
    country: "United Arab Emirates",
    yield: "8.4% Net",
    growth: "+38.4% (5-Yr)",
    appreciationRating: "A+",
    pathway: "10-Year Golden Visa (No physical stay)",
    taxAdvantage: "0% Income & Capital Gains Tax",
    roi5Yr: "80.4%",
    minInvestment: "AED 2,000,000 (~$545k)",
    description: "Dubai represents the epicenter of global capital. With zero personal tax, dollar-pegged earnings, and massive infrastructure scaling, it acts as a primary hedge against inflation.",
    highlights: ["Tax-free asset class", "Direct USD-AED peg hedge", "10-Year residency pathway"],
    x: 605,
    y: 478,
  },
  {
    city: "Lisbon",
    country: "Portugal",
    yield: "5.9% Net",
    growth: "+29.1% (5-Yr)",
    appreciationRating: "B+",
    pathway: "EU Golden Visa (5-Year citizenship path)",
    taxAdvantage: "Fund structures exempt from withholding tax",
    roi5Yr: "58.6%",
    minInvestment: "€500,000 (~$540k)",
    description: "Portugal offers Europe's premier residency-by-investment route. By allocating capital into regulated private funds, investors secure Schengen access and a pathway to a European passport.",
    highlights: ["Path to EU Citizenship", "Schengen mobility", "Diversified fund allocation"],
    x: 465,
    y: 415,
  },
  {
    city: "Santorini",
    country: "Greece",
    yield: "6.7% Net",
    growth: "+41.2% (5-Yr)",
    appreciationRating: "A",
    pathway: "Permanent EU Residency (Schengen Access)",
    taxAdvantage: "Flat-tax pathways for international wealth",
    roi5Yr: "74.7%",
    minInvestment: "€250,000 to €800,000",
    description: "Greece combines low entry capital thresholds with record tourism demand. The Athenian Riviera and Aegean island villa assets generate high seasonal yields under professional management.",
    highlights: ["Lowest EU entry threshold", "Immediate Schengen residency", "High vacation cashflow"],
    x: 528,
    y: 435,
  },
  {
    city: "London",
    country: "United Kingdom",
    yield: "4.8% Net",
    growth: "+16.5% (5-Yr)",
    appreciationRating: "B-",
    pathway: "Tier 1 / High-Value Innovator routes",
    taxAdvantage: "Corporate holding structure tax shielding",
    roi5Yr: "40.5%",
    minInvestment: "£1,000,000+ (~$1.25M)",
    description: "London remains the defensive vault for global wealth preservation. Despite policy shifts, its legal system, language, and elite secondary markets protect capital over generations.",
    highlights: ["Ultra-low volatility", "Institutional asset security", "Generational legacy stronghold"],
    x: 485,
    y: 380,
  },
  {
    city: "Nicosia",
    country: "Cyprus",
    yield: "6.8% Net",
    growth: "+24.4% (5-Yr)",
    appreciationRating: "B",
    pathway: "Permanent EU Residency in 60 Days",
    taxAdvantage: "12.5% Corporate tax & 0% Dividend tax",
    roi5Yr: "58.4%",
    minInvestment: "€300,000 (~$325k)",
    description: "Cyprus acts as a strategic EU maritime and corporate gateway. Offering corporate tax optimization and fast-track permanent residency, it is popular with technology and family offices.",
    highlights: ["Fastest EU PR route (60 days)", "Low corporate tax regime", "Zero dividend tax status"],
    x: 554,
    y: 445,
  },
];

export default function WorldExplorer() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCountry = countries[activeIdx];

  return (
    <section id="explorer" className="relative z-10 bg-transparent px-6 py-24 md:px-12 md:py-36 border-t border-white/5 overflow-hidden">
      
      {/* Background grid lines */}
      <div className="story-grid absolute inset-0 z-[1] opacity-20 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end border-b border-white/5 pb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Compass className="h-5 w-5 text-[#C5A059]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">Interactive World Experience</span>
            </div>
            <h2 className="text-balance text-4xl font-light leading-none text-white md:text-6xl lg:text-7xl">
              Wealth <span className="text-gold-gradient font-serif italic">Intelligence Map</span>
            </h2>
          </div>
          <p className="max-w-md text-sm font-light leading-relaxed text-white/50">
            Select pins on the real silver-continent map dashboard to analyze regional returns, sovereign tax parameters, and residency thresholds instantly.
          </p>
        </div>

        {/* Wealth Intelligence Dashboard UI */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
          
          {/* Left Column: Real Map with Silver Continents & Marks */}
          <div className="relative w-full aspect-square max-w-[680px] mx-auto bg-black/60 border border-white/10 rounded-3xl p-4 border-gold-glow flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-md">
            
            <svg viewBox="0 0 1000 1000" className="w-full h-full select-none overflow-visible relative z-10">
              {/* Embed world map with silver continents (grayscale filter applied) */}
              <image
                href="/images/green_world_map.png"
                x="0"
                y="0"
                width="1000"
                height="1000"
                className="opacity-95 rounded-2xl"
                style={{ filter: "grayscale(100%) brightness(1.6) contrast(1.15)" }}
              />

              {/* Connecting network overlay lines */}
              <g stroke="rgba(197, 160, 89, 0.45)" strokeWidth="2.5" strokeDasharray="5,5" fill="none">
                <line x1="485" y1="380" x2="465" y2="415" />
                <line x1="465" y1="415" x2="528" y2="435" />
                <line x1="528" y1="435" x2="554" y2="445" />
                <line x1="554" y1="445" x2="605" y2="478" />
                <line x1="485" y1="380" x2="605" y2="478" />
              </g>

              {/* Hotspot Pins */}
              {countries.map((country, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <g
                    key={country.city}
                    className="cursor-pointer"
                    onClick={() => setActiveIdx(idx)}
                  >
                    {/* Ring Pulse */}
                    <circle
                      cx={country.x}
                      cy={country.y}
                      r={isActive ? "40" : "26"}
                      fill={isActive ? "rgba(197, 160, 89, 0.15)" : "rgba(255, 255, 255, 0.1)"}
                      stroke={isActive ? "#C5A059" : "rgba(255, 255, 255, 0.85)"}
                      strokeWidth={isActive ? "4.5" : "2.5"}
                      className="transition-all duration-300"
                    />

                    {isActive && (
                      <circle
                        cx={country.x}
                        cy={country.y}
                        r="65"
                        fill="none"
                        stroke="#C5A059"
                        strokeWidth="1.5"
                        className="animate-ping opacity-35"
                      />
                    )}

                    {/* Central core dot */}
                    <circle
                      cx={country.x}
                      cy={country.y}
                      r={isActive ? "13" : "8"}
                      fill={isActive ? "#C5A059" : "#ffffff"}
                      stroke={isActive ? "#ffffff" : "#C5A059"}
                      strokeWidth="2"
                      className="transition-all duration-300 shadow-xl"
                    />

                    {/* Text Label */}
                    <text
                      x={country.x}
                      y={country.y - (isActive ? 52 : 36)}
                      textAnchor="middle"
                      fill={isActive ? "#C5A059" : "#ffffff"}
                      className="text-[13px] font-mono tracking-widest font-black uppercase pointer-events-none select-none drop-shadow-[0_3px_5px_rgba(0,0,0,1)]"
                    >
                      {country.city}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Radar Coordinates Overlay Widget */}
            <div className="absolute bottom-6 left-6 text-[8px] font-mono text-white/30 uppercase tracking-[0.2em] z-20">Sovereign Node Telemetry v1.12</div>
            <div className="absolute top-6 right-6 text-[8px] font-mono text-[#C5A059] uppercase tracking-[0.2em] flex items-center gap-1.5 z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Sovereign Grid Connected
            </div>

          </div>

          {/* Right Column: Dossier Card */}
          <GlowCard className="min-h-[580px] overflow-hidden backdrop-blur-2xl border border-white/10 bg-[#07111F]/20 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Dossier Header */}
              <div className="p-8 flex justify-between items-start border-b border-white/5 bg-white/[0.01]">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#C5A059] block mb-1">SOVEREIGN DOSSIER</span>
                  <h3 className="text-3xl font-serif text-white tracking-wide">{activeCountry.city}</h3>
                  <span className="text-xs uppercase tracking-widest text-white/50 block mt-1">{activeCountry.country}</span>
                </div>
                <Landmark className="h-7 w-7 text-white/30" />
              </div>

              {/* Data Intel Grid */}
              <div className="p-8 grid grid-cols-2 gap-6 border-b border-white/5">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-0.5">Net Yield</span>
                  <span className="text-xl font-serif text-[#C5A059] block">{activeCountry.yield}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-0.5">Projected ROI (5-Yr)</span>
                  <span className="text-xl font-serif text-white block">+{activeCountry.roi5Yr}%</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-0.5">Growth Score</span>
                  <span className="text-sm font-mono text-white block">{activeCountry.growth}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-0.5">Appreciation Rating</span>
                  <span className="text-sm font-mono text-white block">{activeCountry.appreciationRating}</span>
                </div>
              </div>

              {/* Detailed Residency & Tax Intel */}
              <div className="p-8 space-y-6">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-1 font-semibold">Residency Pathway</span>
                  <span className="text-sm text-white/80 font-light block leading-relaxed">{activeCountry.pathway}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-1 font-semibold">Tax Advantages</span>
                  <span className="text-sm text-white/80 font-light block leading-relaxed">{activeCountry.taxAdvantage}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-2 font-semibold">Jurisdiction Highlights</span>
                  <div className="grid gap-2.5 sm:grid-cols-3">
                    {activeCountry.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 border border-white/5 bg-white/[0.02] px-3 py-2 text-[10px] text-white/70 rounded-lg">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A059] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dossier Action Footer */}
            <div className="p-8 bg-black/40 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto">
              <div>
                <span className="text-[8px] uppercase tracking-widest text-white/40 block">Minimum Cap Allocation</span>
                <span className="text-xs font-mono text-white/80 font-bold block mt-1">{activeCountry.minInvestment}</span>
              </div>
              
              <a
                href="#contact-section"
                className="interactive inline-flex items-center gap-2.5 border border-[#C5A059]/40 bg-[#C5A059]/10 px-6 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] transition hover:bg-[#C5A059] hover:text-black shadow-md cursor-pointer"
              >
                Request Sovereign Dossier
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </GlowCard>

        </div>

      </div>
    </section>
  );
}
