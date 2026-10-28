import React from 'react';
import { categories, allTechnologies } from '../data/templates';
import { useLanguage } from '../context/LanguageContext';
import { Search, RotateCcw, SlidersHorizontal } from 'lucide-react';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  selectedTech: string;
  onTechChange: (tech: string) => void;
  selectedSort: string;
  onSortChange: (sort: string) => void;
  onReset: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedTech,
  onTechChange,
  selectedSort,
  onSortChange,
  onReset,
}) => {
  const { locale, t } = useLanguage();
  const isArabic = locale === 'ar';

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'all' ||
    selectedTech !== 'all' ||
    selectedSort !== 'default';

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 sm:p-6 shadow-sm mb-8 space-y-4">
      {/* Top Controls: Search Input & Sort & Tech */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 start-3.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t('filter.search_placeholder')}
            className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-slate-50 focus:bg-white text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#155EEF]/20 focus:border-[#155EEF] transition-all"
          />
        </div>

        {/* Filter Dropdowns: Tech & Sort */}
        <div className="w-full lg:w-auto flex flex-wrap items-center justify-between lg:justify-end gap-3">
          {/* Tech Filter */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedTech}
              onChange={(e) => onTechChange(e.target.value)}
              className="px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-[#E2E8F0] rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#155EEF]/20 cursor-pointer"
            >
              <option value="all">{t('filter.tech_all')}</option>
              {allTechnologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By Price */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
            <label htmlFor="sortSelect" className="text-xs font-semibold whitespace-nowrap text-slate-500">
              {t('filter.sort_label')}
            </label>
            <select
              id="sortSelect"
              value={selectedSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-[#E2E8F0] rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#155EEF]/20 cursor-pointer"
            >
              <option value="default">{t('filter.sort_default')}</option>
              <option value="price-asc">{t('filter.sort_price_low')}</option>
              <option value="price-desc">{t('filter.sort_price_high')}</option>
            </select>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('filter.clear')}</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Horizontal Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onCategoryChange(cat.id)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {isArabic ? cat.nameAr : cat.nameEn}
            </button>
          );
        })}
      </div>
    </div>
  );
};
