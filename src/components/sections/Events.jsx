import { useTranslation } from '../../hooks/useTranslation';
import { SectionWrapper, SectionHeadline } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { Button, LinkButton } from '../ui/Button';

const EVENT_GRADIENTS = [
  'from-burgundy to-burgundy-light',
  'from-amber-dark to-gold',
  'from-burgundy-dark to-amber',
  'from-gold to-amber-light',
  'from-burgundy-light to-amber',
  'from-burgundy-dark to-gold',
];

export function Events() {
  const { t } = useTranslation();
  const events = t('events.items');

  // Show only 3 most upcoming events on the homepage
  const previewEvents = events.slice(0, 3);

  return (
    <SectionWrapper id="events" className="bg-cream-dark">
      <div className="text-center">
        <SectionHeadline>{t('events.headline')}</SectionHeadline>
      </div>

      <div className="stagger-children mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {previewEvents.map((event, index) => (
          <Card key={index} className="overflow-hidden p-0">
            {/* Colored banner */}
            <div className={`h-3 bg-gradient-to-r ${EVENT_GRADIENTS[index % EVENT_GRADIENTS.length]}`} />
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-amber-dark font-semibold">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                {event.date}
              </div>
              <h3 className="mt-2 font-serif text-lg font-bold text-burgundy-dark">
                {event.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-neutral-500">
                {event.time}
              </p>
              <p className="mt-3 text-sm text-neutral-600">{event.desc}</p>
              <div className="mt-4">
                <Button variant="outlineDark" size="sm">
                  {t('events.cta')}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <LinkButton to="/events" variant="secondary">
          See all events →
        </LinkButton>
      </div>
    </SectionWrapper>
  );
}
