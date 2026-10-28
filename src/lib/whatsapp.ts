import { siteConfig } from '../config/site';
import { Template, Language } from '../types';

export interface WhatsAppLinkResult {
  url: string | null;
  isConfigured: boolean;
  message: string;
}

/**
 * Builds a direct WhatsApp inquiry link with prefilled template information.
 * If no phone number is configured, isConfigured is false and url is null.
 */
export function buildTemplateWhatsAppLink(
  template: Template,
  locale: Language,
  customPhoneNumber?: string
): WhatsAppLinkResult {
  const rawNumber = customPhoneNumber !== undefined ? customPhoneNumber : siteConfig.whatsappNumber;
  const cleanNumber = (rawNumber || '').replace(/[^0-9]/g, '');
  const isConfigured = cleanNumber.length >= 7;

  const templateName = locale === 'ar' ? template.nameAr : template.name;
  const previewUrl = template.previewUrl;

  const message =
    locale === 'ar'
      ? `مرحبًا PixelTemplates، أرغب في شراء قالب [${templateName}]. رابط المعاينة: [${previewUrl}]. أرجو إرسال تفاصيل الشراء.`
      : `Hello PixelTemplates, I am interested in purchasing the [${templateName}] template. Preview: [${previewUrl}]. Please provide the purchase details.`;

  if (!isConfigured) {
    return {
      url: null,
      isConfigured: false,
      message,
    };
  }

  const encodedMessage = encodeURIComponent(message);
  return {
    url: `https://wa.me/${cleanNumber}?text=${encodedMessage}`,
    isConfigured: true,
    message,
  };
}

/**
 * Builds a general WhatsApp inquiry link for PixelTemplates.
 */
export function buildGeneralWhatsAppLink(
  locale: Language,
  customPhoneNumber?: string
): WhatsAppLinkResult {
  const rawNumber = customPhoneNumber !== undefined ? customPhoneNumber : siteConfig.whatsappNumber;
  const cleanNumber = (rawNumber || '').replace(/[^0-9]/g, '');
  const isConfigured = cleanNumber.length >= 7;

  const message =
    locale === 'ar'
      ? `مرحبًا PixelTemplates، أود الاستفسار عن القوالب المتاحة وتفاصيل الشراء.`
      : `Hello PixelTemplates, I would like to inquire about available templates and purchase details.`;

  if (!isConfigured) {
    return {
      url: null,
      isConfigured: false,
      message,
    };
  }

  const encodedMessage = encodeURIComponent(message);
  return {
    url: `https://wa.me/${cleanNumber}?text=${encodedMessage}`,
    isConfigured: true,
    message,
  };
}
