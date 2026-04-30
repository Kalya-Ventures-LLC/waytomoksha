import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { retreats } from "@/lib/data/retreats";

export const metadata: Metadata = {
  title: "Retreats",
  description:
    "Explore upcoming and past Way To Moksha spiritual retreats and immersive meditation experiences.",
};

export default function RetreatsPage() {
  const upcoming = retreats.filter((r) => r.status === "upcoming");
  const past = retreats.filter((r) => r.status === "past");

  return (
    <>
      {/* Page hero */}
      <div
        className="py-16 text-white text-center"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="container-page">
          <h1 className="text-4xl font-bold mb-3">Retreats</h1>
          <p className="text-white/75 max-w-xl mx-auto">
            Immersive spiritual experiences designed to deepen your practice and
            reconnect with your true self.
          </p>
        </div>
      </div>

      {/* Upcoming retreats */}
      <Section
        id="upcoming"
        title="Upcoming Retreats"
        subtitle="Secure your spot — spaces are limited."
        variant="surface"
      >
        {upcoming.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((retreat) => (
              <Card
                key={retreat.slug}
                title={retreat.title}
                description={retreat.description}
                footer={
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge label="Upcoming" variant="teal" />
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {new Date(retreat.date).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <Button href={`/retreats/${retreat.slug}`} size="sm" variant="primary">
                      View Details
                    </Button>
                  </div>
                }
              >
                <p className="text-xs text-[var(--color-teal-primary)] font-medium mt-1">
                  📍 {retreat.location}
                </p>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-[var(--color-text-muted)] py-12">
            No upcoming retreats at this time. Check back soon!
          </p>
        )}
      </Section>

      {/* Past retreats */}
      <Section
        id="past"
        title="Past Retreats"
        subtitle="A look at the journeys we've shared together."
        variant="white"
      >
        {past.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {past.map((retreat) => (
              <Card
                key={retreat.slug}
                title={retreat.title}
                description={retreat.description}
                className="opacity-90"
                footer={
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge label="Past" variant="muted" />
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {new Date(retreat.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <Link
                      href={`/retreats/${retreat.slug}`}
                      className="ml-auto text-xs text-[var(--color-teal-primary)] hover:underline underline-offset-2"
                    >
                      Gallery & Testimonials →
                    </Link>
                  </div>
                }
              >
                <p className="text-xs text-[var(--color-text-muted)] font-medium mt-1">
                  📍 {retreat.location}
                </p>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-[var(--color-text-muted)] py-12">
            No past retreats on record yet.
          </p>
        )}
      </Section>
    </>
  );
}
