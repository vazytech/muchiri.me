export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  resumeUrl?: string;
}

export interface Profile {
  name: string;
  handle: string;
  role: string;
  focus: string;
  tagline: string;
  location: string;
  email: string;
  status: string;
  bio: string[];
  socials: SocialLinks;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  outcomes: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  overview: string;
  achievements: string[];
}
