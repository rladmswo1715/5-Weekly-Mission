import { formatDate, getTimeAgo } from '../../utills/time.js';
import noImg from '../../assets/no-img.png'
import './Link.css';

const Link = ({linkInfo}) => {

    return (
        <div className='link-item'>
            <a href={linkInfo.url} target='_blank' rel="noreferrer">
                <div className='img-box'>
                    <img src={linkInfo.imageSource ? linkInfo.imageSource : noImg} alt='링크 이미지'/>
                </div>
                <div className='content-box'>
                    <p className='item-ago'>{getTimeAgo(linkInfo.createdAt)}</p>
                    <p className='item-content'>{linkInfo.description}</p>
                    <p className='item-create'>{formatDate(linkInfo.createdAt)}</p>
                </div>
            </a>
        </div>
    );
}

export default Link;