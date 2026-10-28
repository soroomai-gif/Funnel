import React, { useState } from 'react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, params?: Record<string, string>) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const { locale, setLocale, isRTL, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLocale = locale === 'ar' ? 'en' : 'ar';
    setLocale(nextLocale);
  };

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'gallery', label: t('nav.gallery') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleLinkClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo onClick={() => onNavigate('home')} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors py-1 relative cursor-pointer ${
                  isActive ? 'text-[#155EEF] font-bold' : 'hover:text-[#155EEF] text-slate-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#155EEF] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3.5">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#E2E8F0] text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#155EEF]/20 cursor-pointer"
            aria-label="Change Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#155EEF]" />
            <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
          </button>

          {/* Direct CTA */}
          <button
            type="button"
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#155EEF] hover:bg-[#3882F6] rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#155EEF]/30 cursor-pointer"
          >
            <span>{t('hero.cta')}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? '-scale-x-100' : ''}`} />
          </button>
        </div>

        {/* Mobile Actions: Language & Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-2.5 py-1.5 rounded-lg border border-[#E2E8F0] text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
            aria-label="Toggle Language"
          >
            {locale === 'ar' ? 'EN' : 'عربي'}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E2E8F0] bg-white px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2.5 rounded-lg text-sm text-start font-medium cursor-pointer transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-[#155EEF] font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <button
                type="button"
                onClick={() => handleLinkClick('gallery')}
                className="w-full flex justify-center items-center gap-2 px-4 py-3 text-sm font-bold text-white bg-[#155EEF] rounded-xl text-center shadow cursor-pointer"
              >
                <span>{t('hero.cta')}</span>
                <ArrowUpRight className={`w-4 h-4 ${isRTL ? '-scale-x-100' : ''}`} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
