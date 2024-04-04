import * as S from './Shared.styled.jsx';
import BookMark from '../components/shared/BookMark.jsx';
import SerchBar from '../components/shared/SearchBar.jsx';
import LinkList from '../components/shared/LinkList.jsx';
import { useEffect, useState } from "react";
import { getSharedInfo } from "../api/shared.js";

const Shared = () => {
    const [bookMarkOwner, setBookMarkOwner] = useState(null);
    const [linkList, setLinkList] = useState([]);

    const handleLoadInfo = async () => {
        const sharedInfo = await getSharedInfo();

        if(sharedInfo !== null){
            setBookMarkOwner(sharedInfo.folder);
            setLinkList(sharedInfo.folder.links);
        }
    }

    useEffect(() => {
        handleLoadInfo();
    },[]);

    return (
        <>
            <S.SharedInfoWrap>
                <BookMark ownerInfo={bookMarkOwner} />
            </S.SharedInfoWrap>
            <section>
                <S.ContentWrap>
                    <SerchBar />
                    <LinkList listInfo={linkList} />
                </S.ContentWrap>
            </section>
        </>
    );
}

export default Shared;