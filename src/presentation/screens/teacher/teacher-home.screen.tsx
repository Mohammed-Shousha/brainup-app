import { useEffect } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";
import { useUser } from "@/presentation/context/user.context";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";

import globalStyles from "@/presentation/styles/global.styles";

const TeacherHomeScreen = () => {
  const { user } = useUser();

  const { getUserClassrooms, createClassroom } = useClassroomUseCases();

  const handleCreateClassroom = async () => {
    const classroom = await createClassroom.execute({
      id: "1",
      name: "Classroom 1",
      teacher: user,
    });
    console.log({ classroom });
  };

  useEffect(() => {
    const getClassrooms = async () => {
      const userClassrooms = await getUserClassrooms.execute(user);
      console.log({ userClassrooms });
    };

    getClassrooms();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Heading>Teacher Home Screen</Heading>
      <Button
        title="To Classroom"
        onPress={() => router.push("/teacher/classroom/classroom-id")}
      />
      <Button title="Create Classroom" onPress={handleCreateClassroom} />
    </View>
  );
};

export default TeacherHomeScreen;
