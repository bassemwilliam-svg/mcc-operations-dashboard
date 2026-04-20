import type { BiText } from '../lib/t';

export interface QRControl {
  label: BiText;
  value: BiText;
}

export interface QRSection {
  heading: BiText;
  items?: BiText[];
  controls?: QRControl[];
  extraControls?: QRControl[];
}

export interface QRScoring {
  label: BiText;
  weight: string;
  color: string;
}

export interface QRCard {
  id: string;
  cardTitle: BiText;
  sections: QRSection[];
  scoring?: QRScoring[];
  scoringNote?: BiText;
  networkConfig?: QRControl[];
}

export const operatorCard: QRCard = {
  id: 'operator',
  cardTitle: { en: 'Operator Quick Start', ar: 'البدء السريع للمشغل' },
  sections: [
    {
      heading: { en: 'Session Startup', ar: 'بدء الجلسة' },
      items: [
        { en: 'Power on your PC workstation', ar: 'تشغيل محطة العمل الخاصة بك' },
        { en: 'Turn on the EmotiBit sensor and attach it to your wrist', ar: 'تشغيل مستشعر EmotiBit وتثبيته على معصمك' },
        { en: 'Open VIVE Hub on the PC (do not launch MCCVR yet)', ar: 'فتح VIVE Hub على الحاسوب (لا تشغّل MCCVR بعد)' },
        { en: 'Connect VR headset via Link Cable (USB 3.0)', ar: 'توصيل نظارة VR عبر Link Cable (USB 3.0)' },
        { en: 'Open EmotiBit Oscilloscope, select your device, set transfer to UDP', ar: 'فتح EmotiBit Oscilloscope واختيار جهازك وضبط النقل على UDP' },
        { en: 'Launch the MCCVR client application (SteamVR opens automatically)', ar: 'تشغيل تطبيق MCCVR (يفتح SteamVR تلقائيًا)' },
        { en: 'Put on the VR headset', ar: 'ارتداء نظارة VR' },
        { en: 'Join the lobby and enter your name', ar: 'الانضمام لغرفة الانتظار وإدخال اسمك' },
        { en: 'Complete eye tracking calibration when prompted', ar: 'إتمام معايرة تتبع العين عند الطلب' },
      ],
    },
    {
      heading: { en: 'During Session', ar: 'أثناء الجلسة' },
      items: [
        { en: 'Monitor the 4-slot CCTV camera grid', ar: 'مراقبة شبكة كاميرات CCTV ذات الأربع شاشات' },
        { en: 'Use the joystick area to Pan/Tilt, and the zoom buttons to Zoom', ar: 'استخدام منطقة عصا التحكم للتحريك والإمالة وأزرار التكبير للتقريب' },
        { en: 'Mark suspicious individuals when spotted', ar: 'تحديد الأشخاص المشتبه بهم عند رصدهم' },
        { en: 'Respond to alarms promptly', ar: 'الاستجابة للإنذارات فورًا' },
        { en: 'Distribute attention across ALL cameras', ar: 'توزيع الانتباه على جميع الكاميرات' },
      ],
    },
    {
      heading: { en: 'PTZ Controls', ar: 'أدوات التحكم PTZ' },
      controls: [
        { label: { en: 'Pan:', ar: 'تحريك أفقي:' }, value: { en: 'Drag left/right in the joystick area', ar: 'السحب يمينًا/يسارًا في منطقة عصا التحكم' } },
        { label: { en: 'Tilt:', ar: 'إمالة:' }, value: { en: 'Drag up/down in the joystick area', ar: 'السحب لأعلى/لأسفل في منطقة عصا التحكم' } },
        { label: { en: 'Zoom:', ar: 'تكبير:' }, value: { en: 'Zoom In / Zoom Out buttons', ar: 'أزرار تكبير / تصغير' } },
        { label: { en: 'Reset:', ar: 'إعادة ضبط:' }, value: { en: 'Reset button (restores default view)', ar: 'زر إعادة الضبط (يستعيد العرض الافتراضي)' } },
      ],
      extraControls: [
        { label: { en: 'Mark suspect:', ar: 'تحديد مشتبه:' }, value: { en: 'Right-click on the target', ar: 'النقر بزر الفأرة الأيمن على الهدف' } },
        { label: { en: 'Fullscreen:', ar: 'ملء الشاشة:' }, value: { en: 'Left-click a feed / Double-click to exit', ar: 'نقر يسار على البث / نقر مزدوج للخروج' } },
      ],
    },
    {
      heading: { en: 'Common Issues', ar: 'المشكلات الشائعة' },
      items: [
        { en: 'Headset won\'t connect? Restart VIVE Hub and check same network', ar: 'النظارة لا تتصل؟ أعد تشغيل VIVE Hub وتحقق من الشبكة' },
        { en: 'Can\'t join session? Confirm Supervisor has created it first', ar: 'لا تستطيع الانضمام؟ تأكد أن المشرف أنشأ الجلسة أولًا' },
        { en: 'No camera feeds? Wait for scenario to fully load, then switch slots', ar: 'لا توجد بثوث كاميرا؟ انتظر تحميل السيناريو بالكامل ثم بدّل بين الشاشات' },
        { en: 'EmotiBit LED red? Replace or recharge the battery', ar: 'مؤشر EmotiBit أحمر؟ استبدل البطارية أو أعد شحنها' },
      ],
    },
  ],
  scoring: [
    { label: { en: 'Detection Accuracy', ar: 'دقة الكشف' }, weight: '40%', color: 'text-blue-400' },
    { label: { en: 'False Positives', ar: 'الإنذارات الخاطئة' }, weight: '20%', color: 'text-red-400' },
    { label: { en: 'Timeliness', ar: 'سرعة الاستجابة' }, weight: '20%', color: 'text-green-400' },
    { label: { en: 'Attention & Gaze', ar: 'الانتباه والنظر' }, weight: '20%', color: 'text-purple-400' },
  ],
  scoringNote: { en: 'Sign-off threshold: 70% composite score', ar: 'حد الاعتماد: 70% كدرجة إجمالية' },
};

export const supervisorCard: QRCard = {
  id: 'supervisor',
  cardTitle: { en: 'Supervisor Quick Start', ar: 'البدء السريع للمشرف' },
  sections: [
    {
      heading: { en: 'Session Creation', ar: 'إنشاء الجلسة' },
      items: [
        { en: 'Power on supervisor workstation', ar: 'تشغيل محطة عمل المشرف' },
        { en: 'Launch MCCVR application in server mode', ar: 'تشغيل تطبيق MCCVR في وضع الخادم' },
        { en: 'Select scenario (Airport/Embassy/Mall/Concert/Protest)', ar: 'اختيار السيناريو (المطار/السفارة/المركز التجاري/الحفل/المظاهرة)' },
        { en: 'Create the lobby', ar: 'إنشاء غرفة الانتظار' },
        { en: 'Wait for all operators to join the lobby', ar: 'الانتظار حتى انضمام جميع المشغلين لغرفة الانتظار' },
        { en: 'Start the session when everyone is connected', ar: 'بدء الجلسة عند اتصال الجميع' },
      ],
    },
    {
      heading: { en: 'Live Monitoring', ar: 'المراقبة المباشرة' },
      items: [
        { en: 'Use Live Wall to see all camera feeds', ar: 'استخدام الجدار المباشر لرؤية جميع بثوث الكاميرات' },
        { en: 'Click any operator to view their individual feed', ar: 'النقر على أي مشغل لعرض بثه الفردي' },
        { en: 'Monitor biometric panel (HR, EDA) for stress levels', ar: 'مراقبة لوحة القياسات الحيوية (معدل القلب، النشاط الكهربي للجلد) لمستويات التوتر' },
        { en: 'Check eye tracking heatmaps for attention distribution', ar: 'مراجعة خرائط تتبع العين الحرارية لتوزيع الانتباه' },
        { en: 'Trigger distractions or alarms as needed', ar: 'تفعيل المشتتات أو الإنذارات عند الحاجة' },
      ],
    },
    {
      heading: { en: 'Post-Session', ar: 'ما بعد الجلسة' },
      items: [
        { en: 'End scenario from dashboard', ar: 'إنهاء السيناريو من لوحة التحكم' },
        { en: 'Wait 30 seconds for data flush', ar: 'الانتظار 30 ثانية لتفريغ البيانات' },
        { en: 'Generate performance reports', ar: 'إنشاء تقارير الأداء' },
        { en: 'Use replay system for session review', ar: 'استخدام نظام الإعادة لمراجعة الجلسة' },
        { en: 'Conduct debrief with operators', ar: 'إجراء جلسة مراجعة مع المشغلين' },
      ],
    },
    {
      heading: { en: 'Common Issues', ar: 'المشكلات الشائعة' },
      items: [
        { en: 'Operators can\'t join? Check firewall ports TCP 7777 and UDP 7780+', ar: 'المشغلون لا يستطيعون الانضمام؟ تحقق من منافذ جدار الحماية TCP 7777 و UDP 7780+' },
        { en: 'Live Wall blank? Verify supervisor dashboard connection', ar: 'الجدار المباشر فارغ؟ تحقق من اتصال لوحة تحكم المشرف' },
        { en: 'Reports won\'t generate? Wait 30s for data flush after session ends', ar: 'التقارير لا تُنشأ؟ انتظر 30 ثانية لتفريغ البيانات بعد انتهاء الجلسة' },
        { en: 'Biometrics missing? Check EmotiBit connection and UDP port 12346', ar: 'القياسات الحيوية مفقودة؟ تحقق من اتصال EmotiBit ومنفذ UDP 12346' },
      ],
    },
  ],
  networkConfig: [
    { label: { en: 'Session Port:', ar: 'منفذ الجلسة:' }, value: { en: 'TCP 7777', ar: 'TCP 7777' } },
    { label: { en: 'Biometrics:', ar: 'القياسات الحيوية:' }, value: { en: 'UDP 12346', ar: 'UDP 12346' } },
    { label: { en: 'Config:', ar: 'ملف الإعدادات:' }, value: { en: 'Content/Configs/Server.json', ar: 'Content/Configs/Server.json' } },
  ],
};
