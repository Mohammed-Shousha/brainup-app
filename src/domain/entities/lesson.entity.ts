interface LessonContent {
  type: "pdf" | "video";
  content: string;
}

export default interface Lesson {
  id: string;
  name: string;
  pdf?: LessonContent;
  video?: LessonContent;
}
