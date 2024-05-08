import * as S from "./UserProfile.styled.jsx";
import { IUserData } from "../../../model/User.js";

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
      <img src={profileImageSource} alt="유저 프로필" />
      <span>{email}</span>
    </S.UserProfileWrap>
  );
};

export default userProfile;
