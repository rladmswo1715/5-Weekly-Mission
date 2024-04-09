import * as S from './Button.styled';

const Button = ({children, type}) => {
    return (
        <S.Button usetype={type}>{children}</S.Button>
    );
}

export default Button;