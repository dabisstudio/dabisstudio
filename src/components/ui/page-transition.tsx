'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import styled from '@emotion/styled';

const TransitionOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  z-index: 9998;
  transform: translateY(100%);
  pointer-events: none;
`;

export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!overlayRef.current) return;

    // Create timeline for page transition
    const tl = gsap.timeline();

    // Animate overlay to cover the screen
    tl.to(overlayRef.current, {
      y: 0,
      duration: 0.5,
      ease: 'power3.inOut'
    });

    // Animate overlay to reveal new page
    tl.to(overlayRef.current, {
      y: '-100%',
      duration: 0.5,
      ease: 'power3.inOut',
      delay: 0.1
    });

    // Reset overlay position after animation
    tl.set(overlayRef.current, {
      y: '100%'
    });

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return <TransitionOverlay ref={overlayRef} />;
}
