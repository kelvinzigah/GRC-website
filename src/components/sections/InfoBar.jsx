import { useTranslation } from '../../hooks/useTranslation';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ICONS = {
  sunday: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  bibleStudy: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  evangelism: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
};

export function InfoBar() {
  const { t } = useTranslation();
  const sectionRef = useScrollAnimation();

  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(t('services.address'))}`;

  const services = [
    { key: 'sunday', icon: ICONS.sunday },
    { key: 'bibleStudy', icon: ICONS.bibleStudy },
    { key: 'evangelism', icon: ICONS.evangelism },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="animate-on-scroll relative bg-amber/15 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-12 items-start">
          {/* Left column — info + service cards */}
          <div>
            <p className="text-sm font-sans uppercase tracking-widest text-neutral-400">
              {t('infoBar.serviceLabel')}
            </p>
            <h2 className="mt-3 font-serif text-2xl font-bold leading-snug text-burgundy-dark sm:text-3xl lg:text-4xl">
              {t('infoBar.seeYouSoon')}{' '}
              <span className="text-burgundy">{t('services.sunday.time')}</span>
            </h2>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('infoBar.addressAriaLabel')}
              className="mt-4 inline-flex items-center gap-2 py-3 text-base text-amber transition-colors hover:text-gold hover:underline underline-offset-4"
            >
              {t('services.address')}
            </a>
            <div className="mt-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('infoBar.planVisit')}
              </Button>
            </div>

            {/* Service cards — horizontal layout, full width */}
            <div className="mt-10 grid gap-4">
              {services.map(({ key, icon }) => (
                <Card key={key} className="flex items-start gap-4 text-left">
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-burgundy-dark">
                      {t(`services.${key}.title`)}
                    </h3>
                    <p className="mt-0.5 text-sm font-semibold text-amber-dark">
                      {t(`services.${key}.time`)}
                    </p>
                    <p className="mt-0.5 text-sm text-neutral-600">
                      {t(`services.${key}.desc`)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right column — 3-image collage, pushed hard right and down */}
          <div className="flex items-end justify-end gap-4 overflow-visible mt-24 -mr-4 sm:-mr-6 lg:-mr-48 xl:-mr-72 2xl:-mr-96">
            {/* Left image — shorter, offset down */}
            <div className="mt-16 h-[19rem] w-[30%] overflow-hidden rounded-xl shadow-lg">
              <img
                src="/images/worship_2.png"
                alt={t('hero.bgImageAlt')}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Center image — tallest */}
            <div className="h-[31rem] w-[36%] overflow-hidden rounded-xl shadow-xl">
              <img
                src="/images/worship_team_3.jpg"
                alt={t('infoBar.cardImageAlt')}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Right image — shorter, offset down */}
            <div className="mt-16 h-[19rem] w-[30%] overflow-hidden rounded-xl shadow-lg">
              <img
                src="/images/front_page_3.jpg"
                alt={t('infoBar.cardImageAlt')}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
