import type { BiText } from '../lib/t';

export interface ScenarioData {
  id: string;
  name: BiText;
  venue: BiText;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  difficultyLabel: BiText;
  difficultyColor: string;
  description: BiText;
  objectives: BiText[];
  suspects: number;
  cameras: number;
  duration: string;
  threats: BiText[];
}

export const scenarios: ScenarioData[] = [
  {
    id: 'airport',
    name: { en: 'Scenario 1: Airport', ar: 'السيناريو 1: المطار' },
    venue: { en: 'Abu Dhabi International Airport, Arrivals Hall', ar: 'مطار ابوظبي الدولي، صالة الوصول' },
    icon: '\u{1F6EB}',
    difficulty: 'Beginner',
    difficultyLabel: { en: 'Beginner', ar: 'مبتدئ' },
    difficultyColor: 'bg-green-500/20 text-green-400',
    description: {
      en: 'Monitor the main entrance and arrivals hall for suspicious items and counter-surveillance activity. This is the introductory scenario designed for new operators.',
      ar: 'راقب المدخل الرئيسي وصالة الوصول بحثا عن عناصر مشبوهة ونشاط مراقبة مضادة. هذا هو السيناريو التمهيدي المصمم للمشغلين الجدد.',
    },
    objectives: [
      { en: 'Identify suspicious items left unattended', ar: 'تحديد العناصر المشبوهة المتروكة دون مراقبة' },
      { en: 'Detect counter-surveillance behavior', ar: 'كشف سلوك المراقبة المضادة' },
      { en: 'Monitor restricted access points', ar: 'مراقبة نقاط الوصول المحظورة' },
    ],
    suspects: 4,
    cameras: 6,
    duration: '3-5 minutes',
    threats: [
      { en: 'Unattended baggage', ar: 'امتعة متروكة' },
      { en: 'Suspicious loitering', ar: 'تسكع مشبوه' },
      { en: 'Restricted area breach', ar: 'اختراق منطقة محظورة' },
    ],
  },
  {
    id: 'embassy',
    name: { en: 'Scenario 2: Embassy', ar: 'السيناريو 2: السفارة' },
    venue: { en: 'Abu Dhabi, Chinese Embassy Compound', ar: 'ابوظبي، مجمع السفارة الصينية' },
    icon: '\u{1F3DB}\u{FE0F}',
    difficulty: 'Intermediate',
    difficultyLabel: { en: 'Intermediate', ar: 'متوسط' },
    difficultyColor: 'bg-yellow-500/20 text-yellow-400',
    description: {
      en: 'Monitor restricted access areas around the embassy compound. Focus on perimeter security and detecting unauthorized access attempts.',
      ar: 'راقب مناطق الوصول المحظورة حول مجمع السفارة. ركز على امن المحيط وكشف محاولات الوصول غير المصرح بها.',
    },
    objectives: [
      { en: 'Monitor perimeter security', ar: 'مراقبة امن المحيط' },
      { en: 'Detect unauthorized access attempts', ar: 'كشف محاولات الوصول غير المصرح بها' },
      { en: 'Track suspicious vehicle activity', ar: 'تتبع نشاط المركبات المشبوهة' },
    ],
    suspects: 4,
    cameras: 5,
    duration: '3-5 minutes',
    threats: [
      { en: 'Perimeter breach', ar: 'اختراق المحيط' },
      { en: 'Unauthorized vehicle', ar: 'مركبة غير مصرح بها' },
      { en: 'Surveillance photography', ar: 'تصوير استطلاعي' },
    ],
  },
  {
    id: 'mall',
    name: { en: 'Scenario 3: Shopping Mall', ar: 'السيناريو 3: المركز التجاري' },
    venue: { en: 'Abu Dhabi, Mall Complex', ar: 'ابوظبي، مجمع تجاري' },
    icon: '\u{1F3EC}',
    difficulty: 'Intermediate',
    difficultyLabel: { en: 'Intermediate', ar: 'متوسط' },
    difficultyColor: 'bg-yellow-500/20 text-yellow-400',
    description: {
      en: 'Monitor a crowded public shopping space with multiple levels and entry points. Challenge: distinguishing suspicious behavior in dense crowds.',
      ar: 'راقب مساحة تسوق عامة مزدحمة بمستويات ونقاط دخول متعددة. التحدي: تمييز السلوك المشبوه في الحشود الكثيفة.',
    },
    objectives: [
      { en: 'Identify shoplifting attempts', ar: 'تحديد محاولات السرقة من المتاجر' },
      { en: 'Monitor crowd density', ar: 'مراقبة كثافة الحشود' },
      { en: 'Detect aggressive behavior', ar: 'كشف السلوك العدواني' },
    ],
    suspects: 4,
    cameras: 5,
    duration: '3-5 minutes',
    threats: [
      { en: 'Theft', ar: 'سرقة' },
      { en: 'Aggressive behavior', ar: 'سلوك عدواني' },
      { en: 'Unattended item', ar: 'عنصر متروك' },
      { en: 'Crowd surge', ar: 'اندفاع الحشود' },
    ],
  },
  {
    id: 'concert',
    name: { en: 'Scenario 4: Concert (Etihad Park)', ar: 'السيناريو 4: حفل (الاتحاد بارك)' },
    venue: { en: 'Abu Dhabi, Etihad Park Arena', ar: 'ابوظبي، ساحة الاتحاد بارك' },
    icon: '\u{1F3B5}',
    difficulty: 'Advanced',
    difficultyLabel: { en: 'Advanced', ar: 'متقدم' },
    difficultyColor: 'bg-orange-500/20 text-orange-400',
    description: {
      en: 'Large crowd event at an outdoor concert venue. Operators must manage high crowd density, monitor multiple entry/exit points, and detect threats in a dynamic environment.',
      ar: 'حدث حشد كبير في مكان حفل خارجي. يجب على المشغلين ادارة كثافة الحشود العالية ومراقبة نقاط الدخول/الخروج المتعددة وكشف التهديدات في بيئة ديناميكية.',
    },
    objectives: [
      { en: 'Manage crowd flow monitoring', ar: 'ادارة مراقبة تدفق الحشود' },
      { en: 'Detect unauthorized area access', ar: 'كشف الوصول غير المصرح به للمناطق' },
      { en: 'Monitor for disturbances', ar: 'مراقبة الاضطرابات' },
    ],
    suspects: 5,
    cameras: 6,
    duration: '3-5 minutes',
    threats: [
      { en: 'Crowd crush risk', ar: 'خطر التدافع' },
      { en: 'Stage rush', ar: 'اقتحام المسرح' },
      { en: 'Unauthorized backstage access', ar: 'وصول غير مصرح به لخلف المسرح' },
      { en: 'Intoxicated individuals', ar: 'افراد في حالة سكر' },
    ],
  },
  {
    id: 'protest',
    name: { en: 'Scenario 5: Protest (Musaffah)', ar: 'السيناريو 5: احتجاج (مصفح)' },
    venue: { en: 'Abu Dhabi, Musaffah Industrial Area', ar: 'ابوظبي، منطقة مصفح الصناعية' },
    icon: '\u{270A}',
    difficulty: 'Advanced',
    difficultyLabel: { en: 'Advanced', ar: 'متقدم' },
    difficultyColor: 'bg-red-500/20 text-red-400',
    description: {
      en: 'High-tension protest scenario in an industrial area. The most challenging scenario requiring rapid threat assessment and multi-camera coordination under pressure.',
      ar: 'سيناريو احتجاج عالي التوتر في منطقة صناعية. السيناريو الاكثر تحديا يتطلب تقييم التهديدات السريع وتنسيق الكاميرات المتعددة تحت الضغط.',
    },
    objectives: [
      { en: 'Assess crowd escalation levels', ar: 'تقييم مستويات تصعيد الحشود' },
      { en: 'Identify agitators and leaders', ar: 'تحديد المحرضين والقادة' },
      { en: 'Monitor escape routes', ar: 'مراقبة طرق الهروب' },
      { en: 'Track police response coordination', ar: 'تتبع تنسيق استجابة الشرطة' },
    ],
    suspects: 5,
    cameras: 5,
    duration: '3-5 minutes',
    threats: [
      { en: 'Crowd escalation', ar: 'تصعيد الحشود' },
      { en: 'Property damage', ar: 'اضرار بالممتلكات' },
      { en: 'Violence', ar: 'عنف' },
      { en: 'Blockade of emergency access', ar: 'اغلاق مسارات الطوارئ' },
    ],
  },
];
