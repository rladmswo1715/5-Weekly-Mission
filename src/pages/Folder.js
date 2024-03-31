import './Folder.css';
import BookMark from '../components/Folder/BookMark';
import SerchBar from '../components/Folder/SearchBar';
import LinkList from '../components/Folder/LinkList';
import { useEffect, useState } from "react";
import { getFolderInfo } from "../api/folderApi.js";

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