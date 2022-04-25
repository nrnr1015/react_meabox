import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';

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

const Search = () => {

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
    
      <Search className={hide && 'hide'}>search Contents</Search>

    </div>
      
  )
}

export default Search;

