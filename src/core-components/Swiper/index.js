import React, { useEffect, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { string, bool, number, oneOfType, object, func } from 'prop-types';
import SwiperRef from 'swiper';

const Swiper = ({
    direction = 'horizontal',
    loop = false,
    initialSlide = 0,
    speed = 300,
    effect = 'coverflow',
    watchOverflow = true,
    spaceBetween = 0,
    slidesPerView = 'auto',
    centeredSlides = true,
    slidesOffsetBefore = 0,
    slidesOffsetAfter = 0,
    touchRatio = 1,
    simulateTouch = true,
    freeMode = true,
    observer = true,
    nextEl = true,
    prevEl = true,
    scrollEl = null,
    draggable = false,
    paginationEl = '.swiper-pagination',
    paginationType = 'bullets',
    parentContainerClass = '',
    prevSlideMessage = 'Previous slide',
    nextSlideMessage = 'Next slide',
    observeSlideChildren = true,
    allowTouchMove = true,
    breakpointsInverse = false,
    breakpoint = {},
    slideToClickedSlide = false,
    watchSlidesVisibility = true,
    autoHeight = true,
    noSwiping = false,
    noSwipingClass = 'swiper-no-swiping',
    loopedSlides = null,
    rightArrow = <FontAwesomeIcon size="3x" icon="chevron-right" />,
    leftArrow = <FontAwesomeIcon size="3x" icon="chevron-left" />,
    onNextClick = () => {},
    onPrevClick = () => {},
    children = null,
}) => {
    let swiper;
    const containerRef = createRef();
    const prevElClassName = 'swiper-button-prev';
    const nextElClassName = 'swiper-button-next';

    useEffect(() => {
        if (swiper) {
            swiper.update();
        }
    }, [swiper]);

    useEffect(() => {
        if (swiper) {
            swiper.destroy(true, true);
        }

        init();
    }, []);

    const init = () => {
        // ref target is necessary when  multiple carousal used  in same page
        swiper = new SwiperRef(containerRef.current, {
            navigation: {
                nextEl: nextEl ? `.${nextElClassName}` : null,
                prevEl: prevEl ? `.${prevElClassName}` : null,
            },
            scrollbar: {
                el: scrollEl,
                draggable: draggable,
            },
            pagination: {
                el: paginationEl,
                type: paginationType,
                dynamicBullets: true,
            },
            a11y: {
                enabled: true,
                prevSlideMessage: prevSlideMessage,
                nextSlideMessage: nextSlideMessage,
            },
            mousewheel: {
                forceToAxis: true,
                invert: true,
            },
            breakpointsInverse: breakpointsInverse,
            breakpoint: breakpoint,
            init: true,
            direction: direction,
            loop: loop,
            parentContainerClass: parentContainerClass,
            initialSlide: initialSlide,
            speed: speed,
            effect: effect,
            watchOverflow: watchOverflow,
            spaceBetween: spaceBetween,
            slidesPerView: slidesPerView,
            centeredSlides: centeredSlides,
            slidesOffsetBefore: slidesOffsetBefore,
            slidesOffsetAfter: slidesOffsetAfter,
            touchRatio: touchRatio,
            simulateTouch: simulateTouch,
            freeMode: freeMode,
            observer: observer,
            observeSlideChildren: observeSlideChildren,
            allowTouchMove: allowTouchMove,
            slideToClickedSlide: slideToClickedSlide,
            watchSlidesVisibility: watchSlidesVisibility,
            preventClicks: true,
            noSwiping: noSwiping,
            noSwipingClass: noSwipingClass,
            roundLengths: true,
            loopedSlides: loopedSlides,
            coverflowEffect: {
                rotate: 20,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
            },
            grabCursor: true,
            keyboard: {
                enabled: true,
            },
            autoHeight: autoHeight,
        });
    };

    return (
        <div className={`${parentContainerClass}`}>
            <div className={`swiper-container`} ref={containerRef}>
                {prevEl && (
                    <div className={prevElClassName} ref={(el) => (prevEl = el)} onClick={onPrevClick}>
                        <div className="swiper-grad-back swiper-grad-back--prev">{leftArrow || null}</div>
                    </div>
                )}

                {paginationEl && <div className="swiper-pagination" tabIndex="0" />}

                {nextEl && (
                    <div className={nextElClassName} ref={(el) => (nextEl = el)} onClick={onNextClick}>
                        <div className="swiper-grad-back swiper-grad-back--next">{rightArrow || null}</div>
                    </div>
                )}

                <div className="swiper-wrapper" role="list" aria-label="swiper-wrapper">
                    {children}
                </div>

                {scrollEl ? <div className="swiper-scrollbar" tabIndex="0" /> : null}
            </div>
        </div>
    );
};

Swiper.propTypes = {
    direction: string,
    loop: bool,
    initialSlide: number,
    speed: number,
    autoHeight: bool,
    effect: string,
    watchOverflow: bool,
    spaceBetween: number,
    slidesPerView: oneOfType([number, string]),
    centeredSlides: bool,
    slidesOffsetBefore: number,
    slidesOffsetAfter: number,
    touchRatio: number,
    simulateTouch: bool,
    freeMode: bool,
    observer: bool,
    nextEl: bool,
    prevEl: bool,
    scrollEl: oneOfType([object, string]),
    draggable: bool,
    paginationEl: oneOfType([object, string]),
    paginationType: string,
    parentContainerClass: string,
    prevSlideMessage: string,
    nextSlideMessage: string,
    onSlideSelect: func,
    observeSlideChildren: bool,
    allowTouchMove: bool,
    breakpointsInverse: bool,
    breakpoint: object,
    slideToClickedSlide: bool,
    watchSlidesVisibility: bool,
    noSwiping: bool,
    noSwipingClass: string,
    swiperContextCallback: func,
    gallery: bool,
    renderFraction: func,
    loopedSlides: number,
    rightArrow: object,
    leftArrow: object,
    thumbConfig: oneOfType([object, string]),
    onNextClick: func,
    onPrevClick: func,
};

export default Swiper;
