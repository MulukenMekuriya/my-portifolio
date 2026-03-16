"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { stats } from "@/lib/data";

/* ─── Terminal Typing Animation ─── */
const TERMINAL_LINES = [
  { prompt: "~", cmd: "whoami", output: "muluken.mekuriya" },
  { prompt: "~", cmd: "cat clearance.txt", output: "DoD Public Trust — Active" },
  { prompt: "~", cmd: "ls ai-systems/", output: "rag-pipeline/  multi-agent/  vector-search/  llm-orchestration/" },
  { prompt: "~", cmd: "python run_trading_bot.py", output: "[AI] 10 agents online → paper trading active" },
  { prompt: "~", cmd: "git log --oneline -3", output: "a3f9e12 feat: RAG pipeline v2 with reranking\n7c1d843 feat: pgvector hybrid search\n2b4a1ef feat: multi-agent orchestration layer" },
];

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typingIndex, setTypingIndex] = useState<number>(0);
  const [typedCmd, setTypedCmd] = useState<string>("");
  const [showOutput, setShowOutput] = useState<boolean>(false);

  useEffect(() => {
    const line = TERMINAL_LINES[visibleLines];
    if (!line) return;

    // Type the command
    if (typingIndex < line.cmd.length) {
      const t = setTimeout(() => {
        setTypedCmd((prev) => prev + line.cmd[typingIndex]);
        setTypingIndex((i) => i + 1);
      }, 45 + Math.random() * 35);
      return () => clearTimeout(t);
    }

    // Show output after typing
    if (!showOutput) {
      const t = setTimeout(() => setShowOutput(true), 280);
      return () => clearTimeout(t);
    }

    // Move to next line
    if (visibleLines < TERMINAL_LINES.length - 1) {
      const t = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setTypingIndex(0);
        setTypedCmd("");
        setShowOutput(false);
      }, 900);
      return () => clearTimeout(t);
    }
  }, [visibleLines, typingIndex, showOutput]);

  const completedLines = TERMINAL_LINES.slice(0, visibleLines);
  const currentLine = TERMINAL_LINES[visibleLines];

  return (
    <div
      className="rounded-xl overflow-hidden border shadow-2xl shadow-black/40"
      style={{ borderColor: "var(--border)", background: "#0d1117" }}
      role="presentation"
      aria-hidden="true"
    >
      {/* Terminal chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: "var(--border)", background: "#161b22" }}
      >
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span
          className="ml-3 text-xs"
          style={{ color: "var(--muted)", fontFamily: "var(--font-space-mono)" }}
        >
          muluken@portfolio:~$
        </span>
      </div>

      {/* Terminal body */}
      <div
        className="p-5 space-y-2 min-h-[280px]"
        style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.78rem", lineHeight: "1.7" }}
      >
        {completedLines.map((line, i) => (
          <div key={i}>
            <div className="flex gap-2">
              <span style={{ color: "#10b981" }}>{line.prompt}$</span>
              <span style={{ color: "#e5e7eb" }}>{line.cmd}</span>
            </div>
            {line.output.split("\n").map((o, j) => (
              <div key={j} style={{ color: "#6b7280", paddingLeft: "1.5rem" }}>
                {o}
              </div>
            ))}
          </div>
        ))}

        {currentLine && (
          <div>
            <div className="flex gap-2 items-center">
              <span style={{ color: "#10b981" }}>{currentLine.prompt}$</span>
              <span style={{ color: "#e5e7eb" }}>{typedCmd}</span>
              <span
                className="cursor-blink inline-block w-2 h-4"
                style={{ background: "#2563eb", verticalAlign: "middle" }}
              />
            </div>
            {showOutput &&
              currentLine.output.split("\n").map((o, j) => (
                <div key={j} style={{ color: "#6b7280", paddingLeft: "1.5rem" }}>
                  {o}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Stats Ticker ─── */
function StatsTicker() {
  const doubled = [...stats, ...stats]; // duplicate for seamless loop

  return (
    <div
      className="relative overflow-hidden py-4 border-y"
      style={{ borderColor: "var(--border)" }}
      aria-label="Key statistics"
    >
      <div
        className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, var(--bg), transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, var(--bg), transparent)",
        }}
      />
      <div className="ticker-inner">
        {doubled.map((stat, i) => (
          <div
            key={i}
            className="flex items-center gap-2 mx-8 shrink-0"
          >
            <span
              className="font-bold text-lg"
              style={{
                color: "#2563eb",
                fontFamily: "var(--font-bebas)",
                letterSpacing: "0.05em",
              }}
            >
              {stat.value}
            </span>
            <span
              className="text-sm uppercase tracking-widest"
              style={{ color: "var(--muted)", fontFamily: "var(--font-space-mono)", fontSize: "0.7rem" }}
            >
              {stat.label}
            </span>
            <span className="ml-8 text-[#2563eb]/30 text-xl">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Hero Section ─── */
export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
      aria-label="Hero — Muluken Mekuriya"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border text-xs"
              style={{
                borderColor: "rgba(37,99,235,0.3)",
                background: "rgba(37,99,235,0.08)",
                color: "#60a5fa",
                fontFamily: "var(--font-space-mono)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              Open to Senior AI / Federal Engineering Roles
            </motion.div>

            {/* Name — display font, massive */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display leading-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(3.5rem, 9vw, 8rem)",
                  color: "var(--head)",
                  letterSpacing: "0.03em",
                }}
              >
                MULUKEN
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-display leading-none"
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(3.5rem, 9vw, 8rem)",
                  color: "#2563eb",
                  letterSpacing: "0.03em",
                }}
              >
                MEKURIYA
              </motion.h1>
            </div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mb-2"
            >
              <p
                className="font-semibold text-lg sm:text-xl"
                style={{ color: "var(--body)", fontFamily: "var(--font-sora)" }}
              >
                Senior AI Software Engineer
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                {["DoD Cleared", "9+ Years Federal Contracting"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-0.5 text-xs rounded"
                    style={{
                      background: "rgba(37,99,235,0.12)",
                      color: "#93c5fd",
                      fontFamily: "var(--font-space-mono)",
                      border: "1px solid rgba(37,99,235,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--muted)", fontFamily: "var(--font-dm-sans)" }}
            >
              I build AI-powered systems for federal agencies and defense environments —
              from{" "}
              <span style={{ color: "var(--body)", fontWeight: 500 }}>
                multi-agent architectures and RAG pipelines
              </span>{" "}
              to mission-critical enterprise platforms serving thousands of military personnel.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/20"
                style={{
                  background: "#2563eb",
                  fontFamily: "var(--font-sora)",
                  fontSize: "0.9rem",
                }}
                aria-label="View projects"
              >
                <ExternalLink size={16} />
                View Projects
              </button>
              <a
                href="/resume.pdf"
                download="Muluken_Mekuriya_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:border-[#2563eb] hover:text-[#2563eb] no-underline"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--body)",
                  fontFamily: "var(--font-sora)",
                  fontSize: "0.9rem",
                  background: "transparent",
                }}
                aria-label="Download resume"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <TerminalWindow />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-4 ml-auto w-fit flex items-center gap-3 px-4 py-3 rounded-xl border"
              style={{ borderColor: "var(--border)", background: "var(--card)" }}
            >
              <div className="text-2xl" aria-hidden="true">🏛️</div>
              <div>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "var(--body)", fontFamily: "var(--font-sora)" }}
                >
                  Federal AI Engineer
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--muted)", fontFamily: "var(--font-space-mono)" }}
                >
                  FISMA · RBAC · Zero-Downtime
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        ref={scrollRef}
        className="w-full mt-auto"
      >
        <StatsTicker />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={18} style={{ color: "var(--dim)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
