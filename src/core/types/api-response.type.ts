export default interface ApiResponse {
  status: "success" | "failed";
  token?: string;
  message?: string;
}
