import type { BiText } from '../lib/t';

export interface TrainingPhase {
  number: number;
  title: BiText;
  ready: BiText;
  color: string;
  dotColor: string;
  items: BiText[];
}

export interface TrainingForm {
  title: BiText;
  desc: BiText;
  docId: string;
  icon: string;
}

export interface TrainingDoc {
  title: BiText;
  desc: BiText;
  docId: string;
}

export interface SessionBlock {
  block: string;
  time: string;
  range: string;
  desc: BiText;
}

export const phases: TrainingPhase[] = [
  {
    number: 1,
    title: { en: 'Orientation', ar: 'التوجيه' },
    ready: { en: 'Mentor assigned, system access confirmed', ar: 'تم تعيين المرشد وتأكيد الوصول للنظام' },
    color: 'border-blue-500 bg-blue-500/10',
    dotColor: 'bg-blue-500',
    items: [
      { en: 'Welcome briefing & facility tour', ar: 'جلسة ترحيبية وجولة في المنشأة' },
      { en: 'Mentor assignment', ar: 'تعيين المرشد' },
      { en: 'System access verification', ar: 'التحقق من الوصول للنظام' },
      { en: 'Quick Start Card provided', ar: 'تقديم بطاقة البدء السريع' },
    ],
  },
  {
    number: 2,
    title: { en: 'Guided Practice', ar: 'التدريب الموجّه' },
    ready: { en: 'Can set up own station, completed 3+ mentored scenarios', ar: 'قادر على إعداد محطته، أكمل 3 سيناريوهات أو أكثر بإشراف المرشد' },
    color: 'border-green-500 bg-green-500/10',
    dotColor: 'bg-green-500',
    items: [
      { en: 'Hardware setup training', ar: 'التدريب على إعداد الأجهزة' },
      { en: 'Run scenarios with mentor', ar: 'تنفيذ السيناريوهات مع المرشد' },
      { en: 'Receive feedback after each session', ar: 'تلقي ملاحظات بعد كل جلسة' },
      { en: 'Build familiarity with all tools', ar: 'بناء الإلمام بجميع الأدوات' },
    ],
  },
  {
    number: 3,
    title: { en: 'Solo Practice', ar: 'التدريب المستقل' },
    ready: { en: 'All competency criteria met on Competency Checklist', ar: 'استيفاء جميع معايير الكفاءة في قائمة الكفاءات' },
    color: 'border-purple-500 bg-purple-500/10',
    dotColor: 'bg-purple-500',
    items: [
      { en: 'Independent scenario execution', ar: 'تنفيذ السيناريوهات بشكل مستقل' },
      { en: 'Mentor observes (no guidance)', ar: 'المرشد يراقب (بدون توجيه)' },
      { en: 'Complete Competency Checklist', ar: 'إتمام قائمة الكفاءات' },
      { en: 'Self-assessment and reflection', ar: 'التقييم الذاتي والتأمل' },
    ],
  },
  {
    number: 4,
    title: { en: 'Sign-Off', ar: 'الاعتماد' },
    ready: { en: '70%+ composite score achieved, Assessment Checklist signed', ar: 'تحقيق درجة إجمالية 70%+، توقيع قائمة التقييم' },
    color: 'border-orange-500 bg-orange-500/10',
    dotColor: 'bg-orange-500',
    items: [
      { en: 'Achieve 70%+ composite score', ar: 'تحقيق درجة إجمالية 70%+' },
      { en: 'Pass competency assessment', ar: 'اجتياز تقييم الكفاءات' },
      { en: 'Complete Assessment Checklist', ar: 'إتمام قائمة التقييم' },
      { en: 'Receive certification', ar: 'الحصول على الشهادة' },
    ],
  },
];

export const forms: TrainingForm[] = [
  { title: { en: 'Mentor Assignment Form', ar: 'نموذج تعيين المرشد' }, desc: { en: 'Formally assign mentors to new hires', ar: 'تعيين المرشدين رسميًا للموظفين الجدد' }, docId: 'mcc-mentor-assignment-form', icon: 'Users' },
  { title: { en: 'Competency Checklist:Operator', ar: 'قائمة الكفاءات: المشغل' }, desc: { en: '13 competency criteria for Solo Practice', ar: '13 معيارًا للكفاءة للتدريب المستقل' }, docId: 'mcc-competency-checklist-operator', icon: 'ClipboardList' },
  { title: { en: 'Competency Checklist:Supervisor', ar: 'قائمة الكفاءات: المشرف' }, desc: { en: 'Supervisor competency observation form', ar: 'نموذج ملاحظة كفاءات المشرف' }, docId: 'mcc-competency-checklist-supervisor', icon: 'ClipboardList' },
  { title: { en: 'Assessment Checklist:Operator', ar: 'قائمة التقييم: المشغل' }, desc: { en: 'Final sign-off assessment form', ar: 'نموذج تقييم الاعتماد النهائي' }, docId: 'mcc-assessment-checklist-operator', icon: 'CheckCircle2' },
  { title: { en: 'Assessment Checklist:Supervisor', ar: 'قائمة التقييم: المشرف' }, desc: { en: 'Supervisor sign-off assessment', ar: 'تقييم اعتماد المشرف' }, docId: 'mcc-assessment-checklist-supervisor', icon: 'CheckCircle2' },
];

export const trainingDocs: TrainingDoc[] = [
  { title: { en: 'Facilitator Guide', ar: 'دليل الميسّر' }, desc: { en: 'Session delivery script and 4-block structure', ar: 'سيناريو تقديم الجلسة وهيكل الأربع وحدات' }, docId: 'mcc-facilitator-guide-new' },
  { title: { en: 'Knowledge Transfer Plan v2.0', ar: 'خطة نقل المعرفة الإصدار 2.0' }, desc: { en: 'Training strategy & documentation plan', ar: 'استراتيجية التدريب وخطة التوثيق' }, docId: 'mcc-training-knowledge-transfer' },
  { title: { en: 'Onboarding SOP', ar: 'إجراء التهيئة الموحد' }, desc: { en: 'Full onboarding standard operating procedure', ar: 'إجراء التهيئة الموحد الكامل' }, docId: 'mcc-onboarding-sop' },
];

export const sessionBlocks: SessionBlock[] = [
  { block: 'Block 1', time: '30 min', range: '0:00\u20130:30', desc: { en: 'Get Oriented:Welcome, system overview, hardware setup practice', ar: 'التوجيه: ترحيب، نظرة عامة على النظام، تدريب على إعداد الأجهزة' } },
  { block: 'Block 2', time: '75 min', range: '0:30\u20131:45', desc: { en: 'Learn by Doing:Join session, Airport scenario (30 min), debrief (15 min), break (15 min)', ar: 'التعلم بالممارسة: الانضمام للجلسة، سيناريو المطار (30 د)، مراجعة (15 د)، استراحة (15 د)' } },
  { block: 'Block 3', time: '60 min', range: '1:45\u20132:45', desc: { en: 'Deeper Practice:Second scenario (30 min), supervisor replay & reporting (15 min), self-review (15 min)', ar: 'تدريب أعمق: سيناريو ثانٍ (30 د)، إعادة المشرف والتقارير (15 د)، مراجعة ذاتية (15 د)' } },
  { block: 'Block 4', time: '45 min', range: '2:45\u20133:30', desc: { en: 'Prove It & Wrap Up:Practical assessment (30 min), review and handover (15 min)', ar: 'الإثبات والختام: تقييم عملي (30 د)، مراجعة وتسليم (15 د)' } },
];

export const sessionStructureTitle: BiText = { en: 'Training Session Structure (3.5 hours)', ar: 'هيكل جلسة التدريب (3.5 ساعات)' };
export const sessionStructureSubtitle: BiText = { en: '30% talking, 70% hands-on', ar: '30% شرح، 70% تطبيق عملي' };
