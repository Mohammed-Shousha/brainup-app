import { View, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useLocalSearchParams } from "expo-router";

import globalStyles from "@/presentation/styles/global.styles";

const StudentVideoScreen = () => {
  const { video } = useLocalSearchParams();

  return (
    <View style={globalStyles.container}>
      <Video
        style={styles.video}
        source={{ uri: `${video}` }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
        videoStyle={{ width: 320, height: 200 }}
      />
    </View>
  );
};

export default StudentVideoScreen;

const styles = StyleSheet.create({
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
});
