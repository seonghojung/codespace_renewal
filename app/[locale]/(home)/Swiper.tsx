"use client";

import styled from "styled-components";
import CarouselSwiper, { HorizontalImage, Slide1, Slide2, Slide3, VerticalImage } from "../components/Swiper";
import swiper0 from "../../../public/images/home/swiper_0.png";
import swiper1 from "../../../public/images/home/swiper_1.png";
import swiper2 from "../../../public/images/home/swiper_2.png";
import swiper3 from "../../../public/images/home/swiper_3.png";
import swiper4 from "../../../public/images/home/swiper_4.png";
import swiper5 from "../../../public/images/home/swiper_5.png";

const Container = styled.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 103px;
  }

  @media (min-width: 1280px) {
    margin-top: 140px;
  }
  @media (min-width: 1920px) {
    margin-top: 180px;
  }
`;

const images = [
  <Slide1 alt="swiper0" src={swiper0} key={0} />,
  <Slide2 alt="swiper1" src={swiper1} key={1} />,
  <Slide3 alt="swiper2" src={swiper2} key={2} />,
  <Slide1 alt="swiper3" src={swiper3} key={3} />,
  <Slide2 alt="swiper4" src={swiper4} key={4} />,
  <Slide3 alt="swiper5" src={swiper5} key={5} />,
];

const MainSwiper = () => {
  return (
    <Container>
      <CarouselSwiper items={images} />
    </Container>
  );
};

export default MainSwiper;
