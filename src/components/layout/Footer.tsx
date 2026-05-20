"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#050505] pt-24 pb-12 px-6 md:px-12">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px] mix-blend-overlay opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 lg:col-span-2">
          <h2 className="font-cursive text-5xl md:text-7xl mb-6">Pangaea</h2>
          <p className="text-xl text-white/70 max-w-md font-light">
            Borders are a state of mind.
          </p>
        </div>

        <div>
          <h3 className="uppercase tracking-widest text-xs font-bold text-white/50 mb-6">
            Explore
          </h3>
          <ul className="space-y-4 text-sm tracking-wide">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase tracking-widest text-xs font-bold text-white/50 mb-6">
            Connect
          </h3>
          <ul className="space-y-4 text-sm tracking-wide">
            <li>
              <a
                href="mailto:business@pangaearealty.co"
                className="hover:text-primary transition-colors"
              >
                business@pangaearealty.co
              </a>
            </li>
            <li>
              <a
                href="tel:+918377837307"
                className="hover:text-primary transition-colors"
              >
                +91 8377 837 307
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Pangaea Realty. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
