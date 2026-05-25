import { useState, useEffect } from 'react';
import { Palette, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'What is Impressionism?', href: '#education' },
  { label: 'Transform Yourself', href: '#capture' },
  { label: 'Gallery', href: '#gallery' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md border-b border-[#C9A84C]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#C9A84C] to-[#8B6914] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span
              className="font-playfair text-base sm:text-lg font-bold text-[#1A1410]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Impressionism{' '}
              <span className="text-[#C9A84C]">Studio</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-sm font-medium text-[#1A1410]/70 hover:text-[#C9A84C] transition-colors duration-200"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleLink('#capture')}
              className="px-4 py-2 bg-[#C9A84C] text-white text-sm font-semibold rounded-full hover:bg-[#8B6914] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Try it Free →
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-[#1A1410]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#C9A84C]/20 px-4 pt-2 pb-4 flex flex-col gap-2 shadow-lg">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-left py-3 text-sm font-medium text-[#1A1410]/80 hover:text-[#C9A84C] border-b border-[#C9A84C]/10 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLink('#capture')}
            className="mt-2 py-3 bg-[#C9A84C] text-white text-sm font-semibold rounded-full"
          >
            Transform Yourself →
          </button>
        </div>
      )}
    </nav>
  );
}
