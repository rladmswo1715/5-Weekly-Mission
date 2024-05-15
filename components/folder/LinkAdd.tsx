import * as S from "./LinkAdd.styled";
import useModal from "@/hooks/useModal";
import linkAdd from "@/public/image/icon/link-add.svg";
import Button from "@/components/common/Button";
import Image from "next/image";

const LinkAdd = () => {
  const { openModal } = useModal();

  const handleButtonClick = () => {
    openModal({
      type: "linkAdd",
      props: { title: "폴더에 추가", subTitle: "링크 주소" },
    });
  };

  return (
    <S.LinkAddForm>
      <div>
        <S.LinkAddIconWrap>
          <Image src={linkAdd} alt="링크 추가 아이콘" />
        </S.LinkAddIconWrap>
        <S.LinkAddInput type="text" placeholder="링크를 추가해 보세요" />
        <Button type="linkAdd" handleButtonClick={handleButtonClick}>
          추가하기
        </Button>
      </div>
    </S.LinkAddForm>
  );
};

export default LinkAdd;
