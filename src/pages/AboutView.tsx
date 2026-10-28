import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, ShieldCheck, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const { locale, isRTL, t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fadeIn">
      <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 md:p-12 shadow-sm space-y-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#155EEF]">
            <Sparkles className="w-3.5 h-3.5 text-[#155EEF]" />
            <span>{t('about.badge')}</span>
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] mt-3">
            {t('about.title')}
          </h1>
        </div>

        {/* Honest, concise copy without fake claims */}
        <div className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </div>

        {/* Quality Standards Grid */}
        <div className="pt-6 border-t border-[#E2E8F0] space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#155EEF]" />
            <span>{t('about.standards_title')}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#155EEF] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-800 font-medium">
                {t('about.standard1')}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#155EEF] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-800 font-medium">
                {t('about.standard2')}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#155EEF] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-800 font-medium">
                {t('about.standard3')}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#155EEF] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-800 font-medium">
                {t('about.standard4')}
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="pt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#155EEF] hover:bg-[#3882F6] text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer"
          >
            <span>{t('hero.cta')}</span>
            <ArrowUpRight className={`w-4 h-4 ${isRTL ? '-scale-x-100' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
