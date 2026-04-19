import { useTranslation } from '../../hooks/useTranslation';
import { PageHero } from '../../components/layout/PageHero';
import { ImpactStatsStrip } from '../../components/sections/foodDrive/ImpactStatsStrip';
import { WhatWeDoSection } from '../../components/sections/foodDrive/WhatWeDoSection';
import { WhoScheduleSection } from '../../components/sections/foodDrive/WhoScheduleSection';
import { FoodDriveCTA } from '../../components/sections/foodDrive/FoodDriveCTA';

export default function FoodDrivePage() {
  const { t } = useTranslation();

  const impact = t('ministries.foodDrive.impact');

  return (
    <>
      <PageHero
        headline={t('foodDrivePage.hero.headline')}
        subtitle={t('foodDrivePage.hero.subtitle')}
        backgroundImage="/images/homeless_outreach_3.jpg"
        imageAlt={t('foodDrivePage.hero.imageAlt')}
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
