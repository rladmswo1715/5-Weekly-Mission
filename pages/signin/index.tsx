import * as S from "@/styles/pages/Sign.styled";
import Image from "next/image";
import signLogo from "@/public/image/icon/sign_logo.svg";
import Link from "next/link";
import SignInputBox from "@/components/sign/SignInputBox";
import Button from "@/components/common/Button";
import SignSns from "@/components/sign/SignSns";

export const getStaticProps = async () => {
  return {
    props: {
      layoutType: "removeLayout",
    },
  };
};

const Signin = () => {
  return (
    <S.MainWrap>
      <S.MainContent>
        <S.WrapHeadBox>
          <h1>
            <Link href="/">
              <Image src={signLogo} alt="로고" />
            </Link>
          </h1>
          <S.SignBox>
            <span>회원이 아니신가요?</span>
            <Link href="./signup">회원 가입하기</Link>
          </S.SignBox>
        </S.WrapHeadBox>

        <form id="frm-linkbrary-login" action="/pages/mylink/folder.html">
          <S.EmailBox>
            <S.LoginBoxSpan>이메일</S.LoginBoxSpan>
            <SignInputBox />
          </S.EmailBox>

          <S.PassWrodBox>
            <S.LoginBoxSpan>비밀번호</S.LoginBoxSpan>
            <SignInputBox />
          </S.PassWrodBox>

          <Button type="sign">로그인</Button>
        </form>

        <S.SnsBox>
          <span>소셜로그인</span>
          <SignSns />
        </S.SnsBox>
      </S.MainContent>
    </S.MainWrap>
  );
};

export default Signin;
