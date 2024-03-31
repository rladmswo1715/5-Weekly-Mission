import './UserProfile.css';

const userProfile = ({ user }) => {
    if (!user) {
        return <a href="/pages/auth/signin.html" className="btn">로그인</a>
    }
    const { email, profileImageSource} = user;

    return(
        <div className="user_profile">
            <img src={profileImageSource} alt="유저 프로필" />
            <span>{email}</span>
        </div>
    );
}

export default userProfile;