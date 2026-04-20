import type { BiText } from '../lib/t';

export interface GlossaryTermData {
  term: BiText;
  definition: BiText;
  category: BiText;
}

export const glossaryTerms: GlossaryTermData[] = [
  // Scoring
  {
    term: { en: 'Composite Score', ar: 'النتيجة المركبة' },
    definition: {
      en: 'Overall operator performance score (0-100) calculated as a weighted average of Detection Accuracy (40%), False Positives (20%), Timeliness (20%), and Attention & Gaze (20%).',
      ar: 'نتيجة الاداء الاجمالية للمشغل (0-100) تحسب كمتوسط مرجح لدقة الكشف (40%)، الانذارات الكاذبة (20%)، سرعة الاستجابة (20%)، والانتباه والنظر (20%).',
    },
    category: { en: 'Scoring', ar: 'التقييم' },
  },
  {
    term: { en: 'Detection Accuracy', ar: 'دقة الكشف' },
    definition: {
      en: 'Percentage of actual threats correctly identified by the operator. The highest-weighted scoring dimension at 40%.',
      ar: 'نسبة التهديدات الفعلية التي حددها المشغل بشكل صحيح. البعد الاعلى وزنا في التقييم بنسبة 40%.',
    },
    category: { en: 'Scoring', ar: 'التقييم' },
  },
  {
    term: { en: 'False Positive Rate', ar: 'معدل الانذارات الكاذبة' },
    definition: {
      en: 'Percentage of benign events incorrectly flagged as suspicious. Higher rates result in lower scores and indicate over-marking.',
      ar: 'نسبة الاحداث العادية التي تم تصنيفها خطا على انها مشبوهة. المعدلات الاعلى تؤدي الى نتائج اقل وتشير الى الافراط في التاشير.',
    },
    category: { en: 'Scoring', ar: 'التقييم' },
  },
  {
    term: { en: 'Timeliness', ar: 'سرعة الاستجابة' },
    definition: {
      en: 'Measures how quickly an operator responds to events and alarms during a scenario. Faster response times result in higher scores.',
      ar: 'يقيس مدى سرعة استجابة المشغل للاحداث والتنبيهات خلال السيناريو. اوقات الاستجابة الاسرع تؤدي الى نتائج اعلى.',
    },
    category: { en: 'Scoring', ar: 'التقييم' },
  },
  {
    term: { en: 'Attention & Gaze', ar: 'الانتباه والنظر' },
    definition: {
      en: 'Eye tracking metric that measures how well an operator distributes visual focus across all camera feeds, rather than fixating on one.',
      ar: 'مقياس تتبع العين الذي يقيس مدى توزيع المشغل لتركيزه البصري على جميع بثوث الكاميرات بدلا من التركيز على واحدة.',
    },
    category: { en: 'Scoring', ar: 'التقييم' },
  },
  {
    term: { en: 'Composite Score Sign-Off', ar: 'اعتماد النتيجة المركبة' },
    definition: {
      en: 'The minimum 70% composite score required to pass the onboarding sign-off assessment.',
      ar: 'الحد الادنى للنتيجة المركبة 70% المطلوب لاجتياز تقييم اعتماد التاهيل.',
    },
    category: { en: 'Scoring', ar: 'التقييم' },
  },
  {
    term: { en: 'Mean Time to Detect (MTTD)', ar: 'متوسط وقت الكشف (MTTD)' },
    definition: {
      en: 'Average time from when a threat becomes visible on camera to when the operator identifies and marks it.',
      ar: 'متوسط الوقت من ظهور التهديد على الكاميرا حتى تعرف المشغل عليه وتاشيره.',
    },
    category: { en: 'Scoring', ar: 'التقييم' },
  },
  {
    term: { en: 'Threat Detection Rate (TDR)', ar: 'معدل كشف التهديدات (TDR)' },
    definition: {
      en: 'Percentage of all planted threats in a scenario that the operator correctly identified.',
      ar: 'نسبة جميع التهديدات المزروعة في السيناريو التي حددها المشغل بشكل صحيح.',
    },
    category: { en: 'Scoring', ar: 'التقييم' },
  },
  // Technical
  {
    term: { en: 'PTZ', ar: 'PTZ' },
    definition: {
      en: 'Pan/Tilt/Zoom. Camera controls on the monitor widget. Drag inside the joystick area to pan (left/right) and tilt (up/down). Use the Zoom In and Zoom Out buttons to adjust the field of view. A Reset button returns the camera to its default position.',
      ar: 'تحريك/امالة/تكبير. ادوات التحكم بالكاميرا في اداة المراقبة. اسحب داخل منطقة عصا التحكم للتحريك (يمين/يسار) والامالة (اعلى/اسفل). استخدم ازرار التكبير والتصغير لضبط مجال الرؤية. زر اعادة الضبط يعيد الكاميرا لوضعها الافتراضي.',
    },
    category: { en: 'Technical', ar: 'تقني' },
  },
  {
    term: { en: 'NPC', ar: 'NPC' },
    definition: {
      en: 'Non-Player Character, AI-driven individuals in the VR scenarios that follow scripted behaviors (both normal and suspicious).',
      ar: 'شخصية غير قابلة للعب، افراد يتحكم فيهم الذكاء الاصطناعي في سيناريوهات الواقع الافتراضي ويتبعون سلوكيات مكتوبة (عادية ومشبوهة).',
    },
    category: { en: 'Technical', ar: 'تقني' },
  },
  {
    term: { en: 'OpenXR', ar: 'OpenXR' },
    definition: {
      en: 'Open standard for VR/AR application development. MCCVR uses OpenXR for cross-platform VR headset support.',
      ar: 'معيار مفتوح لتطوير تطبيقات الواقع الافتراضي/المعزز. يستخدم MCCVR معيار OpenXR لدعم نظارات الواقع الافتراضي عبر المنصات.',
    },
    category: { en: 'Technical', ar: 'تقني' },
  },
  {
    term: { en: 'Camera Feed', ar: 'بث الكاميرا' },
    definition: {
      en: 'A live or simulated video stream from a single CCTV camera. Operators monitor up to 4 feeds simultaneously on their display.',
      ar: 'بث فيديو مباشر او محاكى من كاميرا مراقبة واحدة. يراقب المشغلون حتى 4 بثوث في وقت واحد على شاشتهم.',
    },
    category: { en: 'Technical', ar: 'تقني' },
  },
  {
    term: { en: 'PTZ Preset', ar: 'اعداد PTZ المسبق' },
    definition: {
      en: 'A saved camera position (pan, tilt, zoom values) that an operator can quickly recall instead of manually repositioning.',
      ar: 'وضع كاميرا محفوظ (قيم التحريك والامالة والتكبير) يمكن للمشغل استدعاؤه بسرعة بدلا من اعادة الضبط يدويا.',
    },
    category: { en: 'Technical', ar: 'تقني' },
  },
  {
    term: { en: 'Session Replay', ar: 'اعادة تشغيل الجلسة' },
    definition: {
      en: 'Post-session feature that allows supervisors and operators to review a recorded scenario with all camera angles and operator actions.',
      ar: 'ميزة ما بعد الجلسة تتيح للمشرفين والمشغلين مراجعة سيناريو مسجل بجميع زوايا الكاميرات واجراءات المشغل.',
    },
    category: { en: 'Technical', ar: 'تقني' },
  },
  // Hardware
  {
    term: { en: 'EmotiBit', ar: 'EmotiBit' },
    definition: {
      en: 'Wrist-worn biometric sensor measuring heart rate (HR), electrodermal activity (EDA/skin conductance), and skin temperature during training sessions.',
      ar: 'مستشعر حيوي يرتدى على المعصم يقيس معدل نبض القلب (HR) والنشاط الكهربائي للجلد (EDA/التوصيل الكهربائي للجلد) ودرجة حرارة الجلد اثناء جلسات التدريب.',
    },
    category: { en: 'Hardware', ar: 'الاجهزة' },
  },
  {
    term: { en: 'HTC Vive Focus Vision', ar: 'HTC Vive Focus Vision' },
    definition: {
      en: 'The standalone VR headset used by operators during training. Supports eye tracking and connects to PCs via VIVE Hub.',
      ar: 'نظارة الواقع الافتراضي المستقلة التي يستخدمها المشغلون اثناء التدريب. تدعم تتبع العين وتتصل بالحاسوب عبر VIVE Hub.',
    },
    category: { en: 'Hardware', ar: 'الاجهزة' },
  },
  {
    term: { en: 'IPD (Interpupillary Distance)', ar: 'المسافة بين الحدقتين (IPD)' },
    definition: {
      en: 'The distance between the centers of your two pupils. The VR headset has a small dial (usually on the bottom) to adjust this. Setting it correctly makes the image sharp and reduces eye strain. The auto-IPD feature measures this for you, but you can fine-tune it manually.',
      ar: 'المسافة بين مركزي حدقتي العين. تحتوي نظارة الواقع الافتراضي على قرص صغير (عادة في الاسفل) لضبطها. الضبط الصحيح يجعل الصورة واضحة ويقلل اجهاد العين. ميزة القياس التلقائي تقيسها لك، لكن يمكنك الضبط الدقيق يدويا.',
    },
    category: { en: 'Hardware', ar: 'الاجهزة' },
  },
  {
    term: { en: 'Link Cable', ar: 'كابل الربط' },
    definition: {
      en: 'The USB cable that connects the VR headset to the PC. Must be plugged into a USB 3.0 port (usually blue) on the PC. Don\'t use USB hubs or extensions. If the headset isn\'t detected, try a different port or cable.',
      ar: 'كابل USB الذي يربط نظارة الواقع الافتراضي بالحاسوب. يجب توصيله بمنفذ USB 3.0 (عادة ازرق اللون) في الحاسوب. لا تستخدم موزعات USB او كابلات تمديد. اذا لم يتم اكتشاف النظارة، جرب منفذا او كابلا مختلفا.',
    },
    category: { en: 'Hardware', ar: 'الاجهزة' },
  },
  {
    term: { en: 'USB 3.0', ar: 'USB 3.0' },
    definition: {
      en: 'A high-speed USB port, usually marked with a blue color inside the connector. The Link Cable must use a USB 3.0 port for enough bandwidth. Older USB 2.0 ports (black/white) are too slow.',
      ar: 'منفذ USB عالي السرعة، عادة ما يكون مميزا باللون الازرق داخل الموصل. يجب ان يستخدم كابل الربط منفذ USB 3.0 لعرض نطاق كاف. منافذ USB 2.0 الاقدم (اسود/ابيض) بطيئة جدا.',
    },
    category: { en: 'Hardware', ar: 'الاجهزة' },
  },
  {
    term: { en: 'GPU (Graphics Processing Unit)', ar: 'وحدة معالجة الرسومات (GPU)' },
    definition: {
      en: 'The graphics card inside the PC that renders the VR environment. MCCVR requires at least an NVIDIA RTX 2060. You can check your GPU in Task Manager under the Performance tab.',
      ar: 'بطاقة الرسومات داخل الحاسوب التي تعرض بيئة الواقع الافتراضي. يتطلب MCCVR بطاقة NVIDIA RTX 2060 على الاقل. يمكنك التحقق من بطاقة الرسومات في مدير المهام تحت تبويب الاداء.',
    },
    category: { en: 'Hardware', ar: 'الاجهزة' },
  },
  {
    term: { en: 'Face Cushion', ar: 'وسادة الوجه' },
    definition: {
      en: 'The soft padding around the inside of the VR headset that rests against your face. Should be cleaned with antibacterial wipes between users and replaced when worn out.',
      ar: 'الحشوة الناعمة حول الجزء الداخلي من نظارة الواقع الافتراضي التي تستند على الوجه. يجب تنظيفها بمناديل مضادة للبكتيريا بين المستخدمين واستبدالها عند التلف.',
    },
    category: { en: 'Hardware', ar: 'الاجهزة' },
  },
  {
    term: { en: 'Proximity Sensor', ar: 'مستشعر القرب' },
    definition: {
      en: 'A small sensor inside the headset (near the lenses) that detects when someone is wearing it. If the screen goes black while the headset is on, the sensor may be blocked by hair or the headset fit.',
      ar: 'مستشعر صغير داخل النظارة (بالقرب من العدسات) يكتشف عندما يرتديها شخص ما. اذا اصبحت الشاشة سوداء اثناء ارتداء النظارة، قد يكون المستشعر محجوبا بالشعر او بسبب عدم ملاءمة النظارة.',
    },
    category: { en: 'Hardware', ar: 'الاجهزة' },
  },
  {
    term: { en: 'Vive Care', ar: 'Vive Care' },
    definition: {
      en: 'HTC\'s optional extended warranty program for Vive headsets. Covers display issues (dead pixels, burn-in), tracking sensor failures, and provides faster replacement shipping. Check the Hardware Inventory page for coverage status.',
      ar: 'برنامج الضمان الممتد الاختياري من HTC لنظارات Vive. يغطي مشاكل الشاشة (البكسلات الميتة، الاحتراق)، اعطال مستشعر التتبع، ويوفر شحن استبدال اسرع. تحقق من صفحة جرد الاجهزة لحالة التغطية.',
    },
    category: { en: 'Hardware', ar: 'الاجهزة' },
  },
  // Software
  {
    term: { en: 'VIVE Hub', ar: 'VIVE Hub' },
    definition: {
      en: 'Software application that manages HTC Vive Focus Vision headset connections and streaming to the PC.',
      ar: 'تطبيق برمجي يدير اتصالات نظارة HTC Vive Focus Vision والبث الى الحاسوب.',
    },
    category: { en: 'Software', ar: 'البرمجيات' },
  },
  {
    term: { en: 'SteamVR', ar: 'SteamVR' },
    definition: {
      en: 'Valve\'s VR runtime platform that interfaces between VR headsets and applications. Required for MCCVR operation.',
      ar: 'منصة تشغيل الواقع الافتراضي من Valve التي تربط بين نظارات الواقع الافتراضي والتطبيقات. مطلوبة لتشغيل MCCVR.',
    },
    category: { en: 'Software', ar: 'البرمجيات' },
  },
  {
    term: { en: 'Unreal Engine 5.6', ar: 'Unreal Engine 5.6' },
    definition: {
      en: 'The real-time 3D engine used to build the MCCVR training simulation. Handles rendering, networking, and VR integration.',
      ar: 'محرك العرض ثلاثي الابعاد المستخدم لبناء محاكاة تدريب MCCVR. يتولى العرض والشبكات وتكامل الواقع الافتراضي.',
    },
    category: { en: 'Software', ar: 'البرمجيات' },
  },
  {
    term: { en: 'EmotiBit Oscilloscope', ar: 'EmotiBit Oscilloscope' },
    definition: {
      en: 'The companion desktop application for the EmotiBit sensor. Must be opened on each operator PC before launching MCCVR. In the Oscilloscope, select the correct EmotiBit device under output devices and set the transfer mode to UDP so biometric data streams to the MCCVR application.',
      ar: 'التطبيق المرافق لمستشعر EmotiBit على سطح المكتب. يجب فتحه على حاسوب كل مشغل قبل تشغيل MCCVR. في التطبيق، اختر جهاز EmotiBit الصحيح ضمن اجهزة الاخراج واضبط وضع النقل على UDP لبث البيانات الحيوية الى تطبيق MCCVR.',
    },
    category: { en: 'Software', ar: 'البرمجيات' },
  },
  {
    term: { en: 'OpenXR Runtime', ar: 'OpenXR Runtime' },
    definition: {
      en: 'The software layer that connects VR applications to the headset. SteamVR must be set as the active OpenXR runtime for eye tracking to work. Check this in SteamVR Settings under the Developer section.',
      ar: 'طبقة البرمجيات التي تربط تطبيقات الواقع الافتراضي بالنظارة. يجب تعيين SteamVR كبيئة تشغيل OpenXR النشطة لعمل تتبع العين. تحقق من ذلك في اعدادات SteamVR تحت قسم المطور.',
    },
    category: { en: 'Software', ar: 'البرمجيات' },
  },
  {
    term: { en: 'Task Manager', ar: 'مدير المهام' },
    definition: {
      en: 'A Windows utility that shows running programs and system performance. Open it with Ctrl+Shift+Esc. Useful for checking if MCCVR is stuck in the background, monitoring GPU temperature, or seeing if the CPU/GPU is overloaded.',
      ar: 'اداة Windows تعرض البرامج قيد التشغيل واداء النظام. افتحها بالضغط على Ctrl+Shift+Esc. مفيدة للتحقق مما اذا كان MCCVR عالقا في الخلفية، ومراقبة درجة حرارة GPU، ومعرفة ما اذا كان المعالج/GPU محملا بشكل زائد.',
    },
    category: { en: 'Software', ar: 'البرمجيات' },
  },
  {
    term: { en: 'VSync', ar: 'VSync' },
    definition: {
      en: 'A graphics setting that synchronizes the frame rate with the monitor refresh rate. For VR, VSync should be turned OFF in the NVIDIA Control Panel, as it can add input lag and cause stuttering.',
      ar: 'اعداد رسومات يزامن معدل الاطارات مع معدل تحديث الشاشة. للواقع الافتراضي، يجب ايقاف VSync في لوحة تحكم NVIDIA لانه قد يضيف تاخرا في الادخال ويسبب تقطعا.',
    },
    category: { en: 'Software', ar: 'البرمجيات' },
  },
  {
    term: { en: 'GPU Throttling', ar: 'خنق GPU' },
    definition: {
      en: 'When a graphics card gets too hot (usually above 85 degrees C), it automatically slows down to prevent damage. This causes stuttering and lag in VR. Check GPU temperature in Task Manager under the Performance tab. Improve room ventilation if temps are high.',
      ar: 'عندما ترتفع حرارة بطاقة الرسومات كثيرا (عادة فوق 85 درجة مئوية)، تبطئ تلقائيا لمنع التلف. هذا يسبب تقطعا وتاخرا في الواقع الافتراضي. تحقق من درجة حرارة GPU في مدير المهام تحت تبويب الاداء. حسن تهوية الغرفة اذا كانت الحرارة مرتفعة.',
    },
    category: { en: 'Software', ar: 'البرمجيات' },
  },
  {
    term: { en: 'High Performance Power Plan', ar: 'خطة الطاقة عالية الاداء' },
    definition: {
      en: 'A Windows power setting that prevents the PC from saving energy by slowing down the CPU/GPU. For VR workstations, always set this. Go to Control Panel > Power Options > High Performance.',
      ar: 'اعداد طاقة في Windows يمنع الحاسوب من توفير الطاقة عن طريق ابطاء المعالج/GPU. لمحطات العمل بالواقع الافتراضي، اضبط هذا دائما. انتقل الى لوحة التحكم > خيارات الطاقة > اداء عال.',
    },
    category: { en: 'Software', ar: 'البرمجيات' },
  },
  // Biometrics
  {
    term: { en: 'EDA', ar: 'EDA' },
    definition: {
      en: 'Electrodermal Activity, a measure of skin conductance that indicates stress and arousal levels. Captured by the EmotiBit sensor.',
      ar: 'النشاط الكهربائي للجلد، مقياس للتوصيل الكهربائي للجلد يشير الى مستويات التوتر والاثارة. يلتقطه مستشعر EmotiBit.',
    },
    category: { en: 'Biometrics', ar: 'القياسات الحيوية' },
  },
  {
    term: { en: 'SCR', ar: 'SCR' },
    definition: {
      en: 'Skin Conductance Response, a rapid change in EDA indicating a stress reaction to a specific event.',
      ar: 'استجابة التوصيل الكهربائي للجلد، تغير سريع في EDA يشير الى رد فعل توتري تجاه حدث معين.',
    },
    category: { en: 'Biometrics', ar: 'القياسات الحيوية' },
  },
  {
    term: { en: 'Biometric Baseline', ar: 'خط الاساس الحيوي' },
    definition: {
      en: 'An operator\'s resting physiological measurements (heart rate, EDA) taken before a scenario begins, used as a reference point for detecting stress responses.',
      ar: 'القياسات الفسيولوجية للمشغل في حالة الراحة (معدل نبض القلب، EDA) التي تؤخذ قبل بدء السيناريو، وتستخدم كنقطة مرجعية لكشف استجابات التوتر.',
    },
    category: { en: 'Biometrics', ar: 'القياسات الحيوية' },
  },
  {
    term: { en: 'Heart Rate (HR)', ar: 'معدل نبض القلب (HR)' },
    definition: {
      en: 'Beats per minute measured by the EmotiBit sensor. Elevated HR during a scenario may indicate stress or heightened alertness.',
      ar: 'عدد النبضات في الدقيقة التي يقيسها مستشعر EmotiBit. ارتفاع HR اثناء السيناريو قد يشير الى التوتر او زيادة اليقظة.',
    },
    category: { en: 'Biometrics', ar: 'القياسات الحيوية' },
  },
  // Eye Tracking
  {
    term: { en: 'Fixation', ar: 'التثبيت البصري' },
    definition: {
      en: 'An eye tracking term for when the gaze remains relatively stable on a point of interest for a measurable duration.',
      ar: 'مصطلح في تتبع العين يشير الى بقاء النظر مستقرا نسبيا على نقطة اهتمام لمدة قابلة للقياس.',
    },
    category: { en: 'Eye Tracking', ar: 'تتبع العين' },
  },
  {
    term: { en: 'Saccade', ar: 'حركة العين السريعة' },
    definition: {
      en: 'Rapid eye movement between fixation points. Saccades greater than 3 degrees are detected by the eye tracking system.',
      ar: 'حركة سريعة للعين بين نقاط التثبيت. يكتشف نظام تتبع العين الحركات التي تتجاوز 3 درجات.',
    },
    category: { en: 'Eye Tracking', ar: 'تتبع العين' },
  },
  {
    term: { en: 'Heatmap', ar: 'خريطة حرارية' },
    definition: {
      en: 'Visual overlay showing where operators focused their gaze during a scenario. Hot spots indicate areas of high attention.',
      ar: 'طبقة بصرية تظهر اين ركز المشغلون نظرهم اثناء السيناريو. النقاط الساخنة تشير الى مناطق الانتباه العالي.',
    },
    category: { en: 'Eye Tracking', ar: 'تتبع العين' },
  },
  {
    term: { en: 'Alert Desensitization', ar: 'فقدان الحساسية للتنبيهات' },
    definition: {
      en: 'A decline in operator responsiveness to system alerts after repeated exposure, especially if many turn out to be false alarms.',
      ar: 'انخفاض في استجابة المشغل لتنبيهات النظام بعد التعرض المتكرر، خاصة اذا تبين ان كثيرا منها انذارات كاذبة.',
    },
    category: { en: 'Eye Tracking', ar: 'تتبع العين' },
  },
  // System
  {
    term: { en: 'Live Wall', ar: 'الجدار الحي' },
    definition: {
      en: 'Supervisor dashboard feature showing a grid of all camera feeds across the scenario for monitoring all operators simultaneously.',
      ar: 'ميزة في لوحة تحكم المشرف تعرض شبكة من جميع بثوث الكاميرات عبر السيناريو لمراقبة جميع المشغلين في وقت واحد.',
    },
    category: { en: 'System', ar: 'النظام' },
  },
  {
    term: { en: 'Falcon Eye', ar: 'عين الصقر' },
    definition: {
      en: 'Abu Dhabi\'s centralized AI surveillance system that monitors the city through thousands of cameras. MCCVR training prepares operators for Falcon Eye operations.',
      ar: 'نظام المراقبة المركزي بالذكاء الاصطناعي في ابوظبي الذي يراقب المدينة من خلال الاف الكاميرات. تدريب MCCVR يعد المشغلين لعمليات عين الصقر.',
    },
    category: { en: 'System', ar: 'النظام' },
  },
  {
    term: { en: 'ADMCC', ar: 'ADMCC' },
    definition: {
      en: 'Abu Dhabi Monitoring and Control Centre, the regulatory body and operator of surveillance systems across Abu Dhabi, established under Law No.5 of 2011.',
      ar: 'مركز ابوظبي للمراقبة والتحكم، الجهة التنظيمية والمشغلة لانظمة المراقبة في انحاء ابوظبي، تاسس بموجب القانون رقم 5 لسنة 2011.',
    },
    category: { en: 'System', ar: 'النظام' },
  },
  {
    term: { en: 'Lobby', ar: 'الردهة' },
    definition: {
      en: 'The waiting area inside the MCCVR application where operators connect before a training session begins. The supervisor creates the lobby first (in server mode), then operators join it and enter their name. The session starts only when the supervisor is ready.',
      ar: 'منطقة الانتظار داخل تطبيق MCCVR حيث يتصل المشغلون قبل بدء جلسة التدريب. ينشئ المشرف الردهة اولا (في وضع الخادم)، ثم ينضم المشغلون ويدخلون اسماءهم. تبدا الجلسة فقط عندما يكون المشرف جاهزا.',
    },
    category: { en: 'System', ar: 'النظام' },
  },
  // Training
  {
    term: { en: 'Scenario', ar: 'سيناريو' },
    definition: {
      en: 'A simulated CCTV monitoring environment set in a specific Abu Dhabi location (Airport, Embassy, Mall, Concert, Protest) with scripted events and threats.',
      ar: 'بيئة مراقبة CCTV محاكاة في موقع محدد في ابوظبي (مطار، سفارة، مركز تجاري، حفل، احتجاج) مع احداث وتهديدات مكتوبة.',
    },
    category: { en: 'Training', ar: 'التدريب' },
  },
  {
    term: { en: 'Shift Handover', ar: 'تسليم الوردية' },
    definition: {
      en: 'The process of briefing an incoming operator on active situations, ongoing monitoring, and any unresolved events before they take over a monitoring position.',
      ar: 'عملية اطلاع المشغل القادم على الاوضاع النشطة والمراقبة الجارية واي احداث لم تحل قبل ان يتولى موقع المراقبة.',
    },
    category: { en: 'Training', ar: 'التدريب' },
  },
  {
    term: { en: 'Sustained Performance Index', ar: 'مؤشر الاداء المستدام' },
    definition: {
      en: 'A measure of how an operator\'s detection accuracy and response time change over the duration of a session, used to identify attention fatigue.',
      ar: 'مقياس لكيفية تغير دقة كشف المشغل ووقت استجابته على مدار الجلسة، يستخدم لتحديد ارهاق الانتباه.',
    },
    category: { en: 'Training', ar: 'التدريب' },
  },
  // Network
  {
    term: { en: 'Windows Firewall', ar: 'جدار حماية Windows' },
    definition: {
      en: 'Built-in Windows security feature that controls which applications can send and receive network data. MCCVR needs specific ports open (TCP 7777, UDP 7780-7795, UDP 12346). If operators can\'t connect, the firewall is the first thing to check.',
      ar: 'ميزة امان مدمجة في Windows تتحكم في التطبيقات التي يمكنها ارسال واستقبال بيانات الشبكة. يحتاج MCCVR الى فتح منافذ محددة (TCP 7777، UDP 7780-7795، UDP 12346). اذا لم يتمكن المشغلون من الاتصال، فجدار الحماية هو اول شيء يجب التحقق منه.',
    },
    category: { en: 'Network', ar: 'الشبكة' },
  },
  {
    term: { en: 'TCP/UDP Ports', ar: 'منافذ TCP/UDP' },
    definition: {
      en: 'Numbered channels that applications use to communicate over a network. Think of them like radio frequencies. MCCVR uses TCP 7777 for the main session, UDP 7780-7795 for camera streams, and UDP 12346 for biometric data.',
      ar: 'قنوات مرقمة تستخدمها التطبيقات للتواصل عبر الشبكة. فكر فيها كترددات الراديو. يستخدم MCCVR المنفذ TCP 7777 للجلسة الرئيسية، UDP 7780-7795 لبث الكاميرات، وUDP 12346 للبيانات الحيوية.',
    },
    category: { en: 'Network', ar: 'الشبكة' },
  },
  {
    term: { en: 'Ping', ar: 'Ping' },
    definition: {
      en: 'A simple network test. Open Command Prompt and type "ping" followed by an IP address (e.g., "ping 192.168.1.100"). If you get replies, the connection is working. If it says "timed out," the two machines can\'t reach each other.',
      ar: 'اختبار شبكة بسيط. افتح موجه الاوامر واكتب "ping" متبوعا بعنوان IP (مثلا، "ping 192.168.1.100"). اذا حصلت على ردود، فالاتصال يعمل. اذا ظهرت رسالة "timed out"، فالجهازان لا يستطيعان الوصول لبعضهما.',
    },
    category: { en: 'Network', ar: 'الشبكة' },
  },
  {
    term: { en: 'Subnet', ar: 'الشبكة الفرعية' },
    definition: {
      en: 'A group of devices on the same local network. All MCCVR PCs must be on the same subnet, meaning the first three numbers of their IP addresses should match (e.g., 192.168.1.x). Check with the "ipconfig" command in Command Prompt.',
      ar: 'مجموعة من الاجهزة على نفس الشبكة المحلية. يجب ان تكون جميع حواسيب MCCVR على نفس الشبكة الفرعية، اي ان الارقام الثلاثة الاولى من عناوين IP يجب ان تتطابق (مثلا، 192.168.1.x). تحقق بامر "ipconfig" في موجه الاوامر.',
    },
    category: { en: 'Network', ar: 'الشبكة' },
  },
  {
    term: { en: 'Server.json', ar: 'Server.json' },
    definition: {
      en: 'The configuration file that tells MCCVR where to find the Supervisor. Located in Content/Configs/Server.json. On Operator PCs, the IP field should contain the Supervisor\'s IP address. On the Supervisor PC, the IP field should be empty.',
      ar: 'ملف الاعدادات الذي يخبر MCCVR بمكان المشرف. يقع في Content/Configs/Server.json. على حواسيب المشغلين، يجب ان يحتوي حقل IP على عنوان IP الخاص بالمشرف. على حاسوب المشرف، يجب ان يكون حقل IP فارغا.',
    },
    category: { en: 'Network', ar: 'الشبكة' },
  },
  {
    term: { en: 'Gigabit Ethernet', ar: 'Gigabit Ethernet' },
    definition: {
      en: 'A wired network connection capable of 1,000 Mbps. All MCCVR stations use Gigabit Ethernet cables plugged into a network switch. This is much faster and more reliable than wireless connections.',
      ar: 'اتصال شبكة سلكي بسرعة 1,000 ميجابت في الثانية. تستخدم جميع محطات MCCVR كابلات Gigabit Ethernet متصلة بمحول شبكة. هذا اسرع وموثوق اكثر من الاتصالات اللاسلكية.',
    },
    category: { en: 'Network', ar: 'الشبكة' },
  },
  // Roles
  {
    term: { en: 'Operator', ar: 'مشغل' },
    definition: {
      en: 'A CCTV monitoring trainee who uses VR headsets to practice surveillance in simulated scenarios.',
      ar: 'متدرب مراقبة CCTV يستخدم نظارات الواقع الافتراضي للتدرب على المراقبة في سيناريوهات محاكاة.',
    },
    category: { en: 'Roles', ar: 'الادوار' },
  },
  {
    term: { en: 'Supervisor', ar: 'مشرف' },
    definition: {
      en: 'The training session host who monitors all operators, manages scenarios, triggers events, and generates performance reports.',
      ar: 'مضيف جلسة التدريب الذي يراقب جميع المشغلين ويدير السيناريوهات ويطلق الاحداث وينشئ تقارير الاداء.',
    },
    category: { en: 'Roles', ar: 'الادوار' },
  },
  {
    term: { en: 'Facilitator', ar: 'ميسر' },
    definition: {
      en: 'The instructor who delivers the training curriculum, manages session flow, and conducts debriefs.',
      ar: 'المدرب الذي يقدم المنهج التدريبي ويدير سير الجلسة ويجري جلسات المراجعة.',
    },
    category: { en: 'Roles', ar: 'الادوار' },
  },
];
