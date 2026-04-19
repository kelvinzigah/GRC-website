import { SectionWrapper } from '../../ui/SectionWrapper';

function CalendarIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

export function WhoScheduleSection({ whoHeadline, whoBody, scheduleHeadline, scheduleText, photoAlt }) {
  return (
    <SectionWrapper dark>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 mb-12">
        <div className="flex flex-col gap-4">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-amber">
            Serve With Us
          </span>
          <h3 className="font-serif text-2xl font-bold text-cream">{whoHeadline}</h3>
          <p className="font-sans text-base leading-relaxed text-cream/80">{whoBody}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-amber">
            <CalendarIcon />
            <span className="font-sans text-base font-semibold text-amber">{scheduleHeadline}</span>
          </div>
          <p className="font-sans text-base text-cream/80">{scheduleText}</p>
        </div>
      </div>
      <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden">
        <img
          src="/images/homeless_outreach_1.jpg"
          alt={photoAlt}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/60 to-transparent" />
      </div>
    </SectionWrapper>
  );
}
