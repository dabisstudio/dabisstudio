import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.28, y: y * 0.28 });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative px-8 py-4 rounded-full font-medium text-base overflow-hidden";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30",
    secondary:
      "border border-foreground/30 text-foreground hover:border-accent hover:text-accent",
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      whileHover={{ scale: 1.04 }}
      transition={{
        x: { type: "spring", stiffness: 400, damping: 20, mass: 0.4 },
        y: { type: "spring", stiffness: 400, damping: 20, mass: 0.4 },
        scale: { duration: 0.2 },
      }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
