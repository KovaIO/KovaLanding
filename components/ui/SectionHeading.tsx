import { type ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl leading-[1.15] tracking-tight text-text-primary md:text-5xl md:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-text-secondary md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
