import * as S from './FolderNameChangeContent.styled';
import Button from "../../Button";

const FolderNameChangeContent = () => {
  return (
    <S.FolderNameChangeContent>
      <input type="text" placeholder="내용 입력" />
      <Button type='folderNameChange_modal'>변경하기</Button>
    </S.FolderNameChangeContent>
  )
}

export default FolderNameChangeContent;