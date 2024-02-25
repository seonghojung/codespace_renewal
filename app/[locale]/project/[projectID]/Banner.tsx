"use client";

import styled from "styled-components";
import { Layout } from "../../components/navigation";
import { Description } from "./TopContent";

const Container = styled.article`
  padding-top: 60px;
  @media (min-width: 768px) {
    padding-top: 80px;
  }
  @media (min-width: 1280px) {
    padding-top: 146px;
  }
  @media (min-width: 1920px) {
    padding-top: 190px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -1.04px;
  text-align: left;
  color: #050411;
  word-break: keep-all;
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
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: -0.78px;
  color: #050411;
  white-space: pre-wrap;
  word-break: keep-all;
  @media (min-width: 768px) {
    margin-top: 24px;
    font-size: 40px;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.48px;
  }
  @media (min-width: 1280px) {
    margin-top: 32px;
  }

  @media (min-width: 1920px) {
    font-size: 32px;
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
