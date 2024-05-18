import * as S from "./SignInputBox.styled";
import validationMsg from "@/constants/validationMsg";
import { emailValidation } from "@/utills/validation";
import { useState } from "react";
import { SignInputProps } from "@/types/Sign";

interface IInputType {
  [key: string]: {
    textType: string;
    placeholder: string;
    inputRegex?: RegExp;
  };
}

let InputOption: IInputType = {
  email: {
    textType: "text",
    placeholder: "이메일을 입력해 주세요.",
    inputRegex: emailValidation,
  },
  password: {
    textType: "password",
    placeholder: "비밀번호를 입력해 주세요.",
    // inputRegex: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
  },
};

const SignInputBox = ({ type, register, errors }: SignInputProps) => {
  const [isPwdEyeOn, setPwdEyeOn] = useState(false);
  const [inputTextType, setInputTextType] = useState(
    InputOption[type].textType
  );
  const inputType = InputOption[type];

  let checkRegister;

  switch (type) {
    case "email":
      checkRegister = register("email", {
        required: { value: true, message: validationMsg.checkInputEmail },
        ...(inputType.inputRegex && {
          pattern: {
            value: inputType.inputRegex,
            message: validationMsg.checkValidationEmail,
          },
        }),
      });
      break;

    case "password":
      checkRegister = register("password", {
        required: { value: true, message: validationMsg.checkInputPassword },
      });
      break;
  }

  const handlePasswordToggle = () => {
    setPwdEyeOn(!isPwdEyeOn);
    setInputTextType(inputTextType === "password" ? "text" : "password");
  };

  return (
    <>
      <S.BoxWrap>
        <S.InfoInput
          type={inputTextType}
          placeholder={inputType.placeholder}
          errorBox={errors[type] ? true : false}
          {...checkRegister}
        />
        {type === "password" && (
          <S.ViewPassword
            type="button"
            onClick={handlePasswordToggle}
            isEyeOpen={isPwdEyeOn}
          ></S.ViewPassword>
        )}
      </S.BoxWrap>
      {errors[type] && (
        <S.validation>{errors[type]?.message?.toString()}</S.validation>
      )}
    </>
  );
};

export default SignInputBox;
