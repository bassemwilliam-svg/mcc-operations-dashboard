import { AlertTriangle, ArrowRight, Shield } from 'lucide-react';
import { procedures, escalationPath } from '@/data/emergency';
import { useLanguage } from '@/hooks/useLanguage';
import { pick } from '@/lib/t';

export function Emergency() {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-400" />
          {language === 'ar' ? 'اجراءات الطوارئ' : 'Emergency Procedures'}
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          {language === 'ar'
            ? 'ماذا تفعل عندما تسوء الامور. اتبع هذه البروتوكولات خطوة بخطوة.'
            : 'What to do when things go wrong. Follow these protocols step by step.'}
        </p>
      </div>

      {/* Escalation Path */}
      <div className="mb-8 p-5 rounded-xl bg-gray-900 border border-gray-700">
        <h2 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
          <Shield className="w-4 h-4 text-accent" />
          {language === 'ar' ? 'مسار التصعيد' : 'Escalation Path'}
        </h2>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          {escalationPath.map((step, i) => (
            <div key={step.level} className="flex items-center gap-2 flex-1">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-800 flex-1">
                <div className={`w-6 h-6 rounded-full ${step.color} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>
                  {step.level}
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-gray-300">{pick(step.role, language)}</div>
                  <div className="text-[9px] text-gray-500">{pick(step.action, language)}</div>
                </div>
              </div>
              {i < escalationPath.length - 1 && (
                <ArrowRight className="w-3 h-3 text-gray-600 shrink-0 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Procedures */}
      <div className="space-y-4">
        {procedures.map(proc => (
          <div key={proc.id} className="rounded-xl bg-gray-900 border border-gray-700 overflow-hidden">
            <div className="p-4 flex items-center gap-3 border-b border-gray-800">
              <AlertTriangle className={`w-5 h-5 shrink-0 ${
                proc.severity === 'critical' ? 'text-red-400' :
                proc.severity === 'high' ? 'text-orange-400' : 'text-yellow-400'
              }`} />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-200">{pick(proc.title, language)}</h3>
                <div className="flex gap-3 mt-1">
                  <span className="text-[10px] text-gray-500">
                    {language === 'ar' ? 'الاستجابة:' : 'Response:'}{' '}
                    <span className="text-gray-300">{pick(proc.responseTime, language)}</span>
                  </span>
                  <span className="text-[10px] text-gray-500">
                    {language === 'ar' ? 'المسؤول:' : 'Owner:'}{' '}
                    <span className="text-gray-300">{pick(proc.responsible, language)}</span>
                  </span>
                </div>
              </div>
              <span className={`text-[10px] px-1.5 py-0.5 rounded shrink-0 ${
                proc.severity === 'critical' ? 'bg-red-500/10 text-red-400' :
                proc.severity === 'high' ? 'bg-orange-500/10 text-orange-400' : 'bg-yellow-500/10 text-yellow-400'
              }`}>
                {proc.severity.toUpperCase()}
              </span>
            </div>
            <div className="p-4 space-y-2">
              {proc.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center text-[10px] font-mono text-gray-400 shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-gray-300">{pick(step, language)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
