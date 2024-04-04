import { formatDate, getTimeAgo } from '../../utills/time.js';
import noImg from '../../assets/no-img.png'
import * as S from './Link.styled.jsx';

const Link = ({linkInfo}) => {

    return (
        <S.LinkItem>
            <a href={linkInfo.url} target='_blank' rel="noreferrer">
                <S.ImgBox>
                    <img src={linkInfo.imageSource ? linkInfo.imageSource : noImg} alt='링크 이미지'/>
                </S.ImgBox>
                <S.ContentBox className='content-box'>
                    <S.AgoParagraph>{getTimeAgo(linkInfo.createdAt)}</S.AgoParagraph>
                    <S.ContentParagraph>{linkInfo.description}</S.ContentParagraph>
                    <S.CreateParagraph>{formatDate(linkInfo.createdAt)}</S.CreateParagraph>
                </S.ContentBox>
            </a>
        </S.LinkItem>
    );
}

export default Link;