import * as S from "@/styles/pages/Sign.styled";
import Image from "next/image";
import signLogo from "@/public/image/icon/sign_logo.svg";
import Link from "next/link";
import SignInputBox from "@/components/sign/SignInputBox";
import Button from "@/components/common/Button";
import SignSns from "@/components/sign/SignSns";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { postSign } from "@/api/user";
import { useRouter } from "next/router";
import { FormValues } from "@/types/Sign";

export const getStaticProps = async () => {
  return {
    props: {
      layoutType: "removeLayout",
    },
  };
};
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
    getValues,
  } = useForm<FormValues>({ mode: "onBlur" });
  const router = useRouter();
  const [auth, setAuth] = useState<string | null>(null);

  useEffect(() => {
    try {
      const token = localStorage.getItem("userToken");
      setAuth(token);
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  }, []);
  if (auth) router.replace("/folder");

  const handleSiginUp: SubmitHandler<FormValues> = async (data) => {
    const dataSet = {
      email: getValues("email"),
      password: getValues("signUpPassword"),
    };
    const result = await postSign("sign-up", dataSet);
    if (result.error) {
      alert("회원가입 실패");
      return;
    }

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
            <span>이미 회원이신가요?</span>
            <Link href="./signin">로그인 하기</Link>
          </S.SignBox>
        </S.WrapHeadBox>

        <form onSubmit={handleSubmit(handleSiginUp)}>
          <S.EmailBox>
            <span>이메일</span>
            <SignInputBox
              pageType="signUp"
              type="email"
              register={register}
              errors={errors}
            />
          </S.EmailBox>

          <S.PassWrodBox>
            <span>비밀번호</span>
            <SignInputBox
              pageType="signUp"
              type="signUpPassword"
              register={register}
              errors={errors}
            />
          </S.PassWrodBox>

          <S.PassWrodBox>
            <span>비밀번호 확인</span>
            <SignInputBox
              pageType="signUp"
              type="signUpPasswordCheck"
              register={register}
              errors={errors}
              watch={watch}
            />
          </S.PassWrodBox>

          <Button btnType="submit" type="sign" disabled={isSubmitting}>
            회원가입
          </Button>
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
