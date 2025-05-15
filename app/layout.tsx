import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import { theme } from '../src/constants/theme';
import i18n from '../src/services/i18n';
import { useFonts } from 'expo-font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </ThemeProvider>
  );
}
