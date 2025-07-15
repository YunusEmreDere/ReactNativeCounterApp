import { AuthProvider, useAuth } from '@/components/AuthContext';
import { CounterProvider } from '@/components/CounterContext';
import { PostProvider } from '@/components/PostContext';
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { Ionicons } from '@expo/vector-icons';
import { Slot, Tabs, useRouter, useSegments } from "expo-router";
import { useEffect } from 'react';

function RootNavigation() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  // İlk segment login ise login ekranındayız
  const isInLogin = segments[0] === 'login';

  useEffect(() => {
    if (!isLoggedIn && !isInLogin) {
      router.replace('/login');  // Login değilsek ve login ekranında değilsek yönlendir
    }
  }, [isLoggedIn, isInLogin]);

  if (!isLoggedIn && !isInLogin) {
    // Kullanıcı login değil ve login ekranına yönlendiriliyor
    return null;
  }

  if (isInLogin) {
    // Eğer login ekranındaysak sadece sayfayı göster, tab bar yok
    return <Slot />;
  }

  // Login olduktan sonra Tabs gösterilir
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarLabelStyle: { fontFamily: 'Inter_400Regular' },
        headerTitleStyle: { fontFamily: 'Inter_700Bold' },
        headerShown: true,
        tabBarIcon: ({ color, size }) => {
          let iconName: any;
          if (route.name === 'index') iconName = 'home';
          else if (route.name === 'community') iconName = 'people';
          else if (route.name === 'learn') iconName = 'book';
          else if (route.name === 'profile') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="community" options={{ title: 'Community' }} />
      <Tabs.Screen name="learn" options={{ title: 'Learn' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      <Tabs.Screen name="info" options={{ href: null }} />
      <Tabs.Screen name="add-post" options={{ href: null }} />
      <Tabs.Screen name="login" options={{href: null}}/>
    </Tabs>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <PostProvider>
        <CounterProvider>
          <RootNavigation />
        </CounterProvider>
      </PostProvider>
    </AuthProvider>
  );
}
