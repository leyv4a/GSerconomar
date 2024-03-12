// // i18n.js
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// import enTranslation from './locales/en.json';
// import esTranslation from './locales/es.json';

// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: { translation: enTranslation },
//       es: { translation: esTranslation },
//     },
//     lng: 'es', // Idioma predeterminado
//     fallbackLng: 'es', // Idioma de respaldo
//     supportedLngs: ['es', 'en'],
//     debug: true, // Habilita la salida de depuración
//     interpolation: {
//       escapeValue: false, // No necesitas escapar react, ya lo hace
//     },
//   });

// export default i18n;
// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en.json';
import translationES from './locales/es.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector) // Agregar el detector de idioma del navegador
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
    },
    fallbackLng: 'en', // Idioma predeterminado si no se puede determinar ninguno
    detection: {
      order: ['navigator'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
