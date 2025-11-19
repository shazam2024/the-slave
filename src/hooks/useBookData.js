import { useLanguage } from '../contexts/LanguageContext';
import { bookData } from '../bookContent';
import { bookDataHindi } from '../bookContentHindi';

export const useBookData = () => {
  const { isEnglish } = useLanguage();

  return isEnglish ? bookData : bookDataHindi;
};
