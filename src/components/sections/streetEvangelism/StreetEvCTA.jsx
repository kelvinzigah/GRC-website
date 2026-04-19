import { SectionWrapper, SectionHeadline } from '../../ui/SectionWrapper';
import { LinkButton } from '../../ui/Button';

export function StreetEvCTA({ headline, subtitle, primaryLabel, secondaryLabel }) {
  return (
    <SectionWrapper dark className="relative overflow-hidden text-center">
      {/* Background image with overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/street-evangelism/se_5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          opacity: 0.25,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <SectionHeadline className="text-cream">{headline}</SectionHeadline>
        <p className="mt-4 text-cream/70 max-w-xl mx-auto text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton to="/#contact" variant="primary">{primaryLabel}</LinkButton>
          <LinkButton to="/ministries" variant="outline">{secondaryLabel}</LinkButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
