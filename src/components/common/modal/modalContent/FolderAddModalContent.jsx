import * as S from './FolderAddModalContent.styled';
import Button from "../../Button";

const FolderAddModalContent = () => {
  return (
    <S.FolderAddContent>
      <input type="text" placeholder="내용 입력" />
      <Button type='folderAdd_modal'>추가하기</Button>
    </S.FolderAddContent>
  )
}

export default FolderAddModalContent;