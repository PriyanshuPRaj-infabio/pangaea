"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 flex items-center justify-between pointer-events-none transition-all duration-700 ${
        scrolled ? "py-4 bg-black/20 backdrop-blur-xl border-b border-white/5" : "py-8"
      }`}
    >
      <div className="flex items-center pointer-events-auto">
        <Link href="/" className="interactive group block">
          <Image
            src="/pangea-logo.png"
            alt="Pangaea Logo"
            width={120}
            height={40}
            className="w-auto h-8 md:h-10 object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>

      <nav className="pointer-events-auto flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-full px-2 py-2 shadow-2xl">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-500 interactive ${
                isActive ? "text-black" : "text-white/60 hover:text-white"
              }`}
            >
              <span className="relative z-10 mix-blend-difference text-white">{link.name}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="pointer-events-auto hidden md:block">
        <Link href="/services#advisory" className="interactive relative group overflow-hidden flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-3 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 hover:border-white/50 hover:bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <span className="relative z-10 transition-colors duration-500 text-white">
            Advisory Tool
          </span>
        </Link>
      </div>
    </motion.header>
  );
}
