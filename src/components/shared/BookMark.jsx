import * as S from './BookMark.styled';

const BookMark = ({ownerInfo}) => {

    if (!ownerInfo) {
        return;
    }
    const { name, owner } = ownerInfo;

    return(
        <div>
            <S.OwnerInfoWrap>
                <img src={owner.profileImageSource} alt='소유자 프로필' />
                <span>{owner.name}</span>
            </S.OwnerInfoWrap>

            <S.OwnerShared>{name}</S.OwnerShared>
        </div>
    );
}

export default BookMark;