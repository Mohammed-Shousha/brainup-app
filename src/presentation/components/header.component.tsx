import { View, Text, Image, StyleSheet } from "react-native";

import BillIcon from "@/presentation/components/icons/bill.icon";

interface HeaderProps {
  notificationCount?: number;
  userPhotoUrl?: string;
}

const Header: React.FC<HeaderProps> = ({ notificationCount, userPhotoUrl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.notificationIcon}>
        <Text style={styles.notificationCount}>{notificationCount}</Text>
        <BillIcon />
      </View>
      <View style={styles.userPhoto}>
        <Image
          source={require("assets/images/user.png")}
          style={styles.userImage}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    marginBottom: 12,
  },
  notificationIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationCount: {
    marginRight: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  userImage: {
    width: "100%",
    height: "100%",
  },
});
