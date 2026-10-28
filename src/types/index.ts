export type TemplateCategory =
  | 'landing-pages'
  | 'saas-websites'
  | 'business-websites'
  | 'ecommerce-templates'
  | 'personal-portfolios'
  | 'agency-websites'
  | 'blog-templates';

export interface CategoryItem {
  id: string;
  nameEn: string;
  nameAr: string;
}

export interface Template {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  category: TemplateCategory;
  categoryNameEn: string;
  categoryNameAr: string;
  technologies: string[];
  price: number | null;
  currency: string;
  previewImage: string;
  galleryImages: string[];
  previewUrl: string;
  isDemoPreviewUrl: boolean;
  featured: boolean;
  features: string[];
  featuresAr: string[];
  responsiveNotes: string;
  responsiveNotesAr: string;
  status: 'active' | 'archived';
}

export type Language = 'ar' | 'en';
