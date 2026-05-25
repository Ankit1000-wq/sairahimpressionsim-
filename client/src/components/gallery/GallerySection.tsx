import { motion } from 'framer-motion';
import { GALLERY_PAINTINGS } from '../../lib/constants';

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p
            className="text-[#C9A84C] text-sm sm:text-base font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Inspiration
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1410] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Famous{' '}
            <span className="text-[#C9A84C] italic">Masterpieces</span>
          </h2>
          <div className="brushstroke-divider mb-5" />
          <p
            className="text-[#1A1410]/60 max-w-xl mx-auto text-base sm:text-lg"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            The works that inspired a revolution — and inspired your portrait.
          </p>
        </motion.div>

        {/* Paintings grid — responsive masonry-like layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_PAINTINGS.map((painting, i) => (
            <motion.div
              key={painting.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
            >
              <img
                src={painting.imageUrl}
                alt={painting.title}
                className="w-full object-cover aspect-[3/4] sm:aspect-[4/5] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/90 via-[#1A1410]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-3 sm:p-4">
                <p
                  className="text-white font-bold text-xs sm:text-sm leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {painting.title}
                </p>
                <p
                  className="text-[#C9A84C] text-xs mt-0.5"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {painting.artist}, {painting.year}
                </p>
                <p
                  className="text-white/60 text-xs mt-1 leading-snug hidden sm:block"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {painting.description}
                </p>
              </div>

              {/* Always-visible bottom label on mobile */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1A1410]/80 to-transparent px-2 sm:px-3 py-2 sm:py-3 sm:opacity-0">
                <p
                  className="text-white text-xs font-semibold truncate"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {painting.title}
                </p>
                <p
                  className="text-[#C9A84C] text-xs"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {painting.artist}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
