import React, { useEffect, useState } from "react";
import { getFolderNavInfo } from "@/api/folder";
import * as S from "./NavBox.styled";
import useModal from "@/hooks/useModal";
import NavItem from "./NavItem";
import add from "@/public/image/icon/add.svg";
import addMobile from "@/public/image/icon/add-mobile.svg";
import shareIcon from "@/public/image/icon/share.svg";
import penIcon from "@/public/image/icon/pen.svg";
import deleteIcon from "@/public/image/icon/delete.svg";
import { ModalParam } from "@/types/Modal";
import { INavItem } from "@/types/FolderNav";
import Image from "next/image";
import navEntireTab from "@/constants/folderNav";

interface FolderNav {
  navId?: number;
  onClickNavItem: (navId: number) => void;
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
    if (navId === navEntireTab) {
      setCurrentNav("전체");
    }

    navList.forEach((navListItem: INavItem) => {
      if (navListItem.name && navListItem.id === navId)
        setCurrentNav(navListItem.name);
    });
  }, [navId, navList]);

  const handleOpenModal = ({ type, props }: ModalParam) => {
    openModal({ type, props });
  };

  return (
    <>
      <S.NavWrapBox>
        <ul>
          <NavItem
            navName="전체"
            onClick={onClickNavItem}
            navId={navEntireTab}
            isCurrentNav={navId === navEntireTab}
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
              type: "folderAdd",
              props: { title: "폴더 추가" },
            })
          }
        >
          <span>폴더 추가</span>
          <Image src={add} alt="추가 아이콘" className="pc" />
          <Image src={addMobile} alt="추가 아이콘" className="mo" />
        </button>
      </S.NavWrapBox>
      <S.NavSettingBox>
        <span>{currentNav}</span>
        {navId !== navEntireTab && (
          <div>
            <button
              onClick={() =>
                handleOpenModal({
                  type: "share",
                  props: { title: "폴더 공유", subTitle: currentNav },
                })
              }
            >
              <Image src={shareIcon} alt="공유 아이콘" />
              <span>공유</span>
            </button>
            <button
              onClick={() =>
                handleOpenModal({
                  type: "folderNameChange",
                  props: { title: "폴더 이름 변경" },
                })
              }
            >
              <Image src={penIcon} alt="이름 변경 아이콘" />
              <span>이름 변경</span>
            </button>
            <button
              onClick={() =>
                handleOpenModal({
                  type: "folderDelete",
                  props: { title: "폴더 삭제", subTitle: currentNav },
                })
              }
            >
              <Image src={deleteIcon} alt="삭제 아이콘" />
              <span>삭제</span>
            </button>
          </div>
        )}
      </S.NavSettingBox>
    </>
  );
};

export default NavBox;
