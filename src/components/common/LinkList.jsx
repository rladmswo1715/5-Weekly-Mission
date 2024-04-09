import * as S from './LinkList.styled.jsx';
import Link from './Link.jsx';

const SharedList = ({listInfo, isSetting}) => {

    return (
        <S.ContentListBox>
            {listInfo.map((link) => {
                return <Link key={link.id} linkInfo={link} isSetting={isSetting} />
            })}
            {listInfo.length === 0 && <span>저장된 링크가 없습니다.</span>}
        </S.ContentListBox>
    )
}

export default SharedList;