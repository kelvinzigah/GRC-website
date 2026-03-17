import { useState, useEffect } from 'react';
import { SECTION_IDS } from '../constants/navigation';

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const aIndex = SECTION_IDS.indexOf(a.target.id);
            const bIndex = SECTION_IDS.indexOf(b.target.id);
            return aIndex - bIndex;
          });

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-80px 0px 0px 0px',
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
