import './Header.css';
import main_logo from "../../../assets/icon/main_logo.svg";
import { useEffect, useState } from 'react';
import { getSignInProfile } from "../../../api/headerApi.js";
import UserProfile from './UserProfile.js';

const Header = () => {
    const [user, setUser] = useState(null);

    const handleLoadUserProfile = async () => {
        const userProfile = await getSignInProfile();

        if(userProfile !== null){
            setUser(userProfile);
        }
    }

    const handleHeaderScroll = () => {
        let headerTag = document.getElementsByTagName('header')[0];
        document.documentElement.scrollTop === 0 ? headerTag.classList.remove('add-blur') : headerTag.classList.add('add-blur');
    }

    useEffect(() => {
        handleLoadUserProfile();

        const timer = setInterval(() => {
            window.addEventListener('scroll',handleHeaderScroll);
        }, 100);
        
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll',handleHeaderScroll);
        };
    },[]);

    return (
        <header>
            <div className="wrap">
                <h1 className="logo">
                    <a href="/folder">
                        <img src={main_logo} alt="로고" />
                    </a>
                </h1>
                
                <UserProfile user={user}/>
            </div>
        </header>
    );
}

export default Header;