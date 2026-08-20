import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "narrow" | "standard" | "wide";
  children: React.ReactNode;
}

export function Container({
  size = "standard",
  className,
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-5xl",
    standard: "max-w-7xl",
    wide: "max-w-[1400px]",
  };

  return (
    <div
      className={cn("mx-auto px-4 sm:px-6 lg:px-8 w-full", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
