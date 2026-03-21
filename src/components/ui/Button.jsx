import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const variants = {
  primary:
    'bg-amber text-white hover:bg-amber-dark shadow-lg hover:shadow-xl',
  secondary:
    'bg-burgundy text-cream hover:bg-burgundy-dark shadow-lg hover:shadow-xl',
  outline:
    'border-2 border-cream text-cream hover:bg-cream/10',
  outlineDark:
    'border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-cream',
  ghost:
    'text-amber hover:text-amber-dark underline-offset-4 hover:underline',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

/** Router-aware link that looks like a Button. Use `to` instead of `href`. */
export function LinkButton({
  to,
  variant = 'primary',
  size = 'md',
  className,
  children,
}) {
  return (
    <Link
      to={to}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
