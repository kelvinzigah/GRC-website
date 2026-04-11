import { useTranslation } from '../../hooks/useTranslation';
import { PageHero } from '../../components/layout/PageHero';
import { SectionWrapper, SectionHeadline } from '../../components/ui/SectionWrapper';
import { LinkButton } from '../../components/ui/Button';

export default function OurStoryPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        headline={t('ourStory.headline')}
        subtitle={t('ourStory.hero.subtitle')}
        backgroundImage="/images/evangelism_pic_1.jpg"
        imageAlt={t('ourStory.imageAltEvangelism')}
      />

      {/* Founding + Missionary */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>{t('ourStory.founding')}</p>
            <p>{t('ourStory.missionary')}</p>
          </div>

          {/* Scripture */}
          <div className="mt-10 border-l-4 border-amber pl-6 md:pl-8">
            <p className="font-serif italic text-xl md:text-2xl text-burgundy leading-relaxed">
              {t('ourStory.scriptureText')}
            </p>
            <p className="mt-3 font-sans text-sm text-neutral-500">
              {t('ourStory.scriptureCitation')}
            </p>
          </div>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>{t('ourStory.birth')}</p>
            <p>{t('ourStory.roots')}</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Community photos */}
      <SectionWrapper className="bg-cream-dark">
        <SectionHeadline className="mb-8">Community Life</SectionHeadline>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {[
            { src: '/images/togetherness_1.jpg', alt: t('ourStory.imageAltTogetherness') },
            { src: '/images/evangelism_pic_1.jpg', alt: t('ourStory.imageAltEvangelism') },
            { src: '/images/community_2.jpg', alt: 'GRC small group' },
            { src: '/images/homeless_outreach_1.jpg', alt: 'GRC food drive' },
            { src: '/images/evangelism_2.jpg', alt: t('ourStory.imageAltEvangelism') },
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

      {/* Grace statement + CTA */}
      <SectionWrapper dark className="text-center">
        <p className="mx-auto max-w-2xl font-sans text-lg text-cream/85 leading-relaxed">
          {t('ourStory.grace')}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton to="/events" variant="primary">
            {t('ourStory.ctaLabel')}
          </LinkButton>
          <LinkButton to="/about/meet-the-team" variant="outline">
            Meet the team →
          </LinkButton>
        </div>
      </SectionWrapper>
    </>
  );
}
