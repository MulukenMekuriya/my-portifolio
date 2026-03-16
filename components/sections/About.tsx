"use client";

import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const highlights = [
  {
    icon: "🏛️",
    title: "Federal Expertise",
    body: "9+ years building for DoD & DoL under FISMA, RBAC, and Section 508 compliance — mission-critical, zero-downtime environments.",
  },
  {
    icon: "🤖",
    title: "AI Systems Builder",
    body: "RAG pipelines, multi-agent orchestration, LLM integration, vector search, and autonomous agent workforces — not demos, production systems.",
  },
  {
    icon: "🚀",
    title: "Founder & Builder",
    body: "5 AI-powered products shipped — from freight marketplaces and trading systems to SaaS platforms and content automation pipelines.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-pad relative"
      style={{ background: "var(--bg)" }}
      aria-label="About Muluken Mekuriya"
    >
      {/* subtle top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--border), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <AnimatedSection>
          <p
            className="text-xs uppercase tracking-[0.25em] mb-3"
            style={{ color: "#2563eb", fontFamily: "var(--font-space-mono)" }}
          >
            01 / About
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12"
            style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
          >
            Who I Am
          </h2>
        </AnimatedSection>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left — Photo placeholder */}
          <AnimatedSection className="lg:col-span-2" direction="left">
            <div className="relative">
              {/* Photo placeholder */}
              <div
                className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden flex items-center justify-center"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, var(--border) 0, var(--border) 1px, transparent 0, transparent 50%)",
                    backgroundSize: "20px 20px",
                  }}
                  aria-hidden="true"
                />

                {/* Initials monogram */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-bold"
                    style={{
                      background: "linear-gradient(135deg, #1e3a5f, #2563eb)",
                      color: "#ffffff",
                      fontFamily: "var(--font-sora)",
                    }}
                    aria-label="MM initials — photo placeholder"
                  >
                    MM
                  </div>
                  <p
                    className="text-xs text-center px-4"
                    style={{ color: "var(--muted)", fontFamily: "var(--font-space-mono)" }}
                  >
                    Muluken Mekuriya<br />Silver Spring, MD
                  </p>
                </div>

                {/* Accent corner */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                  style={{ background: "linear-gradient(to right, #2563eb, #60a5fa)" }}
                  aria-hidden="true"
                />
              </div>

              {/* Floating stats card */}
              <div
                className="absolute -bottom-5 -right-5 flex flex-col gap-1 px-5 py-4 rounded-xl border shadow-xl"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                }}
              >
                {[
                  { value: "9+", label: "Years" },
                  { value: "4.0", label: "M.Eng GPA" },
                ].map((s) => (
                  <div key={s.label} className="flex items-baseline gap-2">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: "#2563eb", fontFamily: "var(--font-bebas)", letterSpacing: "0.03em" }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--muted)", fontFamily: "var(--font-space-mono)" }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Bio */}
          <AnimatedSection className="lg:col-span-3" delay={0.15}>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>
                I&rsquo;m a{" "}
                <span style={{ color: "var(--body)", fontWeight: 500 }}>
                  Senior AI Software Engineer
                </span>{" "}
                based in Silver Spring, MD, with 9+ years building enterprise systems for the
                U.S. Department of Defense and Department of Labor. My work sits at the intersection
                of AI engineering and federal compliance — designing systems that are both technically
                advanced and mission-critical secure.
              </p>

              <p>
                Currently, I&rsquo;m building AI-powered platforms across multiple domains: intelligent
                exam prep systems using{" "}
                <span style={{ color: "var(--body)", fontWeight: 500 }}>
                  RAG and vector search
                </span>
                , algorithmic trading systems with{" "}
                <span style={{ color: "var(--body)", fontWeight: 500 }}>
                  multi-agent AI decision pipelines
                </span>
                , and autonomous agent workforces for fleet management operations.
              </p>

              <p>
                I hold a{" "}
                <span style={{ color: "var(--body)", fontWeight: 500 }}>
                  Master of Engineering from Morgan State University (4.0 GPA)
                </span>{" "}
                and a B.S. from Bahir Dar University, Ethiopia. Beyond federal contracting,
                I&rsquo;m the founder of TOLO FREIGHT — Ethiopia&rsquo;s first digital freight
                marketplace — and I build AI-driven content pipelines for automated music production
                and distribution.
              </p>

              <p
                className="italic border-l-2 pl-4 py-1"
                style={{
                  color: "var(--body)",
                  borderColor: "#2563eb",
                  fontFamily: "var(--font-sora)",
                  fontWeight: 500,
                }}
              >
                &ldquo;The engineers who thrive in 2026 aren&rsquo;t the ones who write the most
                code — they&rsquo;re the ones who architect systems, own domains, hold clearances,
                and build with AI as a force multiplier.&rdquo;
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-7">
              {[
                { label: "linkedin.com/in/mulukenmekuriya", href: "https://linkedin.com/in/mulukenmekuriya" },
                { label: "github.com/MulukenMekuriya", href: "https://github.com/MulukenMekuriya" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs no-underline transition-colors duration-200 hover:text-[#2563eb]"
                  style={{
                    color: "var(--muted)",
                    fontFamily: "var(--font-space-mono)",
                  }}
                >
                  ↗ {l.label}
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Highlight cards */}
        <StaggerContainer className="grid sm:grid-cols-3 gap-5 mt-20" staggerDelay={0.12}>
          {highlights.map((h) => (
            <StaggerItem key={h.title}>
              <div
                className="card-base p-6 h-full group cursor-default"
                role="article"
              >
                <div className="text-3xl mb-4" aria-hidden="true">{h.icon}</div>
                <h3
                  className="font-semibold mb-2"
                  style={{
                    color: "var(--head)",
                    fontFamily: "var(--font-sora)",
                    fontSize: "1rem",
                  }}
                >
                  {h.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {h.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
