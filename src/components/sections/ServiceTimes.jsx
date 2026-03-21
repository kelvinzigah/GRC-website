import { useTranslation } from '../../hooks/useTranslation';
import { SectionWrapper, SectionHeadline } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { ChurchMap } from '../ui/ChurchMap';

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

export function ServiceTimes() {
  const { t } = useTranslation();

  const services = [
    { key: 'sunday', icon: ICONS.sunday },
    { key: 'bibleStudy', icon: ICONS.bibleStudy },
    { key: 'evangelism', icon: ICONS.evangelism },
  ];

  return (
    <SectionWrapper id="services" className="bg-cream-dark">
      <div className="text-center">
        <SectionHeadline>{t('services.headline')}</SectionHeadline>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ key, icon }) => (
          <Card key={key} className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">
              {icon}
            </div>
            <h3 className="font-serif text-xl font-bold text-burgundy-dark">
              {t(`services.${key}.title`)}
            </h3>
            <p className="mt-2 font-semibold text-amber-dark">
              {t(`services.${key}.time`)}
            </p>
            <p className="mt-2 text-neutral-600">
              {t(`services.${key}.desc`)}
            </p>
          </Card>
        ))}
      </div>

      {/* Address & Map */}
      <div className="mt-16 grid gap-8 lg:grid-cols-2 items-center">
        <div className="text-center lg:text-left">
          <h3 className="font-serif text-2xl font-bold text-burgundy-dark">
            {t('services.address')}
          </h3>
          <p className="mt-3 text-sm italic text-neutral-500">
            {t('services.note')}
          </p>
        </div>
        <ChurchMap />
      </div>
    </SectionWrapper>
  );
}
