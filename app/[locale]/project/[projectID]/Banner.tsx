"use client";

import styled from "styled-components";
import { Layout } from "../../components/navigation";
import { Description } from "./TopContent";

const Section = styled.section`
  padding-top: 124px;
  @media (min-width: 768px) {
    padding-top: 170px;
  }
  @media (min-width: 1280px) {
    padding-top: 256px;
  }
  @media (min-width: 1920px) {
    padding-top: 300px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -1.04px;
  text-align: left;
  color: #050411;
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
  font-size: 18px;
  font-weight: 500;
  line-height: 1.39;
  letter-spacing: -0.04px;
  color: #050411;
  @media (min-width: 768px) {
    margin-top: 24px;
    font-size: 20px;
    letter-spacing: -0.06px;
  }

  @media (min-width: 1280px) {
    margin-top: 32px;
    font-size: 28px;
    letter-spacing: -0.08px;
  }

  @media (min-width: 1920px) {
    font-size: 32px;
    letter-spacing: -0.16px;
  }
`;

const Banner = ({ title, subTitle, description }: { title: string; subTitle: string; description: string }) => {
  return (
    <Section>
      <Layout>
        <Title>{title}</Title>
        <Subtitle>{subTitle}</Subtitle>
        <Description>{description}</Description>
      </Layout>
    </Section>
  );
};
export default Banner;
