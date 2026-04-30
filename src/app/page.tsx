import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import HomePreviewSection from "@/components/home/HomePreviewSection";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { retreats } from "@/lib/data/retreats";
import { sessions } from "@/lib/data/sessions";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  const upcomingRetreats = retreats.filter((r) => r.status === "upcoming").slice(0, 3);
  const previewSessions = sessions.slice(0, 3);

  return (
    <>
      <Hero />

      {/* ── Upcoming Retreats preview ──────────────────────────── */}
      <HomePreviewSection
        title="Upcoming Retreats"
        subtitle="Immerse yourself in a transformative experience."
        href="/retreats"
        linkLabel="All retreats"
        variant="surface"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingRetreats.map((retreat) => (
            <Card
              key={retreat.slug}
              title={retreat.title}
              description={retreat.description}
              footer={
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {new Date(retreat.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <Button href={`/retreats/${retreat.slug}`} size="sm" variant="outline">
                    Details
                  </Button>
                </div>
              }
            >
              <p className="text-xs text-[var(--color-teal-primary)] font-medium">
                📍 {retreat.location}
              </p>
            </Card>
          ))}
        </div>
      </HomePreviewSection>

      {/* ── Daily Sessions preview ─────────────────────────────── */}
      <HomePreviewSection
        title="Daily Sessions"
        subtitle="Join us every day for guided meditation."
        href="/daily-sessions"
        linkLabel="All sessions"
        variant="white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewSessions.map((session) => (
            <Card
              key={session.id}
              title={session.title}
              description={session.schedule}
              footer={
                <Badge
                  label={session.platform}
                  variant="teal"
                />
              }
            />
          ))}
        </div>
      </HomePreviewSection>

      {/* ── Donations preview ──────────────────────────────────── */}
      <HomePreviewSection
        title="Support Our Mission"
        subtitle="Your contribution helps us reach more seekers."
        href="/donations"
        linkLabel="Donate now"
        variant="teal"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
          <Card
            title="Donate from India"
            description="Support via UPI, bank transfer, or other Indian payment methods."
            footer={<Button href="/donations" size="sm">Learn more</Button>}
          />
          <Card
            title="Donate from USA"
            description="Contributions via Zelle, PayPal, or check are welcome."
            footer={<Button href="/donations" size="sm">Learn more</Button>}
          />
        </div>
      </HomePreviewSection>

      {/* ── Join Community ─────────────────────────────────────── */}
      <section
        className="py-20 text-center text-white"
        style={{
          background:
            "linear-gradient(135deg, var(--color-teal-primary), var(--color-navy))",
        }}
      >
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            Connect with fellow seekers, receive updates on sessions and
            retreats, and walk the path together.
          </p>
          <Button href="/contact" size="lg" variant="secondary">
            Get In Touch
          </Button>
        </div>
      </section>
    </>
  );
}

