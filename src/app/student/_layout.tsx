import { Tabs } from "expo-router";

import ClassroomsIcon from "@/presentation/components/icons/classrooms.icon";
import BotIcon from "@/presentation/components/icons/bot.icon";
import SettingsIcon from "@/presentation/components/icons/settings.icon";

import colors from "@/presentation/styles/colors.styles";
import fonts from "@/presentation/styles/fonts.styles";

const tabBarLabelStyle = {
  fontFamily: fonts.nunitoBold,
  fontSize: 10,
  marginBottom: 10,
};

const StudentLayout = () => (
  <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.white,
      tabBarInactiveTintColor: colors.extraLightGray,
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        backgroundColor: colors.primary,
        borderRadius: 15,
        margin: 16,
        marginTop: 0,
        height: 60,
        padding: 5,
        paddingHorizontal: 35,
      },
    }}
  >
    <Tabs.Screen
      name="(home)"
      options={{
        title: "Classrooms",
        tabBarIcon: ({ color }) => <ClassroomsIcon fill={color} />,
        tabBarLabelStyle,
      }}
    />
    <Tabs.Screen
      name="chat"
      options={{
        title: "AI Assistant",
        tabBarIcon: ({ color }) => <BotIcon fill={color} />,
        tabBarLabelStyle,
      }}
    />
    <Tabs.Screen
      name="settings"
      options={{
        title: "Settings",
        tabBarIcon: ({ color }) => <SettingsIcon fill={color} />,
        tabBarLabelStyle,
      }}
    />
  </Tabs>
);

export default StudentLayout;
