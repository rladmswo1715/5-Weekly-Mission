import * as S from "./LinkList.styled";
import Link from "./Link";
import { LinkItem, LinkParam } from "@/types/Link";

const SharedList = ({ listInfo, isSetting }: LinkParam) => {
  return (
    <S.ContentListBox>
      {listInfo.length === 0 ? (
        <span>저장된 링크가 없습니다.</span>
      ) : (
        listInfo.map((link: LinkItem) => {
          return <Link key={link.id} linkInfo={link} isSetting={isSetting} />;
        })
      )}
    </S.ContentListBox>
  );
};

export default SharedList;
