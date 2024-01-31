"use client";

import styled from "styled-components";
import CarouselSwiper from "../components/Swiper";
import { Layout } from "../components/navigation";

// @Fixme. 이미지 경로 및 대체 텍스트 수정 */
const swiperImgs = ["a", "b", "c", "d"];

const MainSwiper = () => {
  return (
    <Layout>
      <SwiperTitleWrap>
        <SwiperTitle>
          CODESPACE
          <br />
          BASE IN SEOUL
        </SwiperTitle>
      </SwiperTitleWrap>
      <CarouselSwiper items={swiperImgs} />
    </Layout>
  );
};

export default MainSwiper;

const SwiperTitleWrap = styled.div`
  margin-top: 160px;
  margin-left: 10px;

  @media (min-width: 1200px) {
    margin-left: 120px;
  }
`;

const SwiperTitle = styled.p`
  font-size: 42px;
  font-weight: 600;
  line-height: 1.14;
  color: #000;
`;
