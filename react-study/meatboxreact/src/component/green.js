import React from 'react';
import HeaderNav from './HeaderNav'
import FooterBar from './FooterBar.js';
import ItemList from './itemList.js';


function Green() {
	return(
		<div className="greenList">
			<HeaderNav></HeaderNav>
			<div className="navContent">
				식자재관
	           <ItemList></ItemList>
	        </div>
			<FooterBar></FooterBar>
		</div>
	)
}
export default Green;