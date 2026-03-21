import { useTranslation } from '../../hooks/useTranslation';
import { PageHero } from '../../components/layout/PageHero';
import { SectionWrapper, SectionHeadline } from '../../components/ui/SectionWrapper';
import { Card } from '../../components/ui/Card';
import { Accordion } from '../../components/ui/Accordion';
import { LinkButton } from '../../components/ui/Button';

const VALUE_ICONS = [
  // Great Commission
  <svg key="gc" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
  </svg>,
  // Community
  <svg key="com" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>,
  // Discipleship
  <svg key="disc" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>,
];

export default function VisionValuesPage() {
  const { t } = useTranslation();
  const statementOfFaith = t('visionValues.statementOfFaith');

  return (
    <>
      <PageHero
        headline={t('visionValues.hero.headline')}
        subtitle={t('visionValues.hero.subtitle')}
      />

      {/* Mission statement */}
      <SectionWrapper className="text-center">
        <p className="font-serif text-2xl italic text-burgundy leading-relaxed max-w-3xl mx-auto md:text-3xl">
          &ldquo;{t('visionValues.missionStatement')}&rdquo;
        </p>
      </SectionWrapper>

      {/* Core values */}
      <SectionWrapper dark>
        <SectionHeadline dark className="text-center mb-12">
          {t('values.headline')}
        </SectionHeadline>
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((n, index) => (
            <Card key={n} dark className="text-center p-8">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold">
                {VALUE_ICONS[index]}
              </div>
              <h3 className="font-serif text-xl font-bold text-cream">{t(`values.card${n}.title`)}</h3>
              <p className="mt-4 text-cream/70 leading-relaxed">{t(`values.card${n}.desc`)}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Statement of Faith */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <SectionHeadline className="mb-8">Statement of Faith</SectionHeadline>
          {Array.isArray(statementOfFaith) && (
            <Accordion items={statementOfFaith} className="bg-burgundy-dark rounded-2xl px-6" />
          )}
        </div>
      </SectionWrapper>

      {/* Vision for Namur */}
      <SectionWrapper className="bg-cream-dark">
        <div className="mx-auto max-w-3xl">
          <SectionHeadline>Our Vision for Namur</SectionHeadline>
          <p className="mt-6 text-lg leading-relaxed text-neutral-700">
            {t('visionValues.vision')}
          </p>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper dark className="text-center">
        <p className="font-serif text-2xl font-bold text-cream md:text-3xl">
          Believe what we believe?
        </p>
        <p className="mt-4 text-cream/70 max-w-xl mx-auto">
          Come serve alongside us in Namur.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton to="/ministries" variant="primary">
            {t('visionValues.cta')}
          </LinkButton>
          <LinkButton to="/about/meet-the-team" variant="outline">
            Meet the team →
          </LinkButton>
        </div>
      </SectionWrapper>
    </>
  );
}
