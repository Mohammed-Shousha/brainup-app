import AsyncStorage from "@react-native-async-storage/async-storage";

import ReqMethod from "@/core/enums/req-method.enum";

import ReqBody from "@/core/types/req-body.type";

export const sendRequest = async (
  url: string,
  method: ReqMethod,
  body?: ReqBody
): Promise<any> => {
  const result = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return result.json();
};

export const sendAuthRequest = async (
  url: string,
  method: ReqMethod,
  body?: ReqBody
): Promise<any> => {
  const token = await AsyncStorage.getItem("token");

  const result = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  });

  return result.json();
};
