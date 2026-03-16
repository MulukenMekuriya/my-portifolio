"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, FileText, Youtube, ArrowUpRight } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { projects, type Project } from "@/lib/data";

/* ─── Status Badge ─── */
const STATUS_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  green:  { bg: "rgba(16,185,129,0.1)",  text: "#34d399", dot: "#10b981" },
  blue:   { bg: "rgba(37,99,235,0.1)",   text: "#60a5fa", dot: "#2563eb" },
  amber:  { bg: "rgba(245,158,11,0.1)",  text: "#fbbf24", dot: "#f59e0b" },
  purple: { bg: "rgba(139,92,246,0.1)",  text: "#a78bfa", dot: "#8b5cf6" },
};

function StatusBadge({ status, color }: { status: string; color: Project["statusColor"] }) {
  const c = STATUS_COLORS[color];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
      style={{ background: c.bg, color: c.text, fontFamily: "var(--font-space-mono)" }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.dot }} />
      {status}
    </span>
  );
}

/* ─── Tech Badge ─── */
function TechBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-block px-2 py-0.5 rounded text-xs"
      style={{
        background: "rgba(255,255,255,0.05)",
        color: "var(--muted)",
        fontFamily: "var(--font-space-mono)",
        border: "1px solid var(--border)",
      }}
    >
      {label}
    </span>
  );
}

/* ─── Link Button ─── */
function LinkBtn({ label, href, icon }: { label: string; href: string; icon: Project["links"][0]["icon"] }) {
  const Icon = icon === "github" ? Github : icon === "external" ? ExternalLink : icon === "youtube" ? Youtube : FileText;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 hover:text-[#2563eb] no-underline"
      style={{ color: "var(--muted)", fontFamily: "var(--font-sora)" }}
      aria-label={label}
    >
      <Icon size={13} />
      {label}
    </a>
  );
}

/* ─── Mock Dashboard SVG for featured card ─── */
function MockDashboard() {
  return (
    <div
      className="w-full h-full p-4 flex flex-col gap-3"
      style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.65rem" }}
      aria-hidden="true"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-16 h-2 rounded" style={{ background: "rgba(37,99,235,0.3)" }} />
          <div className="w-10 h-2 rounded" style={{ background: "rgba(255,255,255,0.08)" }} />
        </div>
        <div className="w-20 h-5 rounded-full" style={{ background: "rgba(37,99,235,0.2)" }} />
      </div>
      {/* Content rows */}
      {[80, 60, 90, 45, 70].map((w, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm shrink-0" style={{ background: `rgba(37,99,235,${0.15 + i * 0.05})` }} />
          <div className="h-2 rounded flex-1" style={{ width: `${w}%`, background: "rgba(255,255,255,0.05)" }} />
          <div className="w-8 h-2 rounded shrink-0" style={{ background: "rgba(37,99,235,0.25)" }} />
        </div>
      ))}
      {/* Chart placeholder */}
      <div
        className="flex-1 rounded-lg flex items-end gap-1 px-3 pt-3 pb-0 mt-1"
        style={{ background: "rgba(37,99,235,0.05)", border: "1px solid rgba(37,99,235,0.15)" }}
      >
        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${h}%`,
              background: `rgba(37,99,235,${0.3 + i * 0.05})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Featured Project Card (large) ─── */
function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="relative rounded-2xl overflow-hidden group"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Top gradient bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: "linear-gradient(to right, #2563eb, #60a5fa, transparent)" }}
        aria-hidden="true"
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(37,99,235,0.06) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left — Content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "#2563eb", fontFamily: "var(--font-space-mono)" }}
              >
                Featured Project
              </span>
              <StatusBadge status={project.status} color={project.statusColor} />
            </div>

            <h3
              className="text-2xl sm:text-3xl font-bold mb-1"
              style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
            >
              {project.title}
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: "#2563eb", fontFamily: "var(--font-sora)" }}
            >
              {project.subtitle}
            </p>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--muted)" }}
            >
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5">
            {project.links.map((l) => (
              <LinkBtn key={l.label} {...l} />
            ))}
            <div
              className="ml-auto w-9 h-9 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ borderColor: "#2563eb", color: "#2563eb" }}
              aria-hidden="true"
            >
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>

        {/* Right — Mock visual */}
        <div
          className="relative min-h-[280px] lg:min-h-auto overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0d1117, #111827)",
            borderLeft: "1px solid var(--border)",
          }}
          aria-hidden="true"
        >
          <MockDashboard />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, var(--card) 0%, transparent 15%)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Standard Project Card ─── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(37,99,235,0.12)" }}
      transition={{ duration: 0.25 }}
      className="card-base p-6 flex flex-col h-full group"
      role="article"
    >
      <div className="flex items-start justify-between mb-4">
        <StatusBadge status={project.status} color={project.statusColor} />
        {project.role && (
          <span
            className="text-xs"
            style={{ color: "var(--muted)", fontFamily: "var(--font-space-mono)" }}
          >
            {project.role}
          </span>
        )}
      </div>

      <h3
        className="text-lg font-bold mb-1"
        style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
      >
        {project.title}
      </h3>
      <p
        className="text-xs mb-3"
        style={{ color: "#2563eb", fontFamily: "var(--font-sora)" }}
      >
        {project.subtitle}
      </p>
      <p
        className="text-sm leading-relaxed mb-5 flex-1"
        style={{ color: "var(--muted)" }}
      >
        {project.description}
      </p>

      {/* Tech */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.slice(0, 5).map((t) => (
          <TechBadge key={t} label={t} />
        ))}
        {project.tech.length > 5 && (
          <span
            className="text-xs"
            style={{ color: "var(--dim)", fontFamily: "var(--font-space-mono)" }}
          >
            +{project.tech.length - 5}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
        {project.links.map((l) => (
          <LinkBtn key={l.label} {...l} />
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Projects Section ─── */
export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const secondary = projects.find((p) => p.id === "tws-bot")!;
  const rest = projects.filter((p) => !p.featured && p.id !== "tws-bot");

  return (
    <section
      id="projects"
      className="section-pad relative"
      style={{ background: "var(--surface)" }}
      aria-label="Projects"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--border), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="flex items-end justify-between mb-12">
          <div>
            <p
              className="text-xs uppercase tracking-[0.25em] mb-3"
              style={{ color: "#2563eb", fontFamily: "var(--font-space-mono)" }}
            >
              02 / Projects
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
            >
              What I&rsquo;ve Built
            </h2>
          </div>
          <p
            className="hidden sm:block text-sm max-w-xs text-right"
            style={{ color: "var(--muted)" }}
          >
            AI systems, SaaS products, and platforms — not tutorial clones.
          </p>
        </AnimatedSection>

        {/* Featured + secondary row */}
        <AnimatedSection className="grid lg:grid-cols-3 gap-5 mb-5">
          <div className="lg:col-span-2">
            <FeaturedCard project={featured} />
          </div>
          <div>
            <ProjectCard project={secondary} />
          </div>
        </AnimatedSection>

        {/* Rest of projects */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.1}>
          {rest.map((p) => (
            <StaggerItem key={p.id}>
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
