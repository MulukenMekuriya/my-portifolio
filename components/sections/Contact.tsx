"use client";

import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "mulukenmekuriya@gmail.com",
    href: "mailto:mulukenmekuriya@gmail.com",
    description: "Best for direct outreach",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mulukenmekuriya",
    href: "https://linkedin.com/in/mulukenmekuriya",
    description: "Connect professionally",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/MulukenMekuriya",
    href: "https://github.com/MulukenMekuriya",
    description: "View my code & repos",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Silver Spring, MD — Washington DC Metro",
    href: null,
    description: "Open to hybrid & remote",
  },
];

const USE_CASES = [
  "Cleared AI engineer for federal or defense program",
  "Technical co-founder or advisor",
  "Contract / freelance AI engineering work",
  "AI platform architecture consultation",
  "Speaking, podcast, or panel invitation",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--surface)" }}
      aria-label="Contact Muluken Mekuriya"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--border), transparent)" }}
        aria-hidden="true"
      />

      {/* Background accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(37,99,235,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Hero CTA heading */}
        <AnimatedSection className="text-center mb-16">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-4"
            style={{ color: "#2563eb", fontFamily: "var(--font-space-mono)" }}
          >
            06 / Contact
          </p>
          <h2
            className="font-display leading-none mb-4"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              color: "var(--head)",
              letterSpacing: "0.03em",
            }}
          >
            Let&rsquo;s Build Something
          </h2>
          <p
            className="mx-auto max-w-xl text-base leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Whether you&rsquo;re looking for a cleared AI engineer, need a technical co-founder,
            or want to discuss how AI can transform your federal programs — I&rsquo;d love to connect.
          </p>
        </AnimatedSection>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact cards */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon;
              const content = (
                <div
                  className="card-base p-5 flex gap-4 items-start group h-full transition-all duration-300"
                  style={{ cursor: item.href ? "pointer" : "default" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[#2563eb]"
                    style={{
                      background: "rgba(37,99,235,0.1)",
                      border: "1px solid rgba(37,99,235,0.2)",
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={17} style={{ color: "#2563eb" }} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-xs mb-1"
                      style={{ color: "var(--muted)", fontFamily: "var(--font-space-mono)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: "var(--body)", fontFamily: "var(--font-sora)" }}
                    >
                      {item.value}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--dim)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                  {item.href && (
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: "#2563eb" }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              );

              return (
                <StaggerItem key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="no-underline block h-full"
                      aria-label={`${item.label}: ${item.value}`}
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Right — use cases + primary CTA */}
          <AnimatedSection delay={0.2}>
            <div
              className="rounded-2xl p-8"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <h3
                className="font-semibold text-lg mb-2"
                style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
              >
                Open To
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: "var(--muted)" }}
              >
                Here&rsquo;s when you should reach out:
              </p>
              <ul className="space-y-3 mb-8">
                {USE_CASES.map((uc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ background: "#2563eb" }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-sm"
                      style={{ color: "var(--muted)" }}
                    >
                      {uc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Primary CTA */}
              <motion.a
                href="mailto:mulukenmekuriya@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-white no-underline transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                  fontFamily: "var(--font-sora)",
                }}
                aria-label="Send email to Muluken Mekuriya"
              >
                <Mail size={16} />
                Send Me a Message
              </motion.a>

              <p
                className="text-center text-xs mt-3"
                style={{ color: "var(--dim)", fontFamily: "var(--font-space-mono)" }}
              >
                Usually responds within 24 hours
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
