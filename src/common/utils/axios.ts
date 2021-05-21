import axios, { Method } from "axios";

export const axiosRequest = async <T>(
  url: string,
  method: Method,
  data?: any
): Promise<T> => {
  const opts = {
    url,
    method,
    data,
    baseURL: "http://localhost:8080/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const result = await axios(opts);
    console.log("axios result: ", result);

    return result.data;
  } catch (error) {
    console.error("There was an error!", error);
    throw new Error(error.message);
  }
};
