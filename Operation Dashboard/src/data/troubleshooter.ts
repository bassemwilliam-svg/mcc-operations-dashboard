import type { BiText } from '../lib/t';

export interface TsOption {
  label: BiText;
  nextId: string;
}

export interface TsNode {
  id: string;
  text: BiText;
  type: 'question' | 'solution' | 'escalate';
  options?: TsOption[];
}

export const troubleshootTree: Record<string, TsNode> = {
  // ── ROOT ──
  start: {
    id: 'start',
    type: 'question',
    text: { en: 'What type of issue are you experiencing?', ar: 'ما نوع المشكلة التي تواجهها؟' },
    options: [
      { label: { en: 'VR headset not connecting or not detected', ar: 'نظارة VR لا تتصل أو لا يتم اكتشافها' }, nextId: 'vr-1' },
      { label: { en: 'Eye tracking problems', ar: 'مشاكل في تتبع العين' }, nextId: 'eye-1' },
      { label: { en: 'VR display or comfort issues', ar: 'مشاكل في عرض VR أو الراحة' }, nextId: 'display-1' },
      { label: { en: 'Application won\'t launch or crashes', ar: 'التطبيق لا يعمل أو يتوقف فجأة' }, nextId: 'app-1' },
      { label: { en: 'Network or connectivity issue', ar: 'مشكلة في الشبكة أو الاتصال' }, nextId: 'net-1' },
      { label: { en: 'EmotiBit sensor problem', ar: 'مشكلة في مستشعر EmotiBit' }, nextId: 'emo-1' },
      { label: { en: 'Camera feeds missing or frozen', ar: 'بثوث الكاميرات مفقودة أو متجمدة' }, nextId: 'cam-1' },
      { label: { en: 'Session or data issues', ar: 'مشاكل في الجلسة أو البيانات' }, nextId: 'session-1' },
      { label: { en: 'Performance or lag', ar: 'مشاكل في الأداء أو التأخير' }, nextId: 'perf-1' },
      { label: { en: 'Headset maintenance (cleaning, charging, care)', ar: 'صيانة النظارة (التنظيف، الشحن، العناية)' }, nextId: 'maint-1' },
    ],
  },

  // ── VR HEADSET CONNECTION ──
  'vr-1': {
    id: 'vr-1', type: 'question',
    text: { en: 'Is the VR headset powered on? (Check the LED on the front)', ar: 'هل نظارة VR قيد التشغيل؟ (تحقق من مؤشر LED في الأمام)' },
    options: [
      { label: { en: 'No, headset is off or no LED', ar: 'لا، النظارة مطفأة أو لا يوجد مؤشر LED' }, nextId: 'vr-off' },
      { label: { en: 'Yes, headset is on', ar: 'نعم، النظارة تعمل' }, nextId: 'vr-2' },
    ],
  },
  'vr-off': {
    id: 'vr-off', type: 'solution',
    text: {
      en: 'The headset needs to be charged before each session. Plug in the charging cable and wait until the LED turns on. Press and hold the power button for 3 seconds to turn it on. If the headset was charged overnight and still won\'t power on, try a different charging cable. If nothing works, swap for a spare headset.',
      ar: 'يجب شحن النظارة قبل كل جلسة. وصّل كابل الشحن وانتظر حتى يضيء مؤشر LED. اضغط مع الاستمرار على زر الطاقة لمدة 3 ثوانٍ للتشغيل. إذا كانت النظارة مشحونة طوال الليل ولا تزال لا تعمل، جرّب كابل شحن مختلف. إذا لم ينفع شيء، استبدلها بنظارة احتياطية.',
    },
  },
  'vr-2': {
    id: 'vr-2', type: 'question',
    text: { en: 'Is VIVE Hub running on the PC? (Check the taskbar or system tray)', ar: 'هل VIVE Hub يعمل على الحاسوب؟ (تحقق من شريط المهام أو منطقة الإشعارات)' },
    options: [
      { label: { en: 'No, VIVE Hub is not running', ar: 'لا، VIVE Hub لا يعمل' }, nextId: 'vr-hub' },
      { label: { en: 'Yes, VIVE Hub is running', ar: 'نعم، VIVE Hub يعمل' }, nextId: 'vr-3' },
    ],
  },
  'vr-hub': {
    id: 'vr-hub', type: 'solution',
    text: {
      en: 'Open VIVE Hub from the Start Menu. SteamVR should launch automatically after that. If VIVE Hub won\'t open, try reinstalling it from the HTC website. Also make sure SteamVR is set as the active OpenXR runtime (open SteamVR settings and check under Developer).',
      ar: 'افتح VIVE Hub من قائمة ابدأ. يجب أن يفتح SteamVR تلقائيًا بعد ذلك. إذا لم يفتح VIVE Hub، جرّب إعادة تثبيته من موقع HTC. تأكد أيضًا أن SteamVR مضبوط كبيئة OpenXR النشطة (افتح إعدادات SteamVR وتحقق من قسم المطور).',
    },
  },
  'vr-3': {
    id: 'vr-3', type: 'question',
    text: { en: 'Is the Link Cable (USB) firmly connected at both ends?', ar: 'هل كابل Link Cable (USB) موصول بإحكام من الطرفين؟' },
    options: [
      { label: { en: 'No, or the cable seems loose', ar: 'لا، أو الكابل يبدو مرتخيًا' }, nextId: 'vr-cable' },
      { label: { en: 'Yes, cable is solid on both ends', ar: 'نعم، الكابل ثابت من الطرفين' }, nextId: 'vr-4' },
    ],
  },
  'vr-cable': {
    id: 'vr-cable', type: 'solution',
    text: {
      en: 'Disconnect and reconnect the Link Cable firmly on both the headset side and the PC side. Use a USB 3.0 port on the PC (usually the blue ones). Don\'t use a USB hub or extension. If the cable is damaged or kinked, swap it for a spare. Try a different USB port if the first one doesn\'t work.',
      ar: 'افصل كابل Link Cable وأعد توصيله بإحكام من جهة النظارة وجهة الحاسوب. استخدم منفذ USB 3.0 على الحاسوب (عادة المنافذ الزرقاء). لا تستخدم موزع USB أو كابل تمديد. إذا كان الكابل تالفًا أو مثنيًا، استبدله بآخر احتياطي. جرّب منفذ USB مختلفًا إذا لم يعمل الأول.',
    },
  },
  'vr-4': {
    id: 'vr-4', type: 'question',
    text: { en: 'Does VIVE Hub show the headset as "Connected"?', ar: 'هل يظهر VIVE Hub أن النظارة "متصلة"؟' },
    options: [
      { label: { en: 'No, it says "Not Detected" or similar', ar: 'لا، يظهر "لم يتم الاكتشاف" أو ما شابه' }, nextId: 'vr-notdetected' },
      { label: { en: 'Yes, connected but MCCVR doesn\'t see it', ar: 'نعم، متصلة لكن MCCVR لا يكتشفها' }, nextId: 'vr-mcc' },
    ],
  },
  'vr-notdetected': {
    id: 'vr-notdetected', type: 'solution',
    text: {
      en: 'Try these in order:\n\n1. Unplug the Link Cable, wait 10 seconds, plug it back in\n2. Restart VIVE Hub (close it from system tray, reopen)\n3. Restart SteamVR\n4. Try a different USB 3.0 port on the PC\n5. Restart the PC entirely\n\nIf none of these work, the USB port or cable may be faulty. Try a known-good cable from another station.',
      ar: 'جرّب الخطوات التالية بالترتيب:\n\n1. افصل كابل Link Cable، انتظر 10 ثوانٍ، ثم أعد توصيله\n2. أعد تشغيل VIVE Hub (أغلقه من منطقة الإشعارات، ثم افتحه مجددًا)\n3. أعد تشغيل SteamVR\n4. جرّب منفذ USB 3.0 مختلفًا على الحاسوب\n5. أعد تشغيل الحاسوب بالكامل\n\nإذا لم تنفع أي من هذه الخطوات، فقد يكون منفذ USB أو الكابل معطلًا. جرّب كابلًا صالحًا من محطة أخرى.',
    },
  },
  'vr-mcc': {
    id: 'vr-mcc', type: 'solution',
    text: {
      en: 'If VIVE Hub shows the headset but MCCVR doesn\'t detect it:\n\n1. Make sure SteamVR is set as the active OpenXR runtime\n2. Close MCCVR, close SteamVR, then reopen SteamVR first, then MCCVR\n3. Check that no other VR application is running (they can lock the headset)\n4. Look in the MCC logs folder (Saved/Logs) for error details\n\nIf this keeps happening, escalate to IT.',
      ar: 'إذا كان VIVE Hub يُظهر النظارة لكن MCCVR لا يكتشفها:\n\n1. تأكد أن SteamVR مضبوط كبيئة OpenXR النشطة\n2. أغلق MCCVR، ثم أغلق SteamVR، ثم افتح SteamVR أولًا، ثم MCCVR\n3. تأكد أنه لا يوجد تطبيق VR آخر قيد التشغيل (يمكن أن يحتجز النظارة)\n4. راجع مجلد سجلات MCC (Saved/Logs) لتفاصيل الأخطاء\n\nإذا استمرت المشكلة، صعّدها لقسم تقنية المعلومات.',
    },
  },

  // ── EYE TRACKING ──
  'eye-1': {
    id: 'eye-1', type: 'question',
    text: { en: 'What\'s the eye tracking issue?', ar: 'ما مشكلة تتبع العين؟' },
    options: [
      { label: { en: 'Eye tracking calibration fails', ar: 'فشل معايرة تتبع العين' }, nextId: 'eye-cal-fail' },
      { label: { en: 'Eye tracking seems inaccurate or drifting', ar: 'تتبع العين يبدو غير دقيق أو ينحرف' }, nextId: 'eye-inaccurate' },
      { label: { en: 'Eye tracking data not showing in reports', ar: 'بيانات تتبع العين لا تظهر في التقارير' }, nextId: 'eye-nodata' },
      { label: { en: 'Gaze heatmap is blank or wrong', ar: 'خريطة النظر الحرارية فارغة أو خاطئة' }, nextId: 'eye-heatmap' },
    ],
  },
  'eye-cal-fail': {
    id: 'eye-cal-fail', type: 'solution',
    text: {
      en: 'Eye tracking calibration tips:\n\n1. Make sure the headset sits properly on the face with eyes centered in the lenses\n2. Adjust the IPD (interpupillary distance) dial until the image is sharp in both eyes\n3. Keep your eyes open and look directly at each calibration dot as it appears\n4. The calibration takes about 15 seconds. Stay still during it\n5. If it fails repeatedly, clean the inside lenses with a dry microfiber cloth (smudges can interfere)\n6. Try removing and re-seating the headset, then calibrate again\n\nIf calibration keeps failing, the eye tracking cameras inside the headset may need cleaning or the headset may need servicing.',
      ar: 'نصائح لمعايرة تتبع العين:\n\n1. تأكد أن النظارة مثبتة بشكل صحيح على الوجه مع توسيط العينين في العدسات\n2. اضبط قرص IPD (المسافة بين الحدقتين) حتى تصبح الصورة واضحة في كلتا العينين\n3. أبقِ عينيك مفتوحتين وانظر مباشرة إلى كل نقطة معايرة عند ظهورها\n4. تستغرق المعايرة حوالي 15 ثانية. ابقَ ثابتًا خلالها\n5. إذا فشلت بشكل متكرر، نظّف العدسات الداخلية بقطعة قماش ألياف دقيقة جافة (البصمات قد تتداخل)\n6. جرّب إزالة النظارة وإعادة تثبيتها، ثم أعد المعايرة\n\nإذا استمر فشل المعايرة، فقد تحتاج كاميرات تتبع العين داخل النظارة للتنظيف أو النظارة للصيانة.',
    },
  },
  'eye-inaccurate': {
    id: 'eye-inaccurate', type: 'solution',
    text: {
      en: 'If eye tracking seems off or the gaze point doesn\'t match where you\'re looking:\n\n1. Re-run the calibration (headset Settings > Eye Tracking)\n2. Make sure the headset hasn\'t shifted on your face since calibration\n3. If you adjusted the IPD dial after calibrating, you need to recalibrate\n4. Check that the inside lenses are clean (fingerprints or fog affect tracking)\n5. The system has a confidence threshold of 0.6. If your eyes are partially closed or looking at extreme angles, tracking may drop out temporarily\n\nThis is normal and the system handles it. Attention scores are calculated from valid tracking data only.',
      ar: 'إذا كان تتبع العين غير دقيق أو نقطة النظر لا تتطابق مع مكان نظرك:\n\n1. أعد تشغيل المعايرة (إعدادات النظارة > تتبع العين)\n2. تأكد أن النظارة لم تنزلق على وجهك منذ المعايرة\n3. إذا عدّلت قرص IPD بعد المعايرة، تحتاج إعادة المعايرة\n4. تحقق من نظافة العدسات الداخلية (البصمات أو الضباب يؤثران على التتبع)\n5. يستخدم النظام حد ثقة 0.6. إذا كانت عيناك مغلقتين جزئيًا أو تنظران بزوايا حادة، قد ينقطع التتبع مؤقتًا\n\nهذا طبيعي ويتعامل معه النظام. درجات الانتباه تُحسب من بيانات التتبع الصالحة فقط.',
    },
  },
  'eye-nodata': {
    id: 'eye-nodata', type: 'solution',
    text: {
      en: 'If reports show no eye tracking data:\n\n1. Check that SteamVR is set as the active OpenXR runtime (this is required for eye tracking to work)\n2. Verify that eye tracking was calibrated before the session started\n3. If neither of those is the issue, MCCVR falls back to simulated eye tracking (based on where the head is pointing). This still produces attention data, but less precise than hardware eye tracking\n4. Look at the session logs for any eye tracking errors\n\nFor future sessions, always verify eye tracking calibration during the pre-session checklist.',
      ar: 'إذا لم تظهر بيانات تتبع العين في التقارير:\n\n1. تحقق أن SteamVR مضبوط كبيئة OpenXR النشطة (مطلوب لعمل تتبع العين)\n2. تأكد أن تتبع العين تمت معايرته قبل بدء الجلسة\n3. إذا لم تكن المشكلة في أي منهما، يلجأ MCCVR لتتبع عين محاكى (بناءً على اتجاه الرأس). هذا ينتج بيانات انتباه لكنها أقل دقة من تتبع العين بالأجهزة\n4. راجع سجلات الجلسة للبحث عن أخطاء تتبع العين\n\nللجلسات المستقبلية، تحقق دائمًا من معايرة تتبع العين أثناء قائمة التحقق قبل الجلسة.',
    },
  },
  'eye-heatmap': {
    id: 'eye-heatmap', type: 'solution',
    text: {
      en: 'If the gaze heatmap on the supervisor dashboard is blank:\n\n1. Heatmaps only populate after the scenario starts (not during the lobby)\n2. Check that the operator\'s session is still active\n3. Try switching to a different operator and back\n4. If heatmaps are consistently blank for one operator, that operator\'s eye tracking may not be calibrated\n\nIf the heatmap shows data but in the wrong location, the operator may have switched cameras after the heatmap started recording. This is expected behavior.',
      ar: 'إذا كانت خريطة النظر الحرارية على لوحة تحكم المشرف فارغة:\n\n1. الخرائط الحرارية تمتلئ فقط بعد بدء السيناريو (ليس أثناء غرفة الانتظار)\n2. تحقق أن جلسة المشغل لا تزال نشطة\n3. جرّب التبديل إلى مشغل مختلف ثم العودة\n4. إذا كانت الخرائط الحرارية فارغة باستمرار لمشغل واحد، فقد لا يكون تتبع العين لديه معايرًا\n\nإذا أظهرت الخريطة الحرارية بيانات لكن في موقع خاطئ، فقد يكون المشغل بدّل الكاميرات بعد بدء التسجيل. هذا سلوك متوقع.',
    },
  },

  // ── VR DISPLAY AND COMFORT ──
  'display-1': {
    id: 'display-1', type: 'question',
    text: { en: 'What\'s the display or comfort issue?', ar: 'ما مشكلة العرض أو الراحة؟' },
    options: [
      { label: { en: 'Image is blurry or out of focus', ar: 'الصورة ضبابية أو غير واضحة' }, nextId: 'display-blur' },
      { label: { en: 'Lenses are foggy', ar: 'العدسات ضبابية' }, nextId: 'display-fog' },
      { label: { en: 'Screen is black but headset is on', ar: 'الشاشة سوداء لكن النظارة تعمل' }, nextId: 'display-black' },
      { label: { en: 'Operator feels dizzy or nauseous', ar: 'المشغل يشعر بدوار أو غثيان' }, nextId: 'display-sick' },
      { label: { en: 'View is spinning or tracking is wrong', ar: 'الرؤية تدور أو التتبع خاطئ' }, nextId: 'display-spin' },
      { label: { en: 'Display has dead pixels or artifacts', ar: 'الشاشة بها بكسلات ميتة أو تشوهات' }, nextId: 'display-pixels' },
    ],
  },
  'display-blur': {
    id: 'display-blur', type: 'solution',
    text: {
      en: 'Blurry image fix:\n\n1. Adjust the IPD (interpupillary distance) dial on the headset until text looks sharp. The auto-IPD feature should set this for you, but manual fine-tuning helps\n2. Make sure the headset is seated properly on the face, not tilted up or down\n3. Tighten the top strap so the headset doesn\'t sag\n4. Clean the lenses with a dry microfiber cloth (the one that came with the headset)\n5. Never use liquid cleaners or wet wipes on the lenses\n\nIf one eye is clear and the other isn\'t, the headset may be sitting at an angle. Adjust the side straps.',
      ar: 'إصلاح الصورة الضبابية:\n\n1. اضبط قرص IPD (المسافة بين الحدقتين) على النظارة حتى يصبح النص واضحًا. ميزة IPD التلقائية يجب أن تضبط ذلك، لكن الضبط اليدوي الدقيق يساعد\n2. تأكد أن النظارة مثبتة بشكل صحيح على الوجه، ليست مائلة للأعلى أو الأسفل\n3. شدّ الحزام العلوي حتى لا تتدلى النظارة\n4. نظّف العدسات بقطعة قماش ألياف دقيقة جافة (المرفقة مع النظارة)\n5. لا تستخدم أبدًا منظفات سائلة أو مناديل مبللة على العدسات\n\nإذا كانت عين واحدة واضحة والأخرى لا، فقد تكون النظارة مائلة. اضبط الأحزمة الجانبية.',
    },
  },
  'display-fog': {
    id: 'display-fog', type: 'solution',
    text: {
      en: 'Fogging is common, especially when the headset is cold and the room is warm:\n\n1. Let the headset warm up for about 5 minutes before putting it on\n2. If it fogs up mid-session, tilt the headset away from the face briefly to let air circulate\n3. Use only a dry microfiber cloth to wipe the lenses. Never use liquid cleaners\n4. In humid conditions, consider running the room\'s AC a bit cooler before the session\n5. Anti-fog inserts are available for VR headsets if this is a recurring problem',
      ar: 'التكثّف شائع، خاصة عندما تكون النظارة باردة والغرفة دافئة:\n\n1. اترك النظارة تسخن لمدة 5 دقائق تقريبًا قبل ارتدائها\n2. إذا تكثّفت أثناء الجلسة، أمِل النظارة بعيدًا عن الوجه لفترة وجيزة للسماح بتدوير الهواء\n3. استخدم فقط قطعة قماش ألياف دقيقة جافة لمسح العدسات. لا تستخدم منظفات سائلة أبدًا\n4. في الظروف الرطبة، فكّر في تشغيل مكيف الغرفة على درجة أبرد قبل الجلسة\n5. ملحقات مانعة للتكثّف متوفرة لنظارات VR إذا كانت هذه مشكلة متكررة',
    },
  },
  'display-black': {
    id: 'display-black', type: 'solution',
    text: {
      en: 'If the headset is powered on (LED active) but the display is black:\n\n1. Check the Link Cable connection on both ends\n2. Make sure SteamVR is running and shows the headset as connected\n3. Check if the headset has gone to sleep (put it on your head or wave your hand over the proximity sensor)\n4. Restart SteamVR\n5. If using VIVE Hub streaming, verify the stream is active\n\nIf the display flickers between black and the image, the Link Cable may be damaged. Try swapping it.',
      ar: 'إذا كانت النظارة قيد التشغيل (مؤشر LED نشط) لكن الشاشة سوداء:\n\n1. تحقق من توصيل Link Cable من الطرفين\n2. تأكد أن SteamVR يعمل ويُظهر أن النظارة متصلة\n3. تحقق مما إذا كانت النظارة في وضع السكون (ضعها على رأسك أو حرّك يدك فوق مستشعر القرب)\n4. أعد تشغيل SteamVR\n5. إذا كنت تستخدم بث VIVE Hub، تحقق من أن البث نشط\n\nإذا كانت الشاشة تتقطع بين الأسود والصورة، فقد يكون كابل Link Cable تالفًا. جرّب استبداله.',
    },
  },
  'display-sick': {
    id: 'display-sick', type: 'solution',
    text: {
      en: 'If an operator feels dizzy, nauseous, or uncomfortable:\n\n1. Remove the headset immediately. Don\'t wait for them to push through it\n2. Have them sit down in a well-ventilated area\n3. Provide water and let them rest for at least 15 minutes\n4. Do NOT force them back into VR during this session\n5. If symptoms last more than 30 minutes, recommend they see medical staff\n\nFor future sessions:\n- Start with shorter VR periods and build up gradually\n- Make sure the room isn\'t too warm\n- Ensure the headset IPD is set correctly (wrong IPD causes eye strain)\n- Some people are more susceptible to VR discomfort. This is normal and not a failure',
      ar: 'إذا شعر المشغل بدوار أو غثيان أو انزعاج:\n\n1. أزل النظارة فورًا. لا تنتظر حتى يتحمّل\n2. اجعله يجلس في منطقة جيدة التهوية\n3. قدّم ماءً واتركه يرتاح لمدة 15 دقيقة على الأقل\n4. لا تُجبره على العودة لـ VR خلال هذه الجلسة\n5. إذا استمرت الأعراض أكثر من 30 دقيقة، أوصِ بزيارة الطاقم الطبي\n\nللجلسات المستقبلية:\n- ابدأ بفترات VR أقصر وزدها تدريجيًا\n- تأكد أن الغرفة ليست حارة جدًا\n- تأكد أن إعداد IPD على النظارة صحيح (IPD خاطئ يسبب إجهاد العين)\n- بعض الأشخاص أكثر عرضة لانزعاج VR. هذا طبيعي وليس فشلًا',
    },
  },
  'display-spin': {
    id: 'display-spin', type: 'solution',
    text: {
      en: 'If the VR view is spinning, drifting, or the floor level seems wrong:\n\n1. Close the MCCVR application\n2. In SteamVR, reset the seated position (SteamVR Settings > Reset Seated Position)\n3. Make sure there are no reflective surfaces near the headset (mirrors, glossy monitors) as these can confuse tracking\n4. Check that the Link Cable isn\'t being pulled or twisted\n5. Restart SteamVR and relaunch MCCVR\n\nIf the problem persists, the headset\'s internal tracking sensors may need recalibration. Escalate to IT.',
      ar: 'إذا كانت رؤية VR تدور أو تنحرف أو مستوى الأرضية يبدو خاطئًا:\n\n1. أغلق تطبيق MCCVR\n2. في SteamVR، أعد ضبط وضع الجلوس (إعدادات SteamVR > إعادة ضبط وضع الجلوس)\n3. تأكد من عدم وجود أسطح عاكسة بالقرب من النظارة (مرايا، شاشات لامعة) لأنها قد تربك التتبع\n4. تحقق من أن كابل Link Cable لا يُسحب أو يُلوى\n5. أعد تشغيل SteamVR وافتح MCCVR مجددًا\n\nإذا استمرت المشكلة، فقد تحتاج مستشعرات التتبع الداخلية للنظارة إعادة معايرة. صعّد المشكلة لقسم تقنية المعلومات.',
    },
  },
  'display-pixels': {
    id: 'display-pixels', type: 'escalate',
    text: {
      en: 'Dead pixels or persistent visual artifacts (colored lines, flickering patches) indicate a hardware issue with the display panel.\n\n1. Note which eye (left, right, or both) is affected\n2. Note the location and size of the issue\n3. Take a photo through the lens if possible\n4. Swap the operator to a different headset for the current session\n5. Tag the faulty headset and report to IT\n\nIf the headset is under warranty (check Hardware Inventory for dates), this should be covered. If extended Vive Care is active, you can get an advanced replacement shipped within 2 days.',
      ar: 'البكسلات الميتة أو التشوهات البصرية المستمرة (خطوط ملونة، بقع وامضة) تشير إلى مشكلة في عتاد لوحة العرض.\n\n1. سجّل أي عين متأثرة (يسرى، يمنى، أو كلتاهما)\n2. سجّل موقع وحجم المشكلة\n3. التقط صورة من خلال العدسة إن أمكن\n4. انقل المشغل إلى نظارة مختلفة للجلسة الحالية\n5. ضع علامة على النظارة المعطلة وأبلغ قسم تقنية المعلومات\n\nإذا كانت النظارة تحت الضمان (تحقق من مواعيد الضمان)، يجب أن يغطي ذلك. إذا كان ضمان Vive Care الممتد نشطًا، يمكن شحن بديل متقدم خلال يومين.',
    },
  },

  // ── APPLICATION ──
  'app-1': {
    id: 'app-1', type: 'question',
    text: { en: 'Is the application showing an error message?', ar: 'هل يعرض التطبيق رسالة خطأ؟' },
    options: [
      { label: { en: 'Yes, there\'s an error on screen', ar: 'نعم، يوجد خطأ على الشاشة' }, nextId: 'app-error' },
      { label: { en: 'No, it just doesn\'t start', ar: 'لا، فقط لا يبدأ' }, nextId: 'app-2' },
      { label: { en: 'It was running but crashed mid-session', ar: 'كان يعمل لكنه توقف أثناء الجلسة' }, nextId: 'app-crash' },
    ],
  },
  'app-error': {
    id: 'app-error', type: 'solution',
    text: {
      en: 'Take a screenshot of the error and send it to IT. Common errors and their fixes:\n\n- "Missing DLL" or "VCRUNTIME" error: Install Visual C++ Redistributable 2022 from Microsoft\n- "GPU not supported" or "DirectX error": Update GPU drivers. The GPU must support DirectX 12 with Shader Model 6\n- "Access denied" or permission error: Right-click MCCVR and select "Run as Administrator"\n- "Port already in use": Another application is using port 7777. Check Task Manager for conflicts\n\nAfter fixing, restart the application.',
      ar: 'التقط لقطة شاشة للخطأ وأرسلها لقسم تقنية المعلومات. الأخطاء الشائعة وحلولها:\n\n- خطأ "Missing DLL" أو "VCRUNTIME": ثبّت Visual C++ Redistributable 2022 من Microsoft\n- خطأ "GPU not supported" أو "DirectX error": حدّث تعريفات GPU. يجب أن تدعم البطاقة DirectX 12 مع Shader Model 6\n- خطأ "Access denied" أو صلاحيات: انقر بزر الفأرة الأيمن على MCCVR واختر "تشغيل كمسؤول"\n- خطأ "Port already in use": تطبيق آخر يستخدم المنفذ 7777. تحقق من مدير المهام للتعارضات\n\nبعد الإصلاح، أعد تشغيل التطبيق.',
    },
  },
  'app-2': {
    id: 'app-2', type: 'question',
    text: { en: 'Is the MCCVR process visible in Task Manager? (Check the Details tab for "MCCVR")', ar: 'هل عملية MCCVR مرئية في مدير المهام؟ (تحقق من تبويب التفاصيل عن "MCCVR")' },
    options: [
      { label: { en: 'Yes, it\'s running but nothing appears on screen', ar: 'نعم، يعمل لكن لا شيء يظهر على الشاشة' }, nextId: 'app-hidden' },
      { label: { en: 'No, it\'s not there at all', ar: 'لا، غير موجود إطلاقًا' }, nextId: 'app-3' },
    ],
  },
  'app-hidden': {
    id: 'app-hidden', type: 'solution',
    text: {
      en: 'The application may be stuck from a previous crash. End the "MCCVR" process in Task Manager (Details tab > right-click > End Process), then relaunch. If this happens often, check the Saved/Logs folder for crash reports and forward them to IT.',
      ar: 'قد يكون التطبيق عالقًا من توقف سابق. أنهِ عملية "MCCVR" في مدير المهام (تبويب التفاصيل > نقر يمين > إنهاء العملية)، ثم أعد التشغيل. إذا تكرر ذلك، راجع مجلد Saved/Logs لتقارير الأعطال وأرسلها لقسم تقنية المعلومات.',
    },
  },
  'app-3': {
    id: 'app-3', type: 'solution',
    text: {
      en: 'If the application won\'t start at all:\n\n1. Right-click and Run as Administrator\n2. Check that GPU drivers are current (minimum: RTX 2060)\n3. Verify Windows Firewall allows MCCVR through\n4. Check that antivirus isn\'t quarantining the executable\n5. Make sure there\'s enough free disk space (the Data folder grows with each session)\n6. Try launching from the command line to see any error output\n\nIf none of these help, escalate to IT with the contents of the Saved/Logs folder.',
      ar: 'إذا لم يبدأ التطبيق إطلاقًا:\n\n1. انقر بزر الفأرة الأيمن وشغّل كمسؤول\n2. تحقق من أن تعريفات GPU محدّثة (الحد الأدنى: RTX 2060)\n3. تحقق أن جدار حماية Windows يسمح بمرور MCCVR\n4. تحقق أن مضاد الفيروسات لا يحجز الملف التنفيذي\n5. تأكد من وجود مساحة كافية على القرص (مجلد Data يكبر مع كل جلسة)\n6. جرّب التشغيل من سطر الأوامر لرؤية أي مخرجات خطأ\n\nإذا لم تنفع أي من هذه الحلول، صعّد لقسم تقنية المعلومات مع محتويات مجلد Saved/Logs.',
    },
  },
  'app-crash': {
    id: 'app-crash', type: 'solution',
    text: {
      en: 'If MCCVR crashed during a session:\n\n1. Don\'t panic. Session data auto-saves every 30 seconds, so most data is preserved\n2. Check the Data/<SessionTimestamp>/ folder to confirm files exist\n3. Check the Saved/Logs/ folder for the crash report\n4. Relaunch the application\n5. If the Supervisor PC crashed, all operators will disconnect. Create a new session after relaunch\n6. If only an Operator PC crashed, other operators are unaffected. Just have that operator rejoin\n\nCommon crash causes: GPU overheating (check temperature), out of memory (close other apps), driver issues (update GPU drivers).',
      ar: 'إذا توقف MCCVR أثناء الجلسة:\n\n1. لا تقلق. بيانات الجلسة تُحفظ تلقائيًا كل 30 ثانية، لذا معظم البيانات محفوظة\n2. تحقق من مجلد Data/<SessionTimestamp>/ للتأكد من وجود الملفات\n3. راجع مجلد Saved/Logs/ لتقرير العطل\n4. أعد تشغيل التطبيق\n5. إذا توقف حاسوب المشرف، سينقطع جميع المشغلين. أنشئ جلسة جديدة بعد إعادة التشغيل\n6. إذا توقف حاسوب مشغل واحد فقط، باقي المشغلين لا يتأثرون. فقط اجعل ذلك المشغل يعيد الانضمام\n\nأسباب التوقف الشائعة: ارتفاع حرارة GPU (تحقق من الحرارة)، نفاد الذاكرة (أغلق التطبيقات الأخرى)، مشاكل التعريفات (حدّث تعريفات GPU).',
    },
  },

  // ── NETWORK ──
  'net-1': {
    id: 'net-1', type: 'question',
    text: { en: 'What\'s the network issue?', ar: 'ما مشكلة الشبكة؟' },
    options: [
      { label: { en: 'Operators can\'t connect to the Supervisor session', ar: 'المشغلون لا يستطيعون الاتصال بجلسة المشرف' }, nextId: 'net-join' },
      { label: { en: 'Ethernet cable or switch problem', ar: 'مشكلة في كابل Ethernet أو المحول' }, nextId: 'net-cable' },
      { label: { en: 'Intermittent disconnections during session', ar: 'انقطاعات متقطعة أثناء الجلسة' }, nextId: 'net-drop' },
      { label: { en: 'Supervisor can\'t see operator camera feeds', ar: 'المشرف لا يستطيع رؤية بثوث كاميرات المشغلين' }, nextId: 'net-feeds' },
    ],
  },
  'net-join': {
    id: 'net-join', type: 'question',
    text: { en: 'Can you ping the Supervisor PC from an Operator PC? (Open Command Prompt and type: ping <supervisor_ip>)', ar: 'هل يمكنك عمل ping لحاسوب المشرف من حاسوب مشغل؟ (افتح موجه الأوامر واكتب: ping <supervisor_ip>)' },
    options: [
      { label: { en: 'Ping fails or times out', ar: 'فشل Ping أو انتهت المهلة' }, nextId: 'net-noping' },
      { label: { en: 'Ping works but still can\'t join', ar: 'Ping يعمل لكن لا يمكن الانضمام' }, nextId: 'net-ports' },
    ],
  },
  'net-noping': {
    id: 'net-noping', type: 'solution',
    text: {
      en: 'If you can\'t ping the Supervisor:\n\n1. Verify both PCs are on the same network subnet (run "ipconfig" on both and compare the first three numbers of the IP address)\n2. Check that all Ethernet cables are connected to the same switch\n3. Check the port LEDs on the switch (green = connected)\n4. Temporarily disable Windows Firewall on both machines to test\n5. If the Supervisor has multiple network adapters, it may be listening on the wrong one. Use the -MULTIHOME=<correct_ip> flag when launching MCCVR',
      ar: 'إذا لم تستطع عمل ping للمشرف:\n\n1. تحقق أن كلا الحاسوبين على نفس الشبكة الفرعية (شغّل "ipconfig" على كليهما وقارن الأرقام الثلاثة الأولى من عنوان IP)\n2. تأكد أن جميع كابلات Ethernet متصلة بنفس المحول\n3. تحقق من مؤشرات LED على المحول (أخضر = متصل)\n4. عطّل جدار حماية Windows مؤقتًا على كلا الجهازين للاختبار\n5. إذا كان للمشرف عدة محولات شبكة، فقد يستمع على المحول الخاطئ. استخدم علامة -MULTIHOME=<correct_ip> عند تشغيل MCCVR',
    },
  },
  'net-ports': {
    id: 'net-ports', type: 'solution',
    text: {
      en: 'If ping works but the operator can\'t join the session:\n\n1. Check Server.json on the Operator PC (Content/Configs/Server.json). The IP must match the Supervisor\'s actual LAN IP, and PORT should be 7777\n2. Check Server.json on the Supervisor PC. The IP field should be empty (empty tells it to act as host)\n3. Make sure the Supervisor has created the scenario session before operators try to join\n4. Check Windows Firewall: TCP 7777 must be allowed inbound on the Supervisor\n5. Verify no other application is using port 7777\n6. Try restarting MCCVR on both sides',
      ar: 'إذا كان ping يعمل لكن المشغل لا يستطيع الانضمام:\n\n1. تحقق من Server.json على حاسوب المشغل (Content/Configs/Server.json). يجب أن يتطابق IP مع عنوان LAN الفعلي للمشرف، و PORT يجب أن يكون 7777\n2. تحقق من Server.json على حاسوب المشرف. حقل IP يجب أن يكون فارغًا (الفارغ يعني أنه يعمل كمضيف)\n3. تأكد أن المشرف أنشأ جلسة السيناريو قبل محاولة المشغلين الانضمام\n4. تحقق من جدار حماية Windows: يجب السماح بـ TCP 7777 كاتصال وارد على حاسوب المشرف\n5. تحقق أنه لا يوجد تطبيق آخر يستخدم المنفذ 7777\n6. جرّب إعادة تشغيل MCCVR على كلا الجهازين',
    },
  },
  'net-cable': {
    id: 'net-cable', type: 'solution',
    text: {
      en: 'Reconnect the Ethernet cable at both ends (PC and switch). Check the port LED on the switch. Green = connected, no light = problem.\n\nIf the LED won\'t light up:\n1. Try a different port on the switch\n2. Try a different cable\n3. Check the Ethernet port on the PC for damage or bent pins\n\nAll operator PCs must use wired Ethernet. The system is not designed for wireless connections.',
      ar: 'أعد توصيل كابل Ethernet من الطرفين (الحاسوب والمحول). تحقق من مؤشر LED على المحول. أخضر = متصل، لا ضوء = مشكلة.\n\nإذا لم يضيء المؤشر:\n1. جرّب منفذًا مختلفًا على المحول\n2. جرّب كابلًا مختلفًا\n3. تحقق من منفذ Ethernet على الحاسوب بحثًا عن تلف أو دبابيس مثنية\n\nجميع حواسيب المشغلين يجب أن تستخدم Ethernet سلكي. النظام غير مصمم للاتصالات اللاسلكية.',
    },
  },
  'net-drop': {
    id: 'net-drop', type: 'solution',
    text: {
      en: 'Intermittent disconnections during a session:\n\n1. Check all cable connections. A loose cable is the most common cause\n2. Look at the switch. Are any port LEDs flickering? That usually means a bad cable\n3. Make sure no one is unplugging or moving cables during the session\n4. Check if the switch is overheating (feel the case). Switches in enclosed spaces can overheat\n5. If one specific station keeps dropping, swap its cable and port\n\nIf disconnections happen across multiple stations, the switch itself may be failing. Escalate to IT.',
      ar: 'انقطاعات متقطعة أثناء الجلسة:\n\n1. تحقق من جميع توصيلات الكابلات. الكابل المرتخي هو السبب الأكثر شيوعًا\n2. انظر إلى المحول. هل أي مؤشرات LED تومض؟ هذا يعني عادة كابلًا تالفًا\n3. تأكد أنه لا أحد يفصل أو يحرك الكابلات أثناء الجلسة\n4. تحقق مما إذا كان المحول يسخن (تحسّس الغلاف). المحولات في الأماكن المغلقة قد تسخن\n5. إذا كانت محطة معينة تنقطع باستمرار، بدّل كابلها ومنفذها\n\nإذا حدثت الانقطاعات عبر محطات متعددة، فقد يكون المحول نفسه يتعطل. صعّد لقسم تقنية المعلومات.',
    },
  },
  'net-feeds': {
    id: 'net-feeds', type: 'solution',
    text: {
      en: 'If the Supervisor can\'t see operator camera feeds:\n\n1. Make sure UDP ports 7780-7795 are open on the Supervisor PC\'s firewall\n2. Camera streams only start once the training session is active (not during the lobby)\n3. Check network bandwidth. Each camera stream sends JPEG frames, so multiple operators need decent bandwidth. Use Gigabit Ethernet\n4. If one specific operator\'s feed is missing, restart MCCVR on that operator\'s PC\n5. If all feeds are missing, restart MCCVR on the Supervisor PC',
      ar: 'إذا لم يستطع المشرف رؤية بثوث كاميرات المشغلين:\n\n1. تأكد أن منافذ UDP 7780-7795 مفتوحة على جدار حماية حاسوب المشرف\n2. بثوث الكاميرات تبدأ فقط عند بدء جلسة التدريب (ليس أثناء غرفة الانتظار)\n3. تحقق من سعة الشبكة. كل بث كاميرا يرسل إطارات JPEG، لذا عدة مشغلين يحتاجون سعة جيدة. استخدم Gigabit Ethernet\n4. إذا كان بث مشغل معين مفقودًا، أعد تشغيل MCCVR على حاسوب ذلك المشغل\n5. إذا كانت جميع البثوث مفقودة، أعد تشغيل MCCVR على حاسوب المشرف',
    },
  },

  // ── EMOTIBIT ──
  'emo-1': {
    id: 'emo-1', type: 'question',
    text: { en: 'What\'s the EmotiBit LED showing?', ar: 'ماذا يُظهر مؤشر LED لمستشعر EmotiBit؟' },
    options: [
      { label: { en: 'No LED at all, sensor seems dead', ar: 'لا يوجد مؤشر LED إطلاقًا، المستشعر يبدو ميتًا' }, nextId: 'emo-dead' },
      { label: { en: 'Red LED', ar: 'مؤشر LED أحمر' }, nextId: 'emo-red' },
      { label: { en: 'Blinking LED', ar: 'مؤشر LED يومض' }, nextId: 'emo-blink' },
      { label: { en: 'Green LED but no data in MCCVR', ar: 'مؤشر LED أخضر لكن لا بيانات في MCCVR' }, nextId: 'emo-nodata' },
      { label: { en: 'Data looks wrong or spiky', ar: 'البيانات تبدو خاطئة أو متذبذبة' }, nextId: 'emo-baddata' },
    ],
  },
  'emo-dead': {
    id: 'emo-dead', type: 'solution',
    text: {
      en: 'The battery is likely depleted.\n\n1. Remove the battery, wait 10 seconds, reinsert it\n2. Press and hold the power button for 3 seconds\n3. If using rechargeable batteries, charge for at least 30 minutes before retrying\n4. If the sensor still won\'t power on, swap it for a spare from the supply shelf\n\nRemember: sessions can run without biometric data. Don\'t hold up the whole group for one sensor.',
      ar: 'البطارية على الأرجح نفدت.\n\n1. أزل البطارية، انتظر 10 ثوانٍ، ثم أعد إدخالها\n2. اضغط مع الاستمرار على زر الطاقة لمدة 3 ثوانٍ\n3. إذا كنت تستخدم بطاريات قابلة للشحن، اشحنها 30 دقيقة على الأقل قبل المحاولة مجددًا\n4. إذا لم يعمل المستشعر، استبدله بآخر احتياطي من رف المستلزمات\n\nتذكّر: الجلسات يمكن أن تعمل بدون بيانات حيوية. لا تؤخّر المجموعة كلها بسبب مستشعر واحد.',
    },
  },
  'emo-red': {
    id: 'emo-red', type: 'solution',
    text: {
      en: 'Red LED means low battery or an error.\n\n1. Replace or recharge the battery\n2. If the red LED stays on after a fresh battery, the sensor may need a reset. Remove the battery, wait 30 seconds, reinsert\n3. If it still shows red, swap for a spare sensor and tag this one for IT to inspect',
      ar: 'المؤشر الأحمر يعني بطارية منخفضة أو خطأ.\n\n1. استبدل البطارية أو أعد شحنها\n2. إذا بقي المؤشر أحمر بعد بطارية جديدة، قد يحتاج المستشعر لإعادة ضبط. أزل البطارية، انتظر 30 ثانية، ثم أعد إدخالها\n3. إذا استمر الأحمر، استبدله بمستشعر احتياطي وضع علامة على هذا لفحصه من قبل تقنية المعلومات',
    },
  },
  'emo-blink': {
    id: 'emo-blink', type: 'solution',
    text: {
      en: 'A blinking LED usually means the sensor is searching for a connection.\n\n1. Check that the EmotiBit is on the same local network as the PC\n2. Verify the config.txt on the SD card has the correct network credentials\n3. Common config.txt issues: double file extensions (config.txt.txt), wrong network name, invalid JSON format\n4. The EmotiBit only supports 2.4 GHz networks, not 5 GHz\n5. If config.txt looks correct, try ejecting and reinserting the SD card\n\nOnce connected, the LED should turn solid green.',
      ar: 'المؤشر الوامض يعني عادة أن المستشعر يبحث عن اتصال.\n\n1. تحقق أن EmotiBit على نفس الشبكة المحلية مع الحاسوب\n2. تأكد أن ملف config.txt على بطاقة SD يحتوي بيانات الشبكة الصحيحة\n3. مشاكل config.txt الشائعة: امتدادات ملف مزدوجة (config.txt.txt)، اسم شبكة خاطئ، تنسيق JSON غير صالح\n4. EmotiBit يدعم فقط شبكات 2.4 GHz، وليس 5 GHz\n5. إذا كان config.txt يبدو صحيحًا، جرّب إخراج بطاقة SD وإعادة إدخالها\n\nبمجرد الاتصال، يجب أن يتحول المؤشر إلى أخضر ثابت.',
    },
  },
  'emo-nodata': {
    id: 'emo-nodata', type: 'solution',
    text: {
      en: 'Green LED means the EmotiBit is connected and streaming. If MCC still shows no biometric data:\n\n1. Check that UDP port 12346 is open in Windows Firewall on the Operator PC\n2. Make sure the wrist strap is snug. Loose contact = no skin conductance readings\n3. Restart the MCCVR application\n4. Verify the EmotiBit Oscilloscope app is running and set to stream to 127.0.0.1:12346\n\nNote: biometric data is supplementary. Sessions work fine without it. Don\'t delay the group.',
      ar: 'المؤشر الأخضر يعني أن EmotiBit متصل ويبث. إذا لم يظهر MCCVR بيانات حيوية:\n\n1. تحقق أن منفذ UDP 12346 مفتوح في جدار حماية Windows على حاسوب المشغل\n2. تأكد أن سوار المعصم محكم. تلامس فضفاض = لا قراءات للتوصيل الكهربائي للجلد\n3. أعد تشغيل تطبيق MCCVR\n4. تأكد أن تطبيق EmotiBit Oscilloscope يعمل ومضبوط للبث إلى 127.0.0.1:12346\n\nملاحظة: البيانات الحيوية تكميلية. الجلسات تعمل بشكل جيد بدونها. لا تؤخّر المجموعة.',
    },
  },
  'emo-baddata': {
    id: 'emo-baddata', type: 'solution',
    text: {
      en: 'If heart rate or skin conductance readings look abnormal (constant spikes, flatlines, or impossible values):\n\n1. Check the wrist strap fit. It should be snug but not tight. The sensor must have good skin contact\n2. Move the sensor slightly on the wrist. Some positions give better readings than others\n3. Dry skin can affect EDA readings. The operator can lightly dampen their wrist\n4. If the operator is moving a lot, motion artifacts can cause spiky data. This is normal\n5. The system filters out obviously bad data points, so occasional spikes won\'t affect the final analysis\n\nIf readings are consistently wrong across multiple sessions, the sensor may need replacing.',
      ar: 'إذا كانت قراءات معدل القلب أو التوصيل الكهربائي للجلد تبدو غير طبيعية (قمم مستمرة، خطوط مسطحة، أو قيم مستحيلة):\n\n1. تحقق من ملاءمة سوار المعصم. يجب أن يكون محكمًا لكن ليس ضيقًا. يجب أن يكون للمستشعر تلامس جيد مع الجلد\n2. حرّك المستشعر قليلًا على المعصم. بعض المواضع تعطي قراءات أفضل من غيرها\n3. الجلد الجاف يمكن أن يؤثر على قراءات EDA. يمكن للمشغل ترطيب معصمه قليلًا\n4. إذا كان المشغل يتحرك كثيرًا، فإن تشويش الحركة يمكن أن يسبب بيانات متذبذبة. هذا طبيعي\n5. النظام يستبعد نقاط البيانات السيئة بوضوح، لذا القمم العرضية لن تؤثر على التحليل النهائي\n\nإذا كانت القراءات خاطئة باستمرار عبر عدة جلسات، قد يحتاج المستشعر للاستبدال.',
    },
  },

  // ── CAMERA FEEDS ──
  'cam-1': {
    id: 'cam-1', type: 'question',
    text: { en: 'Where are camera feeds missing?', ar: 'أين بثوث الكاميرات مفقودة؟' },
    options: [
      { label: { en: 'In the operator\'s VR view', ar: 'في عرض VR الخاص بالمشغل' }, nextId: 'cam-operator' },
      { label: { en: 'On the supervisor\'s Live Wall', ar: 'على الجدار المباشر للمشرف' }, nextId: 'cam-supervisor' },
      { label: { en: 'Feeds are visible but frozen or laggy', ar: 'البثوث مرئية لكنها متجمدة أو متأخرة' }, nextId: 'cam-frozen' },
    ],
  },
  'cam-operator': {
    id: 'cam-operator', type: 'question',
    text: { en: 'Has the scenario fully loaded? (Check if you\'re past the lobby)', ar: 'هل تم تحميل السيناريو بالكامل؟ (تحقق إذا تجاوزت غرفة الانتظار)' },
    options: [
      { label: { en: 'Still loading or in lobby', ar: 'لا يزال يُحمّل أو في غرفة الانتظار' }, nextId: 'cam-loading' },
      { label: { en: 'Scenario is running but feeds are blank', ar: 'السيناريو يعمل لكن البثوث فارغة' }, nextId: 'cam-blank' },
    ],
  },
  'cam-loading': {
    id: 'cam-loading', type: 'solution',
    text: {
      en: 'Camera feeds only appear once the scenario is running. The Concert and Protest scenarios are the largest and can take 30-60 seconds to load. Wait for the loading to finish. If you\'re stuck in the lobby, check with the Supervisor to make sure they\'ve started the scenario.',
      ar: 'بثوث الكاميرات تظهر فقط عند تشغيل السيناريو. سيناريوهات الحفل والمظاهرة هي الأكبر وقد تستغرق 30-60 ثانية للتحميل. انتظر انتهاء التحميل. إذا كنت عالقًا في غرفة الانتظار، تحقق مع المشرف للتأكد من بدء السيناريو.',
    },
  },
  'cam-blank': {
    id: 'cam-blank', type: 'solution',
    text: {
      en: 'If the scenario is running but camera feeds are blank:\n\n1. Try switching to a different camera slot and then back\n2. Check GPU usage in Task Manager. If it\'s at 100%, the system is overloaded\n3. Close any unnecessary applications on the PC\n4. Restart the MCCVR application and rejoin the session\n\nIf this happens consistently on one station, that PC may not meet minimum specs. Check that it has at least an RTX 2060.',
      ar: 'إذا كان السيناريو يعمل لكن بثوث الكاميرات فارغة:\n\n1. جرّب التبديل إلى شاشة كاميرا مختلفة ثم العودة\n2. تحقق من استخدام GPU في مدير المهام. إذا كان 100%، فالنظام محمّل بشكل زائد\n3. أغلق أي تطبيقات غير ضرورية على الحاسوب\n4. أعد تشغيل تطبيق MCCVR وأعد الانضمام للجلسة\n\nإذا حدث ذلك باستمرار على محطة واحدة، فقد لا يفي ذلك الحاسوب بالمواصفات الدنيا. تحقق أنه يحتوي على RTX 2060 على الأقل.',
    },
  },
  'cam-supervisor': {
    id: 'cam-supervisor', type: 'solution',
    text: {
      en: 'If the Supervisor\'s Live Wall shows no feeds:\n\n1. Make sure at least one operator is connected and the scenario is running\n2. Check that UDP ports 7780-7795 are open on the Supervisor PC\n3. Verify network bandwidth (Gigabit Ethernet is required for multiple simultaneous streams)\n4. Try clicking on individual operator panels to force a refresh\n5. Restart MCCVR on the Supervisor PC if nothing appears after 60 seconds',
      ar: 'إذا لم يعرض الجدار المباشر للمشرف أي بثوث:\n\n1. تأكد أن مشغلًا واحدًا على الأقل متصل والسيناريو يعمل\n2. تحقق أن منافذ UDP 7780-7795 مفتوحة على حاسوب المشرف\n3. تحقق من سعة الشبكة (Gigabit Ethernet مطلوب لعدة بثوث متزامنة)\n4. جرّب النقر على لوحات المشغلين الفردية لفرض التحديث\n5. أعد تشغيل MCCVR على حاسوب المشرف إذا لم يظهر شيء بعد 60 ثانية',
    },
  },
  'cam-frozen': {
    id: 'cam-frozen', type: 'solution',
    text: {
      en: 'If feeds are visible but frozen or stuttering:\n\n1. This is almost always a GPU or network bottleneck\n2. Check GPU temperature. Throttling starts around 85 degrees C\n3. Close all other applications\n4. If the problem is on the Supervisor\'s Live Wall, there may be too many simultaneous streams. Try viewing fewer operators at once\n5. Check the network switch for overloaded ports\n6. Set Windows power plan to "High Performance" if it isn\'t already',
      ar: 'إذا كانت البثوث مرئية لكنها متجمدة أو متقطعة:\n\n1. هذا دائمًا تقريبًا بسبب عنق زجاجة في GPU أو الشبكة\n2. تحقق من حرارة GPU. الاختناق يبدأ عند حوالي 85 درجة مئوية\n3. أغلق جميع التطبيقات الأخرى\n4. إذا كانت المشكلة على الجدار المباشر للمشرف، فقد يكون هناك عدد كبير جدًا من البثوث المتزامنة. جرّب عرض عدد أقل من المشغلين\n5. تحقق من محول الشبكة بحثًا عن منافذ محملة بشكل زائد\n6. اضبط خطة طاقة Windows على "أداء عالٍ" إذا لم تكن كذلك',
    },
  },

  // ── SESSION AND DATA ──
  'session-1': {
    id: 'session-1', type: 'question',
    text: { en: 'What\'s the session issue?', ar: 'ما مشكلة الجلسة؟' },
    options: [
      { label: { en: 'Can\'t create or start a scenario', ar: 'لا أستطيع إنشاء أو بدء سيناريو' }, nextId: 'session-create' },
      { label: { en: 'Session data is missing after a run', ar: 'بيانات الجلسة مفقودة بعد التشغيل' }, nextId: 'session-data' },
      { label: { en: 'Reports won\'t generate', ar: 'التقارير لا تُنشأ' }, nextId: 'rep-1' },
      { label: { en: 'Replay system isn\'t working', ar: 'نظام الإعادة لا يعمل' }, nextId: 'session-replay' },
    ],
  },
  'session-create': {
    id: 'session-create', type: 'solution',
    text: {
      en: 'If the Supervisor can\'t create a scenario session:\n\n1. Make sure Server.json on the Supervisor PC has an empty IP field and PORT set to 7777\n2. Check that no other instance of MCCVR is already running (Task Manager)\n3. Verify TCP port 7777 isn\'t used by another application\n4. Try running MCCVR as Administrator\n5. If the scenario selection screen shows no scenarios, verify the ScenarioDefinitions folder exists and contains the JSON files\n\nIf operators were connected and the Supervisor restarts, all operators need to relaunch and rejoin.',
      ar: 'إذا لم يستطع المشرف إنشاء جلسة سيناريو:\n\n1. تأكد أن Server.json على حاسوب المشرف يحتوي حقل IP فارغًا و PORT مضبوط على 7777\n2. تحقق أنه لا يوجد نسخة أخرى من MCCVR قيد التشغيل (مدير المهام)\n3. تأكد أن منفذ TCP 7777 لا يستخدمه تطبيق آخر\n4. جرّب تشغيل MCCVR كمسؤول\n5. إذا لم تظهر سيناريوهات في شاشة الاختيار، تحقق من وجود مجلد ScenarioDefinitions واحتوائه على ملفات JSON\n\nإذا كان المشغلون متصلين وأعاد المشرف التشغيل، يحتاج جميع المشغلين لإعادة التشغيل والانضمام.',
    },
  },
  'session-data': {
    id: 'session-data', type: 'solution',
    text: {
      en: 'If session data is missing after a run:\n\n1. Check the Data/<SessionTimestamp>/ folder on the Supervisor PC. Each session creates a timestamped folder\n2. Data flushes every 30 seconds. If the app crashed in the first 30 seconds, no data may have been written\n3. Check disk space. If the drive is full, data writes will fail silently\n4. Check folder permissions. The Data/ folder must be writable\n5. Some antivirus programs block rapid file creation. Add MCCVR to the exclusions list\n\nFor critical sessions, always verify the Data folder is populated before shutting down.',
      ar: 'إذا كانت بيانات الجلسة مفقودة بعد التشغيل:\n\n1. تحقق من مجلد Data/<SessionTimestamp>/ على حاسوب المشرف. كل جلسة تنشئ مجلدًا بطابع زمني\n2. البيانات تُفرّغ كل 30 ثانية. إذا توقف التطبيق في أول 30 ثانية، قد لا تكون بيانات قد كُتبت\n3. تحقق من مساحة القرص. إذا كان القرص ممتلئًا، فإن كتابة البيانات ستفشل بصمت\n4. تحقق من صلاحيات المجلد. مجلد Data/ يجب أن يكون قابلًا للكتابة\n5. بعض برامج مضاد الفيروسات تحظر إنشاء الملفات السريع. أضف MCCVR لقائمة الاستثناءات\n\nللجلسات الحرجة، تحقق دائمًا من امتلاء مجلد Data قبل الإغلاق.',
    },
  },
  'rep-1': {
    id: 'rep-1', type: 'solution',
    text: {
      en: 'If reports won\'t generate:\n\n1. Make sure the scenario was ended properly from the Supervisor dashboard (don\'t force-quit)\n2. Wait at least 30 seconds after ending before generating. Data needs time to flush\n3. Check that session data exists in the Data/ folder\n4. Verify there\'s enough disk space for the PDF output\n5. Try clicking "Generate Report" again. Sometimes the first attempt times out\n6. Check that the TrainingSystem plugin is loaded (look in the application logs)\n\nIf the PDF still won\'t generate, the raw data is in the Data folder and can be processed manually. Escalate to IT.',
      ar: 'إذا لم تُنشأ التقارير:\n\n1. تأكد أن السيناريو أُنهي بشكل صحيح من لوحة تحكم المشرف (لا تُغلق بالقوة)\n2. انتظر 30 ثانية على الأقل بعد الإنهاء قبل الإنشاء. البيانات تحتاج وقتًا للتفريغ\n3. تحقق من وجود بيانات الجلسة في مجلد Data/\n4. تأكد من وجود مساحة كافية على القرص لمخرجات PDF\n5. جرّب النقر على "إنشاء التقرير" مجددًا. أحيانًا تنتهي مهلة المحاولة الأولى\n6. تحقق من تحميل إضافة TrainingSystem (راجع سجلات التطبيق)\n\nإذا لم يُنشأ ملف PDF، فإن البيانات الخام موجودة في مجلد Data ويمكن معالجتها يدويًا. صعّد لقسم تقنية المعلومات.',
    },
  },
  'session-replay': {
    id: 'session-replay', type: 'solution',
    text: {
      en: 'If the replay system isn\'t working:\n\n1. Replays require a completed session with saved data. Check the Data/ folder\n2. Open the Dashboard map from the main menu (not the training scenario)\n3. Select the session and operator you want to review\n4. If the timeline is blank, the recording may not have saved properly\n5. Replay is CPU/GPU-intensive. Close other applications for smooth playback\n\nNote: replays show camera feeds, operator actions, gaze data, and biometrics from the original session.',
      ar: 'إذا لم يعمل نظام الإعادة:\n\n1. الإعادات تتطلب جلسة مكتملة مع بيانات محفوظة. تحقق من مجلد Data/\n2. افتح خريطة لوحة التحكم من القائمة الرئيسية (ليس سيناريو التدريب)\n3. اختر الجلسة والمشغل الذي تريد مراجعته\n4. إذا كان الخط الزمني فارغًا، فقد لا يكون التسجيل حُفظ بشكل صحيح\n5. الإعادة تستهلك موارد CPU/GPU بكثافة. أغلق التطبيقات الأخرى للتشغيل السلس\n\nملاحظة: الإعادات تعرض بثوث الكاميرات وإجراءات المشغل وبيانات النظر والقياسات الحيوية من الجلسة الأصلية.',
    },
  },

  // ── PERFORMANCE ──
  'perf-1': {
    id: 'perf-1', type: 'question',
    text: { en: 'Where are you seeing lag or poor performance?', ar: 'أين تلاحظ التأخير أو ضعف الأداء؟' },
    options: [
      { label: { en: 'In VR (low frame rate, stuttering)', ar: 'في VR (معدل إطارات منخفض، تقطع)' }, nextId: 'perf-vr' },
      { label: { en: 'On the Supervisor dashboard', ar: 'على لوحة تحكم المشرف' }, nextId: 'perf-supervisor' },
      { label: { en: 'Application is slow to start or load scenarios', ar: 'التطبيق بطيء في البدء أو تحميل السيناريوهات' }, nextId: 'perf-loading' },
    ],
  },
  'perf-vr': {
    id: 'perf-vr', type: 'solution',
    text: {
      en: 'VR requires a solid frame rate or operators will feel sick. Try these:\n\n1. Close all other applications (especially browsers, Slack, Teams)\n2. Make sure GPU drivers are up to date\n3. Check GPU temperature in Task Manager (Performance tab > GPU). Throttling happens around 85 degrees C\n4. Set Windows power plan to "High Performance"\n5. Make sure VSync is OFF in NVIDIA Control Panel\n6. The PC needs at least an RTX 2060. RTX 3070+ is recommended for the Concert and Protest scenarios\n7. If the room is hot, improve ventilation. Hot PCs throttle their GPU\n\nIf none of these help and the hardware meets specs, escalate to IT.',
      ar: 'VR يتطلب معدل إطارات ثابتًا وإلا سيشعر المشغلون بالغثيان. جرّب ما يلي:\n\n1. أغلق جميع التطبيقات الأخرى (خاصة المتصفحات، Slack، Teams)\n2. تأكد أن تعريفات GPU محدّثة\n3. تحقق من حرارة GPU في مدير المهام (تبويب الأداء > GPU). الاختناق يحدث عند حوالي 85 درجة مئوية\n4. اضبط خطة طاقة Windows على "أداء عالٍ"\n5. تأكد أن VSync معطّل في لوحة تحكم NVIDIA\n6. الحاسوب يحتاج RTX 2060 على الأقل. RTX 3070+ موصى بها لسيناريوهات الحفل والمظاهرة\n7. إذا كانت الغرفة حارة، حسّن التهوية. الحواسيب الحارة تختنق GPU الخاصة بها\n\nإذا لم تنفع أي من هذه الحلول وكانت الأجهزة تفي بالمواصفات، صعّد لقسم تقنية المعلومات.',
    },
  },
  'perf-supervisor': {
    id: 'perf-supervisor', type: 'solution',
    text: {
      en: 'The Supervisor PC handles all operator connections, camera streams, biometric data, and the dashboard simultaneously. If it\'s lagging:\n\n1. Close all unnecessary applications\n2. The Supervisor PC should have the same or better specs as operator PCs\n3. Monitoring 8 operators at once is GPU-intensive. If the Live Wall is slow, try viewing fewer operators simultaneously\n4. Check network bandwidth. With 8 operators streaming camera data, Gigabit Ethernet is a must\n5. Disable any unnecessary dashboard panels (biometrics, heatmaps) if you don\'t need them during this session',
      ar: 'حاسوب المشرف يتعامل مع جميع اتصالات المشغلين وبثوث الكاميرات والبيانات الحيوية ولوحة التحكم في وقت واحد. إذا كان متأخرًا:\n\n1. أغلق جميع التطبيقات غير الضرورية\n2. حاسوب المشرف يجب أن يكون بنفس مواصفات حواسيب المشغلين أو أفضل\n3. مراقبة 8 مشغلين في وقت واحد تستهلك GPU بكثافة. إذا كان الجدار المباشر بطيئًا، جرّب عرض عدد أقل من المشغلين\n4. تحقق من سعة الشبكة. مع 8 مشغلين يبثون بيانات الكاميرا، Gigabit Ethernet ضروري\n5. عطّل أي لوحات غير ضرورية (القياسات الحيوية، الخرائط الحرارية) إذا لم تحتجها خلال هذه الجلسة',
    },
  },
  'perf-loading': {
    id: 'perf-loading', type: 'solution',
    text: {
      en: 'Slow loading times:\n\n1. First launch after a restart is always slower (assets need to load into memory)\n2. The Concert and Protest scenarios are the largest. 30-60 seconds to load is normal\n3. Check that the application is installed on an SSD, not a mechanical hard drive\n4. Verify available disk space (at least 10 GB free for comfortable operation)\n5. If Windows is running updates in the background, wait for them to finish\n6. Fragmented drives slow everything down. Run Windows disk optimization if needed',
      ar: 'أوقات تحميل بطيئة:\n\n1. أول تشغيل بعد إعادة التشغيل يكون دائمًا أبطأ (الأصول تحتاج للتحميل في الذاكرة)\n2. سيناريوهات الحفل والمظاهرة هي الأكبر. 30-60 ثانية للتحميل أمر طبيعي\n3. تحقق أن التطبيق مثبت على SSD وليس قرصًا صلبًا ميكانيكيًا\n4. تأكد من توفر مساحة قرص كافية (10 GB على الأقل للتشغيل المريح)\n5. إذا كان Windows يشغّل تحديثات في الخلفية، انتظر انتهاءها\n6. الأقراص المجزأة تبطئ كل شيء. شغّل تحسين قرص Windows عند الحاجة',
    },
  },

  // ── HEADSET MAINTENANCE ──
  'maint-1': {
    id: 'maint-1', type: 'question',
    text: { en: 'What do you need help with?', ar: 'ما الذي تحتاج مساعدة فيه؟' },
    options: [
      { label: { en: 'Cleaning the headset', ar: 'تنظيف النظارة' }, nextId: 'maint-clean' },
      { label: { en: 'Charging and battery care', ar: 'الشحن والعناية بالبطارية' }, nextId: 'maint-charge' },
      { label: { en: 'Replacing face cushions or accessories', ar: 'استبدال وسائد الوجه أو الملحقات' }, nextId: 'maint-parts' },
      { label: { en: 'Link Cable care', ar: 'العناية بكابل Link Cable' }, nextId: 'maint-cable' },
    ],
  },
  'maint-clean': {
    id: 'maint-clean', type: 'solution',
    text: {
      en: 'Headset cleaning procedure:\n\n- Lenses: Use ONLY a dry microfiber cloth. Wipe gently in circular motions. Never use liquids, wet wipes, or paper towels on the lenses\n- Face cushion: Wipe with antibacterial wipes between users. Let it air-dry before the next person uses it. Replace cushions when they show wear\n- Headset body: Wipe with a slightly damp cloth. Avoid getting moisture near the lenses or charging port\n- Sensors: Don\'t touch the tracking cameras on the outside of the headset. If dusty, use compressed air\n\nClean before every session. It\'s a hygiene issue and it helps maintain tracking quality.',
      ar: 'إجراء تنظيف النظارة:\n\n- العدسات: استخدم فقط قطعة قماش ألياف دقيقة جافة. امسح بلطف بحركات دائرية. لا تستخدم أبدًا سوائل أو مناديل مبللة أو مناديل ورقية على العدسات\n- وسادة الوجه: امسحها بمناديل مضادة للبكتيريا بين المستخدمين. اتركها تجف في الهواء قبل استخدام الشخص التالي. استبدل الوسائد عند ظهور علامات التآكل\n- جسم النظارة: امسحه بقطعة قماش رطبة قليلًا. تجنّب وصول الرطوبة للعدسات أو منفذ الشحن\n- المستشعرات: لا تلمس كاميرات التتبع على الجانب الخارجي للنظارة. إذا كانت متسخة، استخدم هواءً مضغوطًا\n\nنظّف قبل كل جلسة. هذه مسألة نظافة وتساعد في الحفاظ على جودة التتبع.',
    },
  },
  'maint-charge': {
    id: 'maint-charge', type: 'solution',
    text: {
      en: 'Charging best practices:\n\n- Charge all headsets overnight before a training day\n- Use the original charging cables (third-party cables may charge slowly or not at all)\n- Don\'t leave headsets plugged in 24/7. Charge overnight, unplug in the morning\n- A full charge typically lasts 2-3 hours of active use\n- If a headset charges slowly, try a different cable and a different USB-C power source\n- Store headsets in a cool, dry place. Heat degrades batteries over time',
      ar: 'أفضل ممارسات الشحن:\n\n- اشحن جميع النظارات طوال الليل قبل يوم التدريب\n- استخدم كابلات الشحن الأصلية (الكابلات من أطراف ثالثة قد تشحن ببطء أو لا تشحن إطلاقًا)\n- لا تترك النظارات موصولة بالشحن 24/7. اشحن طوال الليل، افصل في الصباح\n- الشحن الكامل يدوم عادة 2-3 ساعات من الاستخدام النشط\n- إذا كانت نظارة تشحن ببطء، جرّب كابلًا مختلفًا ومصدر طاقة USB-C مختلفًا\n- خزّن النظارات في مكان بارد وجاف. الحرارة تُتلف البطاريات بمرور الوقت',
    },
  },
  'maint-parts': {
    id: 'maint-parts', type: 'solution',
    text: {
      en: 'Replacement parts:\n\n- Face cushions should be swapped out when they get compressed, cracked, or stained. Keep spares on the supply shelf\n- Head straps can stretch over time. Replace if they no longer hold the headset securely\n- Lens protectors (if used) should be replaced when scratched\n\nOrder replacements through IT or directly from HTC. If the headset is under Vive Care warranty, some accessories may be covered.',
      ar: 'قطع الغيار:\n\n- وسائد الوجه يجب استبدالها عندما تصبح مضغوطة أو متشققة أو ملطخة. احتفظ بقطع احتياطية على رف المستلزمات\n- أحزمة الرأس قد تتمدد مع الوقت. استبدلها إذا لم تعد تثبت النظارة بإحكام\n- واقيات العدسات (إن استُخدمت) يجب استبدالها عند خدشها\n\nاطلب البدائل من خلال قسم تقنية المعلومات أو مباشرة من HTC. إذا كانت النظارة تحت ضمان Vive Care، بعض الملحقات قد تكون مشمولة.',
    },
  },
  'maint-cable': {
    id: 'maint-cable', type: 'solution',
    text: {
      en: 'Link Cable care:\n\n- Don\'t kink, bend sharply, or step on the cable\n- Coil loosely when storing (not tightly wound)\n- If the connector feels loose in the USB port, the cable may be worn. Swap it\n- Keep spare cables available. A bad cable is one of the most common causes of headset detection failures\n- Route the cable so operators don\'t trip on it or pull it during the session\n- Inspect cables weekly for visible damage (fraying, bent connectors, kinks)',
      ar: 'العناية بكابل Link Cable:\n\n- لا تثنِ الكابل بحدة أو تدُس عليه\n- لفّه بشكل فضفاض عند التخزين (ليس ملفوفًا بإحكام)\n- إذا كان الموصل يبدو مرتخيًا في منفذ USB، فقد يكون الكابل متآكلًا. استبدله\n- احتفظ بكابلات احتياطية. الكابل التالف هو أحد أكثر أسباب فشل اكتشاف النظارة شيوعًا\n- مدّد الكابل بحيث لا يتعثر به المشغلون أو يسحبونه أثناء الجلسة\n- افحص الكابلات أسبوعيًا بحثًا عن أضرار مرئية (تآكل، موصلات مثنية، ثنيات)',
    },
  },
};
