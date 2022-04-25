import React, {useState} from 'react';


function Event() {
	let [eventListImg, eventListImgChange] = useState([1,2,3])
	return(

		<div className="eventList">
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
		</div>

		
	)

	
}

function EventCard(props) {
	return(
		<li>
			<img src={'/img/thumb_mobileTopBannerImage' + (props.i) + '.jpg'} alt="" />
		</li>
	)
}

export default Event;