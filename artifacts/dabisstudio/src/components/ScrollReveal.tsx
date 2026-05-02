

import { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  variant?: "fade" | "3d";
}

export default function ScrollReveal({
  children,
  delay = 0,
  y = 50,
  className = "",
  variant = "fade",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    fade: {
      hidden: { opacity: 0, y },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        },
      },
    },
    "3d": {
      hidden: {
        opacity: 0,
        y: 28,
        rotateX: -18,
        transformPerspective: 1000
      },
      visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transformPerspective: 1000,
          transition: {
            duration: 0.8,
            delay,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom ease for snappy reveal
          },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
