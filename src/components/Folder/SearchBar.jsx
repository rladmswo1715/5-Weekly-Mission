import search_icon from '../../assets/icon/search.svg';
import './SearchBar.css';

const SearchBar = () => {

    return (
        <div className='search-wrap'>
            <img src={search_icon}  alt='서치 돋보기'/>
            <input type="text" placeholder='링크를 검색해 보세요.' />
        </div>
    )
}

export default SearchBar;