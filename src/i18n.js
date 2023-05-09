import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next'
import Backend from 'i18next'
import common_en from './translations/en/translation.json'
import common_es from './translations/es/translation.json'

const resources = {
  en: {
    translation: common_en
  },
  es: {
    translation: common_es
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: false,
    LanguageDetector: true,
    Backend: true,
    resources,
    lng: "ua",
    fallbeckLang: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;