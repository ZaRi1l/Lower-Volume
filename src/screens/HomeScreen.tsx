import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';
import { Button } from '../components/Button';
import { useThemeColor } from '../hooks/useThemeColor';
import { layout } from '../constants/layout';

export default function HomeScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{t('welcome')}</Text>
      <Button
        title={t('button.submit')}
        onPress={() => router.push('/settings')}
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
    fontSize: layout.fontSize.lg,
    marginBottom: layout.spacing.md,
  },
});