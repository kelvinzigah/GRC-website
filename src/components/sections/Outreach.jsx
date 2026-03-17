import { useTranslation } from '../../hooks/useTranslation';
import { SectionWrapper, SectionHeadline, SectionSubtitle } from '../ui/SectionWrapper';
import { Card, CardImage } from '../ui/Card';

const OUTREACH_IMAGES = [
  '/images/homeless_outreach_1.jpg',
  null,
  '/images/evangelism_pic_1.jpg',
  null,
  null,
];

const GRADIENTS = [
  'bg-gradient-to-br from-burgundy to-amber',
  'bg-gradient-to-br from-amber-dark to-gold',
  'bg-gradient-to-br from-burgundy-dark to-burgundy-light',
  'bg-gradient-to-br from-gold to-amber-light',
  'bg-gradient-to-br from-burgundy-light to-amber',
];

export function Outreach() {
  const { t } = useTranslation();
  const items = t('outreach.items');

  return (
    <SectionWrapper id="outreach">
      <div className="text-center">
        <SectionHeadline>{t('outreach.headline')}</SectionHeadline>
        <SectionSubtitle>{t('outreach.subtitle')}</SectionSubtitle>
      </div>

      {/* Horizontal scroll on mobile, grid on desktop */}
      <div className="hide-scrollbar -mx-4 flex gap-6 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible">
        {items.map((item, index) => (
          <Card
            key={index}
            className="min-w-[280px] flex-shrink-0 sm:min-w-0 overflow-hidden p-0"
          >
            <CardImage
              src={OUTREACH_IMAGES[index]}
              alt={item.title}
              gradient={GRADIENTS[index]}
              label={item.title}
              className="h-48"
            />
            <div className="p-5">
              <h3 className="font-serif text-lg font-bold text-burgundy-dark">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
              <a
                href="#connect"
                className="mt-3 inline-block text-sm font-medium text-amber hover:text-amber-dark transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#connect')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn more →
              </a>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
