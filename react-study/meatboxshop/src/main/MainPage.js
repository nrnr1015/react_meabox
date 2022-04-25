import React, { useState, useEffect, useRef } from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"

import LogoTops from './LogoTops';
import LogoCart from './LogoCart';
import SearchBoxWrap from './SearchBoxWrap';
import FooterNav from './FooterNav';
import UserIntro from './UserIntro';

import HeaderNav from '../component/HeaderNav';
import SwipeableEdgeDrawer from '../component/ModalPopup';

import Container from './Container';


import styled from 'styled-components';


const MainContent = styled.div`
  height: 100%;
`

const LogoBoxWrap = styled.div`
  height: 48px;
  padding: 2px 16px;
  & a {
        display: block;
  }
`

const LogoBox = styled.div`
    position: relative;
    height: 48px;
`;

const MainProduct = () => {

  
  handleSidebarOpen = () => {
		this.setState({ openSidebar: true });
	  };
	
	  handleSidebarClose = () => {
		this.setState({ openSidebar: false });
	  };
	
	state = {
		index: 0,
	};

	handleChange = (event, value) => {
		this.setState({
		index: value,
		});
	};

	handleChangeIndex = index => {
		this.setState({
		index,
		});
	};
  
  
  return (
    
    <MainContent>
      <LogoBoxWrap>
        <LogoBox className="LogoBox">
          <LogoTops></LogoTops>
          <LogoCart></LogoCart>
        </LogoBox>
      </LogoBoxWrap>
      
      
      <UserIntro></UserIntro>
      <SearchBoxWrap ></SearchBoxWrap>
      <HeaderNav onSidebarOpen={this.handleSidebarOpen} />
      <SwipeableEdgeDrawer
			onClose={this.handleSidebarClose} 
			open={this.state.openSidebar}
			onOpen={this.handleSidebarOpen}
			/>
      <Container></Container>

      <FooterNav></FooterNav>
    </MainContent>
      
  )
}

export default MainProduct;

