// Bilingual text helper for structured page data
export type BiText = { en: string; ar: string };

export function pick(bt: BiText | string, lang: 'en' | 'ar'): string {
  if (typeof bt === 'string') return bt;
  return lang === 'ar' ? (bt.ar || bt.en) : bt.en;
}
