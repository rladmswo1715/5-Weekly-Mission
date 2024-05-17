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
const Signup = () => {
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
            <span>이미 회원이신가요?</span>
            <Link href="./signin">로그인 하기</Link>
          </S.SignBox>
        </S.WrapHeadBox>

        <form id="frm-linkbrary-signup" action="/pages/mylink/folder.html">
          <S.EmailBox>
            <span>이메일</span>
            <SignInputBox />
          </S.EmailBox>

          <S.PassWrodBox>
            <span>비밀번호</span>
            <SignInputBox />
          </S.PassWrodBox>

          <S.PassWrodBox>
            <span>비밀번호 확인</span>
            <SignInputBox />
          </S.PassWrodBox>

          <Button type="sign">회원가입</Button>
        </form>

        <S.SnsBox>
          <span>다른 방식으로 가입하기</span>
          <SignSns />
        </S.SnsBox>
      </S.MainContent>
    </S.MainWrap>
  );
};

export default Signup;
