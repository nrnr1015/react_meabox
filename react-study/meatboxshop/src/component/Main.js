
import React, {useState, useEffect} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"

import HeaderNav from './HeaderNav';
import FooterBar from './FooterBar';
import Event from './Event';
import Depth1 from './Depth1';
import SwipeableEdgeDrawer from './ModalPopup';
import Main_rolling from './Main_rolling';

import SlidePopup from './SlidePopup';
// import ItemList from './itemList';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/swiper.scss';

		const styles = {
		
			tabs: {
				background: '#FEA900',
			},
			slider: {
				color: 'pink',
				minHeight: 40,
				backgroundColor: '#B3DC4A',
			},
			slide: {
				padding: 0,
				minHeight: 100,
				backgroundColor: '#f5f7f8',
			},
			slide1: {
				backgroundColor: '#fff',
			},
			slide2: {
				backgroundColor: '#B3DC4A',
			},
			slide3: {
				backgroundColor: '#6AC0FF',
			},
			slide4: {
				backgroundColor: '#6AC0FF',
			},
		};

class Maintabs extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 	  openSidebar: false
	// 	};
	//   }
	
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

	render() {
		const { index } = this.state;
		return (
		<div className="MainContens ContetsHeader">

			<HeaderNav onSidebarOpen={this.handleSidebarOpen} />
			<SwipeableEdgeDrawer
			onClose={this.handleSidebarClose} 
			open={this.state.openSidebar}
			onOpen={this.handleSidebarOpen}
			/>

			<Tabs className="main_tabs" value={index} fullWidth onChange={this.handleChange}>
				<Tab label="홈" />
				<Tab label="식자재관" />
				<Tab label="대량특가" />
				<Tab label="홈쿡" />
				<Tab label="이벤트" />
			</Tabs>
			<SwipeableViews enableMouseEvents index={index} onChangeIndex={this.handleChangeIndex}>
				<div style={Object.assign({}, styles.slide, styles.slide1)}>
				
				<Depth1></Depth1>


				<Main_rolling></Main_rolling>
				<div className="recommend-roll">
					<h3 class="h-level1">최근 본 상품</h3>
					<Swiper className="prd-list-wrap"
					touchMoveStopPropagation = {true}
					slidesPerView={3.89}
					freeMode
					>
						<SwiperSlide>

							<div class="m-prd-info">
									<Link to="Detail" >
										<div class="m-info-top"><div class="info-img"><img src="https://img.meatbox.co.kr/m/images/itemImage/2020/01/13/11/38/mo_thumb_productThumbnail_114301_20200113113814.jpg" alt="" /><span class="c-type01">최저가</span></div><div class="info-txt"><p class="info-top"><span class="k-type k-type01">냉동</span><span>수입돼지</span><span>세절&amp;분쇄</span></p><p class="title">[설날]등심 불고기 선물세트 2kg</p><p class="price"><strong>8,590원~  <span>8,590원~ </span> </strong></p></div></div>
									</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>					
							<div class="m-prd-info"><a href="javascript:;"><div class="m-info-top"><div class="info-img"><img src="https://img.meatbox.co.kr/m/images/itemImage/2020/01/13/11/38/mo_thumb_productThumbnail_114301_20200113113814.jpg" alt="" /><span class="c-type01">최저가</span></div><div class="info-txt"><p class="info-top"><span class="k-type k-type01">냉동</span><span>수입돼지</span><span>세절&amp;분쇄</span></p><p class="title">[설날]등심 불고기 선물세트 2kg</p><p class="price"><strong>8,590원~  <span>8,590원~ </span> </strong></p></div></div></a></div>
						</SwiperSlide>
						<SwiperSlide>					
							<div class="m-prd-info"><a href="javascript:;"><div class="m-info-top"><div class="info-img"><img src="https://img.meatbox.co.kr/m/images/itemImage/2020/01/13/11/38/mo_thumb_productThumbnail_114301_20200113113814.jpg" alt="" /><span class="c-type01">최저가</span></div><div class="info-txt"><p class="info-top"><span class="k-type k-type01">냉동</span><span>수입돼지</span><span>세절&amp;분쇄</span></p><p class="title">[설날]등심 불고기 선물세트 2kg</p><p class="price"><strong>8,590원~  <span>8,590원~ </span> </strong></p></div></div></a></div>
						</SwiperSlide>
						<SwiperSlide>					
							<div class="m-prd-info"><a href="javascript:;"><div class="m-info-top"><div class="info-img"><img src="https://img.meatbox.co.kr/m/images/itemImage/2020/01/13/11/38/mo_thumb_productThumbnail_114301_20200113113814.jpg" alt="" /><span class="c-type01">최저가</span></div><div class="info-txt"><p class="info-top"><span class="k-type k-type01">냉동</span><span>수입돼지</span><span>세절&amp;분쇄</span></p><p class="title">[설날]등심 불고기 선물세트 2kg</p><p class="price"><strong>8,590원~  <span>8,590원~ </span> </strong></p></div></div></a></div>
						</SwiperSlide>
						<SwiperSlide>					
							<div class="m-prd-info"><a href="javascript:;"><div class="m-info-top"><div class="info-img"><img src="https://img.meatbox.co.kr/m/images/itemImage/2020/01/13/11/38/mo_thumb_productThumbnail_114301_20200113113814.jpg" alt="" /><span class="c-type01">최저가</span></div><div class="info-txt"><p class="info-top"><span class="k-type k-type01">냉동</span><span>수입돼지</span><span>세절&amp;분쇄</span></p><p class="title">[설날]등심 불고기 선물세트 2kg</p><p class="price"><strong>8,590원~  <span>8,590원~ </span> </strong></p></div></div></a></div>
						</SwiperSlide>
						<SwiperSlide>					
							<div class="m-prd-info"><a href="javascript:;"><div class="m-info-top"><div class="info-img"><img src="https://img.meatbox.co.kr/m/images/itemImage/2020/01/13/11/38/mo_thumb_productThumbnail_114301_20200113113814.jpg" alt="" /><span class="c-type01">최저가</span></div><div class="info-txt"><p class="info-top"><span class="k-type k-type01">냉동</span><span>수입돼지</span><span>세절&amp;분쇄</span></p><p class="title">[설날]등심 불고기 선물세트 2kg</p><p class="price"><strong>8,590원~  <span>8,590원~ </span> </strong></p></div></div></a></div>
						</SwiperSlide>
						<SwiperSlide>					
							<div class="m-prd-info"><a href="javascript:;"><div class="m-info-top"><div class="info-img"><img src="https://img.meatbox.co.kr/m/images/itemImage/2020/01/13/11/38/mo_thumb_productThumbnail_114301_20200113113814.jpg" alt="" /><span class="c-type01">최저가</span></div><div class="info-txt"><p class="info-top"><span class="k-type k-type01">냉동</span><span>수입돼지</span><span>세절&amp;분쇄</span></p><p class="title">[설날]등심 불고기 선물세트 2kg</p><p class="price"><strong>8,590원~  <span>8,590원~ </span> </strong></p></div></div></a></div>
						</SwiperSlide>
						<SwiperSlide>					
							<div class="m-prd-info"><a href="javascript:;"><div class="m-info-top"><div class="info-img"><img src="https://img.meatbox.co.kr/m/images/itemImage/2020/01/13/11/38/mo_thumb_productThumbnail_114301_20200113113814.jpg" alt="" /><span class="c-type01">최저가</span></div><div class="info-txt"><p class="info-top"><span class="k-type k-type01">냉동</span><span>수입돼지</span><span>세절&amp;분쇄</span></p><p class="title">[설날]등심 불고기 선물세트 2kg</p><p class="price"><strong>8,590원~  <span>8,590원~ </span> </strong></p></div></div></a></div>
						</SwiperSlide>
						<SwiperSlide>					
							<div class="m-prd-info"><a href="javascript:;"><div class="m-info-top"><div class="info-img"><img src="https://img.meatbox.co.kr/m/images/itemImage/2020/01/13/11/38/mo_thumb_productThumbnail_114301_20200113113814.jpg" alt="" /><span class="c-type01">최저가</span></div><div class="info-txt"><p class="info-top"><span class="k-type k-type01">냉동</span><span>수입돼지</span><span>세절&amp;분쇄</span></p><p class="title">[설날]등심 불고기 선물세트 2kg</p><p class="price"><strong>8,590원~  <span>8,590원~ </span> </strong></p></div></div></a></div>
						</SwiperSlide>
						<SwiperSlide>					
							<div class="m-prd-info"><a href="javascript:;"><div class="m-info-top"><div class="info-img"><img src="https://img.meatbox.co.kr/m/images/itemImage/2020/01/13/11/38/mo_thumb_productThumbnail_114301_20200113113814.jpg" alt="" /><span class="c-type01">최저가</span></div><div class="info-txt"><p class="info-top"><span class="k-type k-type01">냉동</span><span>수입돼지</span><span>세절&amp;분쇄</span></p><p class="title">[설날]등심 불고기 선물세트 2kg</p><p class="price"><strong>8,590원~  <span>8,590원~ </span> </strong></p></div></div></a></div>
						</SwiperSlide>
					</Swiper>
				</div>

					

					{/* <ItemList></ItemList> */}
					
				</div>
				<div style={Object.assign({}, styles.slide, styles.slide2)}>
				식자재관
				</div>
				<div style={Object.assign({}, styles.slide, styles.slide3)}>대량특가</div>
				<div style={Object.assign({}, styles.slide, styles.slide4)}>홈쿡</div>
				<div style={Object.assign({}, styles.slide, styles.slide5 )}><Event></Event></div>
			</SwipeableViews>
			
			<SlidePopup></SlidePopup>
			<FooterBar></FooterBar>
		</div>
		);
	}
}


  export default Maintabs;