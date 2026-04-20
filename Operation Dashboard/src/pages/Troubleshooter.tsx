import { useState } from 'react';
import { ArrowRight, RotateCcw, CheckCircle, AlertTriangle, ArrowLeft } from 'lucide-react';
import { troubleshootTree } from '@/data/troubleshooter';
import { useLanguage } from '@/hooks/useLanguage';
import { pick } from '@/lib/t';
import { GlossaryLinker } from '@/components/common/GlossaryLinker';

export function Troubleshooter() {
  const { language } = useLanguage();
  const [currentId, setCurrentId] = useState('start');
  const [history, setHistory] = useState<string[]>([]);

  const current = troubleshootTree[currentId];

  const navigate = (nextId: string) => {
    setHistory(prev => [...prev, currentId]);
    setCurrentId(nextId);
  };

  const goBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setCurrentId(prev);
  };

  const restart = () => {
    setHistory([]);
    setCurrentId('start');
  };

  if (!current) return null;

  const currentText = pick(current.text, language);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">
          {language === 'ar' ? 'مستكشف الأخطاء' : 'Troubleshooter'}
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          {language === 'ar'
            ? 'تصفح المشاكل الشائعة خطوة بخطوة للعثور على حل'
            : 'Walk through common problems step by step to find a fix'}
        </p>
      </div>

      <div className="rounded-xl bg-gray-900 border border-gray-700 p-6">
        {/* Status badge */}
        <div className="flex items-center gap-2 mb-4">
          {current.type === 'question' && (
            <span className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent">
              {language === 'ar' ? 'تشخيص...' : 'Diagnosing...'}
            </span>
          )}
          {current.type === 'solution' && (
            <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-400 flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> {language === 'ar' ? 'الحل' : 'Solution'}
            </span>
          )}
          {current.type === 'escalate' && (
            <span className="text-xs px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" /> {language === 'ar' ? 'يتطلب تصعيد' : 'Escalation Required'}
            </span>
          )}
          <span className="text-[10px] text-gray-600">
            {language === 'ar' ? `خطوة ${history.length + 1}` : `Step ${history.length + 1}`}
          </span>
        </div>

        {/* Current text with glossary links (English only for glossary links) */}
        <div className="text-base text-gray-200 whitespace-pre-line leading-relaxed">
          {language === 'en' ? <GlossaryLinker text={currentText} /> : currentText}
        </div>

        {/* Options */}
        {current.options && (
          <div className="mt-6 space-y-2">
            {current.options.map(opt => (
              <button
                key={opt.nextId}
                onClick={() => navigate(opt.nextId)}
                className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-700 hover:border-accent hover:bg-accent/5 transition-colors text-left group"
              >
                <span className="text-sm text-gray-300 group-hover:text-gray-100">{pick(opt.label, language)}</span>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-accent" />
              </button>
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="mt-6 flex items-center gap-2 pt-4 border-t border-gray-800">
          {history.length > 0 && (
            <button onClick={goBack} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm text-gray-400 hover:text-gray-200 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              {language === 'ar' ? 'رجوع' : 'Back'}
            </button>
          )}
          <button onClick={restart} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm text-gray-400 hover:text-gray-200 transition-colors">
            <RotateCcw className="w-3.5 h-3.5" />
            {language === 'ar' ? 'البدء من جديد' : 'Start Over'}
          </button>
        </div>
      </div>
    </div>
  );
}
