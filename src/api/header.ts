import { BASE_URL } from "../constants/url.js";

export const getSignInProfile = async () => {
  let result = null;

  try {
    const response = await fetch(`${BASE_URL}/api/sample/user`);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    result = await response.json();
  } catch (error) {
    if (error instanceof Error) alert(`${error.message}에러 발생!`);
  }

  return result;
};
