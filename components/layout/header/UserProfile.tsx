import * as S from "@/components/layout/header/UserProfile.styled";
import Image from "next/image";
import { IUserData } from "@/types/User";

interface IUser {
  user: IUserData | null;
}

const userProfile = ({ user }: IUser) => {
  if (!user) {
    return (
      <S.LoginBtn href="/pages/auth/signin.html" className="btn">
        로그인
      </S.LoginBtn>
    );
  }
  const { email, profileImageSource } = user;

  return (
    <S.UserProfileWrap>
      <Image
        src={profileImageSource}
        width={50}
        height={50}
        alt="유저 프로필"
      />
      <span>{email}</span>
    </S.UserProfileWrap>
  );
};

export default userProfile;
