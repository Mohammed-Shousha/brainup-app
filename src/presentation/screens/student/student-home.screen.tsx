import { useEffect } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";
import { useUser } from "@/presentation/context/user.context";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";

import globalStyles from "@/presentation/styles/global.styles";

const StudentHomeScreen = () => {
  const { user } = useUser();

  const { getUserClassrooms } = useClassroomUseCases();

  useEffect(() => {
    const getClassrooms = async () => {
      const userClassrooms = await getUserClassrooms.execute(user);
      console.log({ userClassrooms });
    };

    getClassrooms();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Heading>Student Home Screen</Heading>
      <Button
        title="To Classroom"
        onPress={() => router.push("/student/classroom/classroom-id")}
      />
    </View>
  );
};

export default StudentHomeScreen;
