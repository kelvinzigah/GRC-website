import { useTranslation } from '../../hooks/useTranslation';
import { PageHero } from '../../components/layout/PageHero';
import { ImpactStatsStrip } from '../../components/sections/foodDrive/ImpactStatsStrip';
import { WhatWeDoSection } from '../../components/sections/streetEvangelism/WhatWeDoSection';
import { TornCollageSection } from '../../components/sections/streetEvangelism/TornCollage';
import { WhoScheduleSection } from '../../components/sections/streetEvangelism/WhoScheduleSection';
import { MagazineCollageSection } from '../../components/sections/streetEvangelism/MagazineCollage';
import { StreetEvCTA } from '../../components/sections/streetEvangelism/StreetEvCTA';

export default function StreetEvangelismPage() {
  const { t } = useTranslation();
  const impact = t('ministries.streetEvangelism.impact');

  return (
    <>
      <PageHero
        headline={t('streetEvangelismPage.hero.headline')}
        subtitle={t('ministries.streetEvangelism.tagline')}
        backgroundImage="/images/street-evangelism/se_5.jpg"
        imageAlt={t('streetEvangelismPage.hero.imageAlt')}
        imagePosition="object-[center_45%]"
        overlayClass="bg-burgundy-dark/60"
        className="min-h-[85vh]"
      />

      <ImpactStatsStrip items={Array.isArray(impact) ? impact : []} />

      <WhatWeDoSection
        eyebrow={t('streetEvangelismPage.whatWeDo.eyebrow')}
        headline={t('streetEvangelismPage.whatWeDo.headline')}
        body={t('ministries.streetEvangelism.desc')}
        imageAlt={t('streetEvangelismPage.whatWeDo.imageAlt')}
      />

      <TornCollageSection quote={t('streetEvangelismPage.quote')} />

      <WhoScheduleSection
        serveLabel={t('streetEvangelismPage.whoSchedule.serveLabel')}
        whoHeadline={t('streetEvangelismPage.whoSchedule.whoHeadline')}
        whoBody={t('ministries.streetEvangelism.whoFor')}
        scheduleHeadline={t('streetEvangelismPage.whoSchedule.scheduleHeadline')}
        scheduleText={t('ministries.streetEvangelism.schedule')}
      />

      <MagazineCollageSection headline={t('streetEvangelismPage.moments.headline')} />

      <StreetEvCTA
        headline={t('streetEvangelismPage.cta.headline')}
        subtitle={t('streetEvangelismPage.cta.subtitle')}
        primaryLabel={t('streetEvangelismPage.cta.primary')}
        secondaryLabel={t('streetEvangelismPage.cta.secondary')}
      />
    </>
  );
}
