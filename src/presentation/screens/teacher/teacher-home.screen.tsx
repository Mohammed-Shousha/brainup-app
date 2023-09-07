import { useEffect, useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import Classroom from "@/domain/entities/classroom.entity";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";

import globalStyles from "@/presentation/styles/global.styles";
import Input from "@/presentation/components/input.component";

const TeacherHomeScreen = () => {
  const { getClassrooms, createClassroom } = useClassroomUseCases();

  const [classroomName, setClassroomName] = useState<string>("");
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);

  const handleCreateClassroom = async () => {
    const classroomResult = await createClassroom.execute(classroomName);
    alert(`Classroom created with code ${classroomResult.code}`);
  };

  useEffect(() => {
    const getClassroomsData = async () => {
      try {
        const userClassrooms = await getClassrooms.execute();
        setClassrooms(userClassrooms);
      } catch (error) {
        console.log(error);
      }
    };

    getClassroomsData();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Heading>Teacher Home Screen</Heading>

      {classrooms.map((classroom) => (
        <Button
          key={classroom.id}
          title={classroom.code}
          onPress={() => router.push(`/teacher/classroom/${classroom.id}`)}
        />
      ))}

      <Input
        label="Classroom Name"
        placeholder="Classroom Name"
        value={classroomName}
        onChangeText={setClassroomName}
      />

      <Button title="Create Classroom" onPress={handleCreateClassroom} />
    </View>
  );
};

export default TeacherHomeScreen;
