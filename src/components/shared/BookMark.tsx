import * as S from "./BookMark.styled";

interface Props {
  ownerInfo: {
    name?: string;
    owner?: { [key: string]: string | undefined };
  };
}

const BookMark = ({ ownerInfo }: Props) => {
  if (!ownerInfo) {
    return;
  }
  const { name, owner } = ownerInfo;

  return (
    <div>
      <S.OwnerInfoWrap>
        <img src={owner && owner.profileImageSource} alt="소유자 프로필" />
        <span>{owner && owner.name}</span>
      </S.OwnerInfoWrap>

      <S.OwnerShared>{name}</S.OwnerShared>
    </div>
  );
};

export default BookMark;
