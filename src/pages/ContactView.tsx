import React from 'react';
import { siteConfig } from '../config/site';
import { useLanguage } from '../context/LanguageContext';
import { buildGeneralWhatsAppLink } from '../lib/whatsapp';
import { MessageCircle, Mail, Clock, ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';

export const ContactView: React.FC = () => {
  const { locale, t } = useLanguage();
  const isArabic = locale === 'ar';
  const generalWhatsApp = buildGeneralWhatsAppLink(locale);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!generalWhatsApp.isConfigured) {
      e.preventDefault();
      alert(t('whatsapp.unconfigured'));
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fadeIn">
      <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 md:p-12 shadow-sm space-y-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#155EEF]">
            <Sparkles className="w-3.5 h-3.5 text-[#155EEF]" />
            <span>{t('contact.badge')}</span>
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] mt-3">
            {t('contact.title')}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Primary Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* WhatsApp Direct Chat Card */}
          <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#16A34A] text-white flex items-center justify-center shadow-sm">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                {t('contact.whatsapp_card_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t('contact.whatsapp_card_desc')}
              </p>
            </div>

            <div>
              <a
                href={generalWhatsApp.url || '#'}
                target={generalWhatsApp.isConfigured ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{generalWhatsApp.isConfigured ? (isArabic ? 'بدء محادثة واتساب الآن' : 'Start WhatsApp Chat') : (isArabic ? 'استفسار عبر واتساب' : 'Inquire via WhatsApp')}</span>
              </a>

              {!generalWhatsApp.isConfigured && (
                <p className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-2 text-center">
                  {t('whatsapp.unconfigured')}
                </p>
              )}
            </div>
          </div>

          {/* Email Support Card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-[#E2E8F0] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#155EEF] border border-blue-100 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                {t('contact.email_card_title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t('contact.email_card_desc')}
              </p>
            </div>

            <div>
              {siteConfig.supportEmail ? (
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#E2E8F0] hover:bg-slate-100 text-[#0F172A] text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span className="truncate">{siteConfig.supportEmail}</span>
                </a>
              ) : (
                <span className="text-xs text-slate-400 italic block text-center py-2">
                  {isArabic ? 'البريد الإلكتروني غير مفعّل' : 'Email not configured'}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Reassurance & Transparency Badges */}
        <div className="pt-6 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#155EEF] shrink-0" />
            <span>{t('contact.response_time')}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>{t('contact.handoff_guarantee')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
