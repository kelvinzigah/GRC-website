import { useTranslation } from '../../hooks/useTranslation';
import { ImpactStatsStrip } from '../../components/sections/foodDrive/ImpactStatsStrip';
import { WhatWeDoSection } from '../../components/sections/foodDrive/WhatWeDoSection';
import { WhoScheduleSection } from '../../components/sections/foodDrive/WhoScheduleSection';
import { FoodDriveCTA } from '../../components/sections/foodDrive/FoodDriveCTA';

function FoodDriveHero({ headline, subtitle }) {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/homeless_outreach_6.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        {/* Gradient left-to-right — less red tint, photo visible on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark/70 via-burgundy-dark/30 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16">
        <div className="max-w-xl lg:max-w-2xl">
          <span className="mb-4 inline-block font-sans text-xs font-semibold uppercase tracking-widest text-amber">
            Neighbourhood Ministry
          </span>
          <h1 className="font-serif text-5xl font-bold leading-tight text-cream sm:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/90 sm:text-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function FoodDrivePage() {
  const { t } = useTranslation();

  const impact = t('ministries.foodDrive.impact');

  return (
    <>
      <FoodDriveHero
        headline={t('foodDrivePage.hero.headline')}
        subtitle={t('foodDrivePage.hero.subtitle')}
      />

      <ImpactStatsStrip items={Array.isArray(impact) ? impact : []} />

      <WhatWeDoSection
        headline={t('foodDrivePage.whatWeDo.headline')}
        body={t('ministries.foodDrive.desc')}
        imageAlt={t('foodDrivePage.whatWeDo.imageAlt')}
      />

      <WhoScheduleSection
        whoHeadline={t('foodDrivePage.whoSchedule.whoHeadline')}
        whoBody={t('ministries.foodDrive.whoFor')}
        scheduleHeadline={t('foodDrivePage.whoSchedule.scheduleHeadline')}
        scheduleText={t('ministries.foodDrive.schedule')}
        photoAlt={t('foodDrivePage.whoSchedule.photoAlt')}
      />

      <FoodDriveCTA
        headline={t('foodDrivePage.cta.headline')}
        subtitle={t('foodDrivePage.cta.subtitle')}
        primaryLabel={t('foodDrivePage.cta.primary')}
        secondaryLabel={t('foodDrivePage.cta.secondary')}
      />
    </>
  );
}
