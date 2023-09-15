import { View, StyleSheet, Dimensions } from "react-native";
import Pdf from "react-native-pdf";
import { useLocalSearchParams } from "expo-router";

const StudentPdfScreen = () => {
  const { pdf } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={{ uri: `${pdf}` }}
        style={styles.pdf}
        onLoadComplete={(numberOfPages) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onError={(error) => {
          console.error(error);
        }}
      />
    </View>
  );
};

export default StudentPdfScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
