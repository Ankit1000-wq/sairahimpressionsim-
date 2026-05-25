import { Sparkles, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

interface ImagePreviewProps {
  dataUrl: string;
  onRetake: () => void;
  onConfirm: () => void;
}

export function ImagePreview({ dataUrl, onRetake, onConfirm }: ImagePreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col items-center"
    >
      {/* Canvas-style frame */}
      <div className="relative w-full max-w-sm mx-auto mb-5">
        <div className="rounded-xl overflow-hidden shadow-xl border-4 border-[#C9A84C]/40">
          <img
            src={dataUrl}
            alt="Your captured photo"
            className="w-full object-cover"
            style={{ maxHeight: 400 }}
          />
        </div>
        {/* Corner accents */}
        <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-[#C9A84C] rounded-tl" />
        <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-[#C9A84C] rounded-tr" />
        <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-[#C9A84C] rounded-bl" />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-[#C9A84C] rounded-br" />
      </div>

      <p
        className="text-[#1A1410]/55 text-sm mb-6 text-center"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Looking great! Ready to become a masterpiece?
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
        <button
          onClick={onRetake}
          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border border-[#C9A84C]/40 text-[#1A1410]/70 font-medium rounded-full hover:border-[#C9A84C] hover:text-[#1A1410] transition-all duration-200 text-sm sm:text-base"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          <RotateCcw className="w-4 h-4" />
          Retake
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#C9A84C] to-[#8B6914] text-white font-bold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          <Sparkles className="w-4 h-4" />
          Paint Me!
        </button>
      </div>
    </motion.div>
  );
}
