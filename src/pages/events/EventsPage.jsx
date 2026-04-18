import { useTranslation } from '../../hooks/useTranslation';
import { PageHero } from '../../components/layout/PageHero';
import { SectionWrapper, SectionHeadline } from '../../components/ui/SectionWrapper';
import { Card } from '../../components/ui/Card';
import { LinkButton } from '../../components/ui/Button';
import { ChurchMap } from '../../components/ui/ChurchMap';

const EVENT_GRADIENTS = [
  'from-burgundy to-burgundy-light',
  'from-amber-dark to-gold',
  'from-burgundy-dark to-amber',
  'from-gold to-amber-light',
  'from-burgundy-light to-amber',
  'from-burgundy-dark to-gold',
];

const RECURRING_SERVICES = [
  {
    day: 'Sunday',
    name: 'Sunday Worship Service',
    time: '11:00 AM – 2:00 PM',
    desc: 'Experience uplifting worship, powerful preaching, and genuine fellowship.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    day: 'Wednesday',
    name: 'Weekly Bible Study',
    time: '7:00 PM',
    desc: 'Dive deeper into God\'s Word in an intimate, discussion-driven setting.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    day: 'Saturday',
    name: 'Evangelism Outreach',
    time: '10:00 AM',
    desc: 'Join us as we share the love of Christ in the streets of our neighbourhood.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function EventsPage() {
  const { t } = useTranslation();
  const events = t('events.items');

  return (
    <>
      <PageHero
        headline={t('eventsPage.hero.headline')}
        subtitle={t('eventsPage.hero.subtitle')}
        backgroundVideo="/videos/events_background_5.mp4"
        className="min-h-[75vh] mt-16"
      />

      {/* Weekly services — always first, drives Sunday attendance */}
      <SectionWrapper>
        <SectionHeadline className="mb-10">{t('eventsPage.recurringTitle')}</SectionHeadline>
        <div className="grid gap-6 md:grid-cols-3">
          {RECURRING_SERVICES.map((service) => (
            <div
              key={service.day}
              className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-burgundy/10 text-burgundy mb-4">
                {service.icon}
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber">{service.day}</p>
              <h3 className="mt-1 font-serif text-lg font-bold text-burgundy-dark">{service.name}</h3>
              <p className="mt-1 font-semibold text-neutral-500 text-sm">{service.time}</p>
              <p className="mt-3 text-sm text-neutral-600">{service.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm italic text-neutral-500">
          {t('services.address')} &mdash; {t('services.note')}
        </p>
      </SectionWrapper>

      {/* Upcoming events — full list */}
      <SectionWrapper className="bg-cream-dark">
        <SectionHeadline className="mb-10">{t('events.headline')}</SectionHeadline>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(events) && events.map((event, index) => (
            <Card key={index} className="overflow-hidden p-0">
              <div className={`h-3 bg-gradient-to-r ${EVENT_GRADIENTS[index % EVENT_GRADIENTS.length]}`} />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-amber-dark font-semibold">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  {event.date}
                </div>
                <h3 className="mt-2 font-serif text-lg font-bold text-burgundy-dark">{event.title}</h3>
                <p className="mt-1 text-sm font-medium text-neutral-500">{event.time}</p>
                <p className="mt-3 text-sm text-neutral-600">{event.desc}</p>
                <div className="mt-4">
                  <LinkButton to="/#contact" variant="outlineDark" size="sm">
                    {t('events.cta')}
                  </LinkButton>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Subscribe CTA */}
      <SectionWrapper dark className="text-center">
        <p className="font-serif text-2xl font-bold text-cream">{t('eventsPage.subscribe.headline')}</p>
        <div className="mt-6">
          <LinkButton to="/#contact" variant="primary">
            {t('eventsPage.subscribe.cta')}
          </LinkButton>
        </div>
      </SectionWrapper>

      {/* Map */}
      <SectionWrapper>
        <SectionHeadline className="mb-8">Find Us</SectionHeadline>
        <p className="text-neutral-600 mb-6">{t('services.address')}</p>
        <ChurchMap height="400" />
      </SectionWrapper>
    </>
  );
}
