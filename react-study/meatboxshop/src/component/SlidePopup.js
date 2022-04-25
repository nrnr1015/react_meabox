import React, {useState, useEffect} from 'react';
import $ from "jquery";
function SlidePopup(){

	setTimeout(function() {
		$('.SlidePopup').addClass('show');
	}, 0);

	setTimeout(function() {
		$('.SlidePopup .CloseBtn').on('click',function () {
			$('.SlidePopup').removeClass('show');
			$('.Dim').fadeOut()
		});
	}, 0);
	  
	// useEffect(()=>{
		
	// 	// $(window).load(function(){
	// 	// 	$(".SlidePopup").css({"margin-right": '200px'});
	// 	//  });
	// })
	return(
		<div className="Dim">
			<div className="SlidePopup">
				<img src="https://img.meatbox.co.kr/web/images/mobileTopBanner/thumb_mobileTopBannerImage20210303162131.jpg" alt="" />
				<button class="CloseBtn">닫기버튼</button>
			</div>
		</div>
	)
}

export default SlidePopup