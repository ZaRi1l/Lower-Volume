/**
 * Primary button component
 * @param title - Button text
 * @param onPress - Callback for button press
 */

import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { layout } from '../constants/layout';
import { useThemeColor } from '../hooks/useThemeColor';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
  const backgroundColor = useThemeColor({}, 'primary');
  const textColor = useThemeColor({}, 'background');

  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor }]} 
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: layout.spacing.md,
    borderRadius: layout.borderRadius.md,
    alignItems: 'center',
  },
  text: {
    fontSize: layout.fontSize.md,
  },
});