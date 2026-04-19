import { cn } from '../../utils/cn';

/**
 * Full-bleed hero for inner pages. Accepts an optional background image;
 * falls back to a burgundy-dark gradient when none is provided.
 */
export function PageHero({
  headline,
  subtitle,
  backgroundImage,
  backgroundVideo,
  imageAlt = '',
  imagePosition = 'object-center',
  overlayClass = 'bg-burgundy-dark/75',
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
      {/* Background video with overlay */}
      {backgroundVideo && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            tabIndex={-1}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </>
      )}

      {/* Background image with overlay */}
      {backgroundImage && !backgroundVideo && (
        <>
          <img
            src={backgroundImage}
            alt={imageAlt}
            className={cn('absolute inset-0 h-full w-full object-cover', imagePosition)}
          />
          <div className={cn('absolute inset-0', overlayClass)} />
        </>
      )}

      {/* Gradient decoration (shown when no image and no video) */}
      {!backgroundImage && !backgroundVideo && (
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
