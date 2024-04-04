import styled from "styled-components";

export const Footer = styled.footer`
    margin-top: 100px;

    & div {
        background-color: var(--var-test-black);
    }
`

export const FooterContentWrap = styled.div`
    display: flex;
    padding: 32px 104px 108px;
    justify-content: space-between;

    ul {
        display: flex;
    }

    @media (max-width: 767px){
        position: relative;
        padding: 32px 32px 108px;
    }
`

export const CompanyWrap = styled.div`
    @media (max-width: 767px){
        position: absolute;
        left: 2rem;
        bottom: 2rem;
    }

    & span {
        color : var(--var-test-gray);
    }
`

export const ServiceWrap = styled.ul`
    gap: 0 30px;

    a {
        text-decoration: none;
        color : var(--var-test-white);
    }
`

export const SnsWrap = styled.ul`
    gap: 0 12px;
`
