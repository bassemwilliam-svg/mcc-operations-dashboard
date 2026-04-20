import { Printer, Monitor, Users } from 'lucide-react';
import { operatorCard, supervisorCard } from '@/data/quickReference';
import type { QRCard } from '@/data/quickReference';
import { useLanguage } from '@/hooks/useLanguage';
import { pick } from '@/lib/t';

function CardSection({ card, isOperator }: { card: QRCard; isOperator: boolean }) {
  const { language } = useLanguage();
  const iconColor = isOperator ? 'text-blue-400' : 'text-purple-400';
  const titleColor = isOperator ? 'text-blue-300' : 'text-purple-300';

  return (
    <div className="rounded-xl bg-gray-900 border border-gray-700 p-6">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
        {isOperator ? <Monitor className={`w-5 h-5 ${iconColor}`} /> : <Users className={`w-5 h-5 ${iconColor}`} />}
        <h2 className={`text-lg font-bold ${titleColor}`}>{pick(card.cardTitle, language)}</h2>
      </div>

      <div className="space-y-4 text-sm">
        {card.sections.map((section, si) => (
          <div key={si}>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {pick(section.heading, language)}
            </h3>

            {/* Regular list items */}
            {section.items && (
              <ol className="space-y-1.5 text-gray-300 list-decimal list-inside">
                {section.items.map((item, i) => (
                  <li key={i}>{pick(item, language)}</li>
                ))}
              </ol>
            )}

            {/* Control grid */}
            {section.controls && (
              <>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {section.controls.map((ctrl, i) => (
                    <div key={i} className="p-2 rounded bg-gray-800">
                      <span className="text-gray-400">{pick(ctrl.label, language)}</span>{' '}
                      <span className="text-gray-200">{pick(ctrl.value, language)}</span>
                    </div>
                  ))}
                </div>
                {section.extraControls && (
                  <div className="mt-2 space-y-1 text-xs">
                    {section.extraControls.map((ctrl, i) => (
                      <div key={i} className="p-2 rounded bg-gray-800">
                        <span className="text-gray-400">{pick(ctrl.label, language)}</span>{' '}
                        <span className="text-gray-200">{pick(ctrl.value, language)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Common issues rendered as unordered list */}
            {!section.controls && !section.items && null}
          </div>
        ))}

        {/* Scoring (operator only) */}
        {card.scoring && (
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {language === 'ar' ? 'التقييم (0-100)' : 'Scoring (0-100)'}
            </h3>
            <div className="space-y-1 text-xs">
              {card.scoring.map((s, i) => (
                <div key={i} className="flex justify-between">
                  <span className="text-gray-400">{pick(s.label, language)}</span>
                  <span className={`${s.color} font-bold`}>{s.weight}</span>
                </div>
              ))}
            </div>
            {card.scoringNote && (
              <div className="mt-2 text-[10px] text-yellow-400">{pick(card.scoringNote, language)}</div>
            )}
          </div>
        )}

        {/* Network config (supervisor only) */}
        {card.networkConfig && (
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {language === 'ar' ? 'اعدادات الشبكة' : 'Network Config'}
            </h3>
            <div className="space-y-1 text-xs">
              {card.networkConfig.map((cfg, i) => (
                <div key={i} className="p-2 rounded bg-gray-800">
                  <span className="text-gray-400">{pick(cfg.label, language)}</span>{' '}
                  <code className="text-gray-200">{pick(cfg.value, language)}</code>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function QuickReference() {
  const { language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-100">
            {language === 'ar' ? 'بطاقات المرجع السريع' : 'Quick Reference Cards'}
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            {language === 'ar'
              ? 'اوراق مختصرة يمكنك طباعتها والاحتفاظ بها في محطتك'
              : 'One-page cheat sheets you can print and keep at your station'}
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm text-gray-300"
        >
          <Printer className="w-4 h-4" />
          {language === 'ar' ? 'طباعة البطاقات' : 'Print Cards'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 print-full-width">
        <CardSection card={operatorCard} isOperator={true} />
        <CardSection card={supervisorCard} isOperator={false} />
      </div>
    </div>
  );
}
