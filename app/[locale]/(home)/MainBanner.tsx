"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import LineDecorationLink from "../components/LineDecorationLink";
import mainBannerMb from "../../../public/images/main_banner_mb.png";
import mainBanner from "../../../public/images/main_banner.png";
import { useEffect, useState } from "react";
import { ITranslation } from "./page";

export const VideoLayout = styled.div`
  width: 100%;
  @media (min-width: 768px) {
  }
`;

const Section = styled.section`
  margin-top: 60px;
  width: 100%;
  @media (min-width: 768px) {
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const InfoWrap = styled.div`
  padding-top: 108px;
  padding-bottom: 108px;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    padding-top: 167px;
    padding-bottom: 167px;
  }
`;
const Title = styled.h2`
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 46px;
  font-weight: bold;
  letter-spacing: normal;
  margin-bottom: 40px;
  max-width: 315px;
  @media (min-width: 768px) {
    font-size: 74px;
    max-width: none;
  }
`;
const Description = styled.h3`
  width: 90%;
  display: none;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.28;
  color: #fff;
  text-align: center;
  word-break: keep-all;
  @media (min-width: 768px) {
    display: block;
    max-width: 840px;
  }
`;
const LinkWrap = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  a {
    font-size: 18px;
    color: white;
  }
`;

const BannerImage = styled(Image)`
  width: 100%;
  object-fit: cover;
  margin: 0 auto;
  aspect-ratio: 0.6;
  content: url("/images/main_banner_mb.png");
  @media (min-width: 768px) {
    content: url("/images/main_banner.png");
  }
`;

const MainBanner = ({ translation }: { translation: ITranslation }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <Section>
      <Container>
        <BannerImage src={windowWidth > 768 ? mainBanner : mainBannerMb} alt={"배너 이미지"} priority />
        <InfoWrap>
          <Title>Imagination into Reality</Title>
          <Description>{translation.description}</Description>
          <LinkWrap>
            <LineDecorationLink color="white">
              <Link href={"/contact"}>{translation.requestBtn}</Link>
            </LineDecorationLink>
          </LinkWrap>
        </InfoWrap>
      </Container>
    </Section>
  );
};

export default MainBanner;
