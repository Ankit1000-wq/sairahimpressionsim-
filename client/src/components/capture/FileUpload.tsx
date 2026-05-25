import { useCallback, useState, useRef } from 'react';
import { Upload, ImageIcon, AlertCircle } from 'lucide-react';
import { ImagePreview } from './ImagePreview';

interface FileUploadProps {
  onCapture: (dataUrl: string) => void;
}

const ACCEPTED = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_SIZE_MB = 20;

export function FileUpload({ onCapture }: FileUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback((file: File) => {
    setError(null);
    if (!ACCEPTED.includes(file.type)) {
      setError('Please upload a JPEG, PNG, or WebP image.');
      return;
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`File is too large. Please use an image under ${MAX_SIZE_MB}MB.`);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  if (preview) {
    return (
      <ImagePreview
        dataUrl={preview}
        onRetake={() => setPreview(null)}
        onConfirm={() => onCapture(preview)}
      />
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`
          w-full max-w-md mx-auto cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-300
          flex flex-col items-center justify-center gap-4 p-10 sm:p-14
          ${dragging
            ? 'border-[#C9A84C] bg-[#FFF9E6] scale-[1.02]'
            : 'border-[#C9A84C]/40 bg-white/60 hover:border-[#C9A84C] hover:bg-[#FFF9E6]/50'
          }
        `}
      >
        <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
          dragging ? 'bg-[#C9A84C] scale-110' : 'bg-[#C9A84C]/15'
        }`}>
          {dragging
            ? <Upload className="w-8 h-8 text-white" />
            : <ImageIcon className="w-8 h-8 text-[#C9A84C]" />
          }
        </div>

        <div className="text-center">
          <p
            className="text-base sm:text-lg font-semibold text-[#1A1410] mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {dragging ? 'Drop your photo here' : 'Drag & drop your photo'}
          </p>
          <p
            className="text-[#1A1410]/50 text-sm"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            or <span className="text-[#C9A84C] font-medium">click to browse</span>
          </p>
          <p
            className="text-[#1A1410]/35 text-xs mt-2"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            JPEG, PNG or WebP · Max {MAX_SIZE_MB}MB
          </p>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={handleChange}
        />
      </div>

      {error && (
        <div className="mt-4 flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span style={{ fontFamily: "'Lato', sans-serif" }}>{error}</span>
        </div>
      )}

      <p
        className="mt-5 text-[#1A1410]/40 text-xs text-center max-w-xs"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        For best results, use a clear photo of your face with good lighting.
      </p>
    </div>
  );
}
