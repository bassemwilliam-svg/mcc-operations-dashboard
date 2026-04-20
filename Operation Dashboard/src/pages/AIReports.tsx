import { FileText, Download, ExternalLink, User, Calendar } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { AI_REPORTS, reportFileUrl, type AIReport } from '@/lib/aiReports';

export function AIReports() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const sorted = [...AI_REPORTS].sort((a, b) =>
    b.sessionDate.localeCompare(a.sessionDate)
  );

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {isAr ? 'تقارير جلسات الذكاء الاصطناعي' : 'AI Sessions Reports'}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {isAr
            ? 'تقارير الأداء التي تم إنشاؤها بواسطة الذكاء الاصطناعي لكل مشغل. اعرض في المتصفح أو قم بالتنزيل كملف PDF.'
            : 'AI-generated operator performance reports by session. View in the browser or download as PDF.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sorted.map(report => (
          <ReportCard key={report.id} report={report} isAr={isAr} />
        ))}
      </div>
    </div>
  );
}

function ReportCard({ report, isAr }: { report: AIReport; isAr: boolean }) {
  const enHtml = reportFileUrl(report, 'en', 'html');
  const enPdf = reportFileUrl(report, 'en', 'pdf');
  const arHtml = reportFileUrl(report, 'ar', 'html');
  const arPdf = reportFileUrl(report, 'ar', 'pdf');

  return (
    <div className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
          <FileText className="w-5 h-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-gray-100">
            <User className="w-3.5 h-3.5 text-gray-400" />
            <span className="truncate">{isAr ? report.operatorAr : report.operator}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{isAr ? report.sessionLabelAr : report.sessionLabel}</span>
          </div>
          <div className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 font-mono tracking-tight">
            {report.baseName}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <ReportAction
          href={isAr ? arHtml : enHtml}
          icon={<ExternalLink className="w-3.5 h-3.5" />}
          label={isAr ? 'عرض (عربي)' : 'View (EN)'}
          primary
        />
        <ReportAction
          href={isAr ? enHtml : arHtml}
          icon={<ExternalLink className="w-3.5 h-3.5" />}
          label={isAr ? 'View (EN)' : 'عرض (عربي)'}
        />
        <ReportAction
          href={isAr ? arPdf : enPdf}
          icon={<Download className="w-3.5 h-3.5" />}
          label={isAr ? 'PDF (عربي)' : 'PDF (EN)'}
          download={`${report.baseName}_${isAr ? 'ar' : 'en'}.pdf`}
        />
        <ReportAction
          href={isAr ? enPdf : arPdf}
          icon={<Download className="w-3.5 h-3.5" />}
          label={isAr ? 'PDF (EN)' : 'PDF (عربي)'}
          download={`${report.baseName}_${isAr ? 'en' : 'ar'}.pdf`}
        />
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
    'inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium transition-colors border';
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
      {icon}
      <span className="truncate">{label}</span>
    </a>
  );
}
