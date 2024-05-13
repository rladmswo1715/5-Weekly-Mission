import * as S from "./ModalLayout.styled";
import close from "@/public/image/icon/modal_close.svg";
import useModal from "@/hooks/useModal";
import useModalScrollBlock from "@/hooks/useMoadlScrollBlock";
import { IModalLayout } from "@/types/Modal";
import Image from "next/image";

const ModalLayout = ({ title, subTitle, children }: IModalLayout) => {
  const { closeModal } = useModal();
  useModalScrollBlock();

  const handleMoadlClose = () => {
    closeModal();
  };

  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <S.FolerInfo>
          <p>{title}</p>
          {subTitle && <span>{subTitle}</span>}
        </S.FolerInfo>
        <S.ShareInfo>{children}</S.ShareInfo>
        <S.CloseButton onClick={handleMoadlClose}>
          <Image src={close} alt="모달 닫기" />
        </S.CloseButton>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default ModalLayout;
