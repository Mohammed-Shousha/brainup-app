import { View } from "react-native";

import Heading from "@/presentation/components/heading.component";

import globalStyles from "@/presentation/styles/global.styles";

const StudentSettingsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Heading>Student Settings Screen</Heading>
    </View>
  );
};

export default StudentSettingsScreen;
