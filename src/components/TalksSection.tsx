import React, { useState, useMemo } from 'react';
import { 
  Presentation, 
  Video, 
  FileText, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Users, 
  Search, 
  Sparkles,
  ArrowRight,
  Headphones,
  CheckCircle2,
  Mic
} from 'lucide-react';
import { TalkItem, TalkCategory } from '../types';
import { TalkModal } from './TalkModal';

interface TalksSectionProps {
  talks: TalkItem[];
}

export const TalksSection: React.FC<TalksSectionProps> = ({ talks }) => {
  const [activeCategory, setActiveCategory] = useState<TalkCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTalk, setSelectedTalk] = useState<TalkItem | null>(null);

  const categories: TalkCategory[] = ['All', 'Keynote', 'Conference', 'Workshop', 'Podcast'];

  const filteredTalks = useMemo(() => {
    return talks.filter((talk) => {
      const matchesCategory = activeCategory === 'All' || talk.eventType === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        talk.title.toLowerCase().includes(query) ||
        talk.event.toLowerCase().includes(query) ||
        talk.description.toLowerCase().includes(query) ||
        talk.location.toLowerCase().includes(query) ||
        talk.topics.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [talks, activeCategory, searchQuery]);

  return (
    <section id="talks" className="py-24 sm:py-32 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase tracking-[0.2em] mb-3">
              <span className="text-white font-semibold">05</span>
              <span>/</span>
              <span>Presentations & Talks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white tracking-tight">
              Speaking & Technical Keynotes
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm font-light leading-relaxed">
            Delivering deep dives on distributed systems, eBPF microservices, Kafka streaming pipelines, and cloud architecture at global engineering summits.
          </p>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-xl bg-[#111111] border border-white/5 space-y-1">
            <div className="text-2xl sm:text-3xl font-serif italic text-white font-semibold">12+</div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">Technical Keynotes</div>
            <div className="text-[11px] text-neutral-500 font-light">Global & Regional Conferences</div>
          </div>
          <div className="p-5 rounded-xl bg-[#111111] border border-white/5 space-y-1">
            <div className="text-2xl sm:text-3xl font-serif italic text-white font-semibold">4,800+</div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">Engineers Reached</div>
            <div className="text-[11px] text-neutral-500 font-light">In-person & live streams</div>
          </div>
          <div className="p-5 rounded-xl bg-[#111111] border border-white/5 space-y-1">
            <div className="text-2xl sm:text-3xl font-serif italic text-white font-semibold">6</div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">Major Cities</div>
            <div className="text-[11px] text-neutral-500 font-light">SF, Chicago, NYC & Virtual</div>
          </div>
          <div className="p-5 rounded-xl bg-[#111111] border border-white/5 space-y-1">
            <div className="text-2xl sm:text-3xl font-serif italic text-white font-semibold">100%</div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">Open Resources</div>
            <div className="text-[11px] text-neutral-500 font-light">Slide decks & code shared</div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                id={`talk-cat-${category.toLowerCase()}`}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'bg-[#111111] text-neutral-400 hover:text-white hover:bg-[#181818] border border-white/5'
                }`}
              >
                {category === 'All' ? 'All Sessions' : category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              placeholder="Search talks or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="search-talks-input"
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#111111] border border-white/10 text-white placeholder-neutral-500 text-xs font-mono focus:border-white/40 focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-neutral-400 hover:text-white font-mono"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Talks Grid */}
        {filteredTalks.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTalks.map((talk) => (
              <div
                key={talk.id}
                id={`talk-card-${talk.id}`}
                className="group relative rounded-2xl bg-[#0e0e0e] border border-white/10 hover:border-white/25 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl"
              >
                {/* Top Badge & Metadata */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-white/10 text-white text-[10px] font-mono uppercase tracking-widest border border-white/15">
                        {talk.eventType}
                      </span>
                      {talk.featured && (
                        <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-amber-300 px-2 py-0.5 rounded bg-amber-950/40 border border-amber-800/40">
                          <Sparkles className="w-2.5 h-2.5" />
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-neutral-400 text-xs font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                        {talk.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                        {talk.location}
                      </span>
                    </div>
                  </div>

                  {/* Conference / Event Name */}
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Presentation className="w-3.5 h-3.5 text-neutral-300" />
                    <span>{talk.event}</span>
                    <span className="text-neutral-600">|</span>
                    <span className="text-neutral-400">{talk.duration}</span>
                  </div>

                  {/* Talk Title */}
                  <h3 
                    onClick={() => setSelectedTalk(talk)}
                    className="text-xl sm:text-2xl font-serif italic text-white group-hover:text-neutral-200 transition-colors cursor-pointer leading-snug"
                  >
                    {talk.title}
                  </h3>

                  {/* Talk Subtitle / Summary */}
                  <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                    {talk.description}
                  </p>

                  {/* Takeaways bullets preview */}
                  <div className="space-y-1.5 pt-1">
                    {talk.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>

                  {/* Topic Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {talk.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#141414] text-neutral-300 text-[11px] font-mono border border-white/5"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedTalk(talk)}
                    id={`open-talk-details-${talk.id}`}
                    className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white hover:text-neutral-300 transition-colors"
                  >
                    <span>View Slides & Abstract</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {talk.slidesUrl && (
                      <a
                        href={talk.slidesUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-[#141414] hover:bg-white hover:text-black text-neutral-400 border border-white/10 transition-all"
                        title="View Presentation Slides"
                      >
                        <FileText className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {talk.videoUrl && (
                      <a
                        href={talk.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-[#141414] hover:bg-white hover:text-black text-neutral-400 border border-white/10 transition-all"
                        title="Watch Session Recording"
                      >
                        <Video className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {talk.audioUrl && (
                      <a
                        href={talk.audioUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-[#141414] hover:bg-white hover:text-black text-neutral-400 border border-white/10 transition-all"
                        title="Listen to Podcast Episode"
                      >
                        <Headphones className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-2xl bg-[#0f0f0f] border border-white/5 space-y-3">
            <Mic className="w-8 h-8 text-neutral-500 mx-auto" />
            <div className="text-base font-serif italic text-white">No sessions found matching &ldquo;{searchQuery}&rdquo;</div>
            <p className="text-xs font-mono text-neutral-500">Try adjusting your keyword query or reset category filter</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-2 px-3.5 py-1.5 rounded-lg bg-white text-black font-mono text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Detail & Slides Modal */}
      <TalkModal
        talk={selectedTalk}
        onClose={() => setSelectedTalk(null)}
      />
    </section>
  );
};
