import React, { useState, useEffect, useRef } from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import styled from 'styled-components';

const LogoImg = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    background-image: url('img/logo.png');
    width: 118px; 
    height: 19px;
    text-indent: -9999px;
`;
const LogoHeader = () => {
    
    return (
        <LogoImg className="LogoImg">
            <Link to="/mainPage">미트박스 로고</Link>
        </LogoImg>
       
        
    )
}

export default LogoHeader;