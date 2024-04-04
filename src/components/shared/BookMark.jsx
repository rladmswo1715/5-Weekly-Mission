import './BookMark.css';

const BookMark = ({ownerInfo}) => {

    if (!ownerInfo) {
        return;
    }
    const { name, owner } = ownerInfo;

    return(
        <div>
            <div className='owner-info'>
                <img src={owner.profileImageSource} alt='소유자 프로필' />
                <span>{owner.name}</span>
            </div>

            <span className='owner-shared'>{name}</span>
        </div>
    );
}

export default BookMark;