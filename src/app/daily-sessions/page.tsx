import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { sessions } from "@/lib/data/sessions";

export const metadata: Metadata = {
  title: "Daily Sessions",
  description:
    "Join Way To Moksha's daily guided meditation sessions in English, Telugu, and more.",
};

export default function DailySessionsPage() {
  return (
    <>
      {/* Page hero */}
      <div
        className="py-16 text-white text-center"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="container-page">
          <h1 className="text-4xl font-bold mb-3">Daily Sessions</h1>
          <p className="text-white/75 max-w-xl mx-auto">
            Guided meditation every day — join live on Zoom or catch replays on
            YouTube.
          </p>
        </div>
      </div>

      {/* Sessions grid */}
      <Section
        title="Meditation Sessions"
        subtitle="Find a session that fits your language and schedule."
        variant="surface"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sessions.map((session) => (
            <Card
              key={session.id}
              title={session.title}
              footer={
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge label={session.language} variant="muted" />
                  <Badge label={session.platform} variant="teal" />
                  {session.link ? (
                    <Button
                      href={session.link}
                      size="sm"
                      variant="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Now
                    </Button>
                  ) : (
                    <Badge label="Link coming soon" variant="coming-soon" />
                  )}
                </div>
              }
            >
              <div className="flex items-start gap-2 mt-1">
                <span className="text-[var(--color-teal-primary)] text-lg" aria-hidden="true">
                  🕐
                </span>
                <p className="text-sm text-[var(--color-text-muted)]">{session.schedule}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* YouTube / Zoom info placeholder */}
      <Section
        title="Watch Replays"
        subtitle="Missed a live session? Catch up on YouTube."
        variant="white"
      >
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center">
            <span className="text-4xl mb-4 block" aria-hidden="true">▶️</span>
            <p className="text-[var(--color-text-muted)] mb-6">
              YouTube playlist will be embedded here. Stay tuned!
            </p>
            <Button
              href="https://www.youtube.com"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit YouTube Channel
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
