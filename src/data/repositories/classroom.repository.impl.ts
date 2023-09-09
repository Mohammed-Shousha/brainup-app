import Classroom from "@/domain/entities/classroom.entity";
import IClassroomRepository from "@/domain/repositories/classroom.repository";

import { sendAuthRequest } from "@/core/utils/helpers";

import {
  TEACHER_CREATE_CLASSROOM_URL,
  TEACHER_GET_CLASSROOMS_URL,
  STUDENT_JOIN_CLASSROOM_URL,
  TEACHER_GET_CLASSROOM_URL,
  TEACHER_CLASSROOM_APPROVE_URL,
  TEACHER_CLASSROOM_REJECT_URL,
  STUDENT_GET_CLASSROOMS_URL,
} from "@/core/utils/constants";
import ApiResponse from "@/core/types/api-response.type";

export default class ClassroomRepository implements IClassroomRepository {
  constructor() {}

  async create(name: string): Promise<Classroom> {
    const createClassroomResponse = await sendAuthRequest(
      TEACHER_CREATE_CLASSROOM_URL,
      "POST",
      {
        name,
      }
    );

    console.log({ createClassroomResponse });

    if (createClassroomResponse.status === "failed")
      throw new Error(createClassroomResponse.message);

    const createdClassroom: Classroom = createClassroomResponse.classroom;

    return createdClassroom;
  }

  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getTeacherClassroom(id: string): Promise<Classroom> {
    const getTeacherClassroomResponse = await sendAuthRequest(
      TEACHER_GET_CLASSROOM_URL(id),
      "GET"
    );

    console.log({ getTeacherClassroomResponse });

    if (getTeacherClassroomResponse.status === "failed")
      throw new Error(getTeacherClassroomResponse.message);

    const classroom: Classroom = getTeacherClassroomResponse.classroom;

    return classroom;
  }

  async getTeacherClassrooms(): Promise<Classroom[]> {
    const getTeacherClassroomsResponse = await sendAuthRequest(
      TEACHER_GET_CLASSROOMS_URL,
      "GET"
    );

    console.log({ getTeacherClassroomsResponse });

    if (getTeacherClassroomsResponse.status === "failed")
      throw new Error(getTeacherClassroomsResponse.message);

    const classrooms: Classroom[] = getTeacherClassroomsResponse.classrooms;

    return classrooms;
  }

  async approveStudent(requestId: string): Promise<ApiResponse> {
    const approveStudentResponse: ApiResponse = await sendAuthRequest(
      TEACHER_CLASSROOM_APPROVE_URL,
      "POST",
      {
        request_id: requestId,
      }
    );

    console.log({ approveStudentResponse });

    if (approveStudentResponse.status === "failed")
      throw new Error(approveStudentResponse.message);

    return approveStudentResponse;
  }

  async rejectStudent(requestId: string): Promise<ApiResponse> {
    const rejectStudentResponse: ApiResponse = await sendAuthRequest(
      TEACHER_CLASSROOM_REJECT_URL,
      "POST",
      {
        request_id: requestId,
      }
    );

    console.log({ rejectStudentResponse });

    if (rejectStudentResponse.status === "failed")
      throw new Error(rejectStudentResponse.message);

    return rejectStudentResponse;
  }

  async join(code: string): Promise<ApiResponse> {
    const joinClassroomResponse: ApiResponse = await sendAuthRequest(
      STUDENT_JOIN_CLASSROOM_URL,
      "POST",
      {
        code,
      }
    );

    if (joinClassroomResponse.status === "failed")
      throw new Error(joinClassroomResponse.message);

    console.log({ joinClassroomResponse });

    return joinClassroomResponse;
  }

  async getStudentClassrooms(): Promise<Classroom[]> {
    const getStudentClassroomsResponse = await sendAuthRequest(
      STUDENT_GET_CLASSROOMS_URL,
      "GET"
    );

    console.log({ getStudentClassroomsResponse });

    if (getStudentClassroomsResponse.status === "failed")
      throw new Error(getStudentClassroomsResponse.message);

    const classrooms: Classroom[] = getStudentClassroomsResponse.classrooms.map(
      (classroom: any) => ({
        ...classroom,
        teacher: classroom.teacher_name,
      })
    );

    return classrooms;
  }
}
