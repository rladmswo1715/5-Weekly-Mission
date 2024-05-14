import styled from "styled-components";

export const SearchWrapBox = styled.div`
  background-color: #f5f5f5;
  padding: 15px 16px;
  display: flex;
  align-items: center;
  border-radius: 10px;

  & img {
    padding-right: 10px;
  }

  & input {
    background-color: #f5f5f5;
    border-width: 0;
    outline: none;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  & button {
    width: 24px;
    height: 24px;
  }
`;
