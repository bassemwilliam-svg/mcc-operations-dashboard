import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, CheckCircle2, Circle, ClipboardList } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { sops } from '@/data/sops';
import { useLanguage } from '@/hooks/useLanguage';
import { pick } from '@/lib/t';
import type { SOP } from '@/data/sops';

export function SOPs() {
  const { language } = useLanguage();
  const [expandedSops, setExpandedSops] = useState<Set<string>>(new Set(['sop-onboarding']));
  const [checkedSteps, setCheckedSteps] = useLocalStorage<Record<string, boolean>>('mcc-sop-checks', {});

  const toggleSop = (id: string) => {
    setExpandedSops(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleStep = (stepId: string) => {
    setCheckedSteps(prev => ({ ...prev, [stepId]: !prev[stepId] }));
  };

  const getProgress = (sop: SOP): number => {
    const allStepIds = sop.steps.flatMap(s => s.subSteps ? s.subSteps.map(ss => ss.id) : [s.id]);
    const checkedCount = allStepIds.filter(id => checkedSteps[id]).length;
    return allStepIds.length > 0 ? Math.round((checkedCount / allStepIds.length) * 100) : 0;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">
          {language === 'ar' ? 'اجراءات التشغيل الموحدة' : 'Standard Operating Procedures'}
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          {language === 'ar'
            ? 'تابع كل اجراء وحدد الخطوات عند اتمامها.'
            : 'Follow along with each procedure and check off steps as you go.'}
        </p>
      </div>

      <div className="space-y-3">
        {sops.map(sop => {
          const expanded = expandedSops.has(sop.id);
          const progress = getProgress(sop);

          return (
            <div key={sop.id} className="rounded-xl bg-gray-900 border border-gray-700 overflow-hidden">
              {/* SOP Header */}
              <button
                onClick={() => toggleSop(sop.id)}
                className="w-full flex items-center gap-3 p-4 hover:bg-gray-850 transition-colors text-left"
              >
                {expanded ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
                <ClipboardList className="w-5 h-5 text-accent shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-200">{pick(sop.title, language)}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{pick(sop.description, language)}</div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="text-xs text-gray-500">{progress}%</div>
                  <div className="w-16 h-1.5 rounded-full bg-gray-700">
                    <div
                      className="h-full rounded-full bg-accent transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </button>

              {/* SOP Steps */}
              {expanded && (
                <div className="px-4 pb-4 space-y-1 border-t border-gray-800">
                  <div className="flex items-center gap-3 mt-3 mb-2">
                    {sop.docLink && (
                      <Link
                        to={sop.docLink}
                        className="text-xs text-accent hover:underline"
                      >
                        {language === 'ar' ? 'عرض الوثائق الكاملة \u2190' : 'View full documentation \u2192'}
                      </Link>
                    )}
                    {progress > 0 && (
                      <button
                        onClick={() => {
                          const allIds = sop.steps.flatMap(s => s.subSteps ? s.subSteps.map(ss => ss.id) : [s.id]);
                          setCheckedSteps(prev => {
                            const next = { ...prev };
                            allIds.forEach(id => { delete next[id]; });
                            return next;
                          });
                        }}
                        className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {language === 'ar' ? 'اعادة تعيين القائمة' : 'Reset checklist'}
                      </button>
                    )}
                  </div>
                  {sop.steps.map(step => (
                    <div key={step.id}>
                      {step.subSteps ? (
                        <div>
                          <div className="text-sm font-medium text-gray-300 py-2 mt-2">{pick(step.text, language)}</div>
                          {step.detail && <div className="text-xs text-gray-500 -mt-1 mb-2">{pick(step.detail, language)}</div>}
                          <div className="space-y-1 ml-2">
                            {step.subSteps.map(sub => (
                              <button
                                key={sub.id}
                                onClick={() => toggleStep(sub.id)}
                                className="w-full flex items-center gap-2.5 py-1.5 px-2 rounded-lg hover:bg-gray-800 text-left transition-colors"
                              >
                                {checkedSteps[sub.id]
                                  ? <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                                  : <Circle className="w-4 h-4 text-gray-600 shrink-0" />
                                }
                                <span className={`text-sm ${checkedSteps[sub.id] ? 'text-gray-500 line-through' : 'text-gray-300'}`}>
                                  {pick(sub.text, language)}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => toggleStep(step.id)}
                          className="w-full flex items-center gap-2.5 py-2 px-2 rounded-lg hover:bg-gray-800 text-left transition-colors"
                        >
                          {checkedSteps[step.id]
                            ? <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                            : <Circle className="w-4 h-4 text-gray-600 shrink-0" />
                          }
                          <span className={`text-sm ${checkedSteps[step.id] ? 'text-gray-500 line-through' : 'text-gray-300'}`}>
                            {pick(step.text, language)}
                          </span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
