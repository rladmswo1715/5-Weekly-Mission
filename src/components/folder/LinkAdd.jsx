import * as S from './LinkAdd.styled';
import linkAdd from '../../assets/icon/link-add.svg';
import Button from '../common/Button';

const LinkAdd = () => {
    return (
        <S.LinkAddWrap>
            <div>
                <S.LinkAddIconInInput>
                    <img src={linkAdd} alt='링크 추가 아이콘'/>
                </S.LinkAddIconInInput>
                <S.LinkAddInput type='text' placeholder='링크를 추가해 보세요'  />
                <Button type='linkAdd'>추가하기</Button>
            </div>
        </S.LinkAddWrap>
    );
}

export default LinkAdd;