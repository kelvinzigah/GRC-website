import { useState, useCallback, useId } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { PageHero } from '../../components/layout/PageHero';
import { SectionWrapper } from '../../components/ui/SectionWrapper';
import { Button } from '../../components/ui/Button';
import { cn } from '../../utils/cn';

const TEAM_KEYS = ['kids', 'youth', 'cleaning', 'greeter', 'usher', 'multimedia', 'worship', 'lectors'];

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  teams: [],
};

function validateForm(form, t) {
  const errors = {};
  if (!form.firstName.trim()) errors.firstName = t('serve.errors.firstNameRequired');
  if (!form.lastName.trim()) errors.lastName = t('serve.errors.lastNameRequired');
  if (!form.email.trim()) {
    errors.email = t('serve.errors.emailRequired');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = t('serve.errors.emailInvalid');
  }
  if (form.teams.length === 0) errors.teams = t('serve.errors.teamsRequired');
  return errors;
}

export default function ServePage() {
  const { t } = useTranslation();
  const formId = useId();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleText = useCallback((field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  }, []);

  const handleCheckbox = useCallback((key) => (e) => {
    const checked = e.target.checked;
    setForm((prev) => ({
      ...prev,
      teams: checked
        ? [...prev.teams, key]
        : prev.teams.filter((k) => k !== key),
    }));
    setErrors((prev) => ({ ...prev, teams: '' }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const newErrors = validateForm(form, t);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // TODO: wire to Formspree before launch
      setSubmitted(true);
      setForm(INITIAL_FORM);
    }
  }, [form, t]);

  const inputClass = (field) => cn(
    'w-full rounded-xl border bg-white px-4 py-3 text-neutral-800 outline-none transition-colors',
    errors[field]
      ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
      : 'border-cream-dark focus:border-amber focus:ring-2 focus:ring-amber/20'
  );

  return (
    <>
      <PageHero
        headline={t('serve.hero.headline')}
        subtitle={t('serve.hero.subtitle')}
        backgroundImage="/images/togetherness_1.jpg"
        imageAlt="GRC team"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-2xl">
          <p className="text-neutral-600 mb-10 text-center">{t('serve.intro')}</p>

          {submitted ? (
            <div className="rounded-2xl bg-green-50 border border-green-200 p-10 text-center" role="status">
              <svg className="mx-auto h-14 w-14 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4 text-xl font-semibold text-green-800">{t('serve.successTitle')}</p>
              <p className="mt-2 text-green-700">{t('serve.successMessage')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${formId}-first`} className="mb-2 block text-sm font-medium text-neutral-700">
                    {t('serve.firstName')}
                  </label>
                  <input
                    id={`${formId}-first`}
                    type="text"
                    value={form.firstName}
                    onChange={handleText('firstName')}
                    className={inputClass('firstName')}
                    aria-invalid={errors.firstName ? true : undefined}
                  />
                  {errors.firstName && <p role="alert" className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor={`${formId}-last`} className="mb-2 block text-sm font-medium text-neutral-700">
                    {t('serve.lastName')}
                  </label>
                  <input
                    id={`${formId}-last`}
                    type="text"
                    value={form.lastName}
                    onChange={handleText('lastName')}
                    className={inputClass('lastName')}
                    aria-invalid={errors.lastName ? true : undefined}
                  />
                  {errors.lastName && <p role="alert" className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor={`${formId}-email`} className="mb-2 block text-sm font-medium text-neutral-700">
                  {t('serve.email')}
                </label>
                <input
                  id={`${formId}-email`}
                  type="email"
                  value={form.email}
                  onChange={handleText('email')}
                  className={inputClass('email')}
                  aria-invalid={errors.email ? true : undefined}
                />
                {errors.email && <p role="alert" className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor={`${formId}-phone`} className="mb-2 block text-sm font-medium text-neutral-700">
                  {t('serve.phone')}
                </label>
                <input
                  id={`${formId}-phone`}
                  type="tel"
                  value={form.phone}
                  onChange={handleText('phone')}
                  className={inputClass('phone')}
                />
              </div>

              {/* Ministry checkboxes */}
              <fieldset>
                <legend className="mb-3 text-sm font-medium text-neutral-700">
                  {t('serve.teamsLabel')}
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {TEAM_KEYS.map((key) => (
                    <label
                      key={key}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-cream-dark bg-white px-4 py-3 transition-colors hover:border-amber has-[:checked]:border-amber has-[:checked]:bg-amber/5"
                    >
                      <input
                        type="checkbox"
                        checked={form.teams.includes(key)}
                        onChange={handleCheckbox(key)}
                        className="h-4 w-4 rounded border-cream-dark text-amber accent-amber"
                      />
                      <span className="text-sm text-neutral-700">{t(`serve.teams.${key}`)}</span>
                    </label>
                  ))}
                </div>
                {errors.teams && <p role="alert" className="mt-2 text-sm text-red-500">{errors.teams}</p>}
              </fieldset>

              <Button type="submit" variant="secondary" size="lg" className="w-full">
                {t('serve.submit')}
              </Button>
            </form>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
