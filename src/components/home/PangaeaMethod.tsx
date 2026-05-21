"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Compass, BookOpen, Scale, FileSignature, TrendingUp, Sparkles } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

gsap.registerPlugin(ScrollTrigger);

interface Step {
  num: string;
  icon: any;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export default function PangaeaMethod() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !triggerRef.current) return;

    // Calculate exact scroll distance dynamically
    const scrollDistance = containerRef.current.scrollWidth - window.innerWidth + 120;

    const pin = gsap.to(containerRef.current, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1.2,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      pin.kill();
    };
  }, { scope: triggerRef });

  const steps: Step[] = [
    {
      num: "01",
      icon: Compass,
      title: "Discovery & Wealth Profiling",
      duration: "Week 01",
      description: "Our advisory desk analyzes your global asset footings, current tax residency liabilities, passport mobility restrictions, and generational goals.",
      deliverables: ["Sovereign Risk Scorecard", "Mobility Mapping", "Target Capital Analysis"],
    },
    {
      num: "02",
      icon: BookOpen,
      title: "Global Market Intelligence",
      duration: "Weeks 02-03",
      description: "Pangaea's global intelligence team models yield comparisons, historical asset appreciation curves, and regulatory safety markers across target hubs.",
      deliverables: ["Customized Yield Matrix", "Appreciation Forecasts", "Due Diligence Dossiers"],
    },
    {
      num: "03",
      icon: Scale,
      title: "Legal Structures & Compliance",
      duration: "Weeks 04-05",
      description: "Attorneys and wealth structurers build tax-sheltered offshore corporate shells, trust registries, and golden visa filing documentation.",
      deliverables: ["Cross-Border Tax Opinions", "Holding Shell Registrations", "Visa Intake Verification"],
    },
    {
      num: "04",
      icon: FileSignature,
      title: "Asset Acquisition & Closings",
      duration: "Weeks 06-08",
      description: "We negotiate local transactions, coordinate cross-border escrow compliance, execute transactions, and file official residency dossiers.",
      deliverables: ["Title Deeds & Registration", "Residency Approvals", "Escrow Escutcheon Logs"],
    },
    {
      num: "05",
      icon: TrendingUp,
      title: "Portfolio Expansion",
      duration: "Ongoing Advisory",
      description: "Regular evaluations match portfolio expansion opportunities with shifting taxation laws, secondary visa requirements, and exit strategies.",
      deliverables: ["Quarterly Capital Reports", "Secondary Asset Options", "Continuous Compliance Reviews"],
    },
  ];

  return (
    <div ref={triggerRef} className="relative h-screen bg-transparent overflow-hidden z-20">
      
      {/* Viewport chamber */}
      <div className="flex h-full items-center px-6 md:px-12 lg:px-24">
        
        {/* Moving horizontal track */}
        <div ref={containerRef} className="flex gap-8 items-center will-change-transform">
          
          {/* Slide 1: Editorial Title Card */}
          <div className="w-[85vw] max-w-[460px] shrink-0 pr-8">
            <div className="inline-flex items-center gap-2 border border-[#C5A059]/10 bg-[#C5A059]/5 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-6 border-gold-glow">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              Structured Wealth Framework
            </div>
            <h2 className="text-4xl font-light leading-[1.1] text-white sm:text-5xl md:text-6xl">
              The <br />
              <span className="text-gold-gradient font-serif italic">Pangaea Method</span>
            </h2>
            <p className="mt-6 text-sm font-light leading-relaxed text-white/50">
              Our proprietary, McKinsey-style wealth intelligence framework designed to secure, structure, and expand sovereign capital globally. Scroll vertically to trace our step-by-step advisory flow.
            </p>
            <div className="mt-12 flex items-center gap-3 text-[10px] font-mono tracking-widest text-[#C5A059] uppercase select-none">
              <span>Scroll Down to Pan</span>
              <div className="w-10 h-px bg-[#C5A059]/30 animate-pulse" />
            </div>
          </div>

          {/* Slides 2 to 6: Methodology Steps */}
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="w-[80vw] max-w-[400px] shrink-0">
                <GlowCard className="p-8 border border-white/10 bg-[#07111F]/30 backdrop-blur-2xl min-h-[460px] flex flex-col justify-between hover:border-[#C5A059]/30 transition-colors duration-700 shadow-2xl">
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start border-b border-white/5 pb-4 mb-6">
                      <div className="p-3 rounded-xl bg-[#C5A059]/5 border border-[#C5A059]/10">
                        <Icon className="h-6 w-6 text-[#C5A059]" />
                      </div>
                      <span className="text-2xl font-serif text-white/20 font-bold">{step.num}</span>
                    </div>

                    {/* Meta info */}
                    <span className="text-[9px] font-mono text-[#C5A059]/80 font-bold uppercase tracking-widest">{step.duration}</span>
                    <h3 className="text-xl font-light text-white mt-1.5 mb-4 leading-tight">{step.title}</h3>
                    
                    <p className="text-xs font-light leading-relaxed text-white/50">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="pt-6 border-t border-white/5 mt-6">
                    <span className="text-[8px] uppercase tracking-widest text-white/40 block mb-3 font-semibold">Key Deliverables</span>
                    <div className="space-y-2">
                      {step.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[10px] text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/40" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}
