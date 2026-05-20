"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroGlobe from "@/components/3d/HeroGlobe";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const globeY = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <footer ref={footerRef} className="relative w-full overflow-hidden border-t border-white/10 bg-[#020202] pt-40 pb-12 px-6 md:px-12 min-h-screen flex flex-col justify-end">
      
      {/* Globe Background Fragment */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-[80vh] pointer-events-none opacity-40 mix-blend-screen overflow-hidden"
        style={{ y: globeY, opacity }}
      >
        <div className="absolute top-1/2 left-0 w-full h-[150%] translate-y-1/4">
          <HeroGlobe />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 mb-24">
        <div className="col-span-1 lg:col-span-2">
          <h2 className="font-cursive text-6xl md:text-8xl mb-6 glow-text text-white">Pangaea</h2>
          <p className="text-2xl text-white/70 max-w-md font-light">
            Borders are a state of mind.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="uppercase tracking-[0.2em] text-xs font-bold text-white/40 border-b border-white/10 pb-4">
            Explore
          </h3>
          <ul className="space-y-4 text-sm tracking-widest uppercase">
            {["Home", "About Us", "Services"].map((item, i) => (
              <li key={i}>
                <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} className="group relative inline-flex items-center text-white/70 hover:text-white transition-colors duration-300">
                  <span className="relative z-10">{item}</span>
                  <div className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="uppercase tracking-[0.2em] text-xs font-bold text-white/40 border-b border-white/10 pb-4">
            Connect
          </h3>
          <ul className="space-y-6 text-sm tracking-wide font-light">
            <li>
              <a
                href="mailto:business@pangaearealty.co"
                className="group block"
              >
                <span className="text-white/50 text-xs uppercase tracking-widest block mb-1">Email</span>
                <span className="text-lg text-white/80 group-hover:text-white transition-colors">business@pangaearealty.co</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+918377837307"
                className="group block"
              >
                <span className="text-white/50 text-xs uppercase tracking-widest block mb-1">Phone</span>
                <span className="text-lg text-white/80 group-hover:text-white transition-colors">+91 8377 837 307</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[10px] text-white/40 uppercase tracking-[0.2em] relative z-10">
        <p>© {new Date().getFullYear()} Pangaea Realty. All Rights Reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
