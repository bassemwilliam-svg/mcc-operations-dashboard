// Centralized translations for UI strings
// Add Arabic translations here. If an Arabic value is missing, the English one is used.

const translations: Record<string, { en: string; ar: string }> = {
  // Navigation
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.knowledgeBase': { en: 'Knowledge Base', ar: 'قاعدة المعرفة' },
  'nav.sops': { en: 'SOPs', ar: 'الإجراءات' },
  'nav.scenarios': { en: 'Scenarios', ar: 'السيناريوهات' },
  'nav.tools': { en: 'Tools', ar: 'الأدوات' },
  'nav.training': { en: 'Training', ar: 'التدريب' },
  'nav.search': { en: 'Search', ar: 'بحث' },

  // Home page
  'home.title': { en: 'MCC VR Operations Knowledge Center', ar: 'مركز معرفة عمليات MCC VR' },
  'home.subtitle': { en: 'Monitoring & Control Center. VR Training Platform', ar: 'مركز المتابعة والتحكم. منصة التدريب بالواقع الافتراضي' },
  'home.description': { en: 'Everything you need for MCCVR operations, all in one place. Pick your role or jump into any section below.', ar: 'كل ما تحتاجه لعمليات MCC VR في مكان واحد. اختر دورك أو انتقل إلى أي قسم أدناه.' },
  'home.quickActions': { en: 'Quick Actions', ar: 'إجراءات سريعة' },
  'home.iAmA': { en: 'I am a...', ar: '...أنا' },
  'home.allSections': { en: 'All Sections', ar: 'جميع الأقسام' },
  'home.workstations': { en: 'Workstations (8 Operator + 1 Supervisor)', ar: 'محطات عمل (8 مشغلين + 1 مشرف)' },
  'home.trainingScenarios': { en: 'Training Scenarios', ar: 'سيناريوهات التدريب' },
  'home.documentationFiles': { en: 'Documentation Files', ar: 'ملفات التوثيق' },

  // Quick Actions
  'action.startSession': { en: 'Start a Session', ar: 'بدء جلسة' },
  'action.startSessionDesc': { en: 'Setup guides for operators & supervisors', ar: 'أدلة الإعداد للمشغلين والمشرفين' },
  'action.troubleshoot': { en: 'Troubleshoot', ar: 'استكشاف الأخطاء' },
  'action.troubleshootDesc': { en: 'Interactive problem solver', ar: 'حل المشاكل التفاعلي' },
  'action.readReports': { en: 'Read Reports', ar: 'قراءة التقارير' },
  'action.readReportsDesc': { en: 'Performance scoring guide', ar: 'دليل تقييم الأداء' },
  'action.onboard': { en: 'Onboard Someone', ar: 'تأهيل موظف جديد' },
  'action.onboardDesc': { en: 'Flow-based onboarding process', ar: 'عملية التأهيل المرنة' },

  // Roles
  'role.operator': { en: 'Operator', ar: 'مشغل' },
  'role.supervisor': { en: 'Supervisor', ar: 'مشرف' },
  'role.facilitator': { en: 'Facilitator', ar: 'ميسر' },
  'role.itAdmin': { en: 'IT / Admin', ar: 'تقنية المعلومات / إدارة' },
  'role.operatorDesc': { en: 'Session joining, VR controls, scoring', ar: 'الانضمام للجلسات، تحكم الواقع الافتراضي، التقييم' },
  'role.supervisorDesc': { en: 'Session hosting, monitoring, reports', ar: 'استضافة الجلسات، المراقبة، التقارير' },
  'role.facilitatorDesc': { en: 'Training delivery, onboarding', ar: 'تقديم التدريب، التأهيل' },
  'role.itAdminDesc': { en: 'Setup, maintenance, troubleshooting', ar: 'الإعداد، الصيانة، استكشاف الأخطاء' },

  // Section descriptions
  'section.knowledgeBase': { en: '19 documents, all searchable', ar: '19 وثيقة، قابلة للبحث' },
  'section.sops': { en: 'Standard operating procedures', ar: 'إجراءات التشغيل القياسية' },
  'section.scenarios': { en: '5 training locations', ar: '5 مواقع تدريب' },
  'section.scoreCalculator': { en: 'Composite score tool', ar: 'أداة حساب الدرجة المركبة' },
  'section.checklists': { en: 'Pre & post-session', ar: 'قبل وبعد الجلسة' },
  'section.troubleshooter': { en: 'Decision tree diagnostics', ar: 'تشخيص شجرة القرارات' },
  'section.architecture': { en: 'Network & hardware diagram', ar: 'مخطط الشبكة والأجهزة' },
  'section.trainingHub': { en: 'Onboarding & assessments', ar: 'التأهيل والتقييمات' },
  'section.quickRef': { en: 'One-page operator & supervisor cards', ar: 'بطاقات مرجعية للمشغل والمشرف' },
  'section.emergency': { en: 'Escalation paths & contacts', ar: 'مسارات التصعيد وجهات الاتصال' },
  'section.glossary': { en: 'Quick definitions for key terms', ar: 'تعريفات سريعة للمصطلحات' },
  'section.hardware': { en: 'Equipment & warranties', ar: 'المعدات والضمانات' },

  // Page titles
  'page.sops.title': { en: 'Standard Operating Procedures', ar: 'إجراءات التشغيل القياسية' },
  'page.sops.subtitle': { en: 'Follow along with each procedure and check off steps as you go.', ar: 'تابع كل إجراء وضع علامة على الخطوات أثناء إنجازها.' },
  'page.scenarios.title': { en: 'Training Scenarios', ar: 'سيناريوهات التدريب' },
  'page.scenarios.subtitle': { en: '5 Abu Dhabi training environments', ar: '5 بيئات تدريب في أبوظبي' },
  'page.glossary.title': { en: 'Glossary', ar: 'المصطلحات' },
  'page.glossary.subtitle': { en: 'Quick definitions for terms you\'ll see around the system', ar: 'تعريفات سريعة للمصطلحات المستخدمة في النظام' },
  'page.emergency.title': { en: 'Emergency Procedures', ar: 'إجراءات الطوارئ' },
  'page.emergency.subtitle': { en: 'What to do when things go wrong. Follow these protocols step by step.', ar: 'ماذا تفعل عندما تسوء الأمور. اتبع هذه البروتوكولات خطوة بخطوة.' },
  'page.hardware.title': { en: 'Hardware Inventory & Warranties', ar: 'جرد المعدات والضمانات' },
  'page.hardware.subtitle': { en: 'All equipment with warranty dates and license details', ar: 'جميع المعدات مع تواريخ الضمان وتفاصيل التراخيص' },
  'page.troubleshooter.title': { en: 'Troubleshooter', ar: 'مستكشف الأخطاء' },
  'page.troubleshooter.subtitle': { en: 'Walk through common problems step by step to find a fix', ar: 'تصفح المشاكل الشائعة خطوة بخطوة للعثور على حل' },
  'page.quickRef.title': { en: 'Quick Reference Cards', ar: 'بطاقات المرجع السريع' },
  'page.quickRef.subtitle': { en: 'One-page cheat sheets you can print and keep at your station', ar: 'ملخصات من صفحة واحدة يمكنك طباعتها والاحتفاظ بها في محطتك' },
  'page.training.title': { en: 'Training & Onboarding Hub', ar: 'مركز التدريب والتأهيل' },
  'page.knowledgeBase.title': { en: 'Knowledge Base', ar: 'قاعدة المعرفة' },

  // Chatbot
  'chatbot.title': { en: 'MCCVR Assistant', ar: 'مساعد MCCVR' },
  'chatbot.subtitle': { en: 'Quick help & guidance', ar: 'مساعدة سريعة وتوجيه' },

  // Classification banner
  'banner.classification': { en: 'Confidential | MCC / UAE Supreme Council for National Security | ADMCC Restricted', ar: 'سري | MCC / المجلس الأعلى للأمن الوطني بالإمارات | مقيد ADMCC' },

  // Common
  'common.search': { en: 'Search', ar: 'بحث' },
  'common.print': { en: 'Print', ar: 'طباعة' },
  'common.back': { en: 'Back', ar: 'رجوع' },
  'common.startOver': { en: 'Start Over', ar: 'البدء من جديد' },
  'common.footer': { en: 'MCC VR Operations Knowledge Center. Confidential. UAE Supreme Council for National Security', ar: 'مركز معرفة عمليات MCC VR. سري. المجلس الأعلى للأمن الوطني بالإمارات' },
};

export type TranslationKey = keyof typeof translations;

export function getTranslation(key: string, lang: 'en' | 'ar'): string {
  const entry = translations[key];
  if (!entry) return key;
  return lang === 'ar' ? entry.ar : entry.en;
}

export default translations;
