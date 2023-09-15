import { View, StyleSheet } from "react-native";
import { router } from "expo-router";

import Button from "@/presentation/components/button.component";
import StyledText from "@/presentation/components/text.component";

import VideoIcon from "@/presentation/components/icons/video.icon";
import PdfIcon from "@/presentation/components/icons/pdf.icon";

import colors from "@/presentation/styles/colors.styles";

interface LessonTileProps {
  lessonName: string;
  pdf?: string;
  video?: string;
}

const LessonTile: React.FC<LessonTileProps> = ({ lessonName, pdf, video }) => {
  const handlePdfButtonPress = () => {
    router.push(`/student/lesson/pdf/${pdf}`);
  };

  const handleVideoButtonPress = () => {
    router.push(`/student/lesson/video/${video}`);
  };

  return (
    <>
      <View style={styles.container}>
        <StyledText>{lessonName}</StyledText>
        <View style={styles.buttonsContainer}>
          <Button
            title="Video"
            icon={<VideoIcon />}
            style={{ paddingHorizontal: 20 }}
            onPress={handleVideoButtonPress}
          />
          <Button
            title="PDF"
            icon={<PdfIcon />}
            inverted
            style={{ paddingHorizontal: 20 }}
            onPress={handlePdfButtonPress}
          />
        </View>
      </View>
    </>
  );
};

export default LessonTile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: colors.wheat,
    borderBottomWidth: 3,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
