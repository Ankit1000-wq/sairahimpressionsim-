import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Camera, Upload } from 'lucide-react';
import { WebcamCapture } from './WebcamCapture';
import { FileUpload } from './FileUpload';

type Tab = 'camera' | 'upload';

interface CaptureSectionProps {
  onCapture: (imageDataUrl: string) => void;
}

export function CaptureSection({ onCapture }: CaptureSectionProps) {
  const [tab, setTab] = useState<Tab>('camera');

  const handleCapture = useCallback(
    (dataUrl: string) => {
      onCapture(dataUrl);
    },
    [onCapture]
  );

  return (
    <section id="capture" className="py-16 sm:py-24 bg-[#F5EDD8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p
            className="text-[#C9A84C] text-sm sm:text-base font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Your Portrait
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1410] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Become the{' '}
            <span className="text-[#C9A84C] italic">Subject</span>
          </h2>
          <div className="brushstroke-divider mb-5" />
          <p
            className="text-[#1A1410]/60 max-w-lg mx-auto text-base sm:text-lg"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Take a selfie or upload a photo. Our AI will paint you into
            a beautiful Impressionist scene.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex rounded-full bg-[#E8D090]/40 p-1 mb-8 sm:mb-10 max-w-xs mx-auto border border-[#C9A84C]/20"
        >
          {([
            { id: 'camera', label: 'Take Photo', Icon: Camera },
            { id: 'upload', label: 'Upload', Icon: Upload },
          ] as const).map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-sm font-semibold transition-all duration-300 ${
                tab === id
                  ? 'bg-[#C9A84C] text-white shadow-md'
                  : 'text-[#1A1410]/60 hover:text-[#1A1410]'
              }`}
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {tab === 'camera' ? (
            <WebcamCapture onCapture={handleCapture} />
          ) : (
            <FileUpload onCapture={handleCapture} />
          )}
        </motion.div>
      </div>
    </section>
  );
}
