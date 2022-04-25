
import { useState, useEffect } from 'react';
import $ from 'jquery';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { 
    Navigation, 
    Pagination, 
    Scrollbar, 
    Autoplay,
    A11y 
  } from "swiper"; //*
  SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]); // *

function ItemProductList() {
	useEffect(()=>{
		$('.m-prd-info .btn-more').on('click', function () {
			var btnThis = $(this);
			var thisLI = $(this).closest('.prd-list');
			var hiddenBox = btnThis.closest('.m-prd-info').next('.h-prd-info');
			var className = 'active';
		
			if (hiddenBox.hasClass(className)) {
				hiddenBox.slideUp();
				hiddenBox.removeClass(className);
				btnThis.removeClass(className);
			} else {
				
				hiddenBox.slideDown();
				hiddenBox.addClass(className);
				btnThis.addClass(className);
				//$("#mainSwiper_wrap .auto-height").css({'height' : Heightplus})
				if ($('body').find('.rmd-btn-wrap').length !== 0) {
					$('html,body').stop().animate({
						'scrollTop': thisLI.offset().top - 86
					});
				} else {
					$('html,body').stop().animate({
						'scrollTop': thisLI.offset().top - $('header').outerHeight()
					});
				}
			}
		});

	});
	return(
		<div className="itemproduct_list">
			<ul className="prd-list-wrap">
				<ItemProductCard></ItemProductCard>
				<Swiper 
					className="r-prd-total-wrap"
					touchMoveStopPropagation = {true}
					slidesPerView={1}
					loop = {true}
					pagination
					>
						<SwiperSlide className="r-prd-list">
							<dl>
								<dt>가공일자</dt>
								<dd>2018.10.03</dd>
								<dt>재고</dt>
								<dd>32박스</dd>
								<dt>중량</dt>
								<dd>19.69 ~ 28.53kg</dd>
							</dl>
						</SwiperSlide>
						<SwiperSlide className="r-prd-list">
							<dl>
								<dt>가공일자</dt>
								<dd>2018.10.03</dd>
								<dt>재고</dt>
								<dd>32박스</dd>
								<dt>중량</dt>
								<dd>19.69 ~ 28.53kg</dd>
							</dl>
						</SwiperSlide>
						<SwiperSlide className="r-prd-list">
							<dl>
								<dt>가공일자</dt>
								<dd>2018.10.03</dd>
								<dt>재고</dt>
								<dd>32박스</dd>
								<dt>중량</dt>
								<dd>19.69 ~ 28.53kg</dd>
							</dl>
						</SwiperSlide>
					</Swiper>
			</ul>
		</div>
		
	)
}

function ItemProductCard(props) {
	return(
		<li class="prd-list">
			<div class="m-prd-info">
				<div class="m-info-top">
					<div class="info-img">
						<img src="/img/mo/tmp/img_prd01.jpg" alt=""/>
						<span class="c-type03">묶음</span>
					</div>
					<div class="info-txt">
						<p class="info-top">
							<span class="k-type k-type02">동결</span>
							<span>수입소</span>
							<span>원물</span>
						</p>
						<p class="title">토마호크(카우보이립) - 미국 - 오로라 앵거스 비프(788) - 초이스(앵거스)</p>
						<p class="price">
							<strong>8,590원~ <span>kg당</span> </strong>
						</p>
					</div>
					<div class="package-price">해당 상품은 박스당 54,900원 입니다.</div>
				</div>
				<div class="m-info-bottom">
					<p class="info-sdp">
						<span class="score">4.8(12)</span>
						<span class="delivery-pay">무료배송</span>
						<span class="delivery-pay">카드가능</span>
					</p>
					<a href="javascript:;" class="btn-more">더보기</a>
				</div>
			</div>
			<ul class="h-prd-info">
				<li>
					<p class="price-top">
						<strong class="price">8,590원 <span>kg당</span> </strong>
						<strong class="compare">이전구매 대비 <span class="up">510원</span> </strong>
					</p>

					
				
					<div class="btn-wrap">
						<a href="javascript:;" class="btn-buy"><span>170,073원</span> 묶음배송담기</a>
					</div>
				</li>
			</ul>
		</li>
	)
}

export default ItemProductList;