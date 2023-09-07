interface ClassroomRequest {
  id: string;
  name: string;
}

interface Student {
  id: string;
  name: string;
}

export default interface Classroom {
  id: string;
  code: string;
  name?: string;
  students?: Student[];
  requests?: ClassroomRequest[];
  announcments?: string[];
}
