import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  themeVariables: {
    primaryColor: '#3b82f6',
    primaryTextColor: '#e4e7f0',
    primaryBorderColor: '#2e3348',
    lineColor: '#6b7280',
    secondaryColor: '#222635',
    tertiaryColor: '#1a1d2e',
    background: '#161822',
    mainBkg: '#222635',
    nodeBorder: '#3b82f6',
    clusterBkg: '#1a1d2e',
    clusterBorder: '#2e3348',
    titleColor: '#e4e7f0',
    edgeLabelBackground: '#222635',
    fontSize: '14px',
  },
  flowchart: {
    htmlLabels: true,
    curve: 'linear',
  },
});

let idCounter = 0;

export function MermaidDiagram({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const id = `mermaid-${++idCounter}`;
    mermaid.render(id, chart.trim())
      .then(({ svg: renderedSvg }) => {
        setSvg(renderedSvg);
        setError('');
      })
      .catch((err) => {
        setError(String(err));
        setSvg('');
      });
  }, [chart]);

  if (error) {
    return (
      <pre className="p-4 rounded-lg bg-gray-800 border border-gray-700 text-xs text-gray-400 overflow-x-auto whitespace-pre-wrap">
        {chart}
      </pre>
    );
  }

  return (
    <div
      ref={containerRef}
      className="my-4 flex justify-center overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
