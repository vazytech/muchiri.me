import { Experience, Profile, Project, SkillGroup } from '../types';

export const profile: Profile = {
  name: "Muchiri Gatimu",
  handle: "muchiri",
  role: "Cybersecurity Engineer",
  focus: "Aspiring Cloud Security Engineer",
  tagline: "I help protect systems, applications, and cloud environments through practical security engineering, monitoring, and continuous learning.",
  location: "Nyandarua, Kenya (open to remote)",
  email: "martingatimu69@gmail.com",
  status: "Open to cybersecurity and cloud security opportunities",
  bio: [
    "Hi, I'm Muchiri, a cybersecurity engineer focused on protecting systems, applications, and digital services.",
    "I'm building deeper expertise in cloud security, identity and access management, secure infrastructure, monitoring, and incident response.",
    "I'm looking for teams where I can apply practical security thinking, learn from experienced engineers, and contribute responsibly."
  ],
  socials: {
    github: undefined,
    linkedin: undefined,
    twitter: undefined,
    website: "https://mkulima-nyandarua.vercel.app/",
    resumeUrl: "https://docs.google.com/document/d/1DG_2ByI8etQFa1w2jwtG28hyP1Asny9v/edit?usp=sharing"
  }
};

export const projects: Project[] = [
  {
    id: "mkulima-nyandarua",
    title: "Mkulima Nyandarua",
    summary: "Digital platform for rural agricultural services and community value delivery.",
    problem: "Rural and agricultural communities needed a reliable digital platform to offer accessible services, connect resources, and modernize service delivery without heavy operational friction.",
    solution: "Built a responsive web application with a scalable backend, streamlined user flows, and cloud hosting for accessibility and maintainability.",
    outcomes: [
      "Deployed a working web platform accessible to users online",
      "Created a maintainable architecture for future feature growth",
      "Delivered a digital-first experience focused on practical utility"
    ],
    stack: ["React", "TypeScript", "Node.js", "Vercel"],
    liveUrl: "https://mkulima-nyandarua.vercel.app/",
    githubUrl: undefined
  }
];

export const skillGroups: SkillGroup[] = [
  {
    id: "security",
    title: "security",
    skills: ["Security monitoring", "Incident response", "Vulnerability assessment", "Secure development", "Security awareness training"]
  },
  {
    id: "cloud",
    title: "cloud",
    skills: ["Cloud security fundamentals", "Identity & access management", "Secure infrastructure", "Logging & monitoring"]
  },
  {
    id: "dev",
    title: "dev",
    skills: ["React", "TypeScript", "Node.js", "Linux", "Git"]
  }
];

export const experiences: Experience[] = [
  {
    id: "gdg-uoem",
    role: "Cybersecurity Lead",
    company: "GDG UoEM",
    companyUrl: "https://gdg.community.dev/",
    location: "UoEM, Kenya",
    period: "2025 - 2026",
    overview: "Led cybersecurity-focused community engagement, technical awareness, and practical digital security initiatives within the GDG UoEM community.",
    achievements: [
      "Led cybersecurity awareness initiatives for students and developers",
      "Facilitated learning around digital safety, secure development, and responsible technology use",
      "Ran workshops and knowledge-sharing sessions that built a more security-conscious community",
      "Connected practical software development with cybersecurity awareness"
    ]
  }
];
