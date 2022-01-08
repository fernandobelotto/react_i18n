import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from './en-us'
import { ptbr } from './pt-br'

import LanguageDetector from 'i18next-browser-languagedetector';


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en,
            ptbr
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n