const USER_TYPE = {
  student: "student",
  teacher: "teacher",
};

export type UserType = keyof typeof USER_TYPE;
