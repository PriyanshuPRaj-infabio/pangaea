"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  return (
    <div className="w-full flex flex-col pt-32 min-h-screen bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Left Side: Form */}
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-cursive text-5xl md:text-7xl mb-6"
          >
            Begin the conversation.
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl font-light mb-4"
          >
            Send Us a Message
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/50 mb-12 font-light"
          >
            Share a few details — we will respond within one business day.
          </motion.p>

          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input 
                  type="text" 
                  id="firstName"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                  placeholder="First Name"
                />
                <label 
                  htmlFor="firstName"
                  className="absolute left-0 top-3 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white"
                >
                  First Name
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full" />
              </div>
              
              <div className="relative group">
                <input 
                  type="text" 
                  id="lastName"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                  placeholder="Last Name"
                />
                <label 
                  htmlFor="lastName"
                  className="absolute left-0 top-3 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white"
                >
                  Last Name
                </label>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full" />
              </div>
            </div>

            <div className="relative group">
              <input 
                type="email" 
                id="email"
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                placeholder="Email"
              />
              <label 
                htmlFor="email"
                className="absolute left-0 top-3 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white"
              >
                Email
              </label>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full" />
            </div>

            <div className="relative group pt-4">
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer resize-none"
                placeholder="Message"
              />
              <label 
                htmlFor="message"
                className="absolute left-0 top-6 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white"
              >
                Message
              </label>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full" />
            </div>

            <div className="flex flex-wrap gap-6 pt-8">
              <MagneticButton className="bg-white text-black hover:bg-white/90">
                Submit Form
              </MagneticButton>
              <MagneticButton>
                Refer Someone
              </MagneticButton>
            </div>
          </motion.form>
        </div>

        {/* Right Side: Info */}
        <div className="lg:pl-24 lg:border-l border-white/10 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="text-3xl font-light mb-4">Contact Us</h2>
            <p className="text-white/50 font-light mb-12">Speak with an advisor directly.</p>
            
            <div className="space-y-8">
              <div className="group">
                <p className="text-xs uppercase tracking-widest text-white/30 font-bold mb-2">Email</p>
                <a href="mailto:business@pangaearealty.co" className="text-xl md:text-2xl font-light hover:text-white transition-colors relative inline-block">
                  business@pangaearealty.co
                  <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </div>
              
              <div className="group">
                <p className="text-xs uppercase tracking-widest text-white/30 font-bold mb-2">Phone</p>
                <a href="tel:+918377837307" className="text-xl md:text-2xl font-light hover:text-white transition-colors relative inline-block">
                  +91 8377 837 307
                  <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </div>

              <div className="pt-12">
                <p className="text-xs uppercase tracking-widest text-white/30 font-bold mb-6">Socials</p>
                <div className="flex gap-6">
                  <a href="#" className="uppercase tracking-widest text-sm font-medium border-b border-white/30 pb-1 hover:border-white transition-colors">Instagram</a>
                  <a href="#" className="uppercase tracking-widest text-sm font-medium border-b border-white/30 pb-1 hover:border-white transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
