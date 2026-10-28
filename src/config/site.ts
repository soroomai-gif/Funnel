export interface SiteConfig {
  name: string;
  domain: string;
  supportEmail: string;
  whatsappNumber: string; // International format without '+' or spaces (e.g. '966500000000'). Keep empty until configured by owner.
  defaultLocale: 'ar' | 'en';
}

export const siteConfig: SiteConfig = {
  name: "PixelTemplates",
  domain: "https://pixeltemplates.example.com",
  supportEmail: "contact@pixeltemplates.example.com",
  // Enter your real international phone number here (e.g., "966512345678").
  // Left empty by default so it displays an honest fallback rather than an invented phone number.
  whatsappNumber: "",
  defaultLocale: "ar",
};
