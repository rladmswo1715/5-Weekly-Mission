import * as S from "./LinkList.styled";
import Link from "./Link";
import { LinkItem, LinkParam } from "../../model/Link";

const SharedList = ({ listInfo, isSetting }: LinkParam) => {
  return (
    <S.ContentListBox>
      {listInfo.map((link: LinkItem) => {
        return <Link key={link.id} linkInfo={link} isSetting={isSetting} />;
      })}
      {listInfo.length === 0 && <span>저장된 링크가 없습니다.</span>}
    </S.ContentListBox>
  );
};

export default SharedList;
