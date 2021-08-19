import React from 'react';
import './InfiniteSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import SwiperCore, { Autoplay } from 'swiper';

import sl1 from './img_infinite/1.jpg'
import sl2 from './img_infinite/2.jpg'
import sl3 from './img_infinite/3.jpg'
import sl4 from './img_infinite/4.jpg'
import sl5 from './img_infinite/5.jpg'
import sl6 from './img_infinite/6.jpg'
import sl7 from './img_infinite/7.jpg'
import sl8 from './img_infinite/8.jpg'




function InfiniteSlider() {
    SwiperCore.use([Autoplay])
    return (
        <>
            <Swiper
                spaceBetween={20}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 2000,
                }}
                breakpoints={{
                    400: {
                        width: 400,
                        slidesPerView: 3
                    },
                    550: {
                        width: 550,
                        slidesPerView: 4
                    },
                    768: {
                        width: 768,
                        slidesPerView: 5
                    },
                    1000: {
                        width: 1000,
                        slidesPerView: 6
                    }
                }}
            >
                <div className={"js-infinite-slider"}>
                    <div className={"swiper-wrapper js_wrapper"}>
                        <SwiperSlide className={"swiper-slide"}>
                                <img src={sl1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={"swiper-slide"}>
                                <img src={sl2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={"swiper-slide"}>
                                <img className={"for_padd"} src={sl4} alt="" />
                                <img src={sl3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={"swiper-slide"}>
                                <img src={sl5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={"swiper-slide"}>
                                <img src={sl6} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={"swiper-slide"}>
                                <img src={sl1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={"swiper-slide"}>
                                <img className={"for_padd"} src={sl7} alt="" />
                                <img src={sl8} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className={"swiper-slide"}>
                                <img src={sl5} alt="" />
                        </SwiperSlide>


                    </div>
                </div>



            </Swiper>
        </>
    )
}

export default InfiniteSlider
