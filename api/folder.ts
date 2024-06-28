import { BASE_URL } from "@/constants/url";

export const getFolderNavInfo = async (userId: number) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}/folders`);
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

export const getFolderListInfo = async (
  navId: string | string[] | undefined,
  userToken: string | undefined
) => {
  let query = "/links";
  if (navId) {
    query = `/folders/${navId}${query}`;
  }

  try {
    const response = await fetch(BASE_URL + query, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("로그인 인증 ");
      }
      throw new Error(`${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) alert(`${error.message}에러 발생!`);
    return false;
  }
};

export const addFolder = async (folderName: string, userToken: string) => {
  const response = await fetch(`${BASE_URL}/folders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${userToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: folderName,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to add Folder!!");
  }
};

export const changeFolderName = async (
  pageNavId: string | string[],
  folderName: string,
  userToken: string
) => {
  const response = await fetch(`${BASE_URL}/folders/${pageNavId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${userToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: folderName,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to add Folder!!");
  }
};

export const deleteFolder = async (
  pageNavId: string | string[],
  userToken: string
) => {
  const response = await fetch(`${BASE_URL}/folders/${pageNavId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to add Folder!!");
  }
};

export const deleteLink = async (linkId: number, userToken: string) => {
  const response = await fetch(`${BASE_URL}/links/${linkId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to add Folder!!");
  }
};
