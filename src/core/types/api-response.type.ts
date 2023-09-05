export default interface ApiResponse {
  status: "success" | "failed";
  message?: string;
}
