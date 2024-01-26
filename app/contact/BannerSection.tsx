"use client";

import styled from "styled-components";

const SectionWrap = styled.section`
  @media (min-width: 1200px) {
    padding: 0px 100px;
    display: flex;
    gap: 40px;
  }
`;
const FirstImg = styled.img`
  padding-left: 10px;
  object-fit: cover;
  display: block;
  width: 100%;
  height: 400px;
  @media (min-width: 1200px) {
    padding-left: 0px;
    height: 400px;
    flex: 2.1;
  }
`;
const SecondImg = styled.img`
  padding-left: 10px;
  object-fit: cover;
  display: block;
  margin-top: 10px;
  width: 100%;
  height: 242px;
  @media (min-width: 1200px) {
    padding-left: 0px;
    margin-top: 0px;
    height: 400px;
    flex: 1;
  }
`;
export const BannerSection = () => {
  return (
    <SectionWrap>
      <FirstImg src="/images/contact/first_image.png" />
      <SecondImg src="/images/contact/second_image.png" />
    </SectionWrap>
  );
};
