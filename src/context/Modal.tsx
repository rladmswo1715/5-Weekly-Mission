import { useState } from "react";
import { createContext } from "react";
import { ModalParam } from "../model/Modal";

export const ModalState = createContext<ModalParam | null>(null);
export const ModalSetter = createContext((param: ModalParam) => {});

function Modal({ children }: any) {
  const [state, setState] = useState<ModalParam>({
    type: null,
    props: null,
  });

  return (
    <ModalSetter.Provider value={setState}>
      <ModalState.Provider value={state}>{children}</ModalState.Provider>
    </ModalSetter.Provider>
  );
}

export default Modal;
