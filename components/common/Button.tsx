import * as S from "./Button.styled";
import { ButtonProps } from "../../model/Button";

const Button = ({ children, type, handleButtonClick }: ButtonProps) => {
  return (
    <S.Button type="button" usetype={type} onClick={handleButtonClick}>
      {children}
    </S.Button>
  );
};

export default Button;
