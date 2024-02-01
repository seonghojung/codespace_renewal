"use client";

import styled from "styled-components";
import CarouselSwiper, { HorizontalImage, VerticalImage } from "../components/Swiper";
import { Layout } from "../components/navigation";
import swiper0 from "../../../public/images/home/swiper_0.png";
import swiper1 from "../../../public/images/home/swiper_1.png";
import swiper2 from "../../../public/images/home/swiper_2.png";
import swiper3 from "../../../public/images/home/swiper_3.png";
import swiper4 from "../../../public/images/home/swiper_4.png";
import swiper5 from "../../../public/images/home/swiper_5.png";

const Title = styled.p`
  max-width: 450px;
  font-size: 46px;
  font-weight: 600;
  line-height: 1.14;
  color: #050411;
  text-align: center;
  @media (min-width: 768px) {
    max-width: none;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  margin-top: 120px;
`;

const images = [
  <HorizontalImage alt="swiper0" src={swiper0} key={0} />,
  <VerticalImage alt="swiper1" src={swiper1} key={1} />,
  <HorizontalImage alt="swiper2" src={swiper2} key={2} />,
  <VerticalImage alt="swiper3" src={swiper3} key={3} />,
  <HorizontalImage alt="swiper4" src={swiper4} key={4} />,
  <VerticalImage alt="swiper5" src={swiper5} key={5} />,
];

const MainSwiper = () => {
  return (
    <Layout>
      <Container>
        <TitleWrap>
          <Title>CODESPACE IS LOCATED IN SEOUL</Title>
        </TitleWrap>
        <CarouselSwiper items={images} />
      </Container>
    </Layout>
  );
};

export default MainSwiper;
