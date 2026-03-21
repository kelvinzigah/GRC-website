import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { NAV_LINKS_LEFT, NAV_LINKS_RIGHT } from '../../constants/navigation';
import { cn } from '../../utils/cn';
import { DropdownMenu } from './DropdownMenu';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const { t, language, toggleLanguage } = useTranslation();
  const activeSection = useScrollSpy();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'navbar-scrolled py-3 shadow-lg'
            : 'bg-burgundy-dark/70 py-4 backdrop-blur-sm'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left nav links - desktop */}
          <div className="hidden flex-1 items-center justify-start gap-1 lg:flex">
            {NAV_LINKS_LEFT.map((link) => (
              <NavItem
                key={link.key}
                link={link}
                t={t}
                activeSection={activeSection}
                pathname={pathname}
                onNavClick={setMobileOpen}
              />
            ))}
          </div>

          {/* Centered logo */}
          <Link
            to="/"
            className="flex-shrink-0"
            aria-label="Gate of Redemption Church - Home"
          >
            <img
              src="/images/grc_logo.jpg"
              alt="GRC Logo"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-gold/50 lg:h-12 lg:w-12"
            />
          </Link>

          {/* Right nav links - desktop */}
          <div className="hidden flex-1 items-center justify-end gap-1 lg:flex">
            {NAV_LINKS_RIGHT.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-cream/90 transition-colors hover:bg-amber hover:text-white"
              >
                {t(link.labelKey)}
              </Link>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="ml-2 rounded-lg border border-cream/30 px-3 py-1.5 text-xs font-semibold text-cream/90 transition-colors hover:border-amber hover:bg-amber hover:text-white cursor-pointer"
              aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-cream hover:bg-cream/10 lg:hidden cursor-pointer"
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}

function NavItem({ link, t, activeSection, pathname, onNavClick }) {
  const isActive = link.routePrefix
    ? pathname.startsWith(link.routePrefix) || (pathname === '/' && link.href === `#${activeSection}`)
    : link.type === 'route'
      ? pathname === link.href
      : pathname === '/' && link.href === `#${activeSection}`;

  if (link.dropdown) {
    return (
      <DropdownMenu
        label={t(link.labelKey)}
        items={link.dropdown}
        t={t}
        isActive={isActive}
      />
    );
  }

  if (link.type === 'route') {
    return (
      <Link
        to={link.href}
        className={cn(
          'rounded-lg px-3 py-2 text-sm font-medium text-cream/90 transition-colors hover:bg-cream/10 hover:text-cream',
          isActive && 'bg-cream/15 text-cream'
        )}
      >
        {t(link.labelKey)}
      </Link>
    );
  }

  return (
    <a
      href={link.href}
      onClick={(e) => {
        e.preventDefault();
        const target = document.querySelector(link.href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        onNavClick(false);
      }}
      className={cn(
        'rounded-lg px-3 py-2 text-sm font-medium text-cream/90 transition-colors hover:bg-cream/10 hover:text-cream',
        isActive && 'bg-cream/15 text-cream'
      )}
    >
      {t(link.labelKey)}
    </a>
  );
}
