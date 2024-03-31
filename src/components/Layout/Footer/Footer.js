import './Footer.css';
import icon_facebook from '../../../assets/icon/icon_facebook.png';
import icon_twitter from '../../../assets/icon/icon_twitter.png';
import icon_youtube from '../../../assets/icon/icon_youtube.png';
import icon_instagram from '../../../assets/icon/icon_instagram.png';
import SnsLink from './SnsLink';

const Footer = () => {
    
    return (
        <footer>
            <div class="wrap">
                <div class="footer-content-wrap">
                    <div class="co-wrap">
                        <span class="co-name">©codeit - 2023</span>
                    </div>
                    <div>
                        <ul class="service-wrap">
                            <li><a href="javascript:void(0);">Privacy Policy</a></li>
                            <li><a href="javascript:void(0);">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul class="sns-wrap">
                            <SnsLink url={'https://www.facebook.com/'} img={icon_facebook} imgAlt={'페이스북 아이콘'} />
                            <SnsLink url={'https://twitter.com/'} img={icon_twitter} imgAlt={'트위터 아이콘'} />
                            <SnsLink url={'https://www.youtube.com/'} img={icon_youtube} imgAlt={'유튜브 아이콘'} />
                            <SnsLink url={'https://www.instagram.com/'} img={icon_instagram} imgAlt={'인스타그램 아이콘'} />
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;