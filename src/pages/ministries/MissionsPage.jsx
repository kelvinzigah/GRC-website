import { useTranslation } from '../../hooks/useTranslation';
import { PageHero } from '../../components/layout/PageHero';
import { MissionSection } from '../../components/sections/MissionSection';

export default function MissionsPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        headline={t('missions.storytelling.heading')}
        subtitle={t('missions.storytelling.subLabel')}
        backgroundImage="/images/IMG_2682.jpg"
        imageAlt={t('missions.darkStory.imageAlt')}
        imagePosition="object-[center_30%]"
      />
      <MissionSection />
    </>
  );
}
