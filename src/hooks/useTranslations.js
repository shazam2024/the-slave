import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export const useTranslations = () => {
  const { isEnglish } = useLanguage();
  const language = isEnglish ? 'english' : 'hindi';

  const t = (key) => {
    return translations[language][key] || key;
  };

  return { t, language };
};
