import { useTranslation } from '../../hooks/useTranslation';
import { LinkButton } from '../ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function JoinTeam() {
  const { t } = useTranslation();
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="join-team"
      className="animate-on-scroll relative overflow-hidden py-24 md:py-32"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/togetherness_1.jpg"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-burgundy-dark/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-cream md:text-4xl lg:text-5xl">
          {t('joinTeam.headline')}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-cream/80 max-w-xl mx-auto">
          {t('joinTeam.caption')}
        </p>
        <div className="mt-10">
          <LinkButton to="/serve" variant="primary" size="lg">
            {t('joinTeam.cta')}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
