const REQ_METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
} as const;

type ReqMethod = keyof typeof REQ_METHOD;

export default ReqMethod;
