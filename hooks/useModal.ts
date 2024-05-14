import { useContext } from "react";
import { ModalSetterContext } from "@/context/Modal";
import { ModalParam } from "@/types/Modal";

export default function useModal() {
  const setModalState = useContext(ModalSetterContext);

  const openModal = ({ type, props }: ModalParam) => {
    setModalState({ type, props });
  };

  const closeModal = () => {
    setModalState(null);
  };

  return { openModal, closeModal };
}
