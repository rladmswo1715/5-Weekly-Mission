import * as S from "./KebabList.styled";
import useModal from "@/hooks/useModal";
import { ModalParam } from "@/types/Modal";

interface IKebabList {
  linkUrl: string;
  setKebabOpen: (isOpen: boolean) => void;
}

const KebabList = ({ linkUrl, setKebabOpen }: IKebabList) => {
  const { openModal } = useModal();

  const handleOpenModal = (
    e: React.MouseEvent,
    { type, props }: ModalParam
  ) => {
    e.preventDefault();
    setKebabOpen(false);
    openModal({ type, props });
  };

  return (
    <S.KebabList>
      <S.KebabListItem
        onClick={(e) => {
          handleOpenModal(e, {
            type: "linkDelete",
            props: { title: "링크 삭제", subTitle: linkUrl },
          });
        }}
      >
        삭제하기
      </S.KebabListItem>
      <S.KebabListItem
        onClick={(e) => {
          handleOpenModal(e, {
            type: "linkAdd",
            props: { title: "폴더에 추가", subTitle: "링크 주소" },
          });
        }}
      >
        폴더에 추가
      </S.KebabListItem>
    </S.KebabList>
  );
};

export default KebabList;
