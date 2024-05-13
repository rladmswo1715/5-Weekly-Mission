import styled from "styled-components";

export const NavWrapBox = styled.div`
    display: flex;
    justify-content: space-between;

    > ul {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    > div {
        display: flex;
        align-items: center;
    }

    & span {
        font-size: 16px;
        color: #6D6AFE;
        line-height: 19.09px;
        letter-spacing: -0.3px;
        font-weight: 500;
        padding-right: 4px;
    }
`

export const NavSettingBox = styled.div`
    padding-top: 24px;
    display: flex;
    justify-content: space-between;

    > span {
        font-weight: 600;
        font-size: 24px;
        line-height: 28.8px;
        letter-spacing: -0.2px;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    & button {
        display:flex;
        align-items: center;
        gap: 0.5px;
        padding: 0;

        > span {
            font-size: 14px;
            font-weight: 600;
            line-height: 16.71px;
            color: #9FA6B2;
        }
    }
`