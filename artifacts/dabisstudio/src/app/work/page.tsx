


import { Link } from "wouter";
import ThreeParticles from "@/components/ThreeParticles";
import { WebGLErrorBoundary } from "@/components/WebGLErrorBoundary";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

const caseStudies = [
  {
    title: "Clinix AI",
    id: "01",
    tags: ["Web Design", "App Design", "AI Development", "GTM"],
    image: "/images/CaseStudies/clinix/clinixai.jpg",
    link: "/case-study/clinixAI",
  },
  {
    title: "Synergies4",
    id: "02",
    tags: ["App Design", "AI Development"],
    image: "/images/CaseStudies/synergies4.jpg",
    link: "/case-study/synergies4",
  },
  {
    title: "Curehire",
    id: "03",
    tags: ["Web Design", "Development"],
    image: "/images/CaseStudies/curehire.jpg",
    link: "/case-study/curehire",
  },
  {
    title: "OWASP",
    id: "04",
    tags: ["Web Design", "Development"],
    image: "/images/CaseStudies/owasp.jpg",
    link: "/case-study/owasp",
  },
  {
    title: "Feature",
    id: "05",
    tags: ["App Design", "GTM"],
    image: "/images/CaseStudies/feature.jpg",
    link: "/case-study/feature",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-32 pb-40">
      <WebGLErrorBoundary><ThreeParticles /></WebGLErrorBoundary>

      <section className="container mx-auto px-6">
        <ScrollReveal>
          <div className="border-b border-foreground/30 pb-4 mb-20 md:mb-32">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-semibold tracking-tighter opacity-0 animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-forwards">
              WORK
            </h1>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-12 gap-y-20 md:gap-x-10">
          {caseStudies.map((study, i) => (
            <div
              key={study.id}
              className={`group relative ${
                i % 2 === 0
                  ? "md:col-span-7"
                  : "md:col-span-12 md:w-3/4 md:ml-auto lg:col-span-5" // Varying widths for visual interest like original
              }`}
            >
              <ScrollReveal delay={i * 0.1}>
                 <Link href={study.link} className="block group">
                    <span className="text-sm font-mono mb-2 block opacity-60">0{i + 1}</span>
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-zinc-900">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-6 gap-4">
                        <h2 className="text-3xl md:text-4xl font-semibold">{study.title}</h2>

                        <div className="flex flex-wrap gap-2">
                             {study.tags.map((tag, t) => (
                                 <span key={t} className="px-3 py-1 rounded-full border border-foreground/20 text-xs md:text-sm text-foreground/70 uppercase tracking-wide">
                                     {tag}
                                 </span>
                             ))}
                        </div>
                    </div>
                 </Link>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Contact CTA at bottom */}
         <div className="mt-40 text-center">
             <ScrollReveal>
                <h3 className="text-3xl font-bold mb-8">Have a project in mind?</h3>
                <Link href="/contact">
                    <Button variant="primary" className="text-xl px-12 py-6">Let's Talk</Button>
                </Link>
             </ScrollReveal>
         </div>

      </section>
    </main>
  );
}
