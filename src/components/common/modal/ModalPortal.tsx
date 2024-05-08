import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalState } from '../../../context/Modal';
import ModalLayOut from './ModalLayout';
import ShareModalContent from './modalContent/ShareModalContent';
import FolderAddModalContent from './modalContent/FolderAddModalContent';
import FolderNameChangeContent from './modalContent/FolderNameChangeContent';
import FolderDeleteContent from './modalContent/FolderDeleteContent';
import LinkDeleteContent from './modalContent/LinkDeleteContent'
import LinkAddContent from './modalContent/LinkAddContent'

const MODAL_COMPONENTS = {
  share: ShareModalContent,
  folderAdd: FolderAddModalContent,
  folderNameChange: FolderNameChangeContent,
  folderDelete: FolderDeleteContent,
  linkDelete: LinkDeleteContent,
  linkAdd: LinkAddContent
};

function MoadlPortal() {
  const {type, props} = useContext(ModalState);

  if (!type) {
    return null;
  }

  const Modal = MODAL_COMPONENTS[type];
  return createPortal(
    <>
      <ModalLayOut {...props}>
        <Modal />
      </ModalLayOut>
    </>,
    document.getElementById("modal");
  );
}

export default MoadlPortal;