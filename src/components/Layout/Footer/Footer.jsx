import * as S from './Footer.styled';
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
        <S.Footer>
            <div>
                <S.FooterContentWrap>
                    <S.CompanyWrap>
                        <span>©codeit - 2023</span>
                    </S.CompanyWrap>
                    <div>
                        <S.ServiceWrap>
                            <li><a href="#!" onClick={aTagPreventDefault}>Privacy Policy</a></li>
                            <li><a href="#!" onClick={aTagPreventDefault}>FAQ</a></li>
                        </S.ServiceWrap>
                    </div>
                    <div>
                        <S.SnsWrap>
                            {snsInfo.url.map((snsInfoUrl, i) => {
                                return <SnsLink key={snsInfoUrl} url={snsInfoUrl} img={snsInfo.img[i]} imgAlt={snsInfo.imgAlt[i]} />
                            })}
                        </S.SnsWrap>
                    </div>
                </S.FooterContentWrap>
            </div>
        </S.Footer>
    );
}

export default Footer;