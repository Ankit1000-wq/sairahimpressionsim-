import { motion } from 'framer-motion';
import { Sun, Brush, Coffee } from 'lucide-react';
import { ARTISTS } from '../../lib/constants';

const PILLARS = [
  {
    icon: Sun,
    title: 'Light & Color',
    desc: 'Impressionists were obsessed with natural light. They painted the same scene at different times of day to show how light transforms color — a haystack at noon looks nothing like at sunset.',
    color: '#C9A84C',
    bg: 'from-[#FFF9E6] to-[#FAF2D0]',
  },
  {
    icon: Brush,
    title: 'Loose Brushstrokes',
    desc: 'Instead of blending paint smoothly, Impressionists applied dabs and strokes of pure color side-by-side. Up close it looks messy — from a distance, the eye blends them into vibrant life.',
    color: '#4A7FA5',
    bg: 'from-[#E6F4FF] to-[#D0E8FA]',
  },
  {
    icon: Coffee,
    title: 'Everyday Life',
    desc: 'Rather than grand historical scenes, Impressionists painted ordinary moments: people at cafés, children playing, boats on rivers, dancers in sunlight. Life itself was worthy of art.',
    color: '#D4778A',
    bg: 'from-[#FFF0F3] to-[#FAD8E0]',
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p
            className="text-[#C9A84C] text-sm sm:text-base font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Art History
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1410] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What is{' '}
            <span className="text-[#C9A84C] italic">Impressionism?</span>
          </h2>
          <div className="brushstroke-divider mb-6" />
          <p
            className="text-[#1A1410]/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Born in Paris in 1874, Impressionism was a revolution in art — capturing the
            fleeting beauty of the everyday world through light, color, and feeling.
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`bg-gradient-to-br ${pillar.bg} rounded-2xl p-6 sm:p-7 border border-[#C9A84C]/10 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                  style={{ background: `${pillar.color}20`, border: `1.5px solid ${pillar.color}40` }}
                >
                  <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                </div>
                <h3
                  className="text-lg sm:text-xl font-bold text-[#1A1410] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-sm sm:text-base text-[#1A1410]/65 leading-relaxed"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Artists */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1410] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Masters
          </h3>
          <div className="brushstroke-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ARTISTS.map((artist, i) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#C9A84C]/10"
            >
              {/* Famous painting */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={artist.famousPainting}
                  alt={artist.famousPaintingTitle}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p
                  className="absolute bottom-2 left-3 right-3 text-white/90 text-xs font-medium"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {artist.famousPaintingTitle}
                </p>
              </div>

              <div className="p-5 sm:p-6">
                {/* Artist info */}
                <div className="flex items-start gap-3 mb-4">
                  <img
                    src={artist.imageUrl}
                    alt={artist.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#C9A84C]/40 shadow-sm flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h4
                      className="text-base sm:text-lg font-bold text-[#1A1410]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {artist.name}
                    </h4>
                    <p
                      className="text-[#C9A84C] text-xs sm:text-sm italic"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {artist.years}
                    </p>
                  </div>
                </div>

                <p
                  className="text-[#1A1410]/65 text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {artist.description}
                </p>

                {/* Palette swatches */}
                <div>
                  <p
                    className="text-xs text-[#1A1410]/40 uppercase tracking-wider mb-2"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Signature Colors
                  </p>
                  <div className="flex gap-1.5">
                    {artist.palette.map((color) => (
                      <div
                        key={color}
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white shadow-sm flex-shrink-0"
                        style={{ background: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-20 bg-gradient-to-r from-[#1A1410] to-[#2D2420] rounded-2xl p-6 sm:p-10 text-center"
        >
          <p
            className="text-[#C9A84C] text-xs sm:text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            A brief history
          </p>
          <h3
            className="text-2xl sm:text-3xl font-bold text-white mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            From Revolution to Masterpiece
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { year: '1841', event: 'Paint tube invented — outdoor painting becomes possible' },
              { year: '1874', event: 'First Impressionist Exhibition — critics are outraged' },
              { year: '1890s', event: 'Monet paints his Water Lilies series at Giverny' },
              { year: 'Today', event: 'Impressionist works are among the most beloved on Earth' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-[#C9A84C] text-lg sm:text-xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.year}
                </div>
                <div className="text-white/60 text-xs sm:text-sm leading-snug" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
