import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import {
  HiOutlineSwatch,
  HiOutlineCodeBracket,
  HiOutlineArrowTrendingUp,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineCpuChip,
  HiOutlineCurrencyDollar,
  HiOutlineChatBubbleLeftRight,
  HiCube,
  HiMicrophone,
  HiMagnifyingGlass
} from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";

const services = [
  {
    title: "Product Design",
    href: "/design-agency",
    icon: HiOutlineSwatch,
    items: [
      "User Research & Strategy",
      "UX Flows & Wireframes",
      "UI Systems & Prototypes",
      "Design Ops & Dev Handoff",
    ],
  },
  {
    title: "Development",
    href: "/development-agency",
    icon: HiOutlineCodeBracket,
    items: [
      "Frontend Platforms (React / Next)",
      "Backend APIs & Microservices (Node)",
      "Mobile & Cross-platform (Flutter)",
      "CI/CD & Cloud Ops (Docker)",
    ],
  },
  {
    title: "GTM Strategy",
    href: "/gtm-strategy",
    icon: HiOutlineArrowTrendingUp,
    items: [
      "ICP & Segmentation",
      "Positioning, Narrative & Messaging",
      "Pricing & Packaging",
      "Demand Gen & Content Engine",
    ],
  },
  {
    title: "AI Development",
    href: "/ai-development",
    icon: HiOutlineSparkles,
    items: [
      "LLM Apps & Agents (RAG / Tools)",
      "Fine-tuning & Prompt Optimization",
      "Model Evals, Guardrails & Monitoring",
      "Vision, NLP & Speech Pipelines",
    ],
  },
  {
    title: "Healthcare Apps",
    href: "/healthcare-apps",
    icon: HiOutlineHeart,
    items: [
      "HIPAA & PHI Compliance",
      "Telehealth & Patient Portals",
      "EHR Integrations (FHIR / HL7)",
      "Audit Logging & Access Controls",
    ],
  },
  {
    title: "IoT Development",
    href: "/iot-development",
    icon: HiOutlineCpuChip,
    items: [
      "Embedded Firmware & Drivers",
      "BLE / Zigbee / LoRa Connectivity",
      "MQTT Ingestion & Stream Processing",
      "Edge AI & OTA Update Pipelines",
    ],
  },
];

const dabisProducts = [
  {
    title: "Dabis Framework",
    href: "/enterprise-ai",
    icon: HiCube,
    description:
      "Enterprise-grade AI framework for secure, model-agnostic deployment",
  },
  {
    title: "Dabis Voice",
    href: "/voice-agent-demo",
    icon: HiMicrophone,
    description: "AI-powered voice agent and assistant",
  },
  {
    title: "Dabis Search",
    href: "/dabis/search",
    icon: HiMagnifyingGlass,
    description: "Next-generation AI search with generative UI",
  },
  {
    title: "Dabis Finance",
    href: "#",
    icon: HiOutlineCurrencyDollar,
    description: "Intelligent financial analysis and insights",
    comingSoon: true,
  },
  {
    title: "Dabis Chat",
    href: "#",
    icon: HiOutlineChatBubbleLeftRight,
    description: "Advanced conversational AI interface",
    comingSoon: true,
  },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolling up or down
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down & past threshold
      } else {
        setIsVisible(true); // Scrolling up
      }

      setIsScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          onComplete: () => {
             // Clear all inline styles so CSS classes can take over completely
             gsap.set(headerRef.current, { clearProps: "all" });
          }
        }
      );
    }
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 z-50 left-0 w-full transform transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled ? "py-4 bg-[#151515]/80 backdrop-blur-md" : "py-6"
      }`}
    >
      <div className="w-main mx-auto relative z-20">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img
              alt="Dabis Studio Logo"
              width={120}
              height={30}
              className="w-24 md:w-32 h-auto object-contain"
              src="/images/dabis-logo.png"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center text-sm font-medium">
              <li>
                <Link
                  href="/work"
                  className="px-5 py-2.5 flex items-center text-white/70 hover:text-white transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="px-5 py-2.5 flex items-center text-white/70 hover:text-white transition-colors"
                >
                  Company
                </Link>
              </li>
              <li
                className="relative group"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`px-5 py-2.5 flex items-center gap-1 cursor-pointer transition-colors ${activeDropdown === "services" ? "text-white bg-white/5 rounded-full" : "text-white/70 hover:text-white"}`}>
                  Services
                </div>

                {/* Services Mega Menu */}
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[1000px] perspective-1000"
                    >
                      <div className="bg-[#151515] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex">

                        {/* Left Panel: Featured Work */}
                        <div className="w-[300px] relative p-6 flex flex-col justify-end group/card overflow-hidden">
                          {/* Background Image with Overlay */}
                          <div className="absolute inset-0 z-0">
                             <img
                               src="/images/CaseStudies/clinix/clinixai.jpg"
                               alt="Clinix AI"
                               className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                          </div>

                          <div className="relative z-10 text-white">
                             <div className="flex items-center gap-2 mb-2 text-xs font-semibold tracking-wider uppercase text-primary-400">
                                <span className="size-1.5 rounded-full bg-primary-400 animate-pulse" />
                                Solution
                             </div>
                             <h4 className="text-xl font-bold mb-1">Clinix AI</h4>
                             <p className="text-xs text-white/70 mb-4 line-clamp-2">
                               AI-Powered Clinical Documentation & Coding
                             </p>
                             <Link href="/case-study/clinixAI" className="inline-flex items-center text-xs font-medium text-white hover:text-primary-300 transition-colors group/link">
                               View Case Study
                               <BsArrowRight className="ml-1 transition-transform group-hover/link:translate-x-1" />
                             </Link>
                          </div>
                        </div>

                        {/* Right Panel: Services Grid */}
                        <div className="flex-1 p-6 bg-[#151515]">
                           <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                              {services.map((service) => (
                                 <Link
                                   key={service.title}
                                   href={service.href}
                                   className="group flex flex-col gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors -mx-3"
                                 >
                                    <div className="flex items-center gap-3">
                                       <service.icon className="size-5 text-white/60 group-hover:text-primary-400 transition-colors" />
                                       <h3 className="text-sm font-semibold text-white group-hover:text-white transition-colors">
                                          {service.title}
                                       </h3>
                                    </div>
                                    <div className="pl-8 text-xs text-white/40 space-y-1">
                                       {service.items.slice(0, 2).map(item => (
                                          <div key={item}>{item}</div>
                                       ))}
                                    </div>
                                 </Link>
                              ))}
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li
                className="relative group"
                onMouseEnter={() => handleMouseEnter("atom")}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`px-5 py-2.5 flex items-center gap-1 cursor-pointer transition-colors ${activeDropdown === "atom" ? "text-white bg-white/5 rounded-full" : "text-white/70 hover:text-white"}`}>
                  Dabis AI
                </div>

                <AnimatePresence>
                  {activeDropdown === "atom" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-6"
                    >
                      <div className="w-[380px] bg-[#151515] border border-white/10 rounded-xl p-4 shadow-2xl">
                        {dabisProducts.map((product) => (
                          <Link
                            key={product.title}
                            href={product.href}
                            className={`flex items-start gap-4 p-4 rounded-lg transition group ${
                              product.comingSoon
                                ? "opacity-50 cursor-not-allowed hover:bg-transparent"
                                : "hover:bg-white/5"
                            }`}
                            onClick={(e) => product.comingSoon && e.preventDefault()}
                          >
                            <div className={`p-2 rounded-md transition-colors ${
                              product.comingSoon
                                ? "bg-white/5 text-white/40"
                                : "bg-white/5 group-hover:bg-primary-500/20 group-hover:text-primary-400 text-white/80"
                            }`}>
                               <product.icon className="size-5" />
                            </div>
                            <div className="flex flex-col flex-1">
                              <div className="flex justify-between items-center">
                                <h3 className={`text-sm font-semibold transition-colors ${
                                  product.comingSoon
                                    ? "text-white/60"
                                    : "text-white group-hover:text-primary-400"
                                }`}>
                                  {product.title}
                                </h3>
                                {product.comingSoon && (
                                  <span className="text-[10px] font-medium tracking-wide text-white/30 border border-white/10 px-1.5 py-0.5 rounded bg-white/5 uppercase">
                                    Coming soon
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-white/50 leading-relaxed mt-1">
                                {product.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 flex items-center text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <Link href="/contact" className="hidden md:block group">
            <div className="relative overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
               <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
               <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#151515] px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-[#151515]/80 group-hover:text-white/90">
                  Start Your Project
                  <BsArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
               </span>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden w-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer z-50 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : "group-hover:w-8"
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
             <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : "group-hover:w-4"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-[#151515] z-40 md:hidden pt-24"
          >
            <nav className="w-main mx-auto flex flex-col gap-8 px-6">
              {[
                { label: "Work", href: "/work" },
                { label: "Company", href: "/company" },
                { label: "Services", href: "/design-agency" },
                { label: "Contact", href: "/contact" }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                     href={item.href}
                     onClick={() => setIsMobileMenuOpen(false)}
                     className="text-3xl font-light text-white hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}
                 className="mt-8"
              >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                     <div className="w-full bg-white text-black text-center py-4 rounded-full font-medium text-lg">
                        Start Your Project
                     </div>
                  </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
