import { useNavigate } from 'react-router-dom';

// Terms that should be linked to the glossary when they appear in text.
// Key = display text to match (case-insensitive), Value = glossary term anchor
const linkableTerms: Record<string, string> = {
  'IPD': 'IPD (Interpupillary Distance)',
  'interpupillary distance': 'IPD (Interpupillary Distance)',
  'Link Cable': 'Link Cable',
  'USB 3.0': 'USB 3.0',
  'GPU': 'GPU (Graphics Processing Unit)',
  'VIVE Hub': 'VIVE Hub',
  'SteamVR': 'SteamVR',
  'OpenXR runtime': 'OpenXR Runtime',
  'OpenXR': 'OpenXR',
  'EmotiBit': 'EmotiBit',
  'Task Manager': 'Task Manager',
  'VSync': 'VSync',
  'Windows Firewall': 'Windows Firewall',
  'Server.json': 'Server.json',
  'Gigabit Ethernet': 'Gigabit Ethernet',
  'Vive Care': 'Vive Care',
  'face cushion': 'Face Cushion',
  'proximity sensor': 'Proximity Sensor',
  'GPU throttling': 'GPU Throttling',
  'High Performance': 'High Performance Power Plan',
  'ping': 'Ping',
  'subnet': 'Subnet',
  'heatmap': 'Heatmap',
  'fixation': 'Fixation',
  'EDA': 'EDA',
  'config.txt': 'Server.json',
  'EmotiBit Oscilloscope': 'EmotiBit Oscilloscope',
  'Oscilloscope': 'EmotiBit Oscilloscope',
  'lobby': 'Lobby',
};

function termToAnchor(glossaryTerm: string): string {
  return glossaryTerm.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}

/**
 * Takes a plain text string and returns React elements with glossary terms
 * wrapped in clickable links. Each term is only linked on its first occurrence.
 */
export function GlossaryLinker({ text }: { text: string }) {
  const navigate = useNavigate();

  // Sort terms by length descending so longer matches take priority
  const sortedTerms = Object.keys(linkableTerms).sort((a, b) => b.length - a.length);

  const pattern = sortedTerms
    .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');

  if (!pattern) return <>{text}</>;

  const regex = new RegExp(`(${pattern})`, 'gi');
  const parts = text.split(regex);

  const linkedTerms = new Set<string>();

  function handleClick(anchor: string) {
    // Navigate to glossary page, then scroll to the term after render
    navigate('/tools/glossary');
    setTimeout(() => {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Highlight the term briefly
        el.classList.add('glossary-highlight');
        setTimeout(() => el.classList.remove('glossary-highlight'), 3000);
      }
    }, 200);
  }

  return (
    <>
      {parts.map((part, i) => {
        const matchKey = sortedTerms.find(t => t.toLowerCase() === part.toLowerCase());

        if (matchKey && !linkedTerms.has(matchKey.toLowerCase())) {
          linkedTerms.add(matchKey.toLowerCase());
          const glossaryTerm = linkableTerms[matchKey];
          const anchor = termToAnchor(glossaryTerm);

          return (
            <button
              key={i}
              onClick={() => handleClick(anchor)}
              className="text-accent underline decoration-dotted underline-offset-2 hover:decoration-solid cursor-pointer"
              title={`View definition: ${glossaryTerm}`}
            >
              {part}
            </button>
          );
        }

        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
