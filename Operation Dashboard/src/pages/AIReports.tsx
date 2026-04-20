import { useMemo, useState } from 'react';
import { FileText, Download, ExternalLink, User, Calendar, Search } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { AI_REPORTS, reportFileUrl, type AIReport } from '@/lib/aiReports';

export function AIReports() {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [query, setQuery] = useState('');

  const sorted = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...AI_REPORTS]
      .filter(r =>
        q === ''
          ? true
          : [r.operator, r.operatorAr, r.baseName, r.sessionLabel]
              .join(' ')
              .toLowerCase()
              .includes(q)
      )
      .sort((a, b) => b.sessionDate.localeCompare(a.sessionDate));
  }, [query]);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            {isAr ? 'تقارير جلسات الذكاء الاصطناعي' : 'AI Sessions Reports'}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            {isAr
              ? 'تقارير الأداء التي تم إنشاؤها بواسطة الذكاء الاصطناعي لكل مشغل. اعرض في المتصفح أو قم بالتنزيل كملف PDF.'
              : 'AI-generated operator performance reports by session. View in the browser or download as PDF.'}
          </p>
        </div>
        <div className="relative w-full sm:w-64 shrink-0">
          <Search className="pointer-events-none absolute top-1/2 -translate-y-1/2 start-3 w-4 h-4 text-gray-400" />
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={isAr ? 'بحث عن مشغل…' : 'Search operator…'}
            className="w-full ps-9 pe-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 py-12 text-center text-sm text-gray-500">
          {isAr ? 'لا توجد نتائج.' : 'No matching reports.'}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
          {sorted.map(report => (
            <ReportCard key={report.id} report={report} isAr={isAr} />
          ))}
        </div>
      )}

      <p className="mt-6 text-[11px] text-gray-400 dark:text-gray-500">
        {isAr
          ? `${sorted.length} من ${AI_REPORTS.length} تقرير`
          : `${sorted.length} of ${AI_REPORTS.length} reports`}
      </p>
    </div>
  );
}

function ReportCard({ report, isAr }: { report: AIReport; isAr: boolean }) {
  const enHtml = reportFileUrl(report, 'en', 'html');
  const enPdf = reportFileUrl(report, 'en', 'pdf');
  const arHtml = reportFileUrl(report, 'ar', 'html');
  const arPdf = reportFileUrl(report, 'ar', 'pdf');

  return (
    <div className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-4 sm:p-5 flex flex-col gap-4 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
      <div className="flex items-start gap-3 min-w-0">
        <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
          <FileText className="w-5 h-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-gray-100">
            <User className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="truncate">{isAr ? report.operatorAr : report.operator}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-1">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{isAr ? report.sessionLabelAr : report.sessionLabel}</span>
          </div>
          <div className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 font-mono tracking-tight break-all">
            {report.baseName}
          </div>
        </div>
      </div>

      <div>
        <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1.5">
          {isAr ? 'عرض' : 'View'}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <ReportAction
            href={isAr ? arHtml : enHtml}
            icon={<ExternalLink className="w-3.5 h-3.5" />}
            label={isAr ? 'عربي' : 'English'}
            primary
          />
          <ReportAction
            href={isAr ? enHtml : arHtml}
            icon={<ExternalLink className="w-3.5 h-3.5" />}
            label={isAr ? 'English' : 'عربي'}
          />
        </div>

        <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mt-3 mb-1.5">
          {isAr ? 'تنزيل PDF' : 'Download PDF'}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <ReportAction
            href={isAr ? arPdf : enPdf}
            icon={<Download className="w-3.5 h-3.5" />}
            label={isAr ? 'عربي' : 'English'}
            download={`${report.baseName}_${isAr ? 'ar' : 'en'}.pdf`}
          />
          <ReportAction
            href={isAr ? enPdf : arPdf}
            icon={<Download className="w-3.5 h-3.5" />}
            label={isAr ? 'English' : 'عربي'}
            download={`${report.baseName}_${isAr ? 'en' : 'ar'}.pdf`}
          />
        </div>
      </div>
    </div>
  );
}

function ReportAction({
  href,
  icon,
  label,
  download,
  primary,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  download?: string;
  primary?: boolean;
}) {
  const base =
    'inline-flex items-center justify-center gap-1.5 px-2 py-2 rounded-md text-xs font-medium transition-colors border min-w-0';
  const style = primary
    ? 'bg-accent/10 border-accent/30 text-accent hover:bg-accent/20'
    : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700';

  return (
    <a
      href={href}
      target={download ? undefined : '_blank'}
      rel="noopener noreferrer"
      download={download}
      className={`${base} ${style}`}
    >
      <span className="shrink-0">{icon}</span>
      <span className="truncate">{label}</span>
    </a>
  );
}
