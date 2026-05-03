

import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "wouter";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollTicker from "@/components/ScrollTicker";
import MorphingParticles from "@/components/MorphingParticles";
import LogoMarquee from "@/components/LogoMarquee";
import { WebGLErrorBoundary } from "@/components/WebGLErrorBoundary";
import {
  HiOutlineColorSwatch,
  HiOutlineCode,
  HiOutlineTrendingUp,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineChip,
} from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Product Design",
    description:
      "End-to-end product design—from research and UX flows to polished UI systems and developer-ready handoff.",
    features: ["User Research & Persona Mapping", "Wireframing & Interactive Prototypes", "Design System Architecture", "Motion & Interaction Design", "Dev-Ready Handoff (Tokens + Zeplin)"],
    tools: ["Figma", "Sketch", "Xd", "Blender", "Spline", "After Effects"],
    href: "/design-agency",
    morphValue: 1,
  },
  {
    id: "02",
    title: "Development",
    description:
      "Robust, scalable products across web and mobile—from elegant UIs to reliable APIs and automated DevOps.",
    features: ["Full-Stack Web Applications", "iOS & Android (Flutter / Native)", "REST & GraphQL API Design", "CI/CD Pipeline & DevOps", "Performance & Core Web Vitals"],
    tools: ["React", "Next.js", "Node", "Flutter", "Docker", "TypeScript"],
    href: "/development-agency",
    morphValue: 2,
  },
  {
    id: "03",
    title: "GTM Strategy",
    description:
      "Data-driven go-to-market for SaaS and AI—clear positioning, smart pricing, and repeatable growth loops.",
    features: ["ICP Definition & Market Positioning", "Pricing Architecture", "Sales Enablement & Playbooks", "Growth Hacking & Demand Gen", "Analytics Dashboards & KPI Tracking"],
    tools: ["HubSpot", "Salesforce", "Google Analytics", "Mixpanel", "Stripe", "Zapier"],
    href: "/gtm-strategy",
    morphValue: 3,
  },
  {
    id: "04",
    title: "Healthcare Apps",
    description:
      "Secure, compliant healthcare software—from telehealth to EHR integrations—built for HIPAA and auditability.",
    features: ["HIPAA-Compliant Architecture", "EHR / EMR Integration (HL7, FHIR)", "Telehealth Platform Development", "Patient Portal & Scheduling", "Clinical Decision Support Tools"],
    tools: ["AWS", "Google Cloud", "FHIR", "HIPAA", "HL7", "Swift"],
    href: "/healthcare-apps",
    morphValue: 4,
  },
  {
    id: "05",
    title: "AI Development",
    description: "Custom AI agents, LLM integration, and predictive models that drive business intelligence.",
    features: ["Custom LLM Agents & Chatbots", "RAG Pipeline Engineering", "Computer Vision Systems", "Predictive Analytics & Forecasting", "AI Strategy & Integration Consulting"],
    tools: ["OpenAI", "Python", "TensorFlow", "LangChain", "Pinecone"],
    href: "/ai-development",
    morphValue: 5,
  },
  {
    id: "06",
    title: "IoT Solutions",
    description: "Connected device ecosystems with secure data transmission and real-time monitoring dashboards.",
    features: ["Sensor & Device Firmware", "Real-Time Data Pipelines", "Edge Computing Deployments", "Secure OTA Firmware Updates", "Industrial Automation Interfaces"],
    tools: ["MQTT", "Raspberry Pi", "Arduino", "Azure IoT", "Zigbee"],
    href: "/iot-development",
    morphValue: 6,
  }
];

const caseStudies = [
  {
    id: "01",
    title: "Clinix AI",
    tags: ["Web Design", "App Design", "AI Development", "GTM"],
    href: "/case-study/clinixAI",
    image: "/images/CaseStudies/clinix/clinixai.jpg",
  },
  {
    id: "02",
    title: "Synergies4",
    tags: ["App Design", "AI Development"],
    href: "/case-study/synergies4",
    image: "/images/CaseStudies/synergies4.jpg",
  },
  {
    id: "03",
    title: "Curehire",
    tags: ["Web Design", "Development"],
    href: "/case-study/curehire",
    image: "/images/CaseStudies/curehire.jpg",
  },
  {
    id: "04",
    title: "OWASP Foundation",
    tags: ["Web Design", "Development"],
    href: "/case-study/owasp",
    image: "/images/CaseStudies/owasp.jpg",
  },
  {
    id: "05",
    title: "Feature",
    tags: ["App Design", "GTM"],
    href: "/case-study/feature",
    image: "/images/CaseStudies/feature.jpg",
  }
];

const testimonials = [
  {
    id: "01",
    quote: "The Dabis Studio team worked with me to build my e-commerce site. Within 90 days of launch, our store was exceeding $100k in monthly revenue.",
    author: "Jay W.",
    role: "Rakanda Gold Coffee",
    size: "large"
  },
  {
    id: "02",
    quote: "We worked with Dabis Studio to redesign our marketing site and SaaS platform, increasing both customer acquisition and retention.",
    author: "Jon H.",
    role: "Keyspace Studio",
    size: "small"
  },
  {
    id: "03",
    quote: "We wanted to build a new radiology staffing platform; with Dabis Studio we were able to design and launch a working MVP in under a month.",
    author: "Mike R.",
    role: "RT Direct",
    size: "small"
  }
];

// Accordion card for the Services section
function AccordionCard({
  service,
  active,
  progress,
  index,
  onClick,
}: {
  service: (typeof services)[0];
  active: boolean;
  progress: number;
  index: number;
  onClick: () => void;
}) {
  const depth = active ? 1 : 0.7;
  const lift = active ? -8 : 0;
  const opacity = active ? 1 : 0.78;
  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl overflow-hidden border transition-[flex,border-color,background,opacity,transform] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] h-full cursor-pointer ${
        active
          ? "flex-[5] border-white/[0.12] bg-gradient-to-br from-secondary/[0.16] via-white/[0.04] to-primary/[0.08] shadow-[0_0_80px_rgba(91,76,245,0.12)]"
          : "flex-[0.24] border-white/[0.05] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.03]"
      }`}
      style={{
        opacity,
        transform: `translateY(${lift}px) scale(${depth})`,
      }}
    >
      {/* Collapsed state — vertical number + title + arrow */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-between py-8 px-2 transition-opacity duration-300 ${
          active ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <span
          className="text-xs font-mono text-white/20 tracking-[0.25em] shrink-0"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          0{index + 1}
        </span>
        <span
          className="text-[10px] font-medium text-white/10 tracking-wider shrink-0 truncate"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", maxHeight: 140 }}
        >
          {service.title}
        </span>
        <div className="size-7 rounded-full border border-white/[0.08] flex items-center justify-center shrink-0">
          <svg className="size-3 text-white/15 rotate-90" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
          </svg>
        </div>
      </div>

      {/* Expanded content */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: 22, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -16, filter: "blur(8px)" }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl font-mono text-white/[0.07] font-light leading-none">
                  0{index + 1}
                </span>
                <div className="size-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center">
                  <svg className="size-4 -rotate-45" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 leading-tight text-white">
                {service.title}
              </h3>
              <p className="text-sm lg:text-base text-foreground/55 leading-relaxed max-w-[340px]">
                {service.description}
              </p>
            </div>

            {/* Feature bullets */}
            <div className="flex flex-col gap-2">
              {service.features.map((feat, fi) => (
                <motion.div
                  key={fi}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + fi * 0.08, duration: 0.42, ease: "easeOut" }}
                  className="flex items-center gap-3 text-sm text-foreground/65"
                >
                  <span className="size-1.5 rounded-full bg-primary/80 shrink-0" />
                  {feat}
                </motion.div>
              ))}
            </div>

            {/* Tools stack */}
            <div>
              <p className="text-[10px] font-semibold text-foreground/20 uppercase tracking-[0.18em] mb-3">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool, ti) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.82, y: 4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.56 + ti * 0.05, duration: 0.32 }}
                    className="px-3 py-1 bg-white/[0.04] rounded-full text-xs border border-white/[0.07] text-foreground/45"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Mouse-tracking spotlight card wrapper
function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    ref.current.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    ref.current.style.setProperty("--spotlight-opacity", "1");
  };
  const onMouseLeave = () => ref.current?.style.setProperty("--spotlight-opacity", "0");
  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={`card-spotlight ${className}`}>
      <div className="spotlight-layer" />
      {children}
    </div>
  );
}

function useCountUp(to: number, delay = 1.0, duration = 1.8) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const obj = { n: 0 };
    const tween = gsap.to(obj, {
      n: to,
      delay,
      duration,
      ease: "power2.out",
      onUpdate() { setVal(Math.round(obj.n)); },
    });
    return () => { tween.kill(); };
  }, [to, delay, duration]);
  return val;
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  // Services accordion state
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [morphProgress, setMorphProgress] = useState(0);

  // Case Studies State
  const [activeCase, setActiveCase] = useState(caseStudies[0]);

  // Cursor label for case studies hover
  const [caseHover, setCaseHover] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Parallax hero orb — native scroll listener (works alongside Lenis)
  const [heroScrollY, setHeroScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setHeroScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Count-up stats (start after subRef entrance at ~delay 0.9s)
  const projectCount = useCountUp(50, 1.1);
  const satisfactionCount = useCountUp(100, 1.2);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance — word-level slide-up stagger
      const words1 = title1Ref.current
        ? Array.from(title1Ref.current.querySelectorAll("[data-word]"))
        : [];
      const words2 = title2Ref.current
        ? Array.from(title2Ref.current.querySelectorAll("[data-word]"))
        : [];

      if (words1.length) {
        gsap.from(words1, {
          y: "110%",
          duration: 1.15,
          ease: "power4.out",
          stagger: 0.08,
          delay: 0.1,
        });
      }
      if (words2.length) {
        gsap.from(words2, {
          y: "110%",
          duration: 1.15,
          ease: "power4.out",
          stagger: 0.07,
          delay: 0.38,
        });
      }
      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.9 }
      );

      // Hero Scroll Effect (Fade out text)
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
            if (title1Ref.current) title1Ref.current.style.opacity = (1 - self.progress * 2).toString();
            if (title2Ref.current) title2Ref.current.style.opacity = (1 - self.progress * 2).toString();
            if (subRef.current) subRef.current.style.opacity = (1 - self.progress * 3).toString();
        }
      });

      // Accordion scroll for Services — pin section, step through cards by scroll progress
      if (containerRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: `+=${services.length * 760}`,
          pin: true,
          scrub: 1.55,
          onUpdate: (self) => {
            const newIndex = Math.min(Math.round(self.progress * (services.length - 1)), services.length - 1);
            setActiveIndex(newIndex);
            setMorphProgress(self.progress * 6.5);
          },
        });
      }

    }, [heroRef, containerRef]);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Visual background for page */}
      <div className="fixed inset-0 bg-background -z-20" />

      {/* Fixed 3D Background - Morphing Particles Component */}
      <WebGLErrorBoundary>
        <MorphingParticles
            progress={morphProgress}
            className="fixed inset-0 -z-10 pointer-events-none"
        />
      </WebGLErrorBoundary>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center pointer-events-none"
        // pointer-events-none allows scroll to pass through if needed, but we have content
      >
        {/* Background "DABISSTUDIO" Text */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none">
          <h2 className="text-[15vw] font-bold text-white/[0.03] whitespace-nowrap tracking-tighter">
            DABISSTUDIO
          </h2>
        </div>

        {/* Light Ray - Top Left — parallax on scroll */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 blur-[100px] z-0 pointer-events-none"
          style={{
            transform: `translate(calc(-50% + ${heroScrollY * 0.08}px), calc(-50% + ${heroScrollY * 0.12}px))`,
            willChange: "transform",
          }}
        />

        <div className="w-main mx-auto z-10 relative h-full flex flex-col pointer-events-auto">
          {/* Headline - Centered with offsets */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-light leading-[1.1] mb-6 tracking-tight relative z-10 w-full max-w-[1200px]">
              <div
                ref={title1Ref}
                className="flex justify-center md:justify-start md:pl-20 gap-4 flex-wrap"
              >
                <span className="word-mask">
                  <span data-word className="inline-block">Building</span>
                </span>
                <span className="word-mask italic font-bold">
                  <span data-word className="inline-block bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">Digital</span>
                </span>
              </div>
              <div
                ref={title2Ref}
                className="flex justify-center md:justify-end md:pr-16 gap-4 flex-wrap overflow-visible"
              >
                <span className="word-mask italic font-bold">
                  <span data-word className="inline-block bg-gradient-to-r from-tertiary to-primary bg-clip-text text-transparent">Solutions</span>
                </span>
                <span className="word-mask">
                  <span data-word className="inline-block">That Matter</span>
                </span>
              </div>
            </h1>
          </div>

          {/* Bottom Row: CTA Left, Stats Right */}
          <div
            ref={subRef}
            className="w-full flex flex-col md:flex-row justify-between items-end pb-12 md:pb-24 gap-10 opacity-0"
          >
            {/* Bottom Left: Description & CTA */}
            <div className="flex flex-col items-start gap-8 max-w-md">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                We empower organizations with AI that turns complex challenges into real-world outcomes.
              </p>
              <Link href="/contact">
                <Button className="text-lg px-8 py-4 rounded-full bg-primary/20 border border-primary/50 hover:bg-primary/30 backdrop-blur-md">
                  Start Your Project
                </Button>
              </Link>
            </div>

            {/* Bottom Right: Stats */}
            <div className="flex gap-8 md:gap-16">
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold flex items-center tabular-nums">
                  {projectCount}<span className="text-primary text-2xl">+</span>
                </div>
                <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 leading-tight">
                  Projects<br/>Delivered
                </div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold flex items-center tabular-nums">
                  {satisfactionCount}<span className="text-primary text-2xl">%</span>
                </div>
                <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 leading-tight">
                  Client<br/>Satisfaction
                </div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold flex items-center">
                  24<span className="text-primary text-2xl">/</span>7
                </div>
                <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 leading-tight">
                  Support<br/>Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Velocity-driven scroll ticker — separates Hero from Services */}
      <ScrollTicker />

      {/* Services Section — Accordion Layout */}
      <section ref={containerRef} className="relative h-screen overflow-hidden bg-transparent">
          <div className="flex h-full px-8 lg:px-16 gap-10 items-center">

          {/* LEFT COLUMN — pinned info panel */}
          <div className="w-[300px] lg:w-[340px] xl:w-[380px] shrink-0 flex flex-col justify-center gap-8">
            {/* Animated orbital orb */}
            <motion.div
              className="relative w-44 h-44 lg:w-52 lg:h-52"
              animate={{ rotate: [0, 6, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Core glow */}
              <div className="absolute inset-[28%] rounded-full bg-primary/25 blur-2xl" />
              <div className="absolute inset-[28%] rounded-full bg-secondary/20 blur-xl" />
              {/* Outer dashed ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/[0.07] animate-[spin_30s_linear_infinite_reverse]" />
              {/* Mid ring with glow */}
              <div className="absolute inset-[12%] rounded-full border border-secondary/25 animate-[spin_14s_linear_infinite]" />
              {/* Inner ring */}
              <div className="absolute inset-[30%] rounded-full border border-primary/35 animate-[spin_9s_linear_infinite]" />
              {/* Orbiting dot */}
              <div className="absolute inset-[10%] rounded-full animate-[spin_14s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 size-2 rounded-full bg-secondary shadow-[0_0_8px_2px_rgba(91,76,245,0.8)]" />
              </div>
            </motion.div>

            {/* Heading */}
            <div>
              <span className="text-[10px] font-semibold text-primary uppercase tracking-[0.22em] mb-3 block">
                What We Do
              </span>
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-4">
                Our Services
              </h2>
              <p className="text-sm text-foreground/45 leading-relaxed">
                Design, engineering, and strategy—unified under one roof to build digital products that scale.
              </p>
            </div>

            {/* Active service indicator */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-xs font-mono text-primary/60">
                    0{activeIndex + 1} / 0{services.length}
                  </span>
                  <p className="text-lg font-semibold mt-1 text-white">
                    {services[activeIndex].title}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Step dots */}
              <div className="flex gap-2 mt-4">
                {services.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.96 }}
                    className={`h-px rounded-full transition-all duration-500 ${
                      i === activeIndex ? "w-8 bg-primary shadow-[0_0_12px_rgba(229,3,57,0.55)]" : "w-3 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — accordion cards */}
          <div className="flex-1 flex gap-3 h-[calc(100vh-6rem)] py-10">
            {services.map((service, index) => (
              <AccordionCard
                key={service.id}
                service={service}
                active={activeIndex === index}
                progress={Math.abs(activeIndex - index)}
                index={index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Work Section - Interactive List & Preview */}
      <section className="py-20 md:py-32 relative z-10 bg-[#050505]/80 backdrop-blur-sm">
        <div className="w-main mx-auto">
          <ScrollReveal variant="3d">
             <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Case <span className="italic text-tertiary">Studies</span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-sm text-right">
                Proven results, measurable impact—explore the transformations we&apos;ve delivered.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row gap-20 items-stretch">
            {/* List — with floating cursor label on hover */}
            <div
              className="flex-1 flex flex-col relative"
              onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
              onMouseEnter={() => setCaseHover(true)}
              onMouseLeave={() => setCaseHover(false)}
            >
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className={`group relative py-10 border-b border-white/10 transition-all duration-300 cursor-none ${
                    activeCase.id === study.id ? "opacity-100" : "opacity-40 hover:opacity-100"
                  }`}
                  onMouseEnter={() => setActiveCase(study)}
                >
                  <Link href={study.href} className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-8 w-full md:w-auto">
                      <span className="text-xl font-mono text-tertiary/80 group-hover:text-primary transition-colors">{study.id}</span>
                      <h3 className="text-3xl font-semibold group-hover:translate-x-2 transition-transform duration-300">{study.title}</h3>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap justify-end">
                      {study.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 text-xs text-foreground/80 bg-white/5 uppercase tracking-wide group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </div>
              ))}

              {/* Floating cursor label */}
              <AnimatePresence>
                {caseHover && (
                  <motion.div
                    className="fixed z-50 pointer-events-none"
                    style={{ left: cursorPos.x + 16, top: cursorPos.y - 20 }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.15 }}
                  >
                    <span className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-lg shadow-primary/30">
                      View Project
                      <svg className="size-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Preview Image */}
            <div className="flex-1 relative h-[400px] lg:h-[600px] hidden lg:block rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeCase.id}
                    src={activeCase.image}
                    alt={activeCase.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
            </div>
          </div>

          <div className="mt-16 text-center">
             <Link href="/work">
                <Button variant="secondary">View All Projects</Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="w-main mx-auto">
          <ScrollReveal variant="3d">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                What our clients <br />
                <span className="italic text-tertiary">say about us</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Large Card (Left) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col justify-between min-h-[400px] md:min-h-[600px] backdrop-blur-sm group hover:border-white/20 transition-colors">
               <div>
                  <div className="text-7xl text-white/10 mb-8 font-serif">“</div>
                  <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light leading-relaxed">
                     {testimonials[0].quote}
                  </p>
               </div>
               <div className="mt-10">
                  <div className="font-bold text-xl text-white">{testimonials[0].author}</div>
                  <div className="text-sm text-white/50">{testimonials[0].role}</div>
               </div>
            </div>

            {/* Stacked Cards (Right) */}
            <div className="flex flex-col gap-6 lg:gap-10">
               {testimonials.slice(1).map((testimonial) => (
                  <div key={testimonial.id} className="bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col justify-between flex-1 backdrop-blur-sm group hover:border-white/20 transition-colors">
                     <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8">
                        "{testimonial.quote}"
                     </p>
                     <div>
                        <div className="font-bold text-lg text-white">{testimonial.author}</div>
                        <div className="text-sm text-white/50">{testimonial.role}</div>
                     </div>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 md:py-32 relative z-10 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[200px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full mx-auto text-center mb-16 px-6">
          <ScrollReveal>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
              Trusted by Industry Leaders
            </h3>
            <p className="text-white/50">Powering Innovation for Companies Worldwide</p>
          </ScrollReveal>
        </div>

        {/* Divider lines with marquee between */}
        <div className="border-t border-white/[0.06] py-10">
          <LogoMarquee />
        </div>
        <div className="border-b border-white/[0.06]" />
      </section>

      {/* CTA Section — animated gradient border */}
      <section className="py-20 md:py-32 relative z-10 px-6">
        <div className="w-full max-w-[1000px] mx-auto">
          {/* Outer wrapper clips the spinning gradient to 1px border */}
          <div className="relative rounded-3xl p-px overflow-hidden">
            {/* Spinning conic gradient — scaled up so corners always cover */}
            <div
              className="cta-border-ring absolute -inset-[120%] pointer-events-none"
              style={{
                background: "conic-gradient(from 0deg, #E50339 0%, #5B4CF5 35%, #A855F7 65%, #E50339 100%)",
              }}
            />

            {/* Inner card sits atop the gradient, leaving 1px visible as border */}
            <div className="relative rounded-[calc(1.5rem-1px)] overflow-hidden bg-[#0A0A0A] p-10 md:p-20 text-center">
              {/* Corner glows */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-tertiary/20 blur-[120px] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <ScrollReveal variant="3d">
                  <h2 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
                    We turn bold ideas into
                  </h2>
                  <h2 className="text-4xl md:text-6xl font-semibold mb-14 leading-tight italic">
                    <span className="bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
                      powerful digital realities.
                    </span>
                  </h2>
                </ScrollReveal>

                <Link href="/contact">
                  <motion.button
                    className="group relative px-10 py-5 bg-primary hover:bg-primary/90 rounded-full transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="relative z-10 text-lg font-semibold text-white flex items-center gap-3">
                      Let&apos;s work together
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </span>
                    {/* Shimmer sweep */}
                    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
