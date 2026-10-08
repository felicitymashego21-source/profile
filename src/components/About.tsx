import { useScrollReveal } from '@/hooks/useScrollReveal';
import { personalInfo } from '@/data/portfolio';
import { User, Target, TrendingUp } from 'lucide-react';

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-primary-50/50 to-transparent -z-0" />

      <div
        ref={ref}
        className={`relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4">
            About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900">
            Personal Profile
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Profile image */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary-400 via-accent-400 to-primary-500 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-700" />

              <div className="relative rounded-3xl overflow-hidden card-shadow">
                <img
                  src="https://images.pexels.com/photos/10041240/pexels-photo-10041240.jpeg?auto=compress&cs=tinysrgb&h=750&w=600"
                  alt="Professional working on a laptop"
                  className="w-full h-[480px] object-cover"
                  loading="lazy"
                />
                {/* Overlay tag */}
                <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink-900">{personalInfo.name}</p>
                      <p className="text-xs text-ink-500">{personalInfo.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="lg:col-span-7">
            <p className="text-lg text-ink-600 leading-relaxed mb-6">
              {personalInfo.profile}
            </p>
            <p className="text-base text-ink-500 leading-relaxed mb-10">
              {personalInfo.description}
            </p>

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-ink-50 rounded-2xl p-5 border border-ink-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="font-semibold text-ink-900 text-sm mb-1">Career Objective</h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  To build a successful career combining hospitality, digital skills, and AI knowledge.
                </p>
              </div>

              <div className="bg-ink-50 rounded-2xl p-5 border border-ink-100 hover:border-accent-200 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5 text-accent-600" />
                </div>
                <h3 className="font-semibold text-ink-900 text-sm mb-1">Growth Mindset</h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  Committed to continuous learning and adapting to new technologies.
                </p>
              </div>
            </div>

            {/* Contact details bar */}
            <div className="mt-8 flex flex-wrap gap-6 pt-8 border-t border-ink-100">
              <div>
                <p className="text-xs text-ink-400 uppercase tracking-wider mb-1">Phone</p>
                <p className="text-sm font-semibold text-ink-800">{personalInfo.phone}</p>
              </div>
              <div>
                <p className="text-xs text-ink-400 uppercase tracking-wider mb-1">Location</p>
                <p className="text-sm font-semibold text-ink-800">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
