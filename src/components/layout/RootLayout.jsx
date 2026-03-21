import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function RootLayout() {
  const { pathname, hash } = useLocation();

  // Scroll to top on route change; scroll to hash anchor when present
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const timer = setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
