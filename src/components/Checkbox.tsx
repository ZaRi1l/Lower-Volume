import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { IconSymbol } from './ui/IconSymbol';
import { useThemeColor } from '../hooks/useThemeColor';

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  style?: any;
}

export function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
}: CheckboxProps) {
  const primaryColor = useThemeColor({}, 'primary');
  const textColor = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'background');

  const handlePress = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, style, { backgroundColor }]}
      onPress={handlePress}
      disabled={disabled}
    >
      <View
        style={[
          styles.checkbox,
          {
            borderColor: disabled ? textColor : primaryColor,
            backgroundColor: checked ? primaryColor : backgroundColor,
          },
        ]}
      >
        {checked && (
          <IconSymbol name="checkmark.circle.fill" size={20} color={backgroundColor} />
        )}
      </View>
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  label: {
    fontSize: 16,
    marginLeft: 12,
  },
});
