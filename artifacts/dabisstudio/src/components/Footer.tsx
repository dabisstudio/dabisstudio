import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Footer() {
  const [timeState, setTimeState] = useState<{time: string, period: string}>({ time: "", period: "" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      const fullTime = now.toLocaleTimeString("en-US", options);
      // fullTime is typically "10:12:18 PM", split it to separate time and period
      const parts = fullTime.split(' ');
      if (parts.length === 2) {
        setTimeState({ time: parts[0], period: parts[1] });
      } else {
        setTimeState({ time: fullTime, period: "" });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full relative overflow-hidden bg-[#151515] pt-20 pb-10">
      {/* Background Gradients */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-tertiary/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-20">

          {/* Left Column: Email, Social, Location, Time */}
          <div className="flex flex-col justify-between max-w-md">
            <div>
               <a href="mailto:hello@dabisstudio.com" className="text-2xl font-light hover:text-white/80 transition-colors">
                  hello@dabisstudio.com
               </a>
               <div className="mt-4">
                  <a
                  href="https://www.linkedin.com/company/dabisstudio/"
                  target="_blank"
                  className="flex items-center text-sm border-b border-white/30 pb-0.5 w-max hover:text-white/80 hover:border-white/80 transition-all font-light"
                  >
                  Linkedin
                  <svg className="size-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                  </a>
               </div>
            </div>

            <div className="mt-20 lg:mt-32">
               <div className="flex gap-4 text-sm font-light text-white/60 mb-2">
                  <span>Based in Atlanta, GA</span>
                  <span className="opacity-50">Serving clients globally</span>
               </div>
               <div className="text-6xl sm:text-7xl md:text-8xl font-medium tracking-tight tabular-nums leading-none">
                  {timeState.time || "00:00:00"}
                  <span className="text-2xl sm:text-3xl md:text-4xl ml-2 font-light text-white/50">
                     {timeState.period || "PM"}
                  </span>
               </div>
            </div>
          </div>

          {/* Right Column: Links Grid */}
          <div className="flex gap-10 sm:gap-20 text-sm font-light">
            <div className="flex flex-col gap-4">
               <h3 className="text-white/40 mb-2">Services</h3>
               <Link href="/design-agency" className="hover:text-white/80 transition-colors">Product Design</Link>
               <Link href="/development-agency" className="hover:text-white/80 transition-colors">Development</Link>
               <Link href="/gtm-strategy" className="hover:text-white/80 transition-colors">GTM Strategy</Link>
               <Link href="/healthcare-apps" className="hover:text-white/80 transition-colors">Healthcare Apps</Link>
               <Link href="/ai-development" className="hover:text-white/80 transition-colors">AI Development</Link>
               <Link href="/iot-development" className="hover:text-white/80 transition-colors">IoT Development</Link>
            </div>

            <div className="flex flex-col gap-4">
               <h3 className="text-white/40 mb-2">Solutions</h3>
               <Link href="/voice-agents" className="hover:text-white/80 transition-colors">Voice Agents</Link>
               <Link href="/emotion-ai" className="hover:text-white/80 transition-colors">Sentiment AI</Link>
            </div>

            <div className="flex flex-col gap-4">
               <h3 className="text-white/40 mb-2">Resources</h3>
               <Link href="/resources/vendor-matrix" className="hover:text-white/80 transition-colors">AI Vendor Matrix</Link>
               <Link href="/case-study/clinixAI" className="hover:text-white/80 transition-colors">Clinix AI</Link>
               <Link href="/case-study/synergies4" className="hover:text-white/80 transition-colors">Synergies4</Link>
               <Link href="/case-study/curehire" className="hover:text-white/80 transition-colors">Curehire</Link>
               <Link href="/case-study/feature" className="hover:text-white/80 transition-colors">Feature</Link>
               <Link href="/case-study/owasp" className="hover:text-white/80 transition-colors">OWASP</Link>
               <Link href="/contact" className="hover:text-white/80 transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex justify-between items-center text-xs text-white/30 font-light">
           <p>Dabis Enterprise LLC, © 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
