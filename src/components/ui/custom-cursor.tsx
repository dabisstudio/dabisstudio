'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styled from '@emotion/styled';

const CursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
`;

const CursorDot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s, opacity 0.3s;
`;

const CursorCircle = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s, opacity 0.3s;
`;

const CursorText = styled.div`
  position: absolute;
  color: white;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s;
`;

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorCircleRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorDotRef.current || !cursorCircleRef.current || !cursorTextRef.current) return;

    const dot = cursorDotRef.current;
    const circle = cursorCircleRef.current;
    const text = cursorTextRef.current;

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Set initial position off-screen
    gsap.set([dot, circle, text], { x: -100, y: -100 });

    // Mouse move handler
    const onMouseMove = (e: MouseEvent) => {
      // Animate dot to follow cursor exactly
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
        ease: 'power2.out'
      });

      // Animate circle to follow with slight delay for smooth effect
      gsap.to(circle, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out'
      });

      // Animate text to follow cursor
      gsap.to(text, {
        x: e.clientX,
        y: e.clientY + 30,
        duration: 0.15,
        ease: 'power2.out'
      });
    };

    // Handle link and button hovers
    const onLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if hovering over a link or button
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        // Expand circle and show "View" text
        gsap.to(circle, {
          width: 80,
          height: 80,
          opacity: 1,
          duration: 0.3
        });

        gsap.to(text, {
          opacity: 1,
          duration: 0.3
        });

        // Set text content based on element
        if (target.closest('a')?.getAttribute('href')?.includes('/project/')) {
          text.textContent = 'View Project';
        } else if (target.closest('a')?.getAttribute('href')?.includes('/blog/')) {
          text.textContent = 'Read Article';
        } else if (target.closest('a')?.getAttribute('href') === '/contact') {
          text.textContent = 'Contact Us';
        } else {
          text.textContent = 'View';
        }
      } else {
        // Reset to default state
        gsap.to(circle, {
          width: 40,
          height: 40,
          opacity: 1,
          duration: 0.3
        });

        gsap.to(text, {
          opacity: 0,
          duration: 0.3
        });
      }
    };

    // Handle mouse leaving the window
    const onMouseLeave = () => {
      gsap.to([dot, circle, text], {
        opacity: 0,
        duration: 0.3
      });
    };

    // Handle mouse entering the window
    const onMouseEnter = () => {
      gsap.to([dot, circle], {
        opacity: 1,
        duration: 0.3
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousemove', onLinkHover);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousemove', onLinkHover);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <CursorContainer>
      <CursorDot ref={cursorDotRef} />
      <CursorCircle ref={cursorCircleRef} />
      <CursorText ref={cursorTextRef} />
    </CursorContainer>
  );
}
