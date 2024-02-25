"use client";

import styled from "styled-components";
import { Layout } from "../../components/navigation";

const Section = styled.article`
  margin-top: 60px;

  @media (min-width: 1920px) {
    margin-top: 80px;
  }
`;

const ImageContainer = styled.div`
  margin-top: 60px;
  position: relative;
  width: 100%;
  background-color: #d9d9d9;
  aspect-ratio: 1;

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: auto;
    margin-left: 40px;
    margin-right: 40px;
    aspect-ratio: 688 / 390;
  }

  @media (min-width: 1280px) {
    max-width: 1130px;
    margin: 0 auto;
  }

  @media (min-width: 1920px) {
    max-width: 1536px;
  }
`;

const Container = styled.div`
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }

  @media (min-width: 1280px) {
    margin-top: 60px;
  }

  @media (min-width: 1920px) {
    margin-top: 80px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: -0.78px;
  color: #050411;
  white-space: pre-wrap;
  word-break: keep-all;
  @media (min-width: 768px) {
    font-size: 40px;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.48px;
  }

  @media (min-width: 1280px) {
    font-size: 52px;
    letter-spacing: -0.81px;
  }

  @media (min-width: 1920px) {
    /* max-width: 435px; */
    font-size: 64px;
    font-weight: 600;
    letter-spacing: -1.23px;
  }
`;
export const Description = styled.h3`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.48;
  letter-spacing: -0.03px;
  color: #000;

  @media (min-width: 1280px) {
    word-break: keep-all;
    max-width: 896px;
    margin-top: 28px;
    font-size: 22px;
    line-height: 1.35;
    letter-spacing: -0.1px;
    white-space: pre-wrap;
  }

  @media (min-width: 1920px) {
    max-width: 1080px;
    margin-top: 32px;
    font-size: 26px;
    line-height: 1.45;
    letter-spacing: -0.39px;
  }
`;

const TopContent = ({ title, description }: { title: string; description: string }) => {
  return (
    <Section>
      <ImageContainer></ImageContainer>
      <Layout>
        <Container>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Container>
      </Layout>
    </Section>
  );
};
export default TopContent;
