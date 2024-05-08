import { BASE_URL } from "../constants/url.js";

export const getFolderNavInfo = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/users/1/folders`);
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

export const getFolderListInfo = async (id: number) => {
  let query = "/api/users/1/links";
  if (id) {
    query = `${query}?folderId=${id}`;
  }

  try {
    const response = await fetch(BASE_URL + query);
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
