import { useEffect, useState } from "react";
import { getFolderNavInfo } from "../../api/folder.js";
import * as S from './NavBox.styled.jsx';
import add from '../../assets/icon/add.svg';
import NavItem from './NavItem';
import shareIcon from '../../assets/icon/share.svg';
import penIcon from '../../assets/icon/pen.svg';
import deleteIcon from '../../assets/icon/delete.svg';

const NavBox = ({navId, onClickNavItem}) => {
    const [navList, setNavList] = useState([]);
    const [currentNav, setCurrentNav] = useState('전체');

    const handleLoadInfo = async () => {
        const folderNavInfo = await getFolderNavInfo();

        if(folderNavInfo !== null){
            setNavList(folderNavInfo.data);
        }
    }

    useEffect(() => {
        handleLoadInfo();
    },[]);


    useEffect(() => {
        if(navId === undefined){setCurrentNav('전체')}

        navList.map((navListItem) => {
            if(navListItem.id === navId) setCurrentNav(navListItem.name);
        })
    },[navId])

    return (
        <>
            <S.NavWrapBox>
                <ul>
                    <NavItem navName='전체' onClick={onClickNavItem} isCurrentNav={navId === undefined ? true : false} />
                    {navList && navList.map((navItem) => {
                        return <NavItem key={navItem.id} navName={navItem.name} navId={navItem.id} onClick={onClickNavItem}
                                    isCurrentNav={navItem.id === navId ? true : false} />;
                    })}
                </ul>
                <div>
                    <span>폴더 추가</span>
                    <img src={add} alt="추가 아이콘" />
                </div>
            </S.NavWrapBox>
            <S.NavSettingBox>
                <span>{currentNav}</span>
                {navId && 
                    <div>
                        <button>
                            <img src={shareIcon} alt='공유 아이콘' />
                            <span>공유</span>
                        </button>
                        <button>
                            <img src={penIcon} alt='이름 변경 아이콘' />
                            <span>이름 변경</span>
                        </button>
                        <button>
                            <img src={deleteIcon} alt='삭제 아이콘' />
                            <span>삭제</span>
                        </button>
                    </div>}
            </S.NavSettingBox>
        </>
    );
}

export default NavBox;