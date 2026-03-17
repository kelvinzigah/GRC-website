import { useTranslation } from '../../hooks/useTranslation';
import { SectionWrapper, SectionHeadline } from '../ui/SectionWrapper';

const GALLERY_ITEMS = [
  { src: '/images/togetherness_1.jpg', span: 'col-span-2 row-span-2' },
  { src: '/images/evangelism_pic_1.jpg', span: '' },
  { src: null, gradient: 'from-burgundy to-amber', span: '' },
  { src: '/images/homeless_outreach_1.jpg', span: 'col-span-2' },
  { src: null, gradient: 'from-amber-dark to-gold', span: '' },
  { src: '/images/homeless_outreach_2.jpg', span: '' },
  { src: null, gradient: 'from-burgundy-dark to-burgundy-light', span: '' },
  { src: '/images/good_landing_page_1.jpg', span: '' },
];

export function Gallery() {
  const { t } = useTranslation();
  const labels = t('gallery.items');

  return (
    <SectionWrapper id="gallery" className="bg-cream-dark">
      <div className="text-center">
        <SectionHeadline>{t('gallery.headline')}</SectionHeadline>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {GALLERY_ITEMS.map((item, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-xl ${item.span} aspect-square cursor-pointer`}
          >
            {item.src ? (
              <img
                src={item.src}
                alt={labels[index] || ''}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <div
                className={`h-full w-full bg-gradient-to-br ${item.gradient}`}
              />
            )}
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-burgundy-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="p-4 font-medium text-cream text-sm">
                {labels[index] || ''}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
