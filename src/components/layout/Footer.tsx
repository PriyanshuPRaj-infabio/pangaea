"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Landmark, Mail, Phone, ShieldCheck, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubbed(true);
      setTimeout(() => {
        setSubbed(false);
        setEmail("");
      }, 3000);
    }
  };

  const offices = [
    { city: "Dubai Marina", address: "Al Habtoor Tower, Level 42, Dubai, UAE" },
    { city: "London Mayfair", address: "24 Berkeley Square, London, W1J 6HE, UK" },
    { city: "Athens Riviera", address: "Vouliagmenis Avenue 104, Glyfada, Greece" },
  ];

  const markets = [
    { name: "United Arab Emirates", href: "/services#dubai" },
    { name: "Greece", href: "/services#greece" },
    { name: "Portugal", href: "/services#portugal" },
    { name: "United Kingdom", href: "/services#uk" },
    { name: "Cyprus", href: "/services#cyprus" },
  ];

  const reports = [
    { name: "Sovereign Mobility Index Q2", href: "#insights" },
    { name: "Quarterly Yield Ledger", href: "#insights" },
    { name: "Cross-Border Wealth Structuring Guide", href: "#insights" },
  ];

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#030405] pt-28 pb-12 px-6 md:px-12 overflow-hidden z-20">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-[#C5A059]/2.5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="story-grid absolute inset-0 z-0 opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] border-b border-white/10 pb-16 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Image
              src="/pangea-logo.png"
              alt="Pangaea Logo"
              width={165}
              height={55}
              className="w-auto h-10 object-contain"
            />
            <p className="text-lg text-white/60 font-light max-w-sm leading-relaxed">
              Borders are a state of mind. We design cross-border pathways to protect and grow generational wealth.
            </p>
            <div className="flex flex-wrap gap-6 text-xs text-white/40 uppercase tracking-widest font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#C5A059]" /> Audited Sovereign Desks
              </span>
              <span>Retained Legal counsel</span>
            </div>
          </div>

          {/* Premium Newsletter */}
          <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-[#050607]/60 flex flex-col justify-between">
            <div>
              <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold block mb-1">SOVEREIGN BRIEFINGS</span>
              <h3 className="text-xl font-light text-white mb-2">Subscribe to Private Global Telemetry</h3>
              <p className="text-xs font-light text-white/50 mb-6">Receive curated alerts on Golden Visa legislative changes and off-market allocations directly in your inbox.</p>
            </div>

            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter corporate email address"
                className="w-full bg-white/[0.02] border border-white/15 rounded-xl px-5 py-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#C5A059]/60 focus:bg-white/[0.04] transition-all pr-14"
              />
              <button
                type="submit"
                className="absolute right-2 p-2.5 rounded-lg bg-white text-black hover:bg-white/90 transition-colors cursor-pointer flex items-center justify-center"
              >
                {subbed ? (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-1 text-emerald-600">Subscribed</span>
                ) : (
                  <Send className="h-4.5 w-4.5" />
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Mid Section: Dense Links Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          
          {/* Offices Column */}
          <div className="space-y-4">
            <h4 className="uppercase tracking-[0.25em] text-[9px] font-bold text-[#C5A059] border-b border-white/5 pb-2">
              Global Offices
            </h4>
            <ul className="space-y-4 text-xs font-light">
              {offices.map((office, idx) => (
                <li key={idx} className="space-y-1">
                  <span className="font-semibold text-white block">{office.city}</span>
                  <span className="text-white/40 block leading-relaxed">{office.address}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Markets Column */}
          <div className="space-y-4">
            <h4 className="uppercase tracking-[0.25em] text-[9px] font-bold text-[#C5A059] border-b border-white/5 pb-2">
              Core Markets
            </h4>
            <ul className="space-y-3 text-xs">
              {markets.map((market, idx) => (
                <li key={idx}>
                  <Link href={market.href} className="text-white/60 hover:text-white transition-colors block">
                    {market.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Publications Column */}
          <div className="space-y-4">
            <h4 className="uppercase tracking-[0.25em] text-[9px] font-bold text-[#C5A059] border-b border-white/5 pb-2">
              Advisory Intel
            </h4>
            <ul className="space-y-3 text-xs">
              {reports.map((report, idx) => (
                <li key={idx}>
                  <a href={report.href} className="text-white/60 hover:text-white transition-colors block">
                    {report.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct channels */}
          <div className="space-y-4">
            <h4 className="uppercase tracking-[0.25em] text-[9px] font-bold text-[#C5A059] border-b border-white/5 pb-2">
              Direct Contact
            </h4>
            <ul className="space-y-4 text-xs">
              <li>
                <a href="mailto:business@pangaearealty.co" className="group block">
                  <span className="text-[8px] uppercase tracking-widest text-white/40 block mb-0.5">Retained Inquiries</span>
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">business@pangaearealty.co</span>
                </a>
              </li>
              <li>
                <a href="tel:+918377837307" className="group block">
                  <span className="text-[8px] uppercase tracking-widest text-white/40 block mb-0.5">Private Desk Phone</span>
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">+91 8377 837 307</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimers & Licensing */}
        <div className="border-t border-white/10 pt-8 pb-12 text-[10px] text-white/30 space-y-4 leading-relaxed font-light">
          <p>
            <strong>Regulatory Disclosure:</strong> Pangaea Advisory (Pangaea Realty Ltd.) is an international real estate acquisition and migration consultancy. We do not act as local retail brokers or register as tax lawyers in individual jurisdictions. All local transactional compliance is managed in conjunction with retained and fully accredited legal partners listed in our partner directories.
          </p>
          <p>
            Past performance, yields, and capital appreciation figures referenced across this portal are sourced from historical transaction indexes and developer audits. Actual returns remain subject to local market volatility, currency shifts, and tax reforms.
          </p>
        </div>

        {/* Bottom copyright & socials */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-[9px] text-white/40 uppercase tracking-[0.25em]">
          <p>© {new Date().getFullYear()} Pangaea Realty. All Rights Reserved. Co-designed with Knight Frank Mixed.</p>
          <div className="flex gap-8 mt-6 md:mt-0 font-semibold text-white/60">
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">Private Channel</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
