import { useRef, useEffect, useState, useCallback } from 'react';

/**
 * Converts vertical scroll into horizontal scroll within a pinned section.
 * Only active when `matchMedia` query matches (e.g. below lg breakpoint).
 *
 * How it works:
 * - The outer wrapper is set to `position: sticky` and the section's height
 *   is inflated so the sticky element stays pinned while the user scrolls.
 * - During that pinned phase, vertical scroll progress is mapped 1-to-1 to
 *   the inner container's horizontal `scrollLeft`.
 */
export function useHorizontalScrollJack(mediaQuery = '(max-width: 1023px)') {
  const outerRef = useRef(null);   // the spacer div that creates scroll room
  const stickyRef = useRef(null);  // the sticky container
  const scrollRef = useRef(null);  // the horizontally-scrollable cards row
  const [isActive, setIsActive] = useState(false);

  // Track media query
  useEffect(() => {
    const mql = window.matchMedia(mediaQuery);
    const handler = (e) => setIsActive(e.matches);
    setIsActive(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [mediaQuery]);

  // Compute how much extra vertical height we need
  const getScrollableWidth = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 0;
    return el.scrollWidth - el.clientWidth;
  }, []);

  // Set the spacer height = viewport height + scrollable overflow
  useEffect(() => {
    const outer = outerRef.current;
    if (!outer || !isActive) {
      if (outer) outer.style.height = '';
      return;
    }

    const update = () => {
      const extra = getScrollableWidth();
      if (extra > 0) {
        outer.style.height = `${window.innerHeight + extra}px`;
      } else {
        outer.style.height = '';
      }
    };

    update();
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
      if (outer) outer.style.height = '';
    };
  }, [isActive, getScrollableWidth]);

  // On scroll, map vertical progress to horizontal scrollLeft
  useEffect(() => {
    if (!isActive) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
        const outer = outerRef.current;
        const scroller = scrollRef.current;
        if (!outer || !scroller) return;

        const rect = outer.getBoundingClientRect();
        // How far the top of the spacer has scrolled past the viewport top
        const scrolled = -rect.top;
        const maxHorizontal = scroller.scrollWidth - scroller.clientWidth;

        if (scrolled <= 0) {
          scroller.scrollLeft = 0;
        } else if (scrolled >= maxHorizontal) {
          scroller.scrollLeft = maxHorizontal;
        } else {
          scroller.scrollLeft = scrolled;
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isActive]);

  return { outerRef, stickyRef, scrollRef, isActive };
}
