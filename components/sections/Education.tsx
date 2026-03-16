"use client";

import { GraduationCap, Award, Clock } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="section-pad relative"
      style={{ background: "var(--bg)" }}
      aria-label="Education and Certifications"
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
            05 / Education
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
          >
            Credentials
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <AnimatedSection className="flex items-center gap-2 mb-6">
              <GraduationCap size={18} style={{ color: "#2563eb" }} aria-hidden="true" />
              <h3
                className="font-semibold"
                style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
              >
                Academic Background
              </h3>
            </AnimatedSection>

            <StaggerContainer className="space-y-4" staggerDelay={0.12}>
              {education.map((edu) => (
                <StaggerItem key={edu.school}>
                  <div
                    className="card-base p-6 group"
                    role="article"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p
                          className="font-bold text-base"
                          style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
                        >
                          {edu.degree}
                        </p>
                        <p
                          className="text-sm mt-0.5"
                          style={{ color: "#2563eb", fontFamily: "var(--font-sora)" }}
                        >
                          {edu.school}
                        </p>
                        <p
                          className="text-xs mt-1"
                          style={{ color: "var(--muted)", fontFamily: "var(--font-space-mono)" }}
                        >
                          {edu.location} · {edu.year}
                        </p>
                      </div>
                      <div
                        className="shrink-0 text-center px-3 py-2 rounded-lg"
                        style={{
                          background: "rgba(37,99,235,0.1)",
                          border: "1px solid rgba(37,99,235,0.2)",
                        }}
                      >
                        <p
                          className="text-xl font-bold"
                          style={{
                            color: "#2563eb",
                            fontFamily: "var(--font-bebas)",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {edu.gpa}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "var(--muted)", fontFamily: "var(--font-space-mono)" }}
                        >
                          GPA
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Certifications */}
          <div>
            <AnimatedSection className="flex items-center gap-2 mb-6" delay={0.1}>
              <Award size={18} style={{ color: "#f59e0b" }} aria-hidden="true" />
              <h3
                className="font-semibold"
                style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
              >
                Certifications
              </h3>
            </AnimatedSection>

            <StaggerContainer className="space-y-4" staggerDelay={0.12}>
              {certifications.map((cert) => (
                <StaggerItem key={cert.name}>
                  <div
                    className="card-base p-6 group"
                    role="article"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{
                            background: "rgba(245,158,11,0.1)",
                            border: "1px solid rgba(245,158,11,0.2)",
                          }}
                          aria-hidden="true"
                        >
                          <Clock size={15} style={{ color: "#f59e0b" }} />
                        </div>
                        <div>
                          <p
                            className="font-semibold text-sm"
                            style={{ color: "var(--head)", fontFamily: "var(--font-sora)" }}
                          >
                            {cert.name}
                          </p>
                          <p
                            className="text-xs mt-0.5"
                            style={{ color: "var(--muted)", fontFamily: "var(--font-space-mono)" }}
                          >
                            Target: {cert.target}
                          </p>
                        </div>
                      </div>
                      <span
                        className="shrink-0 px-2.5 py-1 rounded-full text-xs"
                        style={{
                          background: "rgba(245,158,11,0.1)",
                          color: "#fbbf24",
                          fontFamily: "var(--font-space-mono)",
                          border: "1px solid rgba(245,158,11,0.2)",
                        }}
                      >
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}

              {/* AWS note */}
              <StaggerItem>
                <p
                  className="text-xs pt-2 pl-1"
                  style={{ color: "var(--dim)", fontFamily: "var(--font-space-mono)" }}
                >
                  Actively studying · Exam registration in progress
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
