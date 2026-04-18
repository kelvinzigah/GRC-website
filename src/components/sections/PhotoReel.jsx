const REEL_IMAGES = [
  { src: '/images/reel-pics/reel-1.jpg', alt: 'GRC community' },
  { src: '/images/reel-pics/reel-2.jpg', alt: 'GRC community' },
  { src: '/images/reel-pics/reel-3.jpg', alt: 'GRC community' },
  { src: '/images/reel-pics/reel-4.jpg', alt: 'GRC community' },
  { src: '/images/reel-pics/reel-5.jpg', alt: 'GRC community' },
  { src: '/images/front_page_1.jpg', alt: 'GRC community' },
];

export function PhotoReel() {
  return (
    <div className="h-56 sm:h-64 md:h-72 overflow-hidden" aria-hidden="true">
      <div className="animate-marquee flex h-full" style={{ width: 'max-content' }}>
        {/* Render twice for seamless loop */}
        {[...REEL_IMAGES, ...REEL_IMAGES].map(({ src, alt }, i) => (
          <div key={i} className="h-full w-[40vw] sm:w-[30vw] md:w-[22vw] shrink-0">
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
