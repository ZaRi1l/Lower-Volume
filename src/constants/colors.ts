/**
 * 앱에서 사용되는 모든 색상 정의
 * light/dark 모드에 따라 다른 색상 적용
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    primary: '#007AFF',
    secondary: '#5856D6',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    primary: '#0A84FF',
    secondary: '#6C63FF',
    icon: '#A1A1AA',
    tabIconDefault: '#A1A1AA',
    tabIconSelected: tintColorDark,
  },
};
