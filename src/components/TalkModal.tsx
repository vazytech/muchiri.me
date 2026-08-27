import React, { useState } from 'react';
import { 
  X, 
  Video, 
  FileText, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Sparkles, 
  Check, 
  Share2, 
  ChevronRight, 
  ChevronLeft,
  Presentation,
  CheckCircle2,
  Headphones
} from 'lucide-react';
import { TalkItem } from '../types';

interface TalkModalProps {
  talk: TalkItem | null;
  onClose: () => void;
}

export const TalkModal: React.FC<TalkModalProps> = ({ talk, onClose }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [copiedCitation, setCopiedCitation] = useState(false);

  if (!talk) return null;

  const slides = talk.slidesPreview || [];
  const currentSlide = slides[activeSlideIndex];

  const handleCopyCitation = () => {
    const citation = `"${talk.title}" by Martin Gatimu. Presented at ${talk.event}, ${talk.date}. ${talk.location}. ${talk.slidesUrl || talk.videoUrl || ''}`;
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  return (
    <div 
      id="talk-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl rounded-2xl bg-[#0e0e0e] text-neutral-200 border border-white/10 shadow-2xl shadow-black overflow-hidden flex flex-col my-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-5 sm:p-6 bg-[#131313] border-b border-white/10 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-white/10 text-white text-[10px] font-mono uppercase tracking-widest border border-white/15">
                {talk.eventType}
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#1f1f1f] text-neutral-300 text-[10px] font-mono border border-white/5">
                {talk.event}
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#1f1f1f] text-neutral-400 text-[10px] font-mono border border-white/5">
                {talk.format}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-white tracking-tight leading-tight">
              {talk.title}
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              {talk.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            id="close-talk-modal-btn"
            aria-label="Close modal"
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-white/10 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-xs sm:text-sm">
          
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#121212] border border-white/5 font-mono text-xs">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-neutral-400" />
              <div>
                <div className="text-[10px] uppercase text-neutral-500">Date</div>
                <div className="text-neutral-200">{talk.date}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-neutral-400" />
              <div>
                <div className="text-[10px] uppercase text-neutral-500">Location</div>
                <div className="text-neutral-200">{talk.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-neutral-400" />
              <div>
                <div className="text-[10px] uppercase text-neutral-500">Duration</div>
                <div className="text-neutral-200">{talk.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-neutral-400" />
              <div>
                <div className="text-[10px] uppercase text-neutral-500">Reach / Audience</div>
                <div className="text-neutral-200">{talk.attendeesCount || '500+ Attendees'}</div>
              </div>
            </div>
          </div>

          {/* Abstract / Technical Overview */}
          <div className="space-y-3">
            <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Technical Abstract & Problem Domain
            </h3>
            <p className="text-neutral-300 leading-relaxed font-light text-xs sm:text-sm bg-[#121212] p-5 rounded-xl border border-white/5">
              {talk.abstract}
            </p>
          </div>

          {/* Slide Deck Walkthrough Simulation if available */}
          {slides.length > 0 && currentSlide && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
                  <Presentation className="w-3.5 h-3.5" />
                  Key Presentation Slides ({activeSlideIndex + 1} of {slides.length})
                </h3>
                
                <div className="flex items-center gap-1.5 font-mono text-xs">
                  <button
                    onClick={() => setActiveSlideIndex(prev => Math.max(0, prev - 1))}
                    disabled={activeSlideIndex === 0}
                    className="p-1.5 rounded bg-[#181818] border border-white/10 text-neutral-300 disabled:opacity-30 hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-2 text-neutral-400 text-[10px]">
                    {activeSlideIndex + 1}/{slides.length}
                  </span>
                  <button
                    onClick={() => setActiveSlideIndex(prev => Math.min(slides.length - 1, prev + 1))}
                    disabled={activeSlideIndex === slides.length - 1}
                    className="p-1.5 rounded bg-[#181818] border border-white/10 text-neutral-300 disabled:opacity-30 hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Simulated Slide Canvas */}
              <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#161616] to-[#0d0d0d] border border-white/15 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                    SLIDE 0{currentSlide.slideNumber} • {talk.event}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    Martin Gatimu
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-serif italic text-white">
                  {currentSlide.title}
                </h4>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {currentSlide.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  {currentSlide.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Key Architecture Takeaways */}
          <div className="space-y-3">
            <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400">
              Core Architecture Takeaways
            </h3>
            <div className="space-y-2.5">
              {talk.keyTakeaways.map((takeaway, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-[#121212] border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {takeaway}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Topic Tags */}
          <div className="space-y-2 pt-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
              Topics & Technologies
            </div>
            <div className="flex flex-wrap gap-1.5">
              {talk.topics.map((topic, i) => (
                <span 
                  key={i}
                  className="px-2.5 py-1 rounded bg-[#161616] text-neutral-300 text-xs font-mono border border-white/5"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-[#131313] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <button
            onClick={handleCopyCitation}
            id="copy-talk-citation-btn"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1a1a1a] hover:bg-[#242424] text-neutral-300 border border-white/10 transition-colors font-mono text-xs w-full sm:w-auto justify-center"
          >
            {copiedCitation ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedCitation ? 'Citation Copied!' : 'Copy Citation'}</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {talk.slidesUrl && (
              <a
                href={talk.slidesUrl}
                target="_blank"
                rel="noreferrer"
                id="talk-view-slides-btn"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181818] hover:bg-[#222222] text-neutral-200 font-medium font-mono uppercase tracking-wider text-xs border border-white/10 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-neutral-400" />
                <span>Slide Deck</span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </a>
            )}

            {talk.videoUrl && (
              <a
                href={talk.videoUrl}
                target="_blank"
                rel="noreferrer"
                id="talk-watch-video-btn"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-semibold uppercase tracking-wider text-xs shadow-sm hover:bg-neutral-200 transition-colors"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Watch Session</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {talk.audioUrl && (
              <a
                href={talk.audioUrl}
                target="_blank"
                rel="noreferrer"
                id="talk-listen-audio-btn"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-semibold uppercase tracking-wider text-xs shadow-sm hover:bg-neutral-200 transition-colors"
              >
                <Headphones className="w-3.5 h-3.5" />
                <span>Listen Episode</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
