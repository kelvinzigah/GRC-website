import { useTranslation } from '../../hooks/useTranslation';
import { SectionHeadline } from '../ui/SectionWrapper';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const GALLERY_IMAGES = [
  { src: '/images/togetherness_1.jpg', alt: 'GRC community together' },
  { src: '/images/reel-pics/reel-1.jpg', alt: 'GRC life' },
  { src: '/images/community_2.jpg', alt: 'Community gathering' },
  { src: '/images/evangelism_pic_1.jpg', alt: 'Evangelism outreach' },
  { src: '/images/reel-pics/reel-2.jpg', alt: 'GRC life' },
  { src: '/images/homeless_outreach_1.jpg', alt: 'Homeless outreach' },
  { src: '/images/evangelism_2.jpg', alt: 'Street evangelism' },
  { src: '/images/community_3.jpg', alt: 'Community life' },
  { src: '/images/reel-pics/reel-3.jpg', alt: 'GRC life' },
  { src: '/images/evangelism_3.jpg', alt: 'Evangelism walk' },
  { src: '/images/homeless_outreach_2.jpg', alt: 'Serving our neighbours' },
  { src: '/images/worship_1.jpg', alt: 'Worship service' },
  { src: '/images/community_1.jpg', alt: 'Fellowship' },
  { src: '/images/reel-pics/reel-4.jpg', alt: 'GRC life' },
  { src: '/images/homeless_outreach_5.jpg', alt: 'Outreach day' },
  { src: '/images/reel-pics/reel-5.jpg', alt: 'GRC life' },
];

export function Gallery() {
  const { t } = useTranslation();
  const ref = useScrollAnimation();

  return (
    <section
      id="gallery"
      ref={ref}
      className="animate-on-scroll bg-cream-dark py-20 md:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeadline>{t('gallery.headline')}</SectionHeadline>
        </div>
      </div>

      {/* Diamond collage: entire 4×4 grid rotated 45° — squares appear as diamonds */}
      <div className="relative mt-12 h-[420px] sm:h-[520px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="grid grid-cols-4 gap-2 sm:gap-3"
            style={{ transform: 'rotate(45deg) scale(1.42)', width: '420px' }}
          >
            {GALLERY_IMAGES.map(({ src, alt }) => (
              <div key={src} className="aspect-square overflow-hidden">
                <img
                  src={src}
                  alt={alt}
                  className="h-full w-full object-cover"
                  style={{ transform: 'rotate(-45deg) scale(1.42)' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
