import { useScrollReveal } from '@/hooks/useScrollReveal';
import { strengths } from '@/data/portfolio';
import {
  Hammer, RefreshCw, ShieldCheck, Smile, ListChecks, Users,
  HeartHandshake, Cpu, SearchCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  hammer: Hammer,
  'refresh-cw': RefreshCw,
  'shield-check': ShieldCheck,
  smile: Smile,
  'list-checks': ListChecks,
  users: Users,
  'heart-handshake': HeartHandshake,
  cpu: Cpu,
  'search-check': SearchCheck,
};

export default function Strengths() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="strengths" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div
        ref={ref}
        className={`relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-warm-50 text-warm-700 text-sm font-semibold rounded-full mb-4">
            Personal Strengths
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Qualities I Bring to the Workplace
          </h2>
          <p className="text-ink-500 max-w-2xl mx-auto text-base">
            The values and characteristics that define how I work, collaborate, and contribute.
          </p>
        </div>

        {/* Strengths grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {strengths.map((strength, idx) => {
            const Icon = iconMap[strength.icon] ?? Hammer;
            const colorVariants = [
              'from-primary-500 to-primary-700',
              'from-accent-500 to-accent-700',
              'from-warm-500 to-warm-700',
            ];
            const gradient = colorVariants[idx % 3];

            return (
              <div
                key={strength.title}
                className="group relative bg-ink-50 rounded-2xl p-6 border border-ink-100 hover:border-transparent hover:bg-white hover:card-shadow-hover transition-all duration-400 overflow-hidden"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {/* Hover gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-ink-900 mb-2">
                  {strength.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
