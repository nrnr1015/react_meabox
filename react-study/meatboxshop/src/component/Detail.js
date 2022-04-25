import React, {useState, useEffect} from 'react';
import { Link} from "react-router-dom"

import $, { css } from "jquery";
import HeaderNav from './HeaderNav'
import SwipeableViews from 'react-swipeable-views';
const styles = {
	slide: {
	  //slide style
	},
	slide1: {
	  backgroundColor: '#FEA900',
	},
	slide2: {
	  backgroundColor: '#B3DC4A',
	},
	slide3: {
	  backgroundColor: '#6AC0FF',
	},
  };
function Detail() {
	useEffect(()=>{
		var defaultWidth = $('.FixedImgArea').outerWidth();
		$('.FixedImgAreaCenter').width(defaultWidth).height(defaultWidth);
		// 이미지 높이값 만큼 간격 부여
		$('.FixedContentArea').css({ 'padding-top' : $('.FixedImgArea').outerWidth()})
		$(window).on("scroll", function() {
			$('.FixedContentArea').css({ 'padding-top' : $('.FixedImgArea').outerWidth() + 6})
			//var FixedImgAreaHeight = $('.FixedImgArea img').outerHeight();
			//var FixedImgAreaWidth = $('.FixedImgArea').outerWidth();
			var FixedImgAreaWidth = $('.FixedImgArea').outerWidth() - 38;
			//var scaletransform =Math.min(40, $(document).scrollTop());
			// 스크롤 하면 이벤트 발생
			//var scaletransform =Math.min(200, $(document).scrollTop());
			var scaleImg = FixedImgAreaWidth - Math.min(FixedImgAreaWidth, $(document).scrollTop()) + 38
			var radius = Math.min(50, $(document).scrollTop());
			var tops = Math.min(6, $(document).scrollTop());
				
			if($(window).scrollTop() > 0){
				$(".FixedImgAreaCenter").width(scaleImg).height(scaleImg).css({'marginTop':tops});
				$(".slideimg img").css({'border-radius' : radius});
				//var scaleImg = FixedImgAreaWidth - Math.min(FixedImgAreaWidth, $(document).scrollTop()) + 38;
					
				if($(window).scrollTop() > $('.p-info-wrap').offset().top - 50){
					$('.HeaderArea, .FixedImgArea').addClass('fixed');
				}else{
					$('.HeaderArea , .FixedImgArea').removeClass('fixed');
					$(".FixedImgAreaCenter").css({
						'right' : '50%' ,
						"transform":"translate(50%, 0)"
					});
				}
			}else{
				$(".slideimg img").css({'border-radius' : 0});
				$(".FixedImgAreaCenter").width(scaleImg ).height(scaleImg).css({'marginTop':'0'});;
			}

			if($(window).scrollTop() > $('.price').offset().top - 50){
				$(".FixedImgAreaCenter").css({
					'right' : '14px' ,
					"transform":"translate(0%, 0)",
					"transition": "all 0.3s ease-in-out"
				});
				$('.HeaderArea h1').addClass('show');	
			 }else if($(window).scrollTop() > $('.title').offset().top - 50){
				$(".FixedImgAreaCenter").css({
					'right' : '50%' ,
					"transform":"translate(50%, 0)",
					//"transition": "all 1.5s ease-in-out"
				});
				$('.HeaderArea h1').removeClass('show');					
			 }else if($('.HeaderArea').hasClass('fixed') === false){
			 	$(".FixedImgAreaCenter").css({
			 		"transition": "inherit"
			 	});
			 }
			
			if($(window).scrollTop() > $('.detail_info').offset().top - 50){
				$('.HeaderArea h1').css({
					'transform' : 'translate(-50%, -50px)',
					'transition': '0.12s linear'
				});  
				$('.Tabs').addClass('fixed');  
			}else{
				$('.HeaderArea h1').css({
					'transform' : 'translate(-50%, 0)',
					'transition': '0.12s linear'
				});  
				$('.Tabs').removeClass('fixed');  
			}
			$('.detail_notice h3').on('click', function(){
				$('.notice_contents').show();
				var offset = $(".detail_notice").offset();
				$('html, body').animate({scrollTop : offset.top - 50},);
			});	
			// function Move(){
			// 	function Move(e) {
			// 		var offset = $("#tab" + seq).offset();
			// 		$('html, body').animate({scrollTop : offset.top - 106}, 400);
			// 	}
			// }
			

		});
	});

	return(
		<div className="DetailWrap ">
			
			<div className="HeaderArea">
				<Link to="/" className="historyback">
					<img src="https://m.meatbox.co.kr/img/mo/ico/icon_back1.png" alt="" />
				</Link>
				<h1 class="h-tit">BBQ등갈비 - 미국 - 엑셀(86E) - 언그레이드</h1>
				{/* <button type="button" class="kakao_share">공유하기</button> */}

				<div className="Tabs">
					<div className="tabs_title1 on">
						상세설명
					</div>
					<div className="tabs_title2">
						리뷰
					</div>
				</div>
			</div>
			<div className="FixedImgArea">
				<SwipeableViews enableMouseEvents className="FixedImgAreaCenter">
					<div className="slideimg" style={Object.assign({}, styles.slide, styles.slide1)}>
						<img src="https://img.meatbox.co.kr/m/images/itemImage/2020/12/14/15/52/thumb_product_160885_1_20201214155226.jpg" alt=""/>
					</div>
					<div className="slideimg" style={Object.assign({}, styles.slide, styles.slide2)}>
						<img src="https://img.meatbox.co.kr/m/images/itemImage/2020/12/14/15/52/thumb_product_160885_2_20201214155226.jpg" alt=""/>
					</div>
					<div className="slideimg" style={Object.assign({}, styles.slide, styles.slide3)}>
						<img src="https://img.meatbox.co.kr/m/images/itemImage/2020/12/14/13/42/thumb_product_160885_3_20201214134243.png" alt=""/>
					</div>
				</SwipeableViews>
			</div>

			<div className="FixedContentArea">

				<div class="p-info-wrap">
					<p class="info-top">
						<span class="k-type k-type04">실온</span>
						<span>수입소</span>
						<span>원물</span>
					</p>
					<p class="title">BBQ등갈비 - 미국 - 엑셀(86E) - 언그레이드</p>
					<p class="price">
						<strong>8,590원~ <span>kg당</span> </strong>
						<span class="rate_info">
							<em class="rate">38%</em>
							<del>9,320원</del>
						</span>
					</p>
					<div class="package-price">해당 상품은 박스당 54,900원 입니다.</div>
				</div>
				

				<div className="detail_info">
					<div id="tab">
						<div id="tab1" class="goods-info">
							<div class="prd_images">
								<div class="img_wrapper">
									<div class="zoomPinch">
										<div class="zoomimg">
											<div class="goods_information_wrap">
												<div class="goods_infomation_content">
													<div class="goods_title_area">
														<div class="goods_title_box">
															<em>이제 집에서도 만나는</em>
															<h2>미트박스홈 고깃집 된장찌개</h2>
														</div>
														<div class="goods_title_info">
															<p>집에서 하면 내기 어려웠던 비밀의 맛, 고깃집 된장찌개입니다. 재래식 된장소스와 다시마, 대파, 표고가 만나 진하고 완성도 높은 국물을 만들었습니다. 우삼겹의 깊이와 튀긴 두부의 부드러움까지 더해진 된장찌개를 만나보세요.</p>
															<video autoplay="autoplay" muted="muted" loop="loop" type="video" playsinline > 
																<source src="./img/goods_info/djs_video1.mp4" type="video/mp4" />
															</video>
														</div>
													</div>
													<div class="goods_recipe">
														<h5>미트박스 노트</h5>
														<ul class="info_list">
															<li>
																<strong>맵기</strong> 
																<span>■ □ □ □ □</span>
															</li>
															<li>
																<strong>난이도</strong> 
																<span>■ ■ □ □ □</span>
															</li>
															<li>
																<strong>인원</strong> 
																<span>1~2명</span>
															</li>
															<li>
																<strong>조리시간</strong> 
																<span>15분</span>
															</li>
															<li>
																<strong>언제</strong> 
																<span>구수하면서도 맵지 않은 국물이 당길 때</span>
															</li>
														</ul>
													</div>
													<div class="goods_numbers">
														<div class="goods_numberings">
															<strong class="numbers">01</strong>
															<div class="goods_explanation">
																<img src="./img/goods_info/djs_img1.jpg" alt="상세 이미지" />
																<strong>된장찌개의 맛의 근원, 우삼겹</strong>
																<p>우삼겹은 소의 배쪽 부위살로 지방과 살코기가 교차해 맛이 진하고 부드럽습니다. 얇게 썰어 먹으면 지방의 고소한 맛을 충분히 느낄 수 있습니다.</p>
																<p>진한 육수를 위한 다시마, 대파, 표고의 협업에 전통이 느껴지는 재래식 된장 소스를 더해 진한 국물 맛을 즐길 수 있습니다.</p>
																
															</div>
															<div class="goods_explanation">
																<div class="video_img">
																	<video autoplay="autoplay" muted="muted" loop="loop" type="video" playsinline > 
																		<source src="./img/goods_info/djs_video2.mp4" type="video/mp4" />
																	</video>
																	<img src="./img/goods_info/djs_img2.jpg" alt="상세 이미지" />
																</div>
																<strong>짧은 유통기한? 이제 걱정 NO!</strong>
																<p>갑자기 생긴 저녁 약속, 야근 때문에 냉장실에 넣어놨던 밀키트 재료가 상해 먹지도 못하고 버린 경험 있으시죠? 아까워서 눈물 을 머금었던 지난날들과 이제는 이별하세요.</p>
																<p>특수 공법을 이용해 재료를 빠르게 얼려 유통기한을 6개월까지 대폭 늘렸어요. 이제 냉동실에 넣어두고 내가 원할 때 언제든 꺼내서 만들어 먹을 수 있습니다.</p>
															</div>
														</div>
														<div class="goods_numberings">
															<strong class="numbers">02</strong>
															<div class="goods_explanation">
																<img src="./img/goods_info/mibak_story1.jpg" alt="상세 이미지" />
																<strong>미트박스홈 스토리</strong>
																<p>미트박스홈은 사장님들의 No.1 축산물 직거래 플랫폼 미트박스가 합리적인 가격은 유지하고, 부담이 되는 용량은 줄여 누구나 접할 수 있도록 준비한 개인회원·소용량 전문 브랜드입니다</p>
															</div>
															<div class="goods_explanation">
																<div class="img_half">
																	<img src="./img/goods_info/mibak_story2.jpg" alt="상세 이미지" />
																	<img src="./img/goods_info/mibak_story3.jpg" alt="상세 이미지" />
																</div>
																<strong>철저한 위생, 최고의 품질</strong>
																<p>식품안전관리인증(HACCP)과 CESCO의 3천여 가지 엄격한 기준으로 진단된 위생적인 조리환경에서 생산 및 출고됩니다. 발송 전 상품이나 포장에 이상은 없는지 철저하게 품질을 점검해 항상 최상의 제품을 선보이려 노력합니다.</p>
															</div>
														</div>
														<div class="goods_numberings">
															<strong class="numbers">03</strong>
															<div class="goods_explanation">
																<img src="./img/goods_info/djs_img3.jpg" alt="상세 이미지" />
																<strong>이렇게 구성되어 있어요</strong>
																<p>우삼겹, 애호박, 표고버섯, 된장찌개 소스, 두부튀김, 다진마늘, 대파, 다시마</p>
															</div>
														</div>
														<div class="goods_numberings">
															<strong class="numbers">04</strong>
															<div class="goods_explanation">
																<div class="video_img">
																	<video autoplay="autoplay" muted="muted" loop="loop" type="video" playsinline > 
																		<source src="./img/goods_info/djs_video3.mp4" type="video/mp4" />
																	</video>
																	<img src="./img/goods_info/djs_img_re1.jpg" alt="상세 이미지" />
																</div>
																<strong>이렇게 만들어요</strong>
																<p>① 센 불로 달군 냄비에 우삼겹, 다진 마늘을 넣고 1분~1분 30초 간 볶아주세요.</p>
																<p>② 두부튀김을 제외한 모든 재료와 물 800ml(종이컵 4컵 반)를 넣고 센 불로 10분 간 끓여주세요.</p>
																<p>③ 두부튀김을 넣고 2분 더 끓인 후 맛있게 드세요!</p>
															</div>
															<div class="goods_explanation">
																<img src="./img/goods_info/djs_img4.jpg" alt="상세 이미지" />
																<strong>이렇게 즐겨보세요</strong>
																<p>남은 된장찌개에 냉장고에 있는 된장 1큰술을 더 넣고, 약불에 은근히 끓이면 강된장이 완성됩니다. 다양한 재료를 더해 밥에 넣고 함께 비벼드시면 더욱 맛있게 드실 수 있습니다.</p>
															</div>
														</div>
														<div class="goods_numberings">
															<strong class="numbers">05</strong>
															<div class="goods_explanation">
																<img src="./img/goods_info/djs_img5.jpg" alt="상세 이미지" />
																<p>아이스팩이 녹아 있더라도 냉기가 느껴진다면 배송과정에서 보냉이 잘 유지된 것이니 안심하고 드셔도 됩니다.</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="btn-moreInfo">
								<button type="button"></button>
							</div>
						</div>
						<div id="tab2">
							리뷰
						</div>
					</div>

					{/* 아코디언 영역 */}
					<div className="detail_notice">
						<h3 className="accdion_title">유의사항</h3>
						<div className="notice_contents">
							<div class="content-box bgc-w plr0 inc-note">
								<h3 class="h-level4 ls-dot3">배송지 선택시 주의사항</h3>
								<div class="note">
									<p class="txt-type01 pdb10">저희 미트박스는 전국 시,구에서 주문하신 상품은 신선배송(냉동차량배송)을 통해 신선함을 유지하여 배송하고 있습니다 (일부 지역 제외)</p>
									<p class="txt-type01 pdb10">배송지가 신선배송(냉동차량배송) 지역이여도 매장이 아닌 아파트, 빌라, 오피스텔 등 주거지로 주문한 경우 택배로 배송처리 됩니다. (3층 이상 매장인 경우도 택배 배송)</p>
									<p class="txt-type01">일부 지역은 배송 가능 요일이 다르기 때문에 <span class="txt-bold">[배송지역검색]</span>에서 배송 받으실 주소를 미리 검색하면 확인이 가능합니다.배 송일이 정해져 있는 지역은 출고요일/배송요일이 표기됩니다.</p>
								</div>
								<h3 class="h-level4 ls-dot3">배송조회</h3>
								<div class="note">
									<p class="txt-type01 pdb10">신선배송 배송 특성상 일반 택배와는 달리 배송 중 위치 조회가 불가하므로 <span class="txt-bold">[마이페이지] &gt; [주문/배송내역]</span>에서 배송조회 버튼을 클릭하시면 배송당일 기사님의 번호가 제공됩 니다. (배송당일 오후 12시 전으로 배송 기사님 연락처가 업데 이트 됩니다.)</p>
									<p class="txt-type01">일반택배 배송 시 [마이페이지] &gt; [주문/배송내역] 에서 배송 조회 버튼을 클릭하시면 해당 송장번호의 택배사 배송조회 시스템으로 조회 됩니다.</p>
								</div>
								<h3 class="h-level4 ls-dot3">계근정산/예치금 안내</h3>
								<div class="note">
									<p class="txt-type01 pdb10">계근이란? 사전적인 의미로 ‘어떤 물건의 무게를 달아 근량을 달다’라는 뜻으로 축산물 시장에서는 상품의 실제 무게(실중량) 을 의미합니다.</p>
									<p class="txt-type01 pdb10">계근정산은 주문하신 상품이 출고되면서 실제 중량을 측정하 게 되는데 이때 주문하신 중량보다 출고되는 중량이 작거나 클때 발생되는 정산으로 일반적인 거스름 돈 또는 추가 결제를 의미 합니다.</p>
									<p class="txt-type01 pdb10">예치금은 계근정산(거스름돈)후 발생하는 금액으로써 중량측 정결과 상품의 실제중량이 주문중량보다 작으면, <span class="txt-bold">차액을 예치 금으로 환불되고 주문중량보다 크면 예치금에서 차감</span>됩니다. (예치금이 마이너스가 되면, 다음 구매시 자동상환합니다.)</p>
									<p class="txt-type01">예치금은 다음 구매 시 결제수단으로 사용하시거나, 출금하실 수 있습니다.</p>
								</div>
								<h3 class="h-level4 ls-dot3">교환/ 반품/ 환불 안내</h3>
								<div class="note">
									<p class="txt-type02">반품/교환 회수</p>
									<p class="txt-num num01">반품/교환 시 미트박스 상담원과 통화 후 반품 접수를 해주셔야 하며 반품 접수 없이 임의로 반송했을 경우 환불이 불가하오니 유의하시기 바랍니다.</p>
									<p class="txt-num num02 pdb10">신선상품을 제외한 가공품의 경우 단순변심으로도 상품을 받은 일로부터 7일이내 교환, 반품 가능(배송비 구매자 부담)</p>
									<p class="txt-type02">상품 품질 불량 시 처리 절차</p>
									<p class="pdb10">상품 개봉 즉시 불량 샹품 사진과 거래명세서, 품질 불량내역을 이메일 또는 핸드폰으로 미트박스 고객센터로 보냅니다.(품질 불량으로 인한 교환/ 환불 배송비는 발생되지 않습니다.)</p>
									<p class="txt-type02">반품/교환 시 주의사항</p>
									<p>※ 식육 제품 특성 상 다음에 해당하는 경우는 <span class="txt-red">절대 교환/반품이 불가하오니 유의</span>하시기 바랍니다.</p>
									<p class="txt-num num01">구매자 책임있는 사유로 상품가치가 감소하거나 훼손된 경우</p>
									<p class="txt-num num02">구매자의 사용/소비/박스 분실로 인하여 상품의 가치가 감소한 경우</p>
									<p class="txt-num num03">보관 상태가 유지되지 않아 상품가치가 감소한 경우</p>
									<p class="txt-num num04">시간 경과에 의해 판매자가 재 판매시 손실이 발생할 경우</p>
									<p class="txt-num num05">제품의 하자를 제외한 구매자의 단순 변심, 주소 오류, 연락 두절로 인한 경우</p>
									<p class="txt-num num06 pdb10">제품의 특성 상 사진과 약간의 차이가 발생할 수 있습니다.</p>
									<p class="txt-type02">취소안내</p>
									<p>저희 미트박스는 상품 결제 후 구매내역의 주문상태가 주문완료 상태일때 취소가 가능하며 <span class="txt-red">출고중/배송중인 경우 취소가 절대 불가능</span>합니다.</p>
								</div>
								<h3 class="h-level4 ls-dot3">현금영수증 발급 / 신청 안내</h3>
								<div class="note">
									<p class="txt-type01 pdb10">현금영수증은 할인액, 쿠폰 등 비현금성 결제액을 모두 제외하고, 해당 상품의 판매가와 배송비를 기준으로 발급되며, 발급 을 원하실 경우 주문시 구매 페이지에서 신청해주셔야합니다.</p>
									<p class="txt-type01 pdb10">이 영수증은 조세특례제한법 제 126조 3항에 의거 연말 정산시 소득 공제 혜택 부여 목적으로 실 판매자 명의로 발행됩니다. (국세청 사이트 회원가입 필수)</p>
									<p class="txt-type01 pdb10">현금영수증은 국세청으로 자동 전송되며 익일부터 국세청 사이트에서 조회 가능합니다.</p>
									<p class="txt-type01">본 영수증은 국세청 사이트 (http://www.hometax.go.kr) 에서 수시 조회가 가능하며, 최종적인 발급 여부 결정과 정보 관리를 국세청에서 담당합니다.</p>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>

		</div>

		
	)

	
}

export default Detail;