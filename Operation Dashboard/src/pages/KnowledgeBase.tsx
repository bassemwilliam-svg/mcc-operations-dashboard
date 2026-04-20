import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, Filter, X } from 'lucide-react';
import { documents, categoryLabels, categoryLabelsAr, roleLabels, roleLabelsAr, roleColors } from '@/lib/content';
import { searchDocuments } from '@/lib/search';
import { useRole } from '@/hooks/useRole';
import { useLanguage } from '@/hooks/useLanguage';
import type { DocCategory, Role } from '@/types/content';

const allRoles: Role[] = ['operator', 'supervisor', 'facilitator', 'it-admin'];

export function KnowledgeBase() {
  const { role, setRole } = useRole();
  const { language } = useLanguage();
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<DocCategory | 'all'>('all');
  const catLabels = language === 'ar' ? categoryLabelsAr : categoryLabels;
  const rLabels = language === 'ar' ? roleLabelsAr : roleLabels;

  const filteredDocs = useMemo(() => {
    let results = query.trim()
      ? searchDocuments(query).map(r => r.item)
      : [...documents];

    if (role !== 'all') {
      results = results.filter(d => d.roles.includes(role));
    }

    if (categoryFilter !== 'all') {
      results = results.filter(d => d.category === categoryFilter);
    }

    return results;
  }, [query, role, categoryFilter]);

  const categories = useMemo(() => {
    const cats = new Set(documents.map(d => d.category));
    return Array.from(cats);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">{language === 'ar' ? 'قاعدة المعرفة' : 'Knowledge Base'}</h1>
        <p className="text-sm text-gray-400 mt-1">{language === 'ar' ? 'ابحث وتصفح جميع وثائق MCCVR' : 'Search and browse all MCCVR documentation'}</p>
      </div>

      {/* Search and category filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search documents..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-accent text-sm"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <select
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value as DocCategory | 'all')}
            className="pl-10 pr-8 py-2.5 rounded-lg bg-gray-900 border border-gray-700 text-sm text-gray-300 focus:outline-none focus:border-accent appearance-none"
          >
            <option value="all">{language === 'ar' ? 'جميع الفئات' : 'All Categories'}</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{catLabels[cat]}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Role filter chips */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs text-gray-500">{language === 'ar' ? 'الدور:' : 'Role:'}</span>
        <button
          onClick={() => setRole('all')}
          className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
            role === 'all'
              ? 'bg-accent/15 text-accent border-accent/40'
              : 'text-gray-400 border-gray-700 hover:border-gray-500'
          }`}
        >
          {language === 'ar' ? 'الكل' : 'All'}
        </button>
        {allRoles.map(r => (
          <button
            key={r}
            onClick={() => setRole(role === r ? 'all' : r)}
            className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
              role === r
                ? roleColors[r]
                : 'text-gray-400 border-gray-700 hover:border-gray-500'
            }`}
          >
            {rLabels[r]}
          </button>
        ))}
      </div>

      {/* Active filter banner (only when role filter is active) */}
      {role !== 'all' && (
        <div className={`flex items-center justify-between px-3 py-2 rounded-lg border mb-4 ${roleColors[role]}`}>
          <span className="text-xs">
            {language === 'ar'
              ? <>{rLabels[role]} ({filteredDocs.length} من {documents.length})</>
              : <>Showing documents for <strong>{rLabels[role]}</strong> ({filteredDocs.length} of {documents.length})</>
            }
          </span>
          <button
            onClick={() => setRole('all')}
            className="flex items-center gap-1 text-xs opacity-80 hover:opacity-100 transition-opacity"
          >
            {language === 'ar' ? 'إزالة الفلتر' : 'Clear filter'}
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Results count (when no role filter) */}
      {role === 'all' && (
        <div className="text-xs text-gray-500 mb-4">
          {language === 'ar'
            ? `${filteredDocs.length} من ${documents.length} وثيقة`
            : `Showing ${filteredDocs.length} of ${documents.length} documents`
          }
        </div>
      )}

      {/* Document list */}
      <div className="space-y-2">
        {filteredDocs.map(doc => (
          <Link
            key={doc.id}
            to={`/knowledge-base/${doc.id}`}
            className="block p-4 rounded-xl bg-gray-900 border border-gray-700 hover:border-gray-600 hover:bg-gray-850 transition-all group"
          >
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-gray-500 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm font-semibold text-gray-200 group-hover:text-accent transition-colors">{language === 'ar' && doc.titleAr ? doc.titleAr : doc.title}</h3>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 uppercase">{catLabels[doc.category]}</span>
                  {doc.version !== '1.0' && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-accent">v{doc.version}</span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{language === 'ar' && doc.summaryAr ? doc.summaryAr : doc.summary}</p>
                <div className="flex gap-1.5 mt-2">
                  {doc.roles.map(r => (
                    <span key={r} className={`text-[10px] px-1.5 py-0.5 rounded border ${roleColors[r]}`}>
                      {rLabels[r]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredDocs.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <FileText className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-sm">{language === 'ar' ? 'لا توجد وثائق تطابق الفلاتر الحالية' : 'No documents match your current filters'}</p>
          <button
            onClick={() => { setRole('all'); setCategoryFilter('all'); setQuery(''); }}
            className="mt-3 text-xs text-accent hover:underline"
          >
            {language === 'ar' ? 'إزالة جميع الفلاتر' : 'Clear all filters'}
          </button>
        </div>
      )}
    </div>
  );
}
