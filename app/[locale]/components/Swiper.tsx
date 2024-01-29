import styled from "styled-components";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SlideImgVertical = styled.img`
  border-radius: 12px;
  background-color: #d9d9d9;

  width: 234px;
  height: 300px;
  margin-right: 33px;
  @media (min-width: 1200px) {
    width: 420px;
    height: 540px;
    margin-right: 60px;
  }
`;
const SlideImgHorizontal = styled.img`
  border-radius: 12px;
  background-color: #d9d9d9;

  width: 300px;
  height: 234px;
  margin-right: 33px;
  @media (min-width: 1200px) {
    width: 540px;
    height: 420px;
    margin-right: 60px;
  }
`;

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
      {items.map((item, index) => {
        const isVertical = (index + 1) % 2 !== 0;
        return <SwiperSlide key={index}>{isVertical ? <SlideImgVertical /> : <SlideImgHorizontal />}</SwiperSlide>;
      })}
    </SwiperStyle>
  );
};

export default CarouselSwiper;
