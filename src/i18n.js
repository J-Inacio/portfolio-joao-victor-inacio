import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Permite carregar traduções de um servidor/pasta public
  .use(initReactI18next) // Passa a instância do i18n para o react-i18next
  .init({
    supportedLngs: ['pt-BR', 'pt', 'en'], // Idiomas suportados
    fallbackLng: 'pt-BR', // Idioma padrão caso a tradução não seja encontrada
    debug: true, // Ativa logs no console para depuração
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Caminho para os arquivos de tradução
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;