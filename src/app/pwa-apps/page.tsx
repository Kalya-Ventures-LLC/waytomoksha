import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { PwaApp } from "@/lib/types";

export const metadata: Metadata = {
  title: "PWA Apps",
  description:
    "Upcoming progressive web apps from Way To Moksha — room sharing, ride sharing, and more.",
};

const apps: PwaApp[] = [
  {
    id: "room-sharing",
    title: "Room Sharing / Stay Coordination",
    description:
      "Easily coordinate accommodation during retreats. Find roommates, manage booking preferences, and stay connected with fellow participants.",
    status: "coming-soon",
  },
  {
    id: "ride-sharing",
    title: "Ride Sharing",
    description:
      "Connect with community members travelling to the same retreat venue and share rides to reduce cost and carbon footprint.",
    status: "coming-soon",
  },
];

const iconMap: Record<string, string> = {
  "room-sharing": "🏠",
  "ride-sharing": "🚗",
};

export default function PwaAppsPage() {
  return (
    <>
      {/* Page hero */}
      <div
        className="py-16 text-white text-center"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="container-page">
          <h1 className="text-4xl font-bold mb-3">PWA Apps</h1>
          <p className="text-white/75 max-w-xl mx-auto">
            Mobile-friendly progressive web apps being built to support the
            Way To Moksha community.
          </p>
        </div>
      </div>

      <Section
        title="Community Apps"
        subtitle="Practical tools to make your retreat experience seamless."
        variant="surface"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {apps.map((app) => (
            <Card
              key={app.id}
              title={app.title}
              description={app.description}
              header={
                <div
                  className="h-28 flex items-center justify-center text-5xl"
                  style={{ background: "var(--color-teal-subtle)" }}
                  aria-hidden="true"
                >
                  {iconMap[app.id]}
                </div>
              }
              footer={
                <Badge label="Coming Soon" variant="coming-soon" />
              }
            />
          ))}
        </div>
      </Section>

      {/* Future apps placeholder */}
      <Section
        title="More Coming Soon"
        subtitle="We're building tools to deepen community connection."
        variant="white"
      >
        <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center max-w-2xl mx-auto">
          <span className="text-4xl mb-4 block" aria-hidden="true">📱</span>
          <p className="text-[var(--color-text-muted)]">
            Have an idea for a community app? Reach out to us!
          </p>
        </div>
      </Section>
    </>
  );
}
