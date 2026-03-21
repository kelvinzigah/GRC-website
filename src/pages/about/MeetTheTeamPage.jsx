import { useTranslation } from '../../hooks/useTranslation';
import { PageHero } from '../../components/layout/PageHero';
import { SectionWrapper, SectionHeadline } from '../../components/ui/SectionWrapper';
import { Card } from '../../components/ui/Card';
import { LinkButton } from '../../components/ui/Button';

function TeamMemberCard({ member }) {
  return (
    <Card className="flex flex-col items-center text-center p-8">
      {/* Photo slot — replace gradient with <img src={member.photo}> when available */}
      <div className="h-28 w-28 rounded-full bg-gradient-to-br from-burgundy to-amber flex items-center justify-center text-cream/60 text-4xl font-serif font-bold ring-4 ring-cream-dark">
        {member.name.charAt(0)}
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
      <PageHero
        headline={t('team.hero.headline')}
        subtitle={t('team.hero.subtitle')}
        backgroundImage="/images/togetherness_1.jpg"
        imageAlt="GRC community"
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
          <LinkButton to="/#connect" variant="primary">
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
