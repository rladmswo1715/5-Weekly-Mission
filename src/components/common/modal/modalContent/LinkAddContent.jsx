import * as S from './LinkAddContent.styled';
import { useState, useEffect, useRef } from 'react';
import Button from '../../Button';
import { getFolderNavInfo } from '../../../../api/folder';
import checkIcon from '../../../../assets/icon/check.svg';

const LinkAddContent = () => {
  const [navList, setNavList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSelectedFolder, setFolder] = useState(null);
  const selectedFoler= useRef({});

  useEffect(() => {
    const folderNavInfo = async() => {
      try{
        setIsLoading(true);
        const response = await getFolderNavInfo();
    
        if(response !== null){
            setNavList(response.data);
        }
      }catch(error) {
        console.log(error);
      }finally {
        setIsLoading(false);
      }
    }
   
    folderNavInfo();
  }, [])

  const handleSelectFolder = (i) => {
    setFolder(selectedFoler.current[i]);
  }

  return (
    <S.Content>
      <S.FolderList>
        <ul>
          {navList.map((navItem,i) => {
            return (
            <li key={navItem.id} 
                onClick={() => handleSelectFolder(i)} 
                ref={() => {selectedFoler.current[i] = navItem.id}} 
                className={selectedFoler.current[i] === currentSelectedFolder ?  "selected" : ""}
            >
              <p>
                <S.NavName>{navItem.name}</S.NavName>
                <S.LinkCount>{navItem.link?.count}개 링크</S.LinkCount>
              </p>
              {selectedFoler.current[i] === currentSelectedFolder && <img src={checkIcon} alt="폴더 선택 아이콘" />}
            </li>
            )
          })}
        </ul>
      </S.FolderList>
      {isLoading && <div>폴더 목록 불러오는중...</div>}
      {isLoading || <Button type="linkAdd_modal">추가하기</Button>}
    </S.Content>
  );
}

export default LinkAddContent;