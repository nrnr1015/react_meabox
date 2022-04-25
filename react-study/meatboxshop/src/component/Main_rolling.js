import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { 
    Navigation, 
    Pagination, 
    Scrollbar, 
    Autoplay,
    A11y 
  } from "swiper"; //*
  
  
  SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]); // *
function Main_rolling(){

    return(
        <Swiper 
        className="Main_rolling"
		touchMoveStopPropagation = {true}
        slidesPerView={1}
        loop = {true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false
        }}
		pagination={{ type: 'fraction', }}
                    
        >
            <SwiperSlide><img src="https://img.meatbox.co.kr/web/images/mainBanner/thumb_bannerImage2_20210223162832.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src="https://img.meatbox.co.kr/web/images/mainBanner/thumb_bannerImage2_20210302185246.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src="https://img.meatbox.co.kr/web/images/mainBanner/thumb_bannerImage2_20210225113701.jpg" alt=""/></SwiperSlide>
      </Swiper>
    )
}

export default Main_rolling