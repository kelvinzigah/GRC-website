import { Navigate, useParams } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { PageHero } from '../../components/layout/PageHero';
import { SectionWrapper, SectionHeadline } from '../../components/ui/SectionWrapper';
import { LinkButton } from '../../components/ui/Button';
import { getMinistryBySlug } from '../../constants/ministries';

function ImpactStat({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-gold/10 px-5 py-3">
      <svg className="h-5 w-5 flex-shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="text-sm font-medium text-burgundy-dark">{text}</span>
    </div>
  );
}

export default function MinistryDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const ministry = getMinistryBySlug(slug);
  if (!ministry) return <Navigate to="/ministries" replace />;

  const data = {
    tagline: t(`${ministry.i18nKey}.tagline`),
    desc: t(`${ministry.i18nKey}.desc`),
    whoFor: t(`${ministry.i18nKey}.whoFor`),
    schedule: t(`${ministry.i18nKey}.schedule`),
    impact: t(`${ministry.i18nKey}.impact`),
  };

  // Find the ministry name from the outreach items array on the homepage
  const outreachItems = t('outreach.items');
  const slugToIndex = {
    'food-drive': 0,
    'small-groups': 1,
    'street-evangelism': 2,
    'discipleship-mentorship': 3,
    'youth-mentorship': 4,
  };
  const ministryName = Array.isArray(outreachItems)
    ? outreachItems[slugToIndex[slug]]?.title ?? slug
    : slug;

  return (
    <>
      <PageHero
        headline={ministryName}
        subtitle={data.tagline}
        backgroundImage={ministry.image}
        imageAlt={ministryName}
      />

      {/* Impact stats — shown first to build trust */}
      {Array.isArray(data.impact) && data.impact.length > 0 && (
        <SectionWrapper className="bg-cream-dark">
          <div className="flex flex-wrap gap-4 justify-center">
            {data.impact.map((stat, index) => (
              <ImpactStat key={index} text={stat} />
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* What we do */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeadline>What We Do</SectionHeadline>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">{data.desc}</p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg self-start">
            <img
              src={ministry.image}
              alt={ministryName}
              className="w-full object-cover h-64"
              loading="lazy"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Who it's for + Schedule */}
      <SectionWrapper dark>
        <div className="mx-auto max-w-3xl grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl font-bold text-cream">Who It&apos;s For</h3>
            <p className="mt-4 text-cream/70 leading-relaxed">{data.whoFor}</p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-cream">Schedule</h3>
            <div className="mt-4 flex items-start gap-3">
              <svg className="h-5 w-5 flex-shrink-0 text-amber mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-cream/70">{data.schedule}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Get Involved CTA */}
      <SectionWrapper className="text-center">
        <SectionHeadline>Get Involved</SectionHeadline>
        <p className="mt-4 max-w-xl mx-auto text-neutral-600">
          Ready to serve? We&apos;d love to welcome you. Reach out and we&apos;ll connect you with the team.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton to="/#contact" variant="primary">
            Contact Us →
          </LinkButton>
          <LinkButton to="/ministries" variant="outlineDark">
            ← All Ministries
          </LinkButton>
        </div>
      </SectionWrapper>
    </>
  );
}
