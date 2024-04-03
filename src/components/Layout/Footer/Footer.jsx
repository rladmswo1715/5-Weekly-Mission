import './Footer.css';
import icon_facebook from '../../../assets/icon/icon_facebook.png';
import icon_twitter from '../../../assets/icon/icon_twitter.png';
import icon_youtube from '../../../assets/icon/icon_youtube.png';
import icon_instagram from '../../../assets/icon/icon_instagram.png';
import SnsLink from './SnsLink';
import { aTagPreventDefault } from '../../../utills/temp';

const Footer = () => {
    
    const snsInfo = {
        url : [
            'https://www.facebook.com/',
            'https://twitter.com/',
            'https://www.youtube.com/',
            'https://www.instagram.com/'
        ],
        img : [ icon_facebook, icon_twitter, icon_youtube, icon_instagram ],
        imgAlt : [
            '페이스북 아이콘',
            '트위터 아이콘',
            '유튜브 아이콘',
            '인스타그램 아이콘'
        ]
    }
    
    return (
        <footer>
            <div className="wrap">
                <div className="footer-content-wrap">
                    <div className="co-wrap">
                        <span className="co-name">©codeit - 2023</span>
                    </div>
                    <div>
                        <ul className="service-wrap">
                            <li><a href="#!" onClick={aTagPreventDefault}>Privacy Policy</a></li>
                            <li><a href="#!" onClick={aTagPreventDefault}>FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="sns-wrap">
                            {snsInfo.url.map((snsInfoUrl, i) => {
                                return <SnsLink key={snsInfoUrl} url={snsInfoUrl} img={snsInfo.img[i]} imgAlt={snsInfo.imgAlt[i]} />
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;