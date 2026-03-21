import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export function DropdownMenu({ label, items, t, isActive }) {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const timeoutRef = useRef(null);
  const itemRefs = useRef([]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
      setFocusedIndex(-1);
    }, 200);
  };

  const handleToggle = useCallback(() => {
    setOpen((prev) => {
      const next = !prev;
      if (next) {
        setFocusedIndex(0);
      } else {
        setFocusedIndex(-1);
      }
      return next;
    });
  }, []);

  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleToggle();
        break;
      case 'Escape':
        e.preventDefault();
        setOpen(false);
        setFocusedIndex(-1);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!open) {
          setOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prev) => Math.min(prev + 1, items.length - 1));
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (open) {
          setFocusedIndex((prev) => {
            const next = prev - 1;
            if (next < 0) {
              setOpen(false);
              return -1;
            }
            return next;
          });
        }
        break;
    }
  }, [open, items.length, handleToggle]);

  // Focus the active dropdown item
  useEffect(() => {
    if (open && focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex].focus();
    }
  }, [open, focusedIndex]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleBlur = useCallback((e) => {
    const container = e.currentTarget;
    requestAnimationFrame(() => {
      if (!container.contains(document.activeElement)) {
        setOpen(false);
        setFocusedIndex(-1);
      }
    });
  }, []);

  const itemKeyDown = useCallback((e, index) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      setFocusedIndex(-1);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex(Math.min(index + 1, items.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (index === 0) {
        setOpen(false);
        setFocusedIndex(-1);
      } else {
        setFocusedIndex(index - 1);
      }
    }
  }, [items.length]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
    >
      <button
        className={cn(
          'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-cream/90 transition-colors hover:bg-cream/10 hover:text-cream cursor-pointer',
          isActive && 'bg-cream/15 text-cream'
        )}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
      >
        {label}
        <svg
          className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
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
        role="menu"
      >
        {items.map((item, index) => (
          <Link
            key={item.key}
            ref={(el) => { itemRefs.current[index] = el; }}
            to={item.href}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            onKeyDown={(e) => itemKeyDown(e, index)}
            className="block rounded-lg px-4 py-2.5 text-sm text-cream/80 transition-colors hover:bg-amber hover:text-white focus:bg-amber focus:text-white focus:outline-none"
          >
            {t(item.labelKey)}
          </Link>
        ))}
      </div>
    </div>
  );
}
