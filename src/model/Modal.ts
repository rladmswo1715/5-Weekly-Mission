import React from "react";

type ModalPorps = {
  [key: string]: string | null;
} | null;

export interface ModalParam {
  type: string | null;
  props?: ModalPorps;
}

export interface ModalFuncParam {
  modalType: string | null;
  modalProps?: ModalPorps;
}

export interface IModalLayout {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}
