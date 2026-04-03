import { useTranslation } from '../../hooks/useTranslation';
import { PageHero } from '../../components/layout/PageHero';
import { SectionWrapper, SectionHeadline } from '../../components/ui/SectionWrapper';
import { Accordion } from '../../components/ui/Accordion';
import { LinkButton } from '../../components/ui/Button';
// ─── Inline SVG Icons ────────────────────────────────────────────────────────

function IconPrayer({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 11l-4 4m0 0l4 4m-4-4h14" />
      <path d="M15 7l4 4-4 4" />
      <path d="M12 3v2m0 14v2M3 12h2m14 0h2" />
    </svg>
  );
}

function IconBook({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function IconMegaphone({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
    </svg>
  );
}

function IconHeart({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function IconShield({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function IconDove({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3c-1.2 5.4-5 7-8 8 2 2 4 2.5 5.5 2 .5 2.5-.5 5-2.5 7 5-1 8.5-5.5 7.5-11.5C16 5 14 3.5 12 3z" />
      <path d="M9 12c1 1.5 2.5 2 4 1.5" />
    </svg>
  );
}

// ─── Pillar Icons ─────────────────────────────────────────────────────────────

function IconGlobe({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
    </svg>
  );
}

function IconSeedling({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22v-9m0 0c0-3 2-6 6-7-1 4-3 6-6 7zm0 0c0-3-2-6-6-7 1 4 3 6 6 7z" />
    </svg>
  );
}

function IconPeople({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );
}

function IconHeartSmall({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function IconHands({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m-7.8-4.5h4.5" />
    </svg>
  );
}

// ─── Icon maps ────────────────────────────────────────────────────────────────

const VALUE_ICONS = [
  IconPrayer,
  IconBook,
  IconMegaphone,
  IconHeart,
  IconShield,
  IconDove,
];

const PILLAR_ICONS = [
  IconGlobe,
  IconSeedling,
  IconPeople,
  IconHeartSmall,
  IconHands,
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function VisionValuesPage() {
  const { t } = useTranslation();

  const visionItems = t('visionValues.values.items');
  const pillarItems = t('visionValues.pillars.items');
  const statementOfFaith = t('visionValues.statementOfFaith');

  return (
    <>
      {/* 1. Hero */}
      <PageHero
        headline={t('visionValues.hero.headline')}
        subtitle={t('visionValues.hero.subtitle')}
      />

      {/* 2. Vision & Mission */}
      <SectionWrapper className="text-center">
        <div className="mx-auto max-w-3xl space-y-16">
          {/* Vision */}
          <div>
            <h2 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-amber">
              {t('visionValues.vision.sectionLabel')}
            </h2>
            <p className="font-serif text-2xl italic text-burgundy leading-relaxed md:text-3xl">
              &ldquo;{t('visionValues.vision.text')}&rdquo;
            </p>
            <p className="mt-4 font-serif text-sm text-gold">
              {t('visionValues.vision.scripture')}
            </p>
          </div>

          {/* Divider */}
          <div className="mx-auto h-px w-24 bg-amber/30" />

          {/* Mission */}
          <div>
            <h2 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-amber">
              {t('visionValues.mission.sectionLabel')}
            </h2>
            <p className="font-serif text-2xl italic text-burgundy leading-relaxed md:text-3xl">
              &ldquo;{t('visionValues.mission.text')}&rdquo;
            </p>
            <p className="mt-4 font-serif text-sm text-gold">
              {t('visionValues.mission.scripture')}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Heart of Faith */}
      <SectionWrapper className="bg-cream-dark text-center">
        <div className="mx-auto max-w-3xl">
          <p className="font-serif text-2xl italic text-burgundy leading-relaxed md:text-3xl">
            &ldquo;{t('visionValues.heartOfFaith')}&rdquo;
          </p>
        </div>
      </SectionWrapper>

      {/* 4. Core Values */}
      <SectionWrapper dark>
        <SectionHeadline dark className="text-center mb-12">
          {t('visionValues.values.headline')}
        </SectionHeadline>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {Array.isArray(visionItems) && visionItems.map((item, index) => {
            const Icon = VALUE_ICONS[index] || VALUE_ICONS[0];
            return (
              <div
                key={index}
                className="bg-white/5 rounded-2xl border border-white/10 p-6 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-4 text-amber">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-cream mb-3">
                  {item.title}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* 5. Ministry Pillars */}
      <SectionWrapper>
        <SectionHeadline className="text-center mb-12">
          {t('visionValues.pillars.headline')}
        </SectionHeadline>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {Array.isArray(pillarItems) && pillarItems.map((item, index) => {
            const Icon = PILLAR_ICONS[index] || PILLAR_ICONS[0];
            return (
              <div
                key={index}
                className="rounded-xl border border-burgundy/10 p-5 flex flex-col items-center gap-3 hover:border-burgundy/30 transition-colors"
              >
                <div className="w-8 h-8 text-amber">
                  <Icon className="w-8 h-8" />
                </div>
                <p className="font-serif font-semibold text-burgundy text-center text-sm">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* 6. Statement of Faith */}
      <SectionWrapper dark>
        <div className="mx-auto max-w-3xl">
          <SectionHeadline dark className="mb-8">
            {t('visionValues.statementOfFaithHeadline')}
          </SectionHeadline>
          {Array.isArray(statementOfFaith) && (
            <Accordion items={statementOfFaith} className="bg-burgundy-dark rounded-2xl px-6" />
          )}
        </div>
      </SectionWrapper>

      {/* 7. CTA */}
      <SectionWrapper className="text-center">
        <SectionHeadline className="text-center">
          {t('visionValues.cta.headline')}
        </SectionHeadline>
        <p className="mt-4 text-neutral-600 max-w-xl mx-auto text-lg">
          {t('visionValues.cta.subtitle')}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton to="/ministries" variant="primary" className="focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2">
            {t('visionValues.cta.primary')}
          </LinkButton>
          <LinkButton to="/about/meet-the-team" variant="outline" className="focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2">
            {t('visionValues.cta.secondary')}
          </LinkButton>
        </div>
      </SectionWrapper>
    </>
  );
}
