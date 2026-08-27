import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Globe,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { ProfileInfo, ExperienceItem, EducationItem, CertificationItem, SkillCategoryGroup } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileInfo;
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  skillGroups: SkillCategoryGroup[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  experiences,
  education,
  certifications,
  skillGroups
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
${profile.name.toUpperCase()} - ${profile.role}
Email: ${profile.email} | Location: ${profile.location}
GitHub: ${profile.socials.github} | LinkedIn: ${profile.socials.linkedin}

EXECUTIVE SUMMARY
${profile.bioParagraphs.join('\n\n')}

PROFESSIONAL EXPERIENCE
${experiences.map(exp => `
${exp.role.toUpperCase()} | ${exp.company}
${exp.period} | ${exp.location}
${exp.overview}
Key Achievements:
${exp.achievements.map(a => `• ${a}`).join('\n')}
Tech Stack: ${exp.techStack.join(', ')}
`).join('\n')}

TECHNICAL CAPABILITIES
${skillGroups.map(g => `${g.title}: ${g.skills.map(s => s.name).join(', ')}`).join('\n')}

EDUCATION
${education.map(e => `${e.degree} - ${e.institution} (${e.period})`).join('\n')}

CERTIFICATIONS
${certifications.map(c => `${c.title} - ${c.issuer} (${c.date}) [${c.badgeCode || ''}]`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="resume-modal-container"
        className="relative w-full max-w-4xl rounded-2xl bg-[#0d0d0d] border border-white/10 shadow-2xl shadow-black overflow-hidden flex flex-col my-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 bg-[#111111] border-b border-white/10 flex items-center justify-between gap-3 text-neutral-300">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-serif italic text-white font-medium">Curriculum Vitae</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/10 font-mono uppercase tracking-wider">
              ATS-Optimized
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              id="resume-copy-text-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181818] hover:bg-[#222222] text-neutral-300 text-xs font-mono uppercase tracking-wider border border-white/10 transition-colors"
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handlePrint}
              id="resume-print-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black text-xs font-mono uppercase tracking-wider font-semibold shadow-sm transition-colors hover:bg-neutral-200"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              id="close-resume-modal-btn"
              aria-label="Close resume modal"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Paper Content */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#080808] text-neutral-200 font-sans space-y-8 print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <h1 className="text-3xl font-serif italic text-white tracking-tight">
              {profile.name}
            </h1>
            <p className="text-sm font-mono uppercase tracking-wider text-neutral-400 font-sans">
              {profile.role}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500 pt-1">
              <span className="flex items-center gap-1 text-neutral-300">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                {profile.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                {profile.location}
              </span>
              {profile.socials.linkedin && (
                <span className="flex items-center gap-1 text-neutral-400">
                  <Linkedin className="w-3.5 h-3.5 text-neutral-400" />
                  linkedin.com/in/martingatimu
                </span>
              )}
              {profile.socials.github && (
                <span className="flex items-center gap-1 text-neutral-400">
                  <Github className="w-3.5 h-3.5 text-neutral-400" />
                  github.com/martingatimu
                </span>
              )}
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-400 border-b border-white/10 pb-1">
              Executive Summary
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              {profile.bioParagraphs[0]} {profile.bioParagraphs[1]}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-400 border-b border-white/10 pb-1">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillGroups.map(g => (
                <div key={g.id} className="space-y-1">
                  <div className="font-serif italic text-white text-sm">{g.title}:</div>
                  <div className="text-neutral-400 font-mono text-xs leading-relaxed">
                    {g.skills.map(s => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-400 border-b border-white/10 pb-1">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experiences.map(exp => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <div className="font-serif italic text-base text-white">
                      {exp.role} <span className="text-neutral-400 font-sans text-xs font-mono uppercase tracking-wider">@ {exp.company}</span>
                    </div>
                    <div className="text-xs font-mono text-neutral-500">
                      {exp.period} | {exp.location}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {exp.overview}
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-300 font-light">
                        <span className="text-neutral-500">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono text-neutral-500 pt-1">
                    <span className="text-neutral-400">Technologies:</span> {exp.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-400 border-b border-white/10 pb-1">
                Education
              </h2>
              {education.map(edu => (
                <div key={edu.id} className="space-y-1 text-xs">
                  <div className="font-serif italic text-white text-sm">{edu.degree}</div>
                  <div className="text-neutral-400 font-mono text-xs uppercase tracking-wider">{edu.institution}</div>
                  <div className="text-neutral-500 font-mono">{edu.period}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-400 border-b border-white/10 pb-1">
                Certifications
              </h2>
              {certifications.map(cert => (
                <div key={cert.id} className="space-y-0.5 text-xs">
                  <div className="font-serif italic text-white text-sm">{cert.title}</div>
                  <div className="text-neutral-500 font-mono text-xs">{cert.issuer} ({cert.date})</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
