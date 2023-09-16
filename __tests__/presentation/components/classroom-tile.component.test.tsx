import React from "react";
import { render } from "@testing-library/react-native";

import ClassroomTile from "@/presentation/components/classroom-tile.component";

import colors from "@/presentation//styles/colors.styles";

describe("Tile component", () => {
  it("renders title when showAddIcon is false", () => {
    const { getByTestId } = render(
      <ClassroomTile title="Math" screenRoute="math" />
    );
    expect(getByTestId("tile")).toBeDefined();
    expect(getByTestId("title")).toBeDefined();
    expect(getByTestId("title").props.children).toEqual("Math");
  });

  it("renders AddIcon when showAddIcon is true", () => {
    const { getByTestId } = render(
      <ClassroomTile title="Math" screenRoute="math" showAddIcon />
    );
    const addIcon = getByTestId("add-icon");
    expect(addIcon).toBeDefined();
  });

  it("should have default background when showAddIcon is true", () => {
    const { getByTestId } = render(
      <ClassroomTile title="Math" screenRoute="math" showAddIcon />
    );
    expect(getByTestId("tile").props.style).toContainEqual({
      backgroundColor: colors.secondary,
    });
  });

  it("should have default background when showAddIcon is false", () => {
    const { getByTestId } = render(
      <ClassroomTile title="Math" screenRoute="math" />
    );
    expect(getByTestId("tile").props.style).toContainEqual({
      backgroundColor: colors.lightSecondary,
    });
  });

  it("should have a different background color based on the index ", () => {
    const { getByTestId } = render(
      <ClassroomTile title="Math" screenRoute="math" index={2} />
    );
    expect(getByTestId("tile").props.style).toContainEqual({
      backgroundColor: colors.lightPrimary,
    });
  });
});
