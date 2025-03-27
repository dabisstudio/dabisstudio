'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedSection from '@/components/ui/animated-section';
import styled from '@emotion/styled';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Enhanced styled components with more refined hover effects
const TeamMember = styled.div`
  position: relative;
  overflow: hidden;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: translateY(-8px);
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover .member-info {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MemberInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

// New styled components for enhanced visual elements
const AccentLine = styled.div`
  width: 40px;
  height: 2px;
  background-color: #4ADE80; /* Using Tailwind's accent color */
  margin: 20px 0;
`;

// New styled component for the "What We Do" section
const ServiceItem = styled.div`
  position: relative;
  padding: 24px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:first-of-type {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  &:hover {
    padding-left: 8px;
  }

  &:hover .service-indicator {
    width: 40px;
    opacity: 1;
  }
`;

const ServiceIndicator = styled.div`
  width: 0;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease;
  opacity: 0;
  margin-left: 16px;
`;

export default function StudioPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    // Animate the hero section
    if (heroRef.current) {
      const tl = gsap.timeline();

      tl.from(heroRef.current.querySelector('h1'), {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
      .from(heroRef.current.querySelector('p'), {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }, "-=0.6"); // Slight overlap for smoother sequence
    }

    // Timeline animation
    if (timelineRef.current) {
      const timelinePoints = timelineRef.current.querySelectorAll('.timeline-point');
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');

      gsap.set(timelinePoints, { scale: 0 });
      gsap.set(timelineItems, { opacity: 0, y: 30 });

      ScrollTrigger.batch(timelinePoints, {
        onEnter: batch => gsap.to(batch, {
          scale: 1,
          stagger: 0.2,
          duration: 0.6,
          ease: 'back.out(1.7)'
        }),
        start: "top 80%"
      });

      ScrollTrigger.batch(timelineItems, {
        onEnter: batch => gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out'
        }),
        start: "top 80%"
      });
    }
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Alessandro Scaglione",
      role: "CEO & Creative Director",
      image: "https://ext.same-assets.com/3227154752/3871359723.jpeg"
    },
    {
      name: "Marco Rossi",
      role: "Art Director",
      image: "https://ext.same-assets.com/3227154752/1279071491.jpeg"
    },
    {
      name: "Giulia Bianchi",
      role: "Digital Strategist",
      image: "https://ext.same-assets.com/3227154752/164820249.jpeg"
    },
    {
      name: "Luca Verdi",
      role: "Lead Developer",
      image: "https://ext.same-assets.com/3227154752/542610569.jpeg"
    }
  ];

  // Services data for "What We Do" section
  const services = [
    {
      title: "Brand Identity",
      description: "We create distinctive visual identities that capture the essence of your brand and resonate with your audience."
    },
    {
      title: "Web Design & Development",
      description: "We build immersive digital experiences that engage users and drive conversions."
    },
    {
      title: "Art Direction",
      description: "We provide creative vision and direction to ensure your visual content is cohesive and impactful."
    },
    {
      title: "Digital Strategy",
      description: "We develop comprehensive digital strategies that align with your business goals and target audience."
    },
    {
      title: "Content Creation",
      description: "We produce high-quality content that tells your story and connects with your audience."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center bg-black"
      >
        <div className="dabisstudio-container text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-tight">
            An agency with a passion<br />for big dreams.
          </h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto">
            We create meaningful experiences that connect brands with people.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <AnimatedSection animation="fadeIn" className="dabisstudio-container py-24">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-12">What We Do</h2>

          <div>
            {services.map((service, index) => (
              <ServiceItem
                key={service.title}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div>
                  <h3 className="text-2xl font-medium">{service.title}</h3>
                  {activeService === index && (
                    <p className="mt-2 text-lg opacity-80 max-w-2xl">{service.description}</p>
                  )}
                </div>
                <ServiceIndicator className={`service-indicator ${activeService === index ? 'w-[40px] opacity-100' : ''}`} />
              </ServiceItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Section with accent lines */}
      <AnimatedSection animation="fadeIn" className="dabisstudio-container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl mb-4">Our Philosophy</h2>
            <AccentLine />
            <p className="text-lg opacity-80 mb-6 leading-relaxed">
              dabisstudio is the result of the connections of a diverse team with diverse ways of thinking: a
              dynamic and always evolving asset that allowed a small agency to grow its dream and thrive for the
              last 20 years, becoming an internationally acclaimed reality.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              The name Gusto Italian Design Studio derives from the Italian word "Gusto" which means
              "taste". In Italy, having "gusto" means having good taste, an aesthetic sense, an
              appreciation for beauty and elegance. We bring this sensibility to all our projects.
            </p>
          </div>

          <div>
            <h2 className="text-3xl mb-4">Our Approach</h2>
            <AccentLine />
            <p className="text-lg opacity-80 mb-6 leading-relaxed">
              As a core, dabisstudio built a solid expertise in the Made In Italy luxury and international excellence: a
              passion that brought the brand to become a leader in the offer of strategic consulting and
              communication services to clients heading towards a world-wide market.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Our multidisciplinary team works across branding, digital experiences, content creation,
              and strategic communications, always with an eye for detail and a commitment to excellence.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Enhanced Timeline Section with animated points */}
      <AnimatedSection animation="slideUp" className="bg-zinc-900 py-24">
        <div className="dabisstudio-container" ref={timelineRef}>
          <h2 className="text-4xl md:text-5xl font-medium mb-16 text-center">Our Journey</h2>

          <div className="relative border-l border-zinc-700 ml-4 md:ml-0 md:mx-auto md:max-w-3xl">
            <div className="mb-16 ml-8 md:ml-12 timeline-item">
              <div className="timeline-point absolute w-4 h-4 bg-accent rounded-full -left-2 mt-2"></div>
              <h3 className="text-2xl font-medium">2003</h3>
              <p className="text-lg opacity-80 mt-2">Founded in Perugia, Italy as Gusto Italian Design Studio</p>
            </div>

            <div className="mb-16 ml-8 md:ml-12 timeline-item">
              <div className="timeline-point absolute w-4 h-4 bg-accent rounded-full -left-2 mt-2"></div>
              <h3 className="text-2xl font-medium">2010</h3>
              <p className="text-lg opacity-80 mt-2">Expanded services to include digital experiences</p>
            </div>

            <div className="mb-16 ml-8 md:ml-12 timeline-item">
              <div className="timeline-point absolute w-4 h-4 bg-accent rounded-full -left-2 mt-2"></div>
              <h3 className="text-2xl font-medium">2015</h3>
              <p className="text-lg opacity-80 mt-2">Opened Munich office to serve international clients</p>
            </div>

            <div className="mb-16 ml-8 md:ml-12 timeline-item">
              <div className="timeline-point absolute w-4 h-4 bg-accent rounded-full -left-2 mt-2"></div>
              <h3 className="text-2xl font-medium">2018</h3>
              <p className="text-lg opacity-80 mt-2">Rebranded as dabisstudio to reflect our global presence</p>
            </div>

            <div className="ml-8 md:ml-12 timeline-item">
              <div className="timeline-point absolute w-4 h-4 bg-accent rounded-full -left-2 mt-2"></div>
              <h3 className="text-2xl font-medium">Today</h3>
              <p className="text-lg opacity-80 mt-2">Working with leading brands across the globe</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Enhanced Video Section with more dramatic overlay */}
      <AnimatedSection animation="fadeIn" className="dabisstudio-container py-24">
        <div className="aspect-video relative bg-zinc-900 overflow-hidden mb-24">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://ext.same-assets.com/3227154752/4192648206.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-medium">Our Team</h2>
          </div>
        </div>

        {/* Enhanced Team Members grid with improved hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.name} animation="slideUp" delay={index * 0.1}>
              <TeamMember className="aspect-square cursor-pointer">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <MemberInfo className="member-info">
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-sm opacity-80 mt-1">{member.role}</p>
                </MemberInfo>
              </TeamMember>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Enhanced Testimonials with more refined design */}
      <AnimatedSection animation="fadeIn" className="bg-zinc-900 py-24">
        <div className="dabisstudio-container">
          <h2 className="text-4xl md:text-5xl font-medium mb-16 text-center">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-zinc-800/50 p-10 rounded-sm border border-zinc-700">
              <p className="text-xl italic mb-8 leading-relaxed">
                "dabisstudio transformed our brand with their exceptional design work. Their attention to detail and understanding of our vision exceeded our expectations."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-zinc-700 mr-5"></div>
                <div>
                  <h3 className="text-lg font-medium">Marco Bianchi</h3>
                  <p className="text-sm opacity-80 mt-1">CEO, Rossinavi</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 p-10 rounded-sm border border-zinc-700">
              <p className="text-xl italic mb-8 leading-relaxed">
                "Working with dabisstudio has been a game-changer for our digital presence. Their strategic approach and creative solutions have helped us connect with our audience in meaningful ways."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-zinc-700 mr-5"></div>
                <div>
                  <h3 className="text-lg font-medium">Giulia Rossi</h3>
                  <p className="text-sm opacity-80 mt-1">Marketing Director, Misura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Enhanced Call to Action with more dramatic spacing and refined button */}
      <AnimatedSection animation="slideUp" className="dabisstudio-container py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-medium mb-8">Ready to bring your dreams to life?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-12 opacity-80 leading-relaxed">
          Let's create something extraordinary together. Get in touch with our team to start the conversation.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-5 border border-white rounded-none hover:bg-white hover:text-black transition-all duration-300 text-lg tracking-wide"
        >
          Contact Us
        </Link>
      </AnimatedSection>
    </div>
  );
}
