import React, { useState } from 'react';
import { Template } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { buildTemplateWhatsAppLink } from '../lib/whatsapp';
import {
  X,
  ExternalLink,
  MessageCircle,
  Monitor,
  Tablet,
  Smartphone,
  ShieldAlert
} from 'lucide-react';

interface LivePreviewModalProps {
  template: Template | null;
  onClose: () => void;
}

export const LivePreviewModal: React.FC<LivePreviewModalProps> = ({ template, onClose }) => {
  const { locale, isRTL, t } = useLanguage();
  const [deviceFrame, setDeviceFrame] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const isArabic = locale === 'ar';

  if (!template) return null;

  const title = isArabic ? template.nameAr : template.name;
  const whatsApp = buildTemplateWhatsAppLink(template, locale);

  const frameWidthClass =
    deviceFrame === 'desktop'
      ? 'w-full'
      : deviceFrame === 'tablet'
      ? 'w-[768px] max-w-full'
      : 'w-[375px] max-w-full';

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-900/95 backdrop-blur-sm animate-fadeIn">
      {/* Top Header Bar */}
      <div className="h-16 bg-[#0F172A] border-b border-slate-800 px-4 sm:px-6 flex items-center justify-between text-white shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm sm:text-base truncate max-w-[200px] sm:max-w-xs">
            {title}
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-xs rounded bg-blue-950 text-blue-300 border border-blue-800 font-mono">
            {template.categoryNameEn}
          </span>
        </div>

        {/* Viewport Toggles (desktop, tablet, mobile) */}
        <div className="hidden md:flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
          <button
            type="button"
            onClick={() => setDeviceFrame('desktop')}
            className={`p-1.5 rounded text-xs font-medium flex items-center gap-1 cursor-pointer transition-colors ${
              deviceFrame === 'desktop' ? 'bg-[#155EEF] text-white' : 'text-slate-400 hover:text-white'
            }`}
            title="Desktop View"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setDeviceFrame('tablet')}
            className={`p-1.5 rounded text-xs font-medium flex items-center gap-1 cursor-pointer transition-colors ${
              deviceFrame === 'tablet' ? 'bg-[#155EEF] text-white' : 'text-slate-400 hover:text-white'
            }`}
            title="Tablet View"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setDeviceFrame('mobile')}
            className={`p-1.5 rounded text-xs font-medium flex items-center gap-1 cursor-pointer transition-colors ${
              deviceFrame === 'mobile' ? 'bg-[#155EEF] text-white' : 'text-slate-400 hover:text-white'
            }`}
            title="Mobile View"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Real External Preview Link */}
          <a
            href={template.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-colors"
          >
            <span>{t('btn.preview')}</span>
            <ExternalLink className={`w-3.5 h-3.5 ${isRTL ? '-scale-x-100' : ''}`} />
          </a>

          {/* WhatsApp Direct Buy Button */}
          {whatsApp.isConfigured ? (
            <a
              href={whatsApp.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-xs font-bold text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>{t('btn.inquire')}</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={() => alert(t('whatsapp.unconfigured'))}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-xs font-bold text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>{t('btn.inquire')}</span>
            </button>
          )}

          {/* Close Modal */}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Demo Link Notice Banner */}
      {template.isDemoPreviewUrl && (
        <div className="bg-amber-400/90 text-amber-950 text-xs font-semibold py-1.5 px-4 text-center flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>{t('details.demo_notice')}</span>
        </div>
      )}

      {/* Simulated Preview Area */}
      <div className="flex-1 bg-slate-950 p-4 sm:p-6 overflow-auto flex justify-center items-start">
        <div
          className={`${frameWidthClass} transition-all duration-300 rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-white flex flex-col`}
          style={{ height: 'calc(100vh - 120px)' }}
        >
          {/* Simulated browser bar */}
          <div className="h-8 bg-slate-100 border-b border-slate-200 px-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="text-[11px] font-mono text-slate-500 truncate max-w-xs px-3 py-0.5 rounded bg-white border border-slate-200">
              {template.previewUrl}
            </div>
            <div className="w-10" />
          </div>

          {/* Preview frame content */}
          <div className="flex-1 overflow-auto bg-slate-50 flex flex-col items-center">
            <img
              src={template.previewImage}
              alt={title}
              className="w-full object-cover object-top shadow-sm"
            />
            {template.galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${title} section ${i + 1}`}
                className="w-full object-cover object-top border-t border-slate-200"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
