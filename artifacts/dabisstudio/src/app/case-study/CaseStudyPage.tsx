import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";

export interface CaseStudyData {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  challenge: string;
  solution: string;
  outcome: string;
  accentColor?: string;
}

interface CaseStudyPageProps {
  data: CaseStudyData;
}

export default function CaseStudyPage({ data }: CaseStudyPageProps) {
  return (
    <main className="min-h-screen pt-32 pb-40">
      <section className="container mx-auto px-6">
        <ScrollReveal>
          <div className="border-b border-foreground/30 pb-4 mb-16">
            <div className="flex flex-wrap gap-2 mb-4">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full border border-foreground/20 text-foreground/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-semibold tracking-tighter">
              {data.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-foreground/60 max-w-2xl">
              {data.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="w-full aspect-video overflow-hidden rounded-xl mb-20 bg-foreground/5">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <ScrollReveal>
            <div>
              <h2 className="text-xs font-medium uppercase tracking-widest text-foreground/40 mb-4">
                Overview
              </h2>
              <p className="text-lg leading-relaxed text-foreground/80">
                {data.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-10">
              <div>
                <h3 className="text-xs font-medium uppercase tracking-widest text-foreground/40 mb-3">
                  Challenge
                </h3>
                <p className="text-foreground/70 leading-relaxed">{data.challenge}</p>
              </div>
              <div>
                <h3 className="text-xs font-medium uppercase tracking-widest text-foreground/40 mb-3">
                  Solution
                </h3>
                <p className="text-foreground/70 leading-relaxed">{data.solution}</p>
              </div>
              <div>
                <h3 className="text-xs font-medium uppercase tracking-widest text-foreground/40 mb-3">
                  Outcome
                </h3>
                <p className="text-foreground/70 leading-relaxed">{data.outcome}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="border-t border-foreground/10 pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-foreground/40 text-sm uppercase tracking-widest mb-2">Next</p>
              <Link href="/work" className="text-2xl font-semibold hover:text-primary transition-colors">
                View All Work →
              </Link>
            </div>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full font-medium text-base bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
