import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) 
  .use(initReactI18next) 
  .init({
    supportedLngs: ['pt-BR', 'pt', 'en'],
    fallbackLng: 'pt-BR', 
    debug: false, 
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;