import { SectionWrapper } from '../../ui/SectionWrapper';

export function WhoScheduleSection({ whoHeadline, whoBody, scheduleHeadline, scheduleText, serveLabel }) {
  return (
    <SectionWrapper dark>
      {serveLabel && (
        <p className="text-xs font-sans font-semibold uppercase tracking-widest text-amber mb-8 text-center">
          {serveLabel}
        </p>
      )}
      <div className="mx-auto max-w-3xl grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="font-serif text-xl font-bold text-cream">{whoHeadline}</h3>
          <p className="mt-4 text-cream/70 leading-relaxed">{whoBody}</p>
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold text-cream">{scheduleHeadline}</h3>
          <div className="mt-4 flex items-start gap-3">
            <svg className="h-5 w-5 flex-shrink-0 text-amber mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-cream/70">{scheduleText}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
