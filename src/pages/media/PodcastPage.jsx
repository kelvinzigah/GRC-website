import { useTranslation } from '../../hooks/useTranslation';
import { PageHero } from '../../components/layout/PageHero';
import { SectionWrapper, SectionHeadline } from '../../components/ui/SectionWrapper';
import { Card } from '../../components/ui/Card';
import { LinkButton } from '../../components/ui/Button';

const EPISODE_COLORS = [
  'bg-burgundy',
  'bg-amber-dark',
  'bg-burgundy-light',
];

export default function PodcastPage() {
  const { t } = useTranslation();
  const episodes = t('podcast.items');
  const platforms = t('podcast.platforms');

  return (
    <>
      <PageHero
        headline={t('podcast.hero.headline')}
        subtitle={t('podcast.hero.subtitle')}
      />

      {/* Platform links */}
      <SectionWrapper className="bg-cream-dark">
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { label: platforms.apple, icon: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z' },
            { label: platforms.spotify, icon: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 11-.277-1.215c3.809-.87 7.076-.496 9.713 1.115a.622.622 0 01.206.857zm1.224-2.723a.778.778 0 01-1.07.257c-2.687-1.652-6.785-2.131-9.965-1.166a.778.778 0 01-.966-.519.778.778 0 01.519-.966c3.632-1.102 8.147-.568 11.225 1.324a.778.778 0 01.257 1.07zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.935.935 0 11-.543-1.79c3.532-1.072 9.404-.865 13.115 1.338a.935.935 0 01-.954 1.608z' },
            { label: platforms.youtube, icon: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' },
          ].map(({ label, icon }) => (
            <button
              key={label}
              className="flex items-center gap-2 rounded-full border border-burgundy/30 bg-white px-5 py-2.5 text-sm font-medium text-burgundy-dark shadow-sm transition-shadow hover:shadow-md"
            >
              <svg className="h-5 w-5 text-burgundy" fill="currentColor" viewBox="0 0 24 24">
                <path d={icon} />
              </svg>
              {label}
            </button>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-neutral-500 italic">
          Platform links coming soon — subscribe to be notified when we launch.
        </p>
      </SectionWrapper>

      {/* Episode list */}
      <SectionWrapper>
        <SectionHeadline className="mb-8">Episodes</SectionHeadline>
        <div className="flex flex-col gap-4">
          {episodes.map((episode, index) => (
            <Card key={index} className="flex items-start gap-5">
              {/* Episode number / play */}
              <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full ${EPISODE_COLORS[index % EPISODE_COLORS.length]} text-cream`}>
                <svg className="h-6 w-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-burgundy-dark">{episode.title}</h3>
                  <span className="flex-shrink-0 rounded bg-cream-dark px-2 py-0.5 text-xs font-medium text-neutral-500">
                    {episode.duration}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{episode.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Subscribe CTA */}
      <SectionWrapper dark className="text-center">
        <p className="font-serif text-xl font-bold text-cream">
          Enjoying the podcast? Share it with a friend.
        </p>
        <p className="mt-3 text-cream/70">New episodes drop regularly. Follow us to stay updated.</p>
        <div className="mt-8">
          <LinkButton to="/#contact" variant="primary">
            Get notified of new episodes →
          </LinkButton>
        </div>
      </SectionWrapper>
    </>
  );
}
