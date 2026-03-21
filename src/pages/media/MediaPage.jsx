import { useTranslation } from '../../hooks/useTranslation';
import { PageHero } from '../../components/layout/PageHero';
import { SectionWrapper, SectionHeadline } from '../../components/ui/SectionWrapper';
import { Card } from '../../components/ui/Card';
import { LinkButton } from '../../components/ui/Button';

const SERMON_GRADIENTS = [
  'from-burgundy-dark via-burgundy to-amber/30',
  'from-burgundy via-burgundy-light to-gold/30',
  'from-amber-dark via-burgundy to-burgundy-dark',
];

export default function MediaPage() {
  const { t } = useTranslation();
  const sermons = t('media.sermons');
  const podcasts = t('media.podcasts');

  return (
    <>
      <PageHero
        headline={t('mediaPage.hero.headline')}
        subtitle={t('mediaPage.hero.subtitle')}
        backgroundImage="/images/togetherness_1.jpg"
        imageAlt="GRC community worship"
      />

      {/* Featured Sermons */}
      <SectionWrapper>
        <div className="flex items-end justify-between mb-6">
          <SectionHeadline>{t('mediaPage.featured.sermonsTitle')}</SectionHeadline>
          <LinkButton to="/media/sermons" variant="ghost" size="sm">
            {t('mediaPage.browseSermonsLabel')}
          </LinkButton>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon, index) => (
            <Card key={index} className="overflow-hidden p-0">
              <div className={`relative aspect-video bg-gradient-to-br ${SERMON_GRADIENTS[index % SERMON_GRADIENTS.length]} flex items-center justify-center`}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/20 backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer">
                  <svg className="h-8 w-8 text-cream ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-burgundy-dark">{sermon.title}</h4>
                <p className="mt-1 text-sm text-neutral-500">
                  {sermon.speaker} · {sermon.date}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <LinkButton to="/media/sermons" variant="secondary">{t('mediaPage.browseSermonsLabel')}</LinkButton>
        </div>
      </SectionWrapper>

      {/* Featured Podcast */}
      <SectionWrapper className="bg-cream-dark">
        <div className="flex items-end justify-between mb-6">
          <SectionHeadline>{t('mediaPage.featured.podcastTitle')}</SectionHeadline>
          <LinkButton to="/media/podcast" variant="ghost" size="sm">
            {t('mediaPage.browsePodcastLabel')}
          </LinkButton>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {podcasts.map((podcast, index) => (
            <Card key={index} className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-burgundy text-cream">
                <svg className="h-5 w-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="truncate font-medium text-burgundy-dark text-sm">{podcast.title}</h4>
                <p className="mt-1 text-xs text-neutral-500">{podcast.duration}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <LinkButton to="/media/podcast" variant="secondary">{t('mediaPage.browsePodcastLabel')}</LinkButton>
        </div>
      </SectionWrapper>

      {/* Social / Subscribe CTA */}
      <SectionWrapper dark className="text-center">
        <SectionHeadline dark>Stay Connected</SectionHeadline>
        <p className="mt-4 text-cream/80 max-w-lg mx-auto">
          Subscribe on YouTube or follow us on Facebook for the latest sermons and updates from GRC.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton to="https://www.youtube.com/@GateOfRedemptionChurch" variant="primary">
            YouTube Channel
          </LinkButton>
          <LinkButton to="https://www.facebook.com/GateOfRedemptionChurch" variant="outlineDark">
            Facebook Page
          </LinkButton>
        </div>
      </SectionWrapper>
    </>
  );
}
