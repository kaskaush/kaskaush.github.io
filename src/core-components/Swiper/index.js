import React from 'react';
import { Swiper } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, A11y } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

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
