import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import translationEn from './en';
import translationRu from './ru';
import translationUa from './ua';
/* import Backend from 'i18next-http-backend'; */

const resources = {
  en: {
    translation: translationEn
  },
  ru: {
    translation: translationRu
  },
  ua: {
    translation: translationUa
  }
};

i18n
  /* .use(Backend) */
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['ua', 'en', 'ru'],
    debug: true,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
    resources,
    keySeparator: '.',
    detection: {
      order: [
        'cookie',
        'htmlTag',
        'localStorage',
        'path',
        'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: './{{lng}}.js',
    },
    react: { useSuspense: false },
  });

export default i18n;
