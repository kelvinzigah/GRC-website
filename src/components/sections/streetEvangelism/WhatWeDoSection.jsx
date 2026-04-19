import { SectionWrapper, SectionHeadline } from '../../ui/SectionWrapper';

export function WhatWeDoSection({ eyebrow, headline, body, imageAlt }) {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-center">
        <div>
          {eyebrow && (
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-amber mb-3">
              {eyebrow}
            </p>
          )}
          <SectionHeadline>{headline}</SectionHeadline>
          <p className="mt-6 text-lg leading-relaxed text-neutral-700">{body}</p>
        </div>
        <div className="relative h-64 md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/images/street-evangelism/se_3.jpg"
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
