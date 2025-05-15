import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AppState {
  language: string;
  setLanguage: (lang: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  language: 'en',
  setLanguage: async (lang) => {
    await AsyncStorage.setItem('language', lang);
    set({ language: lang });
  },
}));