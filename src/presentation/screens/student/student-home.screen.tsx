import { useEffect, useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import Classroom from "@/domain/entities/classroom.entity";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";

import Heading from "@/presentation/components/heading.component";
import Button from "@/presentation/components/button.component";
import Input from "@/presentation/components/input.component";

import globalStyles from "@/presentation/styles/global.styles";

const StudentHomeScreen = () => {
  const [code, setCode] = useState("");
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);

  const { joinClassroom, getStudentClassrooms } = useClassroomUseCases();

  const handleJoinClassroom = async () => {
    const joinClassroomResult = await joinClassroom.execute(code);

    alert(joinClassroomResult.message);
  };

  useEffect(() => {
    const getClassrooms = async () => {
      try {
        const userClassrooms = await getStudentClassrooms.execute();
        setClassrooms(userClassrooms);
      } catch (error) {
        alert(error);
      }
    };

    getClassrooms();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Heading>Student Home Screen</Heading>
      {classrooms.map((classroom) => (
        <Button
          key={classroom.id}
          title={`${classroom.name}\nTeacher: ${classroom.teacher}`}
          onPress={() => router.push(`/student/classroom/${classroom.id}`)}
        />
      ))}

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
