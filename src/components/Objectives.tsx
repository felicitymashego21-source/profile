import { useScrollReveal } from '@/hooks/useScrollReveal';
import { objectives, careerVision, professionalDev } from '@/data/portfolio';
import { Target, Compass, BookOpen, ArrowUpRight } from 'lucide-react';

export default function Objectives() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="objectives" className="relative py-24 lg:py-32 bg-ink-900 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-200 text-sm font-semibold rounded-full mb-4">
            Goals & Vision
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Career Objectives & Vision
          </h2>
          <p className="text-ink-400 max-w-2xl mx-auto text-base">
            Driven by purpose, guided by a commitment to learning, growth, and service.
          </p>
        </div>

        {/* Objectives grid */}
        <div className="grid sm:grid-cols-2 gap-3 mb-16">
          {objectives.map((obj, idx) => (
            <div
              key={obj}
              className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300"
              style={{
                transitionDelay: `${idx * 30}ms`,
              }}
            >
              <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/30 transition-colors">
                <span className="text-primary-300 text-xs font-bold">{String(idx + 1).padStart(2, '0')}</span>
              </div>
              <p className="text-sm text-ink-300 leading-relaxed group-hover:text-white transition-colors pt-1">
                {obj}
              </p>
            </div>
          ))}
        </div>

        {/* Vision & Development cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-ink-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-5">
                <Compass className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {careerVision.title}
              </h3>
              <p className="text-sm text-ink-300 leading-relaxed">
                {careerVision.text}
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-accent-500/30 to-warm-500/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-ink-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center mb-5">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {professionalDev.title}
              </h3>
              <p className="text-sm text-ink-300 leading-relaxed">
                {professionalDev.text}
              </p>
            </div>
          </div>
        </div>

        {/* Career objective banner */}
        <div className="mt-10 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-primary-700 to-accent-700 p-8 lg:p-10">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Core Career Objective
                </h3>
                <p className="text-sm text-primary-50 leading-relaxed max-w-2xl">
                  To build a successful career by combining my hospitality experience, computer literacy,
                  digital skills, and Artificial Intelligence knowledge in a professional working environment.
                </p>
              </div>
            </div>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all whitespace-nowrap group"
            >
              Let's Connect
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
