import styled from "styled-components";

export const LinkItem = styled.div`
    display: block;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 5px 25px 0px #00000014;
    &:hover{
        box-shadow: 0 0 7px 2px #4a4a4e;
    }

    & a {
        text-decoration-line: none;
        position: relative;

        > button {
            position: absolute;
            top: 15px;
            right: 15px;
        }
    }
    & a:link { color: black; } 
    & a:visited { color: black; }

    &:hover img,
    &:hover .content-box {
        transform: scale(1.05);
        transition: 0.5s;
    }
`

export const ImgBox = styled.div`
    height: 200px;
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ContentBox = styled.div`
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const AgoBox = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #666666;
    font-weight: 400;
    line-height: 15.51px;
    position: relative;
`

export const ContentParagraph = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 48px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    word-break: break-word;
`

export const CreateParagraph = styled.p`
    line-height: 1.19357142857;
`