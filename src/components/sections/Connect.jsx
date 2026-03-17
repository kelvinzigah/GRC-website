import { useTranslation } from '../../hooks/useTranslation';
import { Button } from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function Connect() {
  const { t } = useTranslation();
  const ref = useScrollAnimation();

  const handleScroll = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="connect"
      ref={ref}
      className="animate-on-scroll relative overflow-hidden py-24 md:py-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy-dark via-burgundy to-amber/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
          {t('connect.headline')}
        </h2>
        <p className="mt-6 text-lg text-cream/85 sm:text-xl">
          {t('connect.subtitle')}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="primary" size="lg" onClick={handleScroll('#services')}>
            {t('connect.cta1')}
          </Button>
          <Button variant="outline" size="lg" onClick={handleScroll('#contact')}>
            {t('connect.cta2')}
          </Button>
        </div>
      </div>
    </section>
  );
}
