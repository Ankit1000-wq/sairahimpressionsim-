import { dataUrlToBlob, compressImage } from './imageUtils';

export async function transformImage(
  imageDataUrl: string,
  signal?: AbortSignal
): Promise<string> {
  const compressed = await compressImage(imageDataUrl, 1024, 0.88);
  const blob = dataUrlToBlob(compressed);
  const formData = new FormData();
  formData.append('image', blob, 'photo.jpg');

  const res = await fetch('/api/transform', {
    method: 'POST',
    body: formData,
    signal,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(err.error ?? `HTTP ${res.status}`);
  }

  const data = await res.json();
  return data.image as string;
}
