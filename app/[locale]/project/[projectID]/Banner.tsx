"use client";

import styled from "styled-components";
import { Layout } from "../../components/navigation";
import { fadeInAndUp, fadeInAndUp2Sec } from "../../animations/fadeInAndUp";

const Container = styled.article`
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1920px) {
  }
`;

const Title = styled.h2`
  opacity: 0;
  font-size: 40px;
  font-weight: bold;
  line-height: 1.4; // 1.1;
  letter-spacing: -1.04px;
  text-align: left;
  color: #050411;
  word-break: keep-all;
  ${fadeInAndUp}
  @media (min-width: 768px) {
    font-size: 52px;
    letter-spacing: -1.35px;
  }

  @media (min-width: 1280px) {
    font-size: 74px;
    letter-spacing: -2.19px;
  }

  @media (min-width: 1920px) {
    font-size: 86px;
    letter-spacing: -2.96px;
  }
`;
const Subtitle = styled.h3`
  opacity: 0;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4; // 25px;
  color: #050411;
  white-space: pre-wrap;
  word-break: keep-all;
  ${fadeInAndUp2Sec}
  @media (min-width: 768px) {
    margin-top: 24px;
    font-size: 20px;
    line-height: 1.4; // 28px;
  }
  @media (min-width: 1280px) {
    margin-top: 32px;
    font-size: 28px;
    line-height: 1.4; // 39.2px;
  }

  @media (min-width: 1920px) {
    font-size: 32px;
    line-height: 1.4; // 44.6px;
  }
`;

const Description = styled.h3`
  opacity: 0;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4; // 1.48;
  letter-spacing: -0.03px;
  color: #000;
  ${fadeInAndUp2Sec}
  @media (min-width: 1280px) {
    word-break: keep-all;
    max-width: 896px;
    margin-top: 28px;
    font-size: 22px;
    line-height: 1.4; // 1.35;
    letter-spacing: -0.1px;
    white-space: pre-wrap;
  }

  @media (min-width: 1920px) {
    max-width: 1080px;
    margin-top: 32px;
    font-size: 26px;
    line-height: 1.4; // 1.45;
    letter-spacing: -0.39px;
  }
`;

const Banner = ({ title, subTitle, description }: { title: string; subTitle: string; description: string }) => {
  return (
    <Container>
      <Layout>
        <Title>{title}</Title>
        <Subtitle>{subTitle}</Subtitle>
        <Description>{description}</Description>
      </Layout>
    </Container>
  );
};
export default Banner;
