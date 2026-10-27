import React, { useState } from 'react';
import { 
  initialProfile, 
  initialProjects, 
  initialSkillGroups, 
  initialExperiences, 
  initialEducation, 
  initialCertifications, 
  initialTestimonials
} from './data/portfolioData';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BioSection } from './components/BioSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

function PortfolioApp() {
  const profile = initialProfile;

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { theme } = useTheme();

  const handleOpenResume = () => {
    const resumeUrl = profile.socials.resumeUrl;

    if (resumeUrl && /^https?:\/\//i.test(resumeUrl)) {
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    setIsResumeOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 selection:bg-white/20 selection:text-white overflow-x-hidden font-sans ${
      theme === 'dark' 
        ? 'bg-[#080808] text-[#f3f4f6]' 
        : 'bg-[#fafaf9] text-[#171717]'
    }`}>
      
      {/* Top Navigation */}
      <Navbar
        profile={profile}
        onOpenResume={handleOpenResume}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <HeroSection
          profile={profile}
          onOpenResume={handleOpenResume}
        />

        {/* 2. Biography & Engineering Background */}
        <BioSection
          profile={profile}
          onOpenResume={handleOpenResume}
        />

        {/* 3. Featured Projects Showcase */}
        <ProjectsSection
          projects={initialProjects}
        />

        {/* 4. Skills & Engineering Matrix */}
        <SkillsSection
          skillGroups={initialSkillGroups}
        />

        {/* 5. Career Experience & Credentials */}
        <ExperienceSection
          experiences={initialExperiences}
          education={initialEducation}
          certifications={initialCertifications}
        />

        {/* 7. Testimonials & Peer Feedback */}
        <TestimonialsSection
          testimonials={initialTestimonials}
        />

        {/* 8. Contact & Professional Profiles */}
        <ContactSection
          profile={profile}
          onOpenResume={handleOpenResume}
        />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Full Resume View & Printable Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        experiences={initialExperiences}
        education={initialEducation}
        certifications={initialCertifications}
        skillGroups={initialSkillGroups}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
