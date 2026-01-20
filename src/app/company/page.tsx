"use client";

import Image from "next/image";
import Link from "next/link";
import ThreeParticles from "@/components/ThreeParticles";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

const highlights = [
  {
    title: "Design-First Innovation",
    description: "Award-winning UI/UX and 3D web experiences",
  },
  {
    title: "Engineering Excellence",
    description: "Next.js, GSAP, Three.js, and scalable AI architectures",
  },
  {
    title: "Real-World Impact",
    description: "From healthcare to enterprise AI, our work drives measurable outcomes",
  },
];

const team = [
  {
    name: "Matt Bravo",
    role: "Co-Founder & Partner",
    bio: "Former Fortune 500 sales and marketing executive turned technologist. Matt bridges storytelling and strategy — ensuring every product we build drives business impact.",
    linkedin: "https://www.linkedin.com/in/matt-bravo-703424a4/",
    image: "/images/team/matt.jpg",
  },
  {
    name: "Paul Wallace",
    role: "Co-Founder & CTO",
    bio: "A former Cognizant software engineer who turned down a Google SWE offer to build meaningful technology. Paul leads our architecture and AI integration efforts, from healthcare systems to enterprise-grade deployments.",
    linkedin: "https://www.linkedin.com/in/paul-wallace-08664b223/",
    image: "/images/team/paul.jpg",
  },
  {
    name: "Jacob Mandt",
    role: "Head of Product",
    bio: "An engineer with a passion for creative technology and product design. Jacob ensures every experience is not just functional, but emotionally resonant and beautifully built.",
    linkedin: "https://www.linkedin.com/in/jacob-mandt-3b0898222/",
    image: "/images/team/jacob.jpg",
  },
];

const values = [
  "Design first, always. — Every product starts with empathy and storytelling.",
  "AI should amplify humans, not replace them.",
  "Innovation is only meaningful when it drives impact.",
  "We move fast — but never at the cost of quality or integrity.",
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen pt-32">
      <ThreeParticles />

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-40">
        <ScrollReveal>
          <h1 className="text-xl md:text-2xl uppercase tracking-wide font-light mb-10 text-foreground/80">
            Companies create products. <br /> Dabis Studio Creates Impact.
          </h1>
          <p className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mb-20 text-gradient">
            We're a design-led AI studio turning complex challenges into measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
             {/* Simulating the video modal trigger / button from legacy site */}
             <Button variant="primary"> Watch Our Story </Button>
             <Link href="#team" className="text-xl border-b border-foreground/30 hover:border-accent transition-colors pb-1 flex items-center gap-2">
                Meet the team
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
             </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-6 mb-40">
        <ScrollReveal delay={0.2}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl text-foreground/60 mb-8 uppercase tracking-widest">Our Story</h2>
              <p className="text-3xl md:text-4xl font-semibold leading-relaxed">
                Dabis Studio operates at the intersection of cutting-edge technology and transformative design.
              </p>
              <p className="text-xl mt-8 text-foreground/80 leading-relaxed">
                Founded in Atlanta by <span className="text-tertiary font-medium">marketers, designers, and engineers</span>, we set out to make AI accessible, human, and visually inspiring.
              </p>
            </div>
            <div className="relative">
                 {/* Placeholder for map if not present */}
                 <div className="relative aspect-video rounded-xl overflow-hidden glass-panel flex items-center justify-center">
                     {/* Try to load the map image if available, else standard look */}
                     <Image
                        src="/images/dotted-world-map-atlanta.svg"
                        alt="Dabis Studio Atlanta Map"
                        width={600}
                        height={400}
                        className="object-contain w-full h-full opacity-80"
                     />
                 </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Highlights */}
      <section className="container mx-auto px-6 mb-40">
        <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">Key Highlights</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="glass-card p-10 h-full rounded-2xl border border-white/5 hover:border-primary/30 transition-colors duration-300">
                        <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
                        <p className="text-lg text-foreground/70">{item.description}</p>
                    </div>
                </ScrollReveal>
            ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="container mx-auto px-6 mb-40">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 leading-tight">
            Meet the Team <br/>
            <span className="text-foreground/50">Behind Dabis Studio</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
                <ScrollReveal key={i} delay={i * 0.15}>
                    <div className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 aspect-square">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                         {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-2xl font-bold">{member.name}</h3>
                            <p className="text-lg text-foreground/80 mb-4">{member.role}</p>
                            <p className="text-sm text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6 line-clamp-4">
                                {member.bio}
                            </p>
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 inline-block hover:text-primary">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6 mb-40">
        <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How We Think</h2>
            <p className="text-xl text-center text-foreground/60 italic mb-20">We don't just build products — we build momentum.</p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-8">
            {values.map((val, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="flex gap-6 pb-8 border-b border-foreground/10 items-start">
                        <span className="text-foreground/30 text-xl font-mono pt-1">0{i + 1}</span>
                        <p className="text-2xl md:text-3xl font-medium">{val}</p>
                    </div>
                </ScrollReveal>
            ))}
        </div>
      </section>

      {/* CTA */}
       <section className="container mx-auto px-6 pb-20">
         <ScrollReveal>
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-12 md:p-24 border border-white/10 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/5 blur-3xl pointer-events-none" />
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Create Something <br/> <span className="italic text-primary">That Matters</span></h2>
             <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-12">
                We've built AI for good, for growth, and for the greater impact. What will we build with you?
             </p>
             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/contact">
                    <Button variant="primary" className="text-lg px-10 py-5">Start a Project</Button>
                </Link>
                <Link href="/work" className="text-lg hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
                    Explore Our Work
                </Link>
             </div>
          </div>
         </ScrollReveal>
      </section>

    </main>
  );
}
