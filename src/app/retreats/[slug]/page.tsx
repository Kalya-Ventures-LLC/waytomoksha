import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { retreats } from "@/lib/data/retreats";

interface RetreatPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return retreats.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: RetreatPageProps): Promise<Metadata> {
  const { slug } = await params;
  const retreat = retreats.find((r) => r.slug === slug);
  return {
    title: retreat?.title ?? "Retreat Details",
    description: retreat?.description,
  };
}

export default async function RetreatDetailPage({ params }: RetreatPageProps) {
  const { slug } = await params;
  const retreat = retreats.find((r) => r.slug === slug);

  if (!retreat) notFound();

  return (
    <>
      {/* Hero */}
      <div
        className="py-16 text-white"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="container-page">
          <Button href="/retreats" variant="ghost" size="sm" className="text-white/70 hover:text-white mb-6">
            ← Back to Retreats
          </Button>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <Badge
              label={retreat.status === "upcoming" ? "Upcoming" : "Past"}
              variant={retreat.status === "upcoming" ? "teal" : "muted"}
            />
            <span className="text-white/70 text-sm">
              {new Date(retreat.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-2">{retreat.title}</h1>
          <p className="text-[var(--color-teal-light)] text-sm">📍 {retreat.location}</p>
        </div>
      </div>

      {/* Details placeholder */}
      <Section title="About This Retreat" variant="surface">
        <div className="max-w-3xl mx-auto">
          <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-8">
            {retreat.description}
          </p>

          {/* Content placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              { icon: "📅", label: "Date", value: new Date(retreat.date).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) },
              { icon: "📍", label: "Location", value: retreat.location },
              { icon: "⏱️", label: "Duration", value: "To be announced" },
              { icon: "🧘", label: "Style", value: "To be announced" },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[var(--color-border)]"
              >
                <span className="text-2xl" aria-hidden="true">{icon}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-[var(--color-navy)] mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {retreat.status === "upcoming" && (
            <div className="text-center">
              <Button href="/contact" size="lg" variant="primary">
                Register / Express Interest
              </Button>
            </div>
          )}
        </div>
      </Section>

      {/* Gallery placeholder */}
      <Section title="Gallery" variant="white">
        <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center max-w-3xl mx-auto">
          <span className="text-4xl mb-4 block" aria-hidden="true">🖼️</span>
          <p className="text-[var(--color-text-muted)]">
            Photo gallery will be available here.
          </p>
        </div>
      </Section>

      {/* Testimonials placeholder */}
      <Section title="Testimonials" variant="teal">
        <div className="rounded-2xl border border-dashed border-[var(--color-teal-primary)] bg-white p-12 text-center max-w-3xl mx-auto">
          <span className="text-4xl mb-4 block" aria-hidden="true">💬</span>
          <p className="text-[var(--color-text-muted)]">
            Participant testimonials will appear here.
          </p>
        </div>
      </Section>
    </>
  );
}
