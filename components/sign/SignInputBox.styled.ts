import styled from "styled-components";
import eyeOff from "@/public/image/icon/eye-off.png";

export const BoxWrap = styled.div`
  position: relative;
`;

export const InfoInput = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid var(--border-gray);
  border-radius: 8px;
  margin: 12px 0 0;
  padding: 0 15px;

  :focus {
    outline: none;
    border-color: var(--main-color);
  }

  @media (max-width: 464px) {
    width: calc(100% - 30px);
  }
`;

export const ViewPassword = styled.button`
  position: absolute;
  top: 35px;
  right: 10px;
  background-image: url(${eyeOff.src});
  width: 16px;
  height: 13.82px;
`;
