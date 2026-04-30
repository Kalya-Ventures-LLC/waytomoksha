import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  /** Visual style of the section background */
  variant?: "white" | "surface" | "teal" | "navy";
}

const variantClasses: Record<string, string> = {
  white:   "bg-white",
  surface: "bg-[var(--color-surface)]",
  teal:    "bg-[var(--color-teal-subtle)]",
  navy:    "bg-[var(--color-navy)] text-white",
};

export default function Section({
  title,
  subtitle,
  children,
  className = "",
  id,
  variant = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 px-4 ${variantClasses[variant]} ${className}`}
    >
      <div className="container-page">
        {(title || subtitle) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-navy)] mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-[var(--color-teal-primary)]" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
