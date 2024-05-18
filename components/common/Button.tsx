import * as S from "./Button.styled";
import { ButtonProps } from "@/types/Button";

const Button = ({
  children,
  btnType = "button",
  type,
  handleButtonClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <S.Button
      type={btnType}
      usetype={type}
      onClick={handleButtonClick}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
};

export default Button;
