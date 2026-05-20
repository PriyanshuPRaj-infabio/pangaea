"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useSpring(0, { stiffness: 400, damping: 28, mass: 0.1 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 28, mass: 0.1 });
  
  const trailX = useSpring(0, { stiffness: 100, damping: 30, mass: 1 });
  const trailY = useSpring(0, { stiffness: 100, damping: 30, mass: 1 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains('interactive');
        
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, trailX, trailY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Glow Trail */}
      <motion.div
        className="fixed top-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none z-[40] mix-blend-screen opacity-10"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          filter: "blur(100px)",
          background: "radial-gradient(circle, rgba(197,160,89,0.3) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[60]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: "rgba(197, 160, 89, 0.5)",
        }}
        animate={{
          width: isHovered ? 64 : 0,
          height: isHovered ? 64 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[60] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 8 : 12,
          height: isHovered ? 8 : 12,
        }}
      />
    </>
  );
}
