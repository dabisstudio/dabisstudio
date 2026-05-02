

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "wouter";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import MorphingParticles from "@/components/MorphingParticles";
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
    tools: ["Figma", "Sketch", "Xd", "Blender", "Spline", "After Effects"],
    href: "/design-agency",
    morphValue: 1, // Cube
  },
  {
    id: "02",
    title: "Development",
    description:
      "Robust, scalable products across web and mobile—from elegant UIs to reliable APIs and automated DevOps.",
    tools: ["React", "Next.js", "Node", "Flutter", "Docker", "TypeScript"],
    href: "/development-agency",
    morphValue: 2, // Code
  },
  {
    id: "03",
    title: "GTM Strategy",
    description:
      "Data-driven go-to-market for SaaS and AI—clear positioning, smart pricing, and repeatable growth loops.",
    tools: ["HubSpot", "Salesforce", "Google Analytics", "Mixpanel", "Stripe", "Zapier"],
    href: "/gtm-strategy",
    morphValue: 3, // Graph
  },
  {
    id: "04",
    title: "Healthcare Apps",
    description:
      "Secure, compliant healthcare software—from telehealth to EHR integrations—built for HIPAA and auditability.",
    tools: ["AWS", "Google Cloud", "FHIR", "Hipaa", "HL7", "Swift"],
    href: "/healthcare-apps",
    morphValue: 4, // DNA
  },
  {
    id: "05",
    title: "AI Development",
    description: "Custom AI agents, LLM integration, and predictive models that drive business intelligence.",
    tools: ["OpenAI", "Python", "TensorFlow", "LangChain", "Pinecone"],
    href: "/ai-development",
    morphValue: 5, // Star
  },
  {
    id: "06",
    title: "IoT Solutions",
    description: "Connected device ecosystems with secure data transmission and real-time monitoring dashboards.",
    tools: ["MQTT", "Raspberry Pi", "Arduino", "Azure IoT", "Zigbee"],
    href: "/iot-development",
    morphValue: 6, // Shield
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

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  // Services & 3D State
  const containerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // We use a ref for morphProgress to avoid re-renders of the whole page,
  // but we need to pass it to the Canvas.
  // Wait, React Three Fiber components can be reactive. Let's use state for the prop.
  // Ideally, for 60fps scroll scrub, we might want to bypass React state,
  // but let's try state first for simplicity.
  const [morphProgress, setMorphProgress] = useState(0);

  // Case Studies State
  const [activeCase, setActiveCase] = useState(caseStudies[0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.fromTo(
        title1Ref.current,
        { opacity: 0, x: 150 },
        { opacity: 1, x: 0, duration: 1.5, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        title2Ref.current,
        { opacity: 0, x: -150 },
        { opacity: 1, x: 0, duration: 1.5, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
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

      // Horizontal Scroll for Services
      const servicesSection = servicesRef.current;
      if (servicesSection && containerRef.current) {
         const totalWidth = servicesSection.scrollWidth - window.innerWidth + 200; // Extra buffer

         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: containerRef.current,
               start: "top top",
               end: `+=${totalWidth}`,
               pin: true,
               scrub: 0.5, // dampen for smoothness
               onUpdate: (self) => {
                   // Map scroll progress (0 to 1) to Morph Progress (0 to 6)
                   // We have 6 items, so 0->1 should take us from Shape 0 (sphere) -> Shape 6 (shield) ?
                   // Actually,
                   // 0.0 - 0.1: Sphere -> Cube (Morph 0->1)

                   // Let's simple map 0-1 to 0-6
                   const p = self.progress * 6.5; // go slightly past 6 to ensure completion
                   setMorphProgress(p);
               }
            }
         });

         tl.to(servicesSection, {
            x: - (servicesSection.scrollWidth - window.innerWidth + 100),
            ease: "none",
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

        {/* Light Ray - Top Left */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 blur-[100px] -translate-x-1/2 -translate-y-1/2 z-0" />

        <div className="w-main mx-auto z-10 relative h-full flex flex-col justify-center pointer-events-auto">
          {/* Headline - Centered with offsets */}
          <div className="flex flex-col items-center justify-center flex-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-light leading-tight mb-6 tracking-tight relative z-10 w-full max-w-[1200px]">
              <div
                ref={title1Ref}
                className="opacity-0 flex justify-center md:justify-start md:pl-20"
              >
                Building <span className="italic font-bold ml-4 bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">Digital</span>
              </div>
              <div
                ref={title2Ref}
                className="opacity-0 flex justify-center md:justify-end md:pr-20"
              >
                <span className="italic font-bold mr-4 bg-gradient-to-r from-tertiary to-primary bg-clip-text text-transparent">Solutions</span> That Matter
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
                <div className="text-3xl md:text-4xl font-bold flex items-center">
                  50<span className="text-tertiary text-2xl">+</span>
                </div>
                <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 leading-tight">
                  Projects<br/>Delivered
                </div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold flex items-center">
                  100<span className="text-tertiary text-2xl">%</span>
                </div>
                <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 leading-tight">
                  Client<br/>Satisfaction
                </div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold flex items-center">
                  24<span className="text-tertiary text-2xl">/</span>7
                </div>
                <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1 leading-tight">
                  Support<br/>Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Spacer to separate Hero and Services */}
      <div className="h-[20vh]" />

      {/* Services Section */}
      {/* Horizontal Scroll Services Section */}
      <section ref={containerRef} className="relative h-screen flex items-center overflow-hidden bg-transparent">
         {/* Section Header */}
         <div className="absolute top-20 left-20 z-10 pointer-events-none">
            <h2 className="text-5xl font-semibold mb-6">Our Services</h2>
            <p className="max-w-md text-foreground/60">
               We offer comprehensive digital solutions that transform your business and drive innovation across every touchpoint.
            </p>
         </div>

         {/* Horizontal Track */}
         <div ref={servicesRef} className="flex gap-10 pl-[40vw] pr-20 items-center h-full w-max">
            {services.map((service, index) => (
               <div key={index} className="w-[80vw] sm:w-[500px] h-[600px] bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 flex flex-col justify-between shrink-0 hover:border-primary/40 transition-colors group">
                  <div>
                     <div className="flex justify-between items-start mb-10">
                        <span className="text-4xl font-mono opacity-40">0{index + 1}</span>
                        <div className="size-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                           <svg className="size-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg>
                        </div>
                     </div>
                     <h3 className="text-4xl font-semibold mb-6 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                     <p className="text-lg text-foreground/70 leading-relaxed mb-10">
                        {service.description}
                     </p>
                  </div>

                  <div>
                     <h4 className="text-sm font-semibold text-foreground/40 uppercase tracking-widest mb-4">Tools & Tech</h4>
                     <div className="flex flex-wrap gap-2">
                        {service.tools.map(tool => (
                           <span key={tool} className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/5 text-foreground/60">{tool}</span>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
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
            {/* List */}
            <div className="flex-1 flex flex-col">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className={`group relative py-10 border-b border-white/10 transition-all duration-300 cursor-pointer ${
                    activeCase.id === study.id ? "opacity-100" : "opacity-40 hover:opacity-100"
                  }`}
                  onMouseEnter={() => setActiveCase(study)}
                >
                  <Link href={study.href} className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-8 w-full md:w-auto">
                      <span className="text-xl font-mono text-tertiary/80">{study.id}</span>
                      <h3 className="text-3xl font-semibold">{study.title}</h3>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap justify-end">
                      {study.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 text-xs text-foreground/80 bg-white/5 uppercase tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </div>
              ))}
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
         <div className="w-full max-w-[1400px] mx-auto text-center px-6">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Trusted by Industry Leaders</h3>
            <p className="text-white/60 mb-20">Powering Innovation for Companies Worldwide</p>

            {/* Horizon Curve Container */}
            <div className="relative w-full h-[200px] md:h-[300px] flex justify-center items-center">

               {/* Glow effect behind the curve */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

               {/* Curved Path Visualization (Subtle) */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[150%] h-[800px] rounded-[50%] border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

               {/* Logo Track - Manually positioned for curve effect */}
               <div className="relative z-10 flex gap-10 md:gap-20 items-end justify-center h-20 -mt-20">
                  <img src="/images/aws.svg" alt="AWS" className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/images/microsoft.svg" alt="Microsoft" className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity -mb-4" />
                  <img src="/images/ibm.svg" alt="IBM" className="h-10 md:h-14 opacity-70 hover:opacity-100 transition-opacity -mb-8" />
                  {/* Placeholder for missing logos with text fallback */}
                  <span className="text-xl font-bold text-white/70 -mb-10 hover:text-white transition-colors">TOYOTA</span>
                  <span className="text-xl font-bold text-white/70 -mb-10 hover:text-white transition-colors">OWASP</span>
                  {/* Right side curve up */}
                  <img src="/images/google-cloud.svg" alt="Google Cloud" className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity -mb-8" />
                  <span className="text-lg font-bold text-white/70 -mb-4 hover:text-white transition-colors">Lowe&apos;s</span>
                  <span className="text-lg font-bold text-white/70 hover:text-white transition-colors">Cognizant</span>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-20 md:py-32 relative z-10 px-6">
        <div className="w-full max-w-[1000px] mx-auto">
           <div className="relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 p-10 md:p-20 text-center">
              {/* Purple Glow Background */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-tertiary/20 blur-[100px] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                 <h2 className="text-4xl md:text-6xl font-semibold mb-10 leading-tight">
                    We turn bold ideas into <br/>
                    <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">powerful digital realities.</span>
                 </h2>

                 <Link href="/contact">
                    <button className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/10 transition-all duration-300">
                       <span className="text-lg font-medium flex items-center gap-2">
                          Let&apos;s work together
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                       </span>
                    </button>
                 </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
