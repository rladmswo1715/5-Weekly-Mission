import Image from "next/image";
import * as S from "./BookMark.styled";

interface Props {
  ownerInfo: {
    name?: string;
    owner?: { [key: string]: string | undefined };
  } | null;
}

const BookMark = ({ ownerInfo }: Props) => {
  if (!ownerInfo) {
    return;
  }
  const { name, owner } = ownerInfo;

  return (
    <div>
      <S.OwnerInfoWrap>
        <Image
          width={50}
          height={50}
          src={
            owner && owner.profileImageSource ? owner.profileImageSource : ""
          }
          alt="소유자 프로필"
        />
        <span>{owner && owner.name}</span>
      </S.OwnerInfoWrap>

      <S.OwnerShared>{name}</S.OwnerShared>
    </div>
  );
};

export default BookMark;
