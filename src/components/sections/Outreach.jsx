import { useEffect, useCallback, useRef, useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useHorizontalScrollJack } from '../../hooks/useHorizontalScrollJack';
import { cn } from '../../utils/cn';
import { Card, CardImage } from '../ui/Card';

const OUTREACH_IMAGES = [
  '/images/homeless_outreach_1.jpg',
  '/images/community_2.jpg',
  '/images/evangelism_pic_1.jpg',
  '/images/evangelism_3.jpg',
  '/images/evangelism_2.jpg',
];

const GRADIENTS = [
  'bg-gradient-to-br from-burgundy to-amber',
  'bg-gradient-to-br from-amber-dark to-gold',
  'bg-gradient-to-br from-burgundy-dark to-burgundy-light',
  'bg-gradient-to-br from-gold to-amber-light',
  'bg-gradient-to-br from-burgundy-light to-amber',
];

export function Outreach() {
  const { t } = useTranslation();
  const items = t('outreach.items');
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { outerRef, stickyRef, scrollRef, isActive } =
    useHorizontalScrollJack('(max-width: 1023px)');

  // Observe the outer wrapper (normal flow) instead of the sticky section,
  // because IntersectionObserver uses layout position which is unreliable for sticky elements.
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [outerRef]);

  const setRefs = useCallback((node) => {
    sectionRef.current = node;
    stickyRef.current = node;
  }, [stickyRef]);

  return (
    <div ref={outerRef}>
      <section
        id="ministries"
        ref={setRefs}
        className={cn(
          'animate-on-scroll bg-cream text-neutral-800 py-20 md:py-28',
          isActive && 'sticky top-0',
          isVisible && 'is-visible'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl mb-4 text-burgundy-dark">
              {t('outreach.headline')}
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-neutral-600">
              {t('outreach.subtitle')}
            </p>
          </div>

          <div
            ref={scrollRef}
            className={cn(
              'hide-scrollbar flex gap-6 pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible',
              isActive
                ? '-mx-4 overflow-x-hidden px-4 sm:mx-0 sm:px-0'
                : '-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0'
            )}
          >
            {items.map((item, index) => (
              <Card
                key={index}
                className="min-w-[280px] flex-shrink-0 sm:min-w-0 overflow-hidden p-0"
              >
                <CardImage
                  src={OUTREACH_IMAGES[index]}
                  alt={item.title}
                  gradient={GRADIENTS[index]}
                  label={item.title}
                  className="h-48"
                />
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-burgundy-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">{item.desc}</p>
                  <a
                    href="#connect"
                    className="mt-3 inline-block text-sm font-medium text-amber hover:text-amber-dark transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#connect')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Learn more →
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
