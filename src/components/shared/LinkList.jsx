import * as S from './LinkList.styled.jsx';
import Link from './Link.jsx';

const SharedList = ({listInfo}) => {

    return (
        <S.ContentListBox>
            {listInfo.map((link) => {
                return <Link key={link.id} linkInfo={link} />
            })}
        </S.ContentListBox>
    )
}

export default SharedList;