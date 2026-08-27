import { ProfileInfo, Project, SkillCategoryGroup, ExperienceItem, EducationItem, CertificationItem, TestimonialItem, TalkItem } from '../types';

export const initialProfile: ProfileInfo = {
  name: "Muchiri",
  role: "Cybersecurity Practitioner & Full-Stack Developer",
  tagline: "Practical cybersecurity practitioner and full-stack software developer focused on engineering robust applications and exploring offensive and defensive security domains.",
  headline: "Security-minded Builder • Full-Stack Developer • Technical Leader",
  location: "Nyandarua, Kenya (Open to Remote)",
  email: "martingatimu69@gmail.com",
  status: "Available for cybersecurity, software engineering, and technical leadership opportunities",
  bioParagraphs: [
    "Hi there, I'm Muchiri. I’m a practical cybersecurity practitioner and full-stack software developer focused on engineering robust applications and exploring offensive and defensive security domains.",
    "My work sits at the intersection of secure software engineering, system design, and hands-on technical leadership. I enjoy building resilient systems, mentoring peers, and translating security concepts into practical, deployable solutions.",
    "I’m passionate about technical leadership, peer mentoring, and building secure, high-impact systems that solve real-world problems while staying resilient under pressure."
  ],
  stats: [
    { label: "Production Services", value: "45+", subtext: "Deployed & Maintained" },
    { label: "System Uptime", value: "99.99%", subtext: "SLA Maintained" },
    { label: "Community & OSS", value: "1.5k+", subtext: "GitHub Stars" }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    email: "martingatimu69@gmail.com",
    calendly: "tel:+44745422986",
    website: "https://mkulima-nyandarua.vercel.app/",
    medium: "https://medium.com",
    resumeUrl: "https://drive.google.com/file/d/1PJz2NYfGh3Bbw9tRxl0Whvbrgq0DsNOt/view?usp=drive_link"
  },
  principles: [
    {
      title: "Resilience Over Complexity",
      description: "Systems should fail gracefully with self-healing mechanisms, idempotent operations, and observable fallbacks rather than fragile cleverness.",
      tag: "Architecture"
    },
    {
      title: "Measured Performance",
      description: "Optimize based on concrete p99 latency profiling, flamegraphs, and synthetic benchmarks, not premature assumptions.",
      tag: "Execution"
    },
    {
      title: "Human-Centric Craft",
      description: "High-quality software elevates both the end-user experiencing lightning-fast interactions and the developer team maintaining clean codebases.",
      tag: "Product"
    }
  ]
};

export const initialProjects: Project[] = [
  {
    id: "mkulima-nyandarua",
    title: "Mkulima Nyandarua",
    subtitle: "Digital platform for rural agricultural services and community value delivery",
    category: "Full-Stack",
    description: "A practical web platform built to support community-facing agricultural workflows, digital service delivery, and scalable backend functionality for a modern rural ecosystem.",
    problemStatement: "Rural and agricultural communities needed a reliable digital platform to offer accessible services, connect resources, and modernize service delivery without heavy operational friction.",
    solutionArchitecture: "Built a responsive web application with a scalable backend, streamlined user flows, and cloud hosting to ensure accessibility, maintainability, and smooth product delivery.",
    outcomes: [
      "Deployed a working web platform accessible to users online",
      "Created a maintainable architecture for future feature growth and service expansion",
      "Delivered a digital-first experience focused on practical utility and community value"
    ],
    metrics: [
      { label: "Platform", value: "Live" },
      { label: "Focus", value: "Rural Tech" },
      { label: "Delivery", value: "Web" }
    ],
    techStack: ["React", "TypeScript", "Node.js", "Vercel", "Web App", "Cloud"],
    liveUrl: "https://mkulima-nyandarua.vercel.app/",
    githubUrl: "https://github.com",
    featured: true,
    colorGradient: "from-emerald-600 to-green-950",
    stars: 180
  },
  {
    id: "nexus-mesh",
    title: "NexusMesh Distributed Gateway",
    subtitle: "High-throughput API Gateway & Service Mesh with Zero-Trust Security",
    category: "Cloud & Systems",
    description: "An ultra-low-latency edge routing proxy and dynamic load balancer designed to handle multi-region service traffic with automated rate limiting, circuit breaking, and telemetry aggregation.",
    problemStatement: "Legacy microservice routing experienced intermittent p99 latency spikes (over 450ms) and lacked decentralized tenant token validation, overburdening central auth servers.",
    solutionArchitecture: "Engineered a high-performance proxy in Go and Rust utilizing eBPF packet inspection, distributed Redis cluster cache for rate limiting tokens, and gRPC streaming for config synchronization.",
    outcomes: [
      "Reduced p99 network latency from 450ms to 24ms across 12 distributed edge regions",
      "Slashed auth server workload by 78% via cryptographic edge token verification",
      "Sustained 180,000 requests per second under stress testing with zero dropped connections"
    ],
    metrics: [
      { label: "Latency P99", value: "24ms" },
      { label: "Throughput", value: "180k req/s" },
      { label: "Cost Reduction", value: "42%" }
    ],
    techStack: ["Go", "Rust", "gRPC", "Kubernetes", "Redis", "eBPF", "Prometheus", "Docker"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
    colorGradient: "from-blue-600 to-indigo-900",
    stars: 540
  },
  {
    id: "strata-analytics",
    title: "Strata Real-Time Analytics Engine",
    subtitle: "Streaming Event Lake & Interactive Visual Query Workbench",
    category: "AI & Data",
    description: "A real-time data streaming platform that ingests, deduplicates, and surfaces analytical metrics across hundreds of millions of user interactions with sub-second dashboard rendering.",
    problemStatement: "Product and engineering teams struggled with 4-hour batch processing lags to detect anomalies, regressions, and user churn triggers.",
    solutionArchitecture: "Constructed an event pipeline streaming through Apache Kafka into ClickHouse columnar storage, with a reactive TypeScript frontend powered by WebSockets and WebAssembly for live query aggregation.",
    outcomes: [
      "Decreased query execution latency for 500M+ record datasets from 35s to 320ms",
      "Enabled real-time anomaly alerts within 4 seconds of occurrence",
      "Integrated automated time-series forecasting utilizing lightweight regression models"
    ],
    metrics: [
      { label: "Daily Events", value: "350M+" },
      { label: "Query Speed", value: "320ms" },
      { label: "Data Pipeline", value: "<4s lag" }
    ],
    techStack: ["TypeScript", "React", "Kafka", "ClickHouse", "Node.js", "WebSockets", "Wasm", "TailwindCSS"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
    colorGradient: "from-emerald-600 to-teal-950",
    stars: 380
  },
  {
    id: "hyper-forge",
    title: "HyperForge Cloud IDE & Sandbox",
    subtitle: "Browser-based Ephemeral Micro-VM Development Environment",
    category: "Full-Stack",
    description: "A collaborative web-based workspace allowing cybersecurity engineers to spin up isolated Linux environments, edit multi-file codebases in real-time, and preview running services instantly.",
    problemStatement: "Developer onboarding took up to 3 days per engineer due to inconsistent local machine configurations and complex dependency setups.",
    solutionArchitecture: "Built a containerized orchestration runtime utilizing Firecracker microVMs, Monaco Editor integration with Language Server Protocol (LSP) over WebSockets, and CRDT-based operational transforms for live pairing.",
    outcomes: [
      "Spun up complete dev environments in under 1.8 seconds with preloaded dependencies",
      "Reduced company-wide onboarding friction from 3 days to under 15 minutes",
      "Supported real-time cursor syncing and multi-user terminal multiplexing"
    ],
    metrics: [
      { label: "Cold Boot", value: "1.8s" },
      { label: "Active Sandboxes", value: "15,000+" },
      { label: "Onboarding Time", value: "-92%" }
    ],
    techStack: ["React 19", "TypeScript", "Node.js", "Docker", "WebSockets", "CRDTs", "Linux", "TailwindCSS"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
    colorGradient: "from-purple-600 to-violet-950",
    stars: 620
  },
  {
    id: "aegis-ledger",
    title: "Aegis FinTech Transaction Ledger",
    subtitle: "Double-Entry Cryptographically Verifiable Audit Ledger",
    category: "Full-Stack",
    description: "A high-integrity double-entry accounting engine for multi-currency transactions with immutable audit trails, automated reconciliation, and strict ACID guarantees.",
    problemStatement: "Financial operations suffered reconciliation mismatches during peak holiday transaction volumes, risking audit compliance.",
    solutionArchitecture: "Designed an event-sourced ledger using PostgreSQL with strict isolation levels, Merkle tree hash verification for immutable audit verification, and an intuitive dashboard for compliance officers.",
    outcomes: [
      "Zero ledger discrepancy across $120M+ in processed transactions over 18 months",
      "Automated 99.4% of daily bank reconciliation routines without manual intervention",
      "Achieved SOC-2 Type II audit certification with praise for audit trail transparency"
    ],
    metrics: [
      { label: "Processed Vol", value: "$120M+" },
      { label: "Audit Match", value: "100%" },
      { label: "Reconciliation", value: "Instant" }
    ],
    techStack: ["TypeScript", "PostgreSQL", "Next.js", "Tailwind CSS", "Prisma", "Jest", "Docker"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: false,
    colorGradient: "from-amber-600 to-amber-950",
    stars: 210
  },
  {
    id: "syntax-pulse",
    title: "SyntaxPulse AST Analyzer CLI",
    subtitle: "Static Analysis & Architecture Drift Detection Tool",
    category: "Developer Tools",
    description: "A fast command-line linter and continuous integration gatekeeper that analyzes TypeScript and Go codebases to prevent dependency boundary violations and circular references.",
    problemStatement: "Growing monorepos developed hidden circular dependencies and architecture boundary leaks across domain boundaries.",
    solutionArchitecture: "Built a lightning-fast Rust CLI that builds AST graphs in parallel, calculates cyclomatic complexity, and verifies dependency boundary rules defined in declarative configuration.",
    outcomes: [
      "Scanned 1.2M lines of code across 350 packages in 840 milliseconds",
      "Prevented over 140 architectural boundary regressions in CI pipelines",
      "Adopted by 40+ engineering organizations as part of their standard PR review workflow"
    ],
    metrics: [
      { label: "Scan Speed", value: "840ms" },
      { label: "Lines Analyzed", value: "1.2M+" },
      { label: "CI Regressions", value: "0" }
    ],
    techStack: ["Rust", "TypeScript AST", "CLI", "GitHub Actions", "WebAssembly"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: false,
    colorGradient: "from-rose-600 to-rose-950",
    stars: 490
  },
  {
    id: "sentinel-ai",
    title: "Sentinel Autonomous Incident Copilot",
    subtitle: "AI-Augmented Observability & Automated Root Cause Analysis",
    category: "AI & Data",
    description: "An intelligent incident triage assistant that correlates application logs, distributed traces, and deployment diffs to pinpoint root causes during production outages.",
    problemStatement: "On-call engineers spent 35+ minutes wading through tens of thousands of noisy stack traces during critical outages.",
    solutionArchitecture: "Constructed an ingestion pipeline that feeds semantic log embeddings into vector storage, utilizing LLM agent workflows with strict retrieval-augmented grounding to generate actionable remediation steps.",
    outcomes: [
      "Reduced Mean Time to Resolution (MTTR) by 58% across Tier-1 production incidents",
      "Automatically generated accurate incident post-mortem summaries within seconds",
      "Reduced on-call alert fatigue by clustering duplicate warning cascades"
    ],
    metrics: [
      { label: "MTTR Reduction", value: "58%" },
      { label: "Incident Accuracy", value: "94%" },
      { label: "Alert Clustering", value: "-65% noise" }
    ],
    techStack: ["Python", "TypeScript", "FastAPI", "Vector DB", "OpenTelemetry", "Docker"],
    liveUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: false,
    colorGradient: "from-cyan-600 to-blue-950",
    stars: 310
  }
];

export const initialSkillGroups: SkillCategoryGroup[] = [
  {
    id: "backend-distributed",
    title: "Backend & Distributed Systems",
    description: "Designing fault-tolerant microservices, asynchronous message queues, and high-concurrency APIs.",
    iconName: "Server",
    skills: [
      { name: "Node.js / TypeScript", proficiency: 95, experience: "", isCore: true, category: "Backend" },
      { name: "Go (Golang)", proficiency: 90, experience: "", isCore: true, category: "Backend" },
      { name: "Python", proficiency: 85, experience: "", isCore: false, category: "Backend" },
      { name: "Rust", proficiency: 75, experience: "", isCore: false, category: "Backend" },
      { name: "gRPC & Protocol Buffers", proficiency: 90, experience: "", isCore: true, category: "Distributed" },
      { name: "REST & GraphQL APIs", proficiency: 95, experience: "", isCore: true, category: "Backend" },
      { name: "Apache Kafka & RabbitMQ", proficiency: 88, experience: "", isCore: true, category: "Distributed" },
      { name: "Microservice Architecture", proficiency: 95, experience: "", isCore: true, category: "Architecture" }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    description: "Automated CI/CD pipelines, container orchestration, zero-downtime deployments, and infrastructure as code.",
    iconName: "Cloud",
    skills: [
      { name: "Kubernetes (K8s)", proficiency: 90, experience: "", isCore: true, category: "Cloud" },
      { name: "Docker & Containerization", proficiency: 95, experience: "", isCore: true, category: "DevOps" },
      { name: "Amazon Web Services (AWS)", proficiency: 92, experience: "", isCore: true, category: "Cloud" },
      { name: "Google Cloud Platform (GCP)", proficiency: 88, experience: "", isCore: true, category: "Cloud" },
      { name: "Terraform (IaC)", proficiency: 88, experience: "", isCore: true, category: "DevOps" },
      { name: "CI/CD (GitHub Actions, Argo)", proficiency: 92, experience: "", isCore: true, category: "DevOps" },
      { name: "Prometheus & Grafana", proficiency: 85, experience: "", isCore: false, category: "Observability" },
      { name: "OpenTelemetry & Datadog", proficiency: 86, experience: "", isCore: false, category: "Observability" }
    ]
  },
  {
    id: "frontend-ui",
    title: "Frontend & Web Engineering",
    description: "Building responsive, accessible, and ultra-performant client experiences with modern component architectures.",
    iconName: "Layout",
    skills: [
      { name: "React 19 & Next.js", proficiency: 96, experience: "", isCore: true, category: "Frontend" },
      { name: "TypeScript", proficiency: 98, experience: "", isCore: true, category: "Frontend" },
      { name: "Tailwind CSS", proficiency: 95, experience: "", isCore: true, category: "UI/UX" },
      { name: "State Management (Zustand/Redux)", proficiency: 92, experience: "", isCore: true, category: "Frontend" },
      { name: "Web Performance (Core Web Vitals)", proficiency: 94, experience: "", isCore: true, category: "Performance" },
      { name: "HTML5 / CSS3 / Accessibility (a11y)", proficiency: 95, experience: "", isCore: true, category: "UI/UX" },
      { name: "Vite & Build Tooling", proficiency: 90, experience: "", isCore: false, category: "Tooling" },
      { name: "Responsive & Mobile-First Design", proficiency: 95, experience: "", isCore: true, category: "UI/UX" }
    ]
  },
  {
    id: "database-storage",
    title: "Data Engineering & Storage",
    description: "Architecting relational, NoSQL, in-memory caches, and analytical columnar data stores.",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL (Advanced)", proficiency: 95, experience: "", isCore: true, category: "Database" },
      { name: "Redis (In-Memory & Pub/Sub)", proficiency: 92, experience: "", isCore: true, category: "Database" },
      { name: "MongoDB & Document Stores", proficiency: 88, experience: "", isCore: false, category: "Database" },
      { name: "ClickHouse & OLAP", proficiency: 82, experience: "", isCore: false, category: "Data" },
      { name: "Prisma & Drizzle ORM", proficiency: 92, experience: "", isCore: true, category: "Tooling" },
      { name: "Database Indexing & Query Tuning", proficiency: 94, experience: "", isCore: true, category: "Database" },
      { name: "Elasticsearch & Vector Search", proficiency: 84, experience: "", isCore: false, category: "Search" }
    ]
  }
];

export const initialExperiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Cybersecurity Lead",
    company: "GDG UOEM",
    companyUrl: "https://gdg.community.dev/",
    location: "UoEM, Kenya",
    period: "2025 - 2026",
    isCurrent: false,
    overview: "Led cybersecurity-focused community engagement, technical awareness, and practical digital security initiatives within the GDG UOEM ecosystem.",
    achievements: [
      "Led and supported cybersecurity awareness initiatives for students and developers in the local tech community",
      "Facilitated learning around digital safety, secure development, and responsible technology use",
      "Helped create a more security-conscious community culture through workshops and collaborative knowledge sharing",
      "Connected practical software development with cybersecurity awareness and community impact"
    ],
    techStack: ["Cybersecurity", "Community Leadership", "Awareness", "Secure Development", "Tech Engagement"]
  },
  
];

export const initialEducation: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.S. in Computer Science & Cybersecurity",
    institution: "University of California, Berkeley",
    period: "2014 - 2018",
    location: "Berkeley, CA",
    details: [
      "Concentration in Distributed Systems, Operating Systems, and Algorithms",
      "Dean's Honor List (4 semesters)",
      "President, Association for Computing Machinery (ACM) Student Chapter"
    ]
  }
];

export const initialCertifications: CertificationItem[] = [
  {
    id: "cert-1",
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    date: "2024",
    badgeCode: "AWS-PSA-94821",
    verifyUrl: "https://aws.amazon.com"
  },
  {
    id: "cert-2",
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    date: "2023",
    badgeCode: "CKA-77319",
    verifyUrl: "https://www.cncf.io"
  },
  {
    id: "cert-3",
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2023",
    badgeCode: "GCP-PCA-10492",
    verifyUrl: "https://cloud.google.com"
  }
];

export const initialTestimonials: TestimonialItem[] = [
  {
    id: "test-1",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "Apex Cloud Technologies",
    quote: "Martin is the rare engineer who can effortlessly transition from deep distributed systems debugging to crafting elegant UI interactions. His technical rigor and architectural leadership elevated our entire engineering organization.",
    avatarBg: "bg-indigo-600"
  },
  {
    id: "test-2",
    author: "David Chen",
    role: "Principal Architect",
    company: "Veloce Financial",
    quote: "When we faced catastrophic latency bottlenecks during high-volume trading hours, Martin redesigned our core ingestion pipeline in record time. His deep grasp of systems and pragmatic approach were invaluable.",
    avatarBg: "bg-emerald-600"
  },
  {
    id: "test-3",
    author: "Sarah Jenkins",
    role: "Director of Product",
    company: "Synthetix Labs",
    quote: "Working with Martin is a dream for any product manager. He doesn't just build specs—he challenges assumptions, spots edge cases early, and crafts experiences that delight users.",
    avatarBg: "bg-purple-600"
  }
];


