import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './pages/HomeView';
import { GalleryView } from './pages/GalleryView';
import { AboutView } from './pages/AboutView';
import { ContactView } from './pages/ContactView';
import { TemplateDetailView } from './components/TemplateDetailView';
import { LivePreviewModal } from './components/LivePreviewModal';
import { templates } from './data/templates';
import { Template } from './types';

function MainApp() {
  const { locale, t } = useLanguage();
  const [currentView, setCurrentView] = useState<'home' | 'gallery' | 'about' | 'contact' | 'detail'>('home');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [previewModalTemplate, setPreviewModalTemplate] = useState<Template | null>(null);
  const [galleryCategory, setGalleryCategory] = useState<string>('all');

  // Sync state with URL hash for accessible bookmarkable navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('template/')) {
        const slug = hash.replace('template/', '');
        const found = templates.find((t) => t.slug === slug);
        if (found) {
          setSelectedTemplate(found);
          setCurrentView('detail');
          return;
        }
      }

      if (hash.startsWith('gallery')) {
        const params = new URLSearchParams(hash.split('?')[1] || '');
        const cat = params.get('category');
        if (cat) setGalleryCategory(cat);
        setCurrentView('gallery');
        return;
      }

      if (hash === 'about') {
        setCurrentView('about');
        return;
      }

      if (hash === 'contact') {
        setCurrentView('contact');
        return;
      }

      setCurrentView('home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: string, params?: Record<string, string>) => {
    if (view === 'home') {
      window.location.hash = '';
      setCurrentView('home');
    } else if (view === 'gallery') {
      const cat = params?.category ? `?category=${params.category}` : '';
      if (params?.category) setGalleryCategory(params.category);
      window.location.hash = `gallery${cat}`;
      setCurrentView('gallery');
    } else if (view === 'about') {
      window.location.hash = 'about';
      setCurrentView('about');
    } else if (view === 'contact') {
      window.location.hash = 'contact';
      setCurrentView('contact');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setCurrentView('detail');
    window.location.hash = `template/${template.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToGallery = () => {
    setCurrentView('gallery');
    window.location.hash = 'gallery';
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      <Header currentView={currentView} onNavigate={navigateTo} />

      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={navigateTo}
            onSelectTemplate={handleSelectTemplate}
            onOpenPreviewModal={(tpl) => setPreviewModalTemplate(tpl)}
          />
        )}

        {currentView === 'gallery' && (
          <GalleryView
            initialCategory={galleryCategory}
            onSelectTemplate={handleSelectTemplate}
            onOpenPreviewModal={(tpl) => setPreviewModalTemplate(tpl)}
          />
        )}

        {currentView === 'detail' && selectedTemplate && (
          <TemplateDetailView
            template={selectedTemplate}
            allTemplates={templates}
            onBack={handleBackToGallery}
            onSelectTemplate={handleSelectTemplate}
            onOpenPreviewModal={(tpl) => setPreviewModalTemplate(tpl)}
          />
        )}

        {currentView === 'about' && <AboutView onNavigate={navigateTo} />}

        {currentView === 'contact' && <ContactView />}
      </main>

      {/* Live Preview Modal Overlay */}
      <LivePreviewModal
        template={previewModalTemplate}
        onClose={() => setPreviewModalTemplate(null)}
      />

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
