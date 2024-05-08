import * as S from "./ModalLayout.styled";
import close from "../../../assets/icon/modal_close.svg";
import useModal from "../../../hooks/useModal";
import useModalScrollBlock from "../../../hooks/useMoadlScrollBlock";
import { IModalLayout } from "../../../model/Modal";

const ModalLayout = (props: IModalLayout) => {
  const { closeModal } = useModal();
  useModalScrollBlock();

  const handleMoadlClose = () => {
    closeModal();
  };

  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <S.FolerInfo>
          <p>{props.title}</p>
          {props.subTitle && <span>{props.subTitle}</span>}
        </S.FolerInfo>
        <S.ShareInfo>{props.children}</S.ShareInfo>
        <S.CloseButton onClick={handleMoadlClose}>
          <img src={close} alt="모달 닫기" />
        </S.CloseButton>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default ModalLayout;
