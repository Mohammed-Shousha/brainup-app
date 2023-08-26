import { useEffect } from "react";
import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";

import { Inter_500Medium } from "@expo-google-fonts/inter";

SplashScreen.preventAutoHideAsync();

const HomeLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Inter_500Medium,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default HomeLayout;
