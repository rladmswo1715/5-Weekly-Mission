import { useContext } from "react";
import { ModalSetter } from "../context/Modal"

export default function useModal() {
  const setModalState = useContext(ModalSetter);

  const openModal = ({type, props = null}) => {
    setModalState({type, props});
  };

  const closeModal = () => {
    setModalState({type: null, props: null});
  };

  return {openModal, closeModal};
}
