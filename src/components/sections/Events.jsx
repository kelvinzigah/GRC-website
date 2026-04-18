import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { SectionWrapper, SectionHeadline } from '../ui/SectionWrapper';
import { LinkButton } from '../ui/Button';

const MONTH_ABBR = {
  January: 'JAN', February: 'FEB', March: 'MAR', April: 'APR',
  May: 'MAY', June: 'JUN', July: 'JUL', August: 'AUG',
  September: 'SEP', October: 'OCT', November: 'NOV', December: 'DEC',
  Janvier: 'JAN', Février: 'FÉV', Mars: 'MAR', Avril: 'AVR',
  Mai: 'MAI', Juin: 'JUN', Juillet: 'JUL', Août: 'AOÛ',
  Septembre: 'SEP', Octobre: 'OCT', Novembre: 'NOV', Décembre: 'DÉC',
};

const DAY_ABBR = {
  Sunday: 'SUN', Monday: 'MON', Tuesday: 'TUE', Wednesday: 'WED',
  Thursday: 'THU', Friday: 'FRI', Saturday: 'SAT',
  dimanche: 'DIM', lundi: 'LUN', mardi: 'MAR', mercredi: 'MER',
  jeudi: 'JEU', vendredi: 'VEN', samedi: 'SAM',
};

const EVERY_LABEL = { every: 'EVERY', chaque: 'CHAQUE' };

function parseDateLabel(dateStr) {
  const everyMatch = dateStr.match(/^(Every|Chaque)\s+(\w+)/i);
  if (everyMatch) {
    const keyword = everyMatch[1].toLowerCase();
    const dayName = everyMatch[2];
    const month = EVERY_LABEL[keyword] ?? 'EVERY';
    return { month, day: DAY_ABBR[dayName] ?? dayName.slice(0, 3).toUpperCase() };
  }
  const dateMatch = dateStr.match(/(\w+)\s+(\d+)/);
  if (dateMatch) {
    const month = MONTH_ABBR[dateMatch[1]] ?? dateMatch[1].slice(0, 3).toUpperCase();
    return { month, day: dateMatch[2] };
  }
  return { month: '—', day: '—' };
}

export function Events() {
  const { t } = useTranslation();
  const events = t('events.items');
  const previewEvents = events.slice(0, 3);

  return (
    <SectionWrapper id="events" className="bg-cream-dark">
      <div className="text-center">
        <SectionHeadline>{t('events.headline')}</SectionHeadline>
      </div>

      <div className="mt-10 mx-auto max-w-2xl space-y-4">
        {previewEvents.map((event, index) => {
          const { month, day } = parseDateLabel(event.date);
          return (
            <Link
              key={index}
              to="/events"
              className="group flex items-center gap-5 rounded-2xl border border-cream-dark bg-white px-6 py-5 transition-colors hover:border-amber hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
            >
              {/* Date block */}
              <div className="w-14 flex-shrink-0 text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber leading-none">
                  {month}
                </p>
                <p className="mt-0.5 font-serif text-2xl font-bold text-burgundy-dark leading-none">
                  {day}
                </p>
              </div>

              {/* Divider */}
              <div className="h-10 w-px flex-shrink-0 bg-cream-dark" />

              {/* Info */}
              <div className="min-w-0 flex-1">
                <h3 className="font-serif font-bold text-burgundy-dark truncate">
                  {event.title}
                </h3>
                <p className="mt-0.5 text-sm text-neutral-500">{event.time}</p>
              </div>

              {/* Chevron */}
              <svg
                className="h-5 w-5 flex-shrink-0 text-neutral-300 transition-colors group-hover:text-amber"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <LinkButton to="/events" variant="secondary">
          {t('events.seeAll')}
        </LinkButton>
      </div>
    </SectionWrapper>
  );
}
