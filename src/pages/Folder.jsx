import './Folder.css';
import BookMark from '../components/folder/BookMark.jsx';
import SerchBar from '../components/folder/SearchBar.jsx';
import LinkList from '../components/folder/LinkList.jsx';
import { useEffect, useState } from "react";
import { getFolderInfo } from "../api/folder.js";

const Folder = () => {
    const [bookMarkOwner, setBookMarkOwner] = useState(null);
    const [linkList, setLinkList] = useState([]);

    const handleLoadInfo = async () => {
        const folderInfo = await getFolderInfo();

        if(folderInfo !== null){
            setBookMarkOwner(folderInfo.folder);
            setLinkList(folderInfo.folder.links);
        }
    }

    useEffect(() => {
        handleLoadInfo();
    },[]);

    return (
        <>
            <section className="folder-info">
                <BookMark ownerInfo={bookMarkOwner} />
            </section>
            <section>
                <div className='content-wrap'>
                    <SerchBar />
                    <LinkList listInfo={linkList} />
                </div>
            </section>
        </>
    );
}

export default Folder;