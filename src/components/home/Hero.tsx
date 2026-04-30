import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 60%, var(--color-teal-primary) 100%)",
      }}
      aria-label="Hero"
    >
      {/* Decorative circle */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
        style={{ background: "var(--color-saffron)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10"
        style={{ background: "var(--color-teal-light)" }}
        aria-hidden="true"
      />

      <div className="container-page relative py-24 md:py-36 text-center text-white">
        {/* Tagline badge */}
        <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white/90 mb-6 tracking-wide uppercase">
          Spiritual NGO &nbsp;·&nbsp; Meditation &nbsp;·&nbsp; Liberation
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          Your Journey to{" "}
          <span style={{ color: "var(--color-saffron)" }}>Moksha</span> Begins
          Here
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Way To Moksha is a spiritual community offering daily meditation
          sessions, immersive retreats, and tools to support your inner journey
          — in English, Telugu, and beyond.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/daily-sessions" size="lg" variant="secondary">
            Join a Session
          </Button>
          <Button
            href="/retreats"
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            Explore Retreats
          </Button>
        </div>
      </div>
    </section>
  );
}
