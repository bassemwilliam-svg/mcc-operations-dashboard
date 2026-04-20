import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, ExternalLink, Printer, List } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { getDocById, getRelatedDocs, roleLabels, roleLabelsAr, categoryLabels, categoryLabelsAr, roleColors } from '@/lib/content';
import { loadDocContent, extractHeadings } from '@/lib/docLoader';
import { MermaidDiagram } from '@/components/common/MermaidDiagram';
import { useLanguage } from '@/hooks/useLanguage';

export function DocumentPage() {
  const { docId } = useParams<{ docId: string }>();
  const doc = docId ? getDocById(docId) : undefined;
  const [tocOpen, setTocOpen] = useState(true);
  const { language } = useLanguage();

  const rawContent = useMemo(() => {
    if (!doc) return null;
    return loadDocContent(doc.filePath, language);
  }, [doc, language]);

  const headings = useMemo(() => {
    if (!rawContent) return [];
    return extractHeadings(rawContent);
  }, [rawContent]);

  if (!doc) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center">
        <FileText className="w-16 h-16 mx-auto mb-4 text-gray-600" />
        <h1 className="text-xl font-bold text-gray-300">{language === 'ar' ? 'الوثيقة غير موجودة' : 'Document Not Found'}</h1>
        <p className="text-sm text-gray-500 mt-2">{language === 'ar' ? 'لم نتمكّن من العثور على هذه الوثيقة. ربما تم نقلها أو إعادة تسميتها.' : 'We couldn\'t find that document. It may have been moved or renamed.'}</p>
        <Link to="/knowledge-base" className="inline-block mt-4 text-accent hover:underline text-sm">
          ← Back to Knowledge Base
        </Link>
      </div>
    );
  }

  const relatedDocs = getRelatedDocs(doc);

  return (
    <div className="max-w-7xl mx-auto flex gap-6">
      {/* Table of Contents Sidebar */}
      {headings.length > 0 && (
        <aside className={`no-print hidden lg:block shrink-0 ${tocOpen ? 'w-64' : 'w-10'} transition-all`}>
          <div className="sticky top-20">
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 mb-3"
            >
              <List className="w-3.5 h-3.5" />
              {tocOpen && <span>{language === 'ar' ? 'جدول المحتويات' : 'Table of Contents'}</span>}
            </button>
            {tocOpen && (
              <nav className="space-y-0.5 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
                {headings.map((h, i) => (
                  <button
                    key={`${h.id}-${i}`}
                    onClick={() => {
                      const el = document.getElementById(h.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`block text-left w-full text-xs leading-snug py-1 hover:text-accent transition-colors ${
                      h.level === 1 ? 'text-gray-300 font-semibold' :
                      h.level === 2 ? 'text-gray-400 pl-3' :
                      h.level === 3 ? 'text-gray-500 pl-6' :
                      'text-gray-600 pl-9'
                    }`}
                  >
                    {h.text}
                  </button>
                ))}
              </nav>
            )}
          </div>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/knowledge-base" className="hover:text-accent flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            {language === 'ar' ? 'قاعدة المعرفة' : 'Knowledge Base'}
          </Link>
          <span>/</span>
          <span className="text-gray-300">{language === 'ar' && doc.titleAr ? doc.titleAr : doc.title}</span>
        </div>

        {/* Document header */}
        <div className="mb-8 p-6 rounded-xl bg-gray-900 border border-gray-700">
          {/* Full MCC logo */}
          <div className="flex justify-center mb-5 pb-5 border-b border-gray-700">
            <div className="bg-white rounded-lg px-6 py-3">
              <img src="./mcc-logo-full.jpeg" alt="Monitoring & Control Centre" className="h-12 object-contain" />
            </div>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-100">{language === 'ar' && doc.titleAr ? doc.titleAr : doc.title}</h1>
              <p className="text-sm text-gray-400 mt-2">{language === 'ar' && doc.summaryAr ? doc.summaryAr : doc.summary}</p>
            </div>
            <button
              onClick={() => window.print()}
              className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-gray-200 shrink-0"
              title="Print this document"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="text-[10px] px-2 py-1 rounded bg-gray-800 text-gray-400 uppercase">{language === 'ar' ? categoryLabelsAr[doc.category] : categoryLabels[doc.category]}</span>
            <span className="text-[10px] px-2 py-1 rounded bg-gray-800 text-gray-400">v{doc.version}</span>
            <span className="text-[10px] px-2 py-1 rounded bg-gray-800 text-gray-400">{language === 'ar' ? `تحديث ${doc.lastUpdated}` : `Updated ${doc.lastUpdated}`}</span>
            <span className="text-[10px] px-2 py-1 rounded bg-gray-800 text-gray-400">{language === 'ar' ? 'سري' : doc.classification}</span>
            {doc.roles.map(r => (
              <span key={r} className={`text-[10px] px-2 py-1 rounded border ${roleColors[r]}`}>
                {language === 'ar' ? roleLabelsAr[r] : roleLabels[r]}
              </span>
            ))}
          </div>
        </div>

        {/* Document content */}
        <div className="markdown-content p-6 rounded-xl bg-gray-900 border border-gray-700 print-full-width">
          {rawContent ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                // Add id attributes to headings for TOC anchor links
                h1: ({ children, ...props }) => {
                  const text = String(children);
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
                  return <h1 id={id} {...props}>{children}</h1>;
                },
                h2: ({ children, ...props }) => {
                  const text = String(children);
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
                  return <h2 id={id} {...props}>{children}</h2>;
                },
                h3: ({ children, ...props }) => {
                  const text = String(children);
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
                  return <h3 id={id} {...props}>{children}</h3>;
                },
                h4: ({ children, ...props }) => {
                  const text = String(children);
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
                  return <h4 id={id} {...props}>{children}</h4>;
                },
                // Render mermaid code blocks as diagrams
                code: ({ className, children, ...props }) => {
                  const match = /language-mermaid/.exec(className || '');
                  if (match) {
                    return <MermaidDiagram chart={String(children).replace(/\n$/, '')} />;
                  }
                  return <code className={className} {...props}>{children}</code>;
                },
                // Also handle pre blocks to avoid double-wrapping mermaid
                pre: ({ children }) => {
                  // Check if the child is a mermaid diagram (already rendered by code handler)
                  const child = children as React.ReactElement;
                  if (child?.type === MermaidDiagram) {
                    return <>{children}</>;
                  }
                  return <pre>{children}</pre>;
                },
                // Handle images that may have been embedded as base64.show a note instead
                img: ({ src, alt }) => {
                  if (src && src.startsWith('data:')) {
                    return (
                      <div className="p-3 my-3 rounded-lg bg-gray-800 border border-gray-700 text-xs text-gray-500 italic">
                        [Image: {alt || 'embedded image'}.view in source document]
                      </div>
                    );
                  }
                  return <img src={src} alt={alt} className="max-w-full rounded-lg" />;
                },
              }}
            >
              {rawContent}
            </ReactMarkdown>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <FileText className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm">{language === 'ar' ? 'لم يتم تحميل ملف هذه الوثيقة.' : 'This document\'s source file could not be loaded.'}</p>
              <p className="text-xs text-gray-600 mt-1">Expected at: content/docs/{doc.filePath}</p>
            </div>
          )}
        </div>

        {/* Related documents */}
        {relatedDocs.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">{language === 'ar' ? 'وثائق ذات صلة' : 'Related Documents'}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {relatedDocs.map(rd => (
                <Link
                  key={rd.id}
                  to={`/knowledge-base/${rd.id}`}
                  className="flex items-center gap-2 p-3 rounded-lg bg-gray-900 border border-gray-700 hover:border-gray-600 group"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-accent shrink-0" />
                  <span className="text-sm text-gray-300 group-hover:text-accent truncate">{language === 'ar' && rd.titleAr ? rd.titleAr : rd.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
