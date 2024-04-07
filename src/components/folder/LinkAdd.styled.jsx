import styled from "styled-components";

export const LinkAddWrap = styled.form`
    width: 800px;
    border: 1px solid #6D6AFE;
    background-color: white;
    border-radius: 15px;
    gap: 8px;

    > div {
        padding: 16px 20px;
        position: relative;
    }
`
export const LinkAddIconInInput = styled.div`
    display: inline-block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-10px);
`
export const LinkAddInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 6.5px 0 6.5px 32px;
    outline: none;

    &::placeholder {
            color: #9FA6B2;
    }
`
