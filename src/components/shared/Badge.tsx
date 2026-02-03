import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gradient" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-semibold rounded-full",
        {
          "bg-primary-light text-primary": variant === "default",
          "bg-gradient-primary text-white": variant === "gradient",
          "border-2 border-primary text-primary": variant === "outline",
        },
        {
          "px-3 py-1 text-xs": size === "sm",
          "px-4 py-1.5 text-sm": size === "md",
          "px-5 py-2 text-base": size === "lg",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
