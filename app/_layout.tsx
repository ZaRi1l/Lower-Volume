import { DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../src/i18n';

import { ThemeProvider } from '../src/contexts/ThemeContext';

export default function NavigationLayout() {
  return (
    <ThemeProvider>
      <NavigationThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
        </Stack>
      </NavigationThemeProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
