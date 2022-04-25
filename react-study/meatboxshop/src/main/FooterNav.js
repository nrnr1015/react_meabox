import React, { useState, useEffect, useRef } from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"

import styled from 'styled-components';



const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 4px 0;
    border-top: 1px solid #E8E8E8;
    background:#fff;
    z-index: 1;
    width: 100%;
    height: 48px;
    transition: .4s ease;
    &.hide {
        transform: translateY(48px);
    }
`;

const FooterUl = styled.ul`
`;

const FooterList = styled.li`
    float: left;
    width: 20%;
    &.home > a {
        background-image: url('./img/footer_home.png');
    }
    &.category > a {
        background-image: url('./img/footer_category.png');
    }
    &.mybox > a {
        padding: 0;
        background-image: url('./img/footer_mybox.png');
        background-size: 40px;
        text-indent: -9999px;
    }
    &.searchico > a {
        background-image: url('./img/footer_search.png');
    }
    &.mypage > a {
        background-image: url('./img/footer_profile.png');
    }
    & > a {
        display: block;
        height: 48px;
        padding-top: 26px;
        background-repeat: no-repeat;
        background-position: top center;
        background-size: 25px 24px;
        text-align: center;
        font-size: 10px;
        color: #111;
    }
`;

const FooterNav = () => {
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
        
    },[pageY]);

    return (
        <Footer className={hide && 'hide'}>
            <FooterUl className="footerul after">
                <FooterList className="home"><Link to="/homes">홈</Link></FooterList>
                <FooterList className="category"><Link to="/ccategoryyy">카테고리</Link></FooterList>
                <FooterList className="mybox"><Link to="/mybox">마이박스</Link></FooterList>
                <FooterList className="searchico"><Link to="/search">검색</Link></FooterList>
                <FooterList className="mypage"><Link to="/mypage">마이페이지</Link></FooterList>
            </FooterUl>   
        </Footer>
    )
}

export default FooterNav