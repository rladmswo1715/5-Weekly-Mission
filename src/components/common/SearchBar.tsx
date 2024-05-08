import search_icon from "../../assets/icon/search.svg";
import * as S from "./SearchBar.styled";

const SearchBar = () => {
  return (
    <S.SearchWrapBox>
      <img src={search_icon} alt="서치 돋보기" />
      <input type="text" placeholder="링크를 검색해 보세요." />
    </S.SearchWrapBox>
  );
};

export default SearchBar;
