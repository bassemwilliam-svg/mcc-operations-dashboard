import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpen, ClipboardList, AlertTriangle, GraduationCap,
  Monitor, Wrench, HelpCircle, Crosshair, FileText, Server,
  Users, Calculator, Map
} from 'lucide-react';
import { useRole } from '@/hooks/useRole';
import { useLanguage } from '@/hooks/useLanguage';
import { roleLabels, roleLabelsAr, roleColors, documents } from '@/lib/content';
import { getTranslation } from '@/lib/i18n';
import type { Role } from '@/types/content';

const quickActions = [
  { icon: Monitor, label: 'Start a Session', labelAr: 'بدء جلسة', desc: 'Setup guides for operators & supervisors', descAr: 'أدلة الإعداد للمشغّلين والمشرفين', to: '/knowledge-base/mcc-software-guide', color: 'text-blue-400' },
  { icon: Wrench, label: 'Troubleshoot', labelAr: 'استكشاف الأخطاء', desc: 'Interactive problem solver', descAr: 'أداة تشخيص تفاعلية', to: '/tools/troubleshooter', color: 'text-orange-400' },
  { icon: FileText, label: 'Read Reports', labelAr: 'قراءة التقارير', desc: 'Performance scoring guide', descAr: 'دليل تقييم الأداء', to: '/knowledge-base/mcc-report-guide', color: 'text-green-400' },
  { icon: GraduationCap, label: 'Onboard Someone', labelAr: 'تأهيل موظف جديد', desc: 'Flow-based onboarding process', descAr: 'عملية تأهيل قائمة على مراحل متدرّجة', to: '/training', color: 'text-purple-400' },
];

const sections = [
  { icon: BookOpen, label: 'Knowledge Base', labelAr: 'قاعدة المعرفة', desc: '18 documents, all searchable', descAr: '18 وثيقة، جميعها قابلة للبحث', to: '/knowledge-base', color: 'bg-blue-500/10 text-blue-400' },
  { icon: ClipboardList, label: 'SOPs', labelAr: 'إجراءات التشغيل', desc: 'Standard operating procedures', descAr: 'إجراءات التشغيل القياسية', to: '/sops', color: 'bg-green-500/10 text-green-400' },
  { icon: Map, label: 'Scenarios', labelAr: 'السيناريوهات', desc: '5 training locations', descAr: '5 مواقع تدريبية', to: '/scenarios', color: 'bg-cyan-500/10 text-cyan-400' },
  { icon: Calculator, label: 'Score Calculator', labelAr: 'حاسبة الدرجات', desc: 'Composite score tool', descAr: 'أداة حساب الدرجة المركّبة', to: '/tools/score-calculator', color: 'bg-yellow-500/10 text-yellow-400' },
  { icon: ClipboardList, label: 'Checklists', labelAr: 'قوائم التحقّق', desc: 'Pre & post-session', descAr: 'قبل الجلسة وبعدها', to: '/tools/checklists', color: 'bg-pink-500/10 text-pink-400' },
  { icon: AlertTriangle, label: 'Troubleshooter', labelAr: 'مستكشف الأخطاء', desc: 'Decision tree diagnostics', descAr: 'تشخيص عبر شجرة قرارات', to: '/tools/troubleshooter', color: 'bg-orange-500/10 text-orange-400' },
  { icon: Server, label: 'System Architecture', labelAr: 'بنية النظام', desc: 'Network & hardware diagram', descAr: 'مخطط الشبكة والأجهزة', to: '/tools/architecture', color: 'bg-indigo-500/10 text-indigo-400' },
  { icon: GraduationCap, label: 'Training Hub', labelAr: 'مركز التدريب', desc: 'Onboarding & assessments', descAr: 'التأهيل والتقييمات', to: '/training', color: 'bg-purple-500/10 text-purple-400' },
  { icon: Crosshair, label: 'Quick Reference', labelAr: 'المرجع السريع', desc: 'One-page operator & supervisor cards', descAr: 'بطاقات مرجعية للمشغّل والمشرف', to: '/tools/quick-reference', color: 'bg-teal-500/10 text-teal-400' },
  { icon: Users, label: 'Emergency Procedures', labelAr: 'إجراءات الطوارئ', desc: 'Escalation paths & contacts', descAr: 'مسارات التصعيد', to: '/tools/emergency', color: 'bg-red-500/10 text-red-400' },
  { icon: HelpCircle, label: 'Glossary', labelAr: 'المصطلحات', desc: 'Quick definitions for key terms', descAr: 'تعريفات سريعة للمصطلحات الرئيسية', to: '/tools/glossary', color: 'bg-gray-500/10 text-gray-400' },
];

const rolePortals: { role: Role; icon: typeof Monitor; desc: string; descAr: string }[] = [
  { role: 'operator', icon: Monitor, desc: 'Session joining, VR controls, scoring', descAr: 'الانضمام للجلسات، أدوات التحكّم، التقييم' },
  { role: 'supervisor', icon: Users, desc: 'Session hosting, monitoring, reports', descAr: 'استضافة الجلسات، المراقبة، التقارير' },
  { role: 'facilitator', icon: GraduationCap, desc: 'Training delivery, onboarding', descAr: 'تقديم التدريب، التأهيل' },
  { role: 'it-admin', icon: Server, desc: 'Setup, maintenance, troubleshooting', descAr: 'الإعداد، الصيانة، استكشاف الأخطاء' },
];

export function Home() {
  const { setRole } = useRole();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = (key: string) => getTranslation(key, language);

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 border border-gray-200 dark:border-gray-700 p-8">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <img src="./mcc-seal.png" alt="MCC Seal" className="w-14 h-14 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{t('home.title')}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t('home.subtitle')}</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mt-2">
            {t('home.description')}
          </p>
        </div>
        {/* Decorative grid */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
          <div className="grid grid-cols-8 gap-1 w-full h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="bg-accent rounded-sm" />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{t('home.quickActions')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {quickActions.map(action => (
            <Link
              key={action.to}
              to={action.to}
              className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-accent/50 hover:bg-gray-50 dark:hover:bg-gray-850 transition-all group"
            >
              <action.icon className={`w-5 h-5 ${action.color} mt-0.5 shrink-0`} />
              <div>
                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-accent transition-colors">{language === 'ar' ? action.labelAr : action.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{language === 'ar' ? action.descAr : action.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Role Portals */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{t('home.iAmA')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {rolePortals.map(portal => (
            <button
              key={portal.role}
              onClick={() => {
                setRole(portal.role);
                navigate('/knowledge-base');
              }}
              className={`flex items-start gap-3 p-4 rounded-xl border transition-all text-left cursor-pointer hover:scale-[1.02] ${roleColors[portal.role]}`}
            >
              <portal.icon className="w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <div className="text-sm font-semibold">{language === 'ar' ? roleLabelsAr[portal.role] : roleLabels[portal.role]}</div>
                <div className="text-xs opacity-70 mt-0.5">{language === 'ar' ? portal.descAr : portal.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* All Sections Grid */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{t('home.allSections')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {sections.map(section => (
            <Link
              key={section.to}
              to={section.to}
              className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all group"
            >
              <div className={`w-9 h-9 rounded-lg ${section.color} flex items-center justify-center shrink-0`}>
                <section.icon className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">{language === 'ar' ? section.labelAr : section.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{language === 'ar' ? section.descAr : section.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* System Info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-accent">9</div>
          <div className="text-xs text-gray-400 mt-1">{language === 'ar' ? 'محطات عمل (8 مشغّلين + 1 مشرف)' : 'Workstations (8 Operator + 1 Supervisor)'}</div>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-green-400">5</div>
          <div className="text-xs text-gray-400 mt-1">{language === 'ar' ? 'سيناريوهات تدريبية' : 'Training Scenarios'}</div>
        </div>
        <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-purple-400">{documents.length}</div>
          <div className="text-xs text-gray-400 mt-1">{language === 'ar' ? 'ملفات التوثيق' : 'Documentation Files'}</div>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center text-xs text-gray-600 pb-4">
        {t('common.footer')}
      </div>
    </div>
  );
}
