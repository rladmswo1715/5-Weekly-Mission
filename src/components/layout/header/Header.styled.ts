import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: var(--zindex-basic);
    background-color: rgb(240, 246, 255);

    &.add_blur {
        background-color: rgba(240, 246, 255, 0.5);
        backdrop-filter: blur(6px);
    }

    &.static_header {
        position: static;
    }
`

export const HeaderWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 200px;

    @media screen and (max-width: 1199px){
        @media  (min-width: 865px) {
            padding: 32px calc((100vw - 800px)/2);
        }
    }

    @media screen and (max-width: 864px) {
        padding: 32px;
    }
`








