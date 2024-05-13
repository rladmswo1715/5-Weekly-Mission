import search_icon from "@/public/image/icon/search.svg";
import * as S from "./SearchBar.styled";
import Image from "next/image";

const SearchBar = () => {
  return (
    <S.SearchWrapBox>
      <Image src={search_icon} alt="서치 돋보기" />
      <input type="text" placeholder="링크를 검색해 보세요." />
    </S.SearchWrapBox>
  );
};

export default SearchBar;
