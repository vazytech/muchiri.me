import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  Calendar, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  FileText, 
  Globe,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { ProfileInfo } from '../types';

interface ContactSectionProps {
  profile: ProfileInfo;
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, onOpenResume }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Senior Role / Technical Consultation Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const formattedSubject = encodeURIComponent(subject || 'Portfolio Inquiry');
    const formattedBody = encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${formattedSubject}&body=${formattedBody}`;
    setSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className="py-28 bg-[#080808] relative border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-mono mb-4">
            06 / Direct Inquiries & Transmission
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Whether you are discussing a staff/senior engineering role, cloud architecture consulting, or technical advisory, my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Links & Profile Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#111111] border border-white/5 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-serif italic text-white tracking-tight">
                  Direct Contact & Profiles
                </h3>
                <p className="text-xs text-neutral-400 mt-1 font-light">
                  Reach out directly across any of these verified channels:
                </p>
              </div>

              {/* Verified Profiles List */}
              <div className="space-y-3">
                
                {/* Email Box with One-Click Copy */}
                <div className="p-4 rounded-lg bg-[#0d0d0d] border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded bg-white/5 border border-white/10 text-white shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">Direct Email</div>
                      <div className="text-xs sm:text-sm font-mono text-white truncate">{profile.email}</div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    id="contact-copy-email-btn"
                    className="p-2 rounded bg-white/5 hover:bg-white text-neutral-400 hover:text-black border border-white/10 transition-all shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn Profile */}
                {profile.socials.linkedin && (
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    id="contact-linkedin-link"
                    className="p-4 rounded-lg bg-[#0d0d0d] border border-white/5 hover:border-white/20 flex items-center justify-between gap-3 group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-white/5 border border-white/10 text-neutral-300 shrink-0">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">LinkedIn Profile</div>
                        <div className="text-xs sm:text-sm font-mono text-neutral-200 group-hover:text-white transition-colors">
                          linkedin.com/in/martingatimu
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                      Connect &rarr;
                    </span>
                  </a>
                )}

                {/* GitHub Profile */}
                {profile.socials.github && (
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    id="contact-github-link"
                    className="p-4 rounded-lg bg-[#0d0d0d] border border-white/5 hover:border-white/20 flex items-center justify-between gap-3 group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-white/5 border border-white/10 text-neutral-300 shrink-0">
                        <Github className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">GitHub Open Source</div>
                        <div className="text-xs sm:text-sm font-mono text-neutral-200 group-hover:text-white transition-colors">
                          github.com/martingatimu
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                      Follow &rarr;
                    </span>
                  </a>
                )}

                {/* Twitter / X */}
                {profile.socials.twitter && (
                  <a
                    href={profile.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    id="contact-twitter-link"
                    className="p-4 rounded-lg bg-[#0d0d0d] border border-white/5 hover:border-white/20 flex items-center justify-between gap-3 group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-white/5 border border-white/10 text-neutral-300 shrink-0">
                        <Twitter className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">Twitter / X</div>
                        <div className="text-xs sm:text-sm font-mono text-neutral-200 group-hover:text-white transition-colors">
                          @martingatimu
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                      Follow &rarr;
                    </span>
                  </a>
                )}

                {profile.socials.website && (
                  <a
                    href={profile.socials.website}
                    target="_blank"
                    rel="noreferrer"
                    id="contact-website-link"
                    className="p-4 rounded-lg bg-[#0d0d0d] border border-white/5 hover:border-white/20 flex items-center justify-between gap-3 group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-white/5 border border-white/10 text-neutral-300 shrink-0">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">Website</div>
                        <div className="text-xs sm:text-sm font-mono text-neutral-200 group-hover:text-white transition-colors">
                          mkulima-nyandarua.vercel.app
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                      Visit &rarr;
                    </span>
                  </a>
                )}

                {/* Calendly Booking Link */}
                {profile.socials.calendly && (
                  <a
                    href={profile.socials.calendly}
                    id="contact-calendly-link"
                    className="p-4 rounded-lg bg-[#151515] border border-white/15 hover:border-white/30 flex items-center justify-between gap-3 group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-white text-black shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">Call or Book</div>
                        <div className="text-xs sm:text-sm font-serif italic text-white">0745422986</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white group-hover:translate-x-0.5 transition-transform">
                      Call &rarr;
                    </span>
                  </a>
                )}

              </div>

              {/* Location & Response Time Meta */}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-2 text-[11px] font-mono text-neutral-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Typical response time: within 4 hours</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#111111] border border-white/5 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-xl font-serif italic text-white tracking-tight">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5 font-light">
                    Fill in your project or role details below:
                  </p>
                </div>
                <button
                  onClick={onOpenResume}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d0d0d] border border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Resume</span>
                </button>
              </div>

              {submitted ? (
                <div 
                  id="contact-form-success"
                  className="p-8 rounded-lg bg-[#0d0d0d] border border-white/15 text-center space-y-4 animate-in fade-in"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-serif italic text-white">Thank you, {name}!</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed font-light">
                    Your inquiry has been captured. You can also send it directly via your mail client or reach out on LinkedIn.
                  </p>
                  
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`}
                      className="px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-xs uppercase tracking-wider shadow-sm transition-all hover:bg-neutral-200"
                    >
                      Open in Email Client
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setMessage('');
                      }}
                      className="px-4 py-2.5 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] text-neutral-300 text-xs font-mono uppercase tracking-wider border border-white/10"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                        Your Name / Organization <span className="text-neutral-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Connor / Stripe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d0d0d] border border-white/10 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-white/40 transition-all font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                        Your Email Address <span className="text-neutral-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d0d0d] border border-white/10 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-white/40 transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                      Inquiry Category
                    </label>
                    <select
                      id="contact-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d0d0d] border border-white/10 text-white text-xs focus:outline-none focus:border-white/40 transition-all font-mono"
                    >
                      <option value="Senior Role / Technical Consultation Inquiry">Senior Full-Time Role Opportunity</option>
                      <option value="Cloud Architecture & Systems Advisory">Architecture / Systems Advisory</option>
                      <option value="Contract Consulting / Fractional Lead">Contract / Fractional Engineering</option>
                      <option value="Speaking / Mentorship / General Chat">Speaking / Mentorship / General Discussion</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                      Message Details <span className="text-neutral-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share context about the team, tech stack, scope, or timeline..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d0d0d] border border-white/10 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-white/40 transition-all resize-y font-light leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-medium text-xs uppercase tracking-[0.2em] text-black bg-white hover:bg-neutral-200 transition-all shadow-sm active:scale-98"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
