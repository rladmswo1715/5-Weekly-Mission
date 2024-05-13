import styled from "styled-components";

export const OwnerInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding-bottom: 20px;

    & img {
        width: 60px;
        height: 60px;
    }
`

export const OwnerShared = styled.span`
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
`