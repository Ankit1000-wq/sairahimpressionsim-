import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { v4 as uuidv4 } from 'uuid';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const PROMPT = `Transform this photograph into a luminous Impressionist oil painting in the style of Renoir and Monet. Place the subject in an idyllic scene — a sun-dappled Parisian garden with blooming roses and weeping willows, or a peaceful riverside meadow in golden afternoon light.

Use loose, expressive brushstrokes with visible texture. Bathe the scene in warm golden light with soft violet shadows. Apply a vibrant yet harmonious color palette: rich ceruleans, warm cadmium yellows, soft rose pinks, and impressionistic greens.

Render the subject beautifully and flatteringly — glowing skin, luminous eyes, graceful presence. Preserve their likeness and identity. The overall mood should be joyful, warm, and alive — as though captured in a perfect summer moment. Painterly, not photorealistic. 19th century French Impressionism aesthetic.`;

export async function transformToImpressionist(imageBuffer: Buffer): Promise<string> {
  const tmpPath = path.join(os.tmpdir(), `${uuidv4()}.jpg`);
  fs.writeFileSync(tmpPath, imageBuffer);

  try {
    const response = await client.images.edit({
      model: 'gpt-image-1',
      image: fs.createReadStream(tmpPath) as unknown as File,
      prompt: PROMPT,
      n: 1,
      size: '1024x1024',
    });

    const b64 = response.data?.[0]?.b64_json;
    if (!b64) throw new Error('No image data returned from OpenAI');
    return `data:image/png;base64,${b64}`;
  } finally {
    try { fs.unlinkSync(tmpPath); } catch { /* ignore */ }
  }
}
