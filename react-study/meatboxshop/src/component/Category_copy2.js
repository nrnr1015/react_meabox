import React, {useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
import $, { css } from 'jquery';
import Depth1 from './Depth1';
import SearchBar from './SearchBar';
import axios from 'axios';

function Category() {
	useEffect(()=>{
		// $(".ty-category li").on('click',function () {
		// 	var divLoc = $('.ty-category').offset();
		// 	$('.ty-category').addClass('top').animate({
		// 	scrollTop: divLoc.top-50}, "slow");
		// });
		$(".depth1 li").on('click',function () {
			var num = $(".depth1 li").index(this);
			$(".tabContent_wrap").removeClass('active');
			$(".tabContent_wrap").eq(num).addClass('active');
			$(".depth1 li").removeClass('active');
			$(this).addClass('active')
			$(".depth2 li:first-child").addClass('active')
		});
	
		$(".depth2 li").on('click',function () {
			var num = $(".depth2 li").index(this);
			$(".depth3").removeClass('active');
			$(".depth3").eq(num).addClass('active');
			$(".depth2 li").removeClass('active');
			$(this).addClass('active')
		});

		$(document).ready(function(){
			var $menu     = $('.ctg_fixed li'),
				$contents = $('.itemCtg_box'),
				$doc      = $('html, body');
				
			//첫번쨰 요소는 항상 불이 들어옴
			$('.ctg_fixed li:first-child').addClass('on');
			// 클릭하면 요소 박스로
			$menu.on('click','button', function(e){
				var $target = $(this).parent(),
					idx     = $target.index(),
					section = $contents.eq(idx),
					offsetTop = section.offset().top - 100;
					$doc.stop().animate({scrollTop :offsetTop}, 0);

					$menu.removeClass('on')
					$menu.eq(idx).addClass('on');
					return false;
			});

			//스크롤하면 요소 박스로
			$(window).scroll(function(){
				var scltop = $(window).scrollTop();

				$.each($contents, function(idx, item){
					var $target   = $contents.eq(idx),
						i         = $target.index(),
						targetTop = $target.offset().top - 116;
					if(Math.round( $(window).scrollTop()) == $(document).height() - $(window).height()) {
						return;
					}
					else if (targetTop <= scltop) {
						$menu.removeClass('on');
						$menu.eq(idx).addClass('on');
					}
				})
			});
		});
		
		if($('.Category_tabs .depth1 .ty-category li').hasClass('active')){
			var manulength = $('.Category_tabs .depth1 .ty-category li.active').prevAll().length * 60;
			$('.Category_tabs .depth1 .ty-category li').parent().stop().animate({scrollLeft : manulength})
			return false;
		}

	});

	const [searchValue, setSearchValue] = useState("");

	const users = [
		{ name: "bbq", id: "1" },
		{ name: "la갈비", id: "2" },
	];
	const users2 = [
		{ name: "갈비본살", id: "3" },
		{ name: "갈비살 / 늑간살", id: "4" },
		{ name: "등심", id: "5" },
		{ name: "안심", id: "6" },
	];

	const filterNames = ({ name }) => {
		return name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
	};
	
	// const getCategory = async () => {
	// 	const res = await axios({
	// 		url: 'https://dev-m2.meatbox.co.kr/mo/product/categoryItemListPage.json?categorySeq=10000',
	// 		methor: 'get',
	// 		headers: {withCredentials: true, 'Access-Control-Allow-Origin' : '*'}, 
			
	// 	})
	// 	console.log(res)
	// }
	
	 function getCategory() {
		axios.get('https://e582500e-aec8-4a8a-83c9-f9859b772a8d.mock.pstmn.io/category')
		.then(function (response) {
			// handle success
			console.log('response', response);
			console.log('response1', response.data.data.categoryList[0].itemCatName);
			
			
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.then(function () {
			// always executed
		});

	};

	return(
		
		<div className="Category">
			<div className="Category_tabs"> 
       
				<div id="tabs">

					<div className="tab depth1">
						<Depth1></Depth1>
					</div>

					<div className="tabContent tabContent_wrap active">
						<div className="tabContentInner">
							<div className="monthly">

								<ul className="tab2 depth2">
									<li  className="active"><span>한우암소</span></li>
									<li><span>한우거세</span></li>
									<li><span>한우수소</span></li>
									<li><span>육우암소</span></li>
									<li><span>육우거세</span></li>
								</ul>
								
								<div className="depth3_wrap">
									<div className="tabContent2 depth3 active">
									<div className="newCtg_page">
										<h2 className="h-level1">dd</h2>
														
										<SearchBar onSearch={setSearchValue} value={searchValue} />
										<div className="ctg_fixed">
										<button type="button" onClick={getCategory}>버튼버튼</button>	
											<ul>
												<li><button type="button">ABC</button></li>
												<li><button type="button">ㄱ</button></li> 
												<li><button type="button">ㄴ</button></li>
												<li><button type="button">ㄷ</button></li>
												<li><button type="button">ㄹ</button></li>
												<li><button type="button">ㅁ</button></li>
												<li><button type="button">ㅂ</button></li>
												<li><button type="button">ㅅ</button></li>
												<li><button type="button">ㅇ</button></li>
											</ul>
										</div>
						
										<div className="itemCtg_wrap">
											<div className="itemCtg_box">
												<strong className="h-level1">ABC</strong>
												<ul>
													{users.filter(filterNames).map((user) => {
													return <li key={user.id}>
														<Link to="/itemProductList">{user.name}</Link>
													</li>
													})}
												</ul>
											</div>
											<div className="itemCtg_box">
												<strong className="h-level1">ㄱ</strong>
												<ul>
												{users2.filter(filterNames).map((user) => {
													return <li key={user.id}>
														<Link>{user.name}</Link>
													</li>
													})}
												</ul>
											</div>
											{/* <div className="itemCtg_box">
												<strong className="h-level1">ㄴ</strong>
												<ul>
													<li className="currut_page"><a href="javascript:;">니은</a></li>
												</ul>
											</div>
											<div className="itemCtg_box">
												<strong className="h-level1">ㄷ</strong>
												<ul>
													<li><a href="javascript:;">대창</a></li>
													<li><a href="javascript:;">대창(오픈)</a></li>
													<li><a href="javascript:;">도가니</a></li>
													<li><a href="javascript:;">뒷사태</a></li>
													<li><a href="javascript:;">대창</a></li>
													<li><a href="javascript:;">등갈비/백립</a></li>
													<li><a href="javascript:;">등심</a></li>
													<li><a href="javascript:;">떡심</a></li>
												</ul>
											</div>
											<div className="itemCtg_box">
												<strong className="h-level1">ㄹ</strong>
												<ul>
													<li><a href="javascript:;">립본</a></li>
												</ul>
											</div>
											<div className="itemCtg_box">
												<strong className="h-level1">ㅁ</strong>
												<ul>
													<li><a href="javascript:;">목뼈</a></li>
													<li><a href="javascript:;">목심</a></li>
												</ul>
											</div>
											<div className="itemCtg_box">
												<strong className="h-level1">ㅂ</strong>
												<ul>
													<li><a href="javascript:;">반골</a></li>
													<li><a href="javascript:;">백립(조각백립)</a></li>
													<li><a href="javascript:;">부채덮개살(트렌스메이저)</a></li>
													<li><a href="javascript:;">부채살</a></li>
													<li><a href="javascript:;">뽈살</a></li>
												</ul>
											</div>
											<div className="itemCtg_box">
												<strong className="h-level1">ㅅ</strong>
												<ul>
													<li><a href="javascript:;">사골</a></li>
													<li><a href="javascript:;">사골(뒤쪽사골)</a></li>
													<li><a href="javascript:;">사골(뒷왕사골)</a></li>
													<li><a href="javascript:;">사골(앞왕사골)</a></li>
													<li><a href="javascript:;">사골(앞쪽사골)</a></li>
													<li><a href="javascript:;">사태</a></li>
													<li><a href="javascript:;">살치살</a></li>
													<li><a href="javascript:;">삼겹양지</a></li>
													<li><a href="javascript:;">삼겹양지(조각)</a></li>
													<li><a href="javascript:;">설깃</a></li>
													<li><a href="javascript:;">설도</a></li>
													<li><a href="javascript:;">센터컷</a></li>
													<li><a href="javascript:;">스지</a></li>
													<li><a href="javascript:;">스지(뒷스지)</a></li>
													<li><a href="javascript:;">스페어립</a></li>
												</ul>
											</div> 
											<div className="itemCtg_box">
												<strong className="h-level1">ㅇ</strong>
												<ul>
													<li><a href="javascript:;">사골</a></li>
												</ul>
											</div> */}


										</div>
									</div>
									</div>
									<div className="tabContent2 depth3">
										<p>2</p>
									</div>
									<div className="tabContent2 depth3">
										<p>3</p>
									</div>
								</div>
								
								
							</div>
						</div>
					</div>

					<div className="tabContent tabContent_wrap">
						<div className="tabContentInner">
							<div className="monthly">

								<ul className="tab2 depth2">
									<li  className="active"><span>한돈</span></li>
									<li><span>소분한돈</span></li>
									<li><span>양념 한돈</span></li>
								</ul>
								
								<div className="depth3_wrap">
									<div className="tabContent2 depth3 active">
										<p>등심</p>
									</div>
									<div className="tabContent2 depth3">
										<p>찌개</p>
									</div>
									<div className="tabContent2 depth3">
										<p>어쩌고</p>
									</div>
								</div>
								
								
							</div>
						</div>
					</div>

					<div className="tabContent tabContent_wrap">
						<div className="tabContentInner">
							<div className="monthly">

								<ul className="tab2 depth2">
									<li  className="active"><span>국산닭</span></li>
									<li><span>수입닭</span></li>
									<li><span>국산오리</span></li>
								</ul>
								
								<div className="depth3_wrap">
									<div className="tabContent2 depth3 active">
										<p>근위</p>
									</div>
									<div className="tabContent2 depth3">
										<p>날개</p>
									</div>
									<div className="tabContent2 depth3">
										<p>닭가슴살</p>
									</div>
								</div>
								
								
							</div>
						</div>
					</div>
					<div className="tabContent tabContent_wrap">
						<div className="tabContentInner">
							<div className="monthly">

								<ul className="tab2 depth2">
									<li  className="active"><span>ff</span></li>
									<li><span>5</span></li>
									<li><span>6</span></li>
								</ul>
								
								<div className="depth3_wrap">
									<div className="tabContent2 depth3 active">
										<p>등심</p>
									</div>
									<div className="tabContent2 depth3">
										<p>2</p>
									</div>
									<div className="tabContent2 depth3">
										<p>3</p>
									</div>
								</div>
								
								
							</div>
						</div>
					</div>

				</div>
      		</div>
		</div>
		
		
			
	)
}
export default Category;