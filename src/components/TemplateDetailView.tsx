import React, { useState } from 'react';
import { Template } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { buildTemplateWhatsAppLink } from '../lib/whatsapp';
import { TemplateCard } from './TemplateCard';
import {
  ExternalLink,
  MessageCircle,
  Check,
  ArrowLeft,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Smartphone,
  Layers,
  Info
} from 'lucide-react';

interface TemplateDetailViewProps {
  template: Template;
  allTemplates: Template[];
  onBack: () => void;
  onSelectTemplate: (t: Template) => void;
  onOpenPreviewModal?: (template: Template) => void;
}

export const TemplateDetailView: React.FC<TemplateDetailViewProps> = ({
  template,
  allTemplates,
  onBack,
  onSelectTemplate,
  onOpenPreviewModal,
}) => {
  const { locale, isRTL, t } = useLanguage();
  const isArabic = locale === 'ar';
  const [activeImage, setActiveImage] = useState(template.previewImage);

  const title = isArabic ? template.nameAr : template.name;
  const description = isArabic ? template.descriptionAr : template.description;
  const categoryName = isArabic ? template.categoryNameAr : template.categoryNameEn;
  const featuresList = isArabic ? template.featuresAr : template.features;
  const responsiveInfo = isArabic ? template.responsiveNotesAr : template.responsiveNotes;

  const whatsApp = buildTemplateWhatsAppLink(template, locale);

  const relatedTemplates = allTemplates
    .filter((t) => t.category === template.category && t.id !== template.id)
    .slice(0, 3);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!whatsApp.isConfigured) {
      e.preventDefault();
      alert(t('whatsapp.unconfigured'));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 animate-fadeIn">
      {/* Back to Gallery Link */}
      <div className="mb-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#155EEF] transition-colors cursor-pointer"
        >
          {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{t('details.back')}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Image Gallery, Features, Responsive Specs (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Large Preview */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm">
            <div className="relative aspect-[16/10] bg-slate-100">
              <img
                src={activeImage}
                alt={title}
                className="w-full h-full object-cover object-top transition-all"
              />
            </div>

            {/* Gallery Thumbnails */}
            {template.galleryImages.length > 1 && (
              <div className="p-4 bg-slate-50 border-t border-[#E2E8F0] flex gap-3 overflow-x-auto">
                {template.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 sm:w-24 aspect-[16/10] rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                      activeImage === img
                        ? 'border-[#155EEF] shadow-sm'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Demo Notice */}
            {template.isDemoPreviewUrl && (
              <div className="p-3.5 bg-amber-50/80 border-t border-amber-200/70 flex items-center gap-2.5 text-xs text-amber-900">
                <ShieldAlert className="w-4 h-4 shrink-0 text-amber-600" />
                <span>{t('details.demo_notice')}</span>
              </div>
            )}
          </div>

          {/* Features and Responsiveness Card */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 space-y-8 shadow-sm">
            {/* Features */}
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#155EEF]" />
                <span>{t('details.features')}</span>
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {featuresList.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-[#155EEF] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsiveness */}
            <div className="pt-6 border-t border-[#E2E8F0]">
              <h2 className="text-base sm:text-lg font-bold text-[#0F172A] mb-3 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#155EEF]" />
                <span>{t('details.responsive')}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/70">
                {responsiveInfo}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing, CTA, Specs (4 cols) */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-7 shadow-sm space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#155EEF] border border-blue-100">
                  {categoryName}
                </span>
                {template.featured && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#155EEF] text-white">
                    <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
                    <span>{isArabic ? 'مميز' : 'Featured'}</span>
                  </span>
                )}
              </div>

              <h1 className="text-xl sm:text-2xl font-black text-[#0F172A] leading-snug">
                {title}
              </h1>

              {/* Price display */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                {template.price !== null ? (
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black text-[#0F172A]">${template.price}</span>
                    <span className="text-xs font-semibold text-slate-500 uppercase">{template.currency}</span>
                  </div>
                ) : (
                  <div className="text-base font-bold text-slate-700">
                    {isArabic ? 'سعر خاص عند الطلب' : 'Custom Pricing on Inquiry'}
                  </div>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              {/* External Live Preview Button */}
              <a
                href={template.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (onOpenPreviewModal) {
                    e.preventDefault();
                    onOpenPreviewModal(template);
                  }
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-sm font-bold shadow transition-all cursor-pointer"
              >
                <span>{t('btn.preview')}</span>
                <ExternalLink className={`w-4 h-4 ${isRTL ? '-scale-x-100' : ''}`} />
              </a>

              {/* WhatsApp Purchase Inquiry Button */}
              <a
                href={whatsApp.url || '#'}
                target={whatsApp.isConfigured ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t('btn.inquire')}</span>
              </a>

              <div className="text-center pt-1">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                  <Info className="w-3 h-3 text-[#155EEF]" />
                  <span>{t('details.direct_inquiry_badge')}</span>
                </span>
              </div>
            </div>

            {/* Tech Stack List */}
            <div className="pt-5 border-t border-[#E2E8F0]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                {t('details.tech')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {template.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-700 rounded-lg border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Templates */}
      {relatedTemplates.length > 0 && (
        <section className="mt-20 pt-10 border-t border-[#E2E8F0]">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-8">
            {t('details.related')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedTemplates.map((rel) => (
              <TemplateCard
                key={rel.id}
                template={rel}
                onSelect={(t) => {
                  onSelectTemplate(t);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenPreviewModal={onOpenPreviewModal}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
