"use client";

import { Mail, Linkedin, Github } from "lucide-react";

const LINKS = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/mulukenmekuriya" },
  { icon: Github, label: "GitHub", href: "https://github.com/MulukenMekuriya" },
  { icon: Mail, label: "Email", href: "mailto:mulerthegrete@gmail.com" },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="border-t py-12"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "#2563eb" }}
              aria-hidden="true"
            >
              <span
                className="text-white text-xs font-bold"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                MM
              </span>
            </div>
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{
                color: "var(--head)",
                fontFamily: "var(--font-space-mono)",
                letterSpacing: "0.15em",
              }}
            >
              Muluken Mekuriya
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-5" aria-label="Footer navigation">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                className="text-xs transition-colors duration-200 hover:text-white no-underline"
                style={{ color: "var(--muted)", fontFamily: "var(--font-sora)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-[#2563eb] hover:text-white no-underline"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                }}
                aria-label={label}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: "var(--border)" }} aria-hidden="true" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ color: "var(--dim)", fontFamily: "var(--font-space-mono)" }}
          >
            &copy; 2026 Muluken Mekuriya. Built with Next.js &amp; deployed on Vercel.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--dim)", fontFamily: "var(--font-space-mono)" }}
          >
            Silver Spring, MD · Washington DC Metro
          </p>
        </div>
      </div>
    </footer>
  );
}
