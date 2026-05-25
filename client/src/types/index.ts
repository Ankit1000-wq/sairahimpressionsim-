export type AppState = 'idle' | 'processing' | 'result' | 'error';

export interface Artist {
  name: string;
  years: string;
  description: string;
  palette: string[];
  style: string;
  signature: string;
  imageUrl: string;
  famousPainting: string;
  famousPaintingTitle: string;
}

export interface Painting {
  title: string;
  artist: string;
  year: number;
  imageUrl: string;
  description: string;
}

export interface TransformResult {
  image: string;
}
