const placeholderImg = (w = 320, h = 180, text = 'Poster') =>
  `https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=${w}&h=${h}&fit=crop&auto=format&txt=${encodeURIComponent(
    text
  )}`;

const heroBackdrop =
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop';

export const featured = {
  id: 'feat-001',
  title: 'Ocean Depths',
  description:
    'Dive into an epic journey beneath the waves. Explore mysterious depths, hidden worlds, and timeless legends.',
  backdrop: heroBackdrop,
  progress: 0.0,
  tags: ['Adventure', 'Documentary', '4K'],
};

export const rails = [
  {
    id: 'rail-trending',
    title: 'Trending',
    items: Array.from({ length: 14 }).map((_, i) => ({
      id: `tr-${i + 1}`,
      title: `Blue Horizon ${i + 1}`,
      img: placeholderImg(320, 180, `Trending ${i + 1}`),
      progress: i % 5 === 0 ? 0.35 : 0,
      meta: `${90 + i} min`,
      rating: (3 + (i % 3)).toFixed(1),
    })),
  },
  {
    id: 'rail-continue',
    title: 'Continue Watching',
    items: Array.from({ length: 10 }).map((_, i) => ({
      id: `cw-${i + 1}`,
      title: `Return to Tide ${i + 1}`,
      img: placeholderImg(320, 180, `Continue ${i + 1}`),
      progress: 0.12 * ((i % 7) + 1),
      meta: `${60 + i} min`,
      rating: (3.5 + (i % 2)).toFixed(1),
    })),
  },
  {
    id: 'rail-new',
    title: 'New Releases',
    items: Array.from({ length: 12 }).map((_, i) => ({
      id: `nr-${i + 1}`,
      title: `Coral City ${i + 1}`,
      img: placeholderImg(320, 180, `New ${i + 1}`),
      progress: 0,
      meta: `S${(i % 3) + 1}:E${(i % 8) + 1}`,
      rating: (4.0 + ((i + 1) % 2) * 0.4).toFixed(1),
    })),
  },
];
