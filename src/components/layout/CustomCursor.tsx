"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Glow Trail */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-white/5 rounded-full pointer-events-none z-50 mix-blend-screen blur-xl"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          mass: 0.5,
        }}
      />
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[60] mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovered ? 12 : 4),
          y: mousePosition.y - (isHovered ? 12 : 4),
          width: isHovered ? 24 : 8,
          height: isHovered ? 24 : 8,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.2,
        }}
      />
    </>
  );
}
