import { useState } from "react";
import { View } from "react-native";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";

import Button from "@/presentation/components/button.component";
import Input from "@/presentation/components/input.component";

import globalStyles from "@/presentation/styles/global.styles";

const StudentJoinClassroomScreen = () => {
  const { joinClassroom } = useClassroomUseCases();

  const handleJoinClassroom = async () => {
    try {
      const joinClassroomResult = await joinClassroom.execute(code);

      alert(joinClassroomResult.message);
    } catch (error) {
      alert(error);
    }
  };

  const [code, setCode] = useState("");

  return (
    <View style={globalStyles.container}>
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

export default StudentJoinClassroomScreen;
