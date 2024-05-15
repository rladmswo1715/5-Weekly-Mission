import styled from "styled-components";

export const KebabList = styled.ul`
  position: absolute;
  top: 16px;
  right: 16px;
  box-shadow: 0px 2px 8px 0px #3332361a;
  background-color: #ffffff;
`;

export const KebabListItem = styled.li`
  padding: 7px 12px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.71px;
  &:hover {
    color: #6d6afe;
    background-color: #e7effb;
  }
`;
