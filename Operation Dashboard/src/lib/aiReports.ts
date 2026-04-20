export type AIReport = {
  id: string;
  operator: string;
  operatorAr: string;
  folder: string;
  baseName: string;
  sessionDate: string;
  sessionLabel: string;
  sessionLabelAr: string;
};

export const AI_REPORTS: AIReport[] = [
  {
    id: 'thani-20260417-0914',
    operator: 'Thani',
    operatorAr: 'ثاني',
    folder: 'Thani',
    baseName: '20260417_091400_Thani',
    sessionDate: '2026-04-17T09:14:00',
    sessionLabel: '17 Apr 2026 · 09:14',
    sessionLabelAr: '17 أبريل 2026 · 09:14',
  },
  {
    id: 'hamdan-20260417-0914',
    operator: 'Hamdan',
    operatorAr: 'حمدان',
    folder: 'Hamdan',
    baseName: '20260417_091400_Hamdan',
    sessionDate: '2026-04-17T09:14:00',
    sessionLabel: '17 Apr 2026 · 09:14',
    sessionLabelAr: '17 أبريل 2026 · 09:14',
  },
  {
    id: 'michael-20260417-0852',
    operator: 'Michael',
    operatorAr: 'مايكل',
    folder: 'Michael',
    baseName: '20260417_085209_Micheal',
    sessionDate: '2026-04-17T08:52:09',
    sessionLabel: '17 Apr 2026 · 08:52',
    sessionLabelAr: '17 أبريل 2026 · 08:52',
  },
  {
    id: 'jimmy-20260417-0852',
    operator: 'Jimmy',
    operatorAr: 'جيمي',
    folder: 'Jimmy',
    baseName: '20260417_085209_Jimmy',
    sessionDate: '2026-04-17T08:52:09',
    sessionLabel: '17 Apr 2026 · 08:52',
    sessionLabelAr: '17 أبريل 2026 · 08:52',
  },
  {
    id: 'remon-20260417-1059',
    operator: 'Remon',
    operatorAr: 'ريمون',
    folder: 'Remon0118',
    baseName: '20260417_105935_Remon',
    sessionDate: '2026-04-17T10:59:35',
    sessionLabel: '17 Apr 2026 · 10:59',
    sessionLabelAr: '17 أبريل 2026 · 10:59',
  },
];

export function reportFileUrl(
  report: AIReport,
  lang: 'en' | 'ar',
  format: 'html' | 'pdf'
): string {
  return `./reports/${report.folder}/${report.baseName}_${lang}.${format}`;
}
