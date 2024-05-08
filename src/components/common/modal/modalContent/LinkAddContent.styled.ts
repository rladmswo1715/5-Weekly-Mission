import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`

export const FolderList = styled.div`
  
  > ul {
    
    > li {
      padding: 8px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
     
      &:hover {
        background: #F0F6FF;
      }

      &.selected {
        background: #F0F6FF;
      }

      > p {
        display: flex;
        gap: 8px;
        align-items: center;
      }
    }
  }
`

export const NavName = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`
export const LinkCount = styled.span`
  color: #9FA6B2;
  font-size: 14px;
  line-height: 16.71px;
`