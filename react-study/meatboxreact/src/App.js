
import React, {useState, useEffect} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import $ from "jquery";
import './App.css';
import Maintabs from './component/Main.js';
import Green from './component/green';
import Event from './component/Event';

function App() {
	useEffect(()=>{
		// $('.nav_menu a').on('click',function () {
		// 	$(this).addClass('on')
		//   });
	});
  return (
		<div className="App">
			<div className="container">
				<div className="navContent">
				
					<Switch>
						<Route exact path="/" component={Maintabs} />
					</Switch>
					<Switch>
						<Route path="/green" component={Green} />
					</Switch>
					<Switch>
						<Route path="/event" component={Event} />
					</Switch>
				</div>
			</div>
			
			
		</div>
  );
}


export default App;
