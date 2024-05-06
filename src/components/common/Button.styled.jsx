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
    ${({usetype}) => 
        (usetype === 'folderAdd_modal' || usetype === 'folderNameChange_modal' || usetype === 'linkAdd_modal') && css`
            font-size: 16px;
            padding: 16px 20px;
            font-weight: 600;
            line-height: 19.09px;
        `
    }
    ${({usetype}) => 
        (usetype === 'folderDelete_modal' || usetype === 'linkDelete_modal') && css`
            width: 100%;
            padding: 16px 20px;
            font-weight: 600;
            font-size: 16px;
            line-height: 19.09px;
            background: #FF5B56;
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


