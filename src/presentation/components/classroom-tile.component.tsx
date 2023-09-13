import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

import AddIcon from "@/presentation/components/icons/add.icon";

import colors from "@/presentation/styles/colors.styles";
import fonts from "@/presentation/styles/fonts.styles";

interface TileProps {
  title?: string;
  screenRoute: string;
  showAddIcon?: boolean;
  index?: number;
}

const TILE_COLORS = [
  colors.lightSecondary,
  colors.extraLightPrimary,
  colors.lightPrimary,
  colors.secondary,
];

const Tile: React.FC<TileProps> = ({
  title,
  screenRoute,
  showAddIcon,
  index,
}) => {
  const colorIndex = index ? index % TILE_COLORS.length : 0;
  const backgroundColor = TILE_COLORS[colorIndex];

  const handlePress = () => {
    router.push(screenRoute);
  };

  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: showAddIcon ? colors.secondary : backgroundColor },
      ]}
      onPress={handlePress}
    >
      {showAddIcon ? (
        <AddIcon fill={colors.primary} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </Pressable>
  );
};

export default Tile;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    width: 160,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.nunitoBold,
    color: colors.darkGray,
  },
});
