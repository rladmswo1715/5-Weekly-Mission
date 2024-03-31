import search_icon from '../../assets/icon/search.svg';
import './SearchBar.css';

const SerchBar = () => {

    return (
        <div className='search-wrap'>
            <img src={search_icon} />
            <input type="text" placeholder='링크를 검색해 보세요.' />
        </div>
    )
}

export default SerchBar;