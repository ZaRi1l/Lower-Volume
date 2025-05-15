import { View, Text, StyleSheet } from 'react-native';
import { layout } from '../constants/layout';
import { useThemeColor } from '../hooks/useThemeColor';

interface CardProps {
  title: string;
  content: string;
}

export function Card({ title, content }: CardProps) {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <View style={[styles.container, { backgroundColor, shadowColor: textColor }]}>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      <Text style={[styles.content, { color: textColor }]}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: layout.spacing.md,
    margin: layout.spacing.md,
    borderRadius: layout.borderRadius.md,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: layout.fontSize.md + 2,
    fontWeight: 'bold',
  },
  content: {
    fontSize: layout.fontSize.md,
  },
});