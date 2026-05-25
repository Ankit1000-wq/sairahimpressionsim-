import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';

const HERO_BG =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = () => {
    document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background painting */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay with warm tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1410]/80 via-[#1A1410]/70 to-[#1A1410]/85" />

      {/* Floating paint dabs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { color: '#C9A84C', size: 120, top: '10%', left: '5%', delay: '0s' },
          { color: '#4A7FA5', size: 80, top: '20%', right: '8%', delay: '2s' },
          { color: '#D4778A', size: 60, top: '60%', left: '3%', delay: '1s' },
          { color: '#7A9E7E', size: 100, bottom: '15%', right: '5%', delay: '3s' },
          { color: '#B8A9C9', size: 50, top: '40%', right: '15%', delay: '1.5s' },
        ].map((dab, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 float-anim"
            style={{
              background: `radial-gradient(circle, ${dab.color} 0%, transparent 70%)`,
              width: dab.size,
              height: dab.size,
              top: dab.top,
              left: (dab as any).left,
              right: (dab as any).right,
              bottom: (dab as any).bottom,
              animationDelay: dab.delay,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6 sm:mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Impressionism since 1874</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          See Yourself as{' '}
          <span className="shimmer-text block sm:inline">
            a Masterpiece
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Take your photo and step inside a 19th-century Impressionist painting.
          AI transforms you into a glowing, radiant portrait — in seconds.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <button
            onClick={onCTAClick}
            className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#C9A84C] to-[#8B6914] text-white font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] transform hover:-translate-y-1 transition-all duration-300"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Transform My Portrait →
          </button>
          <button
            onClick={scrollDown}
            className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 bg-white/10 border border-white/30 text-white font-semibold text-base sm:text-lg rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Learn About Impressionism
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-white/60 text-xs sm:text-sm"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <span className="italic">Powered by AI</span>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <span className="italic">Inspired by Monet, Renoir & Pissarro</span>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <span className="italic">Free to try</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8" />
      </button>
    </section>
  );
}
