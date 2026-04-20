import { useState } from 'react';
import { Calculator, Info } from 'lucide-react';

const dimensions = [
  { id: 'detection', label: 'Detection Accuracy', weight: 40, color: '#3b82f6', description: 'How correctly you identified suspicious individuals' },
  { id: 'falsePositives', label: 'False Positives', weight: 20, color: '#ef4444', description: 'Penalty for marking innocent people (higher = fewer false marks)' },
  { id: 'timeliness', label: 'Timeliness', weight: 20, color: '#22c55e', description: 'How quickly you responded to events and alarms' },
  { id: 'attention', label: 'Attention & Gaze', weight: 20, color: '#f59e0b', description: 'How well you distributed focus across cameras' },
];

function getLabel(score: number): { label: string; color: string } {
  if (score >= 90) return { label: 'Excellent', color: 'text-green-400' };
  if (score >= 70) return { label: 'Competent', color: 'text-blue-400' };
  if (score >= 50) return { label: 'Needs Improvement', color: 'text-yellow-400' };
  if (score >= 30) return { label: 'Low', color: 'text-orange-400' };
  return { label: 'Critical', color: 'text-red-400' };
}

function RadarChart({ scores }: { scores: number[] }) {
  const cx = 150, cy = 150, r = 110;
  const n = 4;
  const angles = Array.from({ length: n }, (_, i) => (Math.PI * 2 * i) / n - Math.PI / 2);

  const gridLevels = [20, 40, 60, 80, 100];
  const labels = dimensions.map(d => d.label.split(' ')[0]);

  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-xs mx-auto">
      {/* Grid */}
      {gridLevels.map(level => (
        <polygon
          key={level}
          points={angles.map(a => `${cx + (r * level / 100) * Math.cos(a)},${cy + (r * level / 100) * Math.sin(a)}`).join(' ')}
          fill="none"
          stroke="#2e3348"
          strokeWidth="1"
        />
      ))}
      {/* Axes */}
      {angles.map((a, i) => (
        <line key={i} x1={cx} y1={cy} x2={cx + r * Math.cos(a)} y2={cy + r * Math.sin(a)} stroke="#2e3348" strokeWidth="1" />
      ))}
      {/* Score polygon */}
      <polygon
        points={angles.map((a, i) => `${cx + (r * scores[i] / 100) * Math.cos(a)},${cy + (r * scores[i] / 100) * Math.sin(a)}`).join(' ')}
        fill="rgba(59, 130, 246, 0.15)"
        stroke="#3b82f6"
        strokeWidth="2"
      />
      {/* Score dots */}
      {angles.map((a, i) => (
        <circle
          key={i}
          cx={cx + (r * scores[i] / 100) * Math.cos(a)}
          cy={cy + (r * scores[i] / 100) * Math.sin(a)}
          r="4"
          fill={dimensions[i].color}
        />
      ))}
      {/* Labels */}
      {angles.map((a, i) => {
        const lx = cx + (r + 20) * Math.cos(a);
        const ly = cy + (r + 20) * Math.sin(a);
        return (
          <text
            key={i}
            x={lx}
            y={ly}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-[10px] fill-gray-400"
          >
            {labels[i]}
          </text>
        );
      })}
    </svg>
  );
}

export function ScoreCalculator() {
  const [scores, setScores] = useState<Record<string, number>>({
    detection: 75,
    falsePositives: 80,
    timeliness: 70,
    attention: 65,
  });

  const composite = dimensions.reduce((sum, d) => sum + (scores[d.id] * d.weight / 100), 0);
  const { label, color } = getLabel(composite);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-accent" />
          Score Calculator
        </h1>
        <p className="text-sm text-gray-400 mt-1">Adjust individual dimension scores to see the composite result</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sliders */}
        <div className="space-y-6">
          {dimensions.map(dim => (
            <div key={dim.id} className="p-4 rounded-xl bg-gray-900 border border-gray-700">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: dim.color }} />
                  <span className="text-sm font-medium text-gray-200">{dim.label}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">{dim.weight}%</span>
                </div>
                <span className="text-lg font-bold" style={{ color: dim.color }}>{scores[dim.id]}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                <Info className="w-3 h-3" />
                {dim.description}
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={scores[dim.id]}
                onChange={e => setScores(prev => ({ ...prev, [dim.id]: Number(e.target.value) }))}
                className="w-full accent-accent"
              />
              <div className="flex justify-between text-[10px] text-gray-600 mt-1">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="space-y-6">
          {/* Composite Score */}
          <div className="p-6 rounded-xl bg-gray-900 border border-gray-700 text-center">
            <div className="text-sm text-gray-400 mb-2">Composite Score</div>
            <div className="text-5xl font-bold text-gray-100">{Math.round(composite)}</div>
            <div className={`text-lg font-semibold mt-1 ${color}`}>{label}</div>
            <div className="text-xs text-gray-500 mt-2">
              {composite >= 70 ? '✅ Passes sign-off threshold (70+)' : '❌ Below sign-off threshold (need 70+)'}
            </div>
          </div>

          {/* Radar Chart */}
          <div className="p-4 rounded-xl bg-gray-900 border border-gray-700">
            <RadarChart scores={[scores.detection, scores.falsePositives, scores.timeliness, scores.attention]} />
          </div>

          {/* Score Labels Reference */}
          <div className="p-4 rounded-xl bg-gray-900 border border-gray-700">
            <div className="text-sm font-medium text-gray-300 mb-3">Score Rating Labels</div>
            <div className="space-y-1.5">
              {[
                { range: '90-100', label: 'Excellent', color: 'text-green-400', desc: 'Consistently strong' },
                { range: '70-89', label: 'Competent', color: 'text-blue-400', desc: 'Meets sign-off threshold' },
                { range: '50-69', label: 'Needs Improvement', color: 'text-yellow-400', desc: 'Focused practice needed' },
                { range: '30-49', label: 'Low', color: 'text-orange-400', desc: 'Significant gaps' },
                { range: '0-29', label: 'Critical', color: 'text-red-400', desc: 'Fundamental skills needed' },
              ].map(item => (
                <div key={item.range} className="flex items-center gap-2 text-xs">
                  <span className="w-12 text-gray-500 text-right">{item.range}</span>
                  <span className={`font-medium w-28 ${item.color}`}>{item.label}</span>
                  <span className="text-gray-500">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
