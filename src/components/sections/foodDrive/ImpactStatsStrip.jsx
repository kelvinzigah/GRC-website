function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-amber flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function ImpactStatsStrip({ items = [] }) {
  return (
    <div className="w-full bg-amber/10 border-y border-amber/30 py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-full bg-cream border border-amber/50 px-5 py-3 shadow-sm justify-center">
            <CheckIcon />
            <span className="font-sans text-sm font-medium text-burgundy">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
