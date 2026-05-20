"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full flex flex-col pt-32 min-h-screen bg-[#050505] text-white overflow-hidden">
      
      {/* Our Mission */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-5xl mx-auto text-center">
        <h2 className="font-cursive text-6xl md:text-8xl mb-16">Our Mission</h2>
        <div className="space-y-8 text-lg md:text-2xl font-light text-white/80 leading-relaxed text-left md:text-center">
          <p>
            Inspired by the supercontinent Pangaea that once unified the Earth, we challenge the notion that real estate must be limited by borders. In today’s interconnected world, property is no longer just a physical space — it’s a strategic tool for mobility, security, and generational wealth creation.
          </p>
          <p>
            Historically, real estate has been one of the most reliable stores of value — anchoring legacies and portfolios alike. As cross-border mobility expands and global wealth redistributes, the need for seamless, intelligent international property investment has never been greater.
          </p>
          <p>
            Our platform is built to help investors navigate this new reality. Whether you're venturing into your first global acquisition or are an experienced investor in pursuit of high-return markets, Pangaea Realty offers the guidance, infrastructure, and intelligence to act decisively and strategically.
          </p>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="relative px-6 md:px-12 py-24 md:py-32 bg-black border-y border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-50" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="font-cursive text-5xl md:text-7xl mb-16 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/70 font-light text-lg">
            <div className="space-y-4">
              <p>
                <strong className="text-white font-normal">Global accessibility</strong> — real estate should be borderless, allowing anyone, anywhere, to invest with confidence.
              </p>
              <div className="w-8 h-[1px] bg-white/20" />
            </div>
            
            <div className="space-y-4">
              <p>
                <strong className="text-white font-normal">Trust and transparency</strong> are at the heart of everything we do, from due diligence to client communication.
              </p>
              <div className="w-8 h-[1px] bg-white/20" />
            </div>

            <div className="space-y-4">
              <p>
                We embrace <strong className="text-white font-normal">innovation</strong> to streamline the real estate experience, making it faster, simpler, and smarter.
              </p>
              <div className="w-8 h-[1px] bg-white/20" />
            </div>

            <div className="space-y-4">
              <p>
                Our <strong className="text-white font-normal">minimalist approach</strong> ensures every detail is refined, every interaction purposeful.
              </p>
              <div className="w-8 h-[1px] bg-white/20" />
            </div>

            <div className="space-y-4">
              <p>
                We think like <strong className="text-white font-normal">investors</strong>, crafting offerings that align with long-term goals across continents.
              </p>
              <div className="w-8 h-[1px] bg-white/20" />
            </div>

            <div className="space-y-4">
              <p>
                We operate with <strong className="text-white font-normal">cultural respect and legal compliance</strong> in every market we enter. And finally, we commit to <strong className="text-white font-normal">sustainability and longevity</strong> — choosing partners, properties, and practices that build enduring value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="px-6 md:px-12 py-32 max-w-7xl mx-auto w-full">
        <h2 className="font-cursive text-5xl md:text-7xl mb-24 text-center">Meet the Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 perspective-[2000px]">
          {[
            { name: "Ridhima Sabharwal", role: "CEO & Founder" },
            { name: "Rohan Kukreja", role: "CTO" }
          ].map((member, i) => (
            <motion.div
              key={i}
              className="group relative"
              whileHover={{ rotateY: i === 0 ? 5 : -5, rotateX: 2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Image Placeholder with cinematic feel */}
              <div className="w-full aspect-[3/4] relative bg-white/5 overflow-hidden rounded-xl border border-white/10 mb-8 filter grayscale group-hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 font-light tracking-widest uppercase text-xs rotate-90">
                  Portrait
                </div>
                {/* Simulated lighting effect on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700 pointer-events-none" />
              </div>
              
              <div className="text-center md:text-left" style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-3xl font-light mb-2">{member.name}</h3>
                <p className="text-white/50 uppercase tracking-widest text-sm font-bold">{member.role}</p>
                
                <a href="#" className="inline-block mt-6 text-xs uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
