import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

function HeaderNav() {
	
	return(
	
		
		<div className="header-area">
			<header className="header-main"> 
				<div className="h-ico menu-ctg">
					<Link to="/category" ><span className="hidden">카테고리</span></Link>
				</div>
				<h1 className="logo">
					<Link to="/" ><span className="hidden">MEATBOX</span></Link>
				</h1>
				<div className="h-ico basket">
					<Link to="/basket" >
						<span className="hidden">장바구니</span>
						<span className="count">10</span>
					</Link>
				
				</div>
			</header>
			<div className="search">
				<div className="is-expand">
					<input type="text"></input>
					<button type="button">검색</button>
				</div>
			</div>
		</div>
	)
	
}


export default HeaderNav;