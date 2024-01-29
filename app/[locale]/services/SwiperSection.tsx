"use client";

import { styled } from "styled-components";
import "swiper/css";
import CarouselSwiper from "../components/Swiper";

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

const SwiperItems = ["A", "B", "C", "D"];

const SwiperSection = () => {
  return (
    <SectionWrap>
      <h2>
        플랫폼 비즈니스의 시작 <br />
        코드스페이스와 함께하세요
      </h2>
      <CarouselSwiper items={SwiperItems} />
    </SectionWrap>
  );
};
export default SwiperSection;
