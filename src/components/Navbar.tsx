import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { navLinks, personalInfo } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href);
      const current = sections.find((href) => {
        const el = document.querySelector(href);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-lg shadow-ink-900/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#hero')}
              className="flex items-center gap-2 group"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled ? 'bg-primary-600' : 'bg-white/15 backdrop-blur-md'
              } group-hover:scale-110`}>
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col items-start">
                <span className={`text-sm font-bold leading-tight ${
                  scrolled ? 'text-ink-900' : 'text-white'
                }`}>
                  K.F. Mashego
                </span>
                <span className={`text-[10px] leading-tight ${
                  scrolled ? 'text-ink-500' : 'text-white/70'
                }`}>
                  Professional Portfolio
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeSection === link.href
                        ? scrolled
                          ? 'text-primary-700 bg-primary-50'
                          : 'text-white bg-white/15'
                        : scrolled
                          ? 'text-ink-600 hover:text-primary-600 hover:bg-ink-50'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => handleNavClick('#contact')}
              className={`hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                scrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25'
                  : 'bg-white text-ink-900 hover:bg-primary-50 hover:shadow-lg'
              }`}
            >
              Get in Touch
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-ink-700 hover:bg-ink-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl p-6 pt-24 transition-transform duration-400 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all ${
                    activeSection === link.href
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-ink-700 hover:bg-ink-50'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleNavClick('#contact')}
            className="w-full mt-4 px-5 py-3 text-sm font-semibold rounded-xl bg-primary-600 text-white hover:bg-primary-700"
          >
            Get in Touch
          </button>
          <div className="mt-6 pt-6 border-t border-ink-100">
            <p className="text-xs text-ink-400">{personalInfo.phone}</p>
            <p className="text-xs text-ink-400 mt-1">{personalInfo.location}</p>
          </div>
        </div>
      </div>
    </>
  );
}
