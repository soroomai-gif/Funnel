import React, { useState } from 'react';
import { Template } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { buildTemplateWhatsAppLink } from '../lib/whatsapp';
import { ExternalLink, MessageCircle, Sparkles, Eye, Info } from 'lucide-react';

interface TemplateCardProps {
  template: Template;
  onSelect: (template: Template) => void;
  onOpenPreviewModal?: (template: Template) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  onSelect,
  onOpenPreviewModal,
}) => {
  const { locale, isRTL, t } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const isArabic = locale === 'ar';

  const title = isArabic ? template.nameAr : template.name;
  const description = isArabic ? template.descriptionAr : template.description;
  const categoryName = isArabic ? template.categoryNameAr : template.categoryNameEn;

  const whatsApp = buildTemplateWhatsAppLink(template, locale);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!whatsApp.isConfigured) {
      e.preventDefault();
      alert(t('whatsapp.unconfigured'));
    }
  };

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 overflow-hidden">
      {/* Template Thumbnail with Badges */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 cursor-pointer" onClick={() => onSelect(template)}>
        {!imgError ? (
          <img
            src={template.previewImage}
            alt={title}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 p-4 text-center">
            <span className="font-mono text-xs font-semibold text-slate-400 mb-1">{template.categoryNameEn}</span>
            <span className="text-sm font-bold text-slate-600">{title}</span>
          </div>
        )}

        {/* Hover Quick Overlay */}
        <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-md backdrop-blur-sm">
            <Eye className="w-3.5 h-3.5 text-[#155EEF]" />
            <span>{t('btn.view_details')}</span>
          </span>
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white/95 text-slate-800 shadow-sm backdrop-blur-sm">
            {categoryName}
          </span>
          {template.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full bg-[#155EEF] text-white shadow-sm">
              <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
              <span>{isArabic ? 'مميز' : 'Featured'}</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Price */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3
              onClick={() => onSelect(template)}
              className="text-base sm:text-lg font-bold text-[#0F172A] line-clamp-1 hover:text-[#155EEF] transition-colors cursor-pointer"
            >
              {title}
            </h3>
            {template.price !== null ? (
              <div className="shrink-0 text-base font-extrabold text-[#0F172A]">
                ${template.price}
                <span className="text-xs font-medium text-slate-500 ms-1">{template.currency}</span>
              </div>
            ) : (
              <div className="shrink-0 text-xs font-medium text-slate-500">
                {isArabic ? 'سعر خاص' : 'Inquire'}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
            {description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {template.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-medium bg-slate-50 text-slate-600 rounded border border-slate-200"
              >
                {tech}
              </span>
            ))}
            {template.technologies.length > 3 && (
              <span className="px-1.5 py-0.5 text-xs text-slate-400 font-medium">
                +{template.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons: Live Preview & WhatsApp */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
          {/* External Live Preview */}
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
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors focus:ring-2 focus:ring-slate-300 focus:outline-none cursor-pointer"
            title={template.isDemoPreviewUrl ? (isArabic ? 'رابط معاينة تجريبي' : 'Sample demo preview URL') : undefined}
          >
            <span>{t('btn.preview')}</span>
            <ExternalLink className={`w-3.5 h-3.5 text-slate-500 ${isRTL ? '-scale-x-100' : ''}`} />
          </a>

          {/* WhatsApp Direct Inquiry Button */}
          <a
            href={whatsApp.url || '#'}
            target={whatsApp.isConfigured ? '_blank' : '_self'}
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold rounded-lg text-white shadow-sm transition-colors focus:ring-2 focus:ring-green-600/30 focus:outline-none cursor-pointer ${
              whatsApp.isConfigured
                ? 'bg-[#16A34A] hover:bg-[#15803D]'
                : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>{t('btn.inquire')}</span>
          </a>
        </div>
      </div>
    </article>
  );
};
