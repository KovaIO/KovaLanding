import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
  onClick?: () => void;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-void hover:bg-text-primary border border-transparent shadow-[0_1px_0_rgba(255,255,255,0.12)_inset]",
  secondary:
    "bg-surface-elevated text-text-primary border border-border-subtle hover:border-text-muted hover:bg-surface",
  ghost:
    "bg-transparent text-text-secondary border border-border-subtle hover:text-text-primary hover:border-text-muted",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  return (
    <a
      href={href}
      className={`${base} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
