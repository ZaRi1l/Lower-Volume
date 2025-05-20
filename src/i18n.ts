import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import i18n, { i18n as I18n } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ko from './locales/ko.json';

const LANGUAGE_KEY = 'user-language';

const resources = {
  en: { translation: en },
  ko: { translation: ko },
};

// 기본 언어 설정 (비동기 로드 전에 사용할 기본값)
const defaultLanguage = 'en';

// Create and configure i18n instance
const i18nInstance: I18n = i18n.createInstance();

// Create a custom i18n object with our overrides
const customI18n: I18n = {
  ...i18nInstance,
  // Override changeLanguage to save to AsyncStorage
  changeLanguage: async (language: string) => {
    try {
      await AsyncStorage.setItem(LANGUAGE_KEY, language);
      await i18nInstance.changeLanguage(language);
      return i18nInstance.t;
    } catch (error) {
      console.error('Failed to save language setting:', error);
      return i18nInstance.t;
    }
  }
} as unknown as I18n;

// Export the custom i18n object
export { customI18n as i18n };

// i18n 초기화 함수
const initI18n = async () => {
  try {
    // 저장된 언어 설정 불러오기
    let language = await AsyncStorage.getItem(LANGUAGE_KEY);
    
    // 저장된 언어가 없으면 기기 설정에서 가져오기
    if (!language) {
      const locale = Localization.locale || defaultLanguage;
      language = locale.split('-')[0];
    }

    // 지원하는 언어 목록에 없는 경우 기본값 사용
    if (!resources[language as keyof typeof resources]) {
      language = defaultLanguage;
    }

    // i18n 초기화
    await i18nInstance.use(initReactI18next).init({
      resources,
      lng: language,
      fallbackLng: defaultLanguage,
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
  } catch (error) {
    console.error('Failed to initialize i18n:', error);
    // 오류 발생 시 기본값으로 초기화
    await i18nInstance.use(initReactI18next).init({
      resources,
      lng: defaultLanguage,
      fallbackLng: defaultLanguage,
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
  }
};

// 앱 시작 시 i18n 초기화
initI18n();

export default i18n;