import React from 'react';
import { experiences, profile, projects, skillGroups } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About, Contact, ExperienceLog, Footer, Projects, Skills } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-term-bg text-term-fg font-mono">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 btn-primary">
        Skip to content
      </a>
      <div className="scanlines" aria-hidden="true" />
      <Navbar profile={profile} />
      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6">
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects user={profile.handle} projects={projects} />
        <Skills user={profile.handle} groups={skillGroups} />
        <ExperienceLog user={profile.handle} items={experiences} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
