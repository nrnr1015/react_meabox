import React, { useState, useEffect, useRef } from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"

import styled from 'styled-components';

const MiddleBanner = styled.div`
    padding: 0 16px;
    & a {
        display: block;
    }
`


const MainMiddleBanner = () => {
    
    return (
        <MiddleBanner className="MiddleBanner">
            <Link to="itemList_samsung"><img src="./img/main_middle_banner.png" alt=""/></Link>
        </MiddleBanner>
    )
}

export default MainMiddleBanner;