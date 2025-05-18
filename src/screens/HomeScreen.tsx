import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';
import { Button } from '../components/Button';
import { useThemeColor } from '../hooks/useThemeColor';
import { layout } from '../constants/layout';
import { Card, ExternalLink, HapticTab, HelloWave, ThemedText, ThemedView, IconSymbol, Slider, Checkbox } from '@/components';
import { Collapsible } from '@/components'; 
import React, { useState } from 'react';

export default function HomeScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const [isChecked, setIsChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{t('welcome')}</Text>
      <Button
        title={t('button.submit')}
        onPress={() => router.push('/settings')}
      />
      <Card title="Card Title" content="Card Content" />
      <Collapsible title="Collapsible Title">
        <Text>Collapsible Content</Text>
      </Collapsible>
      <ExternalLink href="https://expo.dev"> dfdfdfdf </ExternalLink>
      <HapticTab onPress={() => router.push('/settings')}>
        <Text> dfdfdfdf </Text>
      </HapticTab>
      <HelloWave> hi </HelloWave>
      <ThemedText>
        <Text>ThemText</Text>
      </ThemedText>
      <ThemedView>
        <Text>ThemView</Text>
      </ThemedView>
      <Slider
        value={sliderValue}
        minimumValue={0}
        maximumValue={100}
        step={1}
        onValueChange={(value) => {
          setSliderValue(Number(value));
          console.log('Slider value:', value);
        }}
        style={{
          width: '100%',
          height: 40,
          marginVertical: 10
        }}
      />
      <Checkbox
        label="체크박스 예시"
        checked={isChecked}
        onChange={(checked) => setIsChecked(!isChecked)}
      />
      <IconSymbol name="chevron.right" size={18} weight="medium" color={textColor} />
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