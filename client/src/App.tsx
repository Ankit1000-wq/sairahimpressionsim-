import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { EducationSection } from './components/education/EducationSection';
import { CaptureSection } from './components/capture/CaptureSection';
import { ProcessingScreen } from './components/processing/ProcessingScreen';
import { ResultSection } from './components/result/ResultSection';
import { GallerySection } from './components/gallery/GallerySection';
import { useTransform } from './hooks/useTransform';

export default function App() {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const { status, resultImage, transform, cancel, reset } = useTransform();

  const scrollToCapture = useCallback(() => {
    document.querySelector('#capture')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleCapture = useCallback(
    async (dataUrl: string) => {
      setCapturedImage(dataUrl);
      await transform(dataUrl);
    },
    [transform]
  );

  const handleReset = useCallback(() => {
    reset();
    setCapturedImage(null);
    setTimeout(scrollToCapture, 100);
  }, [reset, scrollToCapture]);

  const handleCancel = useCallback(() => {
    cancel();
    setCapturedImage(null);
  }, [cancel]);

  return (
    <div className="min-h-screen w-full bg-[#FAF7F2]">
      <Navbar />

      <main>
        <HeroSection onCTAClick={scrollToCapture} />
        <EducationSection />

        {status !== 'success' && (
          <CaptureSection onCapture={handleCapture} />
        )}

        {status === 'success' && capturedImage && resultImage && (
          <ResultSection
            originalImage={capturedImage}
            resultImage={resultImage}
            onReset={handleReset}
          />
        )}

        {status === 'error' && (
          <div className="py-16 bg-[#F5EDD8] text-center px-4">
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-8 border border-red-100">
              <p
                className="text-xl font-bold text-[#1A1410] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Something went wrong
              </p>
              <p
                className="text-[#1A1410]/60 text-sm mb-6"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                The AI ran into a problem. Please check that your OpenAI API key is set and try again.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-[#C9A84C] text-white font-bold rounded-full text-sm"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        <GallerySection />
      </main>

      <footer className="bg-[#1A1410] text-white/40 text-center py-6 sm:py-8 px-4">
        <p
          className="text-xs sm:text-sm italic"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Impressionism Studio — a school project celebrating the art of light, color, and beauty
        </p>
        <p
          className="text-xs mt-2"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Powered by AI · Inspired by Monet, Renoir & Pissarro
        </p>
      </footer>

      <AnimatePresence>
        {status === 'processing' && capturedImage && (
          <ProcessingScreen
            originalImage={capturedImage}
            onCancel={handleCancel}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
