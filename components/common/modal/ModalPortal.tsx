import { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalStateContext } from "@/context/Modal";
import ModalLayOut from "./ModalLayout";
import ShareModalContent from "./modalContent/ShareModalContent";
import FolderAddModalContent from "./modalContent/FolderAddModalContent";
import FolderNameChangeContent from "./modalContent/FolderNameChangeContent";
import FolderDeleteContent from "./modalContent/FolderDeleteContent";
import LinkDeleteContent from "./modalContent/LinkDeleteContent";
import LinkAddContent from "./modalContent/LinkAddContent";
import { TModalParam, ModalType } from "@/types/Modal";

const MODAL_COMPONENTS: Record<ModalType, () => JSX.Element> = {
  share: ShareModalContent,
  folderAdd: FolderAddModalContent,
  folderNameChange: FolderNameChangeContent,
  folderDelete: FolderDeleteContent,
  linkDelete: LinkDeleteContent,
  linkAdd: LinkAddContent,
};

function MoadlPortal() {
  const modalParam: TModalParam = useContext(ModalStateContext);
  if (!modalParam) {
    return null;
  }

  const { type, props } = modalParam;

  const Modal = MODAL_COMPONENTS[type];
  return createPortal(
    <>
      <ModalLayOut title={props.title} subTitle={props.subTitle}>
        <Modal />
      </ModalLayOut>
    </>,
    document.getElementById("modal") as HTMLElement
  );
}

export default MoadlPortal;
