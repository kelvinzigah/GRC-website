import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-4 text-center">
      <p className="font-serif text-8xl font-bold text-burgundy">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-burgundy-dark">Page Not Found</h1>
      <p className="mt-2 max-w-md text-burgundy/60">
        The page you&apos;re looking for doesn&apos;t exist. You may have followed an old link or mistyped the address.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-amber-dark"
      >
        Go Home
      </Link>
    </section>
  );
}
