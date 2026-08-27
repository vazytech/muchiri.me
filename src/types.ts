export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  website?: string;
  calendly?: string;
  resumeUrl?: string;
  medium?: string;
}

export interface ProfileInfo {
  name: string;
  role: string;
  tagline: string;
  headline: string;
  location: string;
  email: string;
  status: string; // e.g. "Available for select consulting & senior roles"
  bioParagraphs: string[];
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  socials: SocialLinks;
  principles: {
    title: string;
    description: string;
    tag: string;
  }[];
}

export type ProjectCategory = 'All' | 'Full-Stack' | 'Cloud & Systems' | 'AI & Data' | 'Developer Tools';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Cloud & Systems' | 'AI & Data' | 'Developer Tools';
  description: string;
  problemStatement: string;
  solutionArchitecture: string;
  outcomes: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  colorGradient: string;
  stars?: number;
}

export interface SkillItem {
  name: string;
  proficiency: number; // 0 - 100
  experience: string; // "5+ yrs"
  isCore?: boolean;
  category: string;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  overview: string;
  achievements: string[];
  techStack: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeCode?: string;
  verifyUrl?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  avatarBg: string;
}

export type TalkCategory = 'All' | 'Keynote' | 'Conference' | 'Workshop' | 'Podcast';

export interface TalkSlide {
  slideNumber: number;
  title: string;
  description: string;
  bullets: string[];
}

export interface TalkItem {
  id: string;
  title: string;
  subtitle: string;
  event: string;
  eventType: 'Keynote' | 'Conference' | 'Workshop' | 'Podcast';
  date: string;
  year: number;
  location: string;
  format: 'In-Person' | 'Virtual' | 'Hybrid';
  description: string;
  abstract: string;
  topics: string[];
  duration: string;
  attendeesCount?: string;
  videoUrl?: string;
  slidesUrl?: string;
  audioUrl?: string;
  eventUrl?: string;
  keyTakeaways: string[];
  featured: boolean;
  slidesPreview?: TalkSlide[];
}
