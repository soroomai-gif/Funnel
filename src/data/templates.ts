import { Template, CategoryItem } from '../types';

export const categories: CategoryItem[] = [
  { id: 'all', nameEn: 'All Templates', nameAr: 'جميع القوالب' },
  { id: 'landing-pages', nameEn: 'Landing Pages', nameAr: 'صفحات الهبوط' },
  { id: 'saas-websites', nameEn: 'SaaS Websites', nameAr: 'برمجيات و SaaS' },
  { id: 'business-websites', nameEn: 'Business Websites', nameAr: 'شركات وأعمال' },
  { id: 'ecommerce-templates', nameEn: 'E-commerce Templates', nameAr: 'متاجر إلكترونية' },
  { id: 'personal-portfolios', nameEn: 'Personal Portfolios', nameAr: 'معارض أعمال شخصية' },
  { id: 'agency-websites', nameEn: 'Agency Websites', nameAr: 'وكالات رقمية' },
  { id: 'blog-templates', nameEn: 'Blog Templates', nameAr: 'مدونات ومجلات' },
];

export const allTechnologies = [
  'Next.js',
  'React',
  'Tailwind CSS',
  'TypeScript',
  'Framer Motion',
  'HTML5',
  'Alpine.js',
  'Vue.js',
];

export const templates: Template[] = [
  {
    id: 'tpl-01',
    slug: 'apex-saas-cloud',
    name: 'Apex SaaS & Cloud Platform',
    nameAr: 'آبكس للبرمجيات والحلول السحابية',
    description: 'High-conversion landing page and app showcase tailored for enterprise software, dev tools, and AI startups.',
    descriptionAr: 'صفحة هبوط فائقة التحويل واستعراض تطبيقات مخصصة للحلول السحابية، أدوات التطوير، وشركات الذكاء الاصطناعي.',
    category: 'saas-websites',
    categoryNameEn: 'SaaS Websites',
    categoryNameAr: 'برمجيات و SaaS',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    price: 49,
    currency: 'USD',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
    ],
    previewUrl: 'https://demo-preview.pixeltemplates.example/apex-saas',
    isDemoPreviewUrl: true,
    featured: true,
    features: [
      'Interactive pricing tiers with monthly / annual switcher',
      'Feature comparison matrix with responsive collapse',
      'Pre-built Light and Dark theme modes',
      'Strict Lighthouse 98+ performance architecture',
      'Ready OpenGraph and SEO schema metadata'
    ],
    featuresAr: [
      'حاسبة أسعار تفاعلية مع تبديل الدفع الشهري والسنوي',
      'جدول مقارنة متقدم للمزايا مع توافق تام للأجهزة الذكية',
      'دعم كامل للوضعين الداكن والفاتح',
      'بنية برمجية معتمدة تحقق 98+ في مؤشرات أداء Lighthouse',
      'إعدادات SEO كاملة للظهور المميز في محركات البحث ومواقع التواصل'
    ],
    responsiveNotes: 'Fluid responsiveness tested from 360px mobile viewports up to 4K desktop screens.',
    responsiveNotesAr: 'تصميم متجاوب وسلس تم فحصه بدقة من شاشات الهواتف 360px وحتى شاشات 4K فائقة الاتساع.',
    status: 'active'
  },
  {
    id: 'tpl-02',
    slug: 'strata-advisory-corporate',
    name: 'Strata Corporate Advisory',
    nameAr: 'ستراتا للاستشارات والشركات',
    description: 'Refined, authoritative digital presence designed for financial consultancies, legal firms, and executive advisors.',
    descriptionAr: 'واجهة رقمية متزنة وموثوقة مصممة لبيوت الاستشارات المالية، مكاتب المحاماة، ومستشاري الأعمال والإدارة.',
    category: 'business-websites',
    categoryNameEn: 'Business Websites',
    categoryNameAr: 'شركات وأعمال',
    technologies: ['HTML5', 'Tailwind CSS', 'TypeScript'],
    price: 39,
    currency: 'USD',
    previewImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    previewUrl: 'https://demo-preview.pixeltemplates.example/strata-corporate',
    isDemoPreviewUrl: true,
    featured: true,
    features: [
      'Professional service cards with subtle micro-interactions',
      'Leadership and partners profile grid with modal bio view',
      'Consultation inquiry form trigger with validation states',
      'Lightweight payload under 40KB for instant initial paint'
    ],
    featuresAr: [
      'بطاقات عرض الخدمات المهنية مع تأثيرات حركية خفيفة وراقية',
      'شبكة مخصصة لفريق الإدارة والشركاء مع نوافذ للسيرة الذاتية',
      'نموذج طلب استشارة مجهز بحالات التحقق المباشر',
      'حجم خفيف جداً يقل عن 40 كيلوبايت لسرعة تحميل فائقة'
    ],
    responsiveNotes: 'Clean modular layout with tablet split-views and mobile thumb-friendly controls.',
    responsiveNotesAr: 'تنسيق معياري نقي مع توزيع مدروس للأجهزة اللوحية ومراعاة راحة التصفح باليد الواحدة على الهواتف.',
    status: 'active'
  },
  {
    id: 'tpl-03',
    slug: 'aura-creative-studio',
    name: 'Aura Creative Studio & Agency',
    nameAr: 'أورا للاستوديوهات والوكالات الإبداعية',
    description: 'Minimalist, typography-forward website designed for branding studios, art directors, and media agencies.',
    descriptionAr: 'موقع بتصميم تجريدي وتركيز طباعي أنيق مخصص لاستوديوهات الهوية البصرية، المخرجين الفنيين، والوكالات الرقمية.',
    category: 'agency-websites',
    categoryNameEn: 'Agency Websites',
    categoryNameAr: 'وكالات رقمية',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    price: 45,
    currency: 'USD',
    previewImage: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
    ],
    previewUrl: 'https://demo-preview.pixeltemplates.example/aura-studio',
    isDemoPreviewUrl: true,
    featured: true,
    features: [
      'Editorial case study presentation layout',
      'Fluid kinetic transitions and clean typography scales',
      'Dynamic project filter by discipline (Branding, Motion, 3D)',
      'Optimized image grid with zero cumulative layout shift'
    ],
    featuresAr: [
      'تنسيق تحريري متقن لعرض دراسات الحالة وقصص نجاح المشاريع',
      'انتقالات حركية سلسة وتدرج طباعي متناسق مع المعايير العالمية',
      'تصفية فورية للمشاريع حسب التخصص (هوية بصرية، حركة، ثلاثي أبعاد)',
      'شبكة صور محسنة تمنع أي إزاحة تخطيط غير مرغوبة (Zero CLS)'
    ],
    responsiveNotes: 'Adaptive typography sizing and fluid image layouts on high-density mobile screens.',
    responsiveNotesAr: 'موازنة ذكية لأحجام الخطوط وعرض الصور على شاشات الهواتف عالية الدقة.',
    status: 'active'
  },
  {
    id: 'tpl-04',
    slug: 'zenith-developer-portfolio',
    name: 'Zenith Personal Portfolio',
    nameAr: 'زينيث لمعارض الأعمال الشخصية',
    description: 'Clean, distraction-free visual portfolio for software engineers, product designers, and independent consultants.',
    descriptionAr: 'معرض أعمال شخصي هادئ وخالٍ من التشتت مخصص للمهندسين البرمجيين، مصممي المنتجات، والخبراء المستقلين.',
    category: 'personal-portfolios',
    categoryNameEn: 'Personal Portfolios',
    categoryNameAr: 'معارض أعمال شخصية',
    technologies: ['HTML5', 'Tailwind CSS', 'TypeScript'],
    price: 29,
    currency: 'USD',
    previewImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80'
    ],
    previewUrl: 'https://demo-preview.pixeltemplates.example/zenith-portfolio',
    isDemoPreviewUrl: true,
    featured: false,
    features: [
      'Structured project narrative sections with metrics callouts',
      'Interactive tech stack and competencies grid',
      'Downloadable resume / CV button and contact drawer',
      'Zero external build dependencies for ultimate portability'
    ],
    featuresAr: [
      'أقسام سردية لعرض تفاصيل المشاريع مع إبراز المؤشرات والأرقام',
      'شبكة تفاعلية للمهارات والتقنيات البرمجية والأدوات',
      'موضع جاهز لزر تحميل السيرة الذاتية (CV) وقنوات التواصل',
      'كود نقي بدون مكتبات معقدة لسهولة نقله واستضافته في أي مكان'
    ],
    responsiveNotes: 'Tested across mobile browsers (Safari iOS and Chrome Android).',
    responsiveNotesAr: 'تم اختباره بدقة عبر متصفحات الهواتف المحمولة بما فيها Safari و Chrome.',
    status: 'active'
  },
  {
    id: 'tpl-05',
    slug: 'nordic-artisanal-storefront',
    name: 'Nordic Artisanal Storefront',
    nameAr: 'نورديك للمتاجر والمنتجات المتخصصة',
    description: 'Elegantly proportioned catalog and product display for boutique brands, artisans, and flagship consumer goods.',
    descriptionAr: 'كتالوج واستعراض منتجات راقي التنسيق للمتاجر المتخصصة، المصنعين المستقلين، والعلامات التجارية الفاخرة.',
    category: 'ecommerce-templates',
    categoryNameEn: 'E-commerce Templates',
    categoryNameAr: 'متاجر إلكترونية',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    price: 55,
    currency: 'USD',
    previewImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80'
    ],
    previewUrl: 'https://demo-preview.pixeltemplates.example/nordic-store',
    isDemoPreviewUrl: true,
    featured: false,
    features: [
      'Lookbook photographic layouts and editorial zoom modals',
      'Product variant selection chips and stock status badges',
      'Direct WhatsApp order inquiry generator for single products',
      'Mobile bottom action bar for fluid thumb browsing'
    ],
    featuresAr: [
      'تنسيقات صور مميزة للكتالوج مع نوافذ تكبير واستعراض فوتوغرافي',
      'محددات جاهزة لخيارات المنتجات (المقاسات، الألوان) وحالة التوفر',
      'زر استفسار وطلب فوري عبر واتساب لكل منتج',
      'شريط أزرار سفلي مريح للطلب السريع عبر الهواتف'
    ],
    responsiveNotes: 'Optimized touch swipe carousels and thumb-friendly ordering anchors.',
    responsiveNotesAr: 'أشرطة تمرير محسنة للسحب باللمس وأزرار شراء سهلة الوصول بالإبهام.',
    status: 'active'
  },
  {
    id: 'tpl-06',
    slug: 'clarity-editorial-journal',
    name: 'Clarity Editorial & Journal',
    nameAr: 'كلاريتي للمجلات والمحتوى التحريري',
    description: 'High-legibility publication layout crafted for newsletters, tech commentators, and long-form analytical writers.',
    descriptionAr: 'قالب صحفي وتحريري عالي المقروئية مصمم للنشرات الإخبارية، المحللين التقنيين، وكُتّاب المقالات المعمقة.',
    category: 'blog-templates',
    categoryNameEn: 'Blog Templates',
    categoryNameAr: 'مدونات ومجلات',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    price: 35,
    currency: 'USD',
    previewImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80'
    ],
    previewUrl: 'https://demo-preview.pixeltemplates.example/clarity-journal',
    isDemoPreviewUrl: true,
    featured: false,
    features: [
      'Calibrated typographic line lengths for fatigue-free reading',
      'Estimated reading time and thematic category tags',
      'Email newsletter subscription banner and social share hooks',
      'Semantic article markup with rich JSON-LD schema ready'
    ],
    featuresAr: [
      'أطوال أسطر وتباعدات طباعية مدروسة لقراءة مريحة للمقالات الطويلة',
      'احتساب تلقائي لزمن القراءة المقدر وتصنيفات ملونة للمواضيع',
      'واجهة أنيقة للاشتراك في النشرة البريدية ومشاركة الروابط',
      'وسوم مقالات دلالية مع جاهزية كاملة لبيانات Schema المنظمة'
    ],
    responsiveNotes: 'Superb readability across compact 4-inch screens up to ultra-wide desktop monitors.',
    responsiveNotesAr: 'مقروئية استثنائية من أصغر شاشات الهواتف وحتى شاشات العرض المكتبية الضخمة.',
    status: 'active'
  },
  {
    id: 'tpl-07',
    slug: 'lumina-app-landing',
    name: 'Lumina Mobile App Landing',
    nameAr: 'لومينا لصفحات هبوط التطبيقات',
    description: 'Sleek conversion-driven single-page landing showcasing mobile iOS and Android apps with download prompts.',
    descriptionAr: 'صفحة هبوط تسويقية أنيقة واستثنائية لعرض تطبيقات الهواتف الذكية مع أزرار التحميل من المتاجر.',
    category: 'landing-pages',
    categoryNameEn: 'Landing Pages',
    categoryNameAr: 'صفحات الهبوط',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    price: 39,
    currency: 'USD',
    previewImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80'
    ],
    previewUrl: 'https://demo-preview.pixeltemplates.example/lumina-app',
    isDemoPreviewUrl: true,
    featured: true,
    features: [
      'App Store and Google Play badge integration slots',
      'Realistic floating device mockup perspectives',
      'Feature highlight carousel with smooth auto-progression',
      'Built-in FAQ accordion and security highlights'
    ],
    featuresAr: [
      'مواضع جاهزة لشارات التحميل من متجري App Store و Google Play',
      'مجسمات واقعية وثلاثية الأبعاد لعرض واجهات تطبيقك على الهواتف',
      'شريط استعراض تفاعلي لأبرز المزايا والوظائف',
      'قسم أسئلة شائعة مدمج ومجهز وقابل للتمدد بسلاسة'
    ],
    responsiveNotes: 'Optimized touch navigation with swift mobile interaction speeds.',
    responsiveNotesAr: 'تنقل تفاعلي سلس للغاية مع استجابة فائقة السرعة للمس على الهواتف.',
    status: 'active'
  },
  {
    id: 'tpl-08',
    slug: 'forge-b2b-industrial',
    name: 'Forge Industrial & Logistics',
    nameAr: 'فورج للخدمات اللوجستية والصناعية',
    description: 'Robust, confidence-inspiring website for manufacturing firms, supply chain providers, and logistics operations.',
    descriptionAr: 'موقع مؤسسي رصين يبعث على الثقة مخصص للمصانع، شركات سلاسل الإمداد، والخدمات اللوجستية المتطورة.',
    category: 'business-websites',
    categoryNameEn: 'Business Websites',
    categoryNameAr: 'شركات وأعمال',
    technologies: ['HTML5', 'Tailwind CSS', 'Alpine.js'],
    price: 42,
    currency: 'USD',
    previewImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
    ],
    previewUrl: 'https://demo-preview.pixeltemplates.example/forge-logistics',
    isDemoPreviewUrl: true,
    featured: false,
    features: [
      'Fleet & capability grid with interactive specs table',
      'Quote calculation trigger for commercial inquiries',
      'Safety and compliance certifications showcase',
      'Comprehensive contact routing with WhatsApp fallback'
    ],
    featuresAr: [
      'شبكة مخصصة للأسطول والقدرات مع جدول مواصفات تفاعلي',
      'نموذج طلب عروض أسعار تجارية للشركات والجهات الكبرى',
      'استعراض شهادات الجودة والاعتمادات ومعايير السلامة',
      'توجيه استفسارات متعدد القنوات مع تكامل فوري لتطبيق واتساب'
    ],
    responsiveNotes: 'Grid reflow engineered for corporate laptops, tablets, and rugged handsets.',
    responsiveNotesAr: 'شبكة إعادة توزيع ذكية تتكيف مع الحواسيب المحمولة والأجهزة اللوحية الميدانية.',
    status: 'active'
  }
];
