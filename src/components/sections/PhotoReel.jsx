const REEL_IMAGES = [
  { src: '/images/reel-pics/reel-1.jpg', alt: 'GRC community' },
  { src: '/images/reel-pics/reel-2.jpg', alt: 'GRC community' },
  { src: '/images/reel-pics/reel-3.jpg', alt: 'GRC community' },
  { src: '/images/reel-pics/reel-4.jpg', alt: 'GRC community' },
  { src: '/images/reel-pics/reel-5.jpg', alt: 'GRC community' },
];

export function PhotoReel() {
  return (
    <div className="flex h-56 sm:h-64 md:h-72 overflow-hidden" aria-hidden="true">
      {REEL_IMAGES.map(({ src, alt }) => (
        <div key={src} className="flex-1 min-w-0">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
