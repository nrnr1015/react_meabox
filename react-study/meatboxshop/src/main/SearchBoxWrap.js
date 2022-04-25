import React, { useState, useEffect, useRef } from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"

import styled from 'styled-components';
import LogoCart from './LogoCart'

const SearchBoxWrap = styled.div`
position: ${props => props.show = 'relative' ? 'sticky':'relative'};
left:0;
top:0;
padding: 4px 16px 0;
width: 100%;
background-color: #fff;
    &.show .SearchInputBox {
        padding-right: 34px;
        -webkit-transition: all .2s ease;
        -moz-transition: all .2s ease;
        -o-transition: all .2s ease;
        transition: all .2s ease;
    }
    &.show .inputbox {
        padding: 0 14px;
        box-shadow: none;
    }
    &.show .inputico {
        display: none;
    }
    & .basket {
        opacity: 0;
    }
    &.show .basket {
        opacity: 1;
        -webkit-transition: opacity .5s ease;
        -moz-transition: opacity .5s ease;
        -o-transition: opacity .5s ease;
        transition: opacity .5s ease;
    }
`;


const HeaderWrap = styled.div`
color: #333;
transform: translateY(0);
transition: .4s ease;
    
`;

//  transform: ${props => props.hidden = 'fixed' ? 'translateY(-40px);':''} // position: ${props => props.shadow = 'hidden' ? 'fixed;':''}
const SearchInputBox = styled.div`
position: relative;
background: #fff;
`;

const InputSearch = styled.input `
width: 100%;
height: 44px;
background: #fff;
border-radius: 8px;
padding: 0 0 0 40px;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    ::placeholder {
        color: #999;
    }
`

const SearchButton = styled.button `
position: absolute;
left: 0; 
top: 0;
width: 40px;
height: 44px; 
text-align: center;
`

// const CartIco = styled.button `

// opacity: 0;
// `


const Header = () => {
    
    const [show, setShow] = useState(false);
    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);
    const scrollRef = useRef();
    
    const handleScroll = () => {
        if(!scrollRef.current) return;
        const { pageYOffset } = window;
        const scrollRefTop = scrollRef.current.offsetTop;
        const show = pageYOffset >= scrollRefTop;
        setShow(show);
        setPageY(pageYOffset);
    }

    useEffect(() => {
        
        documentRef.current.addEventListener('scroll', handleScroll);
        return () => documentRef.current.removeEventListener('scroll', handleScroll);
    },[]);
    

    
    return (
        <SearchBoxWrap className={show && 'show'} ref={scrollRef}>
            <HeaderWrap className="HeaderWrap">
                <SearchInputBox className="SearchInputBox">
                    <InputSearch className="inputbox" type="text" placeholder="무료배송, 익익배송은 기본! 희망일 배송일까지"></InputSearch>
                    <SearchButton type="button" className="inputico" id="kid">검색</SearchButton>
                    {/* <BasketArea className="basket">장바구니</BasketArea> */}
                   <LogoCart></LogoCart>
                </SearchInputBox>
            </HeaderWrap>
        </SearchBoxWrap>
        
    )
}

export default Header