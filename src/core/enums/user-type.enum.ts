const USER_TYPE = {
  student: "student",
  teacher: "teacher",
};

type UserType = keyof typeof USER_TYPE;

export default UserType;
