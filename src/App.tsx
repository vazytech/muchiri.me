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
import { ProfileInfo } from './types';
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
import { CustomizerDrawer } from './components/CustomizerDrawer';
import { Footer } from './components/Footer';

function PortfolioApp() {
  const [profile, setProfile] = useState<ProfileInfo>(() => {
    try {
      const saved = localStorage.getItem('portfolio_profile_custom');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not parse saved profile:', e);
    }
    return initialProfile;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const { theme } = useTheme();

  const handleSaveProfile = (newProfile: ProfileInfo) => {
    setProfile(newProfile);
    try {
      localStorage.setItem('portfolio_profile_custom', JSON.stringify(newProfile));
    } catch (e) {
      console.error('Failed to persist profile:', e);
    }
  };

  const handleResetDefault = () => {
    setProfile(initialProfile);
    try {
      localStorage.removeItem('portfolio_profile_custom');
    } catch (e) {
      console.error('Failed to reset profile:', e);
    }
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
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <HeroSection
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 2. Biography & Engineering Background */}
        <BioSection
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
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
          onOpenResume={() => setIsResumeOpen(true)}
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

      {/* Live Profile Customizer Drawer */}
      <CustomizerDrawer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        onResetDefault={handleResetDefault}
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
