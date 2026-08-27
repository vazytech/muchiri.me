import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Search, 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Filter,
  CheckCircle,
  X
} from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'Full-Stack', 'Cloud & Systems', 'AI & Data', 'Developer Tools'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <section 
      id="projects" 
      className="py-28 bg-[#080808] relative border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-mono mb-4">
              02 / Selected Works & Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-white tracking-tight">
              Production Projects & Systems
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
              Explore distributed backends, cloud architectures, and full-stack applications with measured performance outcomes.
            </p>
          </div>

          {/* Quick Metrics Callout */}
          <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-400 bg-[#111111] p-3 rounded-lg border border-white/10 self-start md:self-auto">
            <span className="flex items-center gap-1.5 text-white font-medium">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              100% Tested
            </span>
            <span className="text-neutral-600">•</span>
            <span>Production Proven</span>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`filter-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-4 py-2 rounded-lg text-xs uppercase tracking-[0.15em] font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'bg-[#111111] text-neutral-400 hover:text-white hover:bg-[#1a1a1a] border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword or tech..."
              id="projects-search-input"
              className="w-full pl-9 pr-9 py-2 rounded-lg bg-[#111111] border border-white/10 text-white placeholder-neutral-600 text-xs font-mono focus:outline-none focus:border-white/40 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                id="clear-projects-search-btn"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-16 text-center rounded-xl bg-[#111111] border border-white/10 text-neutral-400 space-y-3">
            <Filter className="w-8 h-8 mx-auto text-neutral-600" />
            <p className="text-sm text-neutral-300 font-serif italic">No projects found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="text-xs text-white underline underline-offset-4 font-mono uppercase tracking-wider"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="flex flex-col justify-between rounded-xl bg-[#111111] border border-white/5 hover:border-white/20 transition-all duration-300 group overflow-hidden"
              >
                <div>
                  {/* Card Header Tag */}
                  <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#0d0d0d]">
                    <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-neutral-400">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[9px] uppercase tracking-widest font-mono text-white bg-white/10 px-2 py-0.5 rounded border border-white/10">
                        <Sparkles className="w-2.5 h-2.5" />
                        Selected
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-serif italic text-white group-hover:text-neutral-200 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-light text-neutral-400 mt-1 line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Metric Chips */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/5 text-center">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="space-y-0.5">
                          <div className="text-xs font-mono font-bold text-white">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-neutral-500 truncate font-mono uppercase tracking-wider">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-white/5 text-neutral-400 text-[10px] font-mono border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-0.5 rounded bg-white/5 text-neutral-500 text-[10px] font-mono">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    id={`view-case-study-${project.id}`}
                    className="flex items-center gap-2 text-xs font-medium text-white hover:text-neutral-300 transition-colors uppercase tracking-wider"
                  >
                    <span>Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        id={`github-link-${project.id}`}
                        aria-label="GitHub Repository"
                        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-white transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        id={`live-link-${project.id}`}
                        aria-label="Live Demo"
                        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-white transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
