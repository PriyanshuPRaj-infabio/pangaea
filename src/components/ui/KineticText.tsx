"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface KineticTextProps {
  text: string;
  className?: string;
}

export default function KineticText({ text, className = "" }: KineticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Simple word split, could use SplitText in a real project but this works well
  const words = text.split(" ");

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(".word");
    
    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 40,
        rotateX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [text]);

  return (
    <div ref={containerRef} className={`flex flex-wrap gap-[0.25em] ${className}`} style={{ perspective: "1000px" }}>
      {words.map((word, i) => (
        <span
          key={i}
          className="word inline-block origin-bottom"
          style={{ transformStyle: "preserve-3d" }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
