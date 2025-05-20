import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { layout } from '../constants/layout';
import { useTheme } from '../contexts/ThemeContext';
import { useThemeColor } from '../hooks/useThemeColor';

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const [currentLang, setCurrentLang] = useState(i18n.language);

  // 언어 변경 감지
  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLang(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{t('settings.title')}</Text>
      <Button
        title={t('settings.language')}
        onPress={() => {
          const newLang = i18n.language === 'ko' ? 'en' : 'ko';
          i18n.changeLanguage(newLang);
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