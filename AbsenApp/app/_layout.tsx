import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Menjaga splash screen agar tidak hilang otomatis
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"), // Memuat font kustom
  });

  useEffect(() => {
    // Menyembunyikan splash screen setelah font selesai dimuat
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Jika font belum dimuat, menampilkan splash screen
  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      {/* Menyembunyikan header untuk tampilan tab */}
      <Stack.Screen name="absensi" options={{ headerShown: false }} />
      {/* Tampilan screen absensi */}
      <Stack.Screen name="absenMasuk" />
      <Stack.Screen name="absenKeluar" />
    </Stack>
  );
}
