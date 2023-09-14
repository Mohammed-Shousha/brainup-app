import { useEffect, useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import Classroom from "@/domain/entities/classroom.entity";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";

import globalStyles from "@/presentation/styles/global.styles";
import Input from "@/presentation/components/input.component";
import { ScrollView } from "react-native-gesture-handler";

const TeacherHomeScreen = () => {
  const { getTeacherClassrooms, createClassroom } = useClassroomUseCases();

  const [classroomName, setClassroomName] = useState<string>("");
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);

  const handleCreateClassroom = async () => {
    const classroomResult = await createClassroom.execute(classroomName);
    alert(`Classroom created with code ${classroomResult.code}`);
  };

  useEffect(() => {
    const getClassrooms = async () => {
      try {
        const userClassrooms = await getTeacherClassrooms.execute();
        setClassrooms(userClassrooms);
      } catch (error) {
        alert(error);
      }
    };

    getClassrooms();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Heading>Teacher Home Screen</Heading>

      <ScrollView>
        {classrooms.map((classroom) => (
          <Button
            key={classroom.id}
            title={`${classroom.id}: ${classroom.code}`}
            onPress={() => router.push(`/teacher/classroom/${classroom.id}`)}
          />
        ))}
      </ScrollView>

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
