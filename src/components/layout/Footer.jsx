import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61575075337865',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@GateofRedemptionChurch',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const QUICK_LINKS = [
  { id: 'about', href: '/#about', labelKey: 'nav.about' },
  { id: 'services', href: '/#services', labelKey: 'nav.visitUs' },
  { id: 'events', href: '/events', labelKey: 'nav.events' },
  { id: 'media', href: '/media', labelKey: 'nav.media' },
  { id: 'contact', href: '/#contact', labelKey: 'nav.contact' },
];

const MINISTRY_LINKS = [
  { key: 'foodDrive', slug: 'food-drive', labelKey: 'nav.foodDrive' },
  { key: 'streetEvangelism', slug: 'street-evangelism', labelKey: 'nav.streetEvangelism' },
  { key: 'smallGroups', slug: 'small-groups', labelKey: 'nav.smallGroups' },
  { key: 'discipleshipMentorship', slug: 'discipleship-mentorship', labelKey: 'nav.discipleshipMentorship' },
  { key: 'youthMentorship', slug: 'youth-mentorship', labelKey: 'nav.youthMentorship' },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-burgundy-dark text-cream/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/images/grc_logo.jpg"
              alt="GRC Logo"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/50"
            />
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Gate of Redemption Church — A community rooted in the Gospel, reaching Namur and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream">{t('footer.quickLinks')}</h4>
            <ul className="mt-4 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.href}
                    className="rounded-md px-2 py-1 text-sm text-cream/60 transition-colors hover:bg-amber hover:text-white"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="font-semibold text-cream">{t('footer.ministries')}</h4>
            <ul className="mt-4 space-y-2">
              {MINISTRY_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    to={`/ministries/${link.slug}`}
                    className="rounded-md px-2 py-1 text-sm text-cream/60 transition-colors hover:bg-amber hover:text-white"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-cream">{t('footer.followUs')}</h4>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream/60 hover:bg-amber hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-sm text-cream/40">
          <p>{t('footer.copyright')}</p>
          <p className="mt-1 italic">{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  );
}
