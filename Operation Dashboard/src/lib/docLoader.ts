// Eagerly import all markdown files at build time
const markdownFilesEn = import.meta.glob('/content/docs/**/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
const markdownFilesAr = import.meta.glob('/content/docs-ar/**/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

/**
 * Load the raw markdown content for a document by its filePath.
 * Checks for Arabic version first when language is 'ar', falls back to English.
 */
export function loadDocContent(filePath: string, language: 'en' | 'ar' = 'en'): string | null {
  // Try Arabic first if requested
  if (language === 'ar') {
    const arKey = `/content/docs-ar/${filePath}`;
    if (markdownFilesAr[arKey]) return markdownFilesAr[arKey];

    // Fallback: search by filename in Arabic folder
    const filename = filePath.split('/').pop();
    for (const [path, content] of Object.entries(markdownFilesAr)) {
      if (path.endsWith(`/${filename}`)) return content;
    }
    // If no Arabic version, fall through to English
  }

  // English (default)
  const key = `/content/docs/${filePath}`;
  if (markdownFilesEn[key]) return markdownFilesEn[key];

  const filename = filePath.split('/').pop();
  for (const [path, content] of Object.entries(markdownFilesEn)) {
    if (path.endsWith(`/${filename}`)) return content;
  }

  return null;
}

/**
 * Extract headings from markdown text for table of contents
 */
export function extractHeadings(markdown: string): Array<{ level: number; text: string; id: string }> {
  const headingRegex = /^(#{1,4})\s+(.+)$/gm;
  const headings: Array<{ level: number; text: string; id: string }> = [];
  let match;

  const filteredHeadings = ['table of contents', 'toc', 'جدول المحتويات'];
  while ((match = headingRegex.exec(markdown)) !== null) {
    const text = match[2].trim();
    if (filteredHeadings.includes(text.toLowerCase())) continue;
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    headings.push({
      level: match[1].length,
      text,
      id,
    });
  }

  return headings;
}
