import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";

const vendors = [
  {
    category: "Foundation Models",
    items: [
      { name: "GPT-4o", vendor: "OpenAI", strengths: "Reasoning, code, multimodal", bestFor: "General-purpose AI apps, copilots" },
      { name: "Claude 3.5 Sonnet", vendor: "Anthropic", strengths: "Long context, safety, nuanced writing", bestFor: "Document processing, compliance-heavy use cases" },
      { name: "Gemini 1.5 Pro", vendor: "Google", strengths: "Multimodal, 1M token context", bestFor: "Video/audio analysis, enterprise search" },
      { name: "Llama 3", vendor: "Meta (open source)", strengths: "Self-hosted, cost-effective", bestFor: "Private deployments, cost-sensitive apps" },
    ],
  },
  {
    category: "Vector Databases",
    items: [
      { name: "Pinecone", vendor: "Pinecone", strengths: "Managed, fast, scalable", bestFor: "Production RAG pipelines" },
      { name: "Weaviate", vendor: "Weaviate", strengths: "Open source, multimodal", bestFor: "Complex knowledge graphs" },
      { name: "pgvector", vendor: "PostgreSQL extension", strengths: "No new infra, SQL-native", bestFor: "Teams already on Postgres" },
    ],
  },
  {
    category: "AI Orchestration",
    items: [
      { name: "LangChain", vendor: "LangChain", strengths: "Extensive integrations, community", bestFor: "Rapid prototyping, complex chains" },
      { name: "LlamaIndex", vendor: "LlamaIndex", strengths: "Data-focused, RAG-first", bestFor: "Document-heavy applications" },
      { name: "CrewAI", vendor: "CrewAI", strengths: "Multi-agent workflows", bestFor: "Autonomous agent systems" },
    ],
  },
  {
    category: "Voice & Speech",
    items: [
      { name: "ElevenLabs", vendor: "ElevenLabs", strengths: "Realistic TTS, voice cloning", bestFor: "Voice agents, content creation" },
      { name: "Whisper", vendor: "OpenAI", strengths: "Open source, accurate STT", bestFor: "Transcription, voice input" },
      { name: "Deepgram", vendor: "Deepgram", strengths: "Real-time, low latency", bestFor: "Live voice applications" },
    ],
  },
];

export default function VendorMatrixPage() {
  return (
    <main className="min-h-screen pt-32 pb-40">
      <section className="container mx-auto px-6">
        <ScrollReveal>
          <div className="border-b border-foreground/30 pb-4 mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-foreground/40 mb-4">Resources</p>
            <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter">
              AI Vendor Matrix
            </h1>
            <p className="mt-4 text-lg text-foreground/60 max-w-2xl">
              Our opinionated guide to the AI vendor landscape — what each tool is best for, and when to use it.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {vendors.map((group) => (
            <ScrollReveal key={group.category}>
              <div>
                <h2 className="text-xs font-medium uppercase tracking-widest text-foreground/40 mb-6">
                  {group.category}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-foreground/10 text-left">
                        <th className="pb-3 pr-8 font-medium text-foreground/40 uppercase tracking-widest text-xs">Model / Tool</th>
                        <th className="pb-3 pr-8 font-medium text-foreground/40 uppercase tracking-widest text-xs">Vendor</th>
                        <th className="pb-3 pr-8 font-medium text-foreground/40 uppercase tracking-widest text-xs">Strengths</th>
                        <th className="pb-3 font-medium text-foreground/40 uppercase tracking-widest text-xs">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.items.map((item, i) => (
                        <tr key={i} className="border-b border-foreground/5 hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-4 pr-8 font-medium">{item.name}</td>
                          <td className="py-4 pr-8 text-foreground/60">{item.vendor}</td>
                          <td className="py-4 pr-8 text-foreground/60">{item.strengths}</td>
                          <td className="py-4 text-foreground/60">{item.bestFor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="border-t border-foreground/10 pt-16 mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <p className="text-foreground/40 max-w-lg">
              Not sure which stack is right for your project? We help teams make the right build vs. buy decisions.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full font-medium text-base bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              Talk to Us
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
