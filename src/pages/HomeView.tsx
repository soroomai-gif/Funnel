import React from 'react';
import { templates, categories } from '../data/templates';
import { Template } from '../types';
import { TemplateCard } from '../components/TemplateCard';
import { useLanguage } from '../context/LanguageContext';
import { buildGeneralWhatsAppLink } from '../lib/whatsapp';
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Smartphone,
  Headphones,
  MessageCircle,
  Layers,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string, params?: Record<string, string>) => void;
  onSelectTemplate: (template: Template) => void;
  onOpenPreviewModal: (template: Template) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectTemplate,
  onOpenPreviewModal,
}) => {
  const { locale, isRTL, t } = useLanguage();
  const isArabic = locale === 'ar';

  const featuredTemplates = templates.filter((item) => item.featured);
  const recentTemplates = templates.slice(0, 4);
  const generalWhatsApp = buildGeneralWhatsAppLink(locale);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!generalWhatsApp.isConfigured) {
      e.preventDefault();
      alert(t('whatsapp.unconfigured'));
    }
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-white via-slate-50/70 to-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#155EEF]">
                <span className="w-2 h-2 rounded-full bg-[#155EEF] animate-pulse" />
                <span>{t('hero.tag')}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.15]">
                {t('hero.heading')}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {t('hero.subheading')}
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-[#155EEF] hover:bg-[#3882F6] text-white font-bold text-sm shadow-sm transition-all focus:ring-4 focus:ring-blue-100 cursor-pointer"
                >
                  <span>{t('hero.cta')}</span>
                  <ArrowUpRight className={`w-4 h-4 ${isRTL ? '-scale-x-100' : ''}`} />
                </button>

                <a
                  href={generalWhatsApp.url || '#'}
                  target={generalWhatsApp.isConfigured ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0F172A] font-semibold text-sm border border-[#E2E8F0] shadow-sm transition-all focus:ring-4 focus:ring-slate-100 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#16A34A] fill-current" />
                  <span>{t('hero.secondary_cta')}</span>
                </a>
              </div>
            </div>

            {/* Hero Visual Mockup Composition (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow accent */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-15" />

                {/* Main Browser Window Mockup */}
                <div className="relative rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
                  {/* Browser top-bar */}
                  <div className="h-10 bg-slate-100/90 border-b border-slate-200 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-500 truncate max-w-[190px]">
                      pixeltemplates.preview
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </div>

                  {/* Inner preview card showcase */}
                  <div className="p-4 bg-slate-50">
                    <div className="rounded-xl overflow-hidden border border-slate-200 bg-white aspect-[16/10] relative shadow-inner">
                      <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="w-3.5 h-3.5 rounded bg-[#155EEF]" />
                            <span className="font-bold text-[11px] tracking-wider uppercase text-slate-300">Live Demo</span>
                          </div>
                          <span className="px-2 py-0.5 text-[10px] font-semibold bg-white/10 rounded-full text-emerald-400 border border-emerald-500/20">
                            Responsive 100%
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="h-3.5 w-3/4 bg-white/25 rounded" />
                          <div className="h-2.5 w-1/2 bg-white/15 rounded" />
                        </div>
                        <div className="flex gap-2 pt-2">
                          <div className="h-6 px-3 bg-[#155EEF] rounded text-[9px] flex items-center justify-center font-bold">
                            Live Preview
                          </div>
                          <div className="h-6 px-3 bg-white/10 rounded text-[9px] flex items-center justify-center text-slate-300">
                            Components
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating mobile phone preview overlay */}
                <div className="hidden sm:block absolute -bottom-5 -start-5 w-36 rounded-2xl border-4 border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
                  <div className="h-3.5 bg-slate-900 flex justify-center items-center">
                    <div className="w-8 h-1 bg-slate-700 rounded-full" />
                  </div>
                  <div className="bg-slate-800 p-2 text-white aspect-[9/16] flex flex-col justify-between">
                    <div className="w-full h-1.5 bg-blue-500 rounded" />
                    <div className="space-y-1">
                      <div className="w-3/4 h-1.5 bg-slate-600 rounded" />
                      <div className="w-1/2 h-1.5 bg-slate-700 rounded" />
                    </div>
                    <div className="w-full h-4 bg-emerald-500 rounded text-[8px] flex items-center justify-center font-bold">
                      WhatsApp
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] mb-1">
              {isArabic ? 'مختاراتنا' : 'Handpicked'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              {t('home.featured_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {t('home.featured_subtitle')}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('gallery')}
            className="text-xs sm:text-sm font-bold text-[#155EEF] hover:text-[#3882F6] inline-flex items-center gap-1 cursor-pointer"
          >
            <span>{t('home.view_all')}</span>
            <ArrowUpRight className={`w-4 h-4 ${isRTL ? '-scale-x-100' : ''}`} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onSelect={onSelectTemplate}
              onOpenPreviewModal={onOpenPreviewModal}
            />
          ))}
        </div>
      </section>

      {/* Browse by Category Section */}
      <section className="py-14 bg-slate-100/70 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
              {t('home.categories_title')}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {categories
              .filter((c) => c.id !== 'all')
              .map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onNavigate('gallery', { category: cat.id })}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#155EEF] hover:shadow-sm transition-all group text-start cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center shrink-0 group-hover:bg-[#155EEF] group-hover:text-white transition-colors">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-1">
                    {isArabic ? cat.nameAr : cat.nameEn}
                  </span>
                </button>
              ))}
          </div>
        </div>
      </section>

      {/* Recently Added Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] mb-1">
              {isArabic ? 'جديدنا' : 'Latest'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              {t('home.recent_title')}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('gallery')}
            className="text-xs sm:text-sm font-bold text-[#155EEF] hover:text-[#3882F6] inline-flex items-center gap-1 cursor-pointer"
          >
            <span>{t('hero.cta')}</span>
            <ArrowUpRight className={`w-4 h-4 ${isRTL ? '-scale-x-100' : ''}`} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onSelect={onSelectTemplate}
              onOpenPreviewModal={onOpenPreviewModal}
            />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-3">
              {t('home.benefits_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {t('home.benefits_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-[#E2E8F0] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#155EEF] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0F172A] text-sm sm:text-base">
                {t('benefit.speed.title')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('benefit.speed.desc')}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-[#E2E8F0] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#155EEF] flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0F172A] text-sm sm:text-base">
                {t('benefit.responsive.title')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('benefit.responsive.desc')}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-[#E2E8F0] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#155EEF] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0F172A] text-sm sm:text-base">
                {t('benefit.clean.title')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('benefit.clean.desc')}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-[#E2E8F0] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#155EEF] flex items-center justify-center">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0F172A] text-sm sm:text-base">
                {t('benefit.support.title')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('benefit.support.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Callout Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0F172A] text-white p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-start max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t('banner.title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t('banner.desc')}
            </p>
          </div>
          <div className="shrink-0">
            <a
              href={generalWhatsApp.url || '#'}
              target={generalWhatsApp.isConfigured ? '_blank' : '_self'}
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm shadow-lg transition-all focus:ring-4 focus:ring-green-400/30 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t('banner.btn')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
