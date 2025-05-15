import { Tabs } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useThemeColor } from '../../src/hooks/useThemeColor';
import { useTheme } from '../../src/contexts/ThemeContext';

export default function TabLayout() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor,
        },
        headerTintColor: textColor,
        tabBarStyle: {
          backgroundColor,
        },
        tabBarActiveTintColor: textColor,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: t('welcome'),
          tabBarLabel: t('welcome'),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('settings.title'),
          tabBarLabel: t('settings.title'),
        }}
      />
    </Tabs>
  );
}
