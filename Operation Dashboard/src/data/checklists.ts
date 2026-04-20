import type { BiText } from '../lib/t';

export interface ChecklistItemData {
  id: string;
  text: BiText;
}

export interface ChecklistData {
  id: string;
  title: BiText;
  role: BiText;
  type: BiText;
  items: ChecklistItemData[];
}

export const checklists: ChecklistData[] = [
  {
    id: 'cl-operator-pre',
    title: { en: 'Operator Pre-Session Checklist', ar: 'قائمة تحقق المشغل قبل الجلسة' },
    role: { en: 'Operator', ar: 'المشغل' },
    type: { en: 'Pre-Session', ar: 'قبل الجلسة' },
    items: [
      { id: 'op-1', text: { en: 'Workstation PC is powered on', ar: 'حاسوب محطة العمل قيد التشغيل' } },
      { id: 'op-2', text: { en: 'Network cable is connected and showing activity', ar: 'كابل الشبكة متصل ويظهر نشاطا' } },
      { id: 'op-3', text: { en: 'Remove all jewelry from the EmotiBit wrist (rings, bracelets, watches, metal bands)', ar: 'ازل جميع المجوهرات من معصم EmotiBit (خواتم، اساور، ساعات، اربطة معدنية)' } },
      { id: 'op-4', text: { en: 'EmotiBit sensor is charged and turned on (LED active)', ar: 'مستشعر EmotiBit مشحون وقيد التشغيل (مؤشر LED نشط)' } },
      { id: 'op-5a', text: { en: 'EmotiBit sensor is attached to wrist with snug fit', ar: 'مستشعر EmotiBit مثبت على المعصم بإحكام' } },
      { id: 'op-5', text: { en: 'VIVE Hub is open on the PC', ar: 'تطبيق VIVE Hub مفتوح على الحاسوب' } },
      { id: 'op-6', text: { en: 'VR headset connected to PC via Link Cable (USB 3.0 port)', ar: 'نظارة الواقع الافتراضي متصلة بالحاسوب عبر كابل الربط (منفذ USB 3.0)' } },
      { id: 'op-7', text: { en: 'EmotiBit Oscilloscope app is open on the PC', ar: 'تطبيق EmotiBit Oscilloscope مفتوح على الحاسوب' } },
      { id: 'op-8', text: { en: 'Correct EmotiBit device selected in Oscilloscope output devices', ar: 'جهاز EmotiBit الصحيح محدد في اجهزة اخراج Oscilloscope' } },
      { id: 'op-9', text: { en: 'Oscilloscope transfer mode is set to UDP', ar: 'وضع النقل في Oscilloscope مضبوط على UDP' } },
      { id: 'op-10', text: { en: 'MCCVR client application launched (SteamVR opens automatically)', ar: 'تطبيق MCCVR العميل تم تشغيله (SteamVR يفتح تلقائيا)' } },
      { id: 'op-11', text: { en: 'Joined the lobby and entered name', ar: 'تم الانضمام للردهة وادخال الاسم' } },
      { id: 'op-12', text: { en: 'VR headset on and fits comfortably with clear vision', ar: 'نظارة الواقع الافتراضي مرتداة وتناسب بشكل مريح مع رؤية واضحة' } },
    ],
  },
  {
    id: 'cl-supervisor-pre',
    title: { en: 'Supervisor Pre-Session Checklist', ar: 'قائمة تحقق المشرف قبل الجلسة' },
    role: { en: 'Supervisor', ar: 'المشرف' },
    type: { en: 'Pre-Session', ar: 'قبل الجلسة' },
    items: [
      { id: 'sv-1', text: { en: 'Supervisor workstation is powered on', ar: 'محطة عمل المشرف قيد التشغيل' } },
      { id: 'sv-2', text: { en: 'Network connectivity confirmed (all PCs on the same switch)', ar: 'تم تاكيد اتصال الشبكة (جميع الحواسيب على نفس المحول)' } },
      { id: 'sv-3', text: { en: 'Wireless router is on (EmotiBit devices need it)', ar: 'الراوتر اللاسلكي قيد التشغيل (اجهزة EmotiBit تحتاجه)' } },
      { id: 'sv-4', text: { en: 'MCCVR application launched in server mode', ar: 'تطبيق MCCVR تم تشغيله في وضع الخادم' } },
      { id: 'sv-5', text: { en: 'Scenario selected', ar: 'تم اختيار السيناريو' } },
      { id: 'sv-6', text: { en: 'Lobby created and active', ar: 'الردهة منشاة ونشطة' } },
      { id: 'sv-7', text: { en: 'All operator stations connected and visible in the lobby', ar: 'جميع محطات المشغلين متصلة ومرئية في الردهة' } },
      { id: 'sv-8', text: { en: 'Live Wall display is showing feeds', ar: 'شاشة الجدار الحي تعرض البثوث' } },
      { id: 'sv-9', text: { en: 'Biometric data visible (UDP 12346)', ar: 'البيانات الحيوية مرئية (UDP 12346)' } },
      { id: 'sv-10', text: { en: 'Briefing materials ready for operators', ar: 'مواد الاحاطة جاهزة للمشغلين' } },
    ],
  },
  {
    id: 'cl-facilitator-pre',
    title: { en: 'Facilitator Pre-Session Checklist', ar: 'قائمة تحقق الميسر قبل الجلسة' },
    role: { en: 'Facilitator', ar: 'الميسر' },
    type: { en: 'Pre-Session', ar: 'قبل الجلسة' },
    items: [
      { id: 'fc-1', text: { en: 'Room lighting set to dim (CCTV monitoring environment)', ar: 'اضاءة الغرفة مضبوطة على خافت (بيئة مراقبة CCTV)' } },
      { id: 'fc-2', text: { en: 'All 9 workstations verified by IT', ar: 'جميع المحطات التسع تم التحقق منها من تقنية المعلومات' } },
      { id: 'fc-3', text: { en: 'Participant name cards placed at each station', ar: 'بطاقات اسماء المشاركين موضوعة في كل محطة' } },
      { id: 'fc-4', text: { en: 'Printed session materials available', ar: 'مواد الجلسة المطبوعة متاحة' } },
      { id: 'fc-5', text: { en: 'Training agenda posted or distributed', ar: 'جدول اعمال التدريب معلق او موزع' } },
      { id: 'fc-6', text: { en: 'Quick Start Cards available for each participant', ar: 'بطاقات البدء السريع متاحة لكل مشارك' } },
      { id: 'fc-7', text: { en: 'Assessment/Competency forms ready (if applicable)', ar: 'نماذج التقييم/الكفاءة جاهزة (اذا كانت مطلوبة)' } },
      { id: 'fc-8', text: { en: 'Break schedule planned (water, snacks available)', ar: 'جدول الاستراحات مخطط (ماء ووجبات خفيفة متاحة)' } },
      { id: 'fc-9', text: { en: 'Emergency exit routes confirmed and communicated', ar: 'مسارات الخروج الطارئة مؤكدة ومبلغة' } },
      { id: 'fc-10', text: { en: 'Feedback forms prepared for end of session', ar: 'نماذج الملاحظات محضرة لنهاية الجلسة' } },
    ],
  },
  {
    id: 'cl-post-session',
    title: { en: 'Post-Session Checklist', ar: 'قائمة تحقق ما بعد الجلسة' },
    role: { en: 'All', ar: 'الجميع' },
    type: { en: 'Post-Session', ar: 'بعد الجلسة' },
    items: [
      { id: 'ps-1', text: { en: 'Scenario ended from Supervisor dashboard', ar: 'تم انهاء السيناريو من لوحة تحكم المشرف' } },
      { id: 'ps-2', text: { en: 'Waited 30 seconds for data flush before closing app', ar: 'الانتظار 30 ثانية لحفظ البيانات قبل اغلاق التطبيق' } },
      { id: 'ps-3', text: { en: 'Performance reports generated for all operators', ar: 'تم انشاء تقارير الاداء لجميع المشغلين' } },
      { id: 'ps-4', text: { en: 'Session data backed up from Data/ folder', ar: 'تم نسخ بيانات الجلسة احتياطيا من مجلد Data/' } },
      { id: 'ps-5', text: { en: 'All VR headsets powered off and placed on chargers', ar: 'جميع نظارات الواقع الافتراضي مطفاة وموضوعة على الشواحن' } },
      { id: 'ps-6', text: { en: 'All EmotiBit sensors removed and stored', ar: 'جميع مستشعرات EmotiBit مزالة ومخزنة' } },
      { id: 'ps-7', text: { en: 'Debrief conducted with operators', ar: 'تم اجراء جلسة المراجعة مع المشغلين' } },
      { id: 'ps-8', text: { en: 'Session logged in training register', ar: 'الجلسة مسجلة في سجل التدريب' } },
      { id: 'ps-9', text: { en: 'Workstations logged off (or shut down if last session)', ar: 'محطات العمل تم تسجيل الخروج منها (او ايقافها اذا كانت اخر جلسة)' } },
      { id: 'ps-10', text: { en: 'Room restored to default state', ar: 'الغرفة اعيدت لحالتها الافتراضية' } },
    ],
  },
];
