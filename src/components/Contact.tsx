import { useScrollReveal } from '@/hooks/useScrollReveal';
import { personalInfo } from '@/data/portfolio';
import { Phone, MapPin, Mail, Send, Sparkles } from 'lucide-react';

export default function Contact() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-ink-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent-100/40 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-white text-primary-700 text-sm font-semibold rounded-full mb-4 shadow-sm">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-ink-500 max-w-2xl mx-auto text-base">
            Interested in working together? I'd love to hear from you. Reach out using the details below.
          </p>
        </div>

        {/* Contact card */}
        <div className="bg-white rounded-3xl card-shadow overflow-hidden">
          <div className="grid lg:grid-cols-5">
            {/* Left: Contact info */}
            <div className="lg:col-span-2 relative bg-gradient-to-br from-primary-700 via-primary-800 to-ink-900 p-8 lg:p-10 overflow-hidden">
              <div className="absolute inset-0 dot-pattern opacity-30" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-sm text-primary-200 mb-8">
                  {personalInfo.role}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-300 uppercase tracking-wider">Phone</p>
                      <p className="text-sm text-white font-medium">{personalInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-300 uppercase tracking-wider">Location</p>
                      <p className="text-sm text-white font-medium">{personalInfo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-300 uppercase tracking-wider">Email</p>
                      <p className="text-sm text-white font-medium">Available on request</p>
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                <div className="mt-10 pt-6 border-t border-white/10">
                  <p className="text-xs text-primary-300 italic">
                    "{personalInfo.tagline}"
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="lg:col-span-3 p-8 lg:p-10">
              <h3 className="font-display text-xl font-bold text-ink-900 mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-ink-500 mb-6">
                Fill in the form and I'll get back to you as soon as possible.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name') as string;
                  const message = formData.get('message') as string;
                  const phone = personalInfo.phone.replace(/\s/g, '');
                  const body = `Hello, my name is ${name}.%0D%0A%0D%0A${message}`;
                  window.location.href = `sms:${phone}?body=${encodeURIComponent(body)}`;
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-ink-600 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-sm text-ink-800 placeholder-ink-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink-600 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-sm text-ink-800 placeholder-ink-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink-600 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-sm text-ink-800 placeholder-ink-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink-600 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-sm text-ink-800 placeholder-ink-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25 transition-all duration-300 group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
