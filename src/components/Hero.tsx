import React, { useEffect, useState } from 'react';
import { Profile } from '../types';
import { Prompt, Window } from './Terminal';

const ASCII = String.raw`
 __  __            _     _      _
|  \/  |_   _  ___| |__ (_)_ __(_)
| |\/| | | | |/ __| '_ \| | '__| |
| |  | | |_| | (__| | | | | |  | |
|_|  |_|\__,_|\___|_| |_|_|_|  |_|
`;

const FULL_CMD = 'whoami';

function useTyped(text: string, speed = 90) {
  const [typed, setTyped] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? text : ''
  );

  useEffect(() => {
    if (typed.length >= text.length) return;
    const t = setTimeout(() => setTyped(text.slice(0, typed.length + 1)), speed);
    return () => clearTimeout(t);
  }, [typed, text, speed]);

  return typed;
}

export const Hero: React.FC<{ profile: Profile }> = ({ profile }) => {
  const typed = useTyped(FULL_CMD);
  const done = typed === FULL_CMD;

  return (
    <section id="top" className="pt-10 sm:pt-16 pb-6">
      <Window title={`${profile.handle}@sec: ~ (bash)`}>
        <pre className="hidden sm:block text-term-green text-xs leading-tight select-none" aria-hidden="true">
          {ASCII.replace(/^\n/, '')}
        </pre>

        <Prompt user={profile.handle} cmd={typed} cursor={!done} />

        <div className={`transition-opacity duration-300 ${done ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-3xl sm:text-5xl font-bold text-term-fg mt-2">{profile.name}</h1>
          <p className="text-lg sm:text-xl text-term-green mt-2">
            {profile.role} <span className="text-term-dim">//</span>{' '}
            <span className="text-term-cyan">{profile.focus}</span>
          </p>
          <p className="text-term-muted mt-4 max-w-2xl">{profile.tagline}</p>

          <dl className="mt-5 grid gap-1 text-sm">
            <div className="flex gap-3">
              <dt className="text-term-dim w-20 shrink-0">location</dt>
              <dd className="text-term-fg">{profile.location}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-term-dim w-20 shrink-0">status</dt>
              <dd className="text-term-green">
                <span className="inline-block w-2 h-2 rounded-full bg-term-green mr-2 animate-pulse" aria-hidden="true" />
                {profile.status}
              </dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-3 mt-6 text-sm">
            <a href="#projects" className="btn-primary">$ ls ./projects</a>
            <a href="#contact" className="btn-ghost">$ ./contact.sh</a>
            {profile.socials.resumeUrl && (
              <a href={profile.socials.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                $ cat resume.pdf
              </a>
            )}
          </div>

          <div className="mt-6">
            <Prompt user={profile.handle} cmd="" cursor />
          </div>
        </div>
      </Window>
    </section>
  );
};
