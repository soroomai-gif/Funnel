import React, { useState, useMemo, useEffect } from 'react';
import { templates } from '../data/templates';
import { Template } from '../types';
import { TemplateCard } from '../components/TemplateCard';
import { FilterBar } from '../components/FilterBar';
import { useLanguage } from '../context/LanguageContext';
import { SearchX, Sparkles } from 'lucide-react';

interface GalleryViewProps {
  initialCategory?: string;
  onSelectTemplate: (template: Template) => void;
  onOpenPreviewModal: (template: Template) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
  initialCategory,
  onSelectTemplate,
  onOpenPreviewModal,
}) => {
  const { locale, t } = useLanguage();
  const isArabic = locale === 'ar';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [selectedSort, setSelectedSort] = useState('default');

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredTemplates = useMemo(() => {
    let result = [...templates];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Filter by Technology
    if (selectedTech !== 'all') {
      result = result.filter((item) =>
        item.technologies.some((tech) => tech.toLowerCase() === selectedTech.toLowerCase())
      );
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.nameAr.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.descriptionAr.toLowerCase().includes(q) ||
          item.technologies.some((tech) => tech.toLowerCase().includes(q))
      );
    }

    // Sort by price
    if (selectedSort === 'price-asc') {
      result.sort((a, b) => (a.price ?? 99999) - (b.price ?? 99999));
    } else if (selectedSort === 'price-desc') {
      result.sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedTech, selectedSort]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTech('all');
    setSelectedSort('default');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 animate-fadeIn">
      {/* Header */}
      <div className="max-w-2xl mb-8 space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
          {t('nav.gallery')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          {isArabic
            ? 'استكشف تصاميم عصرية جاهزة للتكامل مع كود نظيف ومعاينة تفاعلية.'
            : 'Explore modern, ready-to-deploy templates with clean code and interactive previews.'}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedTech={selectedTech}
        onTechChange={setSelectedTech}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
        onReset={handleResetFilters}
      />

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6 text-xs text-slate-500 font-medium">
        <span>
          {filteredTemplates.length} {t('gallery.results_count')}
        </span>
      </div>

      {/* Template Grid or Empty State */}
      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onSelect={onSelectTemplate}
              onOpenPreviewModal={onOpenPreviewModal}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-sm">
          <div className="w-14 h-14 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
            <SearchX className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-[#0F172A] mb-2">
            {t('gallery.no_results')}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
            {t('gallery.no_results_hint')}
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="px-5 py-2.5 text-xs font-bold bg-[#0F172A] text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {t('filter.clear')}
          </button>
        </div>
      )}
    </div>
  );
};
