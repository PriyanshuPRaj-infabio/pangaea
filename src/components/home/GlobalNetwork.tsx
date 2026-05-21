"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KineticText from "@/components/ui/KineticText";
import { Users2, ShieldCheck, Mail, Phone, Users, ExternalLink } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

interface NodeDetail {
  id: string;
  name: string;
  x: number;
  y: number;
  specialty: string;
  developer: string;
  legalDesk: string;
  leadAdvisor: string;
  email: string;
}

const networkNodes: NodeDetail[] = [
  {
    id: "dubai",
    name: "Dubai Desk",
    x: 350,
    y: 120,
    specialty: "High-Yield Branded Residences",
    developer: "Emaar Properties / Sobha",
    legalDesk: "Al Tamimi & Co. Advocates",
    leadAdvisor: "Ridhima Sabharwal",
    email: "dxb@pangaearealty.co",
  },
  {
    id: "lisbon",
    name: "Lisbon Desk",
    x: 120,
    y: 180,
    specialty: "EU Golden Visa Fund Routes",
    developer: "Vanguard Properties Portugal",
    legalDesk: "Abreu Advogados Legal",
    leadAdvisor: "João Silva",
    email: "lis@pangaearealty.co",
  },
  {
    id: "athens",
    name: "Athens Desk",
    x: 200,
    y: 320,
    specialty: "Permanent Residency Acquisitions",
    developer: "Temes SA Developments",
    legalDesk: "Vardikos & Vardikos Legal",
    leadAdvisor: "Angeliki Gkioka",
    email: "ath@pangaearealty.co",
  },
  {
    id: "phuket",
    name: "Phuket Desk",
    x: 480,
    y: 220,
    specialty: "Luxury Resort Yield Assets",
    developer: "Sansiri Public Co.",
    legalDesk: "BMT Law & Advisory",
    leadAdvisor: "Prasert Thong",
    email: "hkt@pangaearealty.co",
  },
  {
    id: "bali",
    name: "Bali Desk",
    x: 420,
    y: 350,
    specialty: "Eco-Luxury Leasehold Retreats",
    developer: "Mirah Investment Group",
    legalDesk: "Indotax Legal Consultants",
    leadAdvisor: "I Wayan",
    email: "dps@pangaearealty.co",
  },
  {
    id: "cyprus",
    name: "Cyprus Desk",
    x: 280,
    y: 280,
    specialty: "Strategic EU Access Permits",
    developer: "Cybarco Development",
    legalDesk: "Elias Neocleous & Co.",
    leadAdvisor: "Marios Georgiou",
    email: "lca@pangaearealty.co",
  },
];

export default function GlobalNetwork() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("dubai");
  const activeNode = useMemo(() => {
    return networkNodes.find((n) => n.id === selectedNodeId) || networkNodes[0];
  }, [selectedNodeId]);

  const centralNode = { x: 300, y: 220, name: "Pangaea HQ" };

  return (
    <section id="network" className="relative z-10 bg-transparent py-28 md:py-40 border-t border-white/5 overflow-hidden">
      
      {/* Aurora effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C5A059]/5 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <Users2 className="h-5 w-5 text-[#C5A059]" />
              <KineticText text="Sovereign Desk Desk" className="text-xs font-bold uppercase tracking-widest text-[#C5A059]" />
            </div>
            <h2 className="text-balance text-4xl font-light leading-tight text-white md:text-6xl">
              Trusted Global <span className="text-gold-gradient font-serif italic">Network</span>
            </h2>
          </div>
          <p className="max-w-md text-sm font-light leading-relaxed text-white/50">
            Pangaea connects you with audited developers, immigration counsel, and wealth advisors globally, removing transaction friction across borders.
          </p>
        </div>

        {/* Network Layout */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          
          {/* Network Visualization (Left) */}
          <div className="relative aspect-[4/3] w-full max-w-[600px] mx-auto rounded-3xl bg-white/[0.01] border border-white/5 p-6 border-gold-glow flex items-center justify-center">
            
            {/* SVG Visual Canvas */}
            <svg viewBox="0 0 600 440" className="w-full h-full overflow-visible">
              
              {/* Radial grid circles */}
              <circle cx={centralNode.x} cy={centralNode.y} r="80" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx={centralNode.x} cy={centralNode.y} r="160" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx={centralNode.x} cy={centralNode.y} r="240" fill="none" stroke="rgba(255,255,255,0.01)" strokeWidth="1" strokeDasharray="3,3" />

              {/* Connecting lines */}
              {networkNodes.map((node) => {
                const isActive = node.id === selectedNodeId;
                return (
                  <g key={node.id}>
                    {/* Background link line */}
                    <line
                      x1={centralNode.x}
                      y1={centralNode.y}
                      x2={node.x}
                      y2={node.y}
                      stroke={isActive ? "#C5A059" : "rgba(255,255,255,0.08)"}
                      strokeWidth={isActive ? "2" : "1"}
                      className="transition-all duration-300"
                    />

                    {/* Animated pulse dot along the link */}
                    <motion.circle
                      r="3.5"
                      fill="#C5A059"
                      initial={{ offset: 0 }}
                      animate={{
                        cx: [centralNode.x, node.x],
                        cy: [centralNode.y, node.y],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3 + Math.random() * 2,
                        ease: "linear",
                      }}
                    />
                  </g>
                );
              })}

              {/* Central HQ node */}
              <g>
                <circle cx={centralNode.x} cy={centralNode.y} r="22" fill="#030405" stroke="#C5A059" strokeWidth="2.5" className="shadow-lg" />
                <circle cx={centralNode.x} cy={centralNode.y} r="8" fill="#C5A059" className="animate-pulse" />
              </g>

              {/* Country Nodes */}
              {networkNodes.map((node) => {
                const isActive = node.id === selectedNodeId;
                return (
                  <g
                    key={node.id}
                    className="cursor-pointer group"
                    onClick={() => setSelectedNodeId(node.id)}
                  >
                    {/* Ring highlight on hover/active */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isActive ? "24" : "16"}
                      fill="rgba(3,4,5,0.9)"
                      stroke={isActive ? "#C5A059" : "rgba(255,255,255,0.15)"}
                      strokeWidth={isActive ? "2" : "1"}
                      className="transition-all duration-300 group-hover:stroke-[#C5A059]"
                    />
                    
                    {/* Internal core dot */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isActive ? "8" : "5"}
                      fill={isActive ? "#C5A059" : "rgba(255,255,255,0.5)"}
                      className="transition-all duration-300 group-hover:fill-[#C5A059]"
                    />

                    {/* Text Label */}
                    <text
                      x={node.x}
                      y={node.y - (isActive ? 32 : 24)}
                      textAnchor="middle"
                      fill={isActive ? "#C5A059" : "rgba(255,255,255,0.4)"}
                      className="text-[9px] font-semibold uppercase tracking-wider select-none transition-colors duration-300 pointer-events-none"
                    >
                      {node.name.split(" ")[0]}
                    </text>
                  </g>
                );
              })}

            </svg>

            {/* Static labels inside graph */}
            <div className="absolute top-6 left-6 text-[8px] font-mono text-white/30 uppercase tracking-[0.2em]">Advisory Mesh v1.04</div>
            <div className="absolute bottom-6 right-6 text-[8px] font-mono text-[#C5A059] uppercase tracking-[0.2em] flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
              100% Verified Partners Only
            </div>

          </div>

          {/* Profile Card details (Right) */}
          <GlowCard className="min-h-[460px]">
            <div className="p-8 md:p-10 flex flex-col justify-between h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                
                {/* Header */}
                <div className="border-b border-white/5 pb-5">
                  <div className="inline-flex items-center gap-2 border border-[#C5A059]/20 bg-[#C5A059]/5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#C5A059] mb-3">
                    {activeNode.name}
                  </div>
                  <h3 className="text-3xl font-serif text-white">{activeNode.specialty}</h3>
                </div>

                {/* Local operators detail grid */}
                <div className="space-y-5">
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Users className="h-4 w-4 text-white/40" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-white/30 block mb-0.5">Audited Developers</span>
                      <strong className="text-sm font-light text-white leading-tight block">{activeNode.developer}</strong>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-4 w-4 text-white/40" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-white/30 block mb-0.5">Retained Legal Counsel</span>
                      <strong className="text-sm font-light text-white leading-tight block">{activeNode.legalDesk}</strong>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Users2 className="h-4 w-4 text-white/40" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-white/30 block mb-0.5">Lead Country Advisory Partner</span>
                      <strong className="text-sm font-light text-white leading-tight block">{activeNode.leadAdvisor}</strong>
                    </div>
                  </div>

                </div>

                {/* Desk contact details */}
                <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#C5A059]" />
                    <span className="text-xs font-mono text-white/60">{activeNode.email}</span>
                  </div>
                  
                  <a
                    href="#contact-section"
                    className="interactive inline-flex items-center gap-2 border border-white/15 bg-white/[0.03] px-5 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                  >
                    Connect with desk
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </GlowCard>

        </div>

      </div>
    </section>
  );
}
