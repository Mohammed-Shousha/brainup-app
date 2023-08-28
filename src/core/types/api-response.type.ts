type ApiResponse = {
  status: "success" | "error";
  token?: string;
  message?: string;
};

export default ApiResponse;
