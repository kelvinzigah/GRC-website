import { useContext, useCallback } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';

const translations = { en, fr };

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => {
    if (current === null || current === undefined) return undefined;
    return current[key];
  }, obj);
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  const { language, setLanguage, toggleLanguage } = context;

  const t = useCallback(
    (key) => {
      const value = getNestedValue(translations[language], key);
      if (value === undefined) {
        if (import.meta.env.DEV) {
          console.warn(`Missing translation: ${key} [${language}]`);
        }
        return key;
      }
      return value;
    },
    [language]
  );

  return { t, language, setLanguage, toggleLanguage };
}
