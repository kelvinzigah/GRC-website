export function MagazineCollage() {
  const photos = [
    { src: '/images/street-evangelism/se_7.jpg', style: { top: 0, left: -20, width: 310, height: 400, borderRadius: 4, zIndex: 1 } },
    { src: '/images/street-evangelism/se_8.jpg', style: { top: 320, left: 100, width: 240, height: 210, borderRadius: 12, zIndex: 2 } },
    { src: '/images/street-evangelism/se_6.jpg', style: { top: 440, left: 20, width: 280, height: 320, borderRadius: 12, zIndex: 3 } },
    { src: '/images/street-evangelism/se_4.jpg', style: { top: 40, right: 0, width: 280, height: 230, borderRadius: 12, zIndex: 1 } },
    { src: '/images/street-evangelism/se_3.jpg', style: { top: 290, right: 0, width: 280, height: 250, borderRadius: 12, zIndex: 2 } },
    { src: '/images/street-evangelism/se_5.jpg', style: { top: 550, right: -10, width: 330, height: 210, borderRadius: 12, zIndex: 3 } },
  ];

  return (
    <>
      {/* Desktop: absolute layout, constrained to ~760px so columns meet */}
      <div className="hidden md:block mx-auto px-4" style={{ maxWidth: 760, overflow: 'visible' }}>
        <div style={{ position: 'relative', height: 780, overflow: 'visible' }}>
          {/* Blurred background */}
          <img
            src="/images/street-evangelism/se_7.jpg"
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.15,
              filter: 'blur(18px) saturate(1.4)',
              zIndex: 0,
            }}
          />
          {/* Foreground photos */}
          {photos.map(({ src, style }, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                ...style,
              }}
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile fallback: 2×2 grid — no inline display to avoid overriding md:hidden */}
      <div className="grid grid-cols-2 gap-2 px-4 md:hidden">
        {[
          '/images/street-evangelism/se_7.jpg',
          '/images/street-evangelism/se_5.jpg',
          '/images/street-evangelism/se_2.jpg',
          '/images/street-evangelism/se_4.jpg',
        ].map((src, i) => (
          <div key={i} style={{ height: 180, borderRadius: 12, overflow: 'hidden' }}>
            <img src={src} alt="" aria-hidden="true" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </>
  );
}

export function MagazineCollageSection({ headline }) {
  return (
    <section className="pb-12 md:pb-[320px]" style={{ background: '#f5f5f5', paddingTop: '4rem' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-burgundy-dark mb-12">
          {headline}
        </h2>
      </div>
      <MagazineCollage />
    </section>
  );
}
