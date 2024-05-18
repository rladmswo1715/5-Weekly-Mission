import * as S from "@/styles/pages/Sign.styled";
import Image from "next/image";
import signLogo from "@/public/image/icon/sign_logo.svg";
import Link from "next/link";
import SignInputBox from "@/components/sign/SignInputBox";
import Button from "@/components/common/Button";
import SignSns from "@/components/sign/SignSns";
import { useForm, SubmitHandler } from "react-hook-form";
import { postSignIn } from "@/api/user";
import { useRouter } from "next/router";
import { FormValues } from "@/types/Sign";

export const getStaticProps = async () => {
  return {
    props: {
      layoutType: "removeLayout",
    },
  };
};

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({ mode: "onBlur" });
  const router = useRouter();

  const handleSiginIn: SubmitHandler<FormValues> = async (data) => {
    const result = await postSignIn(data);
    if (!result) return;

    localStorage.setItem("userToken", result.data.accessToken);
    router.push(`/folder`);
  };

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

        <form onSubmit={handleSubmit(handleSiginIn)}>
          <S.EmailBox>
            <S.LoginBoxSpan>이메일</S.LoginBoxSpan>
            <SignInputBox type="email" register={register} errors={errors} />
          </S.EmailBox>

          <S.PassWrodBox>
            <S.LoginBoxSpan>비밀번호</S.LoginBoxSpan>
            <SignInputBox type="password" register={register} errors={errors} />
          </S.PassWrodBox>

          <Button btnType="submit" type="sign" disabled={isSubmitting}>
            로그인
          </Button>
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
