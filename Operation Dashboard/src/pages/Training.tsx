import { Link } from 'react-router-dom';
import { GraduationCap, FileText, ClipboardList, Users, Calendar, CheckCircle2 } from 'lucide-react';
import { phases, forms, trainingDocs, sessionBlocks, sessionStructureTitle, sessionStructureSubtitle } from '@/data/training';
import { useLanguage } from '@/hooks/useLanguage';
import { pick } from '@/lib/t';

const formIcons: Record<string, typeof Users> = {
  Users,
  ClipboardList,
  CheckCircle2,
};

export function Training() {
  const { language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">
          {language === 'ar' ? 'مركز التدريب والتهيئة' : 'Training & Onboarding Hub'}
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          {language === 'ar'
            ? 'كل ما يخص تهيئة الموظفين الجدد وتشغيل جلسات التدريب'
            : 'Everything for onboarding new staff and running training sessions'}
        </p>
      </div>

      {/* Onboarding Timeline */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-accent" />
          {language === 'ar' ? 'مسار التهيئة' : 'Onboarding Flow'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {phases.map(phase => (
            <div key={phase.number} className={`rounded-xl border-l-4 ${phase.color} p-4`}>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-6 h-6 rounded-full ${phase.dotColor} flex items-center justify-center text-white text-xs font-bold`}>
                  {phase.number}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-200">{pick(phase.title, language)}</div>
                </div>
              </div>
              <ul className="space-y-1 mt-3">
                {phase.items.map((item, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-start gap-1.5">
                    <span className="text-gray-600 mt-0.5">&#x2022;</span>
                    {pick(item, language)}
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-2 border-t border-gray-700/50 text-[10px] text-green-400">
                {language === 'ar' ? 'التالي عندما:' : 'Next when:'} {pick(phase.ready, language)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Forms & Documents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Downloadable Forms */}
        <div>
          <h2 className="text-lg font-semibold text-gray-200 mb-3 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-green-400" />
            {language === 'ar' ? 'نماذج التقييم والكفاءات' : 'Assessment & Competency Forms'}
          </h2>
          <div className="space-y-2">
            {forms.map(form => {
              const IconComp = formIcons[form.icon] || FileText;
              return (
                <Link
                  key={form.docId}
                  to={`/knowledge-base/${form.docId}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-900 border border-gray-700 hover:border-gray-600 transition-all group"
                >
                  <IconComp className="w-4 h-4 text-gray-500 group-hover:text-accent shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-gray-300 group-hover:text-accent">{pick(form.title, language)}</div>
                    <div className="text-[10px] text-gray-500">{pick(form.desc, language)}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Training Documents */}
        <div>
          <h2 className="text-lg font-semibold text-gray-200 mb-3 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-purple-400" />
            {language === 'ar' ? 'وثائق التدريب' : 'Training Documentation'}
          </h2>
          <div className="space-y-2">
            {trainingDocs.map(doc => (
              <Link
                key={doc.docId}
                to={`/knowledge-base/${doc.docId}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-900 border border-gray-700 hover:border-gray-600 transition-all group"
              >
                <FileText className="w-4 h-4 text-gray-500 group-hover:text-accent shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-300 group-hover:text-accent">{pick(doc.title, language)}</div>
                  <div className="text-[10px] text-gray-500">{pick(doc.desc, language)}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Session structure */}
          <div className="mt-4 p-4 rounded-xl bg-gray-900 border border-gray-700">
            <h3 className="text-sm font-semibold text-gray-300 mb-2">{pick(sessionStructureTitle, language)}</h3>
            <div className="text-xs text-gray-500 mb-2">{pick(sessionStructureSubtitle, language)}</div>
            <div className="space-y-1">
              {sessionBlocks.map(b => (
                <div key={b.block} className="flex items-start gap-3 text-xs py-1">
                  <span className="w-14 font-mono text-gray-500 shrink-0">{b.block}</span>
                  <span className="w-12 text-accent shrink-0">{b.time}</span>
                  <span className="w-20 text-gray-600 font-mono shrink-0">{b.range}</span>
                  <span className="text-gray-400">{pick(b.desc, language)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
