import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';

const Hellow = styled.div`
    width: 100%;
    font-size: 30px
`;

const Search = styled.div`

    background: skyblue;
    z-index: 1;
    width: 100%;
    height: 40px;
    transition: .4s ease;
    transform: translateY(0px);
    &.hide {
        transform: translateY(-40px);
    }
`;

const FooterNav = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    background: pink;
    z-index: 1;
    width: 100%;
    height: 40px;
    transition: .4s ease;
    &.hide {
        transform: translateY(40px);
    }
`;

const MenuRecommon = styled.div`
    width: 100%;
    height: 20px;
    padding-top: 80px
`;

const MainProduct = () => {

  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  const handleScroll = () => {
      const { pageYOffset } = window;
      const deltaY = pageYOffset - pageY;
      const hide = pageYOffset !== 0 && deltaY >= 0;
      setHide(hide);
      setPageY(pageYOffset);
  }

  useEffect(() => {
      documentRef.current.addEventListener('scroll', handleScroll);
      return () => documentRef.current.removeEventListener('scroll', handleScroll);
  }, [pageY]);

  return (
    <div>
      <Hellow className="hello"> 
        안녕하세요. <br />
        고기조아님은 <br /> 실버회원입니다.
      </Hellow>
      <Search className={hide && 'hide'}>search Contents</Search>

      <div className="content">
        <MenuRecommon className="navTabs">추천 상생딜 </MenuRecommon>
      </div>
      <FooterNav className={hide && 'hide'}>푸터</FooterNav>
    </div>
      
  )
}

export default MainProduct

