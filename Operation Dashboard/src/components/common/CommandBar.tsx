import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, Wrench, Layout, X } from 'lucide-react';
import { searchAll } from '@/lib/search';
import { useLanguage } from '@/hooks/useLanguage';

const typeIcons = {
  document: FileText,
  page: Layout,
  tool: Wrench,
};

const typeLabelsEn = { document: 'Doc', page: 'Page', tool: 'Tool' };
const typeLabelsAr = { document: 'وثيقة', page: 'صفحة', tool: 'أداة' };

export function CommandBar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { language } = useLanguage();

  const results = query.trim() ? searchAll(query).slice(0, 10) : [];
  const tl = language === 'ar' ? typeLabelsAr : typeLabelsEn;

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-xl mx-4 bg-gray-900 dark:bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 border-b border-gray-700">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={language === 'ar' ? 'ابحث في الوثائق والصفحات والأدوات...' : 'Search docs, pages, tools...'}
            className="flex-1 py-4 bg-transparent text-gray-100 placeholder-gray-500 outline-none text-base"
          />
          <button onClick={onClose} className="p-1 hover:bg-gray-800 rounded">
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {results.length > 0 && (
          <div className="max-h-80 overflow-y-auto py-2">
            {results.map(({ item }) => {
              const Icon = typeIcons[item.type];
              const title = language === 'ar' && item.titleAr ? item.titleAr : item.title;
              const summary = language === 'ar' && item.summaryAr ? item.summaryAr : item.summary;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(item.path);
                    onClose();
                  }}
                  className="w-full flex items-start gap-3 px-4 py-3 hover:bg-gray-800 transition-colors text-left"
                >
                  <Icon className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-gray-200 truncate">{title}</div>
                    <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">{summary}</div>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 uppercase shrink-0 ml-auto">
                    {tl[item.type]}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {query.trim() && results.length === 0 && (
          <div className="py-8 text-center text-gray-500 text-sm">
            {language === 'ar' ? `لا توجد نتائج لـ "${query}"` : `No results for "${query}"`}
          </div>
        )}

        {!query.trim() && (
          <div className="py-6 text-center text-gray-500 text-sm">
            {language === 'ar' ? 'ابحث في جميع الوثائق والصفحات والأدوات' : 'Search across all docs, pages, and tools'}
          </div>
        )}
      </div>
    </div>
  );
}
