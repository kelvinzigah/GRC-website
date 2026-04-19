import { SectionWrapper, SectionHeadline } from '../../ui/SectionWrapper';
import { LinkButton } from '../../ui/Button';

export function FoodDriveCTA({ headline, subtitle, primaryLabel, secondaryLabel }) {
  return (
    <SectionWrapper className="relative overflow-hidden text-center">
      <img
        src="/images/homeless_outreach_02.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 30%' }}
      />
      <div className="absolute inset-0 bg-burgundy-dark/80" />
      <div className="relative z-10">
        <SectionHeadline dark>{headline}</SectionHeadline>
        <p className="mt-4 text-cream/80 max-w-xl mx-auto text-lg font-sans">{subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton to="/#contact" variant="primary">
            {primaryLabel}
          </LinkButton>
          <LinkButton to="/ministries" variant="outline" className="border-cream text-cream hover:bg-cream/10">
            {secondaryLabel}
          </LinkButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
