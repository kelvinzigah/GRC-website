import { useTranslation } from '../../hooks/useTranslation';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SectionHeadline } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';

const CARD_ICONS = [
  // Globe/compass - Great Commission
  <svg key="globe" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>,
  // Heart - Community Outreach
  <svg key="heart" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>,
  // Book - Discipleship
  <svg key="book" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>,
];

export function Values() {
  const { t } = useTranslation();
  const ref = useScrollAnimation();

  const cards = [
    { key: 'card1', icon: CARD_ICONS[0] },
    { key: 'card2', icon: CARD_ICONS[1] },
    { key: 'card3', icon: CARD_ICONS[2] },
  ];

  return (
    <section
      id="values"
      ref={ref}
      className="animate-on-scroll bg-burgundy-dark text-cream"
    >
      <div className="flex min-h-[600px] flex-col lg:flex-row">
        {/* Image — full bleed left panel */}
        <div className="relative h-72 w-full shrink-0 lg:h-auto lg:w-1/2">
          <img
            src="/images/community_3.jpg"
            alt="GRC community gathered together"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* subtle dark overlay so the right-side bg edge looks intentional */}
          <div className="absolute inset-0 bg-burgundy-dark/20" />
        </div>

        {/* Content — right panel */}
        <div className="flex w-full flex-col justify-center px-8 py-16 lg:w-1/2 lg:px-16 lg:py-20">
          <SectionHeadline dark>{t('values.headline')}</SectionHeadline>

          <p className="mt-2 mb-10 max-w-lg text-lg leading-relaxed text-cream/80 italic">
            {t('values.statement')}
          </p>

          <div className="stagger-children grid gap-6 sm:grid-cols-1">
            {cards.map(({ key, icon }) => (
              <Card key={key} dark className="flex items-start gap-4 text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                  {icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-cream">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream/75">
                    {t(`values.${key}.desc`)}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
