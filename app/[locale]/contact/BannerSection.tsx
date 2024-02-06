"use client";

import styled from "styled-components";
import firstImg from "../../../public/images/contact/first_image.png";
import secondImg from "../../../public/images/contact/second_image.png";
import Image from "next/image";
const SectionWrap = styled.section`
  display: flex;
  width: 100%;
`;
const ImgWrap = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 768px) {
  }
`;

const FirstImg = styled(Image)`
  aspect-ratio: 0.89;
  width: 100%;
  display: block;
  object-fit: cover;
  margin-right: 10px;
`;
const SecondImg = styled(Image)`
  aspect-ratio: 0.61;
  width: 100%;
  display: block;
  object-fit: cover;
`;

export const BannerSection = () => {
  return (
    <SectionWrap>
      <ImgWrap>
        <FirstImg src={firstImg} width={217} height={242} alt="" />
        <SecondImg src={secondImg} width={148} height={242} alt="" />
      </ImgWrap>
    </SectionWrap>
  );
};
