import * as S from "./FolderAddModalContent.styled";
import Button from "@/components/common/Button";

const FolderAddModalContent = () => {
  return (
    <S.FolderAddContent>
      <input type="text" placeholder="내용 입력" />
      <Button btnType="button" type="folderAdd_modal">
        추가하기
      </Button>
    </S.FolderAddContent>
  );
};

export default FolderAddModalContent;
