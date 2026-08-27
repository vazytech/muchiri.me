import React, { useState } from 'react';
import { X, RotateCcw, Save, Check, Sliders, User, Mail, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';
import { ProfileInfo } from '../types';

interface CustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileInfo;
  onSaveProfile: (newProfile: ProfileInfo) => void;
  onResetDefault: () => void;
}

export const CustomizerDrawer: React.FC<CustomizerDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  onResetDefault
}) => {
  const [formData, setFormData] = useState<ProfileInfo>(profile);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof ProfileInfo, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSocialChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      socials: {
        ...prev.socials,
        [key]: value
      }
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <div 
      id="customizer-drawer-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="customizer-drawer-panel"
        className="w-full max-w-lg h-full bg-[#0d0d0d] border-l border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 bg-[#111111] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-white/5 border border-white/10 text-white">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-serif italic text-white">Customize Portfolio</h3>
              <p className="text-[10px] text-neutral-400 font-mono">Live details and instant preview</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-5 text-xs">
          
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Your Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-[#080808] border border-white/10 text-white text-xs font-mono focus:border-white/40 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Primary Title / Role</label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => handleChange('role', e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-[#080808] border border-white/10 text-white text-xs font-mono focus:border-white/40 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Hero Tagline / Subtitle</label>
            <textarea
              rows={2}
              value={formData.tagline}
              onChange={(e) => handleChange('tagline', e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-[#080808] border border-white/10 text-white text-xs font-light focus:border-white/40 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#080808] border border-white/10 text-white text-xs font-mono focus:border-white/40 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#080808] border border-white/10 text-white text-xs font-mono focus:border-white/40 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Status Badge Text</label>
            <input
              type="text"
              value={formData.status}
              onChange={(e) => handleChange('status', e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-[#080808] border border-white/10 text-white text-xs font-mono focus:border-white/40 focus:outline-none"
            />
          </div>

          <div className="space-y-3 pt-3 border-t border-white/10">
            <h4 className="font-mono uppercase text-neutral-400 text-[10px] tracking-[0.2em]">Social & Professional Links</h4>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <input
                  type="text"
                  placeholder="GitHub URL"
                  value={formData.socials.github || ''}
                  onChange={(e) => handleSocialChange('github', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#080808] border border-white/10 text-white text-xs font-mono"
                />
              </div>

              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <input
                  type="text"
                  placeholder="LinkedIn URL"
                  value={formData.socials.linkedin || ''}
                  onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#080808] border border-white/10 text-white text-xs font-mono"
                />
              </div>

              <div className="flex items-center gap-2">
                <Twitter className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Twitter / X URL"
                  value={formData.socials.twitter || ''}
                  onChange={(e) => handleSocialChange('twitter', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#080808] border border-white/10 text-white text-xs font-mono"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5 pt-3 border-t border-white/10">
            <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Biography Overview</label>
            <textarea
              rows={4}
              value={formData.bioParagraphs[0] || ''}
              onChange={(e) => {
                const newParas = [...formData.bioParagraphs];
                newParas[0] = e.target.value;
                handleChange('bioParagraphs', newParas);
              }}
              className="w-full px-3 py-2 rounded-lg bg-[#080808] border border-white/10 text-white text-xs leading-relaxed font-light"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              id="save-customizer-btn"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-all text-xs"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Footer with Reset */}
        <div className="p-4 bg-[#111111] border-t border-white/10 flex items-center justify-between text-xs font-mono">
          <button
            type="button"
            onClick={() => {
              onResetDefault();
              onClose();
            }}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Default</span>
          </button>
          <span className="text-neutral-500 text-[10px]">Local storage</span>
        </div>
      </div>
    </div>
  );
};
