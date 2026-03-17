import { cn } from '../../utils/cn';

export function Card({ className, dark = false, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        dark
          ? 'bg-burgundy-dark/50 border border-gold/20 text-cream hover:border-gold/40'
          : 'bg-white shadow-md hover:shadow-xl border border-cream-dark',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardImage({ src, alt, gradient, label, className }) {
  return (
    <div className={cn('relative overflow-hidden rounded-xl aspect-video', className)}>
      {src ? (
        <img
          src={src}
          alt={alt || ''}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div
          className={cn(
            'h-full w-full flex items-center justify-center text-cream/80 font-medium text-sm',
            gradient || 'bg-gradient-to-br from-burgundy to-amber'
          )}
        >
          {label}
        </div>
      )}
    </div>
  );
}
