import { useState } from "react";
import { createContext } from "react";
import { ModalParam } from "@/types/Modal";

export const ModalStateContext = createContext<ModalParam | null>(null);
export const ModalSetterContext = createContext(
  (param: ModalParam | null) => {}
);

function Modal({ children }: any) {
  const [state, setState] = useState<ModalParam | null>(null);

  return (
    <ModalSetterContext.Provider value={setState}>
      <ModalStateContext.Provider value={state}>
        {children}
      </ModalStateContext.Provider>
    </ModalSetterContext.Provider>
  );
}

export default Modal;
