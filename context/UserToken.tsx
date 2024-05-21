import { useState, useEffect, createContext } from "react";
import { getSignInProfile } from "@/api/user";

interface IUserInfo {
  token: string;
  id: number;
  name: string;
  image_source: string;
  email: string;
}

export const UserTokenContext = createContext<IUserInfo | null>(null);

function UserToken({ children }: any) {
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);

  const handleLoginUserInfo = async (token: string) => {
    const result = await getSignInProfile(token);
    const userInfo = result.data[0];
    console.log("userInfo::", userInfo);
    setUserInfo((prev) => ({
      ...prev,
      token: token,
      id: userInfo.id,
      name: userInfo.name,
      image_source: userInfo.image_source,
      email: userInfo.email,
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem("userToken");

    if (token) handleLoginUserInfo(token);
  }, []);

  return (
    <UserTokenContext.Provider value={userInfo}>
      {children}
    </UserTokenContext.Provider>
  );
}

export default UserToken;
