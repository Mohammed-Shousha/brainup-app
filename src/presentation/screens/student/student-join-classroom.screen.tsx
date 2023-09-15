import { useState } from "react";
import { ToastAndroid, View } from "react-native";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";

import Heading from "@/presentation/components/heading.component";
import StyledText from "@/presentation/components/text.component";
import Button from "@/presentation/components/button.component";
import Input from "@/presentation/components/input.component";

import globalStyles from "@/presentation/styles/global.styles";

const StudentJoinClassroomScreen = () => {
  const { joinClassroom } = useClassroomUseCases();

  const handleJoinClassroom = async () => {
    try {
      const joinClassroomResult = await joinClassroom.execute(code);

      showToast(joinClassroomResult.message ?? "Request sent Successfully");
      console.log({ joinClassroomResult });
    } catch (error) {
      console.log({ error });
      showToast("An error occured");
    }
  };

  const [code, setCode] = useState("");

  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.LONG);
  };

  return (
    <View style={globalStyles.container}>
      <Heading bold>Join Classroom</Heading>
      <StyledText paragraph>Enter the classroom code</StyledText>

      <Input
        label="Code"
        placeholder="Enter the 6-digit code"
        value={code}
        onChangeText={setCode}
      />
      <Button
        title="Join"
        onPress={handleJoinClassroom}
        style={{ marginTop: 30 }}
      />
    </View>
  );
};

export default StudentJoinClassroomScreen;
