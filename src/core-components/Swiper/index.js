import React from 'react';
import { Swiper } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, A11y]);

const CustomSwiper = ({ children }) => {
    return (
        <Swiper
            watchOverflow
            spaceBetween={0}
            effect="coverflow"
            simulateTouch
            freeMode
            observer
            coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            slidesPerView="auto"
            centeredSlides
            className="custom-swiper"
            mousewheel={{
                releaseOnEdges: true,
            }}
        >
            {children}
        </Swiper>
    );
};

export default CustomSwiper;
