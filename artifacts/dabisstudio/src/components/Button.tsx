

import { ReactNode } from "react";

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
  const baseStyles =
    "relative px-8 py-4 rounded-full font-medium text-base overflow-hidden transition-all duration-300 hover:scale-105";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30",
    secondary:
      "border border-foreground/30 text-foreground hover:border-accent hover:text-accent",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
