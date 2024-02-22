import styled from "styled-components";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const DefaultImage = styled(Image)`
  display: block;
  object-fit: cover;
`;

export const Slide1 = styled(DefaultImage)`
  width: 246px;
  height: 246px;
  @media (min-width: 768px) {
    width: 256px;
    height: 256px;
  }
  @media (min-width: 1280px) {
    width: 422px;
    height: 422px;
  }
  @media (min-width: 1920px) {
    width: 574px;
    height: 574px;
  }
`;
export const Slide2 = styled(DefaultImage)`
  width: 246px;
  height: 197px;
  @media (min-width: 768px) {
    width: 256px;
    height: 205px;
  }
  @media (min-width: 1280px) {
    width: 422px;
    height: 338px;
  }
  @media (min-width: 1920px) {
    width: 574px;
    height: 460px;
  }
`;
export const Slide3 = styled(DefaultImage)`
  width: 246px;
  height: 307px;
  @media (min-width: 768px) {
    width: 256px;
    height: 320px;
  }
  @media (min-width: 1280px) {
    width: 422px;
    height: 527px;
  }

  @media (min-width: 1920px) {
    width: 574px;
    height: 720px;
  }
`;

export const VerticalImage = styled(DefaultImage)`
  width: 234px;
  height: 300px;
  @media (min-width: 768px) {
    width: 420px;
    height: 540px;
  }
`;
export const HorizontalImage = styled(DefaultImage)`
  width: 300px;
  height: 234px;
  @media (min-width: 768px) {
    width: 540px;
    height: 420px;
  }
`;

const SwiperStyle = styled(Swiper)`
  .swiper-wrapper {
    -webkit-transition-timing-function: linear !important;
    -o-transition-timing-function: linear !important;
    transition-timing-function: linear !important;
    display: flex;
    align-items: center;
    .swiper-slide {
      width: auto;
      margin-left: 20px;

      @media (min-width: 768px) {
        &:first-child {
          margin-left: 40px;
        }
        &:not(:first-child) {
          margin-left: 60px;
        }
      }
      @media (min-width: 1280px) {
        &:first-child {
          margin-left: 0px;
        }
        &:not(:first-child) {
          margin-left: 0px;
        }
        padding: 0 32px;
      }
      @media (min-width: 1920px) {
        padding: 0 40px;
      }
    }
  }
`;

const PrevBtn = styled.button`
  display: none;
  position: absolute;
  top: 0;
  z-index: 5;
  width: 30%;
  height: 100%;
  @media (min-width: 1280px) {
    display: block;
    &&& {
      cursor: url("/svgs/arrow-left.svg"), auto;
    }
  }
`;

const NextBtn = styled.button`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  width: 30%;
  height: 100%;

  @media (min-width: 1280px) {
    display: block;
    &&& {
      cursor: url(/svgs/arrow-right.svg), auto;
    }
  }
`;

const CarouselSwiper = ({ items }: { items: any[] }) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [innerWidth, setInnerWidth] = useState(0);
  const [isPrevHovering, setIsPrevHovering] = useState(false);
  const [isNextHovering, setIsNextHovering] = useState(false);

  useEffect(() => {
    const browserWidth = window.innerWidth;
    setInnerWidth(browserWidth);
  }, []);

  // Prev 버튼에 대한 이벤트 처리
  const prevHoverHandler = () => {
    if (innerWidth > 1279) {
      setIsPrevHovering(true);
    }
  };

  const unPrevhoverHandler = () => {
    setIsPrevHovering(false);
  };

  useEffect(() => {
    let interval: any;

    if (isPrevHovering) {
      interval = setInterval(() => {
        if (!swiperRef.current) {
          return;
        }
        swiperRef.current.slidePrev(600);
      }, 1);
    }
    return () => clearInterval(interval);
  }, [isPrevHovering]);

  // Next 버튼에 대한 이벤트 처리
  const nextHoverHandler = () => {
    if (innerWidth > 1279) {
      setIsNextHovering(true);
    }
  };

  const unNexthoverHandler = () => {
    setIsNextHovering(false);
  };

  useEffect(() => {
    let interval: any;

    if (isNextHovering) {
      interval = setInterval(() => {
        if (!swiperRef.current) {
          return;
        }
        swiperRef.current.slideNext(700);
      }, 1);
    }
    return () => clearInterval(interval);
  }, [isNextHovering]);

  useEffect(() => {
    if (innerWidth > 1279) {
      if (swiperRef.current) {
        swiperRef.current.allowTouchMove = false;
      }
    }
  }, []);

  return (
    <>
      <SwiperStyle
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={"auto"}
        loop
      >
        {items.map((item, index) => {
          return <SwiperSlide key={index}>{item}</SwiperSlide>;
        })}
      </SwiperStyle>
      <PrevBtn type="button" onMouseEnter={prevHoverHandler} onMouseLeave={unPrevhoverHandler}></PrevBtn>
      <NextBtn type="button" onMouseEnter={nextHoverHandler} onMouseLeave={unNexthoverHandler}></NextBtn>
    </>
  );
};

export default CarouselSwiper;
