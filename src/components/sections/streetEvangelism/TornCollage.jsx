const PANELS = [
  {
    src: '/images/street-evangelism/se_3.jpg',
    alt: 'Street evangelism prayer moment',
    style: { filter: 'grayscale(1) contrast(1.05)' },
  },
  {
    src: '/images/street-evangelism/se_2.jpg',
    alt: 'Women ministering on the street',
    style: {},
  },
  {
    src: '/images/street-evangelism/se_9.jpg',
    alt: 'Night street evangelism outreach',
    style: { filter: 'brightness(0.9)' },
  },
];

export function TornCollageSection({ quote }) {
  return (
    <section style={{ background: '#000', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="mx-auto max-w-3xl px-4 text-center" style={{ marginBottom: '2.5rem' }}>
        <p className="font-serif italic text-cream text-2xl md:text-3xl leading-relaxed">
          {quote}
        </p>
        <div
          style={{
            borderBottom: '3px solid #D4922A',
            width: '60px',
            margin: '1rem auto 0',
          }}
        />
      </div>

      {/* 3-column image collage — object-contain so every image shows in full */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3px',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        {PANELS.map(({ src, alt, style }) => (
          <div
            key={src}
            style={{
              background: '#000',
              overflow: 'hidden',
              aspectRatio: '3 / 4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
                transition: 'transform 0.4s ease',
                ...style,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
