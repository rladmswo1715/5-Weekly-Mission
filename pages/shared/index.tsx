import * as S from "@/styles/pages/Shared.styled";
import BookMark from "@/components/shared/BookMark";
import SerchBar from "@/components/common/SearchBar";
import LinkList from "@/components/common/LinkList";
import { useEffect, useState } from "react";
import { getSharedInfo } from "@/api/shared";

interface Props {
  name?: string;
  owner?: { [key: string]: string | undefined };
}

const Shared = () => {
  const [bookMarkOwner, setBookMarkOwner] = useState<Props | null>(null);
  const [linkList, setLinkList] = useState([]);

  const handleLoadInfo = async () => {
    const sharedInfo = await getSharedInfo();

    if (sharedInfo !== null) {
      setBookMarkOwner(sharedInfo.folder);
      setLinkList(sharedInfo.folder.links);
    }
  };

  // run build 에러때문에 잠시 작성
  const handleSearchChange = (value: string) => {};
  const handleDeleteBtn = () => {};

  useEffect(() => {
    handleLoadInfo();
  }, []);

  return (
    <>
      <S.SharedInfoWrap>
        <BookMark ownerInfo={bookMarkOwner} />
      </S.SharedInfoWrap>
      <section>
        <S.ContentWrap>
          <SerchBar
            value=""
            onChangeEvent={handleSearchChange}
            onClickDeleteBtn={handleDeleteBtn}
          />
          <LinkList listInfo={linkList} />
        </S.ContentWrap>
      </section>
    </>
  );
};

export default Shared;
