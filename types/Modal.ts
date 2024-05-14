import React from "react";

type ModalPorps = {
  title: string;
  subTitle?: string;
};

export interface ModalParam {
  type: ModalType;
  props: ModalPorps;
}

export interface IModalLayout {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}

export type TModalParam = ModalParam | null;

export type ModalType =
  | "share"
  | "folderAdd"
  | "folderNameChange"
  | "folderDelete"
  | "linkDelete"
  | "linkAdd";
