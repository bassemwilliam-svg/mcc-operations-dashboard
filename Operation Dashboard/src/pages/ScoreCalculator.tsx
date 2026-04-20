import { useState } from 'react';

const dimensions = [
  { key: 'detection', label: 'Detection Accuracy', weight: 40, color: '#3b82f6', desc: 'How correctly you identified suspicious individuals' },
  { key: 'falsePositives', label: 'False Positives', weight: 20, color: '#ef4444', desc: 'Penalty for marking innocent people' },
  { key: 'timeliness', label: 'Timeliness', weight: 20, color: '#22c55e', desc: 'How quickly you responded to events and alarms' },
  { key: 'attention', label: 'Attention & Gaze', weight: 20, color: '#a855f7', desc: 'How well you distributed focus across cameras' },
];

function getScoreLabel(score: number): { label: string; color: string } {
  if (score >= 90) return { label: 'Excellent', color: 'text-green-400' };
  if (score >= 70) return { label: 'Competent', color: 'text-blue-400' };
  if (score >= 50) return { label: 'Needs Improvement', color: 'text-yellow-400' };
  if (score >= 30) return { label: 'Low', color: 'text-orange-400' };
  return { label: 'Critical', color: 'text-red-400' };
}

function RadarChart({ scores }: { scores: Record<string, number> }) {
  const size = 250;
  const center = size / 2;
  const radius = 100;
  const angles = dimensions.map((_, i) => (Math.PI * 2 * i) / dimensions.length - Math.PI / 2);

  const getPoint = (angle: number, value: number) => ({
    x: center + (radius * value / 100) * Math.cos(angle),
    y: center + (radius * value / 100) * Math.sin(angle),
  });

  const dataPoints = dimensions.map((d, i) => getPoint(angles[i], scores[d.key]));

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[280px] mx-auto">
      {/* Grid rings */}
      {[25, 50, 75, 100].map(ring => (
        <polygon
          key={ring}
          points={angles.map(a => {
            const p = getPoint(a, ring);
            return `${p.x},${p.y}`;
          }).join(' ')}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-gray-700"
        />
      ))}

      {/* Axis lines */}
      {angles.map((a, i) => {
        const p = getPoint(a, 100);
        return <line key={i} x1={center} y1={center} x2={p.x} y2={p.y} stroke="currentColor" strokeWidth="0.5" className="text-gray-700" />;
      })}

      {/* Data polygon */}
      <polygon points={dataPoints.map(p => `${p.x},${p.y}`).join(' ')} fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="2" />

      {/* Data points */}
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill={dimensions[i].color} />
      ))}

      {/* Labels */}
      {dimensions.map((d, i) => {
        const labelPoint = getPoint(angles[i], 120);
        return (
          <text
            key={i}
            x={labelPoint.x}
            y={labelPoint.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-gray-400 text-[9px]"
          >
            {d.label.split(' ').map((word, wi) => (
              <tspan key={wi} x={labelPoint.x} dy={wi === 0 ? 0 : 11}>{word}</tspan>
            ))}
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

  const compositeScore = dimensions.reduce((acc, d) => acc + (scores[d.key] * d.weight / 100), 0);
  const { label, color } = getScoreLabel(compositeScore);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">Score Calculator</h1>
        <p className="text-sm text-gray-400 mt-1">Adjust individual dimension scores to see how they affect the composite score</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sliders */}
        <div className="space-y-5 p-6 rounded-xl bg-gray-900 border border-gray-700">
          {dimensions.map(d => (
            <div key={d.key}>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-gray-300">{d.label}</label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Weight: {d.weight}%</span>
                  <span className="text-sm font-bold text-gray-200 w-8 text-right">{scores[d.key]}</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={scores[d.key]}
                onChange={e => setScores(prev => ({ ...prev, [d.key]: parseInt(e.target.value) }))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${d.color} ${scores[d.key]}%, #374151 ${scores[d.key]}%)`,
                }}
              />
              <p className="text-[10px] text-gray-500 mt-1">{d.desc}</p>
            </div>
          ))}

          {/* Composite Score */}
          <div className="pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300">Composite Score</span>
              <div className="text-right">
                <span className="text-3xl font-bold text-gray-100">{Math.round(compositeScore)}</span>
                <span className="text-sm text-gray-500">/100</span>
              </div>
            </div>
            <div className={`text-sm font-semibold mt-1 text-right ${color}`}>
              {label}
            </div>
            <div className="mt-2 h-3 rounded-full bg-gray-700 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${compositeScore}%`,
                  background: compositeScore >= 70 ? '#22c55e' : compositeScore >= 50 ? '#f59e0b' : '#ef4444',
                }}
              />
            </div>
            {compositeScore >= 70 && (
              <p className="text-xs text-green-400 mt-2">✓ Meets sign-off threshold (70%)</p>
            )}
            {compositeScore < 70 && (
              <p className="text-xs text-yellow-400 mt-2">✗ Below sign-off threshold (70%)</p>
            )}
          </div>

          {/* Formula */}
          <div className="text-[10px] text-gray-600 mt-2 font-mono">
            ({scores.detection}×0.4) + ({scores.falsePositives}×0.2) + ({scores.timeliness}×0.2) + ({scores.attention}×0.2) = {Math.round(compositeScore)}
          </div>
        </div>

        {/* Radar Chart */}
        <div className="p-6 rounded-xl bg-gray-900 border border-gray-700">
          <h3 className="text-sm font-semibold text-gray-300 mb-4 text-center">Performance Radar</h3>
          <RadarChart scores={scores} />

          {/* Score labels reference */}
          <div className="mt-6 space-y-1.5">
            <div className="text-xs font-medium text-gray-400 mb-2">Score Labels</div>
            {[
              { range: '90-100', label: 'Excellent', color: 'text-green-400', desc: 'Consistently strong across all dimensions' },
              { range: '70-89', label: 'Competent', color: 'text-blue-400', desc: 'Meets sign-off threshold' },
              { range: '50-69', label: 'Needs Improvement', color: 'text-yellow-400', desc: 'Focused practice needed' },
              { range: '30-49', label: 'Low', color: 'text-orange-400', desc: 'Significant gaps' },
              { range: '0-29', label: 'Critical', color: 'text-red-400', desc: 'Fundamental skills development needed' },
            ].map(item => (
              <div key={item.range} className="flex items-center gap-2 text-xs">
                <span className="w-12 text-gray-500 font-mono">{item.range}</span>
                <span className={`w-24 font-medium ${item.color}`}>{item.label}</span>
                <span className="text-gray-500">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
