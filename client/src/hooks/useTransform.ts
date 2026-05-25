import { useState, useRef, useCallback } from 'react';
import { transformImage } from '../lib/api';

export type TransformStatus = 'idle' | 'processing' | 'success' | 'error';

export function useTransform() {
  const [status, setStatus] = useState<TransformStatus>('idle');
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const transform = useCallback(async (imageDataUrl: string) => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setStatus('processing');
    setError(null);
    setResultImage(null);

    try {
      const result = await transformImage(imageDataUrl, controller.signal);
      setResultImage(result);
      setStatus('success');
    } catch (e: unknown) {
      if (e instanceof Error && e.name === 'AbortError') return;
      const msg = e instanceof Error ? e.message : 'Something went wrong. Please try again.';
      setError(msg);
      setStatus('error');
    }
  }, []);

  const cancel = useCallback(() => {
    abortRef.current?.abort();
    setStatus('idle');
  }, []);

  const reset = useCallback(() => {
    abortRef.current?.abort();
    setStatus('idle');
    setResultImage(null);
    setError(null);
  }, []);

  return { status, resultImage, error, transform, cancel, reset };
}
