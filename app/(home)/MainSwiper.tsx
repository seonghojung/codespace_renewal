"use client";

import styled from "styled-components";
import SwiperCarousel from "./SwiperCarousel";

const MainSwiper = ({ slideImgs }: any) => {
  return (
    <>
      <SwiperTitleWrap>
        <SwiperTitle>
          CODESPACE
          <br />
          BASE IN SEOUL
        </SwiperTitle>
      </SwiperTitleWrap>
      <SwiperCarousel slideImgs={slideImgs} />
    </>
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
