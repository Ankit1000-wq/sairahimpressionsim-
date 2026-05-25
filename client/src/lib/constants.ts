import type { Artist, Painting } from '../types';

export const ARTISTS: Artist[] = [
  {
    name: 'Claude Monet',
    years: '1840–1926',
    description: 'The father of Impressionism, Monet was obsessed with capturing how light transforms landscapes at different times of day. He painted his Rouen Cathedral 30 times — each at a different hour.',
    palette: ['#7EBFCC', '#C8E6C9', '#FFF9C4', '#E3C9A8', '#B0BEC5', '#A8D5E2'],
    style: 'Broken color, atmospheric haze, reflections',
    signature: 'Series paintings, dissolving forms, water and light',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/440px-Claude_Monet_1899_Nadar_crop.jpg',
    famousPainting: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg',
    famousPaintingTitle: 'Water Lilies (1906)',
  },
  {
    name: 'Pierre-Auguste Renoir',
    years: '1841–1919',
    description: 'Renoir painted the joy of life — dancing, laughter, sunlit afternoons. His portraits radiate warmth, with figures glowing as if lit from within. He created over 6,000 paintings in his lifetime.',
    palette: ['#F8C8A0', '#E8A87C', '#D4A0C0', '#98C8B0', '#F0E0B8', '#E8B4B0'],
    style: 'Warm skin tones, soft focus, joyful scenes',
    signature: 'Dappled light, figures in motion, Parisian life',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Pierre-Auguste_Renoir_-_Self-Portrait_-_1875.jpg/440px-Pierre-Auguste_Renoir_-_Self-Portrait_-_1875.jpg',
    famousPainting: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Bougival.jpg/1280px-Bougival.jpg',
    famousPaintingTitle: 'Dance at Bougival (1883)',
  },
  {
    name: 'Camille Pissarro',
    years: '1830–1903',
    description: 'Called "the dean of the Impressionists," Pissarro was the only artist to show in all 8 Impressionist exhibitions. He masterfully depicted rural life and the hustle of Parisian boulevards.',
    palette: ['#8CA870', '#C8B870', '#E8D090', '#A8C890', '#787858', '#B8A860'],
    style: 'Rural landscapes, urban scenes, natural rhythm',
    signature: 'Peasant life, countryside, working people',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Camille_Pissarro_-_Self-Portrait_-_1873.jpg/440px-Camille_Pissarro_-_Self-Portrait_-_1873.jpg',
    famousPainting: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Boulevard_Montmartre%2C_Afternoon_Sunshine_%281897%29.jpg/1280px-Boulevard_Montmartre%2C_Afternoon_Sunshine_%281897%29.jpg',
    famousPaintingTitle: 'Boulevard Montmartre (1897)',
  },
];

export const FUN_FACTS = [
  '"Impressionism" was a joke — a critic mocked Monet\'s painting "Impression, Sunrise" in 1874. The artists loved the name and kept it.',
  'Impressionists painted outdoors ("en plein air") to capture natural light — revolutionary in an era when artists only worked in studios.',
  'The tube of paint, invented in 1841, made Impressionism possible. Renoir said: "Without tubes of paint, there would be no Impressionism."',
  'Monet painted his Water Lilies series while nearly blind from cataracts — giving them their dreamy, hazy quality.',
  'The first Impressionist exhibition in 1874 was savagely mocked by critics. Today those same paintings sell for hundreds of millions.',
  'Renoir painted "Luncheon of the Boating Party" on the Seine — he later married Aline Charigot, the woman holding the small dog.',
  'Pissarro was the only artist in all 8 Impressionist exhibitions — he was the group\'s mentor and heart.',
  'Berthe Morisot was a founding Impressionist, showing work in 7 of the 8 exhibitions — and Manet\'s sister-in-law.',
  'Impressionists used bold, unmixed colors side-by-side — the eye blends them from a distance, creating vibrant optical effects.',
  'Monet built the famous water garden at Giverny himself, then spent decades painting it. The garden still exists today!',
];

export const GALLERY_PAINTINGS: Painting[] = [
  {
    title: 'Water Lilies',
    artist: 'Claude Monet',
    year: 1906,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/800px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg',
    description: 'A masterpiece of light and reflection — painted over 30 years in Monet\'s own garden.',
  },
  {
    title: 'Impression, Sunrise',
    artist: 'Claude Monet',
    year: 1872,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/800px-Monet_-_Impression%2C_Sunrise.jpg',
    description: 'The painting that gave the movement its name — and was meant as an insult.',
  },
  {
    title: 'Dance at Le Moulin de la Galette',
    artist: 'Pierre-Auguste Renoir',
    year: 1876,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Auguste_Renoir_-_Dance_at_Le_Moulin_de_la_Galette_-_Mus%C3%A9e_d%27Orsay_RF_2739_%28derivative_work_-_AutoContrast_enh_0.5pc%29.jpg/800px-Auguste_Renoir_-_Dance_at_Le_Moulin_de_la_Galette_-_Mus%C3%A9e_d%27Orsay_RF_2739_%28derivative_work_-_AutoContrast_enh_0.5pc%29.jpg',
    description: 'A Sunday afternoon in Montmartre — light, dancing, and pure Parisian joy.',
  },
  {
    title: 'The Luncheon of the Boating Party',
    artist: 'Pierre-Auguste Renoir',
    year: 1881,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Renoir_-_Luncheon_of_the_Boating_Party.jpg/800px-Renoir_-_Luncheon_of_the_Boating_Party.jpg',
    description: 'Renoir called it his greatest work — a sun-drenched feast of friendship.',
  },
  {
    title: 'Boulevard Montmartre',
    artist: 'Camille Pissarro',
    year: 1897,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Boulevard_Montmartre%2C_Afternoon_Sunshine_%281897%29.jpg/800px-Boulevard_Montmartre%2C_Afternoon_Sunshine_%281897%29.jpg',
    description: 'Paris alive with movement — Pissarro painted this boulevard series from his hotel window.',
  },
  {
    title: 'The Cradle',
    artist: 'Berthe Morisot',
    year: 1872,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Berthe_Morisot_-_In_the_Cradle_%281872%29.jpg/680px-Berthe_Morisot_-_In_the_Cradle_%281872%29.jpg',
    description: 'The first painting shown at the 1874 exhibition — intimate, tender, revolutionary.',
  },
];

export const COMPLIMENTS = [
  'The light catches you beautifully in this scene.',
  'You look radiant — as though you stepped out of a dream.',
  'The artist has captured something timeless about you.',
  'Golden afternoon light suits you perfectly.',
  'You belong in a masterpiece.',
  'A portrait worthy of the Louvre.',
  'The brushstrokes reveal your natural warmth and grace.',
];

export const IMPRESSIONIST_PROMPT = `Transform this photograph into a luminous Impressionist oil painting in the style of Renoir and Monet. Place the subject in an idyllic scene — a sun-dappled Parisian garden with blooming roses, or a peaceful riverside meadow with willows, or a warm golden terrace.

Use loose, expressive brushstrokes with visible texture. Bathe the scene in warm golden afternoon light with soft violet shadows. Apply a vibrant yet harmonious color palette: rich ceruleans, warm cadmium yellows, soft rose pinks, and impressionistic greens.

Render the subject beautifully and flatteringly — glowing skin, luminous eyes, graceful presence. Preserve their likeness and identity. The overall mood should be joyful, warm, and alive — as though captured in a perfect summer moment. Painterly, not photorealistic. 19th century French Impressionism aesthetic.`;
