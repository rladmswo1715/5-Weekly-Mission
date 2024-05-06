import * as S from './ShareModalContent.styled';
import { useEffect } from "react";
import icon_share_kakao from '../../../../assets/icon/icon_share_kakao.svg';
import icon_share_facebook from '../../../../assets/icon/icon_share_facebook.svg';
import icon_share_link from '../../../../assets/icon/icon_share_link.svg';


const SHARE_OPTION = {
  keyId : [ 1, 2, 3],
  img : [ icon_share_kakao, icon_share_facebook, icon_share_link ],
  imgAlt : [
      '카카오톡 아이콘',
      '페이스북 아이콘',
      '링크복사 아이콘'
  ],
  buttonName : [
    '카카오톡',
    '페이스북',
    '링크 복사'
  ]
}

const ShareModalContent = () => {

  useEffect(() => {
    window.Kakao.cleanup();
    window.Kakao.init('cae1ba4eba9abe8224f3933654a8ff05');
  },[]);

  const handleShareIcon = (shareOptionBtn) => {
    switch (shareOptionBtn) {
      case '카카오톡':
        shareKakao();
        break;
      case '페이스북':
        
        break;
      case '링크 복사':
        shareLink();
        break;
      default: 
        break;
    }
  }

  const shareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '폴더 공유',
        description: '폴더 공유',
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          webUrl: 'http://localhost:3000',
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'http://localhost:3000',
            //webUrl: 'http://localhost:3000',
          },
        },
      ],
    })
  }

  const shareLink = async() => {
      try{
        await(navigator.clipboard.writeText(window.location.href));
        alert('주소가 복사되었습니다.');
      }catch(error) {
        alert('주소 복사 실패..');
      }
  }


  return (
    <>
      {SHARE_OPTION.buttonName.map((shareOptionBtn, i) => {
          return (
            <>
              <S.ShareContent key={shareOptionBtn} onClick={() => handleShareIcon(shareOptionBtn)}>
                <img src={SHARE_OPTION.img[i]} alt={SHARE_OPTION.imgAlt[i]} />
                <span>{shareOptionBtn}</span>
              </S.ShareContent>
            </>
          )
      })}
    </>
  )
}

export default ShareModalContent;