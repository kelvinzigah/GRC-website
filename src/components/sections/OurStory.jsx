import { useTranslation } from '../../hooks/useTranslation';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Button } from '../ui/Button';

export function OurStory() {
  const { t } = useTranslation();
  const blockARef = useScrollAnimation();
  const blockBRef = useScrollAnimation();
  const blockCRef = useScrollAnimation();
  const blockDRef = useScrollAnimation();
  const blockERef = useScrollAnimation();
  const blockEStaggerRef = useScrollAnimation();

  return (
    <>
      {/* Block A — Dark Opening */}
      <section
        id="our-story"
        ref={blockARef}
        className="animate-on-scroll bg-burgundy-dark py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream">
            {t('ourStory.headline')}
          </h2>
          <div className="mt-6 w-16 h-1 bg-amber" />
        </div>
      </section>

      {/* Block B — Light Split: text left, image right */}
      <section
        ref={blockBRef}
        className="animate-on-scroll bg-cream py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="font-sans text-lg leading-relaxed text-neutral-700">
              {t('ourStory.founding')}
            </p>
            <p className="mt-6 font-sans text-lg leading-relaxed text-neutral-700">
              {t('ourStory.missionary')}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] lg:aspect-auto lg:h-[420px]">
            <img
              src="/images/evangelism_2.jpg"
              alt={t('ourStory.imageAltEvangelism')}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Block C — Dark Scripture Pull Quote */}
      <section
        ref={blockCRef}
        className="animate-on-scroll bg-burgundy py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl">
          <div className="border-l-4 border-amber pl-6 md:pl-8">
            <p className="font-serif italic text-xl md:text-2xl text-cream leading-relaxed">
              {t('ourStory.scriptureText')}
            </p>
            <p className="mt-4 font-sans text-sm text-cream/70">
              {t('ourStory.scriptureCitation')}
            </p>
          </div>
        </div>
      </section>

      {/* Block D — Light Split reversed: image left, text right */}
      <section
        ref={blockDRef}
        className="animate-on-scroll bg-cream-dark py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] lg:aspect-auto lg:h-[420px] order-last lg:order-first">
            <img
              src="/images/togetherness_1.jpg"
              alt={t('ourStory.imageAltTogetherness')}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/40 to-transparent" />
          </div>
          <div>
            <p className="font-sans text-lg leading-relaxed text-neutral-700">
              {t('ourStory.birth')}
            </p>
            <p className="mt-6 font-sans text-lg leading-relaxed text-neutral-700">
              {t('ourStory.roots')}
            </p>
          </div>
        </div>
      </section>

      {/* Block E — Dark Closing + CTA */}
      <section
        ref={blockERef}
        className="animate-on-scroll bg-burgundy-dark py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <div ref={blockEStaggerRef} className="stagger-children animate-on-scroll">
            <p className="font-sans text-lg text-cream/85 leading-relaxed">
              {t('ourStory.grace')}
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.querySelector('#connect')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('ourStory.ctaLabel')}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
