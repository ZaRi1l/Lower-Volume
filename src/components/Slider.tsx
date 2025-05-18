import React, { useState } from 'react';
import NativeSlider from '@react-native-community/slider';
import { View, Text, StyleSheet } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';

interface SliderProps extends React.ComponentProps<typeof NativeSlider> {
  value?: number;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  onValueChange?: (value: number) => void;
  minimumTrackTintColor?: string;
  maximumTrackTintColor?: string;
  thumbTintColor?: string;
}

export function Slider({
  value = 0,
  minimumValue = 0,
  maximumValue = 100,
  step = 1,
  onValueChange,
  minimumTrackTintColor,
  maximumTrackTintColor,
  thumbTintColor,
}: SliderProps) {
  const textTintColor = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <View style={styles.container}>
      <Text style={[styles.valueText, { color: textTintColor }]}>
        {value}
      </Text>
      <NativeSlider
        style={{
          ...styles.slider
        }} 
        value={value}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        onValueChange={onValueChange}
        minimumTrackTintColor={minimumTrackTintColor || useThemeColor({}, 'primary')}
        maximumTrackTintColor={maximumTrackTintColor || useThemeColor({}, 'text')}
        thumbTintColor={thumbTintColor || useThemeColor({}, 'primary')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  valueText: {
    textAlign: 'center',
    marginBottom: 8,
  },
});
