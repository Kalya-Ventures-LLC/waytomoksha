import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  /** Optional footer slot (e.g. a button or badge) */
  footer?: ReactNode;
  /** Optional header slot (e.g. an image or icon) */
  header?: ReactNode;
}

export default function Card({
  title,
  description,
  children,
  className = "",
  footer,
  header,
}: CardProps) {
  return (
    <article
      className={`
        flex flex-col bg-white rounded-2xl border border-[var(--color-border)]
        shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden
        ${className}
      `}
    >
      {header && <div className="w-full">{header}</div>}

      <div className="flex flex-col flex-1 p-6 gap-3">
        <h3 className="text-lg font-semibold text-[var(--color-navy)] leading-snug">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            {description}
          </p>
        )}
        {children && <div className="flex-1">{children}</div>}
      </div>

      {footer && (
        <div className="px-6 pb-6 pt-0">
          {footer}
        </div>
      )}
    </article>
  );
}
