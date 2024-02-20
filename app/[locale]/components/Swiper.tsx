import styled from "styled-components";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
const DefaultImage = styled(Image)`
  border-radius: 12px;
  display: block;
  object-fit: contain;
  margin-right: 33px;
  @media (min-width: 768px) {
    margin-right: 60px;
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
  /* margin-top: 40px; */
  .swiper-wrapper {
    -webkit-transition-timing-function: linear !important;
    -o-transition-timing-function: linear !important;
    transition-timing-function: linear !important;
    display: flex;
    align-items: center;
    .swiper-slide {
      width: auto;
    }
  }
`;

const CarouselSwiper = ({ items }: { items: any[] }) => {
  return (
    <SwiperStyle slidesPerView={"auto"} loop modules={[Autoplay]}>
      {items.map((item, index) => {
        return <SwiperSlide key={index}>{item}</SwiperSlide>;
      })}
    </SwiperStyle>
  );
};

export default CarouselSwiper;
