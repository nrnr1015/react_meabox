
import React, {useState, useEffect} from 'react';
import HeaderNav from './HeaderNav';
import FooterBar from './FooterBar';
import ItemList from './itemList';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import { Swiper, SwiperSlide } from 'swiper/react';


const VirtualizeSwipeableViews = virtualize(SwipeableViews);
function slideRenderer(params) {
	const { index, key } = params;
  
	switch (mod(index, 3)) {
	  case 0:
		return (
		  <div key={key} style={Object.assign({}, styles.slider, styles.slide12)}>
			slide n°1
		  </div>
		);
  
	  case 1:
		return (
		  <div key={key} style={Object.assign({}, styles.slider, styles.slide22)}>
			slide n°2
		  </div>
		);
  
	  case 2:
		return (
		  <div key={key} style={Object.assign({}, styles.slider, styles.slide32)}>
			slide n°3
		  </div>
		);
  
	  default:
		return null;
	}
  }
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
			color: '#fff',
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
		slide5: {
			backgroundColor: '#6AC0FF',
		},
	};

class Maintabs extends React.Component {
	// CategoryItem = (a, i) => {
	// 			var array = [];
	// 			var name=['소','돼지','닭·오리','양','육가공품','공산품','농산물','수산물']
	// 			for (var i = 0; i < 8; i++) {
	// 				array.push(
	// 					<li>
	// 						<Link to="/category">
	// 							<img src={'img/icon_m_category' + i  + '.png'} alt="" /><span>{name[i]}</span>
	// 						</Link>
	// 					</li>
	// 				)
	// 			}
	// 			return array
	// 		}
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
		<div>
			<HeaderNav></HeaderNav>

			<Tabs value={index} fullWidth onChange={this.handleChange}>
				<Tab label="홈" />
				<Tab label="식자재관" />
				<Tab label="대량특가" />
				<Tab label="홈쿡" />
				<Tab label="이벤트" />
			</Tabs>
			<SwipeableViews enableMouseEvents index={index} onChangeIndex={this.handleChangeIndex}>
				<div style={Object.assign({}, styles.slide, styles.slide1)}>
					
				<div className="recommend-roll">
					<Swiper className="prd-list-wrap"
					spaceBetween={14}
					slidesPerView={3.2}
					freeMode
					
					>
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
					<VirtualizeSwipeableViews enableMouseEvents slideRenderer={slideRenderer} />
				</div>
				<div style={Object.assign({}, styles.slide, styles.slide2)}>
				식자재관
				</div>
				<div style={Object.assign({}, styles.slide, styles.slide3)}>대량특가</div>
				<div style={Object.assign({}, styles.slide, styles.slide4)}>홈쿡</div>
				<div style={Object.assign({}, styles.slide, styles.slide5 )}>이벤트</div>
			</SwipeableViews>
			
			<FooterBar></FooterBar>
		</div>
		);
	}
}

export default Maintabs;