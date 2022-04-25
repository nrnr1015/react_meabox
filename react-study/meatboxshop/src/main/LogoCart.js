import React, { useState, useEffect, useRef } from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"

import styled from 'styled-components';

const CartIco = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 34px; 
    height: 40px;
    background-image: url('img/btn_buy.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px;
    text-indent: -9999px;
    & a {
        display: block;
    }
`;
const LogoHeader = () => {
    
    return (
        <CartIco className="basket"><Link to="/cartPage">장바구니</Link></CartIco>
    )
}

export default LogoHeader;