import { motion } from 'framer-motion';
import { Download, RotateCcw, Share2 } from 'lucide-react';
import { COMPLIMENTS } from '../../lib/constants';
import { useRef, useMemo } from 'react';

interface ResultSectionProps {
  originalImage: string;
  resultImage: string;
  onReset: () => void;
}

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

export function ResultSection({ originalImage, resultImage, onReset }: ResultSectionProps) {
  const compliment = useMemo(
    () => COMPLIMENTS[Math.floor(Math.random() * COMPLIMENTS.length)],
    []
  );
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = () => {
    if (isIOS()) {
      window.open(resultImage, '_blank');
      return;
    }
    const a = document.createElement('a');
    a.href = resultImage;
    a.download = 'my-impressionist-portrait.png';
    a.click();
  };

  const handleShare = async () => {
    const text = 'I just transformed myself into an Impressionist painting! 🎨';
    if (navigator.share) {
      try {
        await navigator.share({ title: 'My Impressionist Portrait', text });
        return;
      } catch {
        // fall through to clipboard
      }
    }
    navigator.clipboard.writeText(text).then(() => alert('Share text copied to clipboard!'));
  };

  return (
    <motion.section
      id="result"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 sm:py-24 bg-[#1A1410]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p
            className="text-[#C9A84C] text-sm sm:text-base font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Your Masterpiece
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Behold Your{' '}
            <span className="shimmer-text italic">Portrait</span>
          </h2>
          <div className="brushstroke-divider mb-4" />
          <p
            className="text-white/50 italic text-base sm:text-lg"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "{compliment}"
          </p>
        </motion.div>

        {/* Before / After */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mb-10 sm:mb-14">
          {/* Original */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-full rounded-xl overflow-hidden border-2 border-white/10 shadow-lg">
              <img
                src={originalImage}
                alt="Original photo"
                className="w-full object-cover"
                style={{ maxHeight: 400 }}
              />
            </div>
            <p
              className="mt-3 text-white/40 text-sm tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Your photo
            </p>
          </motion.div>

          {/* Result — in gilded frame */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full">
              <div className="gilded-frame rounded-xl overflow-hidden">
                <img
                  src={resultImage}
                  alt="Impressionist portrait"
                  className="w-full object-cover"
                  style={{ maxHeight: 400 }}
                />
              </div>
              {/* Artist signature */}
              <p
                className="absolute bottom-4 right-4 text-white/60 text-xs italic bg-black/30 px-2 py-0.5 rounded"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                ✦ Impressionism Studio
              </p>
            </div>
            <p
              className="mt-3 text-[#C9A84C]/80 text-sm tracking-wide italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Your Impressionist portrait
            </p>
          </motion.div>
        </div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#C9A84C] to-[#8B6914] text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <Download className="w-4 h-4" />
            {isIOS() ? 'Open & Save Image' : 'Download Portrait'}
          </button>
          <button
            onClick={handleShare}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-200 text-sm sm:text-base"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button
            onClick={onReset}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white/60 hover:text-white font-medium rounded-full hover:border-white/40 transition-all duration-200 text-sm sm:text-base"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <RotateCcw className="w-4 h-4" />
            Try Another Photo
          </button>
        </motion.div>

        <a ref={linkRef} className="hidden" />
      </div>
    </motion.section>
  );
}
