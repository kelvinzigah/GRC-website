import { useTranslation } from '../../hooks/useTranslation';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { LinkButton } from '../ui/Button';

export function MissionSection() {
  const { t } = useTranslation();
  const blockARef = useScrollAnimation();
  const blockBRef = useScrollAnimation();
  const blockCRef = useScrollAnimation();
  const blockCStaggerRef = useScrollAnimation();
  const blockDRef = useScrollAnimation();
  const blockDStaggerRef = useScrollAnimation();

  return (
    <>
      {/* Block A — Storytelling Split */}
      <section
        ref={blockARef}
        className="animate-on-scroll bg-cream py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <p className="font-serif italic text-amber text-sm tracking-widest uppercase mb-3">
              {t('missions.storytelling.subLabel')}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-burgundy-dark leading-tight">
              {t('missions.storytelling.heading')}
            </h2>
            <div className="mt-8 bg-white border-l-4 border-amber rounded-xl shadow-lg p-6 md:p-8">
              <p className="font-sans text-lg leading-relaxed text-neutral-700">
                {t('missions.storytelling.body1')}
              </p>
              <p className="mt-4 font-sans text-lg leading-relaxed text-neutral-700">
                {t('missions.storytelling.body2')}
              </p>
              <div className="mt-6 pt-6 border-t border-cream-dark">
                <p className="font-serif italic text-lg md:text-xl text-burgundy leading-relaxed">
                  "{t('missions.storytelling.pullQuote')}"
                </p>
                <p className="mt-3 font-sans text-sm text-neutral-500">
                  — {t('missions.storytelling.pullQuoteCitation')}
                </p>
              </div>
            </div>
          </div>

          {/* Right column — overlapping images (desktop) */}
          <div>
            {/* Desktop: overlapping absolute layout */}
            <div className="hidden lg:block relative h-[500px]">
              <div className="absolute top-0 right-0 w-[75%] h-[80%] rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="/images/mission-1.png"
                  alt={t('missions.storytelling.imageAlt1')}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-2xl shadow-xl overflow-hidden border-4 border-cream">
                <img
                  src="/images/missionary-6.jpg"
                  alt={t('missions.storytelling.imageAlt2')}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Mobile: stacked layout */}
            <div className="lg:hidden flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl shadow-lg h-56">
                <img
                  src="/images/mission-1.png"
                  alt={t('missions.storytelling.imageAlt1')}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg h-56">
                <img
                  src="/images/missionary-6.jpg"
                  alt={t('missions.storytelling.imageAlt2')}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider A — cream to burgundy-dark */}
      <div className="w-full overflow-hidden bg-cream -mb-px" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full h-16 md:h-20"
          aria-hidden="true"
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#5A1428" />
        </svg>
      </div>

      {/* Block B — Dark Story Section */}
      <section
        ref={blockBRef}
        className="animate-on-scroll bg-burgundy-dark py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left — grayscale photo */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] lg:aspect-auto lg:h-[440px]">
            <img
              src="/images/missionary-5.jpg"
              alt={t('missions.darkStory.imageAlt')}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/50 to-transparent pointer-events-none" />
          </div>

          {/* Right — text + stats */}
          <div>
            <p className="font-serif italic text-amber text-sm tracking-widest uppercase mb-3">
              {t('missions.darkStory.subLabel')}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream leading-tight">
              {t('missions.darkStory.heading')}
            </h2>
            <div className="mt-4 w-12 h-1 bg-amber" />
            <p className="mt-6 font-sans text-lg leading-relaxed text-cream/85">
              {t('missions.darkStory.body')}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <p className="font-serif text-4xl font-bold text-amber">
                  {t('missions.darkStory.stat1Number')}
                </p>
                <p className="mt-1 font-sans text-sm text-cream/70 uppercase tracking-wide">
                  {t('missions.darkStory.stat1Label')}
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold text-amber">
                  {t('missions.darkStory.stat2Number')}
                </p>
                <p className="mt-1 font-sans text-sm text-cream/70 uppercase tracking-wide">
                  {t('missions.darkStory.stat2Label')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider B — burgundy-dark to cream */}
      <div className="w-full overflow-hidden bg-burgundy-dark -mb-px" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full h-16 md:h-20"
          aria-hidden="true"
        >
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#F5EBD8" />
        </svg>
      </div>

      {/* Block C — Missions Grid */}
      <section
        ref={blockCRef}
        className="animate-on-scroll bg-cream-dark py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-serif italic text-amber text-sm tracking-widest uppercase mb-3">
            {t('missions.grid.subLabel')}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-burgundy-dark mb-12">
            {t('missions.grid.heading')}
          </h2>
          <div
            ref={blockCStaggerRef}
            className="stagger-children animate-on-scroll grid gap-10 md:grid-cols-2"
          >
            {/* Item 1 */}
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-2xl shadow-lg aspect-video">
                <img
                  src="/images/evangelism-training.png"
                  alt={t('missions.grid.item1ImageAlt')}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-2xl font-bold text-burgundy-dark">
                  {t('missions.grid.item1Heading')}
                </h3>
                <p className="mt-3 font-sans text-lg leading-relaxed text-neutral-700">
                  {t('missions.grid.item1Body')}
                </p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-2xl shadow-lg aspect-video">
                <img
                  src="/images/church-planting.jpg"
                  alt={t('missions.grid.item2ImageAlt')}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-2xl font-bold text-burgundy-dark">
                  {t('missions.grid.item2Heading')}
                </h3>
                <p className="mt-3 font-sans text-lg leading-relaxed text-neutral-700">
                  {t('missions.grid.item2Body')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block D — CTA Section */}
      <section
        ref={blockDRef}
        className="animate-on-scroll bg-burgundy py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-cream leading-tight mb-4">
              {t('missions.cta.headline')}
            </h2>
            <p className="font-sans text-lg text-cream/80 max-w-2xl mx-auto">
              {t('missions.cta.subtext')}
            </p>
          </div>
          <div
            ref={blockDStaggerRef}
            className="stagger-children animate-on-scroll grid gap-6 md:grid-cols-2"
          >
            {/* Give box */}
            <div className="border-2 border-amber/60 rounded-2xl p-6 md:p-8 flex flex-col gap-4">
              <h3 className="font-serif text-xl font-bold text-cream">
                {t('missions.cta.giveHeading')}
              </h3>
              <p className="font-sans text-base text-cream/80 flex-grow">
                {t('missions.cta.giveBody')}
              </p>
              <LinkButton variant="secondary" size="md" to="/#contact">
                {t('missions.cta.giveButton')}
              </LinkButton>
            </div>
            {/* Go box */}
            <div className="border-2 border-amber/60 rounded-2xl p-6 md:p-8 flex flex-col gap-4">
              <h3 className="font-serif text-xl font-bold text-cream">
                {t('missions.cta.goHeading')}
              </h3>
              <p className="font-sans text-base text-cream/80 flex-grow">
                {t('missions.cta.goBody')}
              </p>
              <LinkButton variant="secondary" size="md" to="/#contact">
                {t('missions.cta.goButton')}
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
