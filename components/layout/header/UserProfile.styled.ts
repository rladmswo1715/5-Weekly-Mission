import styled from "styled-components";

export const UserProfileWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  & img {
    width: 28px;
    height: 28px;
  }

  & span {
    font-size: 14px;
    font-weight: 400;
    line-height: 16.71px;

    @media screen and (max-width: 767px) {
      display: none;
    }
  }
`;

export const LoginBtn = styled.a`
  font-size: 1.125rem;
  color: #f5f5f5;
  text-align: center;
  background: linear-gradient(90deg, #6d6afe, #6ae3fe);
  border-radius: 8px;
  border: none;
  text-decoration: none;
  padding: 20px 40px;
`;
