import IClassroomRepository from "@/domain/repositories/classroom.repository";

import Classroom from "@/domain/entities/classroom.entity";

import ApiResponse from "@/core/types/api-response.type";

const classroomMock: Classroom = {
  id: "1",
  name: "Test Classroom",
  code: "123456",
};

const classroomsMock: Classroom[] = [classroomMock];

const apiResponseMock: ApiResponse = {
  status: "success",
  message: "Request successful",
};

describe("IClassroomRepository", () => {
  let classroomRepository: IClassroomRepository;

  beforeAll(() => {
    classroomRepository = {
      create: jest.fn().mockResolvedValue(classroomMock),
      delete: jest.fn(),
      getTeacherClassroom: jest.fn().mockResolvedValue(classroomMock),
      getTeacherClassrooms: jest.fn().mockResolvedValue(classroomsMock),
      approveStudent: jest.fn().mockResolvedValue(apiResponseMock),
      rejectStudent: jest.fn().mockResolvedValue(apiResponseMock),
      join: jest.fn().mockResolvedValue(apiResponseMock),
      getStudentClassrooms: jest.fn().mockResolvedValue(classroomsMock),
    };
  });

  describe("create", () => {
    it("should create a new classroom with the specified name", async () => {
      const classroomName = "Test Classroom";

      const result = await classroomRepository.create(classroomName);

      expect(result).toEqual(classroomMock);
    });
  });

  describe("delete", () => {
    it("should delete a classroom with the specified ID", async () => {
      const classroomId = "1";

      await classroomRepository.delete(classroomId);

      expect(classroomRepository.delete).toHaveBeenCalledWith(classroomId);
    });
  });

  describe("getTeacherClassroom", () => {
    it("should retrieve a classroom with the specified ID", async () => {
      const classroomId = "1";

      const result = await classroomRepository.getTeacherClassroom(classroomId);

      expect(result).toEqual(classroomMock);
    });
  });

  describe("getTeacherClassrooms", () => {
    it("should retrieve a list of classrooms", async () => {
      const result = await classroomRepository.getTeacherClassrooms();

      expect(result).toEqual(classroomsMock);
    });
  });

  describe("approveStudent", () => {
    it("should approve a student request with the specified ID", async () => {
      const requestId = "1";

      const result = await classroomRepository.approveStudent(requestId);

      expect(result).toEqual(apiResponseMock);
    });
  });

  describe("rejectStudent", () => {
    it("should reject a student request with the specified ID", async () => {
      const requestId = "1";

      const result = await classroomRepository.rejectStudent(requestId);

      expect(result).toEqual(apiResponseMock);
    });
  });

  describe("join", () => {
    it("should join a classroom with the specified code", async () => {
      const code = "123456";

      const result = await classroomRepository.join(code);

      expect(result).toEqual(apiResponseMock);
    });
  });

  describe("getStudentClassrooms", () => {
    it("should retrieve a list of classrooms", async () => {
      const result = await classroomRepository.getStudentClassrooms();

      expect(result).toEqual(classroomsMock);
    });
  });
});
