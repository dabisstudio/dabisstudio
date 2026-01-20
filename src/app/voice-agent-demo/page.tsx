"use client";

import React, { useState } from "react";
import VoiceSphere from "@/components/VoiceSphere";
import { motion, AnimatePresence } from "framer-motion";

export default function VoiceAgentDemoPage() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-[#E50339]/30">

      {/* Subtle Global Background (Optional, keeping it very dark/clean) */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-[#050505] to-[#050505] pointer-events-none" />

      <main className="relative z-10 pt-32 md:pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[70vh]">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              Meet <span className="italic text-[#E50339]">Dabis</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light">
              Your AI-powered guide to Dabis Tech. Ask about our services, case studies, technologies, and meet our team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-2xl"
          >
             {/* Main Card */}
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">

               {/* Card Status / Header */}
              <div className="text-center mb-10 relative z-10">
                <AnimatePresence mode="wait">
                    {isActive ? (
                        <motion.div
                            key="listening"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-[#E50339] text-sm uppercase tracking-widest font-medium flex items-center justify-center gap-2"
                        >
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E50339] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E50339]"></span>
                            </span>
                            Listening...
                        </motion.div>
                    ) : (
                        <motion.div
                            key="ready"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-white/40 text-sm uppercase tracking-widest font-medium"
                        >
                            Ready to chat with Dabis
                        </motion.div>
                    )}
                </AnimatePresence>
              </div>

              {/* Visualization Container */}
              <div className="flex items-center justify-center mb-12 h-64 md:h-80 relative z-10">
                 <VoiceSphere isActive={isActive} />
              </div>

              {/* Interaction Elements */}
              <div className="flex items-center justify-center relative z-10">
                 <AnimatePresence mode="wait">
                    {!isActive ? (
                        <motion.button
                            key="start-btn"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsActive(true)}
                            className="bg-white text-black hover:bg-gray-200 transition-colors px-8 py-4 rounded-full font-medium flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        >
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z"></path>
                            <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z"></path>
                        </svg>
                        Start Conversation
                        </motion.button>
                    ) : (
                        <motion.button
                            key="stop-btn"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsActive(false)}
                            className="bg-[#151515] border border-[#E50339]/50 text-[#E50339] hover:bg-[#E50339]/10 transition-colors px-8 py-4 rounded-full font-medium flex items-center gap-3"
                        >
                            <span className="w-3 h-3 bg-[#E50339] rounded-sm"></span>
                            End Conversation
                        </motion.button>
                    )}
                 </AnimatePresence>
              </div>

            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-24 max-w-4xl w-full text-center"
          >
            <h3 className="text-xl font-medium mb-8 text-white/90">Experience AI-Powered Voice Conversations</h3>
            <p className="text-white/50 mb-12 max-w-2xl mx-auto font-light">
              Dabis is trained on Dabis Studio&apos;s services, case studies, and team expertise. Experience natural, real-time voice interactions powered by Hume&apos;s empathic AI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              {[
                  { title: "Empathic AI", sub: "Powered by Hume EVI" },
                  { title: "24/7 Availability", sub: "Always ready to assist" },
                  { title: "Custom Training", sub: "Expert on our work" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#E50339]/30 transition-colors group">
                    <div className="font-medium mb-1 text-white group-hover:text-[#E50339] transition-colors">{item.title}</div>
                    <div className="text-white/40 font-light">{item.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
