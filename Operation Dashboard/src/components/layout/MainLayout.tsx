import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { TopNav } from './TopNav';
import { CommandBar } from '../common/CommandBar';
import { ChatbotWidget } from '../chatbot/ChatbotWidget';
import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/lib/i18n';

export function MainLayout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Classification banner */}
      <div className="no-print bg-yellow-600 text-black text-center text-[11px] font-semibold tracking-wider py-1 uppercase">
        {getTranslation('banner.classification', language)}
      </div>
      <TopNav onSearchOpen={() => setSearchOpen(true)} />
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6">
        <Outlet />
      </main>
      <CommandBar open={searchOpen} onClose={() => setSearchOpen(false)} />
      <ChatbotWidget />
    </div>
  );
}
