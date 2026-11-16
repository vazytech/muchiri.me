import React, { useState } from 'react';
import { Profile } from '../types';

const links = [
  { href: '#about', label: 'about' },
  { href: '#projects', label: 'projects' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
];

export const Navbar: React.FC<{ profile: Profile }> = ({ profile }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-term-border bg-term-bg/90 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between" aria-label="Main">
        <a href="#top" className="text-term-green font-semibold hover:text-term-fg">
          {profile.handle}@sec<span className="text-term-dim">:~#</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-term-dim hover:text-term-green">
                ./{l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden text-term-green text-sm border border-term-border px-3 py-1 rounded"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '[x] close' : '[=] menu'}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="md:hidden border-t border-term-border px-4 py-3 space-y-2 text-sm bg-term-bg">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-1 text-term-dim hover:text-term-green">
                ./{l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};
