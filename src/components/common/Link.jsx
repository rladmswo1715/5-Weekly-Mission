import { formatDate, getTimeAgo } from '../../utills/time.js';
import noImg from '../../assets/no-img.png'
import kebab from '../../assets/icon/kebab.svg';
import bookmarkStar from '../../assets/icon/bookmark-star.svg';
import * as S from './Link.styled.jsx';
import { useState } from 'react';
import KebabList from './KebabList.jsx';

const Link = ({linkInfo, isSetting}) => {
    const [isKebabOpen, setIsKebabOpen] = useState(false);

    const handleKebabClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        isKebabOpen ? setIsKebabOpen(false) : setIsKebabOpen(true);
    }

    return (
        <S.LinkItem>
            <a href={linkInfo.url} target='_blank' rel="noreferrer">
                <S.ImgBox>
                    <img src={linkInfo.imageSource ? linkInfo.imageSource : noImg} alt='링크 이미지'/>
                </S.ImgBox>
                {isSetting && <button><img src={bookmarkStar} alt='즐겨찾기 아이콘' /></button>}
                <S.ContentBox className='content-box'>
                    <S.AgoBox>
                        {getTimeAgo(linkInfo.createdAt)}
                        {isSetting && <button onClick={handleKebabClick}><img src={kebab} alt='케밥 아이콘' /></button>}
                        {isKebabOpen && <KebabList />}
                    </S.AgoBox>
                    <S.ContentParagraph>{linkInfo.description}</S.ContentParagraph>
                    <S.CreateParagraph>{formatDate(linkInfo.createdAt)}</S.CreateParagraph>
                </S.ContentBox>
            </a>
        </S.LinkItem>
    );
}

export default Link;