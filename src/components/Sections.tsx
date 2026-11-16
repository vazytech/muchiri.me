import React, { useState } from 'react';
import { Experience, Profile, Project, SkillGroup } from '../types';
import { ExtLink, Section } from './Terminal';

export const About: React.FC<{ profile: Profile }> = ({ profile }) => (
  <Section id="about" user={profile.handle} cmd="cat about.txt">
    <div className="space-y-3 max-w-3xl text-term-muted">
      {profile.bio.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  </Section>
);

export const Projects: React.FC<{ user: string; projects: Project[] }> = ({ user, projects }) => (
  <Section id="projects" user={user} cmd="ls -la ./projects">
    <p className="text-term-dim text-sm mb-4">total {projects.length}</p>
    <ul className="space-y-4">
      {projects.map((p) => (
        <li key={p.id} className="border border-term-border rounded-md bg-term-panel">
          <details className="group">
            <summary className="cursor-pointer list-none p-5 flex flex-col gap-2 hover:bg-term-bar rounded-md">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-term-dim text-sm">drwxr-xr-x</span>
                <span className="text-term-cyan font-semibold text-lg">{p.id}/</span>
                <span className="text-term-dim text-xs ml-auto group-open:hidden">[+] details</span>
                <span className="text-term-dim text-xs ml-auto hidden group-open:inline">[-] hide</span>
              </div>
              <h3 className="text-term-fg font-semibold">{p.title}</h3>
              <p className="text-term-muted text-sm">{p.summary}</p>
              <p className="text-xs text-term-green">
                {p.stack.map((s) => `[${s}]`).join(' ')}
              </p>
            </summary>

            <div className="px-5 pb-5 space-y-4 text-sm border-t border-term-border pt-4">
              <div>
                <p className="text-term-yellow"># problem</p>
                <p className="text-term-muted mt-1">{p.problem}</p>
              </div>
              <div>
                <p className="text-term-yellow"># solution</p>
                <p className="text-term-muted mt-1">{p.solution}</p>
              </div>
              <div>
                <p className="text-term-yellow"># outcomes</p>
                <ul className="mt-1 space-y-1">
                  {p.outcomes.map((o) => (
                    <li key={o} className="text-term-muted">
                      <span className="text-term-green">[+]</span> {o}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-5">
                {p.liveUrl && <ExtLink href={p.liveUrl}>live ↗</ExtLink>}
                {p.githubUrl && <ExtLink href={p.githubUrl}>source ↗</ExtLink>}
              </div>
            </div>
          </details>
        </li>
      ))}
    </ul>
  </Section>
);

export const Skills: React.FC<{ user: string; groups: SkillGroup[] }> = ({ user, groups }) => (
  <Section id="skills" user={user} cmd="tree ./skills">
    <div className="text-sm">
      <p className="text-term-cyan">skills/</p>
      {groups.map((g, gi) => {
        const lastGroup = gi === groups.length - 1;
        return (
          <div key={g.id}>
            <p>
              <span className="text-term-dim">{lastGroup ? '└── ' : '├── '}</span>
              <span className="text-term-cyan">{g.title}/</span>
            </p>
            <ul>
              {g.skills.map((s, si) => (
                <li key={s}>
                  <span className="text-term-dim whitespace-pre">
                    {lastGroup ? '    ' : '│   '}
                    {si === g.skills.length - 1 ? '└── ' : '├── '}
                  </span>
                  <span className="text-term-fg">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </Section>
);

export const ExperienceLog: React.FC<{ user: string; items: Experience[] }> = ({ user, items }) => (
  <Section id="experience" user={user} cmd="git log --career">
    <ol className="space-y-6">
      {items.map((e) => (
        <li key={e.id} className="text-sm">
          <p className="text-term-yellow">commit {e.id}</p>
          <p className="text-term-dim">Date: {e.period} · {e.location}</p>
          <h3 className="mt-2 text-base text-term-fg font-semibold">
            {e.role} @{' '}
            {e.companyUrl ? <ExtLink href={e.companyUrl}>{e.company}</ExtLink> : e.company}
          </h3>
          <p className="text-term-muted mt-2 max-w-3xl">{e.overview}</p>
          <ul className="mt-2 space-y-1 max-w-3xl">
            {e.achievements.map((a) => (
              <li key={a} className="text-term-muted">
                <span className="text-term-green">+</span> {a}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </Section>
);

export const Contact: React.FC<{ profile: Profile }> = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const { github, linkedin, twitter, website, resumeUrl } = profile.socials;
  const links = [
    { label: 'github', href: github },
    { label: 'linkedin', href: linkedin },
    { label: 'twitter', href: twitter },
    { label: 'website', href: website },
    { label: 'resume', href: resumeUrl },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));

  return (
    <Section id="contact" user={profile.handle} cmd="./contact.sh">
      <div className="text-sm space-y-4">
        <p className="text-term-green">[*] Establishing secure channel... connected.</p>
        <p className="text-term-muted max-w-2xl">
          Have a role, project, or question about security? My inbox is open.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-term-dim">email:</span>
          <a href={`mailto:${profile.email}`} className="text-term-fg hover:text-term-green break-all">
            {profile.email}
          </a>
          <button type="button" onClick={copyEmail} className="btn-ghost !py-1 !px-2 text-xs" aria-live="polite">
            {copied ? '[✓] copied' : '[cp] copy'}
          </button>
        </div>

        {links.length > 0 && (
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.label}>
                <span className="text-term-dim">→ </span>
                <ExtLink href={l.href}>{l.label}</ExtLink>
              </li>
            ))}
          </ul>
        )}

        <a href={`mailto:${profile.email}?subject=${encodeURIComponent('Hello Muchiri')}`} className="btn-primary inline-block mt-2">
          $ send-mail --to muchiri
        </a>
      </div>
    </Section>
  );
};

export const Footer: React.FC<{ profile: Profile }> = ({ profile }) => (
  <footer className="border-t border-term-border mt-10">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 text-xs text-term-dim flex flex-col sm:flex-row gap-2 justify-between">
      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <p>
        <span className="text-term-green">$</span> exit <span className="text-term-dim">// session closed</span>
      </p>
    </div>
  </footer>
);
