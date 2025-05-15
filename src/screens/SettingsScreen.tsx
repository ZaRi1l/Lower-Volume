import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/Button';
import { useThemeColor } from '../hooks/useThemeColor';
import { useTheme } from '../contexts/ThemeContext';
import { layout } from '../constants/layout';
import { changeLanguage } from '../i18n';
import i18next from 'i18next';

export default function SettingsScreen() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{t('settings.title')}</Text>
      <Button
        title={t('settings.language')}
        onPress={() => {
          const currentLang = i18next.language;
          const newLang = currentLang === 'ko' ? 'en' : 'ko';
          changeLanguage(newLang);
        }}
      />
      <Button
        title={t(theme === 'light' ? 'settings.theme.dark' : 'settings.theme.light')}
        onPress={toggleTheme}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: layout.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: layout.fontSize.md + 4,
    marginBottom: layout.spacing.md,
  },
});