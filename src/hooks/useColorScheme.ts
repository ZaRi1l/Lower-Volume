import { useTheme } from '../contexts/ThemeContext';

export function useColorScheme() {
  const { theme } = useTheme();
  return theme;
}
