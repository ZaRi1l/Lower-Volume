/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { colors } from '../constants/colors';
import { useTheme } from '../contexts/ThemeContext';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof colors.light & keyof typeof colors.dark
) {
  try {
    const { theme } = useTheme();
    const colorFromProps = props[theme as keyof typeof props];

    if (colorFromProps) {
      return colorFromProps;
    }
    
    return colors[theme === 'dark' ? 'dark' : 'light'][colorName];
  } catch (error) {
    // If useTheme fails or is used outside of ThemeProvider, default to light theme
    console.warn('useThemeColor is being used outside of ThemeProvider');
    return colors.light[colorName];
  }
}
