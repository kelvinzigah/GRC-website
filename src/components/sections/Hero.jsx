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
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/togetherness_1.jpg"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-dark/80 via-burgundy/70 to-burgundy-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="font-serif text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
          {t('hero.verse')}
        </h1>
        <p className="mt-4 font-serif text-lg italic text-gold sm:text-xl">
          {t('hero.reference')}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/85 sm:text-xl">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="primary" size="lg" onClick={handleScroll('#services')}>
            {t('hero.cta1')}
          </Button>
          <Button variant="outline" size="lg" onClick={handleScroll('#about')}>
            {t('hero.cta2')}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={handleScroll('#about')}
          className="animate-bounce-slow text-cream/60 hover:text-cream transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7M19 6l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
