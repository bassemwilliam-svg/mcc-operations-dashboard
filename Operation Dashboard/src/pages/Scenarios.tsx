import { MapPin, Users, Camera, AlertTriangle, Clock, Target } from 'lucide-react';
import { scenarios } from '@/data/scenarios';
import { useLanguage } from '@/hooks/useLanguage';
import { pick } from '@/lib/t';

export function Scenarios() {
  const { language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">
          {language === 'ar' ? 'سيناريوهات التدريب' : 'Training Scenarios'}
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          {language === 'ar'
            ? '5 مواقع تدريب في ابوظبي مرتبة حسب الصعوبة'
            : '5 Abu Dhabi training locations ordered by difficulty'}
        </p>
      </div>

      <div className="space-y-4">
        {scenarios.map(scenario => (
          <div key={scenario.id} className="rounded-xl bg-gray-900 border border-gray-700 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{scenario.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="text-lg font-bold text-gray-100">{pick(scenario.name, language)}</h2>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${scenario.difficultyColor}`}>
                      {pick(scenario.difficultyLabel, language)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                    <MapPin className="w-3 h-3" />
                    {pick(scenario.venue, language)}
                  </div>
                  <p className="text-sm text-gray-400 mt-3">{pick(scenario.description, language)}</p>

                  {/* Stats */}
                  <div className="flex gap-6 mt-4">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Users className="w-3.5 h-3.5 text-gray-500" />
                      {scenario.suspects} {language === 'ar' ? 'مشتبه بهم' : 'suspects'}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Camera className="w-3.5 h-3.5 text-gray-500" />
                      {scenario.cameras} {language === 'ar' ? 'كاميرات' : 'cameras'}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5 text-gray-500" />
                      {scenario.duration}
                    </div>
                  </div>

                  {/* Objectives */}
                  <div className="mt-4">
                    <div className="text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-1">
                      <Target className="w-3 h-3" /> {language === 'ar' ? 'الاهداف' : 'Objectives'}
                    </div>
                    <ul className="space-y-1">
                      {scenario.objectives.map((obj, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                          <span className="text-accent mt-0.5">&#x2022;</span> {pick(obj, language)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Threats */}
                  <div className="mt-3">
                    <div className="text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> {language === 'ar' ? 'انواع التهديدات' : 'Threat Types'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {scenario.threats.map((threat, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                          {pick(threat, language)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
