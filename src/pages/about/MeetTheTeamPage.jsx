import { useTranslation } from '../../hooks/useTranslation';
import { SectionWrapper, SectionHeadline } from '../../components/ui/SectionWrapper';
import { Card } from '../../components/ui/Card';
import { LinkButton } from '../../components/ui/Button';

function TeamHero({ headline, subtitle }) {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/meet_the_team.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark/65 via-burgundy-dark/25 to-transparent" />
      </div>
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16">
        <div className="max-w-xl lg:max-w-2xl">
          <span className="mb-4 inline-block font-sans text-xs font-semibold uppercase tracking-widest text-amber">
            Our People
          </span>
          <h1 className="font-serif text-5xl font-bold leading-tight text-cream sm:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/90 sm:text-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member }) {
  return (
    <Card className="flex flex-col items-center text-center p-8">
      <div className="h-28 w-28 rounded-full overflow-hidden ring-4 ring-cream-dark flex-shrink-0">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: member.photoPosition || 'center 30%' }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-burgundy to-amber flex items-center justify-center text-cream/60 text-4xl font-serif font-bold">
            {member.name.charAt(0)}
          </div>
        )}
      </div>
      <h3 className="mt-6 font-serif text-xl font-bold text-burgundy-dark">{member.name}</h3>
      <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-amber">{member.title}</p>
      <p className="mt-4 text-sm leading-relaxed text-neutral-600">{member.bio}</p>
    </Card>
  );
}

export default function MeetTheTeamPage() {
  const { t } = useTranslation();
  const members = t('team.members');

  return (
    <>
      <TeamHero
        headline={t('team.hero.headline')}
        subtitle={t('team.hero.subtitle')}
      />

      {/* Team grid */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <SectionHeadline>Leadership</SectionHeadline>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-600">
            GRC is led by ordinary people with an extraordinary calling. We&apos;re servants first.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(members) && members.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </SectionWrapper>

      {/* CTA strip */}
      <SectionWrapper dark className="text-center">
        <p className="font-serif text-2xl font-bold text-cream md:text-3xl">
          GRC is its people.
        </p>
        <p className="mt-4 text-cream/70 max-w-xl mx-auto">
          Every member is a minister. Come be part of a community that serves together.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton to="/#contact" variant="primary">
            {t('team.cta')}
          </LinkButton>
          <LinkButton to="/events" variant="outline">
            See upcoming events →
          </LinkButton>
        </div>
      </SectionWrapper>
    </>
  );
}
