import * as S from "./SignInputBox.styled";

const SignInputBox = () => {
  return (
    <>
      <S.BoxWrap>
        <S.InfoInput type="input" />
        <S.ViewPassword type="button" id="view-password"></S.ViewPassword>
      </S.BoxWrap>
      <div className="validation"></div>
    </>
  );
};

export default SignInputBox;
