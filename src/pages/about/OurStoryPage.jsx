import { useTranslation } from '../../hooks/useTranslation';
import { PageHero } from '../../components/layout/PageHero';
import { SectionWrapper, SectionHeadline } from '../../components/ui/SectionWrapper';
import { LinkButton } from '../../components/ui/Button';

function TimelineItem({ year, event, isLast }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber text-white text-sm font-bold">
          {year.slice(2)}
        </div>
        {!isLast && <div className="mt-2 w-0.5 flex-1 bg-cream-dark" />}
      </div>
      <div className="pb-8">
        <p className="font-semibold text-burgundy-dark">{year}</p>
        <p className="mt-1 text-neutral-600">{event}</p>
      </div>
    </div>
  );
}

export default function OurStoryPage() {
  const { t } = useTranslation();
  const timeline = t('ourStory.timeline');

  return (
    <>
      <PageHero
        headline={t('ourStory.hero.headline')}
        subtitle={t('ourStory.hero.subtitle')}
        backgroundImage="/images/evangelism_pic_1.jpg"
        imageAlt="GRC community outreach"
      />

      {/* Origin story */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <SectionHeadline>Born Out of a Calling</SectionHeadline>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>{t('ourStory.origin.p1')}</p>
            <p>{t('ourStory.origin.p2')}</p>
            <p>{t('ourStory.origin.p3')}</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper className="bg-cream-dark">
        <div className="mx-auto max-w-2xl">
          <SectionHeadline className="mb-12">Our Journey</SectionHeadline>
          {Array.isArray(timeline) && timeline.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              event={item.event}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Community photos */}
      <SectionWrapper>
        <SectionHeadline className="mb-8">Community Life</SectionHeadline>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {[
            { src: '/images/togetherness_1.jpg', alt: 'GRC community together' },
            { src: '/images/evangelism_pic_1.jpg', alt: 'GRC street evangelism' },
            { src: '/images/community_2.jpg', alt: 'GRC small group' },
            { src: '/images/homeless_outreach_1.jpg', alt: 'GRC food drive' },
            { src: '/images/evangelism_2.jpg', alt: 'GRC outreach' },
            { src: '/images/evangelism_3.jpg', alt: 'GRC discipleship' },
          ].map(({ src, alt }) => (
            <div key={src} className="overflow-hidden rounded-xl aspect-square">
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper dark className="text-center">
        <p className="font-serif text-2xl font-bold text-cream md:text-3xl">
          Come be part of our story.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton to="/events" variant="primary">
            {t('ourStory.cta')}
          </LinkButton>
          <LinkButton to="/about/meet-the-team" variant="outline">
            Meet the team →
          </LinkButton>
        </div>
      </SectionWrapper>
    </>
  );
}
