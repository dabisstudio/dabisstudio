'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from '@emotion/styled';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideIn' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
}

const AnimatedContainer = styled.div`
  overflow: hidden;
  will-change: transform, opacity;
`;

export default function AnimatedSection({
  children,
  className,
  animation = 'fadeIn',
  delay = 0,
  duration = 1,
  threshold = 0.2,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const element = sectionRef.current;
    let animation_tl: gsap.core.Timeline;

    // Set initial state based on animation type
    switch (animation) {
      case 'fadeIn':
        gsap.set(element, { opacity: 0 });
        break;
      case 'slideUp':
        gsap.set(element, { opacity: 0, y: 50 });
        break;
      case 'slideIn':
        gsap.set(element, { opacity: 0, x: -50 });
        break;
      case 'scale':
        gsap.set(element, { opacity: 0, scale: 0.8 });
        break;
    }

    // Create animation timeline
    animation_tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: `top bottom-=${threshold * 100}%`,
        toggleActions: 'play none none none',
      },
      delay,
    });

    // Add animation based on type
    switch (animation) {
      case 'fadeIn':
        animation_tl.to(element, { opacity: 1, duration });
        break;
      case 'slideUp':
        animation_tl.to(element, { opacity: 1, y: 0, duration });
        break;
      case 'slideIn':
        animation_tl.to(element, { opacity: 1, x: 0, duration });
        break;
      case 'scale':
        animation_tl.to(element, { opacity: 1, scale: 1, duration });
        break;
    }

    return () => {
      // Clean up ScrollTrigger
      if (animation_tl.scrollTrigger) {
        animation_tl.scrollTrigger.kill();
      }
      animation_tl.kill();
    };
  }, [animation, delay, duration, threshold]);

  return (
    <AnimatedContainer ref={sectionRef} className={className}>
      {children}
    </AnimatedContainer>
  );
}
