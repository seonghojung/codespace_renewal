"use client";

import styled from "styled-components";
import firstImg from "../../../public/images/contact/first_image@768.png";
import secondImg from "../../../public/images/contact/second_image@768.png";
import Image from "next/image";
const SectionWrap = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 768px) {
    width: 95%;
    max-width: 1536px;
    margin: 0 auto;
  }
`;

const FirstImg = styled(Image)`
  width: 57.8666666%;
  height: 100%;
  aspect-ratio: 0.896694214876033;
  display: block;
  object-fit: cover;
  margin-right: 10px;
  max-height: 400px;
  @media (min-width: 768px) {
    max-height: 400px;
  }
`;

const SecondImg = styled(Image)`
  width: 39.4666666%;
  height: 100%;
  aspect-ratio: 0.611570247933884;
  display: block;
  object-fit: cover;
  max-height: 400px;
  @media (min-width: 768px) {
    max-height: 400px;
  }
`;

export const BannerSection = () => {
  return (
    <SectionWrap>
      <FirstImg src={firstImg} width={1263} height={1200} alt="" />
      <SecondImg src={secondImg} width={921} height={1200} alt="" />
    </SectionWrap>
  );
};
