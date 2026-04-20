import { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { pick } from '@/lib/t';
import { glossaryTerms } from '@/data/glossary';

export function Glossary() {
  const [search, setSearch] = useState('');
  const { language } = useLanguage();

  const filtered = search.trim()
    ? glossaryTerms.filter(t =>
        pick(t.term, language).toLowerCase().includes(search.toLowerCase()) ||
        pick(t.definition, language).toLowerCase().includes(search.toLowerCase())
      )
    : glossaryTerms;

  const categories = Array.from(new Set(filtered.map(t => pick(t.category, language)))).sort();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">
          {language === 'ar' ? 'المصطلحات' : 'Glossary'}
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          {language === 'ar'
            ? `تعريفات سريعة للمصطلحات المستخدمة في النظام (${glossaryTerms.length} مصطلح)`
            : `Quick definitions for terms you'll see around the system (${glossaryTerms.length} terms)`
          }
        </p>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={language === 'ar' ? 'ابحث عن مصطلح...' : 'Search terms...'}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-accent text-sm"
        />
      </div>

      {categories.map(cat => (
        <div key={cat} className="mb-6">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3 h-3" />
            {cat}
          </h2>
          <div className="space-y-1">
            {filtered.filter(t => pick(t.category, language) === cat).map(t => {
              const termText = pick(t.term, language);
              const anchor = termText.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
              return (
                <div key={t.term.en} id={anchor} className="p-3 rounded-lg bg-gray-900 border border-gray-700 scroll-mt-24 target:ring-2 target:ring-accent/50 glossary-highlight-target">
                  <dt className="text-sm font-semibold text-accent">{termText}</dt>
                  <dd className="text-xs text-gray-400 mt-1">{pick(t.definition, language)}</dd>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div className="text-center py-8 text-gray-500 text-sm">
          {language === 'ar' ? `لا توجد نتائج لـ "${search}"` : `No terms match "${search}"`}
        </div>
      )}
    </div>
  );
}
