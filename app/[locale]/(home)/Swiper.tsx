"use client";

import styled from "styled-components";
import CarouselSwiper from "../components/Swiper";
import { Layout } from "../components/navigation";

// @Fixme. 이미지 경로 및 대체 텍스트 수정 */
const swiperImgs = ["a", "b", "c", "d"];

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
const MainSwiper = () => {
  return (
    <Layout>
      <Container>
        <TitleWrap>
          <Title>CODESPACE IS LOCATED IN SEOUL</Title>
        </TitleWrap>
        <CarouselSwiper items={swiperImgs} />
      </Container>
    </Layout>
  );
};

export default MainSwiper;
