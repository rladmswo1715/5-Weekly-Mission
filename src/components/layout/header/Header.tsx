import * as S from "./Header.styled";
import main_logo from "../../../assets/icon/main_logo.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSignInProfile } from "../../../api/header.js";
import UserProfile from "./UserProfile";
import { IUserData } from "../../../model/User.ts";

const Header = () => {
  const [user, setUser] = useState<IUserData | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const handleLoadUserProfile = async () => {
    const userProfile = await getSignInProfile();

    if (userProfile !== null) {
      setUser(userProfile);
    }
  };

  useEffect(() => {
    handleLoadUserProfile();

    const handleHeaderScroll = () => {
      setIsScrolled(window.scrollY !== 0);
    };

    const timer = setInterval(() => {
      window.addEventListener("scroll", handleHeaderScroll);
    }, 100);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleHeaderScroll);
    };
  }, []);

  return (
    <S.Header
      className={
        isScrolled
          ? location.pathname === "/folder"
            ? "add_blur static_header"
            : "add_blur"
          : location.pathname === "/folder"
          ? "static_header"
          : ""
      }
    >
      <S.HeaderWrap>
        <h1>
          <a href="/shared">
            <img src={main_logo} alt="로고" />
          </a>
        </h1>

        <UserProfile user={user} />
      </S.HeaderWrap>
    </S.Header>
  );
};

export default Header;
