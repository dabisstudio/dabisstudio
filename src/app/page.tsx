'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '@/components/ui/project-card';
import HeroSection from '@/components/ui/hero-section';
import AnimatedSection from '@/components/ui/animated-section';
import ThreeScene from '@/components/ui/three-scene';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const featuredProjectsRef = useRef<HTMLDivElement>(null);

  // Featured projects data
  const featuredProjects = [
    {
      title: "New Superyacht Generation",
      client: "Rossinavi",
      image: "https://ext.same-assets.com/1247681252/2951207992.jpeg",
      slug: "new-superyacht-generation",
      categories: ["Art Direction", "Web", "Brand Identity"],
    },
    {
      title: "Credits De Papel",
      client: "Netflix",
      image: "https://ext.same-assets.com/1247681252/3099271766.jpeg",
      slug: "credits-de-papel",
      categories: ["Web"],
    },
    {
      title: "The taste of your authentic selves",
      client: "Misura",
      image: "https://ext.same-assets.com/3227154752/3984007652.jpeg",
      slug: "taste-of-your-authentic-selves",
      categories: [
        "Art Direction",
        "Web",
        "Social Media Management",
        "Production",
      ],
    },
    {
      title: "Experience the beauty of timeless design",
      client: "Henge",
      image: "https://ext.same-assets.com/1247681252/2339644197.jpeg",
      slug: "experience-the-beauty-of-timeless-design",
      categories: ["Art Direction", "Web", "Production"],
    },
    {
      title: "The spirit of Umbria",
      client: "Brunello Cucinelli",
      image: "https://ext.same-assets.com/3227154752/1194287678.jpeg",
      slug: "the-spirit-of-umbria",
      categories: ["Production"],
    },
    {
      title: "Movement, community and science",
      client: "Asics",
      image: "https://ext.same-assets.com/3227154752/1620769536.jpeg",
      slug: "movement-community-and-science",
      categories: ["Web"],
    },
  ];

  useEffect(() => {
    // Create staggered animation for project cards
    if (featuredProjectsRef.current) {
      const projectCards = featuredProjectsRef.current.querySelectorAll('.project-card');

      gsap.from(projectCards, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: featuredProjectsRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none none'
        }
      });
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="We create digital experiences that matter"
        subtitle="dabisstudio is an international creative agency recognized for excellence in design and digital innovation"
        backgroundType="video"
        backgroundSrc="https://ext.same-assets.com/3227154752/3120916716.mp4"
        overlayText="studiogusto"
      >
        <Link
          href="/works"
          className="mt-8 inline-block px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
        >
          View Our Work
        </Link>
      </HeroSection>

      {/* Featured Projects */}
      <section className="dabisstudio-container py-20">
        <AnimatedSection animation="slideUp">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">Featured Projects</h2>
        </AnimatedSection>

        <div ref={featuredProjectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              client={project.client}
              image={project.image}
              slug={project.slug}
              categories={project.categories}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/works"
            className="inline-block px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ThreeScene interactionType="waves" color="#333333" />
        </div>

        <div className="dabisstudio-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection animation="slideIn">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">About dabisstudio</h2>
              <p className="text-lg opacity-80 mb-4">
                dabisstudio is the result of the connections of a diverse team with diverse ways of thinking: a
                dynamic and always evolving asset that allowed a small agency to grow its dream and thrive for the
                last 20 years, becoming an internationally acclaimed reality.
              </p>
              <Link
                href="/studio"
                className="inline-flex items-center border-b border-white pb-1"
              >
                <span className="mr-2">Learn more about us</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={0.3}>
              <div className="aspect-video bg-zinc-900 overflow-hidden rounded-lg">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="https://ext.same-assets.com/3227154752/3120916716.mp4" type="video/mp4" />
                </video>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="dabisstudio-container py-20">
        <AnimatedSection animation="slideUp">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">Our Services</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <div className="p-8 bg-zinc-900 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Web Design & Development</h3>
              <p className="opacity-80">
                We create immersive digital experiences that combine cutting-edge technology with stunning design.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={0.2}>
            <div className="p-8 bg-zinc-900 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Brand Identity</h3>
              <p className="opacity-80">
                We develop comprehensive brand identities that communicate your values and resonate with your audience.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={0.3}>
            <div className="p-8 bg-zinc-900 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Art Direction</h3>
              <p className="opacity-80">
                We provide creative direction that ensures visual consistency and impact across all your brand touchpoints.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-zinc-900">
        <div className="dabisstudio-container text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl md:text-5xl font-medium mb-6">Ready to start your project?</h2>
            <p className="text-xl opacity-80 max-w-2xl mx-auto mb-8">
              Let's create something amazing together. Contact us to discuss your ideas and goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black rounded-full hover:bg-opacity-90 transition-colors"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
