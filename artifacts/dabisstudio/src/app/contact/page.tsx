

import { useState } from "react";
import ThreeParticles from "@/components/ThreeParticles";
import { WebGLErrorBoundary } from "@/components/WebGLErrorBoundary";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log("Form submitted:", formState);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen pt-32 pb-40">
      <WebGLErrorBoundary><ThreeParticles /></WebGLErrorBoundary>

      <section className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-10 xl:gap-32">
          {/* Header Section */}
          <div className="w-full lg:w-1/3 shrink-0">
             <ScrollReveal>
                <div className="sticky top-40">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter uppercase leading-[0.8] mb-8">
                      Let's <br /> Connect
                    </h1>

                    <div className="flex flex-col gap-8 text-lg font-light opacity-80">
                        <p>
                          Let's talk about your next big idea. Use the form to tell us more, or simply drop us an email at{" "}
                          <a href="mailto:hello@dabisstudio.com" className="text-cyan-400 underline decoration-cyan-400/30 hover:decoration-cyan-400 transition-all">
                            hello@dabisstudio.com
                          </a>
                        </p>

                        <div className="flex flex-col gap-2 mt-4">
                             <p className="opacity-60 text-sm uppercase tracking-widest">Location</p>
                             <p className="text-xl">Atlanta, GA</p>
                             <p className="opacity-60 text-sm">Serving clients globally</p>
                        </div>
                    </div>
                </div>
             </ScrollReveal>
          </div>

          {/* Form Section */}
          <div className="w-full lg:flex-1 bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12">
            <ScrollReveal delay={0.2}>
                {isSubmitted ? (
                    <div className="min-h-[400px] flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-semibold mb-2">Message Sent!</h3>
                        <p className="text-white/60 max-w-md">
                            Thank you for reaching out. We've received your inquiry and will get back to you within 24 hours.
                        </p>
                        <Button className="mt-8" onClick={() => setIsSubmitted(false)} variant="secondary">
                            Send Another Message
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm uppercase tracking-wider opacity-60">First Name *</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            placeholder="John"
                            className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-white/10"
                            onChange={handleChange}
                            value={formState.firstName}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm uppercase tracking-wider opacity-60">Last Name *</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            placeholder="Doe"
                            className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-white/10"
                            onChange={handleChange}
                            value={formState.lastName}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                          <label htmlFor="email" className="text-sm uppercase tracking-wider opacity-60">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="john@company.com"
                            className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-white/10"
                            onChange={handleChange}
                            value={formState.email}
                          />
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                         <div className="space-y-2">
                            <label htmlFor="service" className="text-sm uppercase tracking-wider opacity-60">Service Interested In *</label>
                            <select
                                id="service"
                                name="service"
                                required
                                className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white/80 [&>option]:bg-zinc-900"
                                onChange={handleChange}
                                value={formState.service}
                            >
                                <option value="" disabled>Select Service...</option>
                                <option value="product-design">Product Design</option>
                                <option value="development">Development</option>
                                <option value="gtm-strategy">GTM Strategy</option>
                                <option value="ai-development">AI Development</option>
                                <option value="healthcare-apps">Healthcare Apps</option>
                                <option value="iot-development">IoT Development</option>
                                <option value="other">Other</option>
                            </select>
                         </div>
                         <div className="space-y-2">
                            <label htmlFor="budget" className="text-sm uppercase tracking-wider opacity-60">Project Budget *</label>
                            <select
                                id="budget"
                                name="budget"
                                required
                                className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white/80 [&>option]:bg-zinc-900"
                                onChange={handleChange}
                                value={formState.budget}
                            >
                                <option value="" disabled>Select Budget...</option>
                                <option value="below-10k">&lt; $10k</option>
                                <option value="10k-50k">$10k - $50k</option>
                                <option value="50k-100k">$50k - $100k</option>
                                <option value="100k-plus">$100k +</option>
                            </select>
                         </div>
                      </div>

                      <div className="space-y-2">
                          <label htmlFor="message" className="text-sm uppercase tracking-wider opacity-60">Message *</label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            placeholder="Tell us about your project..."
                            className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-white/10 resize-none"
                            onChange={handleChange}
                            value={formState.message}
                          />
                      </div>

                      <div className="pt-4">
                        <Button type="submit" className="w-full bg-white text-black hover:scale-[1.02] active:scale-95 transition-all py-4 font-semibold text-lg" variant="primary">
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </div>

                    </form>
                )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
