"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface KineticTextProps {
  text: string;
  className?: string;
  splitBy?: "word" | "char";
  delay?: number;
}

export default function KineticText({ text, className = "", splitBy = "word", delay = 0 }: KineticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const segments = splitBy === "word" ? text.split(" ") : text.split("");

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(".segment");
    
    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 60,
        rotateX: -45,
        filter: "blur(12px)",
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 1.5,
        stagger: splitBy === "word" ? 0.08 : 0.03,
        ease: "power4.out",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [text, splitBy, delay]);

  return (
    <div ref={containerRef} className={`flex flex-wrap ${splitBy === 'word' ? 'gap-[0.25em]' : ''} ${className}`} style={{ perspective: "1000px" }}>
      {segments.map((segment, i) => (
        <span
          key={i}
          className={`segment inline-block origin-bottom ${segment === " " ? "w-[0.25em]" : ""}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {segment === " " ? "\u00A0" : segment}
        </span>
      ))}
    </div>
  );
}
