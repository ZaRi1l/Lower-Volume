import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const THEME_KEY = 'user-theme';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  // 저장된 테마 설정 불러오기
  useEffect(() => {
    const loadStoredTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem(THEME_KEY);
        if (storedTheme === 'light' || storedTheme === 'dark') {
          setTheme(storedTheme);
        }
      } catch (error) {
        console.error('Failed to load theme setting:', error);
      }
    };
    loadStoredTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    try {
      await AsyncStorage.setItem(THEME_KEY, newTheme);
      setTheme(newTheme);
    } catch (error) {
      console.error('Failed to save theme setting:', error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <NavigationThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
        {children}
      </NavigationThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    console.warn('useTheme is being used outside of ThemeProvider');
    return { theme: 'light', setTheme: () => {}, toggleTheme: () => {} };
  }
  return context;
}
