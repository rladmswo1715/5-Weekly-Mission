import * as S from "@/styles/pages/Folder.styled";
import LinkAdd from "@/components/folder/LinkAdd";
import SerchBar from "@/components/common/SearchBar";
import NavBox from "@/components/folder/NavBox";
import { useEffect, useState } from "react";
import { getFolderListInfo } from "@/api/folder";
import LinkList from "@/components/common/LinkList";
import navEntireTab from "@/constants/folderNav";

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
  const [navId, setNavId] = useState<number>(navEntireTab);
  const [searchValue, setSearchValue] = useState("");

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

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchList = () => {
    if (!searchValue) return linkList;
    const searchList = linkList.filter((item: FolderItem) => {
      return (
        item.description?.includes(searchValue) ||
        item.title?.includes(searchValue) ||
        item.url?.includes(searchValue)
      );
    });
    return searchList;
  };

  const filterLinkList = handleSearchList();

  const handleDeleteBtn = () => {
    setSearchValue("");
    handleLoadInfo();
  };

  return (
    <>
      <S.LinkAddWrap>
        <LinkAdd />
      </S.LinkAddWrap>
      <section>
        <S.ContentBox>
          <SerchBar
            value={searchValue}
            onChangeEvent={handleSearchChange}
            onClickDeleteBtn={handleDeleteBtn}
          />
          <S.FolderBox>
            <NavBox navId={navId} onClickNavItem={setNavId} />
          </S.FolderBox>
          <S.ContentItemBox>
            <LinkList listInfo={filterLinkList} isSetting />
          </S.ContentItemBox>
        </S.ContentBox>
      </section>
    </>
  );
};

export default Folder;
