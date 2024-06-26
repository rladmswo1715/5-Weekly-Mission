import * as S from "./KebabList.styled";
import useModal from "@/hooks/useModal";
import { ModalParam } from "@/types/Modal";
import LinkDeleteContent from "./modal/modalContent/LinkDeleteContent";
import LinkAddContent from "./modal/modalContent/LinkAddContent";

interface IKebabList {
  linkUrl: string;
  setKebabOpen: (isOpen: boolean) => void;
}

const KebabList = ({ linkUrl, setKebabOpen }: IKebabList) => {
  const { openModal } = useModal();

  const handleOpenModal = (
    e: React.MouseEvent,
    { props, component }: ModalParam
  ) => {
    e.preventDefault();
    setKebabOpen(false);
    openModal({ props, component });
  };

  return (
    <S.KebabList>
      <S.KebabListItem
        onClick={(e) => {
          handleOpenModal(e, {
            props: { title: "링크 삭제", subTitle: linkUrl },
            component: <LinkDeleteContent />,
          });
        }}
      >
        삭제하기
      </S.KebabListItem>
      <S.KebabListItem
        onClick={(e) => {
          handleOpenModal(e, {
            props: { title: "폴더에 추가", subTitle: "링크 주소" },
            component: <LinkAddContent />,
          });
        }}
      >
        폴더에 추가
      </S.KebabListItem>
    </S.KebabList>
  );
};

export default KebabList;
