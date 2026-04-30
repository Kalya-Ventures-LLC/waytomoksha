import Link from "next/link";
import { ReactNode } from "react";

interface HomePreviewSectionProps {
  title: string;
  subtitle?: string;
  href: string;
  linkLabel?: string;
  children: ReactNode;
  variant?: "white" | "surface" | "teal";
}

const bgClasses = {
  white:   "bg-white",
  surface: "bg-[var(--color-surface)]",
  teal:    "bg-[var(--color-teal-subtle)]",
};

export default function HomePreviewSection({
  title,
  subtitle,
  href,
  linkLabel = "View all",
  children,
  variant = "white",
}: HomePreviewSectionProps) {
  return (
    <section className={`py-16 px-4 ${bgClasses[variant]}`}>
      <div className="container-page">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[var(--color-text-muted)] mt-1 text-sm">
                {subtitle}
              </p>
            )}
            <div className="mt-3 h-1 w-12 rounded-full bg-[var(--color-teal-primary)]" />
          </div>
          <Link
            href={href}
            className="text-sm font-medium text-[var(--color-teal-primary)] hover:underline underline-offset-4 shrink-0"
          >
            {linkLabel} →
          </Link>
        </div>

        {children}
      </div>
    </section>
  );
}
