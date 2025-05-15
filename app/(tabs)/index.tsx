import { Redirect } from 'expo-router';

export default function TabIndex() {
  // Redirect /tabs/ to /tabs/home
  return <Redirect href="/(tabs)/home" />;
}
