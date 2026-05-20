"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export default function MagneticButton({ children, href, className = "" }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.div
      className={`interactive relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 px-10 py-5 uppercase tracking-[0.2em] text-[10px] font-bold transition-all duration-500 hover:bg-white/10 hover:border-white/50 backdrop-blur-2xl ${className}`}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x, y }}
    >
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <button>{content}</button>;
}
