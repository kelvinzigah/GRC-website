import { useState, useCallback, useId } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { SectionWrapper, SectionHeadline } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

const INITIAL_FORM = { name: '', email: '', message: '' };

function validateField(field, value, t) {
  switch (field) {
    case 'name':
      if (!value.trim()) return t('contact.errors.nameRequired');
      if (value.trim().length < 2) return t('contact.errors.nameMin');
      return '';
    case 'email':
      if (!value.trim()) return t('contact.errors.emailRequired');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return t('contact.errors.emailInvalid');
      return '';
    case 'message':
      if (!value.trim()) return t('contact.errors.messageRequired');
      if (value.trim().length < 10) return t('contact.errors.messageMin');
      return '';
    default:
      return '';
  }
}

export function Contact() {
  const { t } = useTranslation();
  const formId = useId();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  }, []);

  const handleBlur = useCallback((field) => () => {
    const error = validateField(field, form[field], t);
    setErrors((prev) => ({ ...prev, [field]: error }));
  }, [form, t]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const newErrors = {
      name: validateField('name', form.name, t),
      email: validateField('email', form.email, t),
      message: validateField('message', form.message, t),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => !err)) {
      setSubmitted(true);
      setForm(INITIAL_FORM);
    }
  }, [form, t]);

  return (
    <SectionWrapper id="contact">
      <div className="text-center">
        <SectionHeadline>{t('contact.headline')}</SectionHeadline>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* Contact form */}
        <div>
          {submitted ? (
            <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center" role="status">
              <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4 text-lg font-semibold text-green-800">
                {t('contact.successTitle')}
              </p>
              <p className="mt-2 text-green-700">{t('contact.successMessage')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <FormField
                id={`${formId}-name`}
                label={t('contact.name')}
                type="text"
                value={form.name}
                onChange={handleChange('name')}
                onBlur={handleBlur('name')}
                error={errors.name}
              />
              <FormField
                id={`${formId}-email`}
                label={t('contact.email')}
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email}
              />
              <FormField
                id={`${formId}-message`}
                label={t('contact.message')}
                type="textarea"
                value={form.message}
                onChange={handleChange('message')}
                onBlur={handleBlur('message')}
                error={errors.message}
              />
              <Button type="submit" variant="secondary" size="lg" className="w-full">
                {t('contact.submit')}
              </Button>
            </form>
          )}
        </div>

        {/* Church info */}
        <div className="space-y-6">
          <InfoItem
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            }
            label={t('contact.address')}
          />
          <InfoItem
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            }
            label={t('contact.emailAddress')}
          />
          <InfoItem
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            }
            label={t('contact.phone')}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

function FormField({ id, label, type, value, onChange, onBlur, error }) {
  const errorId = `${id}-error`;
  const inputClasses = cn(
    'w-full rounded-xl border bg-white px-4 py-3 text-neutral-800 outline-none transition-colors',
    error
      ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
      : 'border-cream-dark focus:border-amber focus:ring-2 focus:ring-amber/20'
  );

  const sharedProps = {
    id,
    value,
    onChange,
    onBlur,
    className: inputClasses,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
  };

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-neutral-700">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea rows={5} {...sharedProps} />
      ) : (
        <input type={type} {...sharedProps} />
      )}
      {error && (
        <p id={errorId} role="alert" className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

function InfoItem({ icon, label }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">
        {icon}
      </div>
      <span className="text-neutral-700">{label}</span>
    </div>
  );
}
