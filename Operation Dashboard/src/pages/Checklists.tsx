import { useState } from 'react';
import { CheckCircle2, Circle, RotateCcw, Printer } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { checklists } from '@/data/checklists';
import { useLanguage } from '@/hooks/useLanguage';
import { pick } from '@/lib/t';

export function Checklists() {
  const { language } = useLanguage();
  const [activeChecklist, setActiveChecklist] = useState(checklists[0].id);
  const [checked, setChecked] = useLocalStorage<Record<string, boolean>>('mcc-checklists', {});

  const current = checklists.find(c => c.id === activeChecklist)!;
  const checkedCount = current.items.filter(item => checked[item.id]).length;
  const progress = Math.round((checkedCount / current.items.length) * 100);

  const toggleItem = (itemId: string) => {
    setChecked(prev => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const resetChecklist = () => {
    setChecked(prev => {
      const next = { ...prev };
      current.items.forEach(item => delete next[item.id]);
      return next;
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">
          {language === 'ar' ? 'قوائم التحقق التفاعلية' : 'Interactive Checklists'}
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          {language === 'ar'
            ? 'تتبع تقدمك في اجراءات ما قبل وبعد الجلسة. يتم حفظ التقدم تلقائيا.'
            : 'Track your progress through pre-session and post-session procedures. Progress is saved automatically.'}
        </p>
      </div>

      {/* Checklist tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {checklists.map(cl => {
          const clChecked = cl.items.filter(i => checked[i.id]).length;
          const clTotal = cl.items.length;
          const tabLabel = pick(cl.title, language).replace(language === 'ar' ? ' قائمة تحقق' : ' Checklist', '');
          return (
            <button
              key={cl.id}
              onClick={() => setActiveChecklist(cl.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeChecklist === cl.id
                  ? 'bg-accent text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {tabLabel}
              {clChecked > 0 && (
                <span className="ml-1.5 opacity-70">{clChecked}/{clTotal}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Current checklist */}
      <div className="rounded-xl bg-gray-900 border border-gray-700 print-full-width">
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-gray-200">{pick(current.title, language)}</h2>
            <div className="text-xs text-gray-500 mt-0.5">
              {language === 'ar' ? 'الدور:' : 'Role:'} {pick(current.role, language)}, {pick(current.type, language)}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => window.print()} className="p-1.5 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-gray-200" title={language === 'ar' ? 'طباعة' : 'Print'}>
              <Printer className="w-4 h-4" />
            </button>
            <button onClick={resetChecklist} className="p-1.5 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-gray-200" title={language === 'ar' ? 'اعادة تعيين' : 'Reset'}>
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-4 pt-3">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>
              {language === 'ar'
                ? `${checkedCount} من ${current.items.length} مكتمل`
                : `${checkedCount} of ${current.items.length} complete`}
            </span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 rounded-full bg-gray-700 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${progress}%`,
                background: progress === 100 ? '#22c55e' : '#3b82f6',
              }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="p-4 space-y-1">
          {current.items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-800 text-left transition-colors"
            >
              {checked[item.id]
                ? <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                : <Circle className="w-5 h-5 text-gray-600 shrink-0" />
              }
              <span className="text-xs text-gray-500 w-5 shrink-0">{idx + 1}.</span>
              <span className={`text-sm ${checked[item.id] ? 'text-gray-500 line-through' : 'text-gray-300'}`}>
                {pick(item.text, language)}
              </span>
            </button>
          ))}
        </div>

        {progress === 100 && (
          <div className="mx-4 mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
            <span className="text-sm text-green-400 font-medium">
              {language === 'ar' ? 'جميع العناصر مكتملة! \u2713' : 'All items complete! \u2713'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
