import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';

import en from './locales/en.json';
import ko from './locales/ko.json';

const LANGUAGE_KEY = 'user-language';

// 저장된 언어 설정 불러오기
const loadStoredLanguage = async () => {
  try {
    const storedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  } catch (error) {
    console.error('Failed to load language setting:', error);
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ko: { translation: ko },
    },
    lng: Localization.locale.split('-')[0], // 시스템 언어 사용
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    }
  });

// Load stored language after i18n is initialized
setTimeout(() => {
  loadStoredLanguage();
}, 0);

export const changeLanguage = async (language: string) => {
  try {
    await AsyncStorage.setItem(LANGUAGE_KEY, language);
    await i18n.changeLanguage(language);
  } catch (error) {
    console.error('Failed to save language setting:', error);
  }
};

export default i18n;
