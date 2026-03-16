"use client";

import { motion } from "framer-motion";
import { Briefcase, Rocket } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { experiences, type Experience } from "@/lib/data";

/* ─── Tech Badge ─── */
function TechTag({ label }: { label: string }) {
  return (
    <span
      className="inline-block px-2 py-0.5 rounded text-xs"
      style={{
        background: "rgba(37,99,235,0.08)",
        color: "#60a5fa",
        fontFamily: "var(--font-space-mono)",
        border: "1px solid rgba(37,99,235,0.2)",
      }}
    >
      {label}
    </span>
  );
}

/* ─── Timeline Entry ─── */
function TimelineEntry({
  entry,
  index,
  type,
}: {
  entry: Experience;
  index: number;
  type: "professional" | "founder";
}) {
  const accent = type === "professional" ? "#2563eb" : "#10b981";
  const accentBg = type === "professional" ? "rgba(37,99,235,0.08)" : "rgba(16,185,129,0.08)";
  const accentBorder = type === "professional" ? "rgba(37,99,235,0.25)" : "rgba(16,185,129,0.25)";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 z-10 -translate-x-[7px]"
        style={{
          borderColor: accent,
          background: "var(--bg-surface, var(--surface))",
          boxShadow: `0 0 0 4px ${accentBg}`,
        }}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        className="rounded-xl p-6 transition-all duration-300 group hover:border-opacity-60"
        style={{
          background: "var(--card)",
          border: `1px solid var(--border)`,
        }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3
              className="font-semibold text-base"
              style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
            >
              {entry.title}
            </h3>
            <p
              className="text-sm mt-0.5"
              style={{ color: accent, fontFamily: "var(--font-sora)" }}
            >
              {entry.company}
            </p>
          </div>
          <span
            className="shrink-0 text-xs px-2.5 py-1 rounded-full"
            style={{
              background: accentBg,
              color: accent,
              fontFamily: "var(--font-space-mono)",
              border: `1px solid ${accentBorder}`,
            }}
          >
            {entry.date}
          </span>
        </div>

        {/* Highlights */}
        <ul className="space-y-2 mb-4">
          {entry.highlights.map((h, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              <span
                className="shrink-0 mt-1.5 w-1 h-1 rounded-full"
                style={{ background: accent }}
                aria-hidden="true"
              />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {entry.tech.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Experience Section ─── */
export default function Experience() {
  const professional = experiences.filter((e) => e.type === "professional");
  const founder = experiences.filter((e) => e.type === "founder");

  return (
    <section
      id="experience"
      className="section-pad relative"
      style={{ background: "var(--bg)" }}
      aria-label="Work Experience"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--border), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-3"
            style={{ color: "#2563eb", fontFamily: "var(--font-space-mono)" }}
          >
            03 / Experience
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
          >
            Career Timeline
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Professional Experience */}
          <div>
            <AnimatedSection className="flex items-center gap-3 mb-8" delay={0.1}>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(37,99,235,0.15)", color: "#2563eb" }}
                aria-hidden="true"
              >
                <Briefcase size={16} />
              </div>
              <h3
                className="font-semibold text-lg"
                style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
              >
                Professional Experience
              </h3>
            </AnimatedSection>

            {/* Timeline line */}
            <div className="relative">
              <div
                className="absolute left-0 top-2 bottom-0 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, #2563eb, rgba(37,99,235,0.2) 80%, transparent)",
                }}
                aria-hidden="true"
              />
              <div className="space-y-0">
                {professional.map((entry, i) => (
                  <TimelineEntry
                    key={entry.id}
                    entry={entry}
                    index={i}
                    type="professional"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Founder / Independent */}
          <div>
            <AnimatedSection className="flex items-center gap-3 mb-8" delay={0.15}>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(16,185,129,0.15)", color: "#10b981" }}
                aria-hidden="true"
              >
                <Rocket size={16} />
              </div>
              <h3
                className="font-semibold text-lg"
                style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
              >
                Founder &amp; Independent
              </h3>
            </AnimatedSection>

            {/* Timeline line */}
            <div className="relative">
              <div
                className="absolute left-0 top-2 bottom-0 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, #10b981, rgba(16,185,129,0.2) 80%, transparent)",
                }}
                aria-hidden="true"
              />
              <div className="space-y-0">
                {founder.map((entry, i) => (
                  <TimelineEntry
                    key={entry.id}
                    entry={entry}
                    index={i}
                    type="founder"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
