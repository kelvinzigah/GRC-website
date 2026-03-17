import { cn } from '../../utils/cn';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export function SectionWrapper({
  id,
  dark = false,
  fullWidth = false,
  className,
  children,
  noPadding = false,
}) {
  const ref = useScrollAnimation();

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'animate-on-scroll',
        dark ? 'bg-burgundy-dark text-cream' : 'bg-cream text-neutral-800',
        noPadding ? '' : 'py-20 md:py-28',
        className
      )}
    >
      <div
        className={cn(
          fullWidth ? 'w-full' : 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeadline({ children, dark = false, className }) {
  return (
    <h2
      className={cn(
        'font-serif text-3xl font-bold md:text-4xl lg:text-5xl mb-4',
        dark ? 'text-cream' : 'text-burgundy-dark',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({ children, dark = false, className }) {
  return (
    <p
      className={cn(
        'text-lg md:text-xl max-w-2xl mx-auto mb-12',
        dark ? 'text-cream/80' : 'text-neutral-600',
        className
      )}
    >
      {children}
    </p>
  );
}
