import Fuse from 'fuse.js';
import { documents } from './content';
import type { DocMeta } from '../types/content';

export interface SearchItem {
  id: string;
  title: string;
  titleAr?: string;
  summary: string;
  summaryAr?: string;
  category: string;
  type: 'document' | 'page' | 'tool';
  path: string;
  tags: string[];
}

// Documents from the knowledge base
const docItems: SearchItem[] = documents.map(d => ({
  id: d.id,
  title: d.title,
  summary: d.summary,
  category: d.category,
  type: 'document' as const,
  path: `/knowledge-base/${d.id}`,
  tags: d.tags,
}));

// Pages and tools
const pageItems: SearchItem[] = [
  { id: 'page-home', title: 'Home', titleAr: 'الرئيسية', summary: 'Knowledge center overview, quick actions, role portals', summaryAr: 'نظرة عامة على مركز المعرفة والإجراءات السريعة', category: 'page', type: 'page', path: '/', tags: ['home', 'dashboard', 'overview'] },
  { id: 'page-sops', title: 'Standard Operating Procedures', titleAr: 'إجراءات التشغيل القياسية', summary: 'Onboarding, pre-session setup, post-session, monthly maintenance', summaryAr: 'التأهيل، إعداد ما قبل الجلسة، ما بعد الجلسة، الصيانة الشهرية', category: 'sops', type: 'page', path: '/sops', tags: ['sop', 'procedures', 'onboarding', 'checklist'] },
  { id: 'page-scenarios', title: 'Training Scenarios', titleAr: 'سيناريوهات التدريب', summary: 'Airport, Embassy, Mall, Concert, Protest training environments', summaryAr: 'بيئات تدريب المطار، السفارة، المول، الحفل، الاحتجاج', category: 'scenarios', type: 'page', path: '/scenarios', tags: ['scenarios', 'airport', 'embassy', 'mall', 'concert', 'protest'] },
  { id: 'page-training', title: 'Training Hub', titleAr: 'مركز التدريب', summary: 'Onboarding phases, session structure, assessment forms', summaryAr: 'مراحل التأهيل، هيكل الجلسة، نماذج التقييم', category: 'training', type: 'page', path: '/training', tags: ['training', 'onboarding', 'assessment', 'mentor'] },
  { id: 'tool-score-calc', title: 'Score Calculator', titleAr: 'حاسبة الدرجات', summary: 'Calculate composite score from four scoring dimensions', summaryAr: 'حساب الدرجة المركبة من أربعة أبعاد', category: 'tool', type: 'tool', path: '/tools/score-calculator', tags: ['score', 'calculator', 'composite', 'detection', 'accuracy'] },
  { id: 'tool-checklists', title: 'Interactive Checklists', titleAr: 'قوائم المراجعة التفاعلية', summary: 'Pre-session and post-session checklists for all roles', summaryAr: 'قوائم مراجعة ما قبل وما بعد الجلسة لجميع الأدوار', category: 'tool', type: 'tool', path: '/tools/checklists', tags: ['checklist', 'pre-session', 'post-session', 'setup'] },
  { id: 'tool-troubleshooter', title: 'Troubleshooter', titleAr: 'مستكشف الأخطاء', summary: 'Step-by-step diagnosis for VR headset, network, application, and sensor issues', summaryAr: 'تشخيص خطوة بخطوة لمشاكل النظارة والشبكة والتطبيق', category: 'tool', type: 'tool', path: '/tools/troubleshooter', tags: ['troubleshoot', 'fix', 'problem', 'headset', 'network', 'emotibit'] },
  { id: 'tool-architecture', title: 'System Architecture', titleAr: 'بنية النظام', summary: 'Network topology, port configuration, hardware layout', summaryAr: 'مخطط الشبكة، إعدادات المنافذ، تخطيط الأجهزة', category: 'tool', type: 'tool', path: '/tools/architecture', tags: ['architecture', 'network', 'topology', 'ports', 'diagram'] },
  { id: 'tool-quick-ref', title: 'Quick Reference Cards', titleAr: 'بطاقات المرجع السريع', summary: 'One-page cheat sheets for operators and supervisors', summaryAr: 'ملخصات من صفحة واحدة للمشغلين والمشرفين', category: 'tool', type: 'tool', path: '/tools/quick-reference', tags: ['quick', 'reference', 'card', 'cheat sheet'] },
  { id: 'tool-emergency', title: 'Emergency Procedures', titleAr: 'إجراءات الطوارئ', summary: 'System crash, VR discomfort, network failure, data loss, power outage', summaryAr: 'تعطل النظام، انقطاع الشبكة، فقدان البيانات، انقطاع الكهرباء', category: 'tool', type: 'tool', path: '/tools/emergency', tags: ['emergency', 'crash', 'outage', 'escalation'] },
  { id: 'tool-glossary', title: 'Glossary', titleAr: 'المصطلحات', summary: 'Definitions for scoring, technical, biometric, and eye tracking terms', summaryAr: 'تعريفات للمصطلحات التقنية والقياسية والبيومترية', category: 'tool', type: 'tool', path: '/tools/glossary', tags: ['glossary', 'terms', 'definitions'] },
];

const allItems = [...docItems, ...pageItems];

const fuseOptions = {
  keys: [
    { name: 'title', weight: 2 },
    { name: 'titleAr', weight: 2 },
    { name: 'tags', weight: 1.5 },
    { name: 'summary', weight: 1 },
    { name: 'summaryAr', weight: 1 },
    { name: 'category', weight: 0.5 },
  ],
  threshold: 0.3,
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 2,
};

const fuse = new Fuse(allItems, fuseOptions);

export function searchAll(query: string): Array<{ item: SearchItem; score: number }> {
  if (!query.trim()) return allItems.map(item => ({ item, score: 0 }));

  const results = fuse.search(query);
  return results.map(r => ({
    item: r.item,
    score: r.score ?? 0,
  }));
}

// Keep backward compat for existing imports
export function searchDocuments(query: string): Array<{ item: DocMeta; score: number }> {
  if (!query.trim()) return documents.map(item => ({ item, score: 0 }));

  const docFuse = new Fuse(documents, {
    keys: [
      { name: 'title', weight: 2 },
      { name: 'tags', weight: 1.5 },
      { name: 'summary', weight: 1 },
      { name: 'category', weight: 0.5 },
    ],
    threshold: 0.3,
    includeScore: true,
    minMatchCharLength: 2,
  });

  return docFuse.search(query).map(r => ({
    item: r.item,
    score: r.score ?? 0,
  }));
}
