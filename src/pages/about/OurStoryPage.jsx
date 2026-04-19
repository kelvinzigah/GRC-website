import { useTranslation } from '../../hooks/useTranslation';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { PageHero } from '../../components/layout/PageHero';
import { SectionWrapper, SectionHeadline } from '../../components/ui/SectionWrapper';
import { LinkButton } from '../../components/ui/Button';

export default function OurStoryPage() {
  const { t } = useTranslation();

  const sectionVisionRef  = useScrollAnimation();
  const historyBlock1Ref  = useScrollAnimation();
  const historyBlock2Ref  = useScrollAnimation();
  const scriptureRef      = useScrollAnimation();
  const believeStaggerRef = useScrollAnimation();
  const ctaRef            = useScrollAnimation();

  return (
    <>
      {/* ── Section 1: Hero ──────────────────────────────────────── */}
      <PageHero
        headline={t('ourStory.headline')}
        subtitle={t('ourStory.hero.subtitle')}
        backgroundImage="/images/evangelism_pic_1.jpg"
        imageAlt={t('ourStory.imageAltEvangelism')}
      />

      {/* ── Section 2: The Vision ─────────────────────────────────── */}
      <SectionWrapper>
        <div
          ref={sectionVisionRef}
          className="animate-on-scroll grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Image — 7 cols */}
          <div className="relative lg:col-span-7">
            <div
              className="hidden sm:block absolute -bottom-12 -right-12 w-48 h-48 bg-cream-dark rounded-2xl -z-10"
              aria-hidden="true"
            />
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl aspect-[4/3] lg:aspect-auto lg:h-[480px]">
              <img
                src="/images/good-pastor-pic.jpg"
                alt={t('ourStory.imageAltEvangelism')}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text — 5 cols */}
          <div className="lg:col-span-5">
            <SectionHeadline className="mb-6">
              {t('ourStory.visionHeadline')}
            </SectionHeadline>
            <p className="font-sans text-lg leading-relaxed text-neutral-700">
              {t('ourStory.founding')}
            </p>
            <p className="mt-4 font-sans text-lg leading-relaxed text-neutral-700">
              {t('ourStory.missionary')}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Section 3: Our History ────────────────────────────────── */}
      <SectionWrapper className="bg-cream-dark">
        <div className="text-center mb-16">
          <SectionHeadline className="text-center">
            {t('ourStory.historyHeadline')}
          </SectionHeadline>
          <div className="mx-auto mt-3 w-24 h-1 bg-amber" />
        </div>

        {/* Block 1: text left / image right */}
        <div
          ref={historyBlock1Ref}
          className="animate-on-scroll grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-burgundy-dark mb-4">
              {t('ourStory.narrativeHeadline1')}
            </h3>
            <p className="font-sans text-lg leading-relaxed text-neutral-700">
              {t('ourStory.birth')}
            </p>
            <div className="mt-6 border-l-4 border-amber pl-5">
              <p className="font-serif italic text-lg text-burgundy leading-relaxed">
                {t('ourStory.scriptureText')}
              </p>
              <p className="mt-2 font-sans text-sm text-neutral-500">
                {t('ourStory.scriptureCitation')}
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg aspect-[4/3] w-full">
            <img
              src="/images/our_history_1.jpg"
              alt={t('ourStory.imageAltEvangelism')}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Block 2: image left / text right */}
        <div
          ref={historyBlock2Ref}
          className="animate-on-scroll mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          <div className="relative order-first">
            <div
              className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-amber/20 blur-2xl -z-10 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-lg aspect-[4/3] w-full">
              <img
                src="/images/togetherness_8.png"
                alt={t('ourStory.imageAltEvangelism')}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-last">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-burgundy-dark mb-4">
              {t('ourStory.narrativeHeadline2')}
            </h3>
            <p className="font-sans text-lg leading-relaxed text-neutral-700">
              {t('ourStory.roots')}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Section 5: What We Believe ───────────────────────────── */}
      <SectionWrapper>
        <div className="text-center mb-4">
          <SectionHeadline className="text-center">
            {t('ourStory.believeHeadline')}
          </SectionHeadline>
          <p className="mt-4 font-sans text-lg text-neutral-600 max-w-2xl mx-auto">
            {t('ourStory.grace')}
          </p>
        </div>

        <div
          ref={believeStaggerRef}
          className="stagger-children animate-on-scroll mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8 md:p-10">
            <div className="w-10 h-1 bg-amber mb-6" />
            <h3 className="font-serif text-xl font-semibold text-burgundy-dark mb-3">
              {t('ourStory.believeCard1Title')}
            </h3>
            <p className="font-sans text-base leading-relaxed text-neutral-600">
              {t('ourStory.believeCard1Body')}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8 md:p-10">
            <div className="w-10 h-1 bg-amber mb-6" />
            <h3 className="font-serif text-xl font-semibold text-burgundy-dark mb-3">
              {t('ourStory.believeCard2Title')}
            </h3>
            <p className="font-sans text-base leading-relaxed text-neutral-600">
              {t('ourStory.believeCard2Body')}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8 md:p-10">
            <div className="w-10 h-1 bg-amber mb-6" />
            <h3 className="font-serif text-xl font-semibold text-burgundy-dark mb-3">
              {t('ourStory.believeCard3Title')}
            </h3>
            <p className="font-sans text-base leading-relaxed text-neutral-600">
              {t('ourStory.believeCard3Body')}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Section 6: Final CTA ──────────────────────────────────── */}
      <SectionWrapper>
        <div className="mx-auto max-w-6xl">
          <div
            ref={ctaRef}
            className="animate-on-scroll rounded-2xl bg-cream-dark overflow-hidden grid grid-cols-1 md:grid-cols-2"
          >
            {/* Left: text + buttons */}
            <div className="p-8 md:p-14 flex flex-col justify-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-burgundy-dark mb-4">
                {t('ourStory.ctaHeadline')}
              </h2>
              <p className="font-sans text-lg leading-relaxed text-neutral-700 mb-8">
                {t('ourStory.ctaBody')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <LinkButton to="/#contact" variant="primary" size="lg">
                  {t('ourStory.ctaLabel')}
                </LinkButton>
                <LinkButton to="/about/meet-the-team" variant="outlineDark" size="lg">
                  {t('ourStory.ctaMeetTeam')}
                </LinkButton>
              </div>
            </div>

            {/* Right: image — hidden on mobile */}
            <div className="hidden md:block relative min-h-[320px]">
              <img
                src="/images/togetherness_1.jpg"
                alt={t('ourStory.imageAltTogetherness')}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cream-dark/20 to-transparent" />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
