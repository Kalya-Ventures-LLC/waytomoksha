import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import type { DonationMethod, DonationPurpose } from "@/lib/types";

export const metadata: Metadata = {
  title: "Donations",
  description:
    "Support Way To Moksha's mission. Donate from India or USA to fund meditation sessions and retreats.",
};

const indiaMethods: DonationMethod[] = [
  { id: "upi", region: "India", method: "UPI", detail: "Placeholder UPI ID" },
  { id: "bank", region: "India", method: "Bank Transfer", detail: "Account details coming soon" },
];

const usaMethods: DonationMethod[] = [
  { id: "zelle", region: "USA", method: "Zelle", detail: "Placeholder Zelle email" },
  { id: "paypal", region: "USA", method: "PayPal", detail: "Placeholder PayPal link" },
  { id: "check", region: "USA", method: "Check", detail: "Mailing address coming soon" },
];

const purposes: DonationPurpose[] = [
  {
    id: "sessions",
    title: "Daily Sessions",
    description: "Keep daily meditation sessions free and accessible for all.",
  },
  {
    id: "retreats",
    title: "Retreat Scholarships",
    description: "Help sponsor seekers who cannot afford retreat fees.",
  },
  {
    id: "tech",
    title: "Technology & Apps",
    description: "Fund development of community apps and digital tools.",
  },
  {
    id: "outreach",
    title: "Community Outreach",
    description: "Expand our reach and bring meditation to more communities.",
  },
];

function MethodCard({ method, detail }: { method: string; detail: string }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-xl border border-[var(--color-border)] bg-white">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
        style={{ background: "var(--color-teal-primary)" }}
        aria-hidden="true"
      >
        {method[0]}
      </div>
      <div>
        <p className="font-semibold text-[var(--color-navy)]">{method}</p>
        <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{detail}</p>
      </div>
    </div>
  );
}

export default function DonationsPage() {
  return (
    <>
      {/* Page hero */}
      <div
        className="py-16 text-white text-center"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="container-page">
          <h1 className="text-4xl font-bold mb-3">Support Our Mission</h1>
          <p className="text-white/75 max-w-xl mx-auto">
            Every contribution, however small, helps us keep meditation
            accessible and spread the light of awareness.
          </p>
        </div>
      </div>

      {/* India donations */}
      <Section
        id="donate-india"
        title="Donate from India"
        subtitle="Support us via UPI or bank transfer."
        variant="surface"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {indiaMethods.map((m) => (
            <MethodCard key={m.id} method={m.method} detail={m.detail} />
          ))}
        </div>
      </Section>

      {/* USA donations */}
      <Section
        id="donate-usa"
        title="Donate from USA"
        subtitle="Support us via Zelle, PayPal, or check."
        variant="white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {usaMethods.map((m) => (
            <MethodCard key={m.id} method={m.method} detail={m.detail} />
          ))}
        </div>
      </Section>

      {/* Purpose of donations */}
      <Section
        title="How Your Donation Helps"
        subtitle="Transparent use of every contribution."
        variant="teal"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {purposes.map((p) => (
            <Card
              key={p.id}
              title={p.title}
              description={p.description}
            />
          ))}
        </div>
      </Section>

      {/* Tax info placeholder */}
      <Section variant="white">
        <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-center max-w-2xl mx-auto">
          <p className="text-sm text-[var(--color-text-muted)]">
            🏛️ Tax exemption details and 501(c)(3) / 80G information will be
            added here.
          </p>
        </div>
      </Section>
    </>
  );
}
