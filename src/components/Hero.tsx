import { ArrowDown, Sparkles, Brain, ConciergeBell, Laptop } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-900"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-primary-950 to-ink-900 bg-[length:200%_200%] animate-gradient-shift" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating decorative orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-warm-500/10 rounded-full blur-3xl animate-pulse-soft" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-12">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-primary-200 text-sm font-medium mb-6 animate-fade-down">
              <Sparkles className="w-4 h-4" />
              <span>Professional Portfolio</span>
            </div>

            {/* Name */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white animate-fade-up">
              Kwandile Felicity
              <br />
              <span className="text-gradient-light">Mashego</span>
            </h1>

            {/* Role */}
            <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-ink-300 font-light leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: '0.15s' }}>
              {personalInfo.role}
            </p>

            {/* Tagline */}
            <p className="mt-4 text-base text-primary-300 font-medium tracking-wide animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {personalInfo.tagline}
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.45s' }}>
              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-ink-900 font-semibold rounded-xl hover:bg-primary-50 hover:shadow-2xl transition-all duration-300 group"
              >
                Discover My Journey
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-7 py-3.5 glass-dark text-white font-semibold rounded-xl hover:bg-white/15 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right: Floating cards */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-4 relative">
            <div className="glass-dark rounded-2xl p-5 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-primary-300" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Google AI Certified</p>
                  <p className="text-ink-400 text-xs mt-0.5">Artificial Intelligence & AI Tools</p>
                </div>
              </div>
            </div>

            <div className="glass-dark rounded-2xl p-5 animate-fade-up ml-8" style={{ animationDelay: '0.55s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-warm-500/20 flex items-center justify-center flex-shrink-0">
                  <ConciergeBell className="w-6 h-6 text-warm-300" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Hospitality Trained</p>
                  <p className="text-ink-400 text-xs mt-0.5">Customer Service & Guest Relations</p>
                </div>
              </div>
            </div>

            <div className="glass-dark rounded-2xl p-5 animate-fade-up" style={{ animationDelay: '0.7s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                  <Laptop className="w-6 h-6 text-accent-300" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">ICDL Certified</p>
                  <p className="text-ink-400 text-xs mt-0.5">Computer & Digital Skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce-soft" />
        </div>
      </div>
    </section>
  );
}
