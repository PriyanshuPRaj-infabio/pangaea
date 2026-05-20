"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

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
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 md:py-8 flex items-center justify-between pointer-events-none"
    >
      <div className="flex items-center gap-3 pointer-events-auto">
        <Link href="/">
          <Image
            src="/pangea-logo.png"
            alt="Pangaea Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
        </Link>
        <span className="font-sans font-bold tracking-widest uppercase text-sm hidden md:block">
          Pangaea
        </span>
      </div>

      <nav className="pointer-events-auto flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 text-xs uppercase tracking-widest font-medium transition-colors duration-300 ${
                isActive ? "text-white" : "text-white/50 hover:text-white"
              }`}
            >
              {link.name}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="pointer-events-auto hidden md:block">
        <Link href="/services#advisory" className="relative group overflow-hidden flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-xs uppercase tracking-widest transition-all hover:border-white">
          <span className="relative z-10 group-hover:text-black transition-colors duration-500">
            Advisory Tool
          </span>
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
        </Link>
      </div>
    </motion.header>
  );
}
