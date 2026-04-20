import type { BiText } from '../lib/t';

export interface SOPStep {
  id: string;
  text: BiText;
  detail?: BiText;
  subSteps?: { id: string; text: BiText }[];
}

export interface SOP {
  id: string;
  title: BiText;
  description: BiText;
  roles: string[];
  steps: SOPStep[];
  docLink?: string;
}

export const sops: SOP[] = [
  {
    id: 'sop-onboarding',
    title: { en: 'SOP-001: New Staff Onboarding', ar: 'SOP-001: تهيئة الموظفين الجدد' },
    description: {
      en: 'Flow-based onboarding for new operators and supervisors. Move to the next phase when ready.',
      ar: 'تهيئة قائمة على التدرج للمشغلين والمشرفين الجدد. انتقل للمرحلة التالية عند الاستعداد.',
    },
    roles: ['All'],
    docLink: '/knowledge-base/mcc-onboarding-sop',
    steps: [
      {
        id: 'onb-1',
        text: { en: 'Phase 1: Orientation', ar: 'المرحلة 1: التوجيه' },
        detail: {
          en: 'Get familiar with the facility, the team, and the system',
          ar: 'تعرّف على المنشأة والفريق والنظام',
        },
        subSteps: [
          { id: 'onb-1a', text: { en: 'Conduct welcome briefing and introduce the MCCVR system', ar: 'إجراء جلسة ترحيبية وتقديم نظام MCCVR' } },
          { id: 'onb-1b', text: { en: 'Complete facility tour of the training room', ar: 'إتمام جولة في قاعة التدريب' } },
          { id: 'onb-1c', text: { en: 'Assign mentor using the Mentor Assignment Form', ar: 'تعيين مرشد باستخدام نموذج تعيين المرشد' } },
          { id: 'onb-1d', text: { en: 'Verify system access credentials', ar: 'التحقق من بيانات الدخول للنظام' } },
          { id: 'onb-1e', text: { en: 'Provide Operator/Supervisor Quick Start Card', ar: 'تقديم بطاقة البدء السريع للمشغل/المشرف' } },
        ],
      },
      {
        id: 'onb-2',
        text: { en: 'Phase 2: Guided Practice', ar: 'المرحلة 2: التدريب الموجّه' },
        detail: {
          en: 'Learn the hardware and run scenarios with your mentor by your side',
          ar: 'تعلّم الأجهزة ونفّذ السيناريوهات بإشراف مرشدك',
        },
        subSteps: [
          { id: 'onb-2a', text: { en: 'Train on hardware setup (PC, VR headset, EmotiBit)', ar: 'التدريب على إعداد الأجهزة (الحاسوب، نظارة VR، EmotiBit)' } },
          { id: 'onb-2b', text: { en: 'Run Scenario 1: Airport (with mentor guidance)', ar: 'تنفيذ السيناريو 1: المطار (بإشراف المرشد)' } },
          { id: 'onb-2c', text: { en: 'Run Scenario 2: Embassy (with mentor guidance)', ar: 'تنفيذ السيناريو 2: السفارة (بإشراف المرشد)' } },
          { id: 'onb-2d', text: { en: 'Run Scenario 3: Shopping Mall (with mentor guidance)', ar: 'تنفيذ السيناريو 3: المركز التجاري (بإشراف المرشد)' } },
          { id: 'onb-2e', text: { en: 'Provide feedback after each scenario', ar: 'تقديم ملاحظات بعد كل سيناريو' } },
        ],
      },
      {
        id: 'onb-3',
        text: { en: 'Phase 3: Solo Practice', ar: 'المرحلة 3: التدريب المستقل' },
        detail: {
          en: 'Run scenarios independently while your mentor observes',
          ar: 'نفّذ السيناريوهات بشكل مستقل بينما يراقب مرشدك',
        },
        subSteps: [
          { id: 'onb-3a', text: { en: 'Run scenarios independently (mentor observes only)', ar: 'تنفيذ السيناريوهات بشكل مستقل (المرشد يراقب فقط)' } },
          { id: 'onb-3b', text: { en: 'Run Scenario 4: Concert (solo)', ar: 'تنفيذ السيناريو 4: الحفل (منفردًا)' } },
          { id: 'onb-3c', text: { en: 'Run Scenario 5: Protest (solo)', ar: 'تنفيذ السيناريو 5: المظاهرة (منفردًا)' } },
          { id: 'onb-3d', text: { en: 'Complete Competency Checklist with mentor', ar: 'إتمام قائمة الكفاءات مع المرشد' } },
        ],
      },
      {
        id: 'onb-4',
        text: { en: 'Phase 4: Sign-Off', ar: 'المرحلة 4: الاعتماد' },
        detail: {
          en: 'Prove you are ready with a formal assessment (70%+ composite score required)',
          ar: 'أثبت جاهزيتك من خلال تقييم رسمي (يُشترط الحصول على 70%+ كدرجة إجمالية)',
        },
        subSteps: [
          { id: 'onb-4a', text: { en: 'Achieve 70%+ composite score on assessment scenario', ar: 'تحقيق درجة إجمالية 70%+ في سيناريو التقييم' } },
          { id: 'onb-4b', text: { en: 'Pass competency checklist review', ar: 'اجتياز مراجعة قائمة الكفاءات' } },
          { id: 'onb-4c', text: { en: 'Complete Assessment Checklist', ar: 'إتمام قائمة التقييم' } },
          { id: 'onb-4d', text: { en: 'Receive certification and formal sign-off', ar: 'الحصول على الشهادة والاعتماد الرسمي' } },
        ],
      },
    ],
  },
  {
    id: 'sop-pre-session',
    title: { en: 'SOP-002: Pre-Session Setup', ar: 'SOP-002: الإعداد قبل الجلسة' },
    description: {
      en: 'Hardware and software verification before each training session',
      ar: 'التحقق من الأجهزة والبرامج قبل كل جلسة تدريب',
    },
    roles: ['Facilitator', 'IT/Admin'],
    steps: [
      { id: 'pre-1', text: { en: 'Verify all 9 PCs are powered on and connected to the network switch', ar: 'التحقق من تشغيل جميع الحواسيب التسعة واتصالها بمفتاح الشبكة' } },
      { id: 'pre-2', text: { en: 'Check all 8 VR headsets are charged (green LED)', ar: 'التأكد من شحن جميع نظارات VR الثماني (مؤشر LED أخضر)' } },
      { id: 'pre-3', text: { en: 'Check all 8 EmotiBit sensors are charged and turn each one on (LED should activate)', ar: 'التأكد من شحن جميع مستشعرات EmotiBit الثمانية وتشغيل كل منها (يجب أن يضيء مؤشر LED)' } },
      { id: 'pre-4', text: { en: 'Verify the wireless router is on (EmotiBit devices connect through it)', ar: 'التحقق من تشغيل الراوتر اللاسلكي (تتصل أجهزة EmotiBit من خلاله)' } },
      { id: 'pre-5', text: { en: 'Open VIVE Hub on each operator PC', ar: 'فتح VIVE Hub على كل حاسوب مشغل' } },
      { id: 'pre-6', text: { en: 'Connect each VR headset to its PC using the Link Cable', ar: 'توصيل كل نظارة VR بحاسوبها باستخدام كابل Link Cable' } },
      { id: 'pre-7', text: { en: 'Open EmotiBit Oscilloscope on each operator PC, select the correct device, set transfer to UDP', ar: 'فتح EmotiBit Oscilloscope على كل حاسوب مشغل واختيار الجهاز الصحيح وضبط النقل على UDP' } },
      { id: 'pre-8', text: { en: 'Launch MCCVR application on the Supervisor PC in server mode', ar: 'تشغيل تطبيق MCCVR على حاسوب المشرف في وضع الخادم' } },
      { id: 'pre-9', text: { en: 'Create the lobby on the Supervisor PC', ar: 'إنشاء غرفة الانتظار على حاسوب المشرف' } },
      { id: 'pre-10', text: { en: 'Test one operator station end-to-end (launch MCCVR client, join lobby, confirm feed)', ar: 'اختبار محطة مشغل واحدة من البداية للنهاية (تشغيل عميل MCCVR، الانضمام لغرفة الانتظار، تأكيد البث)' } },
      { id: 'pre-11', text: { en: 'Print participant name cards and session materials', ar: 'طباعة بطاقات أسماء المشاركين ومواد الجلسة' } },
      { id: 'pre-12', text: { en: 'Set room lighting to dim (optimal for CCTV monitoring)', ar: 'ضبط إضاءة الغرفة على الوضع الخافت (مثالي لمراقبة CCTV)' } },
    ],
  },
  {
    id: 'sop-post-session',
    title: { en: 'SOP-003: Post-Session Procedures', ar: 'SOP-003: إجراءات ما بعد الجلسة' },
    description: {
      en: 'Data preservation, equipment care, and debrief after each session',
      ar: 'حفظ البيانات والعناية بالمعدات وجلسة المراجعة بعد كل جلسة',
    },
    roles: ['Supervisor', 'Facilitator'],
    steps: [
      { id: 'post-1', text: { en: 'End the scenario from the Supervisor dashboard', ar: 'إنهاء السيناريو من لوحة تحكم المشرف' } },
      { id: 'post-2', text: { en: 'Wait for data flush (30 seconds) before closing the application', ar: 'الانتظار لتفريغ البيانات (30 ثانية) قبل إغلاق التطبيق' } },
      { id: 'post-3', text: { en: 'Generate performance reports for all operators', ar: 'إنشاء تقارير الأداء لجميع المشغلين' } },
      { id: 'post-4', text: { en: 'Back up session data from the Data/ folder', ar: 'نسخ بيانات الجلسة احتياطيًا من مجلد Data/' } },
      { id: 'post-5', text: { en: 'Power off all VR headsets and place on charging stations', ar: 'إيقاف تشغيل جميع نظارات VR ووضعها على محطات الشحن' } },
      { id: 'post-6', text: { en: 'Remove and store EmotiBit sensors', ar: 'إزالة مستشعرات EmotiBit وتخزينها' } },
      { id: 'post-7', text: { en: 'Conduct debrief: review key metrics with operators', ar: 'إجراء جلسة مراجعة: استعراض المؤشرات الرئيسية مع المشغلين' } },
      { id: 'post-8', text: { en: 'Log session in the training register', ar: 'تسجيل الجلسة في سجل التدريب' } },
    ],
  },
  {
    id: 'sop-maintenance',
    title: { en: 'SOP-004: Monthly Maintenance', ar: 'SOP-004: الصيانة الشهرية' },
    description: {
      en: 'Regular maintenance tasks for hardware and software',
      ar: 'مهام الصيانة الدورية للأجهزة والبرامج',
    },
    roles: ['IT/Admin'],
    steps: [
      { id: 'mnt-1', text: { en: 'Check Windows updates on all 9 PCs (schedule restarts if needed)', ar: 'التحقق من تحديثات Windows على جميع الحواسيب التسعة (جدولة إعادة التشغيل عند الحاجة)' } },
      { id: 'mnt-2', text: { en: 'Update GPU drivers (NVIDIA) on all PCs', ar: 'تحديث تعريفات GPU (NVIDIA) على جميع الحواسيب' } },
      { id: 'mnt-3', text: { en: 'Verify VIVE Hub / SteamVR versions are current', ar: 'التحقق من أن إصدارات VIVE Hub / SteamVR محدّثة' } },
      { id: 'mnt-4', text: { en: 'Check EmotiBit firmware updates', ar: 'التحقق من تحديثات برنامج EmotiBit الثابت' } },
      { id: 'mnt-5', text: { en: 'Run disk cleanup on all PCs (remove old session data if needed)', ar: 'تشغيل تنظيف القرص على جميع الحواسيب (حذف بيانات الجلسات القديمة عند الحاجة)' } },
      { id: 'mnt-6', text: { en: 'Test UPS battery status', ar: 'اختبار حالة بطارية UPS' } },
      { id: 'mnt-7', text: { en: 'Inspect all cables and network connections', ar: 'فحص جميع الكابلات واتصالات الشبكة' } },
      { id: 'mnt-8', text: { en: 'Review warranty and licensing renewal dates', ar: 'مراجعة تواريخ تجديد الضمان والتراخيص' } },
    ],
  },
];
