import React from 'react';
import { 
  User, 
  Target, 
  Zap, 
  HeartHandshake, 
  Award, 
  Compass, 
  ArrowUpRight,
  FileText
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface BioSectionProps {
  profile: ProfileInfo;
  onOpenResume: () => void;
}

export const BioSection: React.FC<BioSectionProps> = ({ profile, onOpenResume }) => {
  const principleIcons = [
    { tag: "Architecture", icon: Compass, color: "text-white bg-white/5 border-white/10" },
    { tag: "Execution", icon: Zap, color: "text-white bg-white/5 border-white/10" },
    { tag: "Product", icon: HeartHandshake, color: "text-white bg-white/5 border-white/10" }
  ];

  return (
    <section 
      id="bio" 
      className="py-28 bg-[#080808] relative border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-mono mb-4">
            01 / Background & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-white tracking-tight leading-snug">
            Engineering robust digital infrastructure with <span className="underline underline-offset-8 decoration-white/20">clarity, rigor, and aesthetic craft</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            A comprehensive look at my engineering journey, problem-solving ethos, and architectural philosophy.
          </p>
        </div>

        {/* 2-Column Biography Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 leading-relaxed text-base sm:text-lg font-light">
            {profile.bioParagraphs.map((para, index) => (
              <p key={index} className="text-neutral-300/90 leading-relaxed">
                {para}
              </p>
            ))}

            {/* Core Focus Badges */}
            <div className="pt-6 space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-400">
                Primary Engineering Domains
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Distributed Systems",
                  "High-Throughput Backends",
                  "Cloud Native (Kubernetes / AWS)",
                  "Zero-Trust API Gateways",
                  "Modern Full-Stack React",
                  "Low-Latency Event Streaming",
                  "Database Performance & Indexing",
                  "Developer Tooling & DX"
                ].map((domain, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-lg bg-[#111111] border border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:border-white/25 hover:text-white transition-colors"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Quick Action */}
            <div className="pt-6 flex items-center gap-4">
              <button
                onClick={onOpenResume}
                id="bio-view-resume-btn"
                className="flex items-center gap-2 px-5 py-3 rounded-lg text-xs uppercase tracking-[0.2em] font-medium text-white bg-[#141414] hover:bg-[#1f1f1f] border border-white/10 hover:border-white/30 transition-all shadow-sm active:scale-98"
              >
                <FileText className="w-4 h-4 text-neutral-300" />
                <span>Read Full Professional Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </button>
            </div>
          </div>

          {/* Core Architectural Principles */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-xl bg-[#111111] border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-white" />
                  <span className="font-serif italic text-white text-lg">Core Principles</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Non-negotiables</span>
              </div>

              <div className="space-y-4">
                {profile.principles.map((item, idx) => {
                  const iconConfig = principleIcons.find(p => p.tag === item.tag) || principleIcons[0];
                  const Icon = iconConfig.icon;

                  return (
                    <div 
                      key={idx}
                      className="p-4 rounded-lg bg-[#0d0d0d] border border-white/5 hover:border-white/20 transition-all space-y-2 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className={`p-1.5 rounded border ${iconConfig.color}`}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <h4 className="font-serif italic text-white text-base group-hover:text-neutral-200 transition-colors">
                            {item.title}
                          </h4>
                        </div>
                        <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/5 text-neutral-400">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed pl-1 font-light">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Quote Callout */}
              <div className="p-4 rounded-lg bg-[#0a0a0a] border border-white/5 text-xs text-neutral-400 font-serif italic leading-relaxed">
                "Simplicity is prerequisite for reliability. Complex systems always fail in complex ways."
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
