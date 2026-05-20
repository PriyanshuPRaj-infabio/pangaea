"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import KineticText from "@/components/ui/KineticText";

export default function Contact() {
  return (
    <div className="w-full flex flex-col pt-40 min-h-screen bg-[#020202] text-white relative overflow-hidden">
      
      {/* Cinematic Environmental Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none translate-y-1/2 -translate-x-1/3 mix-blend-screen" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        
        {/* Left Side: Form */}
        <div>
          <KineticText text="Begin the" splitBy="char" className="font-cursive text-6xl md:text-8xl mb-2 glow-text" />
          <KineticText text="conversation." splitBy="char" delay={0.2} className="font-cursive text-6xl md:text-8xl mb-16 glow-text" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="glass-panel p-10 md:p-14 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            <h2 className="text-2xl font-light mb-4 text-white">Send Us a Message</h2>
            <p className="text-white/50 mb-12 font-light text-sm uppercase tracking-widest">
              Share a few details — we will respond within one business day.
            </p>

            <form className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="firstName"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer text-lg"
                    placeholder="First Name"
                  />
                  <label 
                    htmlFor="firstName"
                    className="absolute left-0 top-3 text-white/40 text-sm uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-white"
                  >
                    First Name
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-700 group-focus-within:w-full" />
                </div>
                
                <div className="relative group">
                  <input 
                    type="text" 
                    id="lastName"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer text-lg"
                    placeholder="Last Name"
                  />
                  <label 
                    htmlFor="lastName"
                    className="absolute left-0 top-3 text-white/40 text-sm uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-white"
                  >
                    Last Name
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-700 group-focus-within:w-full" />
                </div>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer text-lg"
                  placeholder="Email"
                />
                <label 
                  htmlFor="email"
                  className="absolute left-0 top-3 text-white/40 text-sm uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-white"
                >
                  Email
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-700 group-focus-within:w-full" />
              </div>

              <div className="relative group pt-4">
                <textarea 
                  id="message"
                  rows={3}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer resize-none text-lg"
                  placeholder="Message"
                />
                <label 
                  htmlFor="message"
                  className="absolute left-0 top-6 text-white/40 text-sm uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-white"
                >
                  Message
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-700 group-focus-within:w-full" />
              </div>

              <div className="flex flex-wrap gap-6 pt-8">
                <MagneticButton className="bg-white text-black hover:bg-white/90">
                  Submit Form
                </MagneticButton>
                <MagneticButton>
                  Refer Someone
                </MagneticButton>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Right Side: Info */}
        <div className="lg:pl-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className="text-4xl font-light mb-4">Contact Us</h2>
            <p className="text-white/50 font-light mb-16 text-lg">Speak with an advisor directly.</p>
            
            <div className="space-y-12">
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-3 flex items-center gap-4">
                  <span className="w-8 h-px bg-white/20 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
                  Email
                </p>
                <a href="mailto:business@pangaearealty.co" className="text-2xl md:text-3xl font-light hover:text-white transition-colors relative inline-block pl-12">
                  business@pangaearealty.co
                </a>
              </div>
              
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-3 flex items-center gap-4">
                  <span className="w-8 h-px bg-white/20 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
                  Phone
                </p>
                <a href="tel:+918377837307" className="text-2xl md:text-3xl font-light hover:text-white transition-colors relative inline-block pl-12">
                  +91 8377 837 307
                </a>
              </div>

              <div className="pt-16">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-8">Socials</p>
                <div className="flex gap-8">
                  <a href="#" className="uppercase tracking-[0.2em] text-xs font-medium text-white/60 hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="uppercase tracking-[0.2em] text-xs font-medium text-white/60 hover:text-white transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
