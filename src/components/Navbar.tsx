import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Briefcase, 
  Code2, 
  User, 
  Mail, 
  FileText, 
  Menu, 
  X, 
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';
import { ProfileInfo } from '../types';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  profile: ProfileInfo;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'bio', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#bio', id: 'bio', icon: User },
    { name: 'Projects', href: '#projects', id: 'projects', icon: Code2 },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Terminal },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080808]/90 dark:bg-[#080808]/90 light:bg-[#fafaf9]/90 backdrop-blur-md border-b border-white/10 dark:border-white/10 light:border-black/10 py-3 shadow-xl shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a 
            href="#hero" 
            id="brand-logo-link"
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-1 focus:ring-white/30 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-[#141414] dark:bg-[#141414] light:bg-black text-white border border-white/15 dark:border-white/15 light:border-black flex items-center justify-center font-serif italic text-lg shadow-sm group-hover:opacity-90 transition-all">
              {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2) || 'MG'}
            </div>
            <div className="flex flex-col">
              <span className="font-serif italic text-white dark:text-white light:text-black transition-colors tracking-tight text-lg leading-tight">
                {profile.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-400 light:text-neutral-600 font-mono flex items-center gap-1.5 mt-0.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Available for hire
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#111111]/80 dark:bg-[#111111]/80 light:bg-[#eeeeec]/90 px-2 py-1.5 rounded-full border border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-white text-black dark:bg-white dark:text-black light:bg-black light:text-white shadow-sm font-semibold' 
                      : 'text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Dark / Light Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-nav-btn"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              className="p-2.5 rounded-lg text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/25 transition-all flex items-center justify-center"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-800 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            <button
              onClick={onOpenResume}
              id="view-resume-nav-btn"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-[11px] uppercase tracking-[0.18em] font-medium text-neutral-300 dark:text-neutral-300 light:text-neutral-800 bg-[#121212] dark:bg-[#121212] light:bg-[#f0f0ee] hover:bg-[#1a1a1a] dark:hover:bg-[#1a1a1a] light:hover:bg-[#e4e4e2] border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/25 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-neutral-300 dark:text-neutral-300 light:text-neutral-700" />
            </button>

            <a
              href="#contact"
              id="hire-me-nav-btn"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-[11px] uppercase tracking-[0.18em] font-semibold text-black bg-white hover:bg-neutral-200 dark:text-black dark:bg-white dark:hover:bg-neutral-200 light:text-white light:bg-black light:hover:bg-neutral-800 transition-all shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              id="mobile-theme-toggle-btn"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg text-neutral-300 dark:text-neutral-300 light:text-neutral-800 bg-[#121212] dark:bg-[#121212] light:bg-[#f0f0ee] border border-white/10 dark:border-white/10 light:border-black/10 text-xs"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-800" />
              )}
            </button>

            <button
              onClick={onOpenResume}
              id="mobile-resume-trigger"
              className="p-2 rounded-lg text-neutral-300 dark:text-neutral-300 light:text-neutral-800 bg-[#121212] dark:bg-[#121212] light:bg-[#f0f0ee] border border-white/10 dark:border-white/10 light:border-black/10 text-xs font-medium flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-neutral-300 dark:text-neutral-300 light:text-neutral-800 hover:text-white bg-[#121212] dark:bg-[#121212] light:bg-[#f0f0ee] border border-white/10 dark:border-white/10 light:border-black/10 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-dropdown"
          className="md:hidden bg-[#0a0a0a]/95 dark:bg-[#0a0a0a]/95 light:bg-[#fafaf9]/95 border-b border-white/10 dark:border-white/10 light:border-black/10 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`mobile-link-${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[11px] uppercase tracking-[0.2em] font-medium transition-colors ${
                    isActive 
                      ? 'bg-white text-black dark:bg-white dark:text-black light:bg-black light:text-white font-semibold' 
                      : 'text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 dark:border-white/10 light:border-black/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              id="mobile-menu-resume-btn"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold text-neutral-200 dark:text-neutral-200 light:text-neutral-900 bg-[#141414] dark:bg-[#141414] light:bg-[#f0f0ee] border border-white/10 dark:border-white/10 light:border-black/10"
            >
              <FileText className="w-4 h-4" />
            </button>

          </div>
        </div>
      )}
    </header>
  );
};
