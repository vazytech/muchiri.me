import React, { useState, useMemo } from 'react';
import { 
  Terminal, 
  Server, 
  Cloud, 
  Layout, 
  Database, 
  Search, 
  Check, 
  Flame, 
  Code,
  Layers,
  Sparkles,
  X
} from 'lucide-react';
import { SkillCategoryGroup, SkillItem } from '../types';

interface SkillsSectionProps {
  skillGroups: SkillCategoryGroup[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillGroups }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return Server;
      case 'Cloud': return Cloud;
      case 'Layout': return Layout;
      case 'Database': return Database;
      default: return Terminal;
    }
  };

  const allSkills = useMemo(() => {
    const skillsList: (SkillItem & { groupTitle: string })[] = [];
    skillGroups.forEach(g => {
      g.skills.forEach(s => {
        skillsList.push({ ...s, groupTitle: g.title });
      });
    });
    return skillsList;
  }, [skillGroups]);

  const filteredSkills = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase().trim();
    return allSkills.filter(s => 
      s.name.toLowerCase().includes(q) || 
      s.category.toLowerCase().includes(q) || 
      s.groupTitle.toLowerCase().includes(q)
    );
  }, [allSkills, searchQuery]);

  return (
    <section 
      id="skills" 
      className="py-28 bg-[#080808] relative border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-mono mb-4">
              03 / Technical Matrix & Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-white tracking-tight">
              Skills & Engineering Matrix
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
              A breakdown of language competencies, cloud infrastructure toolsets, and architecture paradigms.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Go, K8s, React)..."
              id="skills-search-input"
              className="w-full pl-9 pr-9 py-2 rounded-lg bg-[#111111] border border-white/10 text-white placeholder-neutral-600 text-xs font-mono focus:outline-none focus:border-white/40 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                id="clear-skills-search-btn"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Search Results Mode */}
        {filteredSkills !== null ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2 border-b border-white/10">
              <span className="uppercase tracking-wider">Matching Skills ({filteredSkills.length})</span>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-white hover:underline uppercase tracking-wider"
              >
                Clear Search
              </button>
            </div>

            {filteredSkills.length === 0 ? (
              <div className="p-12 text-center rounded-xl bg-[#111111] border border-white/10 text-neutral-400 font-serif italic">
                No matching skills found for "{searchQuery}".
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSkills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 rounded-xl bg-[#111111] border border-white/5 hover:border-white/20 transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif italic text-white text-base">{skill.name}</span>
                      {skill.experience ? <span className="text-xs font-mono text-neutral-400">{skill.experience}</span> : null}
                    </div>
                    <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">{skill.groupTitle}</div>
                    
                    {/* Proficiency bar */}
                    <div className="w-full h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white/80 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Standard Categorized Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillGroups.map((group) => {
              const Icon = getCategoryIcon(group.iconName);

              return (
                <div
                  key={group.id}
                  id={`skill-category-${group.id}`}
                  className="p-6 sm:p-8 rounded-xl bg-[#111111] border border-white/5 hover:border-white/15 transition-all space-y-6 shadow-xl"
                >
                  {/* Category Header */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-white shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif italic text-white tracking-tight">
                        {group.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-light leading-relaxed">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List in Category */}
                  <div className="space-y-4 pt-2">
                    {group.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-neutral-200">{skill.name}</span>
                            {skill.isCore && (
                              <span className="px-2 py-0.5 rounded bg-white/10 text-white border border-white/10 text-[9px] font-mono uppercase tracking-wider">
                                Core
                              </span>
                            )}
                          </div>
                          {skill.experience ? (
                            <span className="font-mono text-neutral-500 text-xs">
                              {skill.experience}
                            </span>
                          ) : null}
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-white/80 rounded-full transition-all duration-500"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Methodologies & Paradigms Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-[#111111] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-serif italic text-white">Engineering Methodologies & Standards</h4>
              <p className="text-xs text-neutral-400 font-light mt-0.5">Practicing strict operational excellence across every tier</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {[
              "Domain-Driven Design",
              "Test-Driven Development",
              "CI/CD & GitOps",
              "Zero-Downtime Deploy",
              "Site Reliability Engineering",
              "12-Factor App Principles"
            ].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded bg-[#161616] border border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
