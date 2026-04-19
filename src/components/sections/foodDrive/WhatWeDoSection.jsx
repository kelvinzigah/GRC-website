import { SectionWrapper, SectionHeadline } from '../../ui/SectionWrapper';

export function WhatWeDoSection({ headline, body, imageAlt }) {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-amber">
            Neighbourhood Food Drive
          </span>
          <SectionHeadline>{headline}</SectionHeadline>
          <p className="font-sans text-base leading-relaxed text-neutral-700">{body}</p>
        </div>
        <div className="relative h-64 md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/images/homeless_outreach_04.jpg"
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
