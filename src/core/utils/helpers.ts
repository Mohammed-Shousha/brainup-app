import { ReqMethod } from "@/core/enums/req-method.enum";

type RequestBody = {
  [key: string]: string | number;
};

export const sendRequest = async (
  url: string,
  method: ReqMethod,
  body: RequestBody
) => {
  const result = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return result.json();
};
