import React, { useState, useEffect, useRef } from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import CategoryMainList from './CategoryMainList';
import MainMiddleBanner from './MainMiddleBanner';
import ItemListTabs from './ItemListTabs';
import TitleStyle from './TitleStyle';

import styled from 'styled-components';

const ContentDiv = styled.div`
    height: 100%;
`

const Container = () => {
    
    return (
        <ContentDiv className="ContentDiv">
            <CategoryMainList></CategoryMainList>
            <MainMiddleBanner></MainMiddleBanner>

            <TitleStyle></TitleStyle>
            <ItemListTabs></ItemListTabs>

            
        </ContentDiv>
        
    )
}

export default Container;