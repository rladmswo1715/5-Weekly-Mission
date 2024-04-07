import styled from 'styled-components';

export const NavItem = styled.li`
    border: solid 1px #6D6AFE;
    border-radius: 5px;
    padding: 8px 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.09px;

    &:hover {
        cursor: pointer;
    }

    &.current-nav{
        background-color: #6D6AFE;
        color: #FFFFFF;
    }
`