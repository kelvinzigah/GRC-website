import { useTranslation } from '../../hooks/useTranslation';
import { Button } from '../ui/Button';

export function Hero() {
  const { t } = useTranslation();

  const handleScroll = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[88vh] items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/front_page_4.jpg"
          alt={t('hero.bgImageAlt')}
          className="h-full w-full object-cover"
        />
        {/* Gradient overlay — left dark, right transparent to reveal photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark/70 via-burgundy-dark/35 to-transparent" />
      </div>

      {/* Content — left-aligned */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="font-serif text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
            {t('hero.headline')}
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-cream/90 sm:text-xl">
            {t('hero.heroSubtitle')}
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" onClick={handleScroll('#connect')}>
              {t('hero.planVisit')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <button
          onClick={handleScroll('#about')}
          className="animate-bounce-slow cursor-pointer text-cream/60 transition-colors hover:text-cream focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:outline-none rounded-full p-2"
          aria-label={t('hero.scrollDown')}
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7M19 6l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
