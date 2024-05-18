import styled from "styled-components";
import eyeOff from "@/public/image/icon/eye-off.png";
import eyeOn from "@/public/image/icon/eye-on.png";

interface InfoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorBox?: boolean;
}

interface PwdEyeButtonProps {
  isEyeOpen: boolean;
}

export const BoxWrap = styled.div`
  position: relative;
`;

export const InfoInput = styled.input<InfoInputProps>`
  width: 100%;
  height: 60px;
  border: 1px solid var(--border-gray);
  border-radius: 8px;
  margin: 12px 0 0;
  padding: 0 15px;
  outline: none;

  ${(props) =>
    props.errorBox &&
    `
    border: 1px solid #FF5B56;
  `}

  &:focus {
    border-color: var(--main-color);
  }

  @media (max-width: 464px) {
    width: calc(100% - 30px);
  }
`;

export const ViewPassword = styled.button<PwdEyeButtonProps>`
  position: absolute;
  top: 35px;
  right: 15px;
  width: 16px;
  height: ${(props) => (props.isEyeOpen ? "10.91px" : "13.82px")};
  background: url(${(props) => (props.isEyeOpen ? eyeOn.src : eyeOff.src)});
`;

export const validation = styled.div`
  padding-top: 6px;
  font-size: 14px;
  font-weight: 400;
  color: var(--var-test-red);
  line-height: 16.8px;
`;
