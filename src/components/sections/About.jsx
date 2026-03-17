import { useTranslation } from '../../hooks/useTranslation';
import { SectionWrapper, SectionHeadline } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';

export function About() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Text */}
        <div>
          <SectionHeadline>{t('about.headline')}</SectionHeadline>
          <p className="mt-6 text-lg leading-relaxed text-neutral-700">
            {t('about.p1')}
          </p>
          <p className="mt-4 text-lg italic text-burgundy font-medium">
            {t('about.p2')}
          </p>
          <div className="mt-8">
            <Button variant="ghost" onClick={() => document.querySelector('#connect')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('about.cta')}
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <img
            src="/images/evangelism_pic_1.jpg"
            alt="GRC community evangelism"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/30 to-transparent" />
        </div>
      </div>
    </SectionWrapper>
  );
}
