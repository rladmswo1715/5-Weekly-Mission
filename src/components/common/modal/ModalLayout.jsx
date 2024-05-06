import * as S from './ModalLayout.styled';
import close from '../../../assets/icon/modal_close.svg'
import useModal from "../../../hooks/useModal";
import useModalScrollBlock from '../../../hooks/useMoadlScrollBlock'

const ModalLayout = (props) => {
  const {closeModal} = useModal();
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
        <S.ShareInfo>
          {props.children}
        </S.ShareInfo>
        <S.CloseButton onClick={handleMoadlClose}>
          <img src={close} alt="모달 닫기" />
        </S.CloseButton>
      </S.ModalContent>
    </S.ModalWrapper>
  )
}

export default ModalLayout;