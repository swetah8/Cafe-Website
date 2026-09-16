import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "outline-light";
  size?: "md" | "sm";
  showArrow?: boolean;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
};

export default function Button({
  href,
  onClick,
  variant = "solid",
  size = "md",
  showArrow = true,
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "btn-focus inline-flex items-center gap-2 rounded-full font-sans font-semibold tracking-wide transition-all duration-200";

  const sizes = {
    md: "px-6 py-3 text-[0.95rem]",
    sm: "px-5 py-2.5 text-sm",
  };

  const variants = {
    solid:
      "bg-terracotta text-cream hover:bg-terracotta-dark hover:shadow-lg hover:shadow-terracotta/20 active:scale-[0.98]",
    outline:
      "border border-brown/30 text-brown-dark hover:bg-brown-dark hover:text-cream hover:border-brown-dark",
    "outline-light":
      "border border-cream/40 text-cream hover:bg-cream hover:text-brown-dark",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={16}
          strokeWidth={2.25}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`group ${classes}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`group ${classes}`}>
      {content}
    </button>
  );
}
