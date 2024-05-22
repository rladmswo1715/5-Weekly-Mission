import * as S from "@/components/layout/header/Header.styled";
import Image from "next/image";
import Link from "next/link";
import main_logo from "@/public/image/icon/main_logo.svg";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { getSignInProfile } from "@/api/user";
import UserProfile from "@/components/layout/header/UserProfile";
import { IUserData } from "@/types/User";
import { UserInfoContext } from "@/context/User";

const Header = () => {
  const [user, setUser] = useState<IUserData | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useRouter();
  const userInfo = useContext(UserInfoContext);

  // const handleLoadUserProfile = async (userToken: string) => {
  //   const userProfile = await getSignInProfile(userToken);

  //   if (userProfile !== null) {
  //     setUser(userProfile.data[0]);
  //   }
  // };

  const handleLoadUserProfile22 = (userInfo: any) => {
    setUser({
      id: userInfo.id,
      name: userInfo.name,
      email: userInfo.email,
      image_source: userInfo.image_source,
    });
  };

  useEffect(() => {
    // const token = localStorage.getItem("userToken");
    // if (token) handleLoadUserProfile(token);
    console.log("zzzz22222222222222222", userInfo);
    if (userInfo) {
      console.log("userInfo가 있음", userInfo);
      handleLoadUserProfile22(userInfo);
    }
  }, [userInfo]);

  useEffect(() => {
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
          <Link href="/shared">
            <Image src={main_logo} alt="로고" />
          </Link>
        </h1>

        <UserProfile user={user} />
      </S.HeaderWrap>
    </S.Header>
  );
};

export default Header;
