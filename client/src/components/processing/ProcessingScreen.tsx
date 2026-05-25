import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { FUN_FACTS } from '../../lib/constants';

interface ProcessingScreenProps {
  originalImage: string;
  onCancel: () => void;
}

export function ProcessingScreen({ originalImage, onCancel }: ProcessingScreenProps) {
  const [factIndex, setFactIndex] = useState(0);
  const [showFact, setShowFact] = useState(true);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const factInterval = setInterval(() => {
      setShowFact(false);
      setTimeout(() => {
        setFactIndex((i) => (i + 1) % FUN_FACTS.length);
        setShowFact(true);
      }, 500);
    }, 4000);
    return () => clearInterval(factInterval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const progress = Math.min(elapsed * 2.2, 95);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Blurred original photo background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${originalImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(24px) brightness(0.3) saturate(0.8)',
          transform: 'scale(1.1)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1A1410]/60" />

      {/* Cancel button */}
      <button
        onClick={onCancel}
        className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 text-white/50 hover:text-white transition-colors z-10"
        aria-label="Cancel"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md w-full">
        {/* Spinner */}
        <div className="relative mb-8">
          <div className="paint-spinner" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#8B6914] shadow-lg" />
          </div>
        </div>

        <h2
          className="text-2xl sm:text-3xl font-bold text-white mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Painting your portrait…
        </h2>

        {elapsed > 60 && (
          <p className="text-white/50 text-xs mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
            Still working — AI masterpieces take time!
          </p>
        )}

        {/* Progress bar */}
        <div className="w-full max-w-xs bg-white/10 rounded-full h-1.5 mb-8 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#C9A84C] to-[#F0D080] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>

        {/* Fun fact */}
        <div className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl px-5 py-4 max-w-xs w-full">
          <p
            className="text-[#C9A84C] text-xs uppercase tracking-widest mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Did you know?
          </p>
          <AnimatePresence mode="wait">
            {showFact && (
              <motion.p
                key={factIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="text-white/80 text-xs sm:text-sm leading-relaxed italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "{FUN_FACTS[factIndex]}"
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <p
          className="mt-5 text-white/30 text-xs"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          This usually takes 20–40 seconds
        </p>
      </div>
    </motion.div>
  );
}
