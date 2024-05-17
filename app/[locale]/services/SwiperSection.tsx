"use client";

import { styled } from "styled-components";
import "swiper/css";
import CarouselSwiper, { HorizontalImage, VerticalImage } from "../components/Swiper";
import swiper0 from "../../../public/images/home/swiper_0.png";
import swiper1 from "../../../public/images/home/swiper_1.png";
import swiper2 from "../../../public/images/home/swiper_2.png";
import swiper3 from "../../../public/images/home/swiper_3.png";
import swiper4 from "../../../public/images/home/swiper_4.png";
import swiper5 from "../../../public/images/home/swiper_5.png";
import { ITranslation } from "../(home)/page";

const SectionWrap = styled.section`
  padding-bottom: 160px;
  h2 {
    color: #000;
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.4; // 38px;
  }
  @media (min-width: 1200px) {
    h2 {
      font-size: 42px;
      line-height: 1.4; // 48px;
    }
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
const SwiperSection = ({ translation }: { translation: ITranslation }) => {
  return (
    <SectionWrap>
      <h2>{translation.title}</h2>
      <CarouselSwiper items={images} />
    </SectionWrap>
  );
};
export default SwiperSection;
