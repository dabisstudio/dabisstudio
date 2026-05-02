import { useState, useMemo } from "react";
import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";

const searchIndex = [
  { title: "Work", description: "Our case studies and portfolio of work.", href: "/work" },
  { title: "Company", description: "About Dabis Studio — who we are and how we work.", href: "/company" },
  { title: "Contact", description: "Start a project or get in touch with our team.", href: "/contact" },
  { title: "Design Agency", description: "Product design, UI/UX, and brand systems.", href: "/design-agency" },
  { title: "Development Agency", description: "Full-stack web and app development.", href: "/development-agency" },
  { title: "AI Development", description: "Custom AI models, LLM integrations, and intelligent applications.", href: "/ai-development" },
  { title: "Enterprise AI", description: "AI strategy and framework for enterprise organizations.", href: "/enterprise-ai" },
  { title: "Voice Agents", description: "Conversational AI and voice interface products.", href: "/voice-agents" },
  { title: "Voice Agent Demo", description: "Interactive demo of our voice agent technology.", href: "/voice-agent-demo" },
  { title: "Emotion AI", description: "Emotion recognition and affective computing solutions.", href: "/emotion-ai" },
  { title: "Emotion Tracking Demo", description: "Live demo of emotion AI capabilities.", href: "/emotion-tracking-demo" },
  { title: "Healthcare Apps", description: "HIPAA-compliant digital health product development.", href: "/healthcare-apps" },
  { title: "IoT Development", description: "Connected device software and IoT platform engineering.", href: "/iot-development" },
  { title: "GTM Strategy", description: "Go-to-market planning, positioning, and growth strategy.", href: "/gtm-strategy" },
  { title: "Clinix AI Case Study", description: "Ambient clinical note generation and EHR integration.", href: "/case-study/clinixAI" },
  { title: "Synergies4 Case Study", description: "Enterprise AI knowledge management platform.", href: "/case-study/synergies4" },
  { title: "Curehire Case Study", description: "Healthcare talent acquisition and credentialing.", href: "/case-study/curehire" },
  { title: "OWASP Case Study", description: "Security community web redesign and rebuild.", href: "/case-study/owasp" },
  { title: "Feature Case Study", description: "AI-powered feature flagging and experimentation.", href: "/case-study/feature" },
  { title: "AI Vendor Matrix", description: "Our guide to AI tools, models, and vendors.", href: "/resources/vendor-matrix" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex;
    return searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main className="min-h-screen pt-32 pb-40">
      <section className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">Search</h1>
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, services, case studies..."
                autoFocus
                className="w-full bg-transparent border-b-2 border-foreground/20 focus:border-primary outline-none text-xl md:text-2xl py-4 pr-12 placeholder:text-foreground/30 transition-colors"
              />
              <svg
                className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground/30"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-1">
          {results.length === 0 ? (
            <p className="text-foreground/40 py-8">No results for "{query}"</p>
          ) : (
            results.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between py-5 border-b border-foreground/10 hover:border-foreground/30 group transition-colors"
              >
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">{item.title}</p>
                  <p className="text-sm text-foreground/50 mt-0.5">{item.description}</p>
                </div>
                <span className="text-foreground/20 group-hover:text-primary transition-colors text-xl">→</span>
              </Link>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
