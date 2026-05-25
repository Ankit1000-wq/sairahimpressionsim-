import { Router, Request, Response } from 'express';
import multer from 'multer';
import sharp from 'sharp';
import { transformToImpressionist } from '../lib/openai';

const router = Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (['image/jpeg', 'image/png', 'image/webp'].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG, PNG, and WebP images are accepted.'));
    }
  },
});

router.post('/', upload.single('image'), async (req: Request, res: Response): Promise<void> => {
  if (!req.file) {
    res.status(400).json({ error: 'No image provided.' });
    return;
  }

  try {
    const processed = await sharp(req.file.buffer)
      .resize(1024, 1024, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 90 })
      .toBuffer();

    const imageDataUrl = await transformToImpressionist(processed);
    res.json({ image: imageDataUrl });
  } catch (err: unknown) {
    console.error('[transform]', err);
    const message = err instanceof Error ? err.message : 'Transformation failed.';
    res.status(500).json({ error: message });
  }
});

export default router;
