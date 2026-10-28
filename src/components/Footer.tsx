import React from 'react';
import { Logo } from './Logo';
import { siteConfig } from '../config/site';
import { useLanguage } from '../context/LanguageContext';
import { buildGeneralWhatsAppLink } from '../lib/whatsapp';
import { MessageCircle, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, params?: Record<string, string>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { locale, isRTL, t } = useLanguage();
  const isArabic = locale === 'ar';
  const currentYear = new Date().getFullYear();
  const whatsApp = buildGeneralWhatsAppLink(locale);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!whatsApp.isConfigured) {
      e.preventDefault();
      alert(t('whatsapp.unconfigured'));
    }
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Identity & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Logo isMonochrome={true} onClick={() => onNavigate('home')} />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="text-xs font-semibold text-blue-400">
              {t('footer.tagline')}
            </div>
            {siteConfig.supportEmail && (
              <div className="pt-2">
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#155EEF]" />
                  <span>{siteConfig.supportEmail}</span>
                </a>
              </div>
            )}
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('footer.quick_links')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t('nav.gallery')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* WhatsApp Direct Inquiries (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('footer.inquiries')}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t('footer.inquiries_note')}
            </p>
            <div className="pt-1">
              <a
                href={whatsApp.url || '#'}
                target={whatsApp.isConfigured ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t('btn.inquire')}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? '-scale-x-100' : ''}`} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} PixelTemplates. {t('footer.rights')}</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="hover:text-slate-400 transition-colors cursor-pointer"
            >
              {t('nav.about')}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="hover:text-slate-400 transition-colors cursor-pointer"
            >
              {t('nav.contact')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
