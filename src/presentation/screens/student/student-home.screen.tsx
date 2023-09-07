import { useEffect, useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";
import Input from "@/presentation/components/input.component";

import globalStyles from "@/presentation/styles/global.styles";

const StudentHomeScreen = () => {
  const [code, setCode] = useState("");

  const { joinClassroom, getClassrooms } = useClassroomUseCases();

  const handleJoinClassroom = async () => {
    const joinClassroomResult = await joinClassroom.execute(code);

    alert(joinClassroomResult.message);
  };

  useEffect(() => {
    const getClassroomsData = async () => {
      const userClassrooms = await getClassrooms.execute();

      console.log({ userClassrooms });
    };

    getClassroomsData();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Heading>Student Home Screen</Heading>
      <Button
        title="To Classroom"
        onPress={() => router.push("/student/classroom/classroom-id")}
      />
      <Input
        label="Code"
        placeholder="Code"
        value={code}
        onChangeText={setCode}
      />
      <Button title="Join Classroom" onPress={handleJoinClassroom} />
    </View>
  );
};

export default StudentHomeScreen;
