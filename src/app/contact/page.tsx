"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import KineticText from "@/components/ui/KineticText";
import GlowCard from "@/components/ui/GlowCard";
import { Mail, Phone, Globe, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full flex flex-col pt-44 min-h-screen bg-transparent text-white relative overflow-hidden z-10">
      
      {/* Environmental Auras */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[180px] pointer-events-none mix-blend-screen -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[150px] pointer-events-none translate-y-1/2 -translate-x-1/3 mix-blend-screen" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        
        {/* Left Column: Form Section */}
        <div className="space-y-12">
          <div>
            <div className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.02] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059] rounded-full mb-6" >
              <MessageSquare className="h-4.5 w-4.5" />
              Direct Communication Desk
            </div>
            <h1 className="text-balance text-4xl font-light leading-tight text-white md:text-7xl">
              Begin the <br /><span className="text-gold-gradient font-serif italic">Conversation</span>
            </h1>
            <p className="mt-4 text-sm font-light text-white/50 leading-relaxed max-w-md">
              Share details about your sovereign mobility goals or target yields—our lead advisory desk will respond within one business day.
            </p>
          </div>

          <GlowCard className="p-8 md:p-12 relative overflow-hidden">
            <h2 className="text-xl font-light mb-2 text-white">Send Us a Message</h2>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-10">All queries are handled with absolute confidentiality.</p>
            
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="firstName"
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#C5A059] transition-colors peer text-base font-light"
                    placeholder="First Name"
                    required
                  />
                  <label 
                    htmlFor="firstName"
                    className="absolute left-0 top-3 text-white/30 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#C5A059]"
                  >
                    First Name
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-700 group-focus-within:w-full" />
                </div>
                
                <div className="relative group">
                  <input 
                    type="text" 
                    id="lastName"
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#C5A059] transition-colors peer text-base font-light"
                    placeholder="Last Name"
                    required
                  />
                  <label 
                    htmlFor="lastName"
                    className="absolute left-0 top-3 text-white/30 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#C5A059]"
                  >
                    Last Name
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-700 group-focus-within:w-full" />
                </div>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#C5A059] transition-colors peer text-base font-light"
                  placeholder="Email"
                  required
                />
                <label 
                  htmlFor="email"
                  className="absolute left-0 top-3 text-white/30 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#C5A059]"
                >
                  Email Address
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-700 group-focus-within:w-full" />
              </div>

              <div className="relative group pt-4">
                <textarea 
                  id="message"
                  rows={3}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#C5A059] transition-colors peer resize-none text-base font-light"
                  placeholder="Message"
                  required
                />
                <label 
                  htmlFor="message"
                  className="absolute left-0 top-6 text-white/30 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-6 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#C5A059]"
                >
                  Message details
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-700 group-focus-within:w-full" />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-white text-black font-semibold text-xs rounded-full tracking-wider hover:bg-white/90 transition-all duration-300 shadow-2xl flex items-center gap-2 group-hover:scale-105"
                >
                  Submit Form
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </GlowCard>
        </div>

        {/* Right Column: Corporate Contacts */}
        <div className="lg:pl-16 flex flex-col justify-center space-y-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-serif text-white tracking-wide">Direct Access</h2>
              <p className="text-sm font-light text-white/40 mt-1">Global advisory correspondence details</p>
            </div>
            
            <div className="space-y-10">
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-3 flex items-center gap-3">
                  <Mail className="h-3.5 w-3.5" />
                  Email Desk
                </p>
                <a href="mailto:business@pangaearealty.co" className="text-xl md:text-2xl font-light hover:text-[#C5A059] transition-colors duration-300">
                  business@pangaearealty.co
                </a>
              </div>
              
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-3 flex items-center gap-3">
                  <Phone className="h-3.5 w-3.5" />
                  Telephone Desk
                </p>
                <a href="tel:+918377837307" className="text-xl md:text-2xl font-light hover:text-[#C5A059] transition-colors duration-300">
                  +91 8377 837 307
                </a>
              </div>

              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-3 flex items-center gap-3">
                  <Globe className="h-3.5 w-3.5" />
                  Primary Office
                </p>
                <p className="text-lg font-light text-white/70 leading-relaxed">
                  Pangaea Advisory, Level 18, Marina One East Tower,<br />Marina Way, Singapore 018936
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-6">Digital Networks</p>
              <div className="flex gap-8">
                <a href="#" className="uppercase tracking-[0.2em] text-xs font-semibold text-white/40 hover:text-white transition-colors duration-300">Instagram</a>
                <a href="#" className="uppercase tracking-[0.2em] text-xs font-semibold text-white/40 hover:text-white transition-colors duration-300">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
