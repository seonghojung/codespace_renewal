"use client";

import { styled } from "styled-components";
import "swiper/css";
import CarouselSwiper, { HorizontalImage, VerticalImage } from "../components/Swiper";

const SectionWrap = styled.section`
  padding-bottom: 160px;
  h2 {
    color: #000;
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    line-height: 38px;
  }
  @media (min-width: 1200px) {
    h2 {
      font-size: 42px;
      line-height: 48px;
    }
  }
`;

// const images = [
//   <HorizontalImage alt="swiper0" src={swiper0} key={0} />,
//   <VerticalImage alt="swiper1" src={swiper1} key={1} />,
//   <HorizontalImage alt="swiper2" src={swiper2} key={2} />,
//   <VerticalImage alt="swiper3" src={swiper3} key={3} />,
//   <HorizontalImage alt="swiper4" src={swiper4} key={4} />,
//   <VerticalImage alt="swiper5" src={swiper5} key={5} />,
// ];
const SwiperSection = () => {
  return (
    <SectionWrap>
      <h2>
        플랫폼 비즈니스의 시작 <br />
        코드스페이스와 함께하세요
      </h2>
      {/* <CarouselSwiper items={images} /> */}
    </SectionWrap>
  );
};
export default SwiperSection;
