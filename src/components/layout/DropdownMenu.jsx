import { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';

export function DropdownMenu({ label, items, t, isActive, onNavClick }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-cream/90 transition-colors hover:bg-cream/10 hover:text-cream cursor-pointer',
          isActive && 'bg-cream/15 text-cream'
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div
        className={cn(
          'absolute left-0 top-full mt-1 w-56 rounded-xl border border-cream/10 bg-burgundy-dark/95 p-2 shadow-xl backdrop-blur-lg transition-all duration-200',
          open
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0'
        )}
      >
        {items.map((item) => (
          <a
            key={item.key}
            href={item.href}
            onClick={(e) => {
              onNavClick(e, item.href);
              setOpen(false);
            }}
            className="block rounded-lg px-4 py-2.5 text-sm text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
          >
            {t(item.labelKey)}
          </a>
        ))}
      </div>
    </div>
  );
}
