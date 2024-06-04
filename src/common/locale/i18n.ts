import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { DEFAULT_LANGUAGE } from "common/constants";
import { Env } from "common/types/global";
const { NODE_ENV } = process.env;

const options: InitOptions = {
  debug: ![Env.Development, Env.Production].includes(NODE_ENV as Env),
  lng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(LanguageDetector).use(Backend).use(initReactI18next).init(options);

export default i18n;
