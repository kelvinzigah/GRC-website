import { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { PageHero } from '../../components/layout/PageHero';
import { SectionWrapper, SectionHeadline } from '../../components/ui/SectionWrapper';
import { Card } from '../../components/ui/Card';
import { LinkButton } from '../../components/ui/Button';
import { cn } from '../../utils/cn';

const SERMON_GRADIENTS = [
  'from-burgundy-dark via-burgundy to-amber/30',
  'from-burgundy via-burgundy-light to-gold/30',
  'from-amber-dark via-burgundy to-burgundy-dark',
];

export default function SermonsPage() {
  const { t } = useTranslation();
  const allSermons = t('sermons.items');
  const [activeSpeaker, setActiveSpeaker] = useState(null);

  const speakers = [...new Set(allSermons.map((s) => s.speaker))];
  const filtered = activeSpeaker
    ? allSermons.filter((s) => s.speaker === activeSpeaker)
    : allSermons;

  return (
    <>
      <PageHero
        headline={t('sermons.hero.headline')}
        subtitle={t('sermons.hero.subtitle')}
        backgroundImage="/images/togetherness_1.jpg"
        imageAlt="GRC sermons"
      />

      <SectionWrapper>
        {/* Speaker filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveSpeaker(null)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              activeSpeaker === null
                ? 'bg-burgundy text-cream'
                : 'bg-cream-dark text-neutral-600 hover:bg-burgundy/10'
            )}
          >
            {t('sermons.filterAll')}
          </button>
          {speakers.map((speaker) => (
            <button
              key={speaker}
              onClick={() => setActiveSpeaker(speaker)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                activeSpeaker === speaker
                  ? 'bg-burgundy text-cream'
                  : 'bg-cream-dark text-neutral-600 hover:bg-burgundy/10'
              )}
            >
              {speaker}
            </button>
          ))}
        </div>

        {/* Sermon grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((sermon, index) => (
            <Card key={index} className="overflow-hidden p-0">
              {/* Video thumbnail / gradient placeholder */}
              <div className={`relative aspect-video bg-gradient-to-br ${SERMON_GRADIENTS[index % SERMON_GRADIENTS.length]} flex items-center justify-center`}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/20 backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer">
                  <svg className="h-8 w-8 text-cream ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                {sermon.series && (
                  <span className="absolute bottom-2 left-3 rounded bg-black/40 px-2 py-0.5 text-xs text-cream backdrop-blur-sm">
                    {sermon.series}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-burgundy-dark">{sermon.title}</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  {sermon.speaker} · {sermon.date}
                </p>
                {sermon.scriptureRef && (
                  <p className="mt-2 text-xs font-medium text-amber-dark">{sermon.scriptureRef}</p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Subscribe CTA */}
      <SectionWrapper dark className="text-center">
        <p className="font-serif text-xl font-bold text-cream">
          Never miss a sermon — subscribe on YouTube.
        </p>
        <div className="mt-6">
          <LinkButton to="https://www.youtube.com/@GateOfRedemptionChurch" variant="primary">
            {t('sermons.subscribeLabel')}
          </LinkButton>
        </div>
      </SectionWrapper>
    </>
  );
}
