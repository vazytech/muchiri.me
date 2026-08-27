import React, { useState } from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  FileText, 
  Calendar, 
  Check, 
  Copy, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  Globe,
  Terminal as TerminalIcon,
  Cpu,
  Layers,
  ChevronDown
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface HeroSectionProps {
  profile: ProfileInfo;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden bg-[#080808]"
    >
      {/* Subtle hairline grid and ambient lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-white/10 text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>{profile.status}</span>
            </div>

            {/* Headline & Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif italic tracking-tight text-white leading-[1.08]">
                {profile.name}
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 font-light max-w-xl">
                {profile.role}
              </p>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {profile.tagline}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-neutral-400 font-mono">
              <span className="flex items-center gap-1.5 bg-[#111111] px-3 py-1.5 rounded-lg border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                {profile.location}
              </span>
              <span className="flex items-center gap-1.5 bg-[#111111] px-3 py-1.5 rounded-lg border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                AWS & GCP Certified Architect
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-xs uppercase tracking-[0.2em] font-semibold text-black bg-white hover:bg-neutral-200 transition-all shadow-sm active:scale-98"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                id="hero-contact-btn"
                className="flex items-center gap-2 px-5 py-3 rounded-lg text-xs uppercase tracking-[0.2em] font-medium text-neutral-200 bg-[#141414] hover:bg-[#1f1f1f] border border-white/10 hover:border-white/25 transition-all active:scale-98"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-300" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                id="hero-resume-btn"
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-xs uppercase tracking-[0.2em] font-medium text-neutral-400 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links & Quick Copy Email */}
            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.25em] mr-1">Connect:</span>
              
              {profile.socials.github && (
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-github-link"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-[#111111] hover:bg-white hover:text-black text-neutral-300 border border-white/10 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {profile.socials.linkedin && (
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-linkedin-link"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-[#111111] hover:bg-white hover:text-black text-neutral-300 border border-white/10 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}

              {profile.socials.twitter && (
                <a
                  href={profile.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-twitter-link"
                  aria-label="Twitter/X Profile"
                  className="p-2.5 rounded-lg bg-[#111111] hover:bg-white hover:text-black text-neutral-300 border border-white/10 transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}

              {profile.socials.website && (
                <a
                  href={profile.socials.website}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-website-link"
                  aria-label="Visit personal website"
                  className="p-2.5 rounded-lg bg-[#111111] hover:bg-white hover:text-black text-neutral-300 border border-white/10 transition-all"
                >
                  <Globe className="w-4 h-4" />
                </a>
              )}

              {profile.socials.calendly && (
                <a
                  href={profile.socials.calendly}
                  id="hero-calendly-link"
                  aria-label="Call or book with 0745422986"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#111111] hover:bg-white hover:text-black text-neutral-300 border border-white/10 text-xs font-mono uppercase tracking-wider transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book / Call</span>
                </a>
              )}

              {/* Copy Email Button with instant toast */}
              <button
                onClick={handleCopyEmail}
                id="hero-copy-email-btn"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#111111] hover:bg-[#191919] text-neutral-300 border border-white/10 text-xs font-mono transition-all"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{profile.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Code & Architecture Spec Showcase Card */}
          <div className="lg:col-span-5">
            <div 
              id="hero-terminal-card"
              className="relative rounded-xl bg-[#111111] border border-white/10 shadow-2xl overflow-hidden group hover:border-white/20 transition-colors"
            >
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d0d] border-b border-white/10 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="ml-2 text-neutral-300 font-medium">architect-manifest.json</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] uppercase tracking-wider">
                  <TerminalIcon className="w-3.5 h-3.5 text-neutral-400" />
                  <span>v2.4.0</span>
                </div>
              </div>

              {/* Code / Architecture Manifest Content */}
              <div className="p-5 font-mono text-xs text-neutral-300 space-y-2.5 leading-relaxed overflow-x-auto">
                <div className="text-neutral-400">
                  <span className="text-neutral-400">const</span> <span className="text-white font-medium">architect</span> = &#123;
                </div>
                
                <div className="pl-4 space-y-1.5">
                  <div>
                    <span className="text-neutral-400">name:</span> <span className="text-neutral-200">"{profile.name}"</span>,
                  </div>
                  <div>
                    <span className="text-neutral-400">coreSpecialties:</span> [
                    <div className="pl-4 text-neutral-300">
                      "Distributed Microservices",<br />
                      "High-Throughput APIs (gRPC / REST)",<br />
                      "Cloud Native Platforms (K8s / AWS)",<br />
                      "Modern React / Next.js Frontends"
                    </div>
                    ],
                  </div>
                  <div>
                    <span className="text-neutral-400">primaryLanguages:</span> [
                    <span className="text-neutral-200">"TypeScript"</span>,{" "}
                    <span className="text-neutral-200">"Go"</span>,{" "}
                    <span className="text-neutral-200">"Rust"</span>,{" "}
                    <span className="text-neutral-200">"Python"</span>
                    ],
                  </div>
                  <div>
                    <span className="text-neutral-400">availability:</span> <span className="text-emerald-400 font-semibold">"Contract & Technical Advisory"</span>,
                  </div>
                  <div>
                    <span className="text-neutral-400">focus:</span> <span className="text-white">"Resilient Systems Thinking"</span>
                  </div>
                </div>

                <div className="text-neutral-400">&#125;;</div>

                {/* Live Output Badge */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Cpu className="w-3.5 h-3.5" />
                    System Status: 100% Operational
                  </span>
                  <span className="text-neutral-400 text-[11px]">P99: 14ms</span>
                </div>
              </div>
            </div>

            {/* Quick Pill Highlights */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-3.5 rounded-xl bg-[#111111] border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-white">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-white">Full-Stack</div>
                  <div className="text-[11px] text-neutral-400">Edge to Database</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111111] border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-white">Cloud Native</div>
                  <div className="text-[11px] text-neutral-400">Kubernetes & IaC</div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Hero Bottom Stats Row */}
        <div 
          id="hero-stats-bar"
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {profile.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1.5 p-4 rounded-xl bg-[#111111] border border-white/5 hover:border-white/15 transition-colors">
              <div className="text-3xl font-serif italic text-white">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.15em] font-semibold text-neutral-300">{stat.label}</div>
              <div className="text-[11px] text-neutral-500 font-mono">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-10">
          <a
            href="#bio"
            aria-label="Scroll to Biography"
            className="p-2 rounded-full text-neutral-500 hover:text-white transition-all"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
