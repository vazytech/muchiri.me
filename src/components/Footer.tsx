import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Sun, Moon } from 'lucide-react';
import { ProfileInfo } from '../types';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  profile: ProfileInfo;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const { theme, toggleTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-16 font-sans text-xs transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-[#080808] border-white/10 text-neutral-400'
        : 'bg-[#fafaf9] border-black/10 text-neutral-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b ${
          theme === 'dark' ? 'border-white/10' : 'border-black/10'
        }`}>
          
          {/* Brand Info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className={`w-8 h-8 rounded flex items-center justify-center font-serif italic text-sm font-semibold ${
              theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
            }`}>
              {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div>
              <div className={`font-serif italic text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {profile.name}
              </div>
              <div className="text-neutral-500 font-mono text-[10px] uppercase tracking-wider">{profile.role}</div>
            </div>
          </div>

          {/* Nav Jumps */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-wider">
            <a href="#bio" className="hover:text-black dark:hover:text-white transition-colors">Biography</a>
            <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
            <a href="#testimonials" className="hover:text-black dark:hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Profiles & Actions */}
          <div className="flex items-center gap-2.5">
            {/* Theme switch in footer */}
            <button
              onClick={toggleTheme}
              id="footer-theme-toggle-btn"
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                theme === 'dark' 
                  ? 'border-white/10 text-neutral-400 hover:text-white hover:bg-white/10' 
                  : 'border-black/10 text-neutral-700 hover:text-black hover:bg-black/10'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-neutral-800" />}
            </button>

            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                  theme === 'dark'
                    ? 'border-white/10 text-neutral-400 hover:text-black hover:bg-white'
                    : 'border-black/10 text-neutral-600 hover:text-white hover:bg-black'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                  theme === 'dark'
                    ? 'border-white/10 text-neutral-400 hover:text-black hover:bg-white'
                    : 'border-black/10 text-neutral-600 hover:text-white hover:bg-black'
                }`}
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            )}
            {profile.socials.twitter && (
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                  theme === 'dark'
                    ? 'border-white/10 text-neutral-400 hover:text-black hover:bg-white'
                    : 'border-black/10 text-neutral-600 hover:text-white hover:bg-black'
                }`}
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              aria-label="Back to top"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ml-1 ${
                theme === 'dark'
                  ? 'bg-white text-black hover:bg-neutral-200'
                  : 'bg-black text-white hover:bg-neutral-800'
              }`}
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[10px] font-mono uppercase tracking-wider">
          <div>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Modern Web Architecture</span>
            <span>•</span>
            <span className={theme === 'dark' ? 'text-white' : 'text-black'}>Deployed & Active</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
