import type { BiText } from '../lib/t';

export interface EmergencyProcedure {
  id: string;
  title: BiText;
  severity: 'critical' | 'high' | 'medium';
  responseTime: BiText;
  responsible: BiText;
  steps: BiText[];
}

export interface EscalationStep {
  level: number;
  role: BiText;
  action: BiText;
  color: string;
}

export const procedures: EmergencyProcedure[] = [
  {
    id: 'system-crash',
    title: { en: 'System Crash During Session', ar: 'تعطل النظام اثناء الجلسة' },
    severity: 'high',
    responseTime: { en: 'Within 2 minutes', ar: 'خلال دقيقتين' },
    responsible: { en: 'Supervisor / IT Staff', ar: 'المشرف / فريق تقنية المعلومات' },
    steps: [
      { en: 'Stay calm, session data is auto-saved every 30 seconds', ar: 'حافظ على هدوئك، بيانات الجلسة تحفظ تلقائيا كل 30 ثانية' },
      { en: 'Note which station(s) crashed', ar: 'سجل اي محطة (محطات) تعطلت' },
      { en: 'If Supervisor PC crashed: all operators will disconnect. Restart the application and create a new session', ar: 'اذا تعطل حاسوب المشرف: سيتم قطع اتصال جميع المشغلين. اعد تشغيل التطبيق وانشئ جلسة جديدة' },
      { en: 'If an Operator PC crashed: other operators continue. Restart the affected station and have the operator rejoin', ar: 'اذا تعطل حاسوب مشغل: يستمر المشغلون الاخرون. اعد تشغيل المحطة المتاثرة واطلب من المشغل اعادة الانضمام' },
      { en: 'Check the Data/ folder to confirm session data was preserved', ar: 'تحقق من مجلد Data/ للتاكد من حفظ بيانات الجلسة' },
      { en: 'If data is lost, the last 30-second snapshot should still be available', ar: 'اذا فقدت البيانات، يجب ان تكون اخر لقطة 30 ثانية لا تزال متاحة' },
      { en: 'Document the crash and report to IT for investigation', ar: 'وثق التعطل وابلغ فريق تقنية المعلومات للتحقيق' },
    ],
  },
  {
    id: 'vr-discomfort',
    title: { en: 'Operator VR Discomfort / Motion Sickness', ar: 'انزعاج المشغل من الواقع الافتراضي / دوار الحركة' },
    severity: 'medium',
    responseTime: { en: 'Immediate (remove headset within 30 seconds)', ar: 'فوري (ازل النظارة خلال 30 ثانية)' },
    responsible: { en: 'Facilitator / Supervisor', ar: 'الميسر / المشرف' },
    steps: [
      { en: 'Immediately remove the VR headset from the affected operator', ar: 'ازل نظارة الواقع الافتراضي فورا من المشغل المتاثر' },
      { en: 'Also remove the EmotiBit sensor from their wrist', ar: 'ازل ايضا مستشعر EmotiBit من معصمه' },
      { en: 'Guide them to a well-ventilated area and have them sit down', ar: 'اصطحبه الى منطقة جيدة التهوية واجلسه' },
      { en: 'Provide water and allow at least 15 minutes of rest', ar: 'قدم الماء واسمح بما لا يقل عن 15 دقيقة من الراحة' },
      { en: 'Do NOT force them to continue the VR session', ar: 'لا تجبره على مواصلة جلسة الواقع الافتراضي' },
      { en: 'If symptoms persist (nausea, dizziness, headache) beyond 30 minutes, recommend medical evaluation', ar: 'اذا استمرت الاعراض (غثيان، دوخة، صداع) لاكثر من 30 دقيقة، اوص بتقييم طبي' },
      { en: 'Document the incident and adjust the operator\'s training schedule', ar: 'وثق الحادثة وعدل جدول تدريب المشغل' },
      { en: 'For future sessions: start with shorter VR periods and gradually increase', ar: 'للجلسات المستقبلية: ابدا بفترات واقع افتراضي اقصر وزدها تدريجيا' },
      { en: 'Make sure the headset IPD is set correctly for this operator (wrong IPD causes eye strain)', ar: 'تاكد من ضبط IPD النظارة بشكل صحيح لهذا المشغل (IPD الخاطئ يسبب اجهاد العين)' },
    ],
  },
  {
    id: 'emotibit-discomfort',
    title: { en: 'EmotiBit Sensor Skin Irritation or Discomfort', ar: 'تهيج الجلد او الانزعاج من مستشعر EmotiBit' },
    severity: 'medium',
    responseTime: { en: 'Immediate (remove sensor)', ar: 'فوري (ازل المستشعر)' },
    responsible: { en: 'Facilitator / Supervisor', ar: 'الميسر / المشرف' },
    steps: [
      { en: 'Remove the EmotiBit sensor from the operator\'s wrist immediately', ar: 'ازل مستشعر EmotiBit من معصم المشغل فورا' },
      { en: 'Check the skin for redness, irritation, or marks', ar: 'افحص الجلد بحثا عن احمرار او تهيج او علامات' },
      { en: 'IMPORTANT: Before wearing the EmotiBit, operators must remove all jewelry from that wrist (rings, bracelets, watches, metal bands). Metal jewelry in contact with the sensor can cause tingling or mild electrical sensation', ar: 'مهم: قبل ارتداء EmotiBit، يجب على المشغلين ازالة جميع المجوهرات من ذلك المعصم (خواتم، اساور، ساعات، اربطة معدنية). المجوهرات المعدنية المتصلة بالمستشعر قد تسبب وخزا او احساسا كهربائيا خفيفا' },
      { en: 'If the operator reports tingling or a mild shock, confirm all metal accessories were removed. If not, remove them and allow the skin to rest before retrying', ar: 'اذا ابلغ المشغل عن وخز او صدمة خفيفة، تاكد من ازالة جميع الاكسسوارات المعدنية. اذا لم تكن مزالة، ازلها واسمح للجلد بالراحة قبل اعادة المحاولة' },
      { en: 'If skin irritation is visible (redness, rash), do not reattach the sensor. The operator can continue the VR session without biometric tracking', ar: 'اذا كان تهيج الجلد مرئيا (احمرار، طفح)، لا تعد تركيب المستشعر. يمكن للمشغل مواصلة جلسة الواقع الافتراضي بدون تتبع حيوي' },
      { en: 'For operators with sensitive skin, try placing the sensor on the other wrist or over a thin layer of fabric (this may reduce EDA accuracy but avoids irritation)', ar: 'للمشغلين ذوي البشرة الحساسة، جرب وضع المستشعر على المعصم الاخر او فوق طبقة رقيقة من القماش (قد يقلل هذا دقة EDA لكنه يتجنب التهيج)' },
      { en: 'Clean the sensor contact points with a dry cloth before the next use', ar: 'نظف نقاط تلامس المستشعر بقطعة قماش جافة قبل الاستخدام التالي' },
      { en: 'If irritation is severe or persists, recommend the operator see medical staff', ar: 'اذا كان التهيج شديدا او مستمرا، اوص المشغل بمراجعة الطاقم الطبي' },
      { en: 'Document the incident. Note whether jewelry was involved and which wrist was used', ar: 'وثق الحادثة. سجل ما اذا كانت المجوهرات متورطة واي معصم تم استخدامه' },
    ],
  },
  {
    id: 'network-failure',
    title: { en: 'Network Failure (All Stations Disconnected)', ar: 'عطل الشبكة (انقطاع جميع المحطات)' },
    severity: 'high',
    responseTime: { en: 'Within 5 minutes', ar: 'خلال 5 دقائق' },
    responsible: { en: 'IT Staff', ar: 'فريق تقنية المعلومات' },
    steps: [
      { en: 'Check the network switch and verify power and port LEDs', ar: 'تحقق من محول الشبكة وتاكد من مؤشرات الطاقة والمنافذ' },
      { en: 'Check all Ethernet cables at the switch end', ar: 'تحقق من جميع كابلات Ethernet عند طرف المحول' },
      { en: 'Restart the network switch if LEDs are abnormal', ar: 'اعد تشغيل محول الشبكة اذا كانت المؤشرات غير طبيعية' },
      { en: 'Wait 60 seconds for the switch to reinitialize', ar: 'انتظر 60 ثانية لاعادة تهيئة المحول' },
      { en: 'Ping the Supervisor PC from an Operator PC to verify connectivity', ar: 'ارسل Ping لحاسوب المشرف من حاسوب مشغل للتحقق من الاتصال' },
      { en: 'If connectivity is restored, restart all MCCVR applications and create a new session', ar: 'اذا تم استعادة الاتصال، اعد تشغيل جميع تطبيقات MCCVR وانشئ جلسة جديدة' },
      { en: 'If the switch is faulty, escalate to IT for hardware replacement', ar: 'اذا كان المحول معطلا، صعد الامر لتقنية المعلومات لاستبدال الجهاز' },
    ],
  },
  {
    id: 'data-loss',
    title: { en: 'Session Data Loss', ar: 'فقدان بيانات الجلسة' },
    severity: 'medium',
    responseTime: { en: 'Within 10 minutes (investigation)', ar: 'خلال 10 دقائق (تحقيق)' },
    responsible: { en: 'IT Staff / Supervisor', ar: 'فريق تقنية المعلومات / المشرف' },
    steps: [
      { en: 'Check the Data/<SessionTimestamp>/ folder on the Supervisor PC', ar: 'تحقق من مجلد Data/<SessionTimestamp>/ على حاسوب المشرف' },
      { en: 'If the folder exists but is empty, the application may have crashed before the first data flush (30 seconds)', ar: 'اذا كان المجلد موجودا لكنه فارغ، قد يكون التطبيق تعطل قبل اول عملية حفظ (30 ثانية)' },
      { en: 'Check for backup copies in previous session folders', ar: 'تحقق من النسخ الاحتياطية في مجلدات الجلسات السابقة' },
      { en: 'If using automated backups, check the backup destination', ar: 'اذا كنت تستخدم نسخا احتياطية تلقائية، تحقق من وجهة النسخ الاحتياطي' },
      { en: 'If no data is recoverable, the session will need to be re-run', ar: 'اذا لم يمكن استرجاع اي بيانات، ستحتاج الجلسة لاعادة التشغيل' },
      { en: 'Document the data loss incident and root cause', ar: 'وثق حادثة فقدان البيانات والسبب الجذري' },
      { en: 'Consider increasing backup frequency if this occurs repeatedly', ar: 'فكر في زيادة تكرار النسخ الاحتياطي اذا تكرر هذا' },
    ],
  },
  {
    id: 'power-outage',
    title: { en: 'Power Outage', ar: 'انقطاع الكهرباء' },
    severity: 'critical',
    responseTime: { en: 'Immediate (begin shutdown within 60 seconds)', ar: 'فوري (ابدا الايقاف خلال 60 ثانية)' },
    responsible: { en: 'All Staff, Supervisor coordinates', ar: 'جميع الموظفين، المشرف ينسق' },
    steps: [
      { en: 'UPS should keep systems running for 10-15 minutes', ar: 'يجب ان تبقي وحدة الطاقة الاحتياطية الانظمة تعمل لمدة 10-15 دقيقة' },
      { en: 'Immediately save any work and gracefully end the session from Supervisor dashboard', ar: 'احفظ فورا اي عمل وانه الجلسة بشكل سلس من لوحة تحكم المشرف' },
      { en: 'If UPS is beeping, power down all stations in order: Operators first, then Supervisor', ar: 'اذا كانت وحدة الطاقة تصدر صوتا، اوقف جميع المحطات بالترتيب: المشغلون اولا، ثم المشرف' },
      { en: 'Do NOT force-shutdown during data writes', ar: 'لا تقم بايقاف قسري اثناء كتابة البيانات' },
      { en: 'After power is restored, check all PCs boot correctly', ar: 'بعد استعادة الكهرباء، تحقق من تشغيل جميع الحواسيب بشكل صحيح' },
      { en: 'Verify session data integrity in the Data/ folder', ar: 'تحقق من سلامة بيانات الجلسة في مجلد Data/' },
      { en: 'Test network connectivity before resuming training', ar: 'اختبر اتصال الشبكة قبل استئناف التدريب' },
    ],
  },
];

export const escalationPath: EscalationStep[] = [
  {
    level: 1,
    role: { en: 'Operator', ar: 'المشغل' },
    action: { en: 'Report issue to Supervisor', ar: 'ابلغ المشرف بالمشكلة' },
    color: 'bg-blue-500',
  },
  {
    level: 2,
    role: { en: 'Supervisor', ar: 'المشرف' },
    action: { en: 'Attempt to resolve using Troubleshooter', ar: 'حاول الحل باستخدام مستكشف الاخطاء' },
    color: 'bg-green-500',
  },
  {
    level: 3,
    role: { en: 'IT Staff', ar: 'فريق تقنية المعلومات' },
    action: { en: 'Hardware/software diagnostics', ar: 'تشخيص الاجهزة/البرمجيات' },
    color: 'bg-yellow-500',
  },
  {
    level: 4,
    role: { en: 'Training Manager', ar: 'مدير التدريب' },
    action: { en: 'Approve schedule changes, coordinate resources', ar: 'اعتماد تغييرات الجدول وتنسيق الموارد' },
    color: 'bg-orange-500',
  },
  {
    level: 5,
    role: { en: 'Vendor Support', ar: 'دعم المورد' },
    action: { en: 'Vendor escalation for software bugs', ar: 'تصعيد للمورد بشان اخطاء البرمجيات' },
    color: 'bg-red-500',
  },
];
