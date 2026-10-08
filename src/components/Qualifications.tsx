import { useScrollReveal } from '@/hooks/useScrollReveal';
import { qualifications } from '@/data/portfolio';
import { Brain, GraduationCap, ConciergeBell, Laptop, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  'graduation-cap': GraduationCap,
  'concierge-bell': ConciergeBell,
  laptop: Laptop,
};

const accentMap: Record<string, { bg: string; text: string; gradient: string; border: string }> = {
  primary: {
    bg: 'bg-primary-50',
    text: 'text-primary-600',
    gradient: 'from-primary-500 to-primary-700',
    border: 'border-primary-200',
  },
  accent: {
    bg: 'bg-accent-50',
    text: 'text-accent-600',
    gradient: 'from-accent-500 to-accent-700',
    border: 'border-accent-200',
  },
  warm: {
    bg: 'bg-warm-50',
    text: 'text-warm-600',
    gradient: 'from-warm-500 to-warm-700',
    border: 'border-warm-200',
  },
};

export default function Qualifications() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="qualifications" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div
        ref={ref}
        className={`relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4">
            Education & Certifications
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Educational Qualifications
          </h2>
          <p className="text-ink-500 max-w-2xl mx-auto text-base">
            A strong foundation built through academic study, professional training, and industry certifications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-accent-200 to-warm-200" />

          <div className="space-y-12 lg:space-y-16">
            {qualifications.map((qual, idx) => {
              const Icon = iconMap[qual.icon] ?? GraduationCap;
              const accent = accentMap[qual.accent];
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={qual.title}
                  className={`relative flex flex-col lg:flex-row gap-6 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${accent.gradient} flex items-center justify-center shadow-lg ring-4 ring-white`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Content card */}
                  <div className={`pl-20 lg:pl-0 lg:w-1/2 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className={`bg-white rounded-2xl p-6 border ${accent.border} card-shadow hover:card-shadow-hover transition-all duration-400 group`}>
                      <span className={`inline-block px-3 py-1 ${accent.bg} ${accent.text} text-xs font-semibold rounded-full mb-3`}>
                        {qual.period}
                      </span>
                      <h3 className="font-display text-lg font-bold text-ink-900 mb-4 group-hover:text-primary-700 transition-colors">
                        {qual.title}
                      </h3>
                      <ul className="space-y-2">
                        {qual.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check className={`w-4 h-4 ${accent.text} mt-0.5 flex-shrink-0`} />
                            <span className="text-sm text-ink-600 leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
