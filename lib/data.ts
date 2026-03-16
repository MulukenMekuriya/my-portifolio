/* ─── Portfolio Content Data ─── */

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  status: string;
  statusColor: "green" | "blue" | "amber" | "purple";
  links: {
    label: string;
    href: string;
    icon: "github" | "external" | "doc" | "youtube";
  }[];
  featured?: boolean;
  role?: string;
};

export type Experience = {
  id: string;
  title: string;
  company: string;
  date: string;
  type: "professional" | "founder";
  highlights: string[];
  tech: string[];
};

export type SkillCategory = {
  id: string;
  label: string;
  icon: string;
  skills: string[];
};

/* ─── Projects ─── */
export const projects: Project[] = [
  {
    id: "structprep",
    title: "StructPrep",
    subtitle: "AI-Powered Exam Prep Platform with RAG Engine",
    description:
      "A SaaS platform that uses Retrieval-Augmented Generation to provide intelligent, context-aware answers to professional exam questions. Upload reference materials and get instant, accurate answers grounded in your study content — powered by vector search and LLM orchestration.",
    tech: [
      "Next.js 15",
      "Supabase",
      "pgvector",
      "Claude API",
      "Voyage AI",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
    ],
    status: "Phase 1 Complete — Phase 2 In Progress",
    statusColor: "blue",
    featured: true,
    links: [
      { label: "GitHub", href: "#", icon: "github" },
      { label: "Live Demo", href: "#", icon: "external" },
    ],
  },
  {
    id: "tws-bot",
    title: "TWS-Bot V2",
    subtitle: "Algorithmic Trading System with AI Decision Pipeline",
    description:
      "A 4-strategy trading ensemble (Momentum, Mean Reversion, Breakout, PEAD) powered by a 10-agent AI decision pipeline. Each trade signal passes through specialized agents for regime classification, sentiment analysis, and risk assessment before execution.",
    tech: [
      "Python",
      "Qwen/DashScope",
      "IBKR TWS API",
      "InfluxDB",
      "Grafana",
      "asyncio",
      "pandas",
    ],
    status: "Paper Trading Phase",
    statusColor: "amber",
    links: [
      { label: "GitHub", href: "#", icon: "github" },
      { label: "Architecture Doc", href: "#", icon: "doc" },
    ],
  },
  {
    id: "tolo-freight",
    title: "TOLO FREIGHT",
    subtitle: "Ethiopia's First Digital Freight Marketplace",
    description:
      "A logistics technology platform connecting Ethiopian shippers with freight carriers. Digitizing the country's fragmented trucking industry with real-time matching, transparent pricing, and end-to-end shipment tracking across four languages.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Express", "REST APIs"],
    status: "MVP Launched",
    statusColor: "green",
    role: "Founder & CEO",
    links: [
      { label: "GitHub", href: "#", icon: "github" },
      { label: "Website", href: "#", icon: "external" },
    ],
  },
  {
    id: "district-auto",
    title: "District Auto Rental",
    subtitle: "Fleet Management with AI Agent Workforce",
    description:
      "A fleet management system powered by autonomous AI agents handling dispatch, maintenance scheduling, customer operations, and pricing optimization. 10 specialized agents collaborate to run operations with minimal human intervention.",
    tech: [
      "Next.js",
      "Supabase",
      "Multi-Agent Orchestration",
      "Claude API",
      "TypeScript",
    ],
    status: "In Development",
    statusColor: "purple",
    links: [{ label: "GitHub", href: "#", icon: "github" }],
  },
  {
    id: "hope-studio",
    title: "Hope Studio Ethiopia",
    subtitle: "Automated AI Music Production Pipeline",
    description:
      "An end-to-end content pipeline that uses AI to produce, publish, and distribute Ethiopian gospel music and Amharic content — from AI-generated compositions to automated thumbnail creation and distribution across streaming platforms.",
    tech: ["Python", "Claude API", "Suno AI", "HTML5 Canvas", "YouTube API"],
    status: "Active — Publishing Content",
    statusColor: "green",
    links: [{ label: "YouTube Channel", href: "#", icon: "youtube" }],
  },
];

/* ─── Experience ─── */
export const experiences: Experience[] = [
  {
    id: "dod-afmed",
    title: "AI-Enabled Software Engineer (Contractor)",
    company: "U.S. Department of Defense — Air Force Medical Logistics (AFMED)",
    date: "Apr 2023 – Present",
    type: "professional",
    highlights: [
      "Design, develop, and maintain AI-enhanced enterprise applications and RESTful APIs supporting mission-critical Air Force Medical Logistics systems serving thousands of military personnel.",
      "Led enterprise modernization from Sencha Ext JS to React TypeScript, integrating AI-assisted development workflows and improving system performance, maintainability, and developer velocity",
      "Engineered role-based access control (RBAC) systems and structured reporting features aligned with DoD security standards and compliance requirements",
      "Resolved high-priority production issues in mission-critical government environments with stringent uptime and security standards",
      "Collaborated with government program managers and cross-functional teams to deliver features on schedule within federal acquisition frameworks",
    ],
    tech: [
      "React TypeScript",
      "C#/.NET",
      "SQL Server",
      "REST APIs",
      "RBAC",
      "FISMA",
    ],
  },
  {
    id: "dol",
    title: "Web Application Developer (Contractor)",
    company: "U.S. Department of Labor",
    date: "Feb 2022 – Jan 2023",
    type: "professional",
    highlights: [
      "Modernized a key agency web application by developing a new backend API using ASP.NET, improving performance and maintainability.",
      "Built web features with JavaScript, HTML, and CSS while ensuring compliance with federal accessibility and security standards.",
      "Utilized Angular JS and Drupal to meet specific agency security requirements and content management needs.",
    ],
    tech: [
      "ASP.NET",
      "AngularJS",
      "JavaScript",
      "Drupal",
      "SQL Server",
      "Section 508",
    ],
  },
  {
    id: "wsp",
    title: "Consultant Engineer (Frontend)",
    company: "WSP USA, Inc.",
    date: "Apr 2019 – Jan 2022",
    type: "professional",
    highlights: [
      "Built and deployed enterprise web applications for large-scale infrastructure projects, working directly with client stakeholders",
      "Delivered responsive, cross-platform UI features for desktop and mobile within agile delivery teams",
      "Managed content migrations and coordinated updates with digital content teams to maintain accuracy and regulatory compliance",
    ],
    tech: ["React", "JavaScript", "HTML/CSS", "Agile", "Enterprise Web Apps"],
  },
  {
    id: "mercado",
    title: "Junior Software Engineer",
    company: "Mercado Consultants, Inc.",
    date: "Sep 2016 – Apr 2019",
    type: "professional",
    highlights: [
      "Supported a senior web development team in building and enhancing internal enterprise applications",
      "Assisted in API design and database integration using SQL Server and .NET frameworks",
      "Performed code reviews and quality assurance testing, contributing to release readiness and software reliability",
    ],
    tech: [".NET", "SQL Server", "JavaScript", "HTML/CSS", "QA Testing"],
  },
  {
    id: "structprep-founder",
    title: "Founder & Lead Engineer — StructPrep",
    company: "AI-Powered SaaS Exam Prep Platform (structprep.com)",
    date: "2025 – Present",
    type: "founder",
    highlights: [
      "Building a production SaaS platform using Next.js 15, Supabase, Drizzle ORM, and the Claude API (Sonnet)",
      "Architected a full RAG pipeline using Voyage AI embeddings and vector search to power AI-driven practice question generation and explanations",
      "Designed multi-tenant data architecture with role-based access, secure API routes, and scalable question bank seeding (80+ questions)",
      "Implemented real-time session flow, performance analytics dashboards, and bulk import pipelines for structured exam content",
    ],
    tech: [
      "Next.js 15",
      "Supabase",
      "pgvector",
      "Claude API",
      "Voyage AI",
      "TypeScript",
      "Drizzle ORM",
    ],
  },
  {
    id: "tws-founder",
    title: "Founder & Lead Engineer — TWS-Bot Algorithmic Trading System",
    company: "Independent Project",
    date: "2024 – Present",
    type: "founder",
    highlights: [
      "Designed and built a multi-strategy ensemble trading system (Momentum Pullback, Mean Reversion, Breakout, PEAD) with a 10-agent AI decision brain using Claude and Qwen APIs",
      "Built real-time data ingestion pipelines, telemetry logging, and performance monitoring dashboards tracking P&L, Sharpe ratio, and drawdown metrics",
      "Implemented anomaly detection, predictive trend analysis, and intelligent risk management logic integrating ML model outputs into live trading decisions",
      "Stress-tested across historical market regimes; benchmarked against hedge fund industry metrics before moving to paper trading",
    ],
    tech: [
      "Python",
      "Qwen/DashScope",
      "IBKR TWS API",
      "InfluxDB",
      "Grafana",
      "asyncio",
      "pandas",
    ],
  },
  {
    id: "tolo-founder",
    title: "CEO & CTO — TOLO FREIGHT",
    company: "Ethiopia's First Digital Freight Marketplace",
    date: "2022 – Present",
    type: "founder",
    highlights: [
      "Built and launched a multilingual (Amharic, English, Oromiffa, Tigrinya) mobile and web freight marketplace connecting shippers with carriers in Ethiopia's $800M trucking market",
      "Developed the full technical architecture and led end-to-end product development from concept to iOS App Store launch",
      "Onboarded 3 fleet partners representing 60+ trucks; grew platform to operational MVP",
    ],
    tech: ["React Native", "Node.js", "PostgreSQL", "Express", "REST APIs"],
  },
];

/* ─── Skills ─── */
export const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    label: "AI / Machine Learning",
    icon: "brain",
    skills: [
      "Claude API",
      "OpenAI API",
      "Voyage AI Embeddings",
      "Qwen/DashScope",
      "RAG Pipelines",
      "pgvector",
      "Multi-Agent Systems",
      "LLM Orchestration",
      "Vector Search",
      "Prompt Engineering",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "monitor",
    skills: [
      "React (TypeScript)",
      "Next.js 15",
      "Tailwind CSS",
      "Framer Motion",
      "Material UI",
      "HTML5",
      "CSS3",
      "AngularJS",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "server",
    skills: [
      "Node.js (TypeScript)",
      "Python",
      "C#/.NET",
      "ASP.NET MVC",
      "Express",
      "RESTful APIs",
      "Drizzle ORM",
    ],
  },
  {
    id: "data",
    label: "Data & Infrastructure",
    icon: "database",
    skills: [
      "PostgreSQL",
      "Supabase",
      "SQL Server",
      "InfluxDB",
      "Drizzle ORM",
      "DynamoDB",
      "pgvector",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      "AWS Lambda",
      "AWS S3",
      "AWS DynamoDB",
      "AWS CDK",
      "GitHub Actions",
      "Docker",
      "Vercel",
      "Grafana",
    ],
  },
  {
    id: "compliance",
    label: "Compliance & Security",
    icon: "shield",
    skills: [
      "FISMA",
      "RBAC",
      "Section 508 Accessibility",
      "DoD Public Trust Clearance",
      "WCAG 2.1",
      "Zero-Downtime Deployments",
    ],
  },
];

/* ─── Stats ─── */
export const stats = [
  { label: "Years Experience", value: "9+" },
  { label: "DoD Public Trust", value: "Cleared" },
  { label: "AI Systems Built", value: "5" },
  { label: "Graduate GPA", value: "4.0" },
  { label: "Federal Agencies", value: "2" },
  { label: "Platforms Founded", value: "3" },
];

/* ─── Education ─── */
export const education = [
  {
    degree: "Master of Engineering",
    school: "Morgan State University",
    year: "2020",
    gpa: "4.0",
    location: "Baltimore, MD",
  },
  {
    degree: "Bachelor of Science",
    school: "Bahir Dar University",
    year: "2015",
    gpa: "3.49",
    location: "Bahir Dar, Ethiopia",
  },
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    target: "Q2 2026",
    status: "In Progress",
  },
  {
    name: "AWS Solutions Architect Associate",
    target: "Q3 2026",
    status: "Planned",
  },
];
