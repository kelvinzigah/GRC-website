import { cn } from '../../utils/cn';

/**
 * Full-bleed hero for inner pages. Accepts an optional background image;
 * falls back to a burgundy-dark gradient when none is provided.
 */
export function PageHero({
  headline,
  subtitle,
  backgroundImage,
  imageAlt = '',
  children,
  className,
}) {
  return (
    <section
      className={cn(
        'relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-burgundy-dark text-cream',
        className
      )}
    >
      {/* Background image with overlay */}
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-burgundy-dark/75" />
        </>
      )}

      {/* Gradient decoration (shown when no image) */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-dark via-burgundy to-burgundy-dark opacity-90" />
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {headline}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
