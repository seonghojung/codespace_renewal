"use client";

import styled from "styled-components";
import { ITranslation } from "./page";
import UnderLineLinkArrow from "../components/UnderLineLinkArrow";
import { Layout } from "../components/navigation";
import Swiper from "./Swiper";

export const VideoLayout = styled.div`
  width: 100%;
  @media (min-width: 768px) {
  }
`;

const Section = styled.section`
  margin-top: 80px;
  @media (min-width: 1280px) {
    margin-top: 140px;
  }
`;

const Container = styled.div`
  background-color: #f4f5f8;
`;

const InfoWrap = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 80px;
  }
  @media (min-width: 1280px) {
    padding-top: 176px;
    padding-bottom: 120px;
  }

  @media (min-width: 1920px) {
    padding-top: 160px;
    padding-bottom: 140px;
  }
`;
const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.36px;
  color: #050411;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    letter-spacing: -0.48px;
  }

  @media (min-width: 1280px) {
    font-size: 52px;
    letter-spacing: -0.81px;
  }
`;
const TopDescription = styled.h3`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.39;
  letter-spacing: -0.04px;
  text-align: left;
  color: #050411;
  br {
    display: none;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: -0.04px;

    br {
      display: block;
    }
  }

  @media (min-width: 1280px) {
    font-size: 28px;
    letter-spacing: -0.08px;
  }

  @media (min-width: 1920px) {
    font-size: 32px;
    letter-spacing: -0.1px;
  }
`;

const BottomDescription = styled.h3`
  margin-top: 40px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.39;
  letter-spacing: -0.04px;
  color: #050411;
  br {
    display: none;
  }

  @media (min-width: 768px) {
    margin-top: 80px;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: -0.04px;

    br {
      display: block;
    }
  }

  @media (min-width: 1280px) {
    margin-top: 140px;
    font-size: 28px;
    letter-spacing: -0.08px;
  }

  @media (min-width: 1920px) {
    margin-top: 180px;
    font-size: 32px;
    letter-spacing: -0.1px;
  }
`;

const LinkWrap = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  a {
    font-size: 16px;
    line-height: 1.45;
    letter-spacing: -0.03px;
    color: #050411;
  }

  @media (min-width: 768px) {
    margin-top: 40px;
  }
  @media (min-width: 1280px) {
    margin-top: 60px;
    a {
      font-size: 22px;
      line-height: 1.35;
      letter-spacing: -0.1px;
    }
  }
  @media (min-width: 1920px) {
    margin-top: 40px;
    a {
      font-size: 26px;
      line-height: 1.45;
      letter-spacing: -0.14px;
    }
  }
`;

const MainBanner = ({ translation }: { translation: ITranslation }) => {
  return (
    <Section>
      <Container>
        <InfoWrap>
          <Layout>
            <Title>
              Imagination
              <br />
              into Reality
            </Title>
            <TopDescription>{translation.topDescription}</TopDescription>
          </Layout>
          <Swiper />
          <Layout>
            <BottomDescription>{translation.bottomDescription}</BottomDescription>
            <LinkWrap>
              <UnderLineLinkArrow href="/contact">{translation.requestBtn}</UnderLineLinkArrow>
            </LinkWrap>
          </Layout>
        </InfoWrap>
      </Container>
    </Section>
  );
};

export default MainBanner;
