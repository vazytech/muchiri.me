import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { ExperienceItem, EducationItem, CertificationItem } from '../types';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  education,
  certifications
}) => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section 
      id="experience" 
      className="py-28 bg-[#080808] relative border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-mono mb-4">
              04 / Career & Qualifications
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-white tracking-tight">
              Work Experience & Credentials
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
              Demonstrated track record of delivering high-scale software systems and leading technical initiatives.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center p-1 rounded-lg bg-[#111111] border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('work')}
              id="tab-work-experience"
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs uppercase tracking-wider font-medium transition-all ${
                activeTab === 'work'
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              id="tab-education-certs"
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs uppercase tracking-wider font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education & Certs</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Work Experience Timeline */}
        {activeTab === 'work' && (
          <div className="relative border-l border-white/15 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
            {experiences.map((exp) => (
              <div 
                key={exp.id}
                id={`experience-item-${exp.id}`}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-[#080808] flex items-center justify-center transition-transform group-hover:scale-125 ${
                  exp.isCurrent ? 'bg-white' : 'bg-neutral-500'
                }`} />

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-xl bg-[#111111] border border-white/5 hover:border-white/15 transition-all space-y-5 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-5">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-serif italic text-white tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-white text-[9px] font-mono uppercase tracking-widest">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-1">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
                      <span className="flex items-center gap-1.5 bg-[#0d0d0d] px-3 py-1 rounded border border-white/5">
                        <Calendar className="w-3 h-3 text-neutral-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 bg-[#0d0d0d] px-3 py-1 rounded border border-white/5">
                        <MapPin className="w-3 h-3 text-neutral-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Role Overview */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {exp.overview}
                  </p>

                  {/* Bullet Achievements */}
                  <div className="space-y-2 pt-1">
                    <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                      Key Highlights & Architecture Deliverables:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Used */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mr-2">Stack:</span>
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded bg-white/5 text-neutral-300 text-xs font-mono border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education & Certifications */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Education Card */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#111111] border border-white/5 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <div className="p-2.5 rounded-lg bg-white/5 text-white border border-white/10">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif italic text-white">Higher Education</h3>
                  <p className="text-xs text-neutral-400 font-light">Academic Background & Honors</p>
                </div>
              </div>

              {education.map((edu) => (
                <div key={edu.id} className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-lg font-serif italic text-white">{edu.degree}</h4>
                    <p className="text-xs font-mono uppercase tracking-wider text-neutral-400">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 pt-1">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-white/5">
                    {edu.details.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300 font-light">
                        <ChevronRight className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Industry Certifications */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#111111] border border-white/5 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <div className="p-2.5 rounded-lg bg-white/5 text-white border border-white/10">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif italic text-white">Professional Certifications</h3>
                  <p className="text-xs text-neutral-400 font-light">Verified Cloud & DevOps Credentials</p>
                </div>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div 
                    key={cert.id}
                    className="p-4 rounded-lg bg-[#0d0d0d] border border-white/5 hover:border-white/15 transition-all space-y-2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-serif italic text-white">
                          {cert.title}
                        </h4>
                        <div className="text-xs text-neutral-400 font-mono mt-0.5">
                          Issued by {cert.issuer} ({cert.date})
                        </div>
                      </div>
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noreferrer"
                          id={`verify-cert-${cert.id}`}
                          aria-label={`Verify ${cert.title}`}
                          className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-white transition-all"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    {cert.badgeCode && (
                      <div className="text-[10px] font-mono text-neutral-500">
                        Credential ID: <span className="text-neutral-300">{cert.badgeCode}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
