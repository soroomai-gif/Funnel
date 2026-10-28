import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { siteConfig } from '../config/site';

interface LanguageContextType {
  locale: Language;
  setLocale: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const translations: Record<string, { ar: string; en: string }> = {
  // Navigation
  'nav.home': { ar: 'الرئيسية', en: 'Home' },
  'nav.gallery': { ar: 'معرض القوالب', en: 'Templates' },
  'nav.about': { ar: 'عن المنصة', en: 'About' },
  'nav.contact': { ar: 'تواصل معنا', en: 'Contact' },

  // Hero
  'hero.tag': { ar: 'معرض قوالب رقمية معتمدة', en: 'Curated Digital Template Showcase' },
  'hero.heading': { ar: 'قوالب احترافية تحوّل أفكارك إلى واقع.', en: 'Templates That Bring Your Ideas to Life.' },
  'hero.subheading': {
    ar: 'اكتشف قوالب مواقع عصرية وجاهزة للاستخدام، تساعدك على إطلاق مشروعك بسرعة وبناء تجربة رقمية احترافية.',
    en: 'Explore modern, ready-to-use website templates designed to help you launch faster and build better digital experiences.'
  },
  'hero.cta': { ar: 'تصفح القوالب', en: 'Explore Templates' },
  'hero.secondary_cta': { ar: 'استفسار عبر واتساب', en: 'Inquire on WhatsApp' },

  // Home sections
  'home.featured_title': { ar: 'قوالب مختارة بعناية', en: 'Featured Templates' },
  'home.featured_subtitle': { ar: 'نماذج وتصاميم مميزة مبنية بأحدث المعايير التقنية', en: 'Top-tier templates built using modern web architecture' },
  'home.view_all': { ar: 'عرض جميع القوالب', en: 'View All Templates' },
  'home.categories_title': { ar: 'تصفح حسب التصنيف', en: 'Browse by Category' },
  'home.recent_title': { ar: 'أحدث الإضافات', en: 'Recently Added' },
  'home.benefits_title': { ar: 'لماذا تختار قوالب PixelTemplates؟', en: 'Why PixelTemplates?' },
  'home.benefits_subtitle': {
    ar: 'نصمم ونجمع قوالب برمجية تمنحك الأفضلية التقنية والسرعة في إطلاق تواجدك الرقمي.',
    en: 'Engineering-first templates designed to fast-track your product launch with clean code.'
  },

  // Benefits items
  'benefit.speed.title': { ar: 'أداء فائق وسريع', en: 'High Performance' },
  'benefit.speed.desc': {
    ar: 'كود نظيف خفيف الوزن يحقق أعلى درجات السرعة ومعدلات الأداء في محركات البحث.',
    en: 'Zero unnecessary bloat. Clean modular CSS and modern JavaScript tailored for speed.'
  },
  'benefit.responsive.title': { ar: 'متجاوب تماماً', en: 'Fluid Responsiveness' },
  'benefit.responsive.desc': {
    ar: 'تجربة تصفح متكاملة ومتوافقة مع جميع مقاسات الشاشات من الهواتف إلى الشاشات العريضة.',
    en: 'Carefully previewed and verified on actual mobile, tablet, and desktop viewports.'
  },
  'benefit.clean.title': { ar: 'كود منظم وموثق', en: 'Clean Architecture' },
  'benefit.clean.desc': {
    ar: 'بنية برمجية معيارية يسهل تخصيصها وتطويرها من قبل أي مطور أو صاحب عمل.',
    en: 'Standardized TypeScript, semantic HTML tags, and clean Tailwind classes for effortless editing.'
  },
  'benefit.support.title': { ar: 'تواصل مباشر وسريع', en: 'Direct Support' },
  'benefit.support.desc': {
    ar: 'استفسارات الشراء والدعم تتم مباشرة عبر واتساب دون إجراءات دفع معقدة أو وسطاء.',
    en: 'Inquiries and handoffs managed swiftly via direct WhatsApp conversation with zero red tape.'
  },

  // WhatsApp Callout Banner
  'banner.title': {
    ar: 'هل تبحث عن قالب محدد أو تخصيص لمشروعك؟',
    en: 'Looking for a specific template or customization?'
  },
  'banner.desc': {
    ar: 'تواصل معنا مباشرة عبر محادثة واتساب لمناقشة متطلباتك أو طلب قالب مخصص لمجال عملك.',
    en: 'Reach out directly on WhatsApp to discuss your requirements or request a tailored solution.'
  },
  'banner.btn': { ar: 'تواصل عبر واتساب الآن', en: 'Chat on WhatsApp Now' },

  // Buttons & Labels
  'btn.preview': { ar: 'معاينة مباشرة', en: 'Live Preview' },
  'btn.inquire': { ar: 'استفسر عبر واتساب', en: 'Inquire via WhatsApp' },
  'btn.view_details': { ar: 'التفاصيل والمواصفات', en: 'View Details' },

  // Filter Bar
  'filter.search_placeholder': { ar: 'ابحث باسم القالب أو التقنية (مثل React, Tailwind)...', en: 'Search by template name or tech (e.g. React, Tailwind)...' },
  'filter.category_all': { ar: 'جميع القوالب', en: 'All' },
  'filter.sort_label': { ar: 'ترتيب حسب:', en: 'Sort by:' },
  'filter.sort_default': { ar: 'الافتراضي', en: 'Default' },
  'filter.sort_price_low': { ar: 'السعر: من الأقل للأعلى', en: 'Price: Low to High' },
  'filter.sort_price_high': { ar: 'السعر: من الأعلى للأقل', en: 'Price: High to Low' },
  'filter.tech_all': { ar: 'جميع التقنيات', en: 'All Technologies' },
  'filter.clear': { ar: 'إعادة ضبط الفلاتر', en: 'Reset Filters' },
  'gallery.results_count': { ar: 'القوالب المتاحة', en: 'templates found' },
  'gallery.no_results': { ar: 'لم يتم العثور على قوالب مطابقة لمعايير البحث.', en: 'No templates found matching your search criteria.' },
  'gallery.no_results_hint': { ar: 'جرّب تعديل مصطلح البحث أو اختيار تصنيف آخر.', en: 'Try adjusting your search keyword or clearing active filters.' },

  // Details
  'details.back': { ar: 'العودة لمعرض القوالب', en: 'Back to Template Gallery' },
  'details.overview': { ar: 'نظرة عامة', en: 'Overview' },
  'details.features': { ar: 'مزايا القالب الرئيسية', en: 'Key Features' },
  'details.tech': { ar: 'التقنيات المستخدمة', en: 'Tech Stack' },
  'details.responsive': { ar: 'التوافقية وتجربة الاستخدام', en: 'Responsiveness & UI Standards' },
  'details.related': { ar: 'قوالب مشابهة قد تهمك', en: 'Related Templates' },
  'details.demo_notice': {
    ar: 'تنبيه: هذا رابط معاينة تجريبي حي. يمكنك استبداله برابط مشروعك الحقيقي في ملف src/data/templates.ts.',
    en: 'Notice: This is a live demonstration preview link. Replace with your actual project URL in src/data/templates.ts.'
  },
  'details.direct_inquiry_badge': {
    ar: 'شراء مباشر عبر واتساب بدون وسيط',
    en: 'Direct WhatsApp Purchase — No Intermediaries'
  },

  // WhatsApp Alert & Config
  'whatsapp.unconfigured': {
    ar: 'تنبيه للمشرف: لم يتم تعيين رقم واتساب في ملف الإعدادات src/config/site.ts بعد. الرجاء إضافة رقمك الدولي بدون إشارة + أو مسافات.',
    en: 'Admin Notice: No WhatsApp number configured in src/config/site.ts yet. Please add your international phone number without + or spaces.'
  },
  'whatsapp.unconfigured_title': {
    ar: 'رقم واتساب غير محدد بعد',
    en: 'WhatsApp Number Not Configured Yet'
  },

  // About Page
  'about.badge': { ar: 'هويتنا ورؤيتنا', en: 'Identity & Vision' },
  'about.title': { ar: 'عن PixelTemplates', en: 'About PixelTemplates' },
  'about.p1': {
    ar: 'منصة PixelTemplates هي وجهة رقمية منتقاة بعناية لعرض واقتناء قوالب مواقع حديثة مبنية وفق أعلى المعايير الهندسية والتصميمية. هدفنا تمكين رواد الأعمال والشركات الناشئة والمطورين من إطلاق مشاريعهم الرقمية بسرعة فائقة مع واجهات احترافية تثبت جدارتهم في السوق.',
    en: 'PixelTemplates is a curated digital showcase for modern, production-grade website templates crafted according to world-class engineering and UI standards. Our mission is to empower founders, startups, and developers to launch digital products with speed, confidence, and aesthetic excellence.'
  },
  'about.p2': {
    ar: 'نؤمن بالبساطة والشفافية: نوفر معاينات حية واقعية لكل قالب، ونتيح التواصل وطلب الشراء مباشرة عبر تطبيق واتساب لتقديم خدمة مخصصة ومريحة وسريعة بدون بوابات دفع معقدة أو حسابات مستخدمين غير ضرورية.',
    en: 'We believe in clarity and direct communication: each template features live previews and seamless WhatsApp inquiries for personalized handoffs, avoiding unnecessary checkout carts or cumbersome account signups.'
  },
  'about.standards_title': { ar: 'معايير الجودة في قوالبنا', en: 'Our Quality Standards' },
  'about.standard1': { ar: 'كود نقي بدون حشو زائد (Zero Bloat)', en: 'Zero Bloat & Clean Lightweight Codebases' },
  'about.standard2': { ar: 'معاينة حية وتفاعلية لكل قالب', en: 'Full Interactive Demo Previews for Every Template' },
  'about.standard3': { ar: 'تواصل شخصي وسريع عبر واتساب', en: 'Direct, Frictionless WhatsApp Inquiries' },
  'about.standard4': { ar: 'توافق كامل وشامل مع شاشات الهواتف والأجهزة اللوحية', en: 'Fluid Responsiveness Across All Viewports' },

  // Contact Page
  'contact.badge': { ar: 'قنوات الاتصال المباشرة', en: 'Direct Channels' },
  'contact.title': { ar: 'تواصل معنا', en: 'Get in Touch' },
  'contact.subtitle': {
    ar: 'يسعدنا الرد على جميع استفساراتك حول القوالب، متطلبات التخصيص، وإجراءات الاستلام.',
    en: 'We are here to answer your questions regarding templates, custom requirements, and file delivery.'
  },
  'contact.whatsapp_card_title': { ar: 'محادثة واتساب الفورية', en: 'WhatsApp Direct Chat' },
  'contact.whatsapp_card_desc': {
    ar: 'القناة المعتمدة للاستفسار عن القوالب، تأكيد الشراء، واستلام الملفات البرمجية مباشرة.',
    en: 'Our primary channel for template inquiries, purchase confirmations, and direct file delivery.'
  },
  'contact.email_card_title': { ar: 'البريد الإلكتروني', en: 'Official Email' },
  'contact.email_card_desc': {
    ar: 'للمراسلات الرسمية والشراكات أو طلبات التطوير المخصصة للمؤسسات.',
    en: 'For enterprise inquiries, custom bespoke development, and general partnerships.'
  },
  'contact.response_time': {
    ar: 'زمن الرد المعتاد: خلال دقائق أثناء ساعات العمل',
    en: 'Average response: Within minutes during business hours'
  },
  'contact.handoff_guarantee': {
    ar: 'تسليم سريع للملفات البرمجية فور إتمام الشراء',
    en: 'Instant codebase handoff upon purchase confirmation'
  },

  // Footer
  'footer.description': {
    ar: 'وجهة حديثة وموثوقة للحصول على قوالب مواقع احترافية جاهزة للإطلاق السريع والتواجد الرقمي المتميز.',
    en: 'A modern, trusted destination for professional website templates designed for rapid launch and superior digital presence.'
  },
  'footer.quick_links': { ar: 'روابط الموقع', en: 'Quick Links' },
  'footer.inquiries': { ar: 'الاستفسارات والشراء', en: 'Inquiries & Purchase' },
  'footer.inquiries_note': {
    ar: 'تتم جميع طلبات الشراء والاستفسار مباشرة عبر محادثة واتساب لضمان تجربة شخصية وسريعة.',
    en: 'All template inquiries and purchases are handled directly via WhatsApp for tailored service.'
  },
  'footer.rights': { ar: 'جميع الحقوق محفوظة.', en: 'All rights reserved.' },
  'footer.tagline': { ar: 'قوالب احترافية. لتجارب رقمية أفضل.', en: 'Professional Templates. Better Digital Experiences.' }
};

const LanguageContext = createContext<LanguageContextType>(null!);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Language>(siteConfig.defaultLocale);

  useEffect(() => {
    const saved = localStorage.getItem('pixeltemplates_lang') as Language;
    if (saved === 'ar' || saved === 'en') {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (lang: Language) => {
    setLocaleState(lang);
    localStorage.setItem('pixeltemplates_lang', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    }
  }, [locale]);

  const t = (key: string): string => {
    if (translations[key] && translations[key][locale]) {
      return translations[key][locale];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, isRTL: locale === 'ar', t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
