import { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { NAV_LINKS_LEFT, NAV_LINKS_RIGHT } from '../../constants/navigation';
import { cn } from '../../utils/cn';

export function MobileMenu({ isOpen, onClose, onNavClick }) {
  const { t, language, toggleLanguage } = useTranslation();
  const [expandedItem, setExpandedItem] = useState(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleExpanded = (key) => {
    setExpandedItem(expandedItem === key ? null : key);
  };

  const allLinks = [...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT];

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-burgundy-dark shadow-2xl transition-transform duration-300 lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-cream/10 p-4">
          <img
            src="/images/grc_logo.jpg"
            alt="GRC Logo"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-gold/50"
          />
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-cream hover:bg-cream/10 cursor-pointer"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <div className="overflow-y-auto p-4" style={{ maxHeight: 'calc(100% - 140px)' }}>
          {allLinks.map((link) => (
            <div key={link.key} className="border-b border-cream/5">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleExpanded(link.key)}
                    className="flex w-full items-center justify-between py-3 text-left text-cream/90 hover:text-cream cursor-pointer"
                  >
                    <span className="font-medium">{t(link.labelKey)}</span>
                    <svg
                      className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        expandedItem === link.key && 'rotate-180'
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-200',
                      expandedItem === link.key ? 'max-h-96 pb-2' : 'max-h-0'
                    )}
                  >
                    {link.dropdown.map((sub) => (
                      <a
                        key={sub.key}
                        href={sub.href}
                        onClick={(e) => onNavClick(e, sub.href)}
                        className="block py-2 pl-4 text-sm text-cream/70 hover:text-cream"
                      >
                        {t(sub.labelKey)}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={link.href}
                  onClick={(e) => onNavClick(e, link.href)}
                  className="block py-3 font-medium text-cream/90 hover:text-cream"
                >
                  {t(link.labelKey)}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Footer with language toggle */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-cream/10 p-4">
          <button
            onClick={toggleLanguage}
            className="w-full rounded-lg border border-cream/30 py-2 text-sm font-semibold text-cream/90 hover:border-cream/60 hover:bg-cream/10 cursor-pointer"
          >
            {language === 'en' ? '🇫🇷 Français' : '🇬🇧 English'}
          </button>
        </div>
      </div>
    </>
  );
}
