"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Download, Flame, Shield } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

interface RankingRow {
  rank: number;
  country: string;
  yieldRating: string;
  appreciationIndex: string;
  taxScore: string;
  visaSpeed: string;
  minInvestment: string;
  status: "Hot" | "Stable" | "Cooling";
}

export default function MarketInsights() {
  const [activeTab, setActiveTab] = useState<"rankings" | "charts" | "heatmap">("rankings");

  const rankings: RankingRow[] = [
    { rank: 1, country: "United Arab Emirates (Dubai)", yieldRating: "8.4% Net", appreciationIndex: "A+", taxScore: "10/10", visaSpeed: "45 Days", minInvestment: "$545k", status: "Hot" },
    { rank: 2, country: "Greece (Santorini/Athens)", yieldRating: "6.7% Net", appreciationIndex: "A", taxScore: "8/10", visaSpeed: "60 Days", minInvestment: "$270k", status: "Hot" },
    { rank: 3, country: "Portugal (Lisbon/Algarve)", yieldRating: "5.9% Net", appreciationIndex: "B+", taxScore: "7/10", visaSpeed: "180 Days", minInvestment: "$540k", status: "Stable" },
    { rank: 4, country: "Cyprus (Nicosia/Limassol)", yieldRating: "6.8% Net", appreciationIndex: "B", taxScore: "9/10", visaSpeed: "60 Days", minInvestment: "$325k", status: "Stable" },
    { rank: 5, country: "United Kingdom (London)", yieldRating: "4.8% Net", appreciationIndex: "B-", taxScore: "5/10", visaSpeed: "120 Days", minInvestment: "$1.0M+", status: "Cooling" },
  ];

  const hotspots = [
    { zone: "Middle East", location: "Dubai Maritime City", classification: "Hyper-Growth", yield: "8.9%", risk: "Low", status: "Hot" },
    { zone: "Southern Europe", location: "Athenian Riviera", classification: "Residency/Yield", yield: "7.2%", risk: "Low", status: "Hot" },
    { zone: "Southern Europe", location: "Algarve Coastal", classification: "Residency", yield: "5.5%", risk: "Low", status: "Stable" },
    { zone: "East Asia", location: "Phuket Pool Villas", classification: "Lifestyle Yield", yield: "6.8%", risk: "Medium", status: "Stable" },
    { zone: "Southeastern Europe", location: "Limassol Marina", classification: "Tax Advantage", yield: "6.9%", risk: "Low", status: "Stable" },
    { zone: "Western Europe", location: "London Premium Zone 1", classification: "Asset Defensive", yield: "4.1%", risk: "Ultra-Low", status: "Cooling" },
  ];

  return (
    <section id="insights" className="relative z-10 bg-transparent px-6 py-24 md:px-12 md:py-36 border-t border-white/5 overflow-hidden">
      
      {/* Background soft grids & highlight */}
      <div className="story-grid absolute inset-0 z-[1] opacity-25 pointer-events-none" />
      <div className="absolute top-[20%] left-10 w-[600px] h-[600px] bg-[#C5A059]/3 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.02] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/50 mb-6">
              <BarChart3 className="h-3.5 w-3.5 text-[#C5A059]" />
              Wealth Intelligence
            </div>
            <h2 className="text-balance text-4xl font-light leading-none text-white md:text-6xl lg:text-7xl">
              Live Market <span className="text-gold-gradient font-serif italic">Insights</span>
            </h2>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab("rankings")}
              className={`px-5 py-3 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 font-semibold cursor-pointer ${
                activeTab === "rankings" ? "bg-white text-black font-bold" : "border border-white/10 text-white/60 hover:text-white"
              }`}
            >
              Jurisdiction Matrix
            </button>
            <button
              onClick={() => setActiveTab("charts")}
              className={`px-5 py-3 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 font-semibold cursor-pointer ${
                activeTab === "charts" ? "bg-white text-black font-bold" : "border border-white/10 text-white/60 hover:text-white"
              }`}
            >
              ROI Comparisons
            </button>
            <button
              onClick={() => setActiveTab("heatmap")}
              className={`px-5 py-3 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 font-semibold cursor-pointer ${
                activeTab === "heatmap" ? "bg-white text-black font-bold" : "border border-white/10 text-white/60 hover:text-white"
              }`}
            >
              Hotspot Map
            </button>
          </div>
        </div>

        {/* Dashboard Display */}
        <div className="w-full">
          {activeTab === "rankings" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-x-auto no-scrollbar border border-white/10 rounded-2xl bg-[#07111F]/20 backdrop-blur-2xl shadow-2xl"
            >
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.01]">
                    <th className="p-6 text-[9px] uppercase tracking-widest text-white/40 font-semibold">Rank</th>
                    <th className="p-6 text-[9px] uppercase tracking-widest text-white/40 font-semibold">Jurisdiction</th>
                    <th className="p-6 text-[9px] uppercase tracking-widest text-white/40 font-semibold">Yield (Net)</th>
                    <th className="p-6 text-[9px] uppercase tracking-widest text-white/40 font-semibold">5-Yr Growth Score</th>
                    <th className="p-6 text-[9px] uppercase tracking-widest text-white/40 font-semibold">Tax Score</th>
                    <th className="p-6 text-[9px] uppercase tracking-widest text-white/40 font-semibold">Visa Approval Speed</th>
                    <th className="p-6 text-[9px] uppercase tracking-widest text-white/40 font-semibold">Min. Cap Allocation</th>
                    <th className="p-6 text-[9px] uppercase tracking-widest text-white/40 font-semibold">Market Heat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {rankings.map((row) => (
                    <tr key={row.rank} className="hover:bg-white/[0.01] transition-colors">
                      <td className="p-6 text-sm font-mono text-[#C5A059]">0{row.rank}</td>
                      <td className="p-6 text-sm font-semibold text-white">{row.country}</td>
                      <td className="p-6 text-sm text-[#C5A059] font-serif">{row.yieldRating}</td>
                      <td className="p-6 text-sm font-mono text-white/80">{row.appreciationIndex}</td>
                      <td className="p-6 text-sm font-mono text-white/80">{row.taxScore}</td>
                      <td className="p-6 text-sm font-mono text-white/80">{row.visaSpeed}</td>
                      <td className="p-6 text-sm font-mono text-white/80">{row.minInvestment}</td>
                      <td className="p-6 text-xs">
                        <span className={`px-3 py-1 rounded-full font-mono text-[9px] uppercase font-bold ${
                          row.status === "Hot"
                            ? "bg-red-950/30 text-red-400 border border-red-500/20"
                            : row.status === "Stable"
                            ? "bg-emerald-950/30 text-emerald-400 border border-emerald-500/20"
                            : "bg-blue-950/30 text-blue-400 border border-blue-500/20"
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}

          {activeTab === "charts" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid gap-6 md:grid-cols-2"
            >
              {/* ROI Bar Chart */}
              <GlowCard className="p-8 border border-white/10 bg-[#07111F]/20 backdrop-blur-2xl">
                <h3 className="text-lg font-light text-white mb-6">Net Rental Yield Curve (%)</h3>
                <div className="space-y-6 pt-4">
                  {[
                    { label: "Dubai (Branded)", value: 8.4, color: "bg-[#C5A059]" },
                    { label: "Greece (Athenian Riviera)", value: 6.7, color: "bg-[#C5A059]/80" },
                    { label: "Cyprus (Limassol)", value: 6.8, color: "bg-[#C5A059]/70" },
                    { label: "Portugal (Lisbon Core)", value: 5.9, color: "bg-[#C5A059]/60" },
                    { label: "London (Prime Zone 1)", value: 4.8, color: "bg-white/20" },
                  ].map((bar, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-xs font-light text-white/80">
                        <span>{bar.label}</span>
                        <span className="font-mono text-[#C5A059] font-bold">{bar.value}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${bar.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${(bar.value / 10) * 100}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>

              {/* Capital Appreciation (5-Year Forecast) */}
              <GlowCard className="p-8 border border-white/10 bg-[#07111F]/20 backdrop-blur-2xl">
                <h3 className="text-lg font-light text-white mb-6">Projected 5-Year Capital Growth</h3>
                <div className="space-y-6 pt-4">
                  {[
                    { label: "Dubai", value: 38.4, color: "bg-white" },
                    { label: "Greece", value: 41.2, color: "bg-white/90" },
                    { label: "Portugal", value: 29.1, color: "bg-white/70" },
                    { label: "Cyprus", value: 24.4, color: "bg-white/60" },
                    { label: "London", value: 16.5, color: "bg-white/40" },
                  ].map((bar, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-xs font-light text-white/80">
                        <span>{bar.label}</span>
                        <span className="font-mono text-white font-bold">+{bar.value}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-[#C5A059]/10 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${bar.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${(bar.value / 50) * 100}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          )}

          {activeTab === "heatmap" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {hotspots.map((spot, idx) => (
                <GlowCard key={idx} className="p-6 border border-white/10 bg-[#07111F]/20 backdrop-blur-2xl">
                  <div className="flex justify-between items-start border-b border-white/5 pb-4 mb-4">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-[#C5A059] block font-mono">{spot.zone}</span>
                      <h4 className="text-lg font-light text-white mt-1 leading-tight">{spot.location}</h4>
                    </div>
                    
                    {spot.status === "Hot" ? (
                      <Flame className="h-4.5 w-4.5 text-red-400 animate-pulse" />
                    ) : (
                      <Shield className="h-4.5 w-4.5 text-emerald-400" />
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[8px] uppercase tracking-widest text-white/40 block">Focus Classification</span>
                      <span className="text-white/80 font-medium block mt-0.5">{spot.classification}</span>
                    </div>
                    <div>
                      <span className="text-[8px] uppercase tracking-widest text-white/40 block">Target Yield</span>
                      <span className="text-[#C5A059] font-serif font-bold text-sm block mt-0.5">{spot.yield}</span>
                    </div>
                    <div>
                      <span className="text-[8px] uppercase tracking-widest text-white/40 block">Regulatory Risk</span>
                      <span className="text-white/80 font-medium block mt-0.5">{spot.risk}</span>
                    </div>
                    <div>
                      <span className="text-[8px] uppercase tracking-widest text-white/40 block">Market Signal</span>
                      <span className={`font-mono text-[9px] font-bold block mt-0.5 uppercase ${
                        spot.status === "Hot" ? "text-red-400" : spot.status === "Stable" ? "text-emerald-400" : "text-blue-400"
                      }`}>{spot.status}</span>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </motion.div>
          )}
        </div>

        {/* Report downloads */}
        <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-[#07111F]/20 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-light text-white mb-2">Get the Complete Q2 Sovereign Investment Report</h4>
            <p className="text-xs font-light text-white/50">Comprehensive data modeling, legal checklists, and off-market project sheets.</p>
          </div>
          
          <button
            onClick={() => alert("Report requested. We have emailed the details.")}
            className="interactive flex items-center justify-center gap-2.5 bg-white text-black font-bold uppercase tracking-widest text-xs py-4 px-6 rounded-xl hover:bg-white/90 transition-colors shadow-lg cursor-pointer animate-pulse"
          >
            <span>Download Report</span>
          </button>
        </div>

      </div>
    </section>
  );
}
