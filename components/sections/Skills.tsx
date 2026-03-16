"use client";

import { Brain, Monitor, Server, Database, Cloud, Shield } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { skillCategories } from "@/lib/data";

const ICONS: Record<string, React.ElementType> = {
  brain: Brain,
  monitor: Monitor,
  server: Server,
  database: Database,
  cloud: Cloud,
  shield: Shield,
};

const CATEGORY_COLORS: Record<string, { icon: string; bg: string; border: string }> = {
  ai:         { icon: "#2563eb", bg: "rgba(37,99,235,0.08)",   border: "rgba(37,99,235,0.2)" },
  frontend:   { icon: "#8b5cf6", bg: "rgba(139,92,246,0.08)",  border: "rgba(139,92,246,0.2)" },
  backend:    { icon: "#10b981", bg: "rgba(16,185,129,0.08)",  border: "rgba(16,185,129,0.2)" },
  data:       { icon: "#f59e0b", bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.2)" },
  cloud:      { icon: "#06b6d4", bg: "rgba(6,182,212,0.08)",   border: "rgba(6,182,212,0.2)" },
  compliance: { icon: "#ef4444", bg: "rgba(239,68,68,0.08)",   border: "rgba(239,68,68,0.2)" },
};

function SkillBadge({ label, color }: { label: string; color: { icon: string; bg: string; border: string } }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105 cursor-default"
      style={{
        background: color.bg,
        border: `1px solid ${color.border}`,
        color: color.icon,
        fontFamily: "var(--font-space-mono)",
      }}
    >
      {label}
    </span>
  );
}

function CategoryCard({ category }: { category: typeof skillCategories[0] }) {
  const Icon = ICONS[category.icon] ?? Brain;
  const color = CATEGORY_COLORS[category.id] ?? CATEGORY_COLORS.ai;

  return (
    <div
      className="card-base p-6 h-full"
      role="region"
      aria-label={category.label}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: color.bg, border: `1px solid ${color.border}` }}
          aria-hidden="true"
        >
          <Icon size={17} style={{ color: color.icon }} />
        </div>
        <h3
          className="font-semibold text-sm"
          style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
        >
          {category.label}
        </h3>
      </div>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill} label={skill} color={color} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad relative"
      style={{ background: "var(--surface)" }}
      aria-label="Skills and Technology Stack"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--border), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-3"
            style={{ color: "#2563eb", fontFamily: "var(--font-space-mono)" }}
          >
            04 / Skills
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
          >
            Tech Stack
          </h2>
          <p
            className="mt-3 max-w-xl text-sm"
            style={{ color: "var(--muted)" }}
          >
            Tools and technologies I use to architect and ship production systems.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.08}
        >
          {skillCategories.map((cat) => (
            <StaggerItem key={cat.id}>
              <CategoryCard category={cat} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom callout */}
        <AnimatedSection
          className="mt-14 p-6 rounded-2xl flex flex-wrap items-center justify-between gap-4"
          style={{ background: "var(--card)", border: "1px solid var(--border)" } as React.CSSProperties}
          delay={0.2}
        >
          <div>
            <p
              className="font-semibold mb-1"
              style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
            >
              AWS Certified — In Progress
            </p>
            <p
              className="text-sm"
              style={{ color: "var(--muted)" }}
            >
              Cloud Practitioner (Q2 2026) → Solutions Architect Associate (Q3 2026)
            </p>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
            style={{
              background: "rgba(37,99,235,0.1)",
              color: "#60a5fa",
              fontFamily: "var(--font-space-mono)",
              border: "1px solid rgba(37,99,235,0.2)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Certification Track Active
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
