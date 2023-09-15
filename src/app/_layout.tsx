import { useEffect } from "react";
import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { Inter_500Medium } from "@expo-google-fonts/inter";

import { UserProvider } from "@/presentation/context/user.context";
import { ClassroomProvider } from "@/presentation/context/classroom.context";
import { QuizProvider } from "@/presentation/context/quiz.context";
import { LessonProvider } from "@/presentation/context/lesson.context";
import { AiProvider } from "@/presentation/context/ai.context";

import colors from "@/presentation/styles/colors.styles";

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
    <UserProvider>
      <AiProvider>
        <ClassroomProvider>
          <QuizProvider>
            <LessonProvider>
              <Stack
                screenOptions={{
                  headerShown: false,
                  contentStyle: {
                    backgroundColor: colors.white,
                  },
                }}
              />
            </LessonProvider>
          </QuizProvider>
        </ClassroomProvider>
      </AiProvider>
    </UserProvider>
  );
};

export default HomeLayout;
