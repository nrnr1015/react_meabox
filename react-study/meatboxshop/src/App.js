
import React, {useState, useEffect} from 'react';
import { Link, Route, Switch, withRouter,BrowserRouter as Router } from "react-router-dom"
//import $ from "jquery";
import './App.css';
import './common.css';
import $, { css } from "jquery";
import Maintabs from './component/Main.js';
import Detail from './component/Detail.js';
import MainPage from './main/MainPage.js';

import Green from './component/green';
import Event from './component/Event';
import Login from './component/Login';
import Category from './component/Category';
import itemProductList from './component/itemProductList';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const App = ({ location }) =>  {

	
	const currentKey = location.pathname.split('/')[1] || '/'
  	const timeout = { enter: 300, exit: 0 }

  return (
		<div className="App">
			<div className="container">
				<div className="contents">
				<Switch>
					<Route exact path="/" component={MainPage}/>
				</Switch>
				<Switch>
					<Route exact path="/Detail" component={Detail} />
				</Switch>
				<Switch>
					<Route exact path="/Login" component={Login} />
				</Switch>
				<Switch>
					<Route exact path="/Category" component={Category} />
				</Switch>
				<Switch>
					<Route exact path="/itemProductList" component={itemProductList} />
				</Switch>
				
				
										
				</div>
			</div>
			
			
		</div>
  );
}


export default withRouter(App)
