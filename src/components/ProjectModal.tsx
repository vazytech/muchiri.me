import React from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Star
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="project-modal-container"
        className="relative w-full max-w-3xl rounded-xl bg-[#0e0e0e] border border-white/10 shadow-2xl overflow-hidden text-[#f3f4f6] max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#141414] relative overflow-hidden border-b border-white/10">
          <button
            onClick={onClose}
            id="close-project-modal-btn"
            aria-label="Close project modal"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white text-neutral-400 hover:text-black border border-white/10 flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="space-y-3 pr-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                {project.category}
              </span>
              {project.stars && (
                <span className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300">
                  <Star className="w-3 h-3 fill-neutral-300 text-neutral-300" />
                  {project.stars} stars
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif italic text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-neutral-300">
          
          {/* Key Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-lg bg-[#141414] border border-white/5 text-center">
            {project.metrics.map((metric, i) => (
              <div key={i} className="space-y-1">
                <div className="text-lg sm:text-xl font-serif italic text-white">
                  {metric.value}
                </div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 font-sans">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-white" />
              Project Overview
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Problem vs Solution Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#141414] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-white font-medium text-xs uppercase tracking-wider font-mono">
                <AlertCircle className="w-3.5 h-3.5 text-neutral-400" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#141414] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-white font-medium text-xs uppercase tracking-wider font-mono">
                <Cpu className="w-3.5 h-3.5 text-neutral-400" />
                <span>Architecture Solution</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                {project.solutionArchitecture}
              </p>
            </div>
          </div>

          {/* Verified Outcomes & Impact */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-white" />
              Key Measurable Outcomes
            </h3>
            <ul className="space-y-2">
              {project.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-light">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
              Technologies & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded bg-white/5 text-neutral-300 text-xs font-mono border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#141414] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                id="modal-view-github-btn"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold text-neutral-300 hover:text-white bg-[#0e0e0e] border border-white/10 hover:border-white/25 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                id="modal-view-live-btn"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold text-black bg-white hover:bg-neutral-200 transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Repository / Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            id="modal-close-btn-bottom"
            className="px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
