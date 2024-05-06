import { useState } from "react";
import { createContext } from "react";

export const ModalState = createContext();
export const ModalSetter = createContext();

function Modal({children}) {
  const [state, setState] = useState({
    type: null,
    props: null
  });

  return (
    <ModalSetter.Provider value={setState}>
      <ModalState.Provider value={state}>
        {children}
      </ModalState.Provider>
    </ModalSetter.Provider>
  )
}

export default Modal;