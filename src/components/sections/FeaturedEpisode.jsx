import { useTranslation } from '../../hooks/useTranslation';
import { SectionWrapper } from '../ui/SectionWrapper';
import { LinkButton } from '../ui/Button';

export function FeaturedEpisode() {
  const { t } = useTranslation();
  const ep = t('featuredEpisode');

  return (
    <SectionWrapper id="media" dark>
      <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
        {/* Left: text */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber">
            {ep.seriesLabel}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-cream md:text-4xl lg:text-5xl leading-tight">
            {ep.title}
          </h2>
          <p className="mt-6 leading-relaxed text-cream/75 text-lg">
            {ep.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={ep.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-amber px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-dark focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2 focus:ring-offset-burgundy-dark"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <svg className="h-4 w-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              {ep.watchCta}
            </a>
            <LinkButton to="/media" variant="ghost" className="text-cream/70 hover:text-cream">
              {ep.browseCta}
            </LinkButton>
          </div>
        </div>

        {/* Right: static podcast logo */}
        <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 overflow-hidden rounded-2xl bg-[#e8d5ae] flex items-center justify-center p-8">
          <img
            src={ep.thumbnailUrl}
            alt="Bread of Life podcast"
            className="w-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
