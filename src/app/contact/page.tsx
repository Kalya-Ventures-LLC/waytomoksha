import type { Metadata } from "next";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Way To Moksha — we'd love to hear from you.",
};

const contactDetails = [
  {
    icon: "📧",
    label: "Email",
    value: "info@waytomoksha.org",
    href: "mailto:info@waytomoksha.org",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 00000 00000",
    href: "tel:+910000000000",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <div
        className="py-16 text-white text-center"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="container-page">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-white/75 max-w-xl mx-auto">
            We&apos;d love to hear from you — whether it&apos;s a question, a
            retreat inquiry, or just a hello.
          </p>
        </div>
      </div>

      {/* Contact details */}
      <Section title="Get In Touch" variant="surface">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contactDetails.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="
                flex items-start gap-4 p-6 rounded-2xl border border-[var(--color-border)]
                bg-white hover:border-[var(--color-teal-primary)] hover:shadow-md
                transition-all duration-200 group
              "
            >
              <span className="text-3xl" aria-hidden="true">{icon}</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-0.5">
                  {label}
                </p>
                <p className="font-medium text-[var(--color-navy)] group-hover:text-[var(--color-teal-primary)] transition-colors">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Contact form placeholder */}
      <Section
        title="Send a Message"
        subtitle="A contact form will be available here soon."
        variant="white"
      >
        <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center max-w-2xl mx-auto">
          <span className="text-4xl mb-4 block" aria-hidden="true">✉️</span>
          <p className="text-[var(--color-text-muted)] mb-2">
            Contact form coming soon.
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            In the meantime, please reach out via email or phone above.
          </p>
        </div>
      </Section>

      {/* Social / Community links placeholder */}
      <Section variant="teal">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">
            Follow Us
          </h2>
          <p className="text-[var(--color-text-muted)] mb-6">
            Social media and community links will appear here.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {["YouTube", "WhatsApp Group", "Telegram"].map((platform) => (
              <span
                key={platform}
                className="px-5 py-2 rounded-full border border-dashed border-[var(--color-teal-primary)] text-sm text-[var(--color-teal-primary)]"
              >
                {platform} – coming soon
              </span>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
