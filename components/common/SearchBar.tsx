import search_icon from "@/public/image/icon/search.svg";
import close_icon from "@/public/image/icon/close.svg";
import * as S from "./SearchBar.styled";
import Image from "next/image";

interface Props {
  value: string;
  onChangeEvent: (value: string) => void;
  onClickDeleteBtn: () => void;
}

const SearchBar = ({ value, onChangeEvent, onClickDeleteBtn }: Props) => {
  return (
    <S.SearchWrapBox>
      <Image src={search_icon} alt="서치 돋보기" width={25} height={25} />
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        onChange={(e) => {
          onChangeEvent(e.target.value);
        }}
        value={value}
      />
      <button onClick={onClickDeleteBtn}>
        <Image src={close_icon} alt="검색어 삭제" width={24} height={24} />
      </button>
    </S.SearchWrapBox>
  );
};

export default SearchBar;
