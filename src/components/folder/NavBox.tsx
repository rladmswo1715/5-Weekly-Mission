import React, { useEffect, useState } from "react";
import { getFolderNavInfo } from "../../api/folder.js";
import * as S from "./NavBox.styled";
import useModal from "../../hooks/useModal.ts";
import NavItem from "./NavItem";
import add from "../../assets/icon/add.svg";
import shareIcon from "../../assets/icon/share.svg";
import penIcon from "../../assets/icon/pen.svg";
import deleteIcon from "../../assets/icon/delete.svg";
import { ModalFuncParam } from "../../model/Modal";

interface FolderNav {
  navId?: number;
  onClickNavItem: (navId: number) => void;
}

interface INavItem {
  id?: number;
  created_at?: string;
  name?: string;
  user_id?: number;
  favorite?: boolean;
  link?: {
    count: number;
  };
}

const NavBox = ({ navId, onClickNavItem }: FolderNav) => {
  const { openModal } = useModal();
  const [navList, setNavList] = useState<INavItem[]>([]);
  const [currentNav, setCurrentNav] = useState("전체");

  const handleLoadInfo = async () => {
    const folderNavInfo = await getFolderNavInfo();

    if (folderNavInfo !== null) {
      setNavList(folderNavInfo.data);
    }
  };

  useEffect(() => {
    handleLoadInfo();
  }, []);

  useEffect(() => {
    if (navId === undefined) {
      setCurrentNav("전체");
    }

    navList.forEach((navListItem: INavItem) => {
      if (navListItem.name && navListItem.id === navId)
        setCurrentNav(navListItem.name);
    });
  }, [navId, navList]);

  const handleOpenModal = ({ modalType, modalProps }: ModalFuncParam) => {
    openModal({ type: modalType, props: modalProps });
  };

  return (
    <>
      <S.NavWrapBox>
        <ul>
          <NavItem
            navName="전체"
            onClick={onClickNavItem}
            isCurrentNav={navId === undefined ? true : false}
          />
          {navList &&
            navList.map((navItem) => {
              return (
                <NavItem
                  key={navItem.id}
                  navName={navItem.name}
                  navId={navItem.id}
                  onClick={onClickNavItem}
                  isCurrentNav={navItem.id === navId ? true : false}
                />
              );
            })}
        </ul>
        <button
          onClick={() =>
            handleOpenModal({
              modalType: "folderAdd",
              modalProps: { title: "폴더 추가" },
            })
          }
        >
          <span>폴더 추가</span>
          <img src={add} alt="추가 아이콘" />
        </button>
      </S.NavWrapBox>
      <S.NavSettingBox>
        <span>{currentNav}</span>
        {navId && (
          <div>
            <button
              onClick={() =>
                handleOpenModal({
                  modalType: "share",
                  modalProps: { title: "폴더 공유", subTitle: currentNav },
                })
              }
            >
              <img src={shareIcon} alt="공유 아이콘" />
              <span>공유</span>
            </button>
            <button
              onClick={() =>
                handleOpenModal({
                  modalType: "folderNameChange",
                  modalProps: { title: "폴더 이름 변경" },
                })
              }
            >
              <img src={penIcon} alt="이름 변경 아이콘" />
              <span>이름 변경</span>
            </button>
            <button
              onClick={() =>
                handleOpenModal({
                  modalType: "folderDelete",
                  modalProps: { title: "폴더 삭제", subTitle: currentNav },
                })
              }
            >
              <img src={deleteIcon} alt="삭제 아이콘" />
              <span>삭제</span>
            </button>
          </div>
        )}
      </S.NavSettingBox>
    </>
  );
};

export default NavBox;
