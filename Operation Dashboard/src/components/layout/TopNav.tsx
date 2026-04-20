import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Search, Menu, X, Languages } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/lib/i18n';

export function TopNav({ onSearchOpen }: { onSearchOpen: () => void }) {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = (key: string) => getTranslation(key, language);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/knowledge-base', label: t('nav.knowledgeBase') },
    { path: '/sops', label: t('nav.sops') },
    { path: '/scenarios', label: t('nav.scenarios') },
    { path: '/tools', label: t('nav.tools') },
    { path: '/training', label: t('nav.training') },
  ];

  return (
    <nav className="no-print sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-950/95 backdrop-blur">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center rounded-md bg-gray-900 dark:bg-transparent px-2 py-1.5">
              <img src="./mcc-logo.svg" alt="MCC · Monitoring and Control Center" className="h-6 w-auto" />
            </span>
            <div className="hidden sm:block">
              <div className="text-sm font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {language === 'ar' ? 'عمليات MCC VR' : 'MCC VR Operations'}
              </div>
              <div className="text-[10px] text-gray-500 dark:text-gray-400 -mt-0.5 tracking-wider uppercase">
                {language === 'ar' ? 'مركز المعرفة' : 'Knowledge Center'}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => {
              const isActive = item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent/10 text-accent'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            {/* Search button */}
            <button
              onClick={onSearchOpen}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-400 dark:hover:border-gray-500 text-sm transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">{t('nav.search')}</span>
              <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[10px] font-mono text-gray-500">
                Ctrl K
              </kbd>
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors text-sm font-medium"
              aria-label="Toggle language"
              title={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
            >
              <Languages className="w-4 h-4" />
              <span className="text-xs">{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-800 text-gray-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-800 mt-2 pt-3">
            <div className="flex flex-col gap-1">
              {navItems.map(item => {
                const isActive = item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? 'bg-accent/10 text-accent' : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
