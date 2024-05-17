import * as S from "./SignSns.styled";
import Image from "next/image";
import googleIcon from "@/public/image/icon/icon_auth-google.png";
import kakaoIcon from "@/public/image/icon/icon-auth-kakao.png";
import Link from "next/link";

const SNS_LIST = [
  {
    id: "google",
    link: "https://www.google.com/",
    img: googleIcon,
    imgAlt: "구글 로그인",
  },
  {
    id: "kakao",
    link: "https://www.kakaocorp.com/page/",
    img: kakaoIcon,
    imgAlt: "카카오톡 로그인",
  },
];

const SignSns = () => {
  return (
    <S.SnsList>
      {SNS_LIST.map((item) => {
        return (
          <li key={item.id}>
            <Link href={item.link}>
              <Image src={item.img} alt={item.imgAlt} />
            </Link>
          </li>
        );
      })}
    </S.SnsList>
  );
};

export default SignSns;
