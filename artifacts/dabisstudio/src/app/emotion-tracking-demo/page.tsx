

import React, { useState } from "react";
import ThreeParticles from "@/components/ThreeParticles";
import { WebGLErrorBoundary } from "@/components/WebGLErrorBoundary";
import { motion, AnimatePresence } from "framer-motion";

export default function EmotionTrackingDemoPage() {
  const [activeTab, setActiveTab] = useState<"facial" | "text">("text");

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <WebGLErrorBoundary><ThreeParticles /></WebGLErrorBoundary>

      <main className="relative z-10 pt-32 mobile:pt-40 md:pt-48 pb-40 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Emotion Tracking<br/>
              <span className="text-secondary font-bold italic">Demo</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-4xl mx-auto">
              Understand emotions at scale. Test our AI that detects sentiment from faces and text.
            </p>
          </motion.div>

          <div className="w-full max-w-5xl">
            {/* Toggle Controls */}
            <div className="flex justify-center mb-12">
              <div className="relative inline-flex bg-[#1a1d2e] border border-white/10 rounded-2xl p-1.5 gap-1.5 w-full max-w-[90vw] sm:max-w-none sm:w-auto">
                <motion.div
                  className="absolute top-1.5 bottom-1.5 bg-secondary rounded-xl shadow-lg shadow-secondary/20"
                  initial={false}
                  animate={{
                    left: activeTab === "facial" ? "6px" : "50%",
                    width: "calc(50% - 9px)",
                    x: activeTab === "text" ? "3px" : "0px"
                   }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />

                <button
                  onClick={() => setActiveTab("facial")}
                  className={`relative z-10 flex items-center justify-center gap-2.5 px-3 sm:px-8 py-3 rounded-xl transition-colors duration-200 flex-1 sm:flex-none sm:w-[230px] ${activeTab === 'facial' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                >
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>
                  <span className="font-semibold text-sm sm:text-base whitespace-nowrap">Facial Expressions</span>
                </button>

                <button
                  onClick={() => setActiveTab("text")}
                  className={`relative z-10 flex items-center justify-center gap-2.5 px-3 sm:px-8 py-3 rounded-xl transition-colors duration-200 flex-1 sm:flex-none sm:w-[230px] ${activeTab === 'text' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                >
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="4 7 4 4 20 4 20 7"></polyline>
                    <line x1="9" x2="15" y1="20" y2="20"></line>
                    <line x1="12" x2="12" y1="4" y2="20"></line>
                  </svg>
                  <span className="font-semibold text-sm sm:text-base whitespace-nowrap">Text Analysis</span>
                </button>
              </div>
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
              {activeTab === "text" ? (
                <motion.div
                  key="text"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8"
                >
                  <div className="space-y-4 sm:space-y-6 w-full">
                    <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 w-full shadow-xl">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-secondary" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <polyline points="4 7 4 4 20 4 20 7"></polyline>
                          <line x1="9" x2="15" y1="20" y2="20"></line>
                          <line x1="12" x2="12" y1="4" y2="20"></line>
                        </svg>
                        Text Emotion Analysis
                      </h3>
                      <div className="space-y-4">
                        <textarea
                          placeholder="Enter text to analyze emotional language, sentiment, and intent...  Example: 'I'm really excited about this new project! It's going to be challenging, but I think we can make something amazing together.'"
                          className="w-full h-48 bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all"
                        ></textarea>
                        <button
                          disabled
                          className="group relative overflow-hidden bg-secondary text-black px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:bg-secondary/80 disabled:opacity-70 disabled:cursor-not-allowed w-full flex items-center justify-center gap-2"
                        >
                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                            <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                            <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                            <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                            <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                          </svg>
                          Analyze Text (Demo Mode)
                        </button>
                        <p className="text-sm text-center text-gray-500">
                          Powered by Hume AI & OpenAI GPT-5 &bull; 53 emotional dimensions
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6 w-full">
                    <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-12 text-center h-full flex flex-col items-center justify-center w-full shadow-xl">
                      <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                         <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-secondary" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                            <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                            <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                            <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                            <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                         </svg>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3">AI-Powered Emotion Analysis</h3>
                      <p className="text-base text-gray-400 max-w-md px-4 mb-6">
                        Enter text to see comprehensive emotional analysis with sentiment, intent, and 53-dimensional emotion detection.
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <span className="text-xs font-medium px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20">Hume AI</span>
                        <span className="text-xs font-medium px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20">OpenAI GPT-5</span>
                        <span className="text-xs font-medium px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20">53 Emotions</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="facial"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex justify-center"
                >
                   <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/5 rounded-2xl p-12 text-center w-full max-w-3xl shadow-xl min-h-[400px] flex flex-col items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
                        <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 w-12 h-12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                          <circle cx="12" cy="13" r="4"></circle>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Facial Expression Tracking</h3>
                      <p className="text-gray-400 max-w-md mb-8">
                        This demo requires camera access permissions and is currently in preview mode.
                      </p>
                      <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors text-sm font-medium">
                        Request Camera Access
                      </button>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </main>
    </div>
  );
}
