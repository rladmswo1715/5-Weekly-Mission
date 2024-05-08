import styled from "styled-components";

export const ShareContent = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & img {
    width: 42px;
    height: 42px;
  }
  & span {
    font-size: 13px;
    line-height: 15px;
  }
`