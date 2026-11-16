import React from 'react';

export const HOST = 'sec';

export const Prompt: React.FC<{ user: string; cmd: string; cursor?: boolean }> = ({ user, cmd, cursor }) => (
  <p className="break-words">
    <span className="text-term-green">{user}@{HOST}</span>
    <span className="text-term-dim">:</span>
    <span className="text-term-cyan">~</span>
    <span className="text-term-dim">$ </span>
    <span className="text-term-fg">{cmd}</span>
    {cursor && <span className="cursor" aria-hidden="true" />}
  </p>
);

interface WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Window: React.FC<WindowProps> = ({ title, children, className = '' }) => (
  <div className={`border border-term-border bg-term-panel rounded-md overflow-hidden ${className}`}>
    <div className="flex items-center gap-2 px-4 py-2 border-b border-term-border bg-term-bar">
      <span className="w-3 h-3 rounded-full bg-[#ff5f56]" aria-hidden="true" />
      <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
      <span className="w-3 h-3 rounded-full bg-[#27c93f]" aria-hidden="true" />
      <span className="ml-3 text-xs text-term-dim truncate">{title}</span>
    </div>
    <div className="p-5 sm:p-6 text-sm sm:text-[15px] leading-relaxed space-y-3">{children}</div>
  </div>
);

interface SectionProps {
  id: string;
  user: string;
  cmd: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, user, cmd, children }) => (
  <section id={id} className="scroll-mt-20 py-10 sm:py-14">
    <h2 className="sr-only">{id}</h2>
    <Prompt user={user} cmd={cmd} />
    <div className="mt-4">{children}</div>
  </section>
);

export const ExtLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-term-cyan underline decoration-term-cyan/40 underline-offset-4 hover:decoration-term-cyan hover:text-term-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-term-green"
  >
    {children}
  </a>
);
