import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WORDS = [
  "Studio", "Build", "AI", "Design", "Ship",
  "Grow", "Scale", "Create", "Lead", "Innovate",
];

export default function ScrollTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const rawVelRef = useRef(0);
  const smoothVelRef = useRef(0);
  const halfWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Measure after paint so the track is fully laid out
    const measureRaf = requestAnimationFrame(() => {
      halfWidthRef.current = track.scrollWidth / 2;
    });

    // Wheel events give us velocity signal (works alongside Lenis)
    const onWheel = (e: WheelEvent) => {
      rawVelRef.current = e.deltaY * 0.045;
    };
    window.addEventListener("wheel", onWheel, { passive: true });

    const BASE = 0.55;
    let rafId: number;

    const tick = () => {
      // Decay raw velocity each frame, then smooth toward it
      rawVelRef.current *= 0.90;
      smoothVelRef.current += (rawVelRef.current - smoothVelRef.current) * 0.10;

      xRef.current -= BASE + smoothVelRef.current * 0.30;

      const half = halfWidthRef.current;
      if (half > 0) {
        if (xRef.current < -half) xRef.current += half;
        if (xRef.current > 0)     xRef.current -= half;
      }

      gsap.set(track, { x: xRef.current, force3D: true });
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(measureRaf);
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  // Three full repetitions — enough to fill any viewport gap-free
  const items = [...WORDS, ...WORDS, ...WORDS];

  return (
    <div className="overflow-hidden w-full py-8 select-none" aria-hidden="true">
      <div
        ref={trackRef}
        className="flex items-center w-max will-change-transform"
      >
        {items.map((word, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-white/[0.055] mx-6 md:mx-10 leading-none">
              {word}
            </span>
            <span className="text-4xl md:text-5xl text-primary/20 leading-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
