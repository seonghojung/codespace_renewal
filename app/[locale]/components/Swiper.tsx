import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

import Image from "next/image";

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

const CarouselSwiper = ({ items }: { items: any[] }) => {
  return (
    <>
      <SwiperStyle
        slidesPerView={"auto"}
        freeMode={true}
        modules={[FreeMode]}
        // loop
      >
        {items.map((item, index) => {
          return <SwiperSlide key={index}>{item}</SwiperSlide>;
        })}
      </SwiperStyle>
    </>
  );
};

export default CarouselSwiper;
