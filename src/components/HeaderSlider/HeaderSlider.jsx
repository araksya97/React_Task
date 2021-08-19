import React from 'react';
import './HeaderSlider.css';
import SwiperCore, {Pagination,Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import sl1 from '../../img/sl4.jpg'
import sl2 from '../../img/sl2.jpg'
import sl3 from '../../img/sl3.jpg'


SwiperCore.use([Pagination,Autoplay]);

const data = [
    {
        id: 1,
        title: 'We Generate Creative & Novation Ideas',
        img: sl1
    },
    {
        id: 2,
        title: "We'r Provided  Best Digital Services",
        img: sl2
    },
    {
        id: 3,
        title: 'Best Solutions & Ideas for Your Business',
        img: sl3
    }
]
function HeaderSlider() {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination
                autoplay={{
                    delay: 3000,
                }}
            >
                {data.map(slide => (
                    <SwiperSlide
                        key={slide.id}
                    >
                        <div className="slide_img"><img src={slide.img} alt="" /></div>
                        <div className="slider_cont">
                            <div className="text">
                                {slide.title}
                            </div>
                            <div className="btn_sw">
                                <a href="###">read more</a>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </>
    )
}

export default HeaderSlider
