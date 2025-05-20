import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect from root to the tabs/home route
  return <Redirect href="/(tabs)/home" />;
}
