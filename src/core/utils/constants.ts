const API_URL = "https://brainup-api.mazenamir.com/api";

// Auth
const AUTH_URL = `${API_URL}/auth`;

export const LOGIN_URL = `${AUTH_URL}/login`;
export const REGISTER_URL = `${AUTH_URL}/register`;

export const SEND_CONFIRM_EMAIL_URL = `${AUTH_URL}/confirm-email`;
export const VERIFY_CONFIRM_EMAIL_URL = `${SEND_CONFIRM_EMAIL_URL}/verify-code`;

export const SEND_RESET_PASSWORD_URL = `${AUTH_URL}/forgot-password`;
export const RESET_PASSWORD_URL = `${AUTH_URL}/reset-password`;
export const VERIFY_RESET_PASSWORD_URL = `${RESET_PASSWORD_URL}/verify-code`;

// Classrooms
export const CLASSROOMS_URL = `${API_URL}/classrooms`;

// teacher
export const TEACHER_CLASSROOMS_URL = `${CLASSROOMS_URL}/teacher`;

export const TEACHER_CREATE_CLASSROOM_URL = `${TEACHER_CLASSROOMS_URL}/create`;

export const TEACHER_GET_CLASSROOMS_URL = `${TEACHER_CLASSROOMS_URL}/get`;
export const TEACHER_GET_CLASSROOM_URL = (id: string) =>
  `${TEACHER_GET_CLASSROOMS_URL}/${id}`;

export const TEACHER_CLASSROOM_APPROVE_URL = `${TEACHER_CLASSROOMS_URL}/approve`;
export const TEACHER_CLASSROOM_REJECT_URL = `${TEACHER_CLASSROOMS_URL}/reject`;

//student
export const STUDENT_CLASSROOMS_URL = `${CLASSROOMS_URL}/student`;

export const STUDENT_GET_CLASSROOMS_URL = `${STUDENT_CLASSROOMS_URL}/get`;

export const STUDENT_JOIN_CLASSROOM_URL = `${STUDENT_CLASSROOMS_URL}/join`;
