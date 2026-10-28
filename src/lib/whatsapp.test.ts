import test from 'node:test';
import assert from 'node:assert/strict';
import { buildTemplateWhatsAppLink, buildGeneralWhatsAppLink } from './whatsapp';
import { Template } from '../types';

const sampleTemplate: Template = {
  id: 'tpl-test',
  slug: 'test-template',
  name: 'Nexus Cloud SaaS',
  nameAr: 'نيكسوس كلاود ساس',
  description: 'Modern SaaS platform template',
  descriptionAr: 'قالب منصة ساس حديثة',
  category: 'saas-websites',
  categoryNameEn: 'SaaS Websites',
  categoryNameAr: 'برمجيات و SaaS',
  technologies: ['React', 'Tailwind CSS'],
  price: 49,
  currency: 'USD',
  previewImage: 'https://example.com/preview.jpg',
  galleryImages: [],
  previewUrl: 'https://preview.example.com/nexus',
  isDemoPreviewUrl: true,
  featured: true,
  features: ['Responsive', 'Fast'],
  featuresAr: ['متجاوب', 'سريع'],
  responsiveNotes: 'Fluid',
  responsiveNotesAr: 'متجاوب بالكامل',
  status: 'active'
};

test('buildTemplateWhatsAppLink returns unconfigured when phone number is missing', () => {
  const result = buildTemplateWhatsAppLink(sampleTemplate, 'en', '');
  assert.equal(result.isConfigured, false);
  assert.equal(result.url, null);
  assert.match(result.message, /Nexus Cloud SaaS/);
  assert.match(result.message, /https:\/\/preview\.example\.com\/nexus/);
});

test('buildTemplateWhatsAppLink encodes Arabic message correctly with real phone number', () => {
  const result = buildTemplateWhatsAppLink(sampleTemplate, 'ar', '966501234567');
  assert.equal(result.isConfigured, true);
  assert.ok(result.url !== null);
  assert.ok(result.url.startsWith('https://wa.me/966501234567?text='));
  assert.match(result.message, /نيكسوس كلاود ساس/);
  assert.match(result.message, /مرحبًا PixelTemplates/);
});

test('buildTemplateWhatsAppLink encodes English message accurately with number sanitization', () => {
  const result = buildTemplateWhatsAppLink(sampleTemplate, 'en', '+1 (555) 019-2834');
  assert.equal(result.isConfigured, true);
  assert.ok(result.url !== null);
  assert.ok(result.url.startsWith('https://wa.me/15550192834?text='));
  assert.match(result.message, /Hello PixelTemplates, I am interested in purchasing the \[Nexus Cloud SaaS\] template/);
});

test('buildGeneralWhatsAppLink generates correct general inquiry text', () => {
  const resultEn = buildGeneralWhatsAppLink('en', '966500000000');
  assert.equal(resultEn.isConfigured, true);
  assert.match(resultEn.message, /inquire about available templates/);

  const resultAr = buildGeneralWhatsAppLink('ar', '966500000000');
  assert.equal(resultAr.isConfigured, true);
  assert.match(resultAr.message, /أود الاستفسار عن القوالب المتاحة/);
});
