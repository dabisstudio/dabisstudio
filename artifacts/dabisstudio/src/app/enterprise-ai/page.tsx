

import { motion } from "framer-motion";
import ThreeParticles from "@/components/ThreeParticles";
import { WebGLErrorBoundary } from "@/components/WebGLErrorBoundary";
import ScrollReveal from "@/components/ScrollReveal";

import { Link } from "wouter";
import { useState } from "react";
import { BsArrowRight, BsShieldCheck, BsCpu, BsGlobe, BsCodeSlash } from "react-icons/bs";
import { HiOutlineCube, HiOutlineLockClosed, HiOutlineServer, HiOutlineScale } from "react-icons/hi";

export default function EnterpriseAIPage() {
  return (
    <div className="min-h-screen bg-[#151515] text-white overflow-hidden font-sans selection:bg-purple-500/30">

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20">
        <WebGLErrorBoundary><ThreeParticles shapeIndex={0} color="#8b5cf6" className="absolute inset-0 z-0 pointer-events-none" /></WebGLErrorBoundary>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6"
          >
            Building <span className="italic font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">Enterprise AI</span>
            <br />
            that Makes Sense
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            Deploy voice, search, and workflow agents in controlled environments—VPC, on-prem, or edge—with governance and zero-training guarantees.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
             <Link href="/contact" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200" />
                <div className="relative flex items-center bg-black rounded-full px-8 py-4 leading-none">
                   <span className="text-white font-medium mr-2">Talk to Our Team</span>
                   <BsArrowRight className="text-white group-hover:translate-x-1 transition-transform" />
                </div>
             </Link>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-4 text-sm font-medium text-white/40"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
               <BsGlobe className="text-violet-400" /> Deploy Anywhere
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
               <BsShieldCheck className="text-violet-400" /> RBAC + Audit Trails
            </div>
             <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
               <BsCpu className="text-violet-400" /> Provider Flexibility
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Deployment Pillars Section */}
      <section className="py-32 relative z-10 px-6">
        <div className="w-full max-w-[1400px] mx-auto">
           <ScrollReveal>
             <h2 className="text-3xl font-light mb-16 text-white/50">Enterprise AI Deployment</h2>
           </ScrollReveal>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                   id: "01",
                   title: "Security & Compliance",
                   icon: HiOutlineLockClosed,
                   desc: "Deploy with strict isolation across VPC, hybrid, or on-prem. Encrypt data in transit and at rest, with audit logs and private networking."
                },
                {
                   id: "02",
                   title: "IP Ownership",
                   icon: HiOutlineCube,
                   desc: "You own prompts, agents, workflows, and outputs. Dabis does not train on your data or resell metadata. Set retention and export rules."
                },
                {
                   id: "03",
                   title: "Framework, Not a Tool",
                   icon: BsCodeSlash,
                   desc: "Build composable systems for voice, search, workflows, and decisions. Reuse modules across teams and evolve without rewrites."
                },
                {
                   id: "04",
                   title: "Model-Agnostic Runtime",
                   icon: HiOutlineServer,
                   desc: "Swap model providers without changing your product logic. Run hosted, open-source, or private models to meet latency, cost, or compliance needs."
                }
              ].map((pillar, i) => (
                  <ScrollReveal key={pillar.id} delay={i * 0.1} className="w-full">
                     <div className="h-full bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors group">
                       <div className="text-4xl font-light text-white/20 mb-6 group-hover:text-violet-500/50 transition-colors">{pillar.id}</div>
                       <h3 className="text-xl font-semibold mb-4">{pillar.title}</h3>
                       <p className="text-sm text-white/60 leading-relaxed">{pillar.desc}</p>

                       <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-3 gap-2">
                          {/* Placeholder iconography for 'Security Controls' etc */}
                          {[1,2,3].map(n => (
                             <div key={n} className="h-1 bg-white/10 rounded-full" />
                          ))}
                       </div>
                    </div>
                 </ScrollReveal>
              ))}
           </div>
        </div>
      </section>

      {/* 3. Edge Deployment Section */}
      <section className="py-32 bg-gradient-to-b from-[#151515] to-black relative overflow-hidden">
         {/* Visual: Globe Effect (simplified with particles or image) */}
         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-[800px] pointer-events-none">
             <WebGLErrorBoundary><ThreeParticles shapeIndex={0} color="#6366f1" className="w-full h-full opacity-50" /></WebGLErrorBoundary>
         </div>

         <div className="w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="hidden lg:block">
               {/* Spacer for the globe visual on the left */}
            </div>

            <div>
               <ScrollReveal>
                  <p className="text-sm text-indigo-400 font-bold tracking-wider uppercase mb-4">Edge Deployment</p>
                  <h2 className="text-4xl md:text-5xl font-medium mb-6">Edge AI, Lower Latency</h2>
                  <p className="text-white/60 mb-10 leading-relaxed text-lg">
                     Place inference and orchestration closer to users without moving sensitive data. Keep regional control and route workloads across edge, VPC, and on-prem.
                  </p>

                  <div className="space-y-4">
                     {[
                        "Lower round-trip latency for voice and real-time UX",
                        "Regional execution with data-residency boundaries",
                        "Hybrid routing: edge inference + VPC/on-prem orchestration"
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 border border-white/10 rounded-xl bg-white/5">
                           <div className="flex-shrink-0 size-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                              <HiOutlineScale />
                           </div>
                           <span className="text-sm font-light">{item}</span>
                        </div>
                     ))}
                  </div>

                  <div className="mt-10">
                     <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                        Explore Edge Deployment
                     </Link>
                  </div>
               </ScrollReveal>
            </div>
         </div>
      </section>

      {/* 4. Comparison Section */}
      <section className="py-32 px-6">
         <div className="w-full max-w-[1400px] mx-auto bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden relative">

            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 relative z-10">
               <div>
                  <p className="text-xs font-bold tracking-wider text-white/40 uppercase mb-4">Compare</p>
                  <h2 className="text-3xl md:text-4xl font-medium mb-4">Compare Enterprise AI Solutions</h2>
                  <p className="text-white/50 text-sm">See how Dabis stacks up on security, IP ownership, deployment, and real-time UX.</p>
               </div>
               <div className="flex items-center gap-4">
                   <div className="px-6 py-2 bg-indigo-600 rounded-full text-sm font-medium shadow-lg shadow-indigo-500/20">Compare Vendors</div>
                   <span className="text-xs text-white/30 hidden md:block">Select vendors to compare</span>
               </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
               {/* 1. Antimatter */}
               <div className="aspect-[4/3] bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center p-6 hover:bg-white/10 transition-colors">
                  <img src="/images/dabis-logo.png" alt="Dabis Studio" className="mb-4 opacity-90 object-contain h-6 w-auto" />
                  <span className="text-[10px] text-white/30 uppercase tracking-widest text-center">Dabis Studio</span>
               </div>

               {/* Competitor Logos */}
               {[
                  { name: "Kore.ai", logo: "/images/kore-ai.svg" },
                  { name: "Intercom Fin", logo: "/images/intercom.svg" },
                  { name: "Zendesk AI Agents", logo: "/images/zendesk.svg" },
                  { name: "ServiceNow Now Assist", logo: "/images/servicenow.svg" },
                  { name: "Microsoft Copilot Studio", logo: "/images/microsoft.svg" },
                  { name: "Google Vertex AI Agent Builder", logo: "/images/google-cloud.svg" },
                  { name: "Amazon Q Business", logo: "/images/aws.svg" },
                  { name: "IBM watsonx Assistant", logo: "/images/ibm.svg" },
                  { name: "Cognigy.AI", logo: "/images/cognigy.svg" },
                  { name: "Moveworks", logo: "/images/moveworks.svg" },
                  { name: "Sierra", logo: "/images/sierra.svg" },
               ].map((vendor) => (
                  <div key={vendor.name} className="aspect-[4/3] bg-[#0A0A0A] border border-white/5 rounded-xl flex flex-col items-center justify-center p-6 hover:border-white/20 transition-colors group">
                     <div className="h-8 w-auto relative mb-4 flex items-center justify-center">
                        <img src={vendor.logo} alt={vendor.name} className="w-auto h-full max-w-[100px] opacity-50 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" />
                     </div>
                     <span className="text-[10px] text-white/20 uppercase tracking-widest text-center group-hover:text-white/40">{vendor.name}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Framework & Deployments Section (Interactive List) */}
      <FrameworkSection />

      {/* 6. Trusted Leaders Section (Rotating Horizon) */}
      <TrustedLeadersSection />

      {/* 7. CTA Section */}
      <CTASection />

    </div>
  );
}

function FrameworkSection() {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const items = [
    {
      id: "01",
      title: "FRAMEWORK CORE",
      description: "Compose agents, retrieval, tools, and deterministic UI into end-to-end systems. Reuse patterns across products and teams."
    },
    {
      id: "02",
      title: "DEPLOYMENT OPTIONS",
      description: "Run in public cloud, private cloud, hybrid, on-prem, or containers. Support Kubernetes and VPC isolation."
    },
    {
      id: "03",
      title: "PROVIDER ABSTRACTION",
      description: "Switch model and embedding providers as requirements change. Optimize for cost, latency, and policy constraints."
    },
    {
      id: "04",
      title: "GOVERNANCE LAYER",
      description: "Apply RBAC, audit logs, encryption, and retention policies per environment. Keep sensitive traffic on private networks."
    },
    {
      id: "05",
      title: "EDGE FOOTPRINT",
      description: "Optionally deploy to Akamai / Linode regions for low latency and residency. Keep high-availability routing near users."
    }
  ];

  return (
    <section className="py-32 px-6 bg-black">
      <div className="w-full max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-light text-white/50 mb-4 tracking-wide">DABIS AI FRAMEWORK & ENTERPRISE DEPLOYMENTS</h2>
        <p className="text-white/40 text-sm mb-20">A concise view of how Dabis runs in production deployments.</p>

        <div className="flex flex-col">
           {items.map((item, index) => (
              <div
                 key={item.id}
                 className={`group py-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center transition-all duration-300 ${
                    activeItem === index ? "opacity-100" : "opacity-40 hover:opacity-100"
                 }`}
                 onMouseEnter={() => setActiveItem(index)}
              >
                 <div className="flex items-baseline gap-6 mb-4 md:mb-0">
                    <span className="text-sm font-mono text-white/50">{item.id}</span>
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white">{item.title}</h3>
                 </div>
                 <p className="max-w-md text-right text-white/80 leading-relaxed text-sm md:text-base">
                    {item.description}
                 </p>
              </div>
           ))}
           <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}

function TrustedLeadersSection() {
  // Use existing logos
  const logos = [
     { name: "AWS", src: "/images/aws.svg" },
     { name: "Microsoft", src: "/images/microsoft.svg" },
     { name: "IBM", src: "/images/ibm.svg" },
     { name: "Google Cloud", src: "/images/google-cloud.svg" },
     { name: "ServiceNow", src: "/images/servicenow.svg" },
     { name: "Zendesk", src: "/images/zendesk.svg" },
     { name: "Kore.ai", src: "/images/kore-ai.svg" },
     { name: "Intercom", src: "/images/intercom.svg" },
     // Text fallbacks for visuals in image
     { name: "Lowe's", text: "Lowe's" },
     { name: "Cognizant", text: "Cognizant" },
     { name: "Trimble", text: "Trimble" },
     { name: "Toyota", text: "TOYOTA" },
     { name: "OWASP", text: "OWASP" },
     { name: "e2open", text: "e2open" }
  ];

  // Duplicate for seamless loop
  const allItems = [...logos, ...logos];

  return (
    <section className="py-32 bg-black overflow-hidden relative">
       {/* Content */}
       <div className="text-center relative z-10 px-6 mb-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Trusted by Industry Leaders</h2>
          <p className="text-white/50">Powering Innovation for Companies Worldwide</p>
       </div>

       {/* Horizon Curve & Rotating Elements */}
       <div className="relative w-full h-[300px] flex justify-center items-start overflow-visible">

          {/* The Giant Circle (Horizon) */}
          <div className="absolute top-0 w-[150vw] h-[150vw] md:w-[200vw] md:h-[200vw] max-w-[3000px] max-h-[3000px] bg-[#050505] rounded-[50%] border-t border-white/20 shadow-[0_-10px_100px_rgba(59,130,246,0.1)] flex justify-center">

             {/* Glow Line */}
             <div className="absolute -top-[1px] w-full h-full rounded-[50%] border-t border-indigo-500/30 blur-sm pointer-events-none" />

             {/* Rotating Container */}
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
               className="w-full h-full absolute inset-0 rounded-[50%]"
             >
                {allItems.map((item, i) => {
                   const count = allItems.length;
                   // Spread items along the top arc (e.g., -60deg to 60deg)?
                   // No, spread along the entire circle for continuous rotation
                   const angle = (360 / count) * i;
                   return (
                      <div
                         key={i}
                         className="absolute top-0 left-1/2 -translate-x-1/2 origin-bottom h-[50%]" // h-50% puts the bottom of this div at the center of the circle? No.
                         // Actually, standard circular positioning:
                         // We want the item to be at the circumference.
                         // Rotate parent, item is at top.
                         style={{
                            height: "50%",
                            transformOrigin: "bottom center",
                            transform: `rotate(${angle}deg)`
                         }}
                      >
                         {/* The Item itself (pushed to the top edge) */}
                         <div
                           className="relative -top-8 md:-top-10 flex items-center justify-center -rotate-90" // Counter-rotate if needed, but since the parent rotates, the logos will rotate WITH the horizon.
                           // Wait, if the horizon is a circle, "up" changes.
                           // In the image, logos are upright relative to the curve normal.
                           // So they SHOULD rotate with the curve.
                           // But they might need to be offset?
                           // Let's try simple text/image first.
                           style={{ transform: `rotate(${-angle}deg)` }} // Wait, do we want them always upright? The image shows them following the curve normal.
                           // Image shows them PERPENDICULAR to the curve radius.
                           // So valid orientation is just sitting on the line.
                         >
                            {/* We need to cancel the parent rotation for the ITEM itself only if we want them upright?
                                Look at image: "Lowe's" is tilted. "Toyota" is tilted.
                                They ARE rotated along the curve.
                                So no counter-rotation needed on the item itself relative to its spoke.
                                But the container rotates, so the logo at the top (12 o'clock) is flat.
                                Logo at 2 o'clock is tilted.
                            */}
                            {item.src ? (
                               <img src={item.src} alt={item.name} className="h-6 md:h-8 opacity-70 w-auto hover:opacity-100 transition-opacity invert brightness-0" />
                            ) : (
                               <span className="text-lg md:text-xl font-bold text-white/70 hover:text-white transition-opacity whitespace-nowrap">{item.text}</span>
                            )}
                         </div>
                      </div>
                   )
                })}
             </motion.div>
          </div>

          {/* Overlay Gradient to fade edges */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
       </div>
    </section>
  );
}

function CTASection() {
   return (
      <section className="py-20 md:py-32 px-6 bg-black">
         <div className="w-full max-w-[1400px] mx-auto relative rounded-3xl overflow-hidden flex items-center bg-[#050505] border border-white/15 p-5 sm:p-20 md:p-[7.5rem] pt-28 sm:pt-44">

            {/* Background Canvas Effect (ThreeParticles) */}
            <div className="absolute inset-0 saturate-50">
               <WebGLErrorBoundary><ThreeParticles shapeIndex={0} color="#5b50d6" className="w-full h-full opacity-60" /></WebGLErrorBoundary>
            </div>

            {/* Content */}
            <div className="relative z-10 pb-10 sm:pb-0 w-full">
               <h2 className="text-2xl sm:text-4xl mb-10 leading-tight">
                  We turn bold ideas into <br />
                  <WavyText text="powerful digital realities." />
               </h2>

               <Link href="/contact">
                  <button type="button" className="px-8 py-4 bg-[#5b50d6] hover:bg-[#4a41b5] text-white rounded-full flex items-center transition-all shadow-[0_0_20px_rgba(91,80,214,0.3)] hover:shadow-[0_0_30px_rgba(91,80,214,0.5)] group">
                     <span className="sm:text-xl flex items-center gap-5 font-medium">
                        Let's work together
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="size-6 sm:size-8 group-hover:translate-x-1 transition-transform" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                           <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                        </svg>
                     </span>
                  </button>
               </Link>
            </div>
         </div>
      </section>
   )
}

function WavyText({ text }: { text: string }) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: [0, 10, 0],
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        repeat: Infinity,
        repeatDelay: 2,
      } as any,
    },
    hidden: {
      opacity: 0,
      y: 0,
    },
  };

  return (
    <motion.span
      className="inline-flex flex-wrap font-semibold"
      style={{ lineHeight: 1.1 }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className="inline-block tracking-normal">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
