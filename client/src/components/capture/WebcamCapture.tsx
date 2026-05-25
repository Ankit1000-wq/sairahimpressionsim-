import { useEffect, useState } from 'react';
import { Camera, RotateCcw, Sparkles, AlertCircle } from 'lucide-react';
import { useWebcam } from '../../hooks/useWebcam';
import { ImagePreview } from './ImagePreview';

interface WebcamCaptureProps {
  onCapture: (dataUrl: string) => void;
}

export function WebcamCapture({ onCapture }: WebcamCaptureProps) {
  const { videoRef, isReady, error, start, capture } = useWebcam();
  const [preview, setPreview] = useState<string | null>(null);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    start();
  }, [start]);

  const handleCapture = () => {
    const dataUrl = capture();
    if (!dataUrl) return;
    setFlash(true);
    setTimeout(() => setFlash(false), 200);
    setPreview(dataUrl);
  };

  const handleRetake = () => {
    setPreview(null);
  };

  if (preview) {
    return (
      <ImagePreview
        dataUrl={preview}
        onRetake={handleRetake}
        onConfirm={() => onCapture(preview)}
      />
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-[#C9A84C]/30">
        {/* Flash effect */}
        {flash && (
          <div className="absolute inset-0 bg-white z-20 opacity-80 animate-pulse" />
        )}

        {/* Camera viewfinder overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#C9A84C]/70 rounded-tl" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#C9A84C]/70 rounded-tr" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#C9A84C]/70 rounded-bl" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#C9A84C]/70 rounded-br" />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(26,20,16,0.3) 100%)'
        }} />

        {error ? (
          <div className="aspect-video bg-[#F5EDD8] flex flex-col items-center justify-center p-6 text-center gap-3">
            <AlertCircle className="w-10 h-10 text-[#C9A84C]" />
            <p className="text-[#1A1410]/70 text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
              {error}
            </p>
          </div>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full aspect-video object-cover bg-[#1A1410]"
            style={{ transform: 'scaleX(-1)' }}
          />
        )}
      </div>

      {!error && (
        <p className="text-[#1A1410]/40 text-xs mt-3 mb-5 text-center" style={{ fontFamily: "'Lato', sans-serif" }}>
          Position your face in the center and smile!
        </p>
      )}

      {/* Capture button */}
      {!error && (
        <button
          onClick={handleCapture}
          disabled={!isReady}
          className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#8B6914] text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none text-base sm:text-lg"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          <Camera className="w-5 h-5" />
          {isReady ? 'Capture My Portrait' : 'Starting Camera…'}
        </button>
      )}

      {error && (
        <div className="flex flex-col items-center gap-3 mt-4">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 text-sm text-[#C9A84C] hover:text-[#8B6914] transition-colors"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <RotateCcw className="w-4 h-4" />
            Try again
          </button>
          <p className="text-[#1A1410]/50 text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>
            Or switch to the{' '}
            <span className="text-[#C9A84C] flex items-center gap-1 inline-flex">
              <Sparkles className="w-3 h-3" /> Upload tab
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
