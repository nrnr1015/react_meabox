import React, {useState} from 'react';
import HeaderNav from './HeaderNav'
import FooterBar from './FooterBar.js';

function Event() {
	let [eventListImg, eventListImgChange] = useState([1,2,3])
	return(

		<div className="eventList">
			<HeaderNav></HeaderNav>
			<div className="navContent">
				<ul className="evnet-list">
					{
						eventListImg.map(function (a,i) {
							return(
								<EventCard eventListImg={eventListImg[i]} i={i} key={i}/>
							)
						})
					}
				
				</ul>
	        </div>
			<FooterBar></FooterBar>
		</div>

		
	)

	
}

function EventCard(props) {
	return(
		<li>
			<img src={'img/thumb_mobileTopBannerImage' + (props.i) + '.jpg'} alt="" />
		</li>
	)
}

export default Event;