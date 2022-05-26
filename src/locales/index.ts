import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import csLang from './cs.json';
import daLang from './da.json';
import deLang from './de.json';
import enLang from './en.json';
import esLang from './es.json';
import fiLang from './fi.json';
import frLang from './fr.json';
import itLang from './it.json';
import nlLang from './nl.json';
import plLang from './pl.json';
import ptLang from './pt.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      cs: { translation: csLang },
      da: { translation: daLang },
      de: { translation: deLang },
      en: { translation: enLang },
      es: { translation: esLang },
      fi: { translation: fiLang },
      fr: { translation: frLang },
      it: { translation: itLang },
      nl: { translation: nlLang },
      pl: { translation: plLang },
      pt: { translation: ptLang },
    },
    fallbackLng: navigator.language,
    interpolation: { escapeValue: false },
  });

export default i18n;
