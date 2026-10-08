import { useScrollReveal } from '@/hooks/useScrollReveal';
import { skillCategories } from '@/data/portfolio';
import { Cpu, ConciergeBell, Briefcase, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  'concierge-bell': ConciergeBell,
  briefcase: Briefcase,
};

const accentMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  primary: {
    bg: 'bg-primary-50',
    text: 'text-primary-600',
    border: 'group-hover:border-primary-300',
    badge: 'bg-primary-100 text-primary-700',
  },
  accent: {
    bg: 'bg-accent-50',
    text: 'text-accent-600',
    border: 'group-hover:border-accent-300',
    badge: 'bg-accent-100 text-accent-700',
  },
  warm: {
    bg: 'bg-warm-50',
    text: 'text-warm-600',
    border: 'group-hover:border-warm-300',
    badge: 'bg-warm-100 text-warm-700',
  },
};

export default function Skills() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-ink-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-primary-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-accent-100/30 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white text-accent-700 text-sm font-semibold rounded-full mb-4 shadow-sm">
            Key Skills
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-ink-500 max-w-2xl mx-auto text-base">
            A diverse skill set spanning technology, hospitality, and professional development.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] ?? Cpu;
            const accent = accentMap[category.accent];

            return (
              <div
                key={category.title}
                className={`group bg-white rounded-3xl p-7 border-2 border-ink-100 ${accent.border} transition-all duration-500 hover:shadow-xl ${idx === 1 ? 'lg:-translate-y-4' : ''}`}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${accent.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${accent.text}`} />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-ink-900 mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-ink-400 mb-5 uppercase tracking-wider">
                  {category.skills.length} Skills
                </p>

                {/* Skills list */}
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2.5">
                      <span className={`mt-0.5 w-5 h-5 rounded-full ${accent.badge} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="text-sm text-ink-600 leading-snug">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
