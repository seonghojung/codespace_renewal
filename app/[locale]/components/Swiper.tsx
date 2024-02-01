import styled from "styled-components";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import swiper0 from "../../../public/images/home/swiper_0.png";
import swiper1 from "../../../public/images/home/swiper_1.png";
import swiper2 from "../../../public/images/home/swiper_2.png";
import swiper3 from "../../../public/images/home/swiper_3.png";
import swiper4 from "../../../public/images/home/swiper_4.png";
import swiper5 from "../../../public/images/home/swiper_5.png";
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
const VerticalImage = styled(DefaultImage)`
  width: 234px;
  height: 300px;
  @media (min-width: 768px) {
    width: 420px;
    height: 540px;
  }
`;
const HorizontalImage = styled(DefaultImage)`
  width: 300px;
  height: 234px;
  @media (min-width: 768px) {
    width: 540px;
    height: 420px;
  }
`;

const images = [
  <HorizontalImage alt="swiper0" src={swiper0} key={0} />,
  <VerticalImage alt="swiper1" src={swiper1} key={1} />,
  <HorizontalImage alt="swiper2" src={swiper2} key={2} />,
  <VerticalImage alt="swiper3" src={swiper3} key={3} />,
  <HorizontalImage alt="swiper4" src={swiper4} key={4} />,
  <VerticalImage alt="swiper5" src={swiper5} key={5} />,
];

const SwiperStyle = styled(Swiper)`
  margin-top: 80px;
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

const CarouselSwiper = ({ items }: { items: string[] }) => {
  return (
    <SwiperStyle
      slidesPerView={"auto"}
      autoplay={{
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      }}
      speed={6000}
      loop
      modules={[Autoplay]}
    >
      {images.map((image, index) => {
        return <SwiperSlide key={index}>{image}</SwiperSlide>;
      })}
    </SwiperStyle>
  );
};

export default CarouselSwiper;
