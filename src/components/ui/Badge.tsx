type BadgeVariant = "teal" | "saffron" | "navy" | "muted" | "coming-soon";

const variantClasses: Record<BadgeVariant, string> = {
  teal:         "bg-[var(--color-teal-subtle)] text-[var(--color-teal-primary)]",
  saffron:      "bg-[var(--color-saffron-light)] text-orange-700",
  navy:         "bg-[var(--color-navy)] text-white",
  muted:        "bg-slate-100 text-slate-500",
  "coming-soon":"bg-amber-100 text-amber-700 border border-amber-200",
};

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

export default function Badge({ label, variant = "teal", className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold tracking-wide
        ${variantClasses[variant]} ${className}
      `}
    >
      {label}
    </span>
  );
}
