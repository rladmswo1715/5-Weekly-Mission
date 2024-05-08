import { BASE_URL } from "../constants/url.js";

export const getSharedInfo = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/sample/folder`);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) alert(`${error.message}에러 발생!`);
    return false;
  }
};
