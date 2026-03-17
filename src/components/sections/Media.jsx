import { useTranslation } from '../../hooks/useTranslation';
import { SectionWrapper, SectionHeadline } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const SERMON_GRADIENTS = [
  'from-burgundy-dark via-burgundy to-amber/30',
  'from-burgundy via-burgundy-light to-gold/30',
  'from-amber-dark via-burgundy to-burgundy-dark',
];

export function Media() {
  const { t } = useTranslation();
  const sermons = t('media.sermons');
  const podcasts = t('media.podcasts');

  return (
    <SectionWrapper id="media">
      <div className="text-center">
        <SectionHeadline>{t('media.headline')}</SectionHeadline>
      </div>

      {/* Sermons */}
      <div className="mt-12">
        <h3 className="mb-6 font-serif text-2xl font-bold text-burgundy-dark">
          {t('media.sermonsTitle')}
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon, index) => (
            <Card key={index} className="overflow-hidden p-0">
              {/* Video thumbnail placeholder */}
              <div className={`relative aspect-video bg-gradient-to-br ${SERMON_GRADIENTS[index]} flex items-center justify-center`}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/20 backdrop-blur-sm transition-transform hover:scale-110">
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
          <Button variant="ghost">{t('media.viewAll')}</Button>
        </div>
      </div>

      {/* Podcast */}
      <div className="mt-16">
        <h3 className="mb-6 font-serif text-2xl font-bold text-burgundy-dark">
          {t('media.podcastTitle')}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {podcasts.map((podcast, index) => (
            <Card key={index} className="flex items-center gap-4">
              {/* Play button */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-burgundy text-cream">
                <svg className="h-5 w-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="truncate font-medium text-burgundy-dark text-sm">
                  {podcast.title}
                </h4>
                <p className="mt-1 text-xs text-neutral-500">{podcast.duration}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button variant="ghost">{t('media.listenAll')}</Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
