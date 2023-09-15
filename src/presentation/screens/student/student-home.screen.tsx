import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import Classroom from "@/domain/entities/classroom.entity";

import { useClassroomUseCases } from "@/presentation/context/classroom.context";

import Header from "@/presentation/components/header.component";
import Heading from "@/presentation/components/heading.component";
import ClassroomTile from "@/presentation/components/classroom-tile.component";

import globalStyles from "@/presentation/styles/global.styles";

const StudentHomeScreen = () => {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);

  const { getStudentClassrooms } = useClassroomUseCases();

  useEffect(() => {
    const getClassrooms = async () => {
      try {
        const userClassrooms = await getStudentClassrooms.execute();
        setClassrooms(userClassrooms);
      } catch (error) {
        alert(error);
      }
    };

    getClassrooms();
  }, []);

  return (
    <View style={[globalStyles.container, { paddingHorizontal: 20 }]}>
      <Header />

      <Heading bold style={{ fontSize: 24 }}>
        Classrooms
      </Heading>

      <View style={[styles.gridView]}>
        <ClassroomTile screenRoute="/student/join-classroom" showAddIcon />

        {classrooms.map((classroom, i) => (
          <ClassroomTile
            key={classroom.id}
            index={i}
            title={classroom.name}
            screenRoute={`/student/classroom/${classroom.id}`}
          />
        ))}
      </View>
    </View>
  );
};

export default StudentHomeScreen;

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    gap: 24,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
