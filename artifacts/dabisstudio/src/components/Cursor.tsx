import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.cursor = "none";

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        gsap.set(dotRef.current, { x: mouseX, y: mouseY });
      }
    };

    const isInteractive = (el: HTMLElement) =>
      !!el.closest("a, button, [role='button'], input, textarea, select, label");

    const handleMouseOver = (e: MouseEvent) => {
      if (isInteractive(e.target as HTMLElement)) {
        gsap.to(ringRef.current, {
          scale: 2.2,
          borderColor: "#E50339",
          opacity: 0.9,
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(dotRef.current, { scale: 0, duration: 0.2 });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (isInteractive(e.target as HTMLElement)) {
        gsap.to(ringRef.current, {
          scale: 1,
          borderColor: "rgba(229,3,57,0.55)",
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(dotRef.current, { scale: 1, duration: 0.2 });
      }
    };

    let rafId: number;
    const tick = () => {
      ringX += (mouseX - ringX) * 0.13;
      ringY += (mouseY - ringY) * 0.13;
      if (ringRef.current) {
        gsap.set(ringRef.current, { x: ringX, y: ringY });
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.documentElement.style.cursor = "";
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          width: 34,
          height: 34,
          borderRadius: "50%",
          border: "1.5px solid rgba(229,3,57,0.55)",
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          backgroundColor: "#E50339",
        }}
      />
    </>
  );
}
