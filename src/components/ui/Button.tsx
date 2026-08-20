import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "secondary-dark" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      showArrow = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none group select-none";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2 shadow-sm",
      lg: "text-base px-6 py-3.5 gap-2.5 shadow-md",
    };

    const variantStyles = {
      primary:
        "bg-brand-blue-600 hover:bg-brand-blue-700 active:bg-brand-blue-800 text-white shadow-brand-blue-500/25 hover:shadow-brand-blue-500/35 hover:-translate-y-0.5",
      secondary:
        "border border-brand-slate-200 bg-white text-brand-slate-800 hover:bg-brand-slate-50 hover:border-brand-slate-300 hover:text-brand-slate-900 active:bg-brand-slate-100",
      "secondary-dark":
        "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/35 active:bg-white/15 backdrop-blur-sm",
      white:
        "bg-white text-brand-slate-900 hover:bg-brand-blue-50 active:bg-brand-blue-100 shadow-md hover:shadow-lg hover:-translate-y-0.5 font-semibold",
      ghost:
        "text-brand-slate-700 hover:text-brand-blue-600 hover:bg-brand-blue-50/50 active:bg-brand-blue-100/50",
    };

    const combinedClasses = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    const content = (
      <>
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
