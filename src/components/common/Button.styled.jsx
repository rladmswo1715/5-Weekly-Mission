import styled,{css} from "styled-components";

const byTypeStyle = css`
    ${({usetype}) => 
        usetype === 'linkAdd' && css`
            font-size: 14px;
            padding: 10px 15.5px;
            font-weight: 600;
            line-height: 16.70px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 20px;
        `
    }
`;
    


export const Button = styled.button`
    color: #F5F5F5;
    text-align: center;
    background: linear-gradient(90deg,#6D6AFE,#6AE3FE);
    border-radius: 8px;
    border: none;
    text-decoration: none;
    ${byTypeStyle}
    
`


