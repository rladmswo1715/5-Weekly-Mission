import {
  useState,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { getSignInProfile } from "@/api/user";

interface IUserInfo {
  token: string;
  id: number;
  name: string;
  image_source: string;
  email: string;
}

export const UserInfoContext = createContext<IUserInfo | null>(null);
export const UserSetTokenContext = createContext<
  Dispatch<SetStateAction<string | null>>
>(() => {});

function UserToken({ children }: any) {
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);
  const [userToken, setUserToken] = useState<string | null>(null);

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
    if (token) setUserToken(token);
  }, []);

  useEffect(() => {
    if (userToken) handleLoginUserInfo(userToken);
  }, [userToken]);

  return (
    <UserInfoContext.Provider value={userInfo}>
      <UserSetTokenContext.Provider value={setUserToken}>
        {children}
      </UserSetTokenContext.Provider>
    </UserInfoContext.Provider>
  );
}

export default UserToken;
