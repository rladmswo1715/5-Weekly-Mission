import * as S from './Button.styled';

const Button = ({children, type, handleButtonClick}) => {

    return (
        <S.Button type="button" usetype={type} onClick={handleButtonClick}>{children}</S.Button>
    );
}

export default Button;