import { Modal, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

import Heading from "@/presentation/components/heading.component";
import StyledText from "@/presentation/components/text.component";
import Button from "@/presentation/components/button.component";

import colors from "@/presentation/styles/colors.styles";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  message?: string;
}

const ModalComponent: React.FC<ModalProps> = ({
  visible,
  onClose,
  title,
  message,
}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Image
            source={require("assets/images/modal.png")}
            style={styles.image}
          />
          <Heading>{title}</Heading>
          <StyledText>{message}</StyledText>
          <Button title="Continue" onPress={onClose} style={styles.button} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    backgroundColor: colors.white,
    padding: 20,
    width: "80%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  button: {
    width: "100%",
    marginTop: 15,
  },
});
