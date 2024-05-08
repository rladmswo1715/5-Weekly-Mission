import * as S from "./Folder.styled";
import LinkAdd from "../components/folder/LinkAdd";
import SerchBar from "../components/common/SearchBar";
import NavBox from "../components/folder/NavBox";
import { useEffect, useState } from "react";
import { getFolderListInfo } from "../api/folder.js";
import LinkList from "../components/common/LinkList";

interface FolderItem {
  id: number;
  created_at: string;
  updated_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

const Folder = () => {
  const [linkList, setLinkList] = useState([]);
  const [navId, setNavId] = useState<number | undefined>();

  const handleLoadInfo = async () => {
    const folderListInfo = await getFolderListInfo(navId);

    if (folderListInfo !== null) {
      const modifiedData = folderListInfo.data.map(
        (item: FolderItem, i: number) => ({
          createdAt: item.created_at,
          imageSource: item.image_source,

          ...folderListInfo.data[i],
        })
      );

      setLinkList(modifiedData);
    }
  };

  useEffect(() => {
    handleLoadInfo();
  }, [navId]);

  return (
    <>
      <S.LinkAddWrap>
        <LinkAdd />
      </S.LinkAddWrap>
      <section>
        <S.ContentBox>
          <SerchBar />
          <S.FolderBox>
            <NavBox navId={navId} onClickNavItem={setNavId} />
          </S.FolderBox>
          <S.ContentItemBox>
            <LinkList listInfo={linkList} isSetting />
          </S.ContentItemBox>
        </S.ContentBox>
      </section>
    </>
  );
};

export default Folder;
