import React, {useState, useEffect} from 'react';

import $, { css } from "jquery";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"


function Depth1() {
	
	useEffect(()=>{

		// document.addEventListener("DOMContentLoaded", function(event) { 
		// 	$('.ty-category').children().on('click', function(){
		// 		$(this).addClass('onononddd');
		// 		var manulength = $('.ty-category li').prevAll().length * 60;
		// 		$(this).parent().stop().animate({scrollLeft : manulength})
		// 		return false;
		// 	});
		// });
		
		
	});	

	
	function CategoryUi(a,i) {
		
        var forArray = [];
		var name=['','소','돼지','닭·오리','양','육가공품','공산품','농산물','수산물'];

		
        for (var i = 1; i <= 8; i++) {
            forArray.push(
				<li className={'ty-category' + i} id={'category' + i} data-title={'sdsd' + i}
				
				>
	 				<Link to="/category">
						<img src={'img/icon_m_category' + i + '.png'} alt="" /><span>{name[i]}</span>
	 				</Link>
	 			</li>
				 
			);

			
        }
        return forArray;
    }
	
	return(

		<div className="slider-gnb">
			<div className="slider-for">
				<ul className="ty-category">
					{CategoryUi()}
				</ul>
			</div>
		</div>		
	)
}

export default Depth1;