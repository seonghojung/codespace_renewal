import styled from "styled-components";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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
`;
export const Slide2 = styled(DefaultImage)`
  width: 246px;
  height: 197px;
  @media (min-width: 768px) {
    width: 256px;
    height: 205px;
  }
`;
export const Slide3 = styled(DefaultImage)`
  width: 246px;
  height: 307px;
  @media (min-width: 768px) {
    width: 256px;
    height: 320px;
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
    }
  }
`;

const CarouselSwiper = ({ items }: { items: any[] }) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isPrevHovering, setIsPrevHovering] = useState(false);
  const [isNextHovering, setIsNextHovering] = useState(false);

  // Prev 버튼에 대한 이벤트 처리
  const prevHoverHandler = () => {
    setIsPrevHovering(true);
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
    setIsNextHovering(true);
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

  return (
    <div style={{ position: "relative" }}>
      <SwiperStyle
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={50}
        slidesPerView={"auto"}
        loop
      >
        {items.map((item, index) => {
          return <SwiperSlide key={index}>{item}</SwiperSlide>;
        })}
      </SwiperStyle>
      <button
        type="button"
        style={{
          cursor: "url(/svgs/arrow-left.svg),auto",
          position: "absolute",
          top: "0",
          zIndex: "5",
          width: "30%",
          height: "100%",
        }}
        onMouseEnter={prevHoverHandler}
        onMouseLeave={unPrevhoverHandler}
      ></button>
      <button
        type="button"
        style={{
          cursor: "url(/svgs/arrow-right.svg),auto",
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: "5",
          width: "30%",
          height: "100%",
        }}
        onMouseEnter={nextHoverHandler}
        onMouseLeave={unNexthoverHandler}
      ></button>
    </div>
  );
};

export default CarouselSwiper;
