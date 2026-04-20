import { Link } from 'react-router-dom';
import { Calculator, ClipboardList, AlertTriangle, Server, Crosshair, Users, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const tools = [
  { icon: Calculator, label: 'Score Calculator', labelAr: 'حاسبة الدرجات', desc: 'Calculate composite performance scores with the weighted formula', descAr: 'احسب درجات الأداء المركبة باستخدام الصيغة المرجحة', to: '/tools/score-calculator', color: 'text-yellow-400 bg-yellow-500/10' },
  { icon: ClipboardList, label: 'Interactive Checklists', labelAr: 'قوائم التحقق التفاعلية', desc: 'Pre-session and post-session checklists with progress tracking', descAr: 'قوائم تحقق ما قبل وبعد الجلسة مع تتبع التقدم', to: '/tools/checklists', color: 'text-pink-400 bg-pink-500/10' },
  { icon: AlertTriangle, label: 'Troubleshooter', labelAr: 'مستكشف الأخطاء', desc: 'Interactive decision tree to diagnose and fix common issues', descAr: 'شجرة قرارات تفاعلية لتشخيص وإصلاح المشاكل الشائعة', to: '/tools/troubleshooter', color: 'text-orange-400 bg-orange-500/10' },
  { icon: Server, label: 'System Architecture', labelAr: 'بنية النظام', desc: 'Network topology diagram with all 9 workstations', descAr: 'مخطط الشبكة مع جميع محطات العمل التسع', to: '/tools/architecture', color: 'text-indigo-400 bg-indigo-500/10' },
  { icon: Crosshair, label: 'Quick Reference Cards', labelAr: 'بطاقات المرجع السريع', desc: 'One-page reference for operators and supervisors', descAr: 'مرجع من صفحة واحدة للمشغلين والمشرفين', to: '/tools/quick-reference', color: 'text-teal-400 bg-teal-500/10' },
  { icon: Users, label: 'Emergency Procedures', labelAr: 'إجراءات الطوارئ', desc: 'Emergency protocols and escalation paths', descAr: 'بروتوكولات الطوارئ ومسارات التصعيد', to: '/tools/emergency', color: 'text-red-400 bg-red-500/10' },
  { icon: HelpCircle, label: 'Glossary', labelAr: 'المصطلحات', desc: 'MCCVR terminology and definitions', descAr: 'مصطلحات وتعريفات MCCVR', to: '/tools/glossary', color: 'text-gray-400 bg-gray-500/10' },
];

export function Tools() {
  const { language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">
          {language === 'ar' ? 'الأدوات والمراجع' : 'Tools & Resources'}
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          {language === 'ar' ? 'أدوات تفاعلية ومراجع لعمليات MCCVR' : 'Interactive tools, references, and utilities for MCCVR operations'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {tools.map(tool => (
          <Link
            key={tool.to}
            to={tool.to}
            className="flex items-start gap-3 p-5 rounded-xl bg-gray-900 border border-gray-700 hover:border-gray-600 transition-all group"
          >
            <div className={`w-10 h-10 rounded-lg ${tool.color} flex items-center justify-center shrink-0`}>
              <tool.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-200 group-hover:text-accent transition-colors">
                {language === 'ar' ? tool.labelAr : tool.label}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {language === 'ar' ? tool.descAr : tool.desc}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
