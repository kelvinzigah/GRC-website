import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { PageHero } from '../../components/layout/PageHero';
import { SectionWrapper, SectionHeadline } from '../../components/ui/SectionWrapper';
import { CardImage } from '../../components/ui/Card';
import { LinkButton } from '../../components/ui/Button';
import { MINISTRY_DATA } from '../../constants/ministries';

const STEP_ICONS = ['✉️', '🏠', '🙌'];

function MinistryCard({ ministry, t }) {
  const name = t(`${ministry.i18nKey}.tagline`) || ministry.slug;
  const title = t(`outreach.items`)?.find
    ? t('outreach.items').find((_, i) => {
        const slugMap = ['food-drive', 'small-groups', 'street-evangelism', 'discipleship-mentorship', 'youth-mentorship'];
        return slugMap[i] === ministry.slug;
      })?.title
    : ministry.slug;

  return (
    <Link
      to={`/ministries/${ministry.slug}`}
      className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-cream-dark"
    >
      <CardImage
        src={ministry.image}
        alt={ministry.slug}
        gradient={`bg-gradient-to-br ${ministry.gradient}`}
        className="h-52"
      />
      <div className="p-6">
        <h3 className="font-serif text-lg font-bold text-burgundy-dark group-hover:text-amber transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
          {t(`${ministry.i18nKey}.tagline`)}
        </p>
        <span className="mt-4 inline-block text-sm font-medium text-amber group-hover:text-amber-dark transition-colors">
          Learn more →
        </span>
      </div>
    </Link>
  );
}

export default function MinistriesPage() {
  const { t } = useTranslation();
  const howToJoin = t('ministriesPage.howToJoin');

  return (
    <>
      <PageHero
        headline={t('ministriesPage.hero.headline')}
        subtitle={t('ministriesPage.hero.subtitle')}
        backgroundImage="/images/homeless_outreach_1.jpg"
        imageAlt="GRC neighbourhood ministry"
      />

      {/* Ministry grid */}
      <SectionWrapper>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MINISTRY_DATA.map((ministry) => (
            <MinistryCard key={ministry.slug} ministry={ministry} t={t} />
          ))}
        </div>
      </SectionWrapper>

      {/* How to get involved */}
      <SectionWrapper dark>
        <SectionHeadline dark className="text-center mb-12">
          {howToJoin?.title || 'How to Get Involved'}
        </SectionHeadline>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          {[howToJoin?.step1, howToJoin?.step2, howToJoin?.step3].map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-3xl">
                {STEP_ICONS[index]}
              </div>
              <p className="mt-4 text-cream/80">{step}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="text-center">
        <p className="text-xl text-neutral-700">{t('ministriesPage.cta')}</p>
        <div className="mt-6">
          <LinkButton to="/#contact" variant="secondary">
            Contact Us
          </LinkButton>
        </div>
      </SectionWrapper>
    </>
  );
}
