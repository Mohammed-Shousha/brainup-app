import ClassroomRepository from "@/data/repositories/classroom.repository.impl";

import ApiResponse from "@/core/types/api-response.type";

import { sendAuthRequest } from "@/core/utils/helpers";
import {
  TEACHER_CREATE_CLASSROOM_URL,
  TEACHER_GET_CLASSROOMS_URL,
  STUDENT_JOIN_CLASSROOM_URL,
  TEACHER_GET_CLASSROOM_URL,
  TEACHER_CLASSROOM_APPROVE_URL,
  TEACHER_CLASSROOM_REJECT_URL,
} from "@/core/utils/constants";

jest.mock("@/core/utils/helpers", () => ({
  sendAuthRequest: jest.fn(),
}));

describe("ClassroomRepository", () => {
  let classroomRepository: ClassroomRepository;

  beforeAll(() => {
    classroomRepository = new ClassroomRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("create", () => {
    it("should create a new classroom", async () => {
      const classroomName = "Test Classroom";

      const expectedResponse = {
        status: "success",
        classroom: {
          id: "123",
          code: "ABC123",
        },
      };

      (sendAuthRequest as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const createdClassroom = await classroomRepository.create(classroomName);

      expect(sendAuthRequest).toHaveBeenCalledWith(
        TEACHER_CREATE_CLASSROOM_URL,
        "POST",
        {
          name: classroomName,
        }
      );

      expect(createdClassroom).toEqual(expectedResponse.classroom);
    });
  });

  describe("getClassroom", () => {
    it("should get a classroom by id", async () => {
      const classroomId = "123";

      const expectedResponse = {
        status: "success",
        classroom: {
          id: "123",
          name: "Test Classroom",
          code: "ABC123",
        },
      };

      (sendAuthRequest as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const classroom = await classroomRepository.getClassroom(classroomId);

      expect(sendAuthRequest).toHaveBeenCalledWith(
        TEACHER_GET_CLASSROOM_URL(classroomId),
        "GET"
      );

      expect(classroom.id).toEqual(classroomId);
    });
  });

  describe("getClassrooms", () => {
    it("should get all classrooms", async () => {
      const expectedResponse = {
        status: "success",
        classrooms: [
          {
            id: "123",
            name: "Test Classroom",
            code: "ABC123",
          },
        ],
      };

      (sendAuthRequest as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const classrooms = await classroomRepository.getClassrooms();

      expect(sendAuthRequest).toHaveBeenCalledWith(
        TEACHER_GET_CLASSROOMS_URL,
        "GET"
      );

      expect(classrooms).toBeInstanceOf(Array);
      expect(classrooms).toHaveLength(1);
    });
  });

  describe("approveStudent", () => {
    it("should approve a student request", async () => {
      const requestId = "123";

      const expectedResponse: ApiResponse = {
        status: "success",
        message: "Student request approved successfully",
      };

      (sendAuthRequest as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const response = await classroomRepository.approveStudent(requestId);

      expect(sendAuthRequest).toHaveBeenCalledWith(
        TEACHER_CLASSROOM_APPROVE_URL,
        "POST",
        {
          request_id: requestId,
        }
      );

      expect(response).toEqual(expectedResponse);
    });
  });

  describe("rejectStudent", () => {
    it("should reject a student request", async () => {
      const requestId = "123";

      const expectedResponse: ApiResponse = {
        status: "success",
        message: "Student request rejected successfully",
      };

      (sendAuthRequest as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const response = await classroomRepository.rejectStudent(requestId);

      expect(sendAuthRequest).toHaveBeenCalledWith(
        TEACHER_CLASSROOM_REJECT_URL,
        "POST",
        {
          request_id: requestId,
        }
      );

      expect(response).toEqual(expectedResponse);
    });
  });

  describe("join", () => {
    it("should join a classroom with a code", async () => {
      const code = "123456";

      const expectedResponse: ApiResponse = {
        status: "success",
        message: "Joined classroom successfully",
      };

      (sendAuthRequest as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const response = await classroomRepository.join(code);

      expect(sendAuthRequest).toHaveBeenCalledWith(
        STUDENT_JOIN_CLASSROOM_URL,
        "POST",
        {
          code,
        }
      );

      expect(response).toEqual(expectedResponse);
    });
  });
});
